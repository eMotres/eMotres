import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Radial and Axial Motor Technology Comparison',
  alternates: {
    canonical: '/radial-go-and-axial-motors-technology/',
    languages: {
      en: '/radial-go-and-axial-motors-technology/',
      'zh-CN': '/zh/radial-go-and-axial-motors-technology/',
    },
  },
  description: 'Technical comparison of radial motors with Grain Oriented (GO) steel cores vs axial motor designs (YASA, Emrax). Analysis of core material, winding, magnetic systems and efficiency.',
};

export default function RadialGoAxialPage() {
  return (
    <main className="min-h-screen bg-surface-primary">

      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <nav className="text-sm text-text-secondary mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-brand transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-brand transition-colors">Technology</Link>
          <span>/</span>
          <span className="text-text-primary">Radial GO and Axial Motors Technology</span>
        </nav>

        <header className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand bg-blue-50 px-3 py-1 rounded-full">Technology</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mt-4 mb-6 leading-tight">
            Radial GO and Axial Motors Technology
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed mb-8">
            A technical comparison of radial motors with Grain Oriented (GO) steel cores against axial motor designs from YASA and Emrax — analyzing performance across multiple engineering dimensions.
          </p>
          <img src="/images/motres-cooling-system.png" alt="Radial GO vs Axial motor comparison" className="w-full rounded-2xl shadow-lg" />
        </header>

        <div className="prose prose-lg max-w-none text-text-primary">

          <div className="grid grid-cols-2 gap-4 mt-12 mb-8">
            <img src="/images/soft-magnetic-composite.png" alt="Soft Magnetic Composite" className="rounded-xl w-full" />
            <img src="/images/Grain-Oriented-Steel.jpg" alt="Grain Oriented Steel" className="rounded-xl w-full" />
          </div>
          <h2 className="text-2xl font-bold mt-4 mb-4 text-text-primary">Core Material</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            The fundamental difference between these motor technologies begins with the core material. Axial motors from manufacturers like YASA and Emrax typically use <strong>Soft Magnetic Composite (SMC)</strong> — a material that offers simpler production but lower magnetic permeability.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            eMotres radial motors use <strong>Grain Oriented (GO) Steel</strong>, which requires more complex production methods but achieves significantly higher magnetic permeability — up to <strong>1.9 T saturation</strong>. This directly translates to greater magnetic flux and higher torque density.
          </p>
          <div className="bg-surface-secondary rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-text-primary mb-3">Manufacturing methods comparison:</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li className="flex gap-2"><span className="text-brand font-bold">YASA:</span> Pressing of SMC composite</li>
              <li className="flex gap-2"><span className="text-brand font-bold">Emrax:</span> Stamping of SMC composite</li>
              <li className="flex gap-2"><span className="text-brand font-bold">eMotres:</span> EDM cutting combined with stamping of GO steel</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-text-primary">Winding Configuration</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Axial motors present greater design complexity for coil fixing. YASA uses a plastic-top fixture, while Emrax employs an aluminum tube approach — which <em>"significantly reduces the fill factor and increases eddy current losses."</em>
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            In axial designs, the whole wire participates in torque creation. However, the constraints of the axial geometry limit practical fill factor improvements. In radial inrunner designs with slot winding, eMotres uses <strong>rectangular copper wire</strong> to maximize fill factor and minimize resistance losses.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-12 mb-4">
            <img src="/images/Axial-magnet.png" alt="Axial magnet" className="rounded-xl w-full" />
            <img src="/images/Radial-magnet.png" alt="Radial magnet" className="rounded-xl w-full" />
            <img src="/images/Motres_magnets.png" alt="eMotres tangential magnets" className="rounded-xl w-full" />
          </div>
          <h2 className="text-2xl font-bold mt-4 mb-4 text-text-primary">Magnetic Systems</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Axial motors require <strong>segmented magnets</strong> with axial polarization, which necessitates bonding and special measures to mitigate eddy current losses. The segmentation adds manufacturing complexity and potential reliability concerns.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            The radial inrunner approach employs <strong>tangential polarization magnets</strong> — a patented construction used in eMotres motors. This configuration produces a higher magnetic field while eliminating the need for magnet segmentation, reducing manufacturing complexity and improving reliability.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <p className="text-blue-900 font-medium">
              Tangential magnet polarization increases magnetic field strength by up to <strong>1.5×</strong> compared to standard radial construction — directly increasing torque output for the same motor size and weight.
            </p>
          </div>

          <img src="/images/axial_vs_radial.png" alt="Axial vs Radial efficiency comparison chart" className="w-full rounded-xl shadow-md mt-8 mb-4" />
          <h2 className="text-2xl font-bold mt-8 mb-4 text-text-primary">Key Findings</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            The performance analysis demonstrates that properly designed radial GO motors achieve comparable or superior efficiency to axial configurations, challenging the common industry assumption of axial motor superiority.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            eMotres radial motors offer:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'Higher torque density than equivalent axial flux motors',
              'Greater efficiency through GO steel and rectangular copper winding',
              'Lower manufacturing cost due to elimination of magnet segmentation',
              'Better reliability with fully sealed IP65 housing',
              'Simpler integration with standard FOC controllers',
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-text-secondary">
                <span className="text-brand mt-1 font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-text-primary">Conclusion</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            While axial flux motors have gained popularity in recent years, the data shows that radial motors with grain-oriented steel and tangential magnet polarization can match or exceed their performance in key metrics — while offering advantages in cost, reliability, and sealing.
          </p>
          <p className="text-text-secondary leading-relaxed">
            eMotres motors combine all of these technologies in a single patented design, making them the highest torque density motors available on the market today.
          </p>
        </div>

        <div className="mt-16 pt-10 border-t border-surface-tertiary">
          <h3 className="text-xl font-bold text-text-primary mb-6">Explore our motors</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/shop" className="bg-brand text-white font-bold py-3 px-8 rounded-xl hover:bg-brand-dark transition-colors">
              View All Motors
            </Link>
            <Link href="/get-a-quote" className="bg-surface-secondary text-text-primary font-bold py-3 px-8 rounded-xl hover:bg-surface-tertiary transition-colors border border-surface-tertiary">
              Request a Quote
            </Link>
          </div>
        </div>
      </article>    </main>
  );
}
