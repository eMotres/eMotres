import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '配送与退货',
  alternates: {
    canonical: '/zh/delivery-returns/',
    languages: { en: '/delivery-returns/', 'zh-CN': '/zh/delivery-returns/' },
  },
  description: 'eMotres 电机的运输、配送与退货政策。',
};

export default function DeliveryReturnsPage() {
  return (
    <main className="bg-surface-primary min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-text-primary mb-2">配送与退货</h1>
        <p className="text-sm text-text-secondary mb-10">最后更新：2025 年 5 月</p>

        <div className="prose prose-sm max-w-none space-y-8 text-text-secondary leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">配送</h2>

            <h3 className="font-semibold text-text-primary mb-2">交货周期</h3>
            <p>
              所有 eMotres 电机均在斯洛文尼亚卢布尔雅那<strong className="text-text-primary">按订单组装</strong>。
              标准交货周期为自订单确认并收到定金起<strong className="text-text-primary">约 2 个月</strong>。
              我们将在订单确认邮件中确认预计的发货日期。
            </p>

            <h3 className="font-semibold text-text-primary mb-2 mt-5">承运商</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-text-primary">欧盟境内：</strong>GLS——发货后通常 2–5 个工作日送达</li>
              <li><strong className="text-text-primary">欧盟境外：</strong>DHL Express——发货后通常 3–7 个工作日送达</li>
            </ul>

            <h3 className="font-semibold text-text-primary mb-2 mt-5">运费</h3>
            <p>
              运费取决于电机的重量、尺寸与目的地国家。
              准确的运费报价将随电机报价一并提供。
            </p>

            <h3 className="font-semibold text-text-primary mb-2 mt-5">关税与进口税费</h3>
            <p>
              对于欧盟境外的配送，进口关税、税费与清关费用
              由<strong className="text-text-primary">买方承担</strong>。我们无法事先预估这些费用——
              请向您当地的海关部门咨询。
            </p>

            <h3 className="font-semibold text-text-primary mb-2 mt-5">物流追踪</h3>
            <p>
              您的订单发货后，我们会立即通过电子邮件将追踪单号发送给您。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">退货</h2>

            <h3 className="font-semibold text-text-primary mb-2">定制订单</h3>
            <p>
              由于所有电机均<strong className="text-text-primary">按照您的具体要求制造</strong>，
              除非产品存在缺陷或不符合约定规格，否则我们无法接受定制电机的退货。
            </p>

            <h3 className="font-semibold text-text-primary mb-2 mt-5">缺陷或损坏商品</h3>
            <p>
              如果您的电机到货时已损坏，或在 <strong className="text-text-primary">1 年保修期</strong>内发生故障，
              请在收到货物后 14 天内与我们联系：
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>发送邮件至 <a href="mailto:sales@emotres.com" className="text-brand hover:underline">sales@emotres.com</a>，并注明您的订单号</li>
              <li>附上缺陷的照片或视频</li>
              <li>描述故障现象与运行工况</li>
            </ul>
            <p className="mt-3">
              对于经核实的保修索赔，我们将安排免费取件或更换。
            </p>

            <h3 className="font-semibold text-text-primary mb-2 mt-5">订单取消</h3>
            <p>
              订单可在生产开始前取消。生产开始后取消
              可能导致 50% 的定金不予退还。如需取消，请尽快与我们联系。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">还有疑问？</h2>
            <p>
              如果您对配送或退货有任何疑问，请{' '}
              <Link href="/zh/contact-us/" className="text-brand hover:underline">联系我们</Link>，
              或查看我们的 <Link href="/zh/faq/" className="text-brand hover:underline">常见问题页面</Link>。
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
