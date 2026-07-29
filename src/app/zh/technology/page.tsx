import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AeroStator Core™ — 专利电机技术',
  alternates: {
    canonical: '/zh/technology/',
    languages: { en: '/technology/', 'zh-CN': '/zh/technology/' },
  },
  description:
    'AeroStator Core™ 将切向磁化、扁平铜线、最短路径散热、简化绕组、单片箔线圈和陶瓷绝缘集成于一体，打造当前可量产的最高扭矩密度电机——并提供 IP65 密封和跨多个司法管辖区的专利组合。',
};

const stats = [
  { value: '1.5×', label: '相比径向更高的磁场' },
  { value: '~75%', label: '铜槽满率，相比圆线 35%' },
  { value: '15', label: 'N·m/kg 比扭矩密度——已验证' },
  { value: 'IP65', label: '可选全密封结构' },
];

type Tech = {
  title: string;
  tagline: string;
  img: string;
  status?: string;
  points?: { h: string; d: string }[];
  patented?: boolean;
  patent?: string;
  caption?: string;
  specs?: { k: string; v: string }[];
  why?: string;
};

const technologies: Tech[] = [
  {
    title: '切向磁化',
    tagline: '磁通汇聚效果超越标准 Halbach 阵列——无需胶粘，易于重新充磁。',
    img: '/images/tech-tangential.png',
    points: [
      {
        h: '磁场提升 1.5×',
        d: '切向磁体排布比标准径向或 Halbach 阵列更有效地汇聚磁通——在相同磁体体积下输出更大扭矩。',
      },
      {
        h: '无需胶粘',
        d: '磁体采用机械固定——无需环氧树脂。无需专用工具即可轻松拆卸，进行重新充磁或现场更换。',
      },
      {
        h: '最佳扭矩重量比',
        d: '采用切向磁体的内转子拓扑，在比扭矩（N·m/kg）方面优于同等直径和质量的外转子电机。',
      },
    ],
  },
  {
    title: '扁平铜线',
    tagline: '约 75% 槽满率，相比圆线约 35%——电阻更低、电流密度更高、发热更少。',
    img: '/images/tech-wire.png',
    points: [
      {
        h: '约 75% 槽满率，相比圆线约 35%',
        d: '扁平铜线对槽截面的填充效率大幅提升。每槽容纳更多铜意味着在相同绕组几何结构下电阻更低。',
      },
      {
        h: '更低的绕组电阻 = 更少发热',
        d: '更低的电阻直接降低 I²R 铜损。电机在相同输出下运行更凉，或在相同温度上限下输出更大功率。',
      },
      {
        h: '更高的电流密度',
        d: '相同的槽面积可承载更大的电流，从而在不增加电机尺寸或重量的前提下实现更高的峰值扭矩。',
      },
    ],
  },
  {
    title: '高效散热系统',
    tagline: '轭部开槽使散热从绕组到环境的路径尽可能最短——风冷或液冷皆可。',
    img: '/images/tech-cooling.png',
    points: [
      {
        h: '最短热路径',
        d: '每个线圈正上方的轭部开槽消除了绕组与冷却介质之间厚重的铁质屏障。热路径比标准定子缩短 2–5×。',
      },
      {
        h: '散热面积扩大 2×',
        d: '开槽几何结构使绕组与冷却介质（风或液体）之间的有效接触面积翻倍。面积越大，散热越快。',
      },
      {
        h: '风冷或液冷',
        d: '同一套热架构兼容两种介质——风冷用离心风扇，液冷用安装在轭部开槽上的歧管。两种方案之间无需重新设计。',
      },
    ],
  },
  {
    title: '单层绕组',
    tagline: '线圈数量比标准设计减少 2×——绕线时间更短、成本更低、可靠性更高。',
    img: '/images/tech-simplicity.png',
    points: [
      {
        h: '线圈数量比标准减少 2×',
        d: '采用集中绕组拓扑，在相同槽极配置下线圈数量仅为标准分布绕组的一半。绕线时间更短，人工成本更低。',
      },
      {
        h: '装配更简单',
        d: '更少的线圈意味着更少的接线、更少的故障点和更简单的质量控制。每个线圈均可单独检查和更换。',
      },
      {
        h: '更低的生产成本',
        d: '减少线圈数量同时降低了材料和装配时间。结合扁平铜线的高槽满率，电机的绕线成本更低，使用中更可靠。',
      },
    ],
  },
  {
    title: '箔线圈技术',
    tagline: '单片平板箔线圈——零焊接接头、消除涡流损耗点、提升槽满率。',
    img: '/images/aerostator/foil-coil.jpg',
    status: '研发中',
    patented: true,
    caption: '铜箔与铝箔线圈原型',
    specs: [
      { k: '制造方式', v: '1 张平板' },
      { k: '焊接接头', v: '零' },
      { k: '切割变体', v: '2 种' },
      { k: '工艺', v: '3 步' },
      { k: '工装', v: '标准' },
      { k: '涡流来源', v: '已消除' },
    ],
    why: '无焊接意味着更少的涡流损耗点，标准的切割与折弯工装使该线圈具备量产能力。',
  },
  {
    title: '陶瓷线圈绝缘',
    tagline: '三面散热——导热系数比聚合物高 ≥100×。可实现全密封 IP65 结构。',
    img: '/images/aerostator/ceramic-insulation.jpg',
    patented: true,
    caption: 'Al₂O₃ 陶瓷绝缘片',
    specs: [
      { k: '每槽片数', v: '3' },
      { k: '材料', v: 'Al₂O₃ / AlN' },
      { k: '厚度', v: '0.1–0.5 mm' },
      { k: 'k (Al₂O₃)', v: '≥25 W/m·K' },
      { k: 'k (AlN)', v: '≥140 W/m·K' },
      { k: '相比聚合物', v: '<0.2 W/m·K' },
    ],
    why: '三面耦合（相比两面）同时实现绝缘与导热，从而在更低的线圈温度下实现更高的电流密度。',
  },
];

const cooling = {
  air: [
    '离心风扇通过轭部开槽抽吸空气',
    '适用于大多数无人机和航空应用',
    '安装更简单——无需液路或歧管',
    '适用于开放式或 IP65 密封配置',
    '工作环境温度可达约 60 °C',
  ],
  liquid: [
    '冷却液歧管直接安装在轭部开槽上',
    '热阻比风冷低 2–5×',
    '可实现持续大功率运行',
    '10 kW 以上持续功率电机所必需',
    '兼容水-乙二醇或油路',
  ],
};

const patents = {
  granted: [
    { office: 'PCT', number: 'PCT/IB2023/057129', desc: '国际 · 2023年7月12日' },
    { office: 'PCT', number: 'PCT/IB2025/058444', desc: '陶瓷绝缘 · 2025年8月21日' },
    { office: 'PCT', number: 'PCT/IB2025/060049', desc: '电机线圈 · 2025年10月6日' },
    { office: 'SI', number: 'SI No. 26604', desc: '斯洛文尼亚 · 短期专利 · 2025年7月31日' },
    { office: 'CN', number: 'ZL 202390000194.8', desc: '中国 · 实用新型 · 2025年5月2日' },
    { office: 'DE', number: 'DE 21 2023 000 117', desc: '德国 · 实用新型 · 2024年10月18日' },
    { office: 'FR', number: 'FR No. 24 07270', desc: '法国 · 实用证书 · 2025年7月11日' },
  ],
  pending: [
    { office: 'PCT', number: 'PCT/IB2026/053894', desc: '核心 AeroStator Core™ 拓扑 · 2026年4月20日' },
    { office: 'ES', number: 'ESU202490013', desc: '西班牙 · 审查中' },
    { office: 'IN', number: '202517116950', desc: '印度 · 2025年11月25日提交' },
  ],
};

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-surface-primary">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand bg-blue-50 px-3 py-1 rounded-full">
            AeroStator Core™ 技术
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mt-5 mb-5">
            专利电机技术
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            六项专利技术融于一套电机架构——当前可量产的最高扭矩密度电机，专为无人机、UAV、航空、电动汽车和机器人打造。
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

      {/* Technologies */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-text-primary mb-3">六项技术，一台电机</h2>
          <p className="text-text-secondary mb-12 max-w-2xl">
            每一台 eMotres 电机都集成了同样的六项创新——四项已量产验证，外加两项位于线圈的专利首创——共同将扭矩密度推升至传统设计无法企及的水平。
          </p>

          <div className="space-y-8">
            {technologies.map((tech, i) => (
              <div key={tech.title} className="bg-surface-secondary rounded-2xl border border-border overflow-hidden md:flex">
                {tech.patented ? (
                  <div className="md:w-2/5 relative min-h-56">
                    <img src={tech.img} alt={tech.caption ?? tech.title} className="w-full h-64 md:h-full object-cover" />
                  </div>
                ) : (
                  <div className="md:w-2/5 bg-surface-tertiary flex items-center justify-center p-8">
                    <img src={tech.img} alt={tech.title} className="max-h-56 w-full object-contain mix-blend-multiply" />
                  </div>
                )}

                <div className="md:w-3/5 p-8">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <div className="flex-shrink-0 w-9 h-9 bg-brand rounded-lg flex items-center justify-center text-white font-bold">
                      {i + 1}
                    </div>
                    <h3 className="text-xl font-bold text-text-primary">{tech.title}</h3>
                    {tech.status && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-brand px-2.5 py-1 rounded-full">
                        {tech.status}
                      </span>
                    )}
                  </div>
                  {tech.caption && (
                    <p className="text-xs text-text-secondary mb-3">
                      {tech.caption}
                      {tech.patent && (
                        <>
                          {' · '}
                          <span className="font-mono text-brand">{tech.patent}</span>
                        </>
                      )}
                    </p>
                  )}
                  <p className="text-sm text-brand font-medium mb-5">{tech.tagline}</p>

                  {tech.points && (
                    <div className="space-y-4">
                      {tech.points.map((p) => (
                        <div key={p.h}>
                          <div className="text-sm font-semibold text-text-primary">{p.h}</div>
                          <div className="text-sm text-text-secondary leading-relaxed">{p.d}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {tech.specs && (
                    <>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                        {tech.specs.map((s) => (
                          <div key={s.k} className="bg-surface-primary rounded-lg border border-border px-3 py-2">
                            <div className="text-xs text-text-secondary">{s.k}</div>
                            <div className="text-sm font-bold text-text-primary">{s.v}</div>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        <span className="font-semibold text-text-primary">为何重要： </span>
                        {tech.why}
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IP65 — air vs liquid */}
      <section className="bg-surface-secondary border-y border-border px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">IP65 密封</span>
          <h2 className="text-3xl font-extrabold text-text-primary mt-3 mb-3">一套架构，两种散热方案</h2>
          <p className="text-text-secondary mb-10 max-w-2xl">
            同一套密封定子无需重新设计即可适配风冷或液冷——根据工况选择合适的散热介质。
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-surface-primary rounded-2xl border border-border p-7">
              <h3 className="text-lg font-bold text-text-primary mb-4">💨 风冷</h3>
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
              <h3 className="text-lg font-bold text-text-primary mb-4">💧 液冷</h3>
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
            <span className="font-semibold text-text-primary">IP65：</span> 全面防护粉尘侵入以及来自任意方向的低压喷水——可作为所有 CIANO 电机的工厂选配项。
          </p>
        </div>
      </section>

      {/* Patent portfolio */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">知识产权</span>
          <h2 className="text-3xl font-extrabold text-text-primary mt-3 mb-2">专利组合</h2>
          <p className="text-text-secondary mb-10">
            {patents.granted.length} 项已授权 / 注册 · {patents.pending.length} 项审查中 · 6 个司法管辖区 · EPO
            创造性步骤已确认。
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-4">
                ✓ 已授权 / 注册
              </h3>
              <div className="space-y-3">
                {patents.granted.map((p) => (
                  <div key={p.number} className="flex items-start gap-3 bg-surface-secondary rounded-xl border border-border px-4 py-3">
                    <span className="flex-shrink-0 text-[11px] font-bold text-brand bg-blue-50 rounded-md px-2 py-1 w-12 text-center">
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
                ⏳ 审查中 / 待审
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
                <div className="text-sm font-bold text-text-primary mb-1">🏆 EPO 创造性步骤已确认</div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  欧洲专利局独立验证了 AeroStator Core™ 拓扑的新颖性和创造性步骤。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-secondary border-t border-border px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-5">见证技术的实际表现</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/zh/shop/" className="bg-brand text-white font-bold py-3 px-8 rounded-xl hover:bg-brand-dark transition-colors">
              查看全部电机
            </Link>
            <Link
              href="/radial-go-and-axial-motors-technology"
              className="bg-surface-primary text-text-primary font-bold py-3 px-8 rounded-xl hover:bg-surface-tertiary transition-colors border border-border"
            >
              径向 GO 对比轴向 →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
