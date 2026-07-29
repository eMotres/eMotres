import { ComparisonPoint } from '@/lib/products';
import type { Locale } from '@/i18n/dictionaries';
import { yAxisFor, tickDecimals } from '@/lib/chartScale';

const xAxisLabel = { en: 'Thrust (g)', zh: '推力 (g)' } as const;

const BRAND = 'var(--color-brand)';
const GRID = 'var(--color-border)';
const TXT = 'var(--color-text-secondary)';
const THEIRS = '#94a3b8';

type YKey = 'current' | 'pElec' | 'sysEff' | 'elecEff';

export default function ComparisonChart({
  title,
  ours,
  theirs,
  oursName,
  theirsName,
  yKey,
  yDecimals,
  locale = 'en',
}: {
  title: string;
  ours: ComparisonPoint[];
  theirs: ComparisonPoint[];
  oursName: string;
  theirsName: string;
  yKey: YKey;
  yDecimals: number;
  locale?: Locale;
}) {
  const W = 360;
  const H = 224;
  const pad = { l: 46, r: 12, t: 16, b: 40 };
  const plotW = W - pad.l - pad.r;
  const plotH = H - pad.t - pad.b;

  const all = [...ours, ...theirs];
  const xMin = 0;
  const xMax = Math.max(...all.map((p) => p.thrust));
  // Fit both series (ours + competitor) so neither gets squashed.
  const { min: yMin, max: yMax, step: yStep } = yAxisFor(all.map((p) => p[yKey]));

  const sx = (x: number) => pad.l + ((x - xMin) / (xMax - xMin || 1)) * plotW;
  const sy = (y: number) => pad.t + plotH - ((y - yMin) / (yMax - yMin || 1)) * plotH;
  const path = (pts: ComparisonPoint[]) =>
    pts.map((p, i) => `${i ? 'L' : 'M'}${sx(p.thrust).toFixed(1)} ${sy(p[yKey]).toFixed(1)}`).join(' ');

  const yTickCount = Math.max(1, Math.round((yMax - yMin) / yStep));
  const yTicks = Array.from({ length: yTickCount + 1 }, (_, i) => yMin + i * yStep);
  const vLines = Array.from({ length: 7 }, (_, i) => pad.l + (i * plotW) / 6);
  const xTicks = [xMin, xMax / 2, xMax];
  const fmtThrust = (n: number) => Math.round(n).toLocaleString('en-US');
  const fmtY = (n: number) => n.toFixed(tickDecimals(yStep, yDecimals));

  return (
    <div className="bg-surface-secondary rounded-xl border border-border p-4">
      <div className="text-sm font-semibold text-text-primary mb-1">{title}</div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-1 text-xs text-text-secondary">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-4 h-[2px]" style={{ background: BRAND }} />
          {oursName}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-4 h-0 border-t-2 border-dashed" style={{ borderColor: THEIRS }} />
          {theirsName}
        </span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={title}>
        {vLines.map((x, i) => (
          <line key={`v${i}`} x1={x} y1={pad.t} x2={x} y2={pad.t + plotH} stroke={GRID} strokeWidth="1" />
        ))}
        {yTicks.map((t, i) => (
          <g key={`h${i}`}>
            <line x1={pad.l} y1={sy(t)} x2={W - pad.r} y2={sy(t)} stroke={GRID} strokeWidth="1" />
            <text x={pad.l - 5} y={sy(t) + 3} textAnchor="end" fontSize="9" fill={TXT}>
              {fmtY(t)}
            </text>
          </g>
        ))}
        {xTicks.map((t, i) => (
          <text
            key={`x${i}`}
            x={sx(t)}
            y={H - pad.b + 16}
            textAnchor={i === 0 ? 'start' : i === 2 ? 'end' : 'middle'}
            fontSize="9"
            fill={TXT}
          >
            {fmtThrust(t)}
          </text>
        ))}

        {/* competitor (behind) */}
        <path d={path(theirs)} fill="none" stroke={THEIRS} strokeWidth="2" strokeDasharray="4 3" strokeLinejoin="round" />
        {theirs.map((p, i) => (
          <circle key={`t${i}`} cx={sx(p.thrust)} cy={sy(p[yKey])} r="2" fill={THEIRS} />
        ))}

        {/* ours */}
        <path d={path(ours)} fill="none" stroke={BRAND} strokeWidth="2.5" strokeLinejoin="round" />
        {ours.map((p, i) => (
          <circle key={`o${i}`} cx={sx(p.thrust)} cy={sy(p[yKey])} r="2.4" fill={BRAND} />
        ))}

        <text x={pad.l + plotW / 2} y={H - 5} textAnchor="middle" fontSize="9" fill={TXT}>
          {xAxisLabel[locale]}
        </text>
      </svg>
    </div>
  );
}
