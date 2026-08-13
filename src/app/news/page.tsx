import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News',
  alternates: {
    canonical: '/news/',
    languages: { en: '/news/', 'zh-CN': '/zh/news/' },
  },
  description:
    'Latest from eMotres — AeroStator Core™ test results, milestones and announcements: CIANO14 40_12 and CIANO 150_30 bench tests, efficiency benchmarks vs T-Motor, and continuous-power records.',
};

type NewsItem = {
  date: string;
  title: string;
  image?: string;
  /** Extra stills rendered stacked under the intro (LinkedIn-style gallery). */
  images?: string[];
  video?: string;
  intro: string[];
  metrics?: { k: string; v: string }[];
  outro?: string[];
  url: string;
};

// Newest first.
const news: NewsItem[] = [
  {
    date: 'August 13, 2026',
    title: '8 kW/kg continuous — on a 125 g motor',
    images: ['/images/news/news-aug13-8kwkg-table.png', '/images/news/news-aug13-8kwkg-thermal.webp'],
    intro: [
      'We just measured 1,014 W of continuous shaft power from the CIANO14 40_12 — 8.11 kW/kg from a 125-gram motor, on a 3-blade 10×5 propeller at 24.6 V / 55 A.',
      'What makes it possible: the AeroStator Core™ topology gives twice the stator cooling surface of a conventional design; rectangular wire coils halve the winding resistance — and the solid copper cross-section doubles as a heat sink, so the same part that generates less heat also carries it away; and an optimized drive, achieved together with FOURnamics GmbH and their nCTRL ESC.',
    ],
    metrics: [
      { k: 'Continuous shaft power', v: '1,014 W' },
      { k: 'Power density (shaft)', v: '8.11 kW/kg' },
      { k: 'Thrust', v: '4,300 g' },
      { k: 'Speed', v: '14,400 rpm' },
      { k: 'System efficiency', v: '74.9 %' },
      { k: 'Coil temperature', v: '201 °C (IR, max)' },
    ],
    outro: [
      'A stator topology can only deliver what the ESC lets it deliver — and nCTRL let it deliver everything.',
    ],
    url: 'https://www.linkedin.com/posts/vadim-shcherbakov-4b2aa020_8-kwkg-continuous-on-a-125-g-motor-we-ugcPost-7493606955014483968-Obrg',
  },
  {
    date: 'August 12, 2026',
    title: 'Half the mass, same thrust class — CIANO14 vs the 4215 heavy-lift motors',
    images: [
      '/images/news/news-aug12-4215-photo.webp',
      '/images/news/news-aug12-4215-table.png',
      '/images/news/news-aug12-4215-charts.png',
    ],
    intro: [
      'Want to take half a kilo off your quadcopter without giving up efficiency? Look at your motors — that is where the weight is hiding. The 4215-class motors most heavy-lift quads fly weigh 257–262 g each. The CIANO14 40_12 weighs just 125 g — and covers the exact same thrust envelope.',
      'Together with FOURnamics GmbH and their nCTRL ESC we benchmarked the CIANO14 40_12 against three 4215-class motors on the same 6S bench (AERONAUT 12×5 2-blade):',
    ],
    metrics: [
      { k: 'Peak system efficiency', v: '93.6 % (motor + ESC)' },
      { k: 'Best 4215 in test', v: '78.1 %' },
      { k: 'At full throttle', v: '80.5 % vs 71.3 %' },
      { k: 'Weight saved', v: '>125 g per motor · ~500 g per quad' },
      { k: 'Thrust @ 1,500 W', v: '5,237 g — best in test' },
      { k: 'Thrust per motor gram', v: '41.9 — 2.1× the best 4215' },
    ],
    outro: [
      'Every aerodynamic advantage was on the competitors’ side — their 3-blade 13″ props offer ~17 % more disc area than our 2-blade 12″ — yet the CIANO14 still delivered superior efficiency.',
      'And 500 g off the airframe is never just 500 g: it means less thrust required to hover, lower current draw, and extended flight time — or the ability to carry 500 g more payload with zero penalty. Half the mass. Same thrust class. Higher efficiency.',
    ],
    url: 'https://www.linkedin.com/posts/vadim-shcherbakov-4b2aa020_electricmotors-uav-dronetechnology-ugcPost-7493171849166573569-l_DV',
  },
  {
    date: 'July 21, 2026',
    title: 'Two coaxial motors, or one bigger prop? The payoff is flight time',
    image: '/images/news/news-jul21-coaxial.webp',
    intro: [
      'A common heavy-lift setup: a coaxial pair of T-Motor V3115 on 10″ props — 600 W of shaft power. But coaxial props fight for the same air — the lower one loses ~20 % of its efficiency in the wake of the upper.',
      'Our proposal: replace them with one CIANO14 40_12 on a 12″ prop, tuned to the same thrust. On AeroStator Core™ technology. Same thrust (~2,865 g), same battery:',
    ],
    metrics: [
      { k: 'Standard BLDC', v: '−21 % power · +27 % flight' },
      { k: 'With FOC controller', v: '−28 % power · +39 % flight' },
      { k: 'Weight removed', v: '~167 g (1 motor + 1 ESC)' },
      { k: 'Single 12″ prop', v: '506 W shaft · 9,300 rpm' },
      { k: 'Torque demand', v: '~2× vs 10″' },
      { k: 'Efficiency', v: '~69 % (BLDC) → ~76 % (FOC, est.)' },
    ],
    outro: [
      'The catch: the single 12″ prop runs at ~2× the torque — where our flat-wire winding earns its place, holding high torque at high efficiency without overheating.',
      'These figures are an estimate — the 12″ operating point is modeled from our measured 10″ data. Bench validation on 12″ is next, and we’ll publish the numbers. AeroStator Core™ is open for licensing and co-manufacturing partners.',
    ],
    url: 'https://www.linkedin.com/posts/vadim-shcherbakov-4b2aa020_drones-uav-evtol-activity-7485227310363860992-R9El',
  },
  {
    date: 'July 18, 2026',
    title: '84.2 % system efficiency on FOC — the CIANO14 40_12 completes its sinusoidal round',
    image: '/images/news/news-jul18-foc.webp',
    video: '/videos/news-jul18-foc.mp4',
    intro: [
      'We just finished the FOC round on the CIANO14 40_12 — our 125-gram 3115-class inrunner, built on AeroStator Core™. Peak system efficiency (controller + motor, measured at the bus) reached 84.2 %, holding an 82–84 % plateau across the working range. For comparison, our earlier run on a trapezoidal BLDC controller peaked at 76.9 %.',
    ],
    metrics: [
      { k: 'Peak system efficiency', v: '84.2 %' },
      { k: 'Efficiency plateau', v: '82–84 %' },
      { k: 'vs trapezoidal BLDC', v: '+7 pp (76.9 % peak)' },
      { k: 'Propeller', v: '10×4.5 · 2-blade' },
      { k: 'Bus voltage', v: '22 V' },
      { k: 'Testing', v: 'Propeller dyno · 12-point sweep' },
    ],
    outro: [
      'Why it matters: a standard 3115 motor tops out around 300–350 W continuous. This one sustains 6 kW/kg — more than 2.5× the continuous power of any 3115-class motor we’ve benchmarked against. Same form factor, 2.5× the sustained output. In UAV propulsion, every single watt-hour saved is extra payload and flight time.',
    ],
    url: 'https://www.linkedin.com/posts/vadim-shcherbakov-4b2aa020_foc-electricmotors-uav-ugcPost-7483804372259246080-Yv2D',
  },
  {
    date: 'June 23, 2026',
    title: '6 kW/kg continuous — the CIANO14 40_12 runs 30 minutes straight',
    image: '/images/news/news-jun23-continuous.jpg',
    video: '/videos/news-jun23-continuous.mp4',
    intro: [
      'We ran the CIANO14 40_12 on a propeller test stand for 30 minutes straight — roughly 2.5× the sustained power of any 3115-class motor on the market. Here’s what the stand logged at minute 29 (125 g motor):',
    ],
    metrics: [
      { k: 'Thrust', v: '3,455 g' },
      { k: 'Shaft power', v: '770 W (6.16 kW/kg)' },
      { k: 'Electrical input', v: '1,038 W' },
      { k: 'System efficiency', v: '74.2 %' },
      { k: 'Current', v: '43.85 A @ 23.7 V' },
      { k: 'Max temp', v: '150 °C (stabilized)' },
    ],
    outro: [
      'A standard 3115 tops out at 300–350 W continuous before hitting thermal limits. Same form factor — 2.5× the sustained power. The winding stays within its 200 °C insulation limit throughout.',
    ],
    url: 'https://www.linkedin.com/posts/vadim-shcherbakov-4b2aa020_electricmotors-bldc-aerostatorcore-activity-7475080394271358976-39zl',
  },
  {
    date: 'June 16, 2026',
    title: 'An inrunner that beats the class-leading outrunner',
    image: '/images/news/news-jun16-vs-tmotor.jpg',
    video: '/videos/news-jun16-vs-tmotor.mp4',
    intro: [
      'First bench tests of the CIANO14 40_12, built on AeroStator Core™, challenge a basic assumption in this class. Conventional wisdom says outrunners own drone propulsion on efficiency and thrust density — our first data says otherwise.',
      'Benchmarked on the same propeller and the same 24 V against the class-leading T-Motor V3115 outrunner:',
    ],
    metrics: [
      { k: 'System efficiency', v: '+12–13 pp at high thrust' },
      { k: 'Peak system efficiency', v: '76.9 % (75–77 % plateau)' },
      { k: 'T-Motor V3115 at max', v: '~64 %' },
    ],
    outro: [
      'And these are trapezoidal BLDC results — we haven’t switched to FOC yet, so there’s clear room to grow. Next: a controller integrated directly into the motor, 0.15 mm laminations, and foil (flat) coils.',
    ],
    url: 'https://www.linkedin.com/posts/vadim-shcherbakov-4b2aa020_drones-uav-electricmotors-activity-7472592376310468608-pxKm',
  },
  {
    date: 'May 7, 2026',
    title: 'First test results — the 150_30 reaches 50 kg continuous thrust',
    image: '/images/news/news-may-150-30.jpg',
    intro: [
      'The first drone-propulsion motor built on AeroStator Core™ completed its initial bench tests on a thrust stand. At 50 kg continuous thrust (56″ propeller, BLDC controller):',
    ],
    metrics: [
      { k: 'Continuous thrust', v: '50 kg' },
      { k: 'Shaft power', v: '~7,800 W' },
      { k: 'Torque', v: '~32 N·m (10.7 N·m/kg)' },
      { k: 'Specific power', v: '2,600 W/kg' },
      { k: 'Motor efficiency', v: '91 %' },
      { k: 'Operating temp', v: '115 °C (air-cooled)' },
    ],
    outro: [
      'The AeroStator Core™ architecture turns the stator yoke into an active cooling structure — enabling tangential polarization with standard F45SH magnets at performance levels that usually demand much heavier or more expensive cooling. The roadmap: 60 kg continuous thrust at the same 3 kg, via FOC integration, 28- vs 42-pole analysis, and 63″ propeller tests.',
    ],
    url: 'https://www.linkedin.com/posts/vadim-shcherbakov-4b2aa020_motres-aerostatorcore-dronemotors-activity-7458072864370462720-A9jB',
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-surface-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl">
        <header className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand bg-blue-50 px-3 py-1 rounded-full">
            News
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mt-4 mb-5">
            Latest from eMotres
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Test results, milestones and announcements from the AeroStator Core™ programme.
          </p>
        </header>

        <div className="space-y-8">
          {news.map((item) => (
            <article key={item.url} className="bg-surface-secondary rounded-2xl border border-border p-7 sm:p-8">
              {item.video ? (
                <div className="rounded-xl overflow-hidden mb-5 bg-black flex justify-center">
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    poster={item.image}
                    className="max-h-[30rem] w-auto"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                </div>
              ) : item.images ? (
                <div className="space-y-3 mb-5">
                  {item.images.map((src) => (
                    <div key={src} className="rounded-xl overflow-hidden bg-surface-tertiary flex justify-center">
                      <img src={src} alt={item.title} loading="lazy" className="max-h-[30rem] w-auto max-w-full object-contain" />
                    </div>
                  ))}
                </div>
              ) : item.image ? (
                <div className="rounded-xl overflow-hidden mb-5 bg-surface-tertiary flex justify-center">
                  <img src={item.image} alt={item.title} loading="lazy" className="max-h-96 w-auto object-contain" />
                </div>
              ) : null}
              <time className="text-xs font-semibold uppercase tracking-wider text-brand">{item.date}</time>
              <h2 className="text-2xl font-bold text-text-primary mt-2 mb-4 leading-tight">{item.title}</h2>

              {item.intro.map((p) => (
                <p key={p} className="text-text-secondary leading-relaxed mb-4">
                  {p}
                </p>
              ))}

              {item.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5">
                  {item.metrics.map((m) => (
                    <div key={m.k} className="bg-surface-primary rounded-lg border border-border px-3 py-2">
                      <div className="text-xs text-text-secondary">{m.k}</div>
                      <div className="text-sm font-bold text-text-primary">{m.v}</div>
                    </div>
                  ))}
                </div>
              )}

              {item.outro?.map((p) => (
                <p key={p} className="text-text-secondary leading-relaxed mb-4">
                  {p}
                </p>
              ))}

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all mt-1"
              >
                Read on LinkedIn
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
