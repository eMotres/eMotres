import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '径向与轴向电机技术对比',
  alternates: {
    canonical: '/zh/radial-go-and-axial-motors-technology/',
    languages: {
      en: '/radial-go-and-axial-motors-technology/',
      'zh-CN': '/zh/radial-go-and-axial-motors-technology/',
    },
  },
  description:
    '采用取向硅钢（GO 钢）铁芯的径向电机与轴向电机设计（YASA、Emrax）的技术对比：铁芯材料、绕组、磁系统与效率分析。',
};

export default function ZhRadialGoAxialPage() {
  return (
    <main className="min-h-screen bg-surface-primary">

      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <nav className="text-sm text-text-secondary mb-8 flex items-center gap-2">
          <Link href="/zh/" className="hover:text-brand transition-colors">首页</Link>
          <span>/</span>
          <Link href="/zh/blog/" className="hover:text-brand transition-colors">技术</Link>
          <span>/</span>
          <span className="text-text-primary">径向 GO 钢与轴向电机技术</span>
        </nav>

        <header className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand bg-blue-50 px-3 py-1 rounded-full">技术</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mt-4 mb-6 leading-tight">
            径向 GO 钢电机与轴向电机技术
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed mb-8">
            采用取向硅钢（GO 钢）铁芯的径向电机与 YASA、Emrax 轴向电机设计的技术对比——从多个工程维度分析性能表现。
          </p>
          <img src="/images/motres-cooling-system.png" alt="径向 GO 钢电机与轴向电机对比" className="w-full rounded-2xl shadow-lg" />
        </header>

        <div className="prose prose-lg max-w-none text-text-primary">

          <div className="grid grid-cols-2 gap-4 mt-12 mb-8">
            <img src="/images/soft-magnetic-composite.png" alt="软磁复合材料" className="rounded-xl w-full" />
            <img src="/images/Grain-Oriented-Steel.jpg" alt="取向硅钢" className="rounded-xl w-full" />
          </div>
          <h2 className="text-2xl font-bold mt-4 mb-4 text-text-primary">铁芯材料</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            这两类电机技术之间的根本差异始于铁芯材料。YASA 和 Emrax 等厂商的轴向电机通常使用<strong>软磁复合材料（SMC）</strong>——这种材料生产工艺更简单，但磁导率较低。
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            eMotres 径向电机采用<strong>取向硅钢（GO 钢）</strong>，其生产工艺更为复杂，但磁导率显著更高——饱和磁密可达 <strong>1.9 T</strong>。这直接转化为更大的磁通量和更高的扭矩密度。
          </p>
          <div className="bg-surface-secondary rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-text-primary mb-3">制造工艺对比：</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li className="flex gap-2"><span className="text-brand font-bold">YASA：</span>压制 SMC 复合材料</li>
              <li className="flex gap-2"><span className="text-brand font-bold">Emrax：</span>冲压 SMC 复合材料</li>
              <li className="flex gap-2"><span className="text-brand font-bold">eMotres：</span>GO 钢的电火花线切割与冲压相结合</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-text-primary">绕组结构</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            轴向电机在线圈固定方面的设计复杂度更高。YASA 采用塑料顶部固定件，而 Emrax 采用铝管方案——后者<em>“显著降低了槽满率并增加了涡流损耗。”</em>
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            在轴向设计中，整根导线都参与扭矩的产生。然而轴向几何结构的约束限制了槽满率的实际提升空间。在采用槽内绕组的径向内转子设计中，eMotres 使用<strong>扁平铜线</strong>以最大化槽满率并将电阻损耗降至最低。
          </p>

          <div className="grid grid-cols-3 gap-4 mt-12 mb-4">
            <img src="/images/Axial-magnet.png" alt="轴向磁体" className="rounded-xl w-full" />
            <img src="/images/Radial-magnet.png" alt="径向磁体" className="rounded-xl w-full" />
            <img src="/images/Motres_magnets.png" alt="eMotres 切向磁体" className="rounded-xl w-full" />
          </div>
          <h2 className="text-2xl font-bold mt-4 mb-4 text-text-primary">磁系统</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            轴向电机需要采用轴向极化的<strong>分段磁体</strong>，这就必须进行胶粘并采取专门措施来抑制涡流损耗。分段结构增加了制造复杂度，也带来了潜在的可靠性隐患。
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            径向内转子方案采用<strong>切向极化磁体</strong>——这是 eMotres 电机所使用的专利结构。该结构在产生更高磁场的同时，无需对磁体进行分段，从而降低了制造复杂度并提升了可靠性。
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <p className="text-blue-900 font-medium">
              切向磁化可使磁场强度相比标准径向结构提升最高达 <strong>1.5×</strong>——在电机尺寸和重量相同的条件下直接提高输出扭矩。
            </p>
          </div>

          <img src="/images/axial_vs_radial.png" alt="轴向与径向效率对比图" className="w-full rounded-xl shadow-md mt-8 mb-4" />
          <h2 className="text-2xl font-bold mt-8 mb-4 text-text-primary">主要发现</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            性能分析表明，设计得当的径向 GO 钢电机可以达到与轴向结构相当甚至更优的效率，这挑战了业界普遍认为轴向电机更优越的假设。
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            eMotres 径向电机具备以下优势：
          </p>
          <ul className="space-y-3 mb-8">
            {[
              '扭矩密度高于同等规格的轴向磁通电机',
              '取向硅钢与扁平铜线绕组带来更高的效率',
              '无需磁体分段，制造成本更低',
              '全密封 IP65 外壳，可靠性更佳',
              '与标准 FOC 控制器集成更简单',
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-text-secondary">
                <span className="text-brand mt-1 font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-text-primary">结论</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            尽管轴向磁通电机近年来颇受追捧，但数据表明，采用取向硅钢和切向磁化的径向电机在关键指标上可以与之匹敌甚至超越——同时在成本、可靠性和密封性方面更具优势。
          </p>
          <p className="text-text-secondary leading-relaxed">
            eMotres 电机将上述所有技术融合于一套专利设计之中，使其成为当今市场上扭矩密度最高的电机。
          </p>
        </div>

        <div className="mt-16 pt-10 border-t border-surface-tertiary">
          <h3 className="text-xl font-bold text-text-primary mb-6">探索我们的电机</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/zh/shop/" className="bg-brand text-white font-bold py-3 px-8 rounded-xl hover:bg-brand-dark transition-colors">
              查看全部电机
            </Link>
            <Link href="/zh/get-a-quote/" className="bg-surface-secondary text-text-primary font-bold py-3 px-8 rounded-xl hover:bg-surface-tertiary transition-colors border border-surface-tertiary">
              获取报价
            </Link>
          </div>
        </div>
      </article>    </main>
  );
}
