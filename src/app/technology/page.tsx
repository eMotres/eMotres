import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electric Motor Technology | eMotres',
  description: 'Learn about the patented technologies inside eMotres motors: tangential magnet polarization, grain oriented steel, rectangular copper wire, IP65 sealing, and high-efficiency cooling.',
};

const technologies = [
  {
    title: 'Tangential Magnets Polarization',
    description: 'Our proprietary magnet arrangement enhances magnetic field concentration beyond what standard Halbach arrays achieve. Magnets are installed without adhesive — enabling easy removal and re-magnetization. This technique delivers superior torque density in inrunner designs compared to outrunner motors of equivalent diameter and mass.',
    highlights: [
      'Magnetic field strength up to 1.5× higher than radial construction',
      'No adhesive required — easy magnet removal and replacement',
      'Best torque-to-weight ratio on the market',
    ],
    images: [
      { src: '/images/Tangential-magnets-polarization-3.webp', alt: 'Tangential magnets polarization' },
      { src: '/images/Tangential-magnets-polarization-1.webp', alt: 'Tangential magnets polarization detail' },
    ],
  },
  {
    title: 'Grain Oriented (GO) Steel',
    description: 'The stator teeth and core use grain-oriented electrical steel, which provides superior magnetic permeability along the grain direction. This material reaches saturation at 1.9 T — significantly higher than standard electrical steel — allowing narrower stator teeth while handling greater magnetic flux.',
    highlights: [
      '~5% performance improvement over standard steel',
      'Saturation at 1.9 T — best-in-class flux capacity',
      'Enables more compact stator geometry',
    ],
    images: [
      { src: '/images/Grain-oriented-steel-motors.png', alt: 'Grain oriented steel stator' },
      { src: '/images/Grain-oriented-steel-motors-2.jpg', alt: 'Grain oriented steel detail' },
    ],
  },
  {
    title: 'Rectangular Copper Wire',
    description: 'All eMotres motors use rectangular (flat) copper wire for stator windings instead of conventional round wire. This maximizes the fill factor — the ratio of copper to available slot area — resulting in lower resistance, higher current density, and better efficiency.',
    highlights: [
      'Fill factor ~70% vs ~45% for round wire',
      'Higher current density capability',
      'Lower winding resistance = less heat generation',
    ],
    images: [
      { src: '/images/Rectangular-copper-wire.png', alt: 'Rectangular copper wire winding' },
      { src: '/images/Rectangular-copper-wire-2.png', alt: 'Rectangular copper wire cross section' },
    ],
  },
  {
    title: 'IP65 Fully Sealed Design',
    description: 'Every motor is completely sealed against dust ingress and low-pressure water jets from any direction. This makes eMotres motors reliable in the most demanding environments — rain, dust, spray, and harsh industrial conditions.',
    highlights: [
      'Complete dust and water protection',
      'Reliable in rain, spray, industrial environments',
      'No maintenance of seals required',
    ],
    images: [
      { src: '/images/IP65-designe-1.webp', alt: 'IP65 sealed motor design' },
    ],
  },
  {
    title: 'High-Efficiency Cooling System',
    description: 'Our innovative thermal management system combines a floating radiator design with minimal temperature-dependent gaps, high thermal conductivity insulation, and ceramic insulation for enhanced heat transfer. A centrifugal fan promotes air circulation between coils.',
    highlights: [
      'Floating radiator with minimal thermal expansion gaps',
      'Ceramic insulation for superior heat transfer',
      'Centrifugal fan for inter-coil air circulation',
    ],
    images: [
      { src: '/images/Cooling.png', alt: 'Motor cooling system' },
    ],
  },
];

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-surface-primary">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-5xl">
        <header className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand bg-orange-50 px-3 py-1 rounded-full">Technology</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mt-4 mb-6">
            Patented Motor Technology
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Every eMotres motor combines five proprietary technologies to achieve the highest torque density available on the market today.
          </p>
        </header>

        <div className="space-y-10">
          {technologies.map((tech, i) => (
            <div key={tech.title} className="bg-surface-secondary rounded-2xl p-8 border border-surface-tertiary">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 bg-brand rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-text-primary mb-3">{tech.title}</h2>
                  <p className="text-text-secondary leading-relaxed mb-5">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.highlights.map(h => (
                      <li key={h} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="text-brand font-bold mt-0.5">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {tech.images.length > 0 && (
                <div className={`grid gap-4 ${tech.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  {tech.images.map(img => (
                    <img key={img.src} src={img.src} alt={img.alt} className="w-full rounded-xl object-cover" />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">See the technology in action</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/shop" className="bg-brand text-white font-bold py-3 px-8 rounded-xl hover:bg-brand-dark transition-colors">
              View All Motors
            </Link>
            <Link href="/radial-go-and-axial-motors-technology" className="bg-surface-secondary text-text-primary font-bold py-3 px-8 rounded-xl hover:bg-surface-tertiary transition-colors border border-surface-tertiary">
              Radial GO vs Axial →
            </Link>
          </div>
        </div>
      </div>    </main>
  );
}
