import { DynoTest } from '@/lib/products';
import DynoChart from '@/components/DynoChart';

export default function DynoTestResults({ test }: { test: DynoTest }) {
  const peakEff = Math.max(...test.points.map((p) => p.elecEff));
  const cols = [
    'Throttle',
    'RPM',
    'V',
    'A',
    'Thrust (g)',
    'Torque (N·m)',
    'Temp (°C)',
    'P elec (W)',
    'P shaft (W)',
    'Elec eff (%)',
    'Sys (gf/W)',
  ];

  return (
    <section className="mb-16">
      <div className="border-b border-surface-tertiary mb-6">
        <span className="inline-block border-b-2 border-brand text-brand font-semibold pb-3 text-sm uppercase tracking-wider">
          Test Results
        </span>
      </div>

      <p className="text-sm text-text-secondary mb-6 max-w-3xl">
        First propeller-dynamometer sweep of the flat-wire (hairpin) winding, measured on a {test.conditions}{' '}
        ({test.date}). Electrical efficiency holds a 75–77 % plateau to the top of the range while the winding
        stays cool. Hover any chart to read the values at each point.
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
        <DynoChart points={test.points} xKey="rpm" yKey="elecEff" title="Electrical efficiency (%)" xUnit="rpm" yUnit="%" xAxis="rpm" yDecimals={0} tipDecimals={1} />
        <DynoChart points={test.points} xKey="thrust" yKey="sysEff" title="System efficiency (gf/W)" xUnit="g" yUnit="gf/W" xAxis="int" yDecimals={0} tipDecimals={2} />
        <DynoChart points={test.points} xKey="rpm" yKey="torque" title="Shaft torque (N·m)" xUnit="rpm" yUnit="N·m" xAxis="rpm" yDecimals={1} tipDecimals={3} />
        <DynoChart points={test.points} xKey="rpm" yKey="pElec" title="Electric power (W)" xUnit="rpm" yUnit="W" xAxis="rpm" yDecimals={0} tipDecimals={1} />
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
                  <tr key={p.throttle} className={peak ? 'bg-brand/10' : i % 2 ? 'bg-surface-secondary' : 'bg-surface-primary'}>
                    <td className="px-3 py-2 text-left font-semibold text-text-primary">{p.throttle}%</td>
                    <td className="px-3 py-2 text-right text-text-primary">{p.rpm.toLocaleString('en-US')}</td>
                    <td className="px-3 py-2 text-right text-text-secondary">{p.voltage.toFixed(2)}</td>
                    <td className="px-3 py-2 text-right text-text-secondary">{p.current.toFixed(2)}</td>
                    <td className="px-3 py-2 text-right text-text-primary">{p.thrust.toLocaleString('en-US')}</td>
                    <td className="px-3 py-2 text-right text-text-primary">{p.torque.toFixed(3)}</td>
                    <td className="px-3 py-2 text-right text-text-secondary">{p.temp.toFixed(1)}</td>
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
        Electrical efficiency = shaft power / electric power. System efficiency = thrust / electric power. Peak
        electrical-efficiency point highlighted. Temperatures are from an automatic ramp (transient, not
        steady-state). Setup: {test.setup.map((s) => `${s.label} ${s.value}`).join(' · ')}.
      </p>
    </section>
  );
}
