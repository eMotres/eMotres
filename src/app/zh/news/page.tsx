import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '新闻',
  alternates: {
    canonical: '/zh/news/',
    languages: { en: '/news/', 'zh-CN': '/zh/news/' },
  },
  description:
    'eMotres 最新动态 —— AeroStator Core™ 测试结果、里程碑与公告：CIANO14 40_12 和 CIANO 150_30 台架测试、与 T-Motor 的效率对比，以及持续功率纪录。',
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
    date: '2026年7月21日',
    title: '两台共轴电机，还是一支更大的螺旋桨？收益是续航时间',
    image: '/images/news/news-jul21-coaxial.webp',
    intro: [
      '一种常见的重载配置：一对共轴 T-Motor V3115 搭配 10″ 螺旋桨 —— 共 600 W 轴功率。但共轴螺旋桨会争夺同一股气流 —— 下桨在上桨的尾流中损失约 20 % 的效率。',
      '我们的方案：用一台基于 AeroStator Core™ 技术的 CIANO14 40_12 搭配 12″ 螺旋桨来替代它们，并调校到相同推力。相同推力（约 2,865 g）、相同电池：',
    ],
    metrics: [
      { k: '标准 BLDC', v: '−21 % 功率 · +27 % 续航' },
      { k: '搭配 FOC 控制器', v: '−28 % 功率 · +39 % 续航' },
      { k: '减重', v: '约 167 g（1 台电机 + 1 个电调）' },
      { k: '单支 12″ 螺旋桨', v: '506 W 轴功率 · 9,300 rpm' },
      { k: '扭矩需求', v: '约为 10″ 的 2 倍' },
      { k: '效率', v: '~69 %（BLDC）→ ~76 %（FOC，估算）' },
    ],
    outro: [
      '关键在于：单支 12″ 螺旋桨需要约 2 倍的扭矩 —— 这正是我们的扁线绕组发挥价值的地方：在高扭矩下保持高效率而不过热。',
      '这些数字是估算值 —— 12″ 工作点由我们实测的 10″ 数据建模得出。接下来将在 12″ 上进行台架验证，届时我们会公布数据。AeroStator Core™ 开放授权与联合制造合作。',
    ],
    url: 'https://www.linkedin.com/posts/vadim-shcherbakov-4b2aa020_drones-uav-evtol-activity-7485227310363860992-R9El',
  },
  {
    date: '2026年7月18日',
    title: 'FOC 下 84.2 % 系统效率 —— CIANO14 40_12 完成正弦波测试',
    image: '/images/news/news-jul18-foc.webp',
    video: '/videos/news-jul18-foc.mp4',
    intro: [
      '我们刚刚完成了 CIANO14 40_12 的 FOC 测试 —— 这是我们基于 AeroStator Core™ 打造的 125 g、3115 级别内转子电机。峰值系统效率（控制器 + 电机，在母线处测量）达到 84.2 %，并在整个工作范围内保持 82–84 % 的平台。作为对比，此前采用梯形波 BLDC 控制器的测试峰值为 76.9 %。',
    ],
    metrics: [
      { k: '峰值系统效率', v: '84.2 %' },
      { k: '效率平台', v: '82–84 %' },
      { k: '对比梯形波 BLDC', v: '+7 pp（峰值 76.9 %）' },
      { k: '螺旋桨', v: '10×4.5 · 两叶' },
      { k: '母线电压', v: '22 V' },
      { k: '测试方式', v: '螺旋桨测功台 · 12 点扫描' },
    ],
    outro: [
      '为什么重要：标准的 3115 电机持续功率上限约为 300–350 W。而这台电机可持续输出 6 kW/kg —— 是我们对比过的任何 3115 级别电机持续功率的 2.5 倍以上。相同的外形尺寸，2.5 倍的持续输出。在无人机推进中，每节省一瓦时的能量，都意味着更多的载荷和更长的续航。',
    ],
    url: 'https://www.linkedin.com/posts/vadim-shcherbakov-4b2aa020_foc-electricmotors-uav-ugcPost-7483804372259246080-Yv2D',
  },
  {
    date: '2026年6月23日',
    title: '6 kW/kg 持续功率 —— CIANO14 40_12 连续运行 30 分钟',
    image: '/images/news/news-jun23-continuous.jpg',
    video: '/videos/news-jun23-continuous.mp4',
    intro: [
      '我们将 CIANO14 40_12 装在螺旋桨测试台上连续运行了 30 分钟 —— 持续功率约为市面上任何 3115 级别电机的 2.5 倍。以下是测试台在第 29 分钟记录的数据（125 g 电机）：',
    ],
    metrics: [
      { k: '推力', v: '3,455 g' },
      { k: '轴功率', v: '770 W (6.16 kW/kg)' },
      { k: '电输入', v: '1,038 W' },
      { k: '系统效率', v: '74.2 %' },
      { k: '电流', v: '43.85 A @ 23.7 V' },
      { k: '最高温度', v: '150 °C（已稳定）' },
    ],
    outro: [
      '标准的 3115 在达到热极限之前，持续功率上限为 300–350 W。相同的外形尺寸 —— 持续功率却达到 2.5 倍。绕组在整个过程中始终保持在其 200 °C 绝缘极限之内。',
    ],
    url: 'https://www.linkedin.com/posts/vadim-shcherbakov-4b2aa020_electricmotors-bldc-aerostatorcore-activity-7475080394271358976-39zl',
  },
  {
    date: '2026年6月16日',
    title: '一台胜过同级领先外转子的内转子电机',
    image: '/images/news/news-jun16-vs-tmotor.jpg',
    video: '/videos/news-jun16-vs-tmotor.mp4',
    intro: [
      '基于 AeroStator Core™ 打造的 CIANO14 40_12 首批台架测试，挑战了这一级别的一个基本假设。传统观念认为，外转子在效率和推力密度方面主导着无人机推进领域 —— 而我们的首批数据却给出了相反的结论。',
      '在相同的螺旋桨和相同的 24 V 条件下，与同级领先的 T-Motor V3115 外转子进行对比测试：',
    ],
    metrics: [
      { k: '系统效率', v: '高推力下 +12–13 pp' },
      { k: '峰值系统效率', v: '76.9 %（75–77 % 平台）' },
      { k: 'T-Motor V3115 峰值', v: '~64 %' },
    ],
    outro: [
      '而且这些还是梯形波 BLDC 的结果 —— 我们尚未切换到 FOC，因此仍有明显的提升空间。下一步：将控制器直接集成到电机内部、0.15 mm 叠片以及箔式（扁平）线圈。',
    ],
    url: 'https://www.linkedin.com/posts/vadim-shcherbakov-4b2aa020_drones-uav-electricmotors-activity-7472592376310468608-pxKm',
  },
  {
    date: '2026年5月7日',
    title: '首批测试结果 —— 150_30 达到 50 kg 持续推力',
    image: '/images/news/news-may-150-30.jpg',
    intro: [
      '首台基于 AeroStator Core™ 打造的无人机推进电机在推力测试台上完成了初步台架测试。在 50 kg 持续推力（56″ 螺旋桨、BLDC 控制器）下：',
    ],
    metrics: [
      { k: '持续推力', v: '50 kg' },
      { k: '轴功率', v: '~7,800 W' },
      { k: '扭矩', v: '~32 N·m (10.7 N·m/kg)' },
      { k: '比功率', v: '2,600 W/kg' },
      { k: '电机效率', v: '91 %' },
      { k: '工作温度', v: '115 °C（风冷）' },
    ],
    outro: [
      'AeroStator Core™ 架构将定子轭部转变为一个主动散热结构 —— 使得采用标准 F45SH 磁体的切向极化能够在通常需要更重或更昂贵散热方案才能达到的性能水平上运行。路线图：在同样的 3 kg 重量下实现 60 kg 持续推力，途径包括 FOC 集成、28 极与 42 极分析，以及 63″ 螺旋桨测试。',
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
            新闻
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mt-4 mb-5">
            eMotres 最新动态
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            来自 AeroStator Core™ 项目的测试结果、里程碑与公告。
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
                在LinkedIn上阅读
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
