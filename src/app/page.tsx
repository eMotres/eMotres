import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'High-Performance Electric Motors for Drones & Aviation | eMotres',
  description: 'eMotres CIANO motors — patented AeroStator Core technology. Highest torque density on the market. IP65 sealed, rectangular copper windings, topology-optimized stator yoke. Built for drones, UAVs, aviation and robotics.',
  alternates: { canonical: '/', languages: { en: '/', 'zh-CN': '/zh' } },
  openGraph: {
    type: 'website',
    siteName: 'eMotres',
    locale: 'en_US',
    title: 'High-Performance Electric Motors for Drones & Aviation | eMotres',
    description: 'eMotres CIANO motors — patented AeroStator Core™ technology. Highest torque density on the market, built for drones, UAVs and aviation.',
    url: '/',
    images: [{ url: '/images/electric-motor.webp', width: 1200, height: 630, alt: 'eMotres AeroStator Core electric motor' }],
  },
};

const stats: { value: string; label: string; sub: string }[] = [
  {
    value: '1.5×',
    label: 'Higher magnetic field vs radial construction',
    sub: 'More torque from the same magnets',
  },
  {
    value: '~75%',
    label: 'Copper fill factor vs 35% round wire',
    sub: 'Lower resistance — less heat, more continuous power',
  },
  {
    value: '15',
    label: 'N·m/kg specific torque — prototype proven',
    sub: 'Lighter propulsion for the same thrust',
  },
  {
    value: 'IP65',
    label: 'Possible fully sealed construction',
    sub: 'Dust & water protection on request',
  },
];

const technologies = [
  {
    label: 'Best-in-class Air & Liquid Cooling',
    desc: 'Cutouts directly above each coil give cooling air or liquid the shortest possible thermal path from winding to cooler — no thick yoke barrier in between. Surface area is 2× larger than a standard stator.',
    img: '/images/tech-cooling.png',
  },
  {
    label: 'Tangential Magnetization',
    desc: 'Flux concentration beyond standard Halbach arrays — no adhesive, easy re-magnetization.',
    img: '/images/tech-tangential.png',
  },
  {
    label: 'Rectangular Copper Wire',
    desc: '~75% fill factor. Lower resistance, higher current density, less heat.',
    img: '/images/tech-wire.png',
  },
  {
    label: 'Single Layer Winding',
    desc: '2× fewer coils than standard designs — less winding time, lower production cost, higher reliability.',
    img: '/images/tech-simplicity.png',
  },
];


const cianoMotors: {
  slug: string;
  name: string;
  tagline: string;
  power: string;
  torque: string;
  weight: string;
  voltage: string;
  protection: string;
  price: string;
  imageUrl: string;
  priceTag?: string;
  highlight?: string;
}[] = [
  {
    slug: 'ciano-40-12',
    name: 'CIANO14 40_12',
    tagline: 'Compact precision',
    power: '1,400 W',
    torque: '0.70 Nm',
    weight: '0.125 kg',
    voltage: '15–25 V',
    protection: 'Open frame',
    price: '€300',
    priceTag: 'sample',
    highlight: '2× continuous power & thrust vs class',
    imageUrl: '/ciano14-40-12.png',
  },
  {
    slug: 'ciano-150-30',
    name: 'CIANO28 150_30',
    tagline: 'Mid-range aviation',
    power: '14,400 W',
    torque: '43.5 Nm',
    weight: '3 kg',
    voltage: '47–76 V',
    protection: 'Open frame',
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
              Patented Motor Technology by eMotres
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

            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-6">
              Four patented technologies in one motor architecture — the stator platform behind every{' '}
              <span className="font-semibold text-text-primary">eMotres</span> motor. The highest torque density
              electric motor available on the market, built for drones, UAVs, aviation and robotics.
            </p>

            <div className="flex justify-center mb-8">
              <div className="inline-flex items-start gap-2.5 bg-orange-50 border border-orange-200 rounded-xl px-4 py-2.5 max-w-xl text-left">
                <svg className="w-5 h-5 text-brand shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                </svg>
                <p className="text-sm sm:text-base font-bold text-text-primary leading-snug">
                  CIANO14: more than <span className="text-brand">2× the continuous power</span> of any competitor in
                  its class — same size, double the sustained output.
                </p>
              </div>
            </div>

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
                <div className="text-xs font-semibold text-text-primary leading-tight mt-1.5">{s.sub}</div>
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
              Every eMotres motor carries all four AeroStator Core technologies — best-in-class cooling, tangential magnetization, rectangular copper windings and simplified manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cianoMotors.map(motor => (
              <div
                key={motor.slug}
                className="group relative bg-surface-secondary rounded-2xl border border-border hover:border-brand/40 hover:shadow-lg transition-all duration-200 overflow-hidden"
              >
                {/* Invisible overlay link covering the whole card */}
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a
                  href={`/shop/${motor.slug}/`}
                  className="absolute inset-0 z-10"
                  aria-label={`View ${motor.name} specifications`}
                />

                {/* Image area */}
                <div className="bg-surface-tertiary flex items-center justify-center p-8 h-56 overflow-hidden rounded-t-2xl">
                  <img
                    src={motor.imageUrl}
                    alt={motor.name}
                    draggable="false"
                    className="max-h-full max-w-full object-contain transition-opacity duration-300 group-hover:opacity-80 pointer-events-none select-none mix-blend-multiply"
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

                  {motor.highlight && (
                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-brand bg-orange-50 border border-orange-100 rounded-lg px-3 py-2">
                      <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                      </svg>
                      {motor.highlight}
                    </div>
                  )}

                  <div className="mt-5 flex items-center justify-between">
                    <span className="flex items-baseline gap-2">
                      <span className="text-lg font-extrabold text-text-primary">{motor.price}</span>
                      {motor.priceTag && (
                        <span className="text-[10px] font-semibold uppercase tracking-wide text-amber-800 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">
                          {motor.priceTag}
                        </span>
                      )}
                    </span>
                    <div className="flex items-center gap-1 text-sm font-semibold text-brand group-hover:gap-2 transition-all">
                      View specifications
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
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
                Four technologies.<br />One stator.
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
                <div key={tech.label} className="bg-surface-primary rounded-xl border border-border p-5 flex gap-4 items-center">
                  <div className="flex-shrink-0 w-40 h-32 bg-orange-50 rounded-xl flex items-center justify-center overflow-hidden">
                    <img
                      src={tech.img}
                      alt={tech.label}
                      className="max-w-full max-h-full object-contain p-2 mix-blend-multiply"
                    />
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
                img: '/images/app-drone.jpg',
              },
              {
                title: 'Light Aviation',
                desc: 'Reliable, sealed and high-efficiency — suitable for certified light electric aircraft and hybrid propulsion.',
                img: '/images/app-aviation.jpg',
              },
              {
                title: 'Robotics',
                desc: 'High torque density and compact geometry make CIANO motors ideal for robot joints and actuators demanding peak performance.',
                img: '/images/app-robotics.jpg',
              },
              {
                title: 'Marine',
                desc: 'IP65 sealed housing and corrosion-resistant design make CIANO motors ready for the harshest marine conditions.',
                img: '/images/app-marine.jpg',
              },
            ].map(app => (
              <div key={app.title} className="bg-surface-secondary rounded-2xl border border-border overflow-hidden text-left group hover:shadow-lg transition-shadow">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={app.img}
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-text-primary mb-2">{app.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{app.desc}</p>
                </div>
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
