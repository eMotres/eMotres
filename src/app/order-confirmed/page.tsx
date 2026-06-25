import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Confirmed',
  description: 'Thank you for your order.',
  alternates: { canonical: '/order-confirmed/' },
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
        <h1 className="text-3xl font-extrabold text-text-primary mb-3">Thank you for your order!</h1>
        <p className="text-text-secondary leading-relaxed mb-8">
          Your payment was received and a receipt has been emailed to you. We&apos;ll be in touch
          shortly with shipping details. Questions?{' '}
          <a href="mailto:sales@emotres.com" className="text-brand font-semibold hover:underline">
            sales@emotres.com
          </a>
        </p>
        <Link
          href="/shop"
          className="inline-block bg-brand text-white font-bold py-3 px-8 rounded-xl hover:bg-brand-dark transition-colors"
        >
          Back to motors
        </Link>
      </div>
    </main>
  );
}
