# forms-service

Self-hosted replacement for Formspree for the emotres.com Contact and Quote
forms. The site is a static Next.js export (no server of its own), so the
forms POST cross-origin to this service instead of a third party — leads
stay on our own box (Hetzner, `aerostator.com`) instead of passing through
Formspree, and nothing depends on a third party's uptime or pricing.

Python standard library only, no dependencies to install. One file:
`forms_service.py`.

## Endpoints

- `POST /forms/submit` — accepts a form submission, see `../src/lib/forms.ts`
  and the two form components for the payload shape.
- `OPTIONS /forms/submit` — CORS preflight.
- `GET /forms/health` — `{"ok": true}` liveness check.

## Install (on the Hetzner box)

```bash
# 1. Copy the service file
sudo mkdir -p /opt/motres/forms
sudo cp forms_service.py /opt/motres/forms/forms_service.py

# 2. Create the leads directory, owned by the service user
sudo mkdir -p /srv/motres/forms
sudo chown www-data:www-data /srv/motres/forms

# 3. Env file (real secrets/config, not the .example)
sudo cp forms.env.example /etc/motres/forms.env
sudo chmod 600 /etc/motres/forms.env
sudo $EDITOR /etc/motres/forms.env   # pick a mail mode, see below

# 4. systemd unit
sudo cp motres-forms.service /etc/systemd/system/motres-forms.service
sudo systemctl daemon-reload
sudo systemctl enable --now motres-forms

# 5. nginx: paste nginx-forms.conf.snippet's location block into the
#    existing aerostator.com HTTPS server block, then:
sudo nginx -t
sudo systemctl reload nginx
```

## Mail modes

Set in `/etc/motres/forms.env` (see `forms.env.example` for the full list of
variables). Pick one:

| Mode      | How                                              | Secret on this box? |
|-----------|---------------------------------------------------|----------------------|
| `auth`    | `SMTP_USER` + `SMTP_PASS` (Workspace app password) | **Yes** — the app password lives in `/etc/motres/forms.env` (mode 600). |
| `noauth`  | `SMTP_NOAUTH=1`, this server's IP allowlisted in the Workspace admin console's SMTP relay settings | No — nothing secret is stored. |
| `none`    | leave all three unset                              | No — mail is just disabled; leads are still stored. |

If mail isn't configured (`none`), or if sending fails in `auth`/`noauth`
mode, the lead is still safely on disk (storage always happens before mail
is attempted) — the form itself never breaks, and a
`{"type":"mail_error",...}` line gets appended to the leads file so failures
are visible without needing email to see them.

## Test with curl

```bash
curl -i https://aerostator.com/forms/health

curl -i -X POST https://aerostator.com/forms/submit \
  -H 'Content-Type: application/json' \
  -H 'Origin: https://emotres.com' \
  -d '{"form":"contact","name":"Jane Doe","email":"jane@example.com","subject":"Test","message":"Hello","locale":"en","company":""}'
```

A valid submission returns `{"ok":true}`. A validation problem returns
`{"ok":false,"error":"<what exactly is wrong>"}` with HTTP 400. More than
`RATE_LIMIT` submissions from the same IP within `RATE_WINDOW` seconds
returns HTTP 429 `{"ok":false,"error":"rate_limited"}`.

## Reading leads

Leads are appended one JSON object per line to `LEADS_PATH`
(`/srv/motres/forms/leads.jsonl` by default):

```bash
# Watch new leads live
tail -f /srv/motres/forms/leads.jsonl

# Pretty-print the last one
tail -n1 /srv/motres/forms/leads.jsonl | python3 -m json.tool

# Only real leads, skipping mail_error entries
grep -v '"type": "mail_error"' /srv/motres/forms/leads.jsonl | python3 -c \
  'import sys,json; [print(json.loads(l)["email"], json.loads(l)["name"]) for l in sys.stdin]'
```

## Rotating the leads file

`leads.jsonl` grows forever otherwise. A simple `logrotate` drop-in works
because the service always opens the file by path and appends (it does not
hold the fd open across requests):

```
# /etc/logrotate.d/motres-forms
/srv/motres/forms/leads.jsonl {
    monthly
    rotate 24
    compress
    missingok
    notifempty
    su www-data www-data
}
```

`copytruncate` is not needed — a plain rotate + fresh file on next write is
fine since the process reopens the path every time.

## Journal / logs

`journalctl -u motres-forms -f`. The service logs one line per accepted
lead (id, form, ip), one line per dropped spam submission (honeypot), and
mail warnings/errors. `SMTP_PASS` is never logged.

## Where the notification lands

`MAIL_TO` is `sales@emotres.com`. That address resolves in a way worth knowing
about before debugging a bounce: in this Google Workspace the primary domain is
**motresres.com**, and both **emotres.com** and **aerostator.com** are *user
alias domains* of it — not secondary domains. So an address only exists if the
alias exists on motresres.com; `sales@emotres.com` works because the user has
the alias `sales@motresres.com`. The admin console will not let you create an
alias directly on a user alias domain (the Domain dropdown stays on
motresres.com), which looks like a broken control but is by design.

A bounce with `550-5.1.1 ... account ... does not exist` therefore means the
alias is missing on motresres.com, not that something is wrong with the relay.
Google's Email Log Search (https://admin.google.com/ac/emaillogsearch) shows the
real delivery outcome; the relay returning 250 only means it accepted the
message for delivery.
