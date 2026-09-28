#!/usr/bin/env python3
"""
forms_service.py — self-hosted replacement for Formspree.

Serves POST /forms/submit, OPTIONS /forms/submit (CORS preflight) and
GET /forms/health for the emotres.com marketing site (a static Next.js
export with no server of its own). Every submission is written to a local
JSONL file FIRST (so a mail outage can never lose a lead), then an email
notification is attempted.

Python standard library only — no pip dependencies. See README.md for
install/operate instructions and forms.env.example for configuration.
"""

from __future__ import annotations

import json
import logging
import os
import re
import smtplib
import sys
import threading
import time
import uuid
from datetime import datetime, timezone
from email.message import EmailMessage
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from socketserver import BaseServer

# --------------------------------------------------------------------------
# Configuration (all from environment — see forms.env.example)
# --------------------------------------------------------------------------

PORT = int(os.environ.get("PORT", "8095"))

_default_origins = "https://emotres.com,https://www.emotres.com,http://localhost:3000"
ALLOWED_ORIGINS = {
    o.strip()
    for o in os.environ.get("ALLOWED_ORIGINS", _default_origins).split(",")
    if o.strip()
}

MAX_BODY_BYTES = 32768

RATE_LIMIT = int(os.environ.get("RATE_LIMIT", "5"))
RATE_WINDOW = int(os.environ.get("RATE_WINDOW", "3600"))

LEADS_PATH = os.environ.get("LEADS_PATH", "/srv/motres/forms/leads.jsonl")

SMTP_HOST = os.environ.get("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587"))
SMTP_USER = os.environ.get("SMTP_USER", "").strip()
SMTP_PASS = os.environ.get("SMTP_PASS", "").strip()
SMTP_NOAUTH = os.environ.get("SMTP_NOAUTH", "").strip() in ("1", "true", "True", "yes")
MAIL_TO = os.environ.get("MAIL_TO", "sales@emotres.com")
MAIL_FROM = os.environ.get("MAIL_FROM", "").strip() or SMTP_USER or MAIL_TO

# Mail sending mode, decided once at startup:
#   "auth"    — SMTP_USER + SMTP_PASS set -> STARTTLS, login, send (app password required).
#   "noauth"  — neither set but SMTP_NOAUTH=1 -> STARTTLS if offered, send with no login
#               (Google Workspace SMTP relay with the server's IP allowlisted — no secret needed).
#   "none"    — nothing configured -> leads are stored only, no mail is sent.
if SMTP_USER and SMTP_PASS:
    MAIL_MODE = "auth"
elif SMTP_NOAUTH:
    MAIL_MODE = "noauth"
else:
    MAIL_MODE = "none"

EMAIL_RE = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")
VALID_FORMS = {"contact", "quote"}
VALID_LOCALES = {"en", "zh"}

# --------------------------------------------------------------------------
# Logging — stdout only (journald captures it under systemd). Never log
# SMTP_PASS or any other secret.
# --------------------------------------------------------------------------

logging.basicConfig(
    stream=sys.stdout,
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(message)s",
)
log = logging.getLogger("forms_service")

if MAIL_MODE == "none":
    log.warning(
        "mail is NOT configured (no SMTP_USER/SMTP_PASS and SMTP_NOAUTH is not set) — "
        "leads will be stored on disk only, no email notifications will be sent"
    )
elif MAIL_MODE == "auth":
    log.info("mail mode: auth (SMTP login with app password) via %s:%s", SMTP_HOST, SMTP_PORT)
elif MAIL_MODE == "noauth":
    log.info("mail mode: noauth (IP-allowlisted relay, no login) via %s:%s", SMTP_HOST, SMTP_PORT)

# --------------------------------------------------------------------------
# Rate limiter — sliding window per client IP, in memory.
# --------------------------------------------------------------------------


class RateLimiter:
    MAX_TRACKED_IPS = 10000

    def __init__(self, limit: int, window_seconds: int):
        self.limit = limit
        self.window = window_seconds
        self._hits: dict[str, list[float]] = {}
        self._lock = threading.Lock()

    def check_and_record(self, ip: str) -> bool:
        """Returns True if this request is allowed (and records it), False if
        the IP is already at/over the limit for the current window."""
        now = time.time()
        cutoff = now - self.window
        with self._lock:
            if len(self._hits) > self.MAX_TRACKED_IPS:
                # Drop IPs whose window has fully expired, so a long bot run
                # cannot grow this dict without bound.
                self._hits = {k: v for k, v in self._hits.items() if v and v[-1] > cutoff}
            hits = [t for t in self._hits.get(ip, []) if t > cutoff]
            if len(hits) >= self.limit:
                self._hits[ip] = hits
                return False
            hits.append(now)
            self._hits[ip] = hits
            return True


rate_limiter = RateLimiter(RATE_LIMIT, RATE_WINDOW)

# --------------------------------------------------------------------------
# Lead storage — append-only JSONL, flushed + fsynced before we ever try to
# send mail, so a mail outage can never lose a lead.
# --------------------------------------------------------------------------

_storage_lock = threading.Lock()


def _ensure_leads_dir() -> None:
    d = os.path.dirname(LEADS_PATH)
    if d:
        os.makedirs(d, exist_ok=True)


def append_jsonl(record: dict) -> None:
    _ensure_leads_dir()
    line = json.dumps(record, ensure_ascii=False)
    with _storage_lock:
        with open(LEADS_PATH, "a", encoding="utf-8") as f:
            f.write(line + "\n")
            f.flush()
            os.fsync(f.fileno())


# --------------------------------------------------------------------------
# Validation
# --------------------------------------------------------------------------


def validate(data: dict) -> str | None:
    """Returns an engineer-readable error string, or None if the payload is valid."""
    form = data.get("form")
    if form not in VALID_FORMS:
        return "form must be 'contact' or 'quote'"

    name = data.get("name")
    if not isinstance(name, str) or not (1 <= len(name.strip()) <= 100):
        return "name is required and must be 1-100 characters"

    email = data.get("email")
    if not isinstance(email, str) or len(email) > 200 or not EMAIL_RE.match(email.strip()):
        return "email must be a valid address of at most 200 characters"

    subject = data.get("subject") or ""
    if not isinstance(subject, str) or len(subject) > 200:
        return "subject must be at most 200 characters"

    message = data.get("message")
    if not isinstance(message, str) or not (1 <= len(message.strip()) <= 5000):
        return "message is required and must be 1-5000 characters"

    locale = data.get("locale")
    if locale is not None and locale not in VALID_LOCALES:
        return "locale must be 'en' or 'zh' when present"

    return None


# --------------------------------------------------------------------------
# Mail
# --------------------------------------------------------------------------


def _header_safe(value: str) -> str:
    """Collapse CR/LF: a newline pasted into a name or subject would otherwise
    make the Subject header unserialisable and silently lose the notification."""
    return " ".join(value.split())


def build_message(record: dict) -> EmailMessage:
    form = record["form"]
    name = _header_safe(record["name"])
    subject_field = _header_safe(record.get("subject") or "")

    if form == "quote":
        subject_line = f"[emotres.com] Quote request — {name}"
    else:
        subject_line = f"[emotres.com] Contact — {subject_field or name}"

    # Written to be read by a human first: who wrote and what they wrote, then
    # one footer line with the bits needed to trace the lead back to
    # leads.jsonl. The date is already in the message's Date header and the
    # subject in its Subject header, so neither is repeated in the body.
    form_label = "Quote form" if form == "quote" else "Contact form"
    lang = {"en": "English", "zh": "Chinese"}.get(record.get("locale") or "en", "")
    footer = " · ".join(
        part
        for part in (
            f"{form_label} on emotres.com",
            lang,
            f"ref {record['id'][:8]}",
            f"IP {record.get('ip')}" if record.get("ip") else "",
        )
        if part
    )
    body = "\n".join(
        [
            f"{record['name']} <{record['email']}>",
            "",
            record["message"],
            "",
            "--",
            footer,
        ]
    )

    msg = EmailMessage()
    msg["Subject"] = subject_line
    msg["From"] = MAIL_FROM
    msg["To"] = MAIL_TO
    msg["Reply-To"] = record["email"]
    msg.set_content(body, charset="utf-8")
    return msg


def send_mail(record: dict) -> None:
    """Raises on failure — caller is responsible for catching and logging."""
    msg = build_message(record)
    with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=10) as smtp:
        smtp.ehlo()
        if MAIL_MODE == "auth":
            smtp.starttls()
            smtp.ehlo()
            smtp.login(SMTP_USER, SMTP_PASS)
        elif MAIL_MODE == "noauth":
            if smtp.has_extn("starttls"):
                smtp.starttls()
                smtp.ehlo()
        smtp.send_message(msg)


# --------------------------------------------------------------------------
# HTTP handler
# --------------------------------------------------------------------------


class FormsHandler(BaseHTTPRequestHandler):
    server_version = "motres-forms/1.0"
    protocol_version = "HTTP/1.1"  # every response sets Content-Length

    def log_message(self, fmt: str, *args) -> None:  # noqa: A003 - stdlib signature
        # Route the default per-request access log through our logger instead
        # of stderr, so everything lands in one place under journald.
        log.info("%s - %s", self.address_string(), fmt % args)

    # -- helpers -----------------------------------------------------------

    def _client_ip(self) -> str:
        # X-Real-IP is set by nginx from $remote_addr and the client cannot
        # forge it. X-Forwarded-For it can: nginx appends to whatever header
        # the client already sent, so the FIRST hop is attacker-controlled and
        # only the last one is ours — trusting the first would let a bot slip
        # the rate limit by rotating fake values.
        real = (self.headers.get("X-Real-IP") or "").strip()
        if real:
            return real
        xff = self.headers.get("X-Forwarded-For")
        if xff:
            last = xff.split(",")[-1].strip()
            if last:
                return last
        return self.client_address[0]

    def _origin_headers(self) -> list[tuple[str, str]]:
        origin = self.headers.get("Origin")
        headers = [("Vary", "Origin")]
        if origin and origin in ALLOWED_ORIGINS:
            headers.append(("Access-Control-Allow-Origin", origin))
        return headers

    def _send_json(self, status: int, payload: dict, extra_headers: list[tuple[str, str]] | None = None) -> None:
        body = json.dumps(payload).encode("utf-8")
        try:
            self.send_response(status)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            for k, v in self._origin_headers():
                self.send_header(k, v)
            if extra_headers:
                for k, v in extra_headers:
                    self.send_header(k, v)
            self.end_headers()
            self.wfile.write(body)
        except (BrokenPipeError, ConnectionResetError):
            pass

    # -- routes --------------------------------------------------------

    def do_OPTIONS(self) -> None:  # noqa: N802 - stdlib method name
        try:
            if self.path != "/forms/submit":
                self._send_json(404, {"ok": False, "error": "not found"})
                return
            self.send_response(204)
            for k, v in self._origin_headers():
                self.send_header(k, v)
            self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
            self.send_header("Access-Control-Allow-Headers", "Content-Type")
            self.send_header("Access-Control-Max-Age", "86400")
            self.send_header("Content-Length", "0")
            self.end_headers()
        except Exception:
            log.exception("unhandled error in OPTIONS handler")
            try:
                self._send_json(500, {"ok": False, "error": "internal error"})
            except Exception:
                pass

    def do_GET(self) -> None:  # noqa: N802
        try:
            if self.path == "/forms/health":
                self._send_json(200, {"ok": True})
                return
            self._send_json(404, {"ok": False, "error": "not found"})
        except Exception:
            log.exception("unhandled error in GET handler")
            try:
                self._send_json(500, {"ok": False, "error": "internal error"})
            except Exception:
                pass

    def do_POST(self) -> None:  # noqa: N802
        try:
            self._handle_submit()
        except Exception:
            # A worker thread must never die on an unhandled exception.
            log.exception("unhandled error in POST handler")
            try:
                self._send_json(500, {"ok": False, "error": "internal error"})
            except Exception:
                pass

    def _handle_submit(self) -> None:
        if self.path != "/forms/submit":
            self._send_json(404, {"ok": False, "error": "not found"})
            return

        ip = self._client_ip()

        length_header = self.headers.get("Content-Length")
        try:
            length = int(length_header) if length_header is not None else 0
        except ValueError:
            self._send_json(400, {"ok": False, "error": "invalid Content-Length"})
            return

        if length > MAX_BODY_BYTES:
            # Drain and discard so the connection can be reused/closed cleanly.
            self.rfile.read(length)
            self._send_json(400, {"ok": False, "error": "request body too large (max 32768 bytes)"})
            return

        raw = self.rfile.read(length) if length > 0 else b""

        if not rate_limiter.check_and_record(ip):
            self._send_json(429, {"ok": False, "error": "rate_limited"})
            return

        try:
            data = json.loads(raw.decode("utf-8")) if raw else {}
        except (json.JSONDecodeError, UnicodeDecodeError):
            self._send_json(400, {"ok": False, "error": "request body must be valid JSON"})
            return

        if not isinstance(data, dict):
            self._send_json(400, {"ok": False, "error": "request body must be a JSON object"})
            return

        # Honeypot — checked before real validation so a bot filling it in
        # (usually along with garbage in the other fields) is dropped
        # silently without needing valid name/email/message.
        company = data.get("company")
        if isinstance(company, str) and company.strip():
            log.info("spam dropped (honeypot filled) ip=%s", ip)
            self._send_json(200, {"ok": True})
            return

        error = validate(data)
        if error:
            self._send_json(400, {"ok": False, "error": error})
            return

        locale = data.get("locale") or "en"
        record = {
            "id": str(uuid.uuid4()),
            "ts": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S.%f")[:-3] + "Z",
            "form": data["form"],
            "locale": locale,
            "name": data["name"].strip(),
            "email": data["email"].strip(),
            "subject": (data.get("subject") or "").strip(),
            "message": data["message"].strip(),
            "ip": ip,
            "user_agent": self.headers.get("User-Agent", ""),
            "referer": self.headers.get("Referer", ""),
        }

        append_jsonl(record)
        log.info("lead stored id=%s form=%s ip=%s", record["id"], record["form"], ip)

        if MAIL_MODE == "none":
            self._send_json(200, {"ok": True})
            return

        try:
            send_mail(record)
        except Exception as e:  # noqa: BLE001 - must never fail the request
            log.error("mail send failed id=%s error=%s", record["id"], e)
            try:
                append_jsonl({"type": "mail_error", "id": record["id"], "error": str(e)})
            except Exception:
                log.exception("failed to record mail_error for id=%s", record["id"])

        self._send_json(200, {"ok": True})


# --------------------------------------------------------------------------
# Entry point
# --------------------------------------------------------------------------


def main() -> None:
    _ensure_leads_dir()
    server: BaseServer = ThreadingHTTPServer(("127.0.0.1", PORT), FormsHandler)
    log.info("forms_service listening on 127.0.0.1:%s (leads: %s)", PORT, LEADS_PATH)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
