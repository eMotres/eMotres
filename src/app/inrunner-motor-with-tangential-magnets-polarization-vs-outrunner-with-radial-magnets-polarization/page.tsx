import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inrunner Motor with Tangential Magnets vs Outrunner with Radial Magnets',
  alternates: { canonical: '/inrunner-motor-with-tangential-magnets-polarization-vs-outrunner-with-radial-magnets-polarization/' },
  description: 'Technical analysis comparing inrunner motors with tangential magnet polarization vs outrunner motors with radial polarization. Simulation results, torque equations, and performance data.',
};

export default function InrunnerVsOutrunnerPage() {
  return (
    <main className="min-h-screen bg-surface-primary">

      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <nav className="text-sm text-text-secondary mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-brand transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-brand transition-colors">Technology</Link>
          <span>/</span>
          <span className="text-text-primary">Inrunner vs Outrunner Motor</span>
        </nav>

        <header className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand bg-blue-50 px-3 py-1 rounded-full">Technology</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mt-4 mb-6 leading-tight">
            Inrunner Motor with Tangential Magnets Polarization vs Outrunner with Radial Magnets Polarization
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            A simulation-based analysis demonstrating how tangential magnet polarization in inrunner motors achieves significantly greater torque performance compared to outrunner designs with radial polarization.
          </p>
        </header>

        <div className="text-text-primary">

          <img src="/images/outranner-vs-inranner-1024x479.webp" alt="Outrunner vs Inrunner motor comparison" className="w-full rounded-2xl shadow-lg mb-12" />
          <h2 className="text-2xl font-bold mt-4 mb-4 text-text-primary">Torque Equation in Synchronous Motors</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            The torque in a synchronous motor or generator is directly proportional to the stator field strength, rotor field strength, and the sine of the angle between them — as well as the area of the gap between the stator and the rotor.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">This simplifies to the fundamental torque equation:</p>

          <div className="bg-surface-secondary rounded-xl p-6 mb-8 text-center">
            <p className="text-2xl font-bold text-text-primary font-mono">T<sub>e</sub> ~ R × R × Sc × B</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-left max-w-sm mx-auto text-sm text-text-secondary">
              <div><strong className="text-text-primary">R</strong> — gap radius</div>
              <div><strong className="text-text-primary">Sc</strong> — coil cross section</div>
              <div><strong className="text-text-primary">B</strong> — magnetic field in gap</div>
              <div><strong className="text-text-primary">T<sub>e</sub></strong> — electromagnetic torque</div>
            </div>
          </div>

          <p className="text-text-secondary leading-relaxed mb-6">
            For motors with identical diameter, length, mass, and current density, the equation reduces to show that <strong>magnetic field strength (B)</strong> and coil cross-section are the primary differentiators between motor designs.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-text-primary">Magnetic Field at Air Gap — Outrunner Motor</h2>
          <img src="/images/air-gap-for-outrunner-motor-1024x466.webp" alt="Air gap for outrunner motor" className="w-full rounded-xl shadow-md mb-6" />
          <p className="text-text-secondary leading-relaxed mb-6">
            In a conventional outrunner motor with radial magnet polarization, the magnetic field at the air gap is limited by the geometry of the radial magnet arrangement. The magnets are polarized perpendicular to the rotor surface, and the resulting flux density in the air gap is constrained by the magnet grade and volume.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            Additionally, outrunner configurations typically require larger air gaps and have structural limitations that reduce the effective magnetic field reaching the stator windings.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-text-primary">Magnetic Field at Air Gap — Inrunner Motor</h2>
          <img src="/images/air-gap-for-inrunner-motor.webp" alt="Air gap for inrunner motor with tangential magnets" className="w-full rounded-xl shadow-md mb-6" />
          <p className="text-text-secondary leading-relaxed mb-6">
            The inrunner configuration with <strong>tangential magnet polarization</strong> achieves a fundamentally different magnetic circuit. Magnets are polarized tangentially (along the direction of rotation), creating a flux concentration effect between adjacent magnets.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <p className="text-blue-900 font-semibold mb-2">Key advantage:</p>
            <p className="text-blue-800">
              The tangential magnetic array construction for inrunner motors can increase magnetic field strength by up to <strong>1.5×</strong> compared to standard radial magnet construction — for motors of equal size, weight and current density.
            </p>
          </div>

          <p className="text-text-secondary leading-relaxed mb-6">
            This improvement comes from the Halbach-like flux concentration between tangentially polarized magnets. The concentrated field effectively increases B in the torque equation, directly multiplying output torque without increasing motor size or weight.
          </p>

          <img src="/images/Tangential-magnetic-polarization.webp" alt="Tangential magnetic polarization" className="w-full rounded-xl shadow-md mt-8 mb-4" />
          <h2 className="text-2xl font-bold mt-8 mb-4 text-text-primary">Simulation Results</h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Simulation data comparing two motors with identical specifications:
          </p>
          <div className="bg-surface-secondary rounded-xl overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-tertiary">
                  <th className="text-left p-4 font-semibold text-text-primary">Parameter</th>
                  <th className="text-center p-4 font-semibold text-text-primary">Outrunner (Radial)</th>
                  <th className="text-center p-4 font-semibold text-brand">Inrunner (Tangential)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-tertiary">
                <tr>
                  <td className="p-4 text-text-secondary">Diameter</td>
                  <td className="p-4 text-center text-text-primary">150 mm</td>
                  <td className="p-4 text-center text-text-primary">150 mm</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-secondary">Weight</td>
                  <td className="p-4 text-center text-text-primary">5.4 kg</td>
                  <td className="p-4 text-center text-text-primary">5.4 kg</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-secondary">Magnet polarization</td>
                  <td className="p-4 text-center text-text-primary">Radial</td>
                  <td className="p-4 text-center font-semibold text-brand">Tangential</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-secondary">Air gap field (B)</td>
                  <td className="p-4 text-center text-text-primary">1.0×</td>
                  <td className="p-4 text-center font-semibold text-brand">up to 1.5×</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-secondary">Torque output</td>
                  <td className="p-4 text-center text-text-primary">Baseline</td>
                  <td className="p-4 text-center font-semibold text-brand">+30–50% higher</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-text-primary">Conclusion</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            The simulation results confirm that inrunner motors with tangential magnet polarization deliver significantly greater torque than outrunner designs of the same size and weight. This is the core technology behind eMotres patented motor construction.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Combined with grain-oriented steel stator cores, rectangular copper windings, and direct stator cooling, eMotres motors achieve the highest torque density available on the market — surpassing both conventional radial outrunners and axial flux motors.
          </p>
        </div>

        <div className="mt-16 pt-10 border-t border-surface-tertiary">
          <h3 className="text-xl font-bold text-text-primary mb-6">See also</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/radial-go-and-axial-motors-technology" className="bg-surface-secondary text-text-primary font-semibold py-3 px-6 rounded-xl hover:bg-surface-tertiary transition-colors border border-surface-tertiary text-sm">
              Radial GO vs Axial Motors →
            </Link>
            <Link href="/shop" className="bg-brand text-white font-bold py-3 px-8 rounded-xl hover:bg-brand-dark transition-colors">
              View All Motors
            </Link>
          </div>
        </div>
      </article>    </main>
  );
}
