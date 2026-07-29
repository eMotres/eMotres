import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '订单已确认',
  description: '感谢您的订购。',
  alternates: {
    canonical: '/zh/order-confirmed/',
    languages: { en: '/order-confirmed/', 'zh-CN': '/zh/order-confirmed/' },
  },
  robots: { index: false, follow: true },
};

export default function OrderConfirmedPage() {
  return (
    <main className="min-h-screen bg-surface-primary flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold text-text-primary mb-3">感谢您的订购！</h1>
        <p className="text-text-secondary leading-relaxed mb-8">
          我们已收到您的付款，收据已通过电子邮件发送给您。我们将很快与您联系，
          告知发货详情。有疑问？{' '}
          <a href="mailto:sales@emotres.com" className="text-brand font-semibold hover:underline">
            sales@emotres.com
          </a>
        </p>
        <Link
          href="/zh/shop/"
          className="inline-block bg-brand text-white font-bold py-3 px-8 rounded-xl hover:bg-brand-dark transition-colors"
        >
          返回电机产品
        </Link>
      </div>
    </main>
  );
}
