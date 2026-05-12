import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'High-Performance Electric Motors for Drones & Aviation | eMotres',
  description: 'eMotres CIANO motors — patented AeroStator Core technology. Highest torque density on the market. IP65 sealed, rectangular copper windings, topology-optimized stator yoke. Built for drones, UAVs, aviation and robotics.',
};

const stats = [
  { value: '1.5×', label: 'Higher magnetic field vs radial construction' },
  { value: 'IP65', label: 'Fully sealed, dust & water proof' },
  { value: '~70%', label: 'Copper fill factor vs 45% round wire' },
  { value: '14.9', label: 'N·m/kg specific torque — prototype proven' },
];

const technologies = [
  {
    label: 'Best-in-class Air & Liquid Cooling',
    desc: 'Cutouts directly above each coil give cooling air or liquid the shortest possible thermal path from winding to cooler — no thick yoke barrier in between.',
  },
  {
    label: 'Tangential Magnets',
    desc: 'Flux concentration beyond standard Halbach arrays — no adhesive, easy re-magnetization.',
  },
  {
    label: 'Rectangular Copper Wire',
    desc: '~70% fill factor. Lower resistance, higher current density, less heat.',
  },
];


const cianoMotors = [
  {
    slug: 'ciano-40-12',
    name: 'CIANO14 40_12',
    tagline: 'Compact precision',
    power: '4 kW',
    torque: '6.4 Nm',
    weight: '0.75 kg',
    voltage: '24–60 V',
    protection: 'IP65',
    price: '€100',
    imageUrl: '/ciano14-40-12.png',
  },
  {
    slug: 'ciano-150-30',
    name: 'CIANO28 150_30',
    tagline: 'Mid-range aviation',
    power: '15 kW',
    torque: '60 Nm',
    weight: '5.2 kg',
    voltage: '200–400 V',
    protection: 'IP65',
    price: '€1,000',
    imageUrl: '/ciano28-150-30.png',
  },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-surface-primary text-text-primary">

      {/* ─── HERO ─── */}
      <section className="relative bg-surface-primary pt-16 pb-0 px-4 sm:px-6 lg:px-8">
        {/* subtle background grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Top text block */}
          <div className="text-center pt-10 pb-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand mb-8">
              <span className="w-6 h-px bg-brand inline-block" />
              Patented Motor Technology
              <span className="w-6 h-px bg-brand inline-block" />
            </span>

            {/* Hero image — between label and heading */}
            <div className="flex justify-center mb-8">
              <img
                src="/aerostator-core.png"
                alt="AeroStator Core — eMotres patented motor stator"
                className="w-full max-w-xl object-contain select-none drop-shadow-xl"
              />
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-text-primary leading-tight mb-4">
              AeroStator
              <br />
              <span className="text-brand">Core</span>
            </h1>

            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-8">
              Three core technologies in one stator architecture.
              The highest torque density electric motor available on the market — built for drones, UAVs, aviation and robotics.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Link
                href="/shop"
                className="bg-brand text-white font-bold py-3.5 px-8 rounded-xl hover:bg-brand-dark transition-colors text-sm"
              >
                View All Motors
              </Link>
              <Link
                href="/technology"
                className="bg-surface-secondary text-text-primary font-semibold py-3.5 px-8 rounded-xl hover:bg-surface-tertiary transition-colors border border-border text-sm"
              >
                How it works →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="border-y border-border bg-surface-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-brand mb-1">{s.value}</div>
                <div className="text-xs text-text-secondary leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MOTOR LINEUP ─── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 0 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">

            <h2 className="text-4xl font-extrabold text-text-primary mt-3">
              Built on AeroStator Core
            </h2>
            <p className="text-text-secondary mt-3 max-w-xl mx-auto">
              Every eMotres motor carries all three AeroStator Core technologies — best-in-class cooling, tangential magnets and rectangular copper windings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cianoMotors.map(motor => (
              <Link
                key={motor.slug}
                href={`/shop/${motor.slug}`}
                className="group block bg-surface-secondary rounded-2xl border border-border hover:border-brand/40 hover:shadow-lg transition-all duration-200 overflow-hidden"
              >
                {/* Image area */}
                <div className="bg-surface-tertiary flex items-center justify-center p-8 h-56 overflow-hidden rounded-t-2xl">
                  <img
                    src={motor.imageUrl}
                    alt={motor.name}
                    className="max-h-full max-w-full object-contain transition-opacity duration-300 group-hover:opacity-80"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-xs font-semibold text-brand uppercase tracking-wider">{motor.tagline}</span>
                      <h3 className="text-xl font-bold text-text-primary mt-0.5">{motor.name}</h3>
                    </div>
                    <span className="text-xs font-semibold bg-surface-primary border border-border text-text-secondary px-2 py-1 rounded-md">
                      {motor.protection}
                    </span>
                  </div>

                  {/* Specs grid */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {[
                      { k: 'Power', v: motor.power },
                      { k: 'Torque', v: motor.torque },
                      { k: 'Weight', v: motor.weight },
                      { k: 'Voltage', v: motor.voltage },
                    ].map(spec => (
                      <div key={spec.k} className="bg-surface-primary rounded-lg px-3 py-2 border border-border">
                        <div className="text-xs text-text-secondary">{spec.k}</div>
                        <div className="text-sm font-bold text-text-primary">{spec.v}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-lg font-extrabold text-text-primary">{motor.price}</span>
                    <div className="flex items-center gap-1 text-sm font-semibold text-brand group-hover:gap-2 transition-all">
                      View specifications
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/shop" className="text-sm font-semibold text-text-secondary hover:text-brand transition-colors">
              See the full motor lineup →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TECHNOLOGY BREAKDOWN ─── */}
      <section className="bg-surface-secondary border-y border-border py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="md:flex md:items-start md:gap-16">
            <div className="md:w-2/5 mb-12 md:mb-0 md:sticky md:top-24">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand">What&apos;s inside</span>
              <h2 className="text-3xl font-extrabold text-text-primary mt-3 mb-4">
                Three technologies.<br />One stator.
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Every eMotres motor integrates three patented innovations that work together to push torque density beyond what conventional designs can achieve.
              </p>
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all"
              >
                Full technology overview
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="md:w-3/5 space-y-4">
              {technologies.map((tech, i) => (
                <div key={tech.label} className="bg-surface-primary rounded-xl border border-border p-5 flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary mb-1">{tech.label}</div>
                    <div className="text-sm text-text-secondary leading-relaxed">{tech.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── APPLICATIONS STRIP ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">Applications</span>
          <h2 className="text-3xl font-extrabold text-text-primary mt-3 mb-10">
            Engineered for demanding environments
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              {
                title: 'UAV & Drones',
                desc: 'From compact racing UAVs to heavy-lift multirotor platforms — CIANO motors deliver the torque density that matters.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                ),
              },
              {
                title: 'Light Aviation',
                desc: 'Reliable, sealed and high-efficiency — suitable for certified light electric aircraft and hybrid propulsion.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                ),
              },
              {
                title: 'Robotics',
                desc: 'High torque density and compact geometry make CIANO motors ideal for robot joints and actuators demanding peak performance.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                  </svg>
                ),
              },
              {
                title: 'Marine',
                desc: 'IP65 sealed housing and corrosion-resistant design make CIANO motors ready for the harshest marine conditions.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
            ].map(app => (
              <div key={app.title} className="bg-surface-secondary rounded-2xl border border-border p-7 text-left">
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                  {app.icon}
                </div>
                <h3 className="font-bold text-text-primary mb-2">{app.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUOTE FORM ─── */}
      <section id="get-quote" className="bg-surface-secondary border-t border-border py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand">Custom order</span>
              <h2 className="text-3xl font-extrabold text-text-primary mt-3 mb-4">
                Need a custom motor?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our engineers can design a motor to your exact specifications. Fill in the form and we&apos;ll calculate an approximate cost within 2 business days.
              </p>
              <ul className="space-y-3">
                {[
                  'Custom diameter, length, voltage range',
                  'IP67 / IP68 sealing on request',
                  'Custom KV, torque and RPM targets',
                  'Series production available',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-brand font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface-primary rounded-2xl border border-border p-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>    </main>
  );
}
