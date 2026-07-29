import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '条款与条件',
  alternates: {
    canonical: '/zh/terms-conditions/',
    languages: { en: '/terms-conditions/', 'zh-CN': '/zh/terms-conditions/' },
  },
  description: '向 MOTRES D.O.O.（eMotres）采购电机的条款与条件。',
};

export default function TermsConditionsPage() {
  return (
    <main className="bg-surface-primary min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-text-primary mb-2">条款与条件</h1>
        <p className="text-sm text-text-secondary mb-10">最后更新：2025 年 5 月</p>

        <div className="prose prose-sm max-w-none space-y-8 text-text-secondary leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">1. 公司信息</h2>
            <p>
              本条款与条件适用于向 <strong className="text-text-primary">MOTRES D.O.O.</strong> 采购产品，
              地址：Kotnikova 34, Ljubljana 1000, Slovenia（欧盟）。<br />
              注册号：7255691000 · 增值税号：SI22399933<br />
              电子邮箱：<a href="mailto:sales@emotres.com" className="text-brand hover:underline">sales@emotres.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">2. 产品与订单</h2>
            <p>
              所有电机均<strong className="text-text-primary">按订单定制生产</strong>。提交询价请求或下达订单，
              即表示您确认所提供的规格准确无误。订单仅在我们收到已签署的采购订单与定金付款后方为确认。
              价格以欧元（EUR）报出，除另有说明外不含增值税。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">3. 交货周期</h2>
            <p>
              标准交货周期为自订单确认起<strong className="text-text-primary">约 2 个月</strong>。
              交货周期为预估值，可能因零部件供应情况与订单数量而有所不同。
              如出现任何重大延误，我们将及时通知您。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">4. 付款条件</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>通过银行转账（发票）付款</li>
              <li>需支付 <strong className="text-text-primary">50%</strong> 的定金以确认订单</li>
              <li>余款须在发货前付清</li>
              <li>斯洛文尼亚境外产生的所有银行费用由买方承担</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">5. 运输</h2>
            <p>
              欧盟境内的发货由 <strong className="text-text-primary">GLS</strong> 负责。
              国际发货由 <strong className="text-text-primary">DHL</strong> 负责。
              运费在报价时计算。货物交付承运人后，灭失风险转移至买方。
              欧盟境外的进口关税与税费由买方承担。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">6. 保修</h2>
            <p>
              所有电机自交付之日起享有 <strong className="text-text-primary">1 年保修</strong>，
              在正常使用条件下针对材料与工艺缺陷提供保障。保修不涵盖：
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>因误用、过载或安装不当造成的损坏</li>
              <li>正常磨损</li>
              <li>未经 MOTRES D.O.O. 书面批准所作的改动</li>
              <li>在规定电压或温度范围之外运行所造成的损坏</li>
            </ul>
            <p className="mt-3">
              保修索赔须发送至 <a href="mailto:sales@emotres.com" className="text-brand hover:underline">sales@emotres.com</a>，
              并附上缺陷描述与购买凭证。我们将自行决定对缺陷产品进行维修或更换。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">7. 退货与取消</h2>
            <p>
              由于所有产品均为<strong className="text-text-primary">按订单定制生产</strong>，订单确认后取消
              可能导致定金不予退还。除产品存在缺陷外，定制产品不接受退货。
              详情请参阅我们的<a href="/zh/delivery-returns/" className="text-brand hover:underline">配送与退货</a>页面。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">8. 责任限制</h2>
            <p>
              对于因使用或无法使用我们产品而引起的间接、附带或后果性损害，MOTRES D.O.O. 概不负责。
              我们的全部责任不超过引起索赔的具体产品的购买价格。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">9. 知识产权</h2>
            <p>
              所有电机设计、专利与技术文档均为 MOTRES D.O.O. 的财产。
              未经书面同意，禁止复制、逆向工程或商业使用我们的设计。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">10. 适用法律</h2>
            <p>
              本条款受<strong className="text-text-primary">斯洛文尼亚共和国</strong>法律管辖。
              任何争议均由斯洛文尼亚卢布尔雅那的法院专属管辖。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">11. 条款变更</h2>
            <p>
              我们保留随时更新本条款与条件的权利。在更新日期之前下达的订单，
              适用下单时有效的条款。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">12. 联系方式</h2>
            <p>
              如对本条款有任何疑问，请联系：<br />
              <strong className="text-text-primary">MOTRES D.O.O.</strong><br />
              Kotnikova 34, Ljubljana 1000, Slovenia<br />
              <a href="mailto:sales@emotres.com" className="text-brand hover:underline">sales@emotres.com</a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
