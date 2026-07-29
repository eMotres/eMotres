import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '切向磁体内转子电机 vs 径向磁体外转子电机',
  alternates: {
    canonical: '/zh/inrunner-motor-with-tangential-magnets-polarization-vs-outrunner-with-radial-magnets-polarization/',
    languages: {
      en: '/inrunner-motor-with-tangential-magnets-polarization-vs-outrunner-with-radial-magnets-polarization/',
      'zh-CN': '/zh/inrunner-motor-with-tangential-magnets-polarization-vs-outrunner-with-radial-magnets-polarization/',
    },
  },
  description:
    '切向磁化内转子电机与径向磁化外转子电机的技术分析对比：仿真结果、扭矩方程与性能数据。',
};

export default function ZhInrunnerVsOutrunnerPage() {
  return (
    <main className="min-h-screen bg-surface-primary">

      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <nav className="text-sm text-text-secondary mb-8 flex items-center gap-2">
          <Link href="/zh/" className="hover:text-brand transition-colors">首页</Link>
          <span>/</span>
          <Link href="/zh/blog/" className="hover:text-brand transition-colors">技术</Link>
          <span>/</span>
          <span className="text-text-primary">内转子 vs 外转子电机</span>
        </nav>

        <header className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand bg-blue-50 px-3 py-1 rounded-full">技术</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mt-4 mb-6 leading-tight">
            切向极化磁体内转子电机 vs 径向极化磁体外转子电机
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            一项基于仿真的分析，展示内转子电机中的切向磁化如何相比采用径向极化的外转子设计获得显著更高的扭矩性能。
          </p>
        </header>

        <div className="text-text-primary">

          <img src="/images/outranner-vs-inranner-1024x479.webp" alt="外转子与内转子电机对比" className="w-full rounded-2xl shadow-lg mb-12" />
          <h2 className="text-2xl font-bold mt-4 mb-4 text-text-primary">同步电机中的扭矩方程</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            同步电机或发电机的扭矩与定子磁场强度、转子磁场强度以及两者夹角的正弦值成正比——同时也与定子和转子之间的气隙面积成正比。
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">由此可简化为基本的扭矩方程：</p>

          <div className="bg-surface-secondary rounded-xl p-6 mb-8 text-center">
            <p className="text-2xl font-bold text-text-primary font-mono">T<sub>e</sub> ~ R × R × Sc × B</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-left max-w-sm mx-auto text-sm text-text-secondary">
              <div><strong className="text-text-primary">R</strong> —— 气隙半径</div>
              <div><strong className="text-text-primary">Sc</strong> —— 线圈截面积</div>
              <div><strong className="text-text-primary">B</strong> —— 气隙磁场</div>
              <div><strong className="text-text-primary">T<sub>e</sub></strong> —— 电磁扭矩</div>
            </div>
          </div>

          <p className="text-text-secondary leading-relaxed mb-6">
            对于直径、长度、质量和电流密度均相同的电机，该方程表明<strong>磁场强度（B）</strong>与线圈截面积是不同电机设计之间的主要差异所在。
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-text-primary">气隙磁场——外转子电机</h2>
          <img src="/images/air-gap-for-outrunner-motor-1024x466.webp" alt="外转子电机的气隙" className="w-full rounded-xl shadow-md mb-6" />
          <p className="text-text-secondary leading-relaxed mb-6">
            在采用径向磁化的传统外转子电机中，气隙处的磁场受限于径向磁体排布的几何结构。磁体沿垂直于转子表面的方向极化，气隙中由此产生的磁通密度受磁体牌号和体积的制约。
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            此外，外转子结构通常需要更大的气隙，且存在结构上的限制，从而削弱了实际到达定子绕组的有效磁场。
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-text-primary">气隙磁场——内转子电机</h2>
          <img src="/images/air-gap-for-inrunner-motor.webp" alt="采用切向磁体的内转子电机气隙" className="w-full rounded-xl shadow-md mb-6" />
          <p className="text-text-secondary leading-relaxed mb-6">
            采用<strong>切向磁化</strong>的内转子结构实现了一种截然不同的磁路。磁体沿切向（即旋转方向）极化，在相邻磁体之间形成磁通汇聚效应。
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <p className="text-blue-900 font-semibold mb-2">核心优势：</p>
            <p className="text-blue-800">
              在尺寸、重量和电流密度相同的条件下，用于内转子电机的切向磁体阵列结构可使磁场强度相比标准径向磁体结构提升最高达 <strong>1.5×</strong>。
            </p>
          </div>

          <p className="text-text-secondary leading-relaxed mb-6">
            这一提升源自切向极化磁体之间类似 Halbach 阵列的磁通汇聚效应。汇聚后的磁场有效提高了扭矩方程中的 B 值，在不增加电机尺寸或重量的前提下直接倍增输出扭矩。
          </p>

          <img src="/images/Tangential-magnetic-polarization.webp" alt="切向磁化" className="w-full rounded-xl shadow-md mt-8 mb-4" />
          <h2 className="text-2xl font-bold mt-8 mb-4 text-text-primary">仿真结果</h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            两台规格完全相同的电机的仿真数据对比：
          </p>
          <div className="bg-surface-secondary rounded-xl overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-tertiary">
                  <th className="text-left p-4 font-semibold text-text-primary">参数</th>
                  <th className="text-center p-4 font-semibold text-text-primary">外转子（径向）</th>
                  <th className="text-center p-4 font-semibold text-brand">内转子（切向）</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-tertiary">
                <tr>
                  <td className="p-4 text-text-secondary">直径</td>
                  <td className="p-4 text-center text-text-primary">150 mm</td>
                  <td className="p-4 text-center text-text-primary">150 mm</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-secondary">重量</td>
                  <td className="p-4 text-center text-text-primary">5.4 kg</td>
                  <td className="p-4 text-center text-text-primary">5.4 kg</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-secondary">磁体极化方式</td>
                  <td className="p-4 text-center text-text-primary">径向</td>
                  <td className="p-4 text-center font-semibold text-brand">切向</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-secondary">气隙磁场（B）</td>
                  <td className="p-4 text-center text-text-primary">1.0×</td>
                  <td className="p-4 text-center font-semibold text-brand">最高 1.5×</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-secondary">输出扭矩</td>
                  <td className="p-4 text-center text-text-primary">基准</td>
                  <td className="p-4 text-center font-semibold text-brand">高出 30–50%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-text-primary">结论</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            仿真结果证实，采用切向磁化的内转子电机相比同等尺寸和重量的外转子设计可输出显著更高的扭矩。这正是 eMotres 专利电机结构背后的核心技术。
          </p>
          <p className="text-text-secondary leading-relaxed">
            结合取向硅钢定子铁芯、扁平铜线绕组和定子直接散热，eMotres 电机实现了市场上最高的扭矩密度——超越传统径向外转子电机和轴向磁通电机。
          </p>
        </div>

        <div className="mt-16 pt-10 border-t border-surface-tertiary">
          <h3 className="text-xl font-bold text-text-primary mb-6">延伸阅读</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/zh/radial-go-and-axial-motors-technology/" className="bg-surface-secondary text-text-primary font-semibold py-3 px-6 rounded-xl hover:bg-surface-tertiary transition-colors border border-surface-tertiary text-sm">
              径向 GO 对比轴向电机 →
            </Link>
            <Link href="/zh/shop/" className="bg-brand text-white font-bold py-3 px-8 rounded-xl hover:bg-brand-dark transition-colors">
              查看全部电机
            </Link>
          </div>
        </div>
      </article>    </main>
  );
}
