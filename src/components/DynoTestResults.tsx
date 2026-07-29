import { DynoTest } from '@/lib/products';
import type { Locale } from '@/i18n/dictionaries';
import DynoChart from '@/components/DynoChart';

// Unit abbreviations (RPM, V, A, W, N·m, gf/W, °C, g) are kept as-is in both
// locales — only the prose around them is translated.
//
// `hover` and `setup` deliberately start with a space: it keeps the number of
// JSX children (and therefore the server-rendered markup) exactly as it was
// before this component became locale-aware.
const strings = {
  en: {
    heading: 'Test Results',
    hover: ' Hover any chart to read the values at each point.',
    throttle: 'Throttle',
    thrust: 'Thrust (g)',
    torque: 'Torque (N·m)',
    temp: 'Temp (°C)',
    pElec: 'P elec (W)',
    pShaft: 'P shaft (W)',
    sysEff: 'Sys eff (%)',
    thrustEff: 'Thrust eff (gf/W)',
    chartSysEff: 'System efficiency (%) — motor + controller',
    chartThrustEff: 'Thrust efficiency (gf/W)',
    chartTorque: 'Shaft torque (N·m)',
    chartPower: 'Electric power (W)',
    footnote:
      'System efficiency = shaft power / electric power — measured at the bus, so it includes the controller (motor + ESC), not the motor alone. Thrust efficiency = thrust / electric power. Peak system-efficiency point highlighted.',
    setup: ' Setup:',
  },
  zh: {
    heading: '测试结果',
    hover: ' 将鼠标悬停在任意图表上，即可读取各点的数值。',
    throttle: '油门',
    thrust: '推力 (g)',
    torque: '扭矩 (N·m)',
    temp: '温度 (°C)',
    pElec: '电功率 (W)',
    pShaft: '轴功率 (W)',
    sysEff: '系统效率 (%)',
    thrustEff: '推力效率 (gf/W)',
    chartSysEff: '系统效率 (%) —— 电机 + 控制器',
    chartThrustEff: '推力效率 (gf/W)',
    chartTorque: '轴端扭矩 (N·m)',
    chartPower: '电功率 (W)',
    footnote:
      '系统效率 = 轴功率 / 电功率 —— 在母线端测量，因此包含控制器（电机 + 电调），而非电机单体效率。推力效率 = 推力 / 电功率。系统效率峰值点已高亮显示。',
    setup: ' 测试配置：',
  },
} as const;

export default function DynoTestResults({ test, locale = 'en' }: { test: DynoTest; locale?: Locale }) {
  const t = strings[locale];
  const peakEff = Math.max(...test.points.map((p) => p.elecEff));
  const hasThrottle = test.points.some((p) => p.throttle != null);
  const hasTemp = test.points.some((p) => p.temp != null);
  const maxTorque = Math.max(...test.points.map((p) => p.torque));
  const torqueDec = maxTorque >= 10 ? 1 : 3; // table
  const torqueYDec = maxTorque >= 10 ? 0 : 1; // chart axis
  const torqueTipDec = maxTorque >= 10 ? 1 : 3; // chart tooltip

  const cols = [
    ...(hasThrottle ? [t.throttle] : []),
    'RPM',
    'V',
    'A',
    t.thrust,
    t.torque,
    ...(hasTemp ? [t.temp] : []),
    t.pElec,
    t.pShaft,
    t.sysEff,
    t.thrustEff,
  ];

  return (
    <section className="mb-16">
      <div className="border-b border-surface-tertiary mb-6">
        <span className="inline-block border-b-2 border-brand text-brand font-semibold pb-3 text-sm uppercase tracking-wider">
          {t.heading}{test.title ? ` — ${test.title}` : ''}
        </span>
      </div>

      <p className="text-sm text-text-secondary mb-6 max-w-3xl">
        {test.intro}{t.hover}
      </p>

      {/* Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {test.highlights.map((h) => (
          <div key={h.label} className="bg-surface-secondary rounded-xl border border-border p-4">
            <div className="text-2xl font-extrabold text-brand">{h.value}</div>
            <div className="text-xs font-semibold text-text-primary mt-1">{h.label}</div>
            {h.sub && <div className="text-xs text-text-secondary mt-0.5">{h.sub}</div>}
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <DynoChart points={test.points} xKey="rpm" yKey="elecEff" title={t.chartSysEff} xUnit="rpm" yUnit="%" xAxis="rpm" yDecimals={0} tipDecimals={1} locale={locale} />
        <DynoChart points={test.points} xKey="thrust" yKey="sysEff" title={t.chartThrustEff} xUnit="g" yUnit="gf/W" xAxis="int" yDecimals={0} tipDecimals={2} locale={locale} />
        <DynoChart points={test.points} xKey="rpm" yKey="torque" title={t.chartTorque} xUnit="rpm" yUnit="N·m" xAxis="rpm" yDecimals={torqueYDec} tipDecimals={torqueTipDec} locale={locale} />
        <DynoChart points={test.points} xKey="rpm" yKey="pElec" title={t.chartPower} xUnit="rpm" yUnit="W" xAxis="rpm" yDecimals={0} tipDecimals={1} locale={locale} />
      </div>

      {/* Data table */}
      <div className="rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm whitespace-nowrap">
            <thead>
              <tr className="bg-surface-secondary text-text-secondary">
                {cols.map((h) => (
                  <th key={h} className="px-3 py-2.5 text-right font-semibold first:text-left">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {test.points.map((p, i) => {
                const peak = p.elecEff === peakEff;
                return (
                  <tr key={i} className={peak ? 'bg-brand/10' : i % 2 ? 'bg-surface-secondary' : 'bg-surface-primary'}>
                    {hasThrottle && (
                      <td className="px-3 py-2 text-left font-semibold text-text-primary">{p.throttle}%</td>
                    )}
                    <td className="px-3 py-2 text-right text-text-primary first:text-left first:font-semibold">{p.rpm.toLocaleString('en-US')}</td>
                    <td className="px-3 py-2 text-right text-text-secondary">{p.voltage.toFixed(2)}</td>
                    <td className="px-3 py-2 text-right text-text-secondary">{p.current.toFixed(2)}</td>
                    <td className="px-3 py-2 text-right text-text-primary">{p.thrust.toLocaleString('en-US')}</td>
                    <td className="px-3 py-2 text-right text-text-primary">{p.torque.toFixed(torqueDec)}</td>
                    {hasTemp && (
                      <td className="px-3 py-2 text-right text-text-secondary">{p.temp != null ? p.temp.toFixed(1) : '—'}</td>
                    )}
                    <td className="px-3 py-2 text-right text-text-primary">{p.pElec.toFixed(1)}</td>
                    <td className="px-3 py-2 text-right text-text-secondary">{p.pShaft.toFixed(1)}</td>
                    <td className="px-3 py-2 text-right font-semibold text-brand">{p.elecEff.toFixed(1)}</td>
                    <td className="px-3 py-2 text-right text-text-primary">{p.sysEff.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-xs text-text-secondary mt-3 max-w-3xl">
        {t.footnote}{test.note ? ` ${test.note}` : ''}{t.setup}{' '}
        {test.setup.map((s) => `${s.label} ${s.value}`).join(' · ')}.
      </p>
    </section>
  );
}
