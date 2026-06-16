import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Delivery & Returns | eMotres',
  description: 'Shipping, delivery and returns policy for eMotres electric motors.',
};

export default function DeliveryReturnsPage() {
  return (
    <main className="bg-surface-primary min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-text-primary mb-2">Delivery &amp; Returns</h1>
        <p className="text-sm text-text-secondary mb-10">Last updated: May 2025</p>

        <div className="prose prose-sm max-w-none space-y-8 text-text-secondary leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">Delivery</h2>

            <h3 className="font-semibold text-text-primary mb-2">Lead time</h3>
            <p>
              All eMotres motors are <strong className="text-text-primary">assembled to order</strong> in Ljubljana, Slovenia.
              Standard lead time is <strong className="text-text-primary">approximately 2 months</strong> from order confirmation and receipt of deposit.
              We will confirm the expected dispatch date in your order confirmation email.
            </p>

            <h3 className="font-semibold text-text-primary mb-2 mt-5">Shipping carriers</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-text-primary">Within the EU:</strong> GLS — typically 2–5 business days after dispatch</li>
              <li><strong className="text-text-primary">Outside the EU:</strong> DHL Express — typically 3–7 business days after dispatch</li>
            </ul>

            <h3 className="font-semibold text-text-primary mb-2 mt-5">Shipping costs</h3>
            <p>
              Shipping costs depend on the motor weight, dimensions, and destination country.
              An exact shipping quote is provided with your motor quotation.
            </p>

            <h3 className="font-semibold text-text-primary mb-2 mt-5">Customs and import duties</h3>
            <p>
              For deliveries outside the EU, import duties, taxes and customs clearance fees are
              the <strong className="text-text-primary">buyer&apos;s responsibility</strong>. We are not able to estimate these charges
              in advance — please check with your local customs authority.
            </p>

            <h3 className="font-semibold text-text-primary mb-2 mt-5">Tracking</h3>
            <p>
              A tracking number will be emailed to you as soon as your order is dispatched.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">Returns</h2>

            <h3 className="font-semibold text-text-primary mb-2">Custom orders</h3>
            <p>
              Because all motors are <strong className="text-text-primary">manufactured to your specific requirements</strong>,
              we are unable to accept returns for custom-built motors unless the product is defective or does not conform
              to the agreed specification.
            </p>

            <h3 className="font-semibold text-text-primary mb-2 mt-5">Defective or damaged goods</h3>
            <p>
              If your motor arrives damaged or fails within the <strong className="text-text-primary">1-year warranty period</strong>,
              please contact us within 14 days of receiving the shipment:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Email <a href="mailto:sales@emotres.com" className="text-brand hover:underline">sales@emotres.com</a> with your order number</li>
              <li>Attach photos or video of the defect</li>
              <li>Describe the failure mode and operating conditions</li>
            </ul>
            <p className="mt-3">
              We will arrange collection or replacement at no cost to you for verified warranty claims.
            </p>

            <h3 className="font-semibold text-text-primary mb-2 mt-5">Cancellations</h3>
            <p>
              Orders may be cancelled before production begins. Cancellation after production has started
              may result in forfeiture of the 50% deposit. Please contact us as soon as possible if you need to cancel.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">Questions?</h2>
            <p>
              If you have any questions about delivery or returns, please{' '}
              <Link href="/contact-us" className="text-brand hover:underline">contact us</Link> or
              check our <Link href="/faq" className="text-brand hover:underline">FAQ page</Link>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
