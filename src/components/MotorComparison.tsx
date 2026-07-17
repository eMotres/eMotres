import { MotorComparison, ComparisonPoint } from '@/lib/products';
import ComparisonChart from '@/components/ComparisonChart';

export default function MotorComparisonSection({
  data,
  oursPoints,
}: {
  data: MotorComparison;
  oursPoints: ComparisonPoint[];
}) {
  return (
    <section className="mb-16">
      <div className="border-b border-surface-tertiary mb-6">
        <span className="inline-block border-b-2 border-brand text-brand font-semibold pb-3 text-sm uppercase tracking-wider">
          vs {data.competitor}
        </span>
      </div>

      <p className="text-sm text-text-secondary mb-6 max-w-3xl">{data.intro}</p>

      {/* Highlights */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {data.highlights.map((h) => (
          <div key={h.label} className="bg-surface-secondary rounded-xl border border-border p-4">
            <div className="text-2xl font-extrabold text-brand">{h.value}</div>
            <div className="text-xs text-text-secondary mt-1 leading-tight">{h.label}</div>
          </div>
        ))}
      </div>

      {/* Overlay charts vs thrust */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <ComparisonChart title="System efficiency (%) — motor + controller" ours={oursPoints} theirs={data.theirsPoints} oursName={data.ourName} theirsName={data.competitor} yKey="elecEff" yDecimals={0} />
        <ComparisonChart title="Thrust efficiency (gf/W)" ours={oursPoints} theirs={data.theirsPoints} oursName={data.ourName} theirsName={data.competitor} yKey="sysEff" yDecimals={0} />
        <ComparisonChart title="Current (A)" ours={oursPoints} theirs={data.theirsPoints} oursName={data.ourName} theirsName={data.competitor} yKey="current" yDecimals={0} />
        <ComparisonChart title="Electric power (W)" ours={oursPoints} theirs={data.theirsPoints} oursName={data.ourName} theirsName={data.competitor} yKey="pElec" yDecimals={0} />
      </div>

      {/* Comparison table */}
      <div className="rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm whitespace-nowrap">
            <thead>
              <tr className="bg-surface-secondary">
                <th className="text-left px-4 py-3 text-text-secondary font-semibold w-1/3"></th>
                <th className="px-4 py-3 text-center font-bold text-brand">{data.ourName}</th>
                <th className="px-4 py-3 text-center font-semibold text-text-secondary">{data.competitor}</th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((r, i) => (
                <tr key={r.label} className={i % 2 ? 'bg-surface-secondary' : 'bg-surface-primary'}>
                  <td className="px-4 py-2.5 text-text-secondary">{r.label}</td>
                  <td className={`px-4 py-2.5 text-center ${r.win === 'ours' ? 'font-bold text-brand' : 'text-text-primary'}`}>
                    {r.ours}
                  </td>
                  <td className={`px-4 py-2.5 text-center ${r.win === 'theirs' ? 'font-bold text-text-primary' : 'text-text-secondary'}`}>
                    {r.theirs}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-xs text-text-secondary mt-3 max-w-3xl">
        <span className="font-semibold text-text-primary">Highlighted = advantage.</span> {data.note}
      </p>
    </section>
  );
}
