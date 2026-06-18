'use client';

import { useState } from 'react';
import { DynoPoint } from '@/lib/products';

const BRAND = 'var(--color-brand)';
const GRID = 'var(--color-border)';
const TXT = 'var(--color-text-secondary)';
const SURFACE = 'var(--color-surface-primary)';

type NumKey = {
  [K in keyof DynoPoint]-?: DynoPoint[K] extends number ? K : never;
}[keyof DynoPoint];

/** Round an axis maximum up to a clean value. */
function axisMax(v: number): number {
  if (v <= 0) return 1;
  const pow = Math.pow(10, Math.floor(Math.log10(v)));
  const steps = [1, 1.2, 1.6, 2, 2.5, 3, 4, 5, 6, 8, 10];
  for (const s of steps) if (s * pow >= v * 1.0001) return s * pow;
  return 10 * pow;
}

const fmtFull = (n: number) => Math.round(n).toLocaleString('en-US');
const fmtAxisRpm = (n: number) => `${(n / 1000).toFixed(1)}k`;

export default function DynoChart({
  points,
  xKey,
  yKey,
  title,
  xUnit,
  yUnit,
  xAxis,
  yDecimals,
  tipDecimals,
}: {
  points: DynoPoint[];
  xKey: NumKey;
  yKey: NumKey;
  title: string;
  xUnit: string;
  yUnit: string;
  xAxis: 'rpm' | 'int';
  yDecimals: number;
  tipDecimals: number;
}) {
  const [hover, setHover] = useState<number | null>(null);

  const W = 360;
  const H = 224;
  const pad = { l: 48, r: 14, t: 16, b: 40 };
  const plotW = W - pad.l - pad.r;
  const plotH = H - pad.t - pad.b;

  const xs = points.map((p) => p[xKey]);
  const ys = points.map((p) => p[yKey]);
  const xMin = Math.min(...xs);
  const xMax = Math.max(...xs);
  const yMin = 0;
  const yMax = axisMax(Math.max(...ys));

  const sx = (x: number) => pad.l + ((x - xMin) / (xMax - xMin || 1)) * plotW;
  const sy = (y: number) => pad.t + plotH - ((y - yMin) / (yMax - yMin || 1)) * plotH;

  const fmtY = (n: number) => n.toFixed(yDecimals);
  const fmtAxisX = xAxis === 'rpm' ? fmtAxisRpm : fmtFull;

  const line = points
    .map((p, i) => `${i ? 'L' : 'M'}${sx(p[xKey]).toFixed(1)} ${sy(p[yKey]).toFixed(1)}`)
    .join(' ');
  const area = `${line} L${sx(xMax).toFixed(1)} ${sy(yMin).toFixed(1)} L${sx(xMin).toFixed(1)} ${sy(yMin).toFixed(1)} Z`;

  const HDIV = 8;
  const VDIV = 6;
  const yTicks = Array.from({ length: HDIV + 1 }, (_, i) => yMin + (i * (yMax - yMin)) / HDIV);
  const vLines = Array.from({ length: VDIV + 1 }, (_, i) => pad.l + (i * plotW) / VDIV);
  const xTicks = [xMin, (xMin + xMax) / 2, xMax];
  const gid = `area-${String(xKey)}-${String(yKey)}`;

  // hover band edges (nearest-point detection)
  const band = (i: number) => {
    const left = i === 0 ? pad.l : (sx(xs[i - 1]) + sx(xs[i])) / 2;
    const right = i === points.length - 1 ? W - pad.r : (sx(xs[i]) + sx(xs[i + 1])) / 2;
    return { left, right };
  };

  // tooltip geometry
  let tip: { x: number; y: number; w: number; h: number; lines: string[] } | null = null;
  if (hover !== null) {
    const p = points[hover];
    const lines = [
      ...(p.throttle != null ? [`${p.throttle}% throttle`] : []),
      `${fmtFull(p[xKey])} ${xUnit}`,
      `${p[yKey].toFixed(tipDecimals)} ${yUnit}`,
    ];
    const w = Math.max(...lines.map((l) => l.length)) * 5.1 + 16;
    const h = 14 + lines.length * 12;
    const px = sx(p[xKey]);
    const py = sy(p[yKey]);
    const x = Math.min(Math.max(px - w / 2, 2), W - 2 - w);
    const y = py - h - 10 < 2 ? py + 12 : py - h - 10;
    tip = { x, y, w, h, lines };
  }

  return (
    <div className="bg-surface-secondary rounded-xl border border-border p-4">
      <div className="text-sm font-semibold text-text-primary mb-1">{title}</div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label={title}
        onMouseLeave={() => setHover(null)}
      >
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={BRAND} stopOpacity="0.18" />
            <stop offset="100%" stopColor={BRAND} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* vertical gridlines */}
        {vLines.map((x, i) => (
          <line key={`v${i}`} x1={x} y1={pad.t} x2={x} y2={pad.t + plotH} stroke={GRID} strokeWidth="1" />
        ))}

        {/* horizontal gridlines + y labels */}
        {yTicks.map((t, i) => (
          <g key={`h${i}`}>
            <line x1={pad.l} y1={sy(t)} x2={W - pad.r} y2={sy(t)} stroke={GRID} strokeWidth="1" />
            <text x={pad.l - 6} y={sy(t) + 3} textAnchor="end" fontSize="9" fill={TXT}>
              {fmtY(t)}
            </text>
          </g>
        ))}

        {/* x labels */}
        {xTicks.map((t, i) => (
          <text
            key={`x${i}`}
            x={sx(t)}
            y={H - pad.b + 16}
            textAnchor={i === 0 ? 'start' : i === 2 ? 'end' : 'middle'}
            fontSize="9"
            fill={TXT}
          >
            {fmtAxisX(t)}
          </text>
        ))}

        {/* area + line */}
        <path d={area} fill={`url(#${gid})`} />
        <path d={line} fill="none" stroke={BRAND} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />

        {/* hover crosshair */}
        {hover !== null && (
          <line
            x1={sx(xs[hover])}
            y1={pad.t}
            x2={sx(xs[hover])}
            y2={pad.t + plotH}
            stroke={BRAND}
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
        )}

        {/* data dots */}
        {points.map((p, i) => (
          <circle key={`d${i}`} cx={sx(p[xKey])} cy={sy(p[yKey])} r={hover === i ? 0 : 2.4} fill={BRAND} />
        ))}
        {hover !== null && (
          <circle cx={sx(points[hover][xKey])} cy={sy(points[hover][yKey])} r="4.5" fill={BRAND} stroke={SURFACE} strokeWidth="2" />
        )}

        {/* x axis label */}
        <text x={pad.l + plotW / 2} y={H - 6} textAnchor="middle" fontSize="9" fill={TXT}>
          {xUnit === 'rpm' ? 'RPM' : `Thrust (${xUnit})`}
        </text>

        {/* tooltip */}
        {tip && (
          <g pointerEvents="none">
            <rect x={tip.x} y={tip.y} width={tip.w} height={tip.h} rx="6" fill={SURFACE} stroke={GRID} strokeWidth="1" />
            {tip.lines.map((l, i) => {
              const isValue = i === tip!.lines.length - 1;
              return (
                <text
                  key={i}
                  x={tip!.x + 8}
                  y={tip!.y + 15 + i * 12}
                  fontSize="9"
                  fontWeight={isValue ? 700 : 400}
                  fill={isValue ? BRAND : TXT}
                >
                  {l}
                </text>
              );
            })}
          </g>
        )}

        {/* transparent hover bands (drawn last so they capture events) */}
        {points.map((p, i) => {
          const { left, right } = band(i);
          return (
            <rect
              key={`b${i}`}
              x={left}
              y={pad.t}
              width={Math.max(right - left, 0)}
              height={plotH}
              fill="transparent"
              pointerEvents="all"
              onMouseEnter={() => setHover(i)}
              style={{ cursor: 'crosshair' }}
            />
          );
        })}
      </svg>
    </div>
  );
}
