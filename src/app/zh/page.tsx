import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '高性能无人机与航空电机',
  description:
    'eMotres CIANO 电机——专利 AeroStator Core 技术，市场领先的扭矩密度。IP65 密封、扁平铜线绕组，专为无人机、UAV、航空与机器人打造。',
  alternates: { canonical: '/zh', languages: { en: '/', 'zh-CN': '/zh' } },
  openGraph: {
    type: 'website',
    siteName: 'eMotres',
    locale: 'zh_CN',
    title: '高性能无人机与航空电机 | eMotres',
    description: 'eMotres CIANO 电机——专利 AeroStator Core 技术，市场领先的扭矩密度，专为无人机、UAV 与航空打造。',
    url: '/zh',
    images: [{ url: '/images/electric-motor.webp', width: 1200, height: 630, alt: 'eMotres AeroStator Core 电机' }],
  },
};

const stats = [
  { value: '1.5×', label: '相比径向结构更高的磁场' },
  { value: 'IP65', label: '可选全密封结构' },
  { value: '~75%', label: '铜槽满率（圆线仅 45%）' },
  { value: '15', label: 'N·m/kg 比扭矩——原型验证' },
];

const technologies = [
  {
    label: '一流的风冷与液冷',
    desc: '线圈正上方的开口让冷却风或液体以最短热路径从绕组直达散热器——中间没有厚轭部阻隔。散热表面积是标准定子的 2 倍。',
    img: '/images/tech-cooling.png',
  },
  {
    label: '切向磁化',
    desc: '磁通聚集超越标准 Halbach 阵列——无需胶粘，易于重新充磁。',
    img: '/images/tech-tangential.png',
  },
  {
    label: '扁平铜线',
    desc: '约 75% 的槽满率。更低电阻、更高电流密度、更少发热。',
    img: '/images/tech-wire.png',
  },
  {
    label: '单层绕组',
    desc: '线圈数量是标准设计的一半——绕线时间更短、生产成本更低、可靠性更高。',
    img: '/images/tech-simplicity.png',
  },
];

const cianoMotors: {
  slug: string;
  name: string;
  tagline: string;
  specs: { k: string; v: string }[];
  protection: string;
  price: string;
  priceTag?: string;
  highlight?: string;
  imageUrl: string;
}[] = [
  {
    slug: 'ciano-40-12',
    name: 'CIANO14 40_12',
    tagline: '紧凑精密',
    specs: [
      { k: '功率', v: '1,400 W' },
      { k: '扭矩', v: '0.70 Nm' },
      { k: '重量', v: '0.125 kg' },
      { k: '电压', v: '15–25 V' },
    ],
    protection: '开放式结构',
    price: '€300',
    priceTag: '样品',
    highlight: '同级别 2 倍持续功率与推力',
    imageUrl: '/ciano14-40-12.png',
  },
  {
    slug: 'ciano-150-30',
    name: 'CIANO28 150_30',
    tagline: '中功率航空',
    specs: [
      { k: '功率', v: '14,400 W' },
      { k: '扭矩', v: '43.5 Nm' },
      { k: '重量', v: '3 kg' },
      { k: '电压', v: '47–76 V' },
    ],
    protection: '开放式结构',
    price: '€1,000',
    imageUrl: '/ciano28-150-30.png',
  },
];

const applications = [
  { title: '无人机', desc: '从紧凑型竞速无人机到重载多旋翼平台——CIANO 电机提供真正重要的扭矩密度。', img: '/images/app-drone.jpg' },
  { title: '轻型航空', desc: '可靠、密封、高效——适用于认证的轻型电动飞机与混合动力推进。', img: '/images/app-aviation.jpg' },
  { title: '机器人', desc: '高扭矩密度与紧凑结构，使 CIANO 电机成为对峰值性能有要求的机器人关节与执行器的理想之选。', img: '/images/app-robotics.jpg' },
  { title: '船舶海事', desc: 'IP65 密封外壳与防腐设计，使 CIANO 电机可应对最严苛的海洋环境。', img: '/images/app-marine.jpg' },
];

export default function HomeZh() {
  return (
    <main className="flex flex-col min-h-screen bg-surface-primary text-text-primary">

      {/* ─── HERO ─── */}
      <section className="relative bg-surface-primary pt-16 pb-0 px-4 sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center pt-10 pb-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand mb-8">
              <span className="w-6 h-px bg-brand inline-block" />
              专利电机技术
              <span className="w-6 h-px bg-brand inline-block" />
            </span>

            <div className="flex justify-center mb-8">
              <img
                src="/aerostator-core.png"
                alt="AeroStator Core — eMotres 专利电机定子"
                className="w-full max-w-xl object-contain select-none drop-shadow-xl"
              />
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-text-primary leading-tight mb-4">
              AeroStator
              <br />
              <span className="text-brand">Core</span>
            </h1>

            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-8">
              四项专利技术，集成于同一电机架构。市场上扭矩密度最高的电机——专为无人机、UAV、航空与机器人打造。
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Link href="/shop" className="bg-brand text-white font-bold py-3.5 px-8 rounded-xl hover:bg-brand-dark transition-colors text-sm">
                查看全部电机
              </Link>
              <Link href="/technology" className="bg-surface-secondary text-text-primary font-semibold py-3.5 px-8 rounded-xl hover:bg-surface-tertiary transition-colors border border-border text-sm">
                工作原理 →
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
            <h2 className="text-4xl font-extrabold text-text-primary mt-3">基于 AeroStator Core 打造</h2>
            <p className="text-text-secondary mt-3 max-w-xl mx-auto">
              每一台 eMotres 电机都集成全部四项 AeroStator Core 技术——一流散热、切向磁化、扁平铜线绕组与简化制造。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cianoMotors.map(motor => (
              <div key={motor.slug} className="group relative bg-surface-secondary rounded-2xl border border-border hover:border-brand/40 hover:shadow-lg transition-all duration-200 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href={`/shop/${motor.slug}/`} className="absolute inset-0 z-10" aria-label={`查看 ${motor.name} 规格`} />

                <div className="bg-surface-tertiary flex items-center justify-center p-8 h-56 overflow-hidden rounded-t-2xl">
                  <img src={motor.imageUrl} alt={motor.name} draggable="false" className="max-h-full max-w-full object-contain transition-opacity duration-300 group-hover:opacity-80 pointer-events-none select-none mix-blend-multiply" />
                </div>

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

                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {motor.specs.map(spec => (
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
                      查看规格
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
              查看完整产品线 →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TECHNOLOGY BREAKDOWN ─── */}
      <section className="bg-surface-secondary border-y border-border py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="md:flex md:items-start md:gap-16">
            <div className="md:w-2/5 mb-12 md:mb-0 md:sticky md:top-24">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand">核心技术</span>
              <h2 className="text-3xl font-extrabold text-text-primary mt-3 mb-4">四项技术，<br />一个定子。</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                每一台 eMotres 电机都集成多项专利创新，协同将扭矩密度推升至传统设计无法企及的水平。
              </p>
              <Link href="/technology" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all">
                完整技术介绍
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="md:w-3/5 space-y-4">
              {technologies.map(tech => (
                <div key={tech.label} className="bg-surface-primary rounded-xl border border-border p-5 flex gap-4 items-center">
                  <div className="flex-shrink-0 w-40 h-32 bg-orange-50 rounded-xl flex items-center justify-center overflow-hidden">
                    <img src={tech.img} alt={tech.label} className="max-w-full max-h-full object-contain p-2 mix-blend-multiply" />
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
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">应用领域</span>
          <h2 className="text-3xl font-extrabold text-text-primary mt-3 mb-10">为严苛环境而生</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {applications.map(app => (
              <div key={app.title} className="bg-surface-secondary rounded-2xl border border-border overflow-hidden text-left group hover:shadow-lg transition-shadow">
                <div className="relative h-44 overflow-hidden">
                  <img src={app.img} alt={app.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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

      {/* ─── CUSTOM ORDER CTA ─── */}
      <section className="bg-surface-secondary border-t border-border py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">定制订单</span>
          <h2 className="text-3xl font-extrabold text-text-primary mt-3 mb-4">需要定制电机？</h2>
          <p className="text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
            我们的工程师可按您的精确规格设计电机（定制直径、长度、电压范围；可选 IP67 / IP68 密封；定制 KV、扭矩与转速目标；支持批量生产）。填写表单，我们将在 2 个工作日内估算大致成本。
          </p>
          <Link href="/get-a-quote" className="inline-block bg-brand text-white font-bold py-4 px-10 rounded-xl hover:bg-brand-dark transition-colors">
            获取报价
          </Link>
        </div>
      </section>
    </main>
  );
}
