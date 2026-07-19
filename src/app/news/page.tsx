import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News',
  alternates: { canonical: '/news/' },
  description:
    'Latest from eMotres — AeroStator Core™ test results, milestones and announcements: CIANO14 40_12 and CIANO 150_30 bench tests, efficiency benchmarks vs T-Motor, and continuous-power records.',
};

type NewsItem = {
  date: string;
  title: string;
  image?: string;
  video?: string;
  intro: string[];
  metrics?: { k: string; v: string }[];
  outro?: string[];
  url: string;
};

// Newest first.
const news: NewsItem[] = [
  {
    date: 'July 18, 2026',
    title: '84.2 % system efficiency on FOC — the CIANO14 40_12 completes its sinusoidal round',
    image: '/images/news/news-jul18-foc.webp',
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
      'Why it matters: a standard 3115 motor tops out around 300–350 W continuous. This one sustains 6 kW/kg — more than 2× the continuous power of any 3115-class motor we’ve benchmarked against. Same form factor, double the sustained output. In UAV propulsion, every single watt-hour saved is extra payload and flight time.',
    ],
    url: 'https://www.linkedin.com/posts/vadim-shcherbakov-4b2aa020_foc-electricmotors-uav-ugcPost-7483804372259246080-Yv2D',
  },
  {
    date: 'June 23, 2026',
    title: '6 kW/kg continuous — the CIANO14 40_12 runs 30 minutes straight',
    image: '/images/news/news-jun23-continuous.jpg',
    video: '/videos/news-jun23-continuous.mp4',
    intro: [
      'We ran the CIANO14 40_12 on a propeller test stand for 30 minutes straight — roughly double the sustained power of any 3115-class motor on the market. Here’s what the stand logged at minute 29 (125 g motor):',
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
      'A standard 3115 tops out at 300–350 W continuous before hitting thermal limits. Same form factor — twice the sustained power. The winding stays within its 200 °C insulation limit throughout.',
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
