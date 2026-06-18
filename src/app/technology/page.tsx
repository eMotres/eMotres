import Link from 'next/link';
import { Metadata } from 'next';
import { Plane, Car, Bot, Anchor } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AeroStator Core™ — Patented Motor Technology',
  description:
    'AeroStator Core™ combines tangential magnet polarization, rectangular copper wire, shortest-path cooling and a simplified winding into the highest torque-density electric motor available. Patented foil-coil and ceramic-insulation innovations, IP65 sealing, and a multi-jurisdiction patent portfolio.',
};

const stats = [
  { value: '1.5×', label: 'Higher magnetic field vs radial' },
  { value: '~70%', label: 'Copper fill factor vs 45% round wire' },
  { value: '14.9', label: 'N·m/kg specific torque — proven' },
  { value: 'IP65', label: 'Optional fully-sealed construction' },
];

const coreTech = [
  {
    title: 'Tangential Magnet Polarization',
    tagline: 'Flux concentration beyond standard Halbach arrays — no adhesive, easy re-magnetization.',
    img: '/images/tech-tangential.png',
    points: [
      {
        h: '1.5× higher magnetic field',
        d: 'The tangential magnet arrangement concentrates flux more effectively than standard radial or Halbach arrays — more torque from the same magnet volume.',
      },
      {
        h: 'No adhesive required',
        d: 'Magnets are mechanically constrained — no epoxy. Easy removal for re-magnetization or field replacement without specialist tooling.',
      },
      {
        h: 'Best torque-to-weight ratio',
        d: 'Inrunner topology with tangential magnets outperforms outrunner motors of equivalent diameter and mass in specific torque (N·m/kg).',
      },
    ],
  },
  {
    title: 'Rectangular Copper Wire',
    tagline: '~70% slot fill factor vs ~45% for round wire — lower resistance, higher current density, less heat.',
    img: '/images/tech-wire.png',
    points: [
      {
        h: '~70% fill factor vs ~45% round wire',
        d: 'Rectangular (flat) wire fills the slot cross-section far more efficiently. More copper per slot means less resistance for the same winding geometry.',
      },
      {
        h: 'Lower winding resistance = less heat',
        d: 'Lower resistance directly reduces I²R copper losses. The motor runs cooler at the same output, or makes more power at the same temperature limit.',
      },
      {
        h: 'Higher current density',
        d: 'The same slot area carries significantly more current, enabling higher peak torque without increasing motor size or weight.',
      },
    ],
  },
  {
    title: 'High-Efficiency Cooling System',
    tagline: 'Yoke cutouts give cooling the shortest possible path from winding to ambient — air or liquid.',
    img: '/images/tech-cooling.png',
    points: [
      {
        h: 'Shortest thermal path',
        d: 'Cutouts in the yoke directly above each coil eliminate the thick iron barrier between winding and cooler. Heat path is 2–5× shorter than a standard stator.',
      },
      {
        h: '2× larger cooling surface',
        d: 'The cutout geometry doubles the effective contact area between the winding and the cooling medium — air or liquid. More surface = faster heat transfer.',
      },
      {
        h: 'Air or liquid cooling',
        d: 'The same thermal architecture works with both media — centrifugal fan for air, manifold on the yoke cutouts for liquid. No redesign between options.',
      },
    ],
  },
  {
    title: 'Manufacturing Simplicity',
    tagline: '2× fewer coils than standard designs — less winding time, lower cost, higher reliability.',
    img: '/images/tech-simplicity.png',
    points: [
      {
        h: '2× fewer coils than standard',
        d: 'A concentrated winding topology with half the coil count of a standard distributed winding for the same slot/pole configuration. Less winding time, lower labour cost.',
      },
      {
        h: 'Simpler assembly',
        d: 'Fewer coils means fewer connections, fewer failure points and simpler quality control. Each coil is individually accessible for inspection and replacement.',
      },
      {
        h: 'Lower production cost',
        d: 'Reduced coil count cuts both material and assembly time. Combined with rectangular wire’s high fill factor, the motor is cheaper to wind and more reliable in service.',
      },
    ],
  },
];

const cooling = {
  air: [
    'Centrifugal fan draws air through the yoke cutouts',
    'Effective for most drone and aviation applications',
    'Simpler installation — no liquid lines or manifolds',
    'Suitable for open or IP65-sealed configurations',
    'Operational range up to ~60 °C ambient',
  ],
  liquid: [
    'Coolant manifold attached directly to the yoke cutouts',
    '2–5× lower thermal resistance vs air cooling',
    'Enables continuous high-power operation',
    'Required for motors above 10 kW continuous',
    'Compatible with water-glycol or oil circuits',
  ],
};

const patented = [
  {
    title: 'Foil Coil Technology',
    patent: 'PCT/IB2025/060049',
    tagline: 'Single-piece flat-wire coil — fewer joints, fewer eddy-current loss points.',
    img: '/images/aerostator/foil-coil.jpg',
    caption: 'Copper & aluminium foil-coil prototypes',
    specs: [
      { k: 'Made from', v: '1 flat sheet' },
      { k: 'Welded joints', v: 'Zero' },
      { k: 'Cut variants', v: '2 types' },
      { k: 'Process', v: '3 steps' },
      { k: 'Tooling', v: 'Standard' },
      { k: 'Eddy sources', v: 'Eliminated' },
    ],
    why: 'No welds means fewer eddy-current loss points, and standard cut-and-bend tooling makes the coil mass-production ready.',
  },
  {
    title: 'Ceramic Coil Insulation',
    patent: 'PCT/IB2025/058444',
    tagline: 'Three-sided thermal path — Al₂O₃ / AlN plates that insulate electrically yet conduct heat.',
    img: '/images/aerostator/ceramic-insulation.jpg',
    caption: 'Al₂O₃ ceramic insulation plates',
    specs: [
      { k: 'Plates per slot', v: '3' },
      { k: 'Material', v: 'Al₂O₃ / AlN' },
      { k: 'Thickness', v: '0.1–0.5 mm' },
      { k: 'k (Al₂O₃)', v: '≥25 W/m·K' },
      { k: 'k (AlN)', v: '≥140 W/m·K' },
      { k: 'vs polymer', v: '<1 W/m·K' },
    ],
    why: 'Three-sided coupling (vs two-sided) insulates and conducts heat at once, enabling higher current density at a lower coil temperature.',
  },
];

const applications = [
  {
    Icon: Plane,
    title: 'UAV & Drones',
    sub: 'FPV · Heavy-lift · Military',
    desc: 'From the compact 40_12 (1.4 kW / 125 g) to heavy-lift 150_30 (12 kW / 3 kg). CIANO 40_12 is a direct replacement for the 3115 class — the most widely used motor in military FPV and commercial multirotor platforms.',
  },
  {
    Icon: Car,
    title: 'Electric Vehicles',
    sub: 'Traction · Hub motors · Powertrains',
    desc: 'High torque density and reduced rare-earth content make CIANO motors well suited to EV traction drives and in-wheel hub motors, where mass, efficiency and continuous thermal performance set vehicle range.',
  },
  {
    Icon: Bot,
    title: 'Robotics & Actuators',
    sub: 'Joints · Actuators · Servo drives',
    desc: 'High torque density and compact geometry make CIANO motors ideal for robotic joints and actuators. The inrunner topology integrates cleanly with planetary or direct-drive transmissions.',
  },
  {
    Icon: Anchor,
    title: 'Marine',
    sub: 'Thrusters · Winches · Pumps',
    desc: 'IP65 sealed construction and corrosion-resistant materials make CIANO motors ready for continuous marine operation. Liquid-cooled variants handle extended duty cycles in saltwater environments.',
  },
];

const patents = {
  granted: [
    { office: 'PCT', number: 'PCT/IB2023/057129', desc: 'International · Jul 12 2023' },
    { office: 'PCT', number: 'PCT/IB2025/058444', desc: 'Ceramic insulation · Aug 21 2025' },
    { office: 'PCT', number: 'PCT/IB2025/060049', desc: 'Coil for electric machine · Oct 6 2025' },
    { office: 'SI', number: 'SI No. 26604', desc: 'Slovenia · Short-term patent · Jul 31 2025' },
    { office: 'CN', number: 'ZL 202390000194.8', desc: 'China · Utility model · May 2 2025' },
    { office: 'DE', number: 'DE 21 2023 000 117', desc: 'Germany · Utility model · Oct 18 2024' },
    { office: 'FR', number: 'FR No. 24 07270', desc: 'France · Utility certificate · Jul 11 2025' },
  ],
  pending: [
    { office: 'PCT', number: 'PCT/IB2026/053894', desc: 'Core AeroStator Core™ topology · Apr 20 2026' },
    { office: 'EP', number: 'EP 4287460 A1', desc: 'European patent · Under examination · Dec 6 2023' },
    { office: 'ES', number: 'ESU202490013', desc: 'Spain · In examination' },
    { office: 'IN', number: '202517116950', desc: 'India · Filed Nov 25 2025' },
  ],
};

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-surface-primary">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand bg-orange-50 px-3 py-1 rounded-full">
            AeroStator Core™ Technology
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mt-5 mb-5">
            Patented Motor Technology
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Four patented technologies in one stator architecture — the highest torque-density electric motor
            available, built for drones, UAVs, aviation, EVs and robotics.
          </p>
        </div>
      </section>

      {/* Stat strip */}
      <section className="border-y border-border bg-surface-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-brand mb-1">{s.value}</div>
                <div className="text-xs text-text-secondary leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core technologies */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-text-primary mb-3">Four technologies, one stator</h2>
          <p className="text-text-secondary mb-12 max-w-2xl">
            Every eMotres motor integrates the same four innovations that work together to push torque density
            beyond what conventional designs can achieve.
          </p>

          <div className="space-y-8">
            {coreTech.map((tech, i) => (
              <div key={tech.title} className="bg-surface-secondary rounded-2xl border border-border overflow-hidden md:flex">
                <div className="md:w-2/5 bg-surface-tertiary flex items-center justify-center p-8">
                  <img src={tech.img} alt={tech.title} className="max-h-56 w-full object-contain mix-blend-multiply" />
                </div>
                <div className="md:w-3/5 p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0 w-9 h-9 bg-brand rounded-lg flex items-center justify-center text-white font-bold">
                      {i + 1}
                    </div>
                    <h3 className="text-xl font-bold text-text-primary">{tech.title}</h3>
                  </div>
                  <p className="text-sm text-brand font-medium mb-5">{tech.tagline}</p>
                  <div className="space-y-4">
                    {tech.points.map((p) => (
                      <div key={p.h}>
                        <div className="text-sm font-semibold text-text-primary">{p.h}</div>
                        <div className="text-sm text-text-secondary leading-relaxed">{p.d}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IP65 — air vs liquid */}
      <section className="bg-surface-secondary border-y border-border px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">IP65 sealing</span>
          <h2 className="text-3xl font-extrabold text-text-primary mt-3 mb-3">One architecture, two cooling options</h2>
          <p className="text-text-secondary mb-10 max-w-2xl">
            The same sealed stator works with air or liquid cooling without a redesign — choose the medium that
            fits the duty cycle.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-surface-primary rounded-2xl border border-border p-7">
              <h3 className="text-lg font-bold text-text-primary mb-4">💨 Air cooling</h3>
              <ul className="space-y-3">
                {cooling.air.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-brand font-bold mt-0.5">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-primary rounded-2xl border border-border p-7">
              <h3 className="text-lg font-bold text-text-primary mb-4">💧 Liquid cooling</h3>
              <ul className="space-y-3">
                {cooling.liquid.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-brand font-bold mt-0.5">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-sm text-text-secondary mt-6 max-w-3xl">
            <span className="font-semibold text-text-primary">IP65:</span> complete protection against dust ingress
            and low-pressure water jets from any direction — available as a factory option on all CIANO motors.
          </p>
        </div>
      </section>

      {/* Patented innovations */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">Patented innovations</span>
          <h2 className="text-3xl font-extrabold text-text-primary mt-3 mb-12">Engineered down to the coil</h2>

          <div className="space-y-8">
            {patented.map((p) => (
              <div key={p.title} className="bg-surface-secondary rounded-2xl border border-border overflow-hidden md:flex">
                <div className="md:w-2/5 relative">
                  <img src={p.img} alt={p.caption} className="w-full h-64 md:h-full object-cover" />
                  <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider bg-brand text-white px-2.5 py-1 rounded-full">
                    Patented
                  </span>
                </div>
                <div className="md:w-3/5 p-8">
                  <h3 className="text-xl font-bold text-text-primary">{p.title}</h3>
                  <p className="text-xs text-text-secondary mb-1">{p.caption}</p>
                  <p className="text-xs font-mono text-brand mb-4">{p.patent}</p>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">{p.tagline}</p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                    {p.specs.map((s) => (
                      <div key={s.k} className="bg-surface-primary rounded-lg border border-border px-3 py-2">
                        <div className="text-xs text-text-secondary">{s.k}</div>
                        <div className="text-sm font-bold text-text-primary">{s.v}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed">
                    <span className="font-semibold text-text-primary">Why it matters: </span>
                    {p.why}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-surface-secondary border-y border-border px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">Applications</span>
          <h2 className="text-3xl font-extrabold text-text-primary mt-3 mb-3">Engineered for demanding environments</h2>
          <p className="text-text-secondary mb-10 max-w-2xl">
            AeroStator Core™ scales from 40 mm compact UAV motors to 200+ mm aviation powertrains.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {applications.map(({ Icon, title, sub, desc }) => (
              <div key={title} className="bg-surface-primary rounded-2xl border border-border p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary">{title}</h3>
                    <div className="text-xs text-brand font-medium">{sub}</div>
                  </div>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patent portfolio */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">Intellectual property</span>
          <h2 className="text-3xl font-extrabold text-text-primary mt-3 mb-2">Patent portfolio</h2>
          <p className="text-text-secondary mb-10">
            9 granted / registered · 4 pending · 6 jurisdictions · EPO inventive step confirmed.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-4">
                ✓ Granted / registered
              </h3>
              <div className="space-y-3">
                {patents.granted.map((p) => (
                  <div key={p.number} className="flex items-start gap-3 bg-surface-secondary rounded-xl border border-border px-4 py-3">
                    <span className="flex-shrink-0 text-[11px] font-bold text-brand bg-orange-50 rounded-md px-2 py-1 w-12 text-center">
                      {p.office}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-text-primary font-mono">{p.number}</div>
                      <div className="text-xs text-text-secondary">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-4">
                ⏳ Pending / under examination
              </h3>
              <div className="space-y-3">
                {patents.pending.map((p) => (
                  <div key={p.number} className="flex items-start gap-3 bg-surface-secondary rounded-xl border border-border px-4 py-3">
                    <span className="flex-shrink-0 text-[11px] font-bold text-text-secondary bg-surface-tertiary rounded-md px-2 py-1 w-12 text-center">
                      {p.office}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-text-primary font-mono">{p.number}</div>
                      <div className="text-xs text-text-secondary">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-brand/10 border border-brand/20 rounded-xl p-5">
                <div className="text-sm font-bold text-text-primary mb-1">🏆 EPO inventive step confirmed</div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  The European Patent Office independently validated the novelty and inventive step of the
                  AeroStator Core™ topology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-secondary border-t border-border px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-5">See the technology in action</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/shop" className="bg-brand text-white font-bold py-3 px-8 rounded-xl hover:bg-brand-dark transition-colors">
              View All Motors
            </Link>
            <Link
              href="/radial-go-and-axial-motors-technology"
              className="bg-surface-primary text-text-primary font-bold py-3 px-8 rounded-xl hover:bg-surface-tertiary transition-colors border border-border"
            >
              Radial GO vs Axial →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
