import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  alternates: {
    canonical: '/terms-conditions/',
    languages: { en: '/terms-conditions/', 'zh-CN': '/zh/terms-conditions/' },
  },
  description: 'Terms and Conditions for purchasing electric motors from MOTRES D.O.O. (eMotres).',
};

export default function TermsConditionsPage() {
  return (
    <main className="bg-surface-primary min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-text-primary mb-2">Terms &amp; Conditions</h1>
        <p className="text-sm text-text-secondary mb-10">Last updated: May 2025</p>

        <div className="prose prose-sm max-w-none space-y-8 text-text-secondary leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">1. Company Information</h2>
            <p>
              These Terms &amp; Conditions govern the purchase of products from <strong className="text-text-primary">MOTRES D.O.O.</strong>,
              Kotnikova 34, Ljubljana 1000, Slovenia (EU).<br />
              Registration No.: 7255691000 · VAT: SI22399933<br />
              Email: <a href="mailto:sales@emotres.com" className="text-brand hover:underline">sales@emotres.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">2. Products and Orders</h2>
            <p>
              All motors are <strong className="text-text-primary">made to order</strong>. By submitting a quote request or placing an order,
              you confirm that the specifications provided are correct. Orders are confirmed only upon receipt of a signed
              purchase order and deposit payment. Prices are quoted in EUR and exclude VAT unless stated otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">3. Lead Times</h2>
            <p>
              Standard lead time is <strong className="text-text-primary">approximately 2 months</strong> from order confirmation.
              Lead times are estimates and may vary depending on component availability and order volume.
              We will notify you promptly of any significant delays.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">4. Payment Terms</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Payment is made by bank transfer (invoice)</li>
              <li>A deposit of <strong className="text-text-primary">50%</strong> is required to confirm the order</li>
              <li>The remaining balance is due before shipment</li>
              <li>All bank charges outside Slovenia are borne by the buyer</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">5. Shipping</h2>
            <p>
              Shipments within the EU are handled by <strong className="text-text-primary">GLS</strong>.
              International shipments are handled by <strong className="text-text-primary">DHL</strong>.
              Shipping costs are calculated at the time of quotation. Risk of loss passes to the buyer upon handover to the carrier.
              Import duties and taxes outside the EU are the buyer&apos;s responsibility.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">6. Warranty</h2>
            <p>
              All motors carry a <strong className="text-text-primary">1-year warranty</strong> from the date of delivery against
              defects in materials and workmanship under normal use conditions. The warranty does not cover:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Damage caused by misuse, overloading, or improper installation</li>
              <li>Normal wear and tear</li>
              <li>Modifications made without written approval from MOTRES D.O.O.</li>
              <li>Damage caused by operating outside specified voltage or temperature ranges</li>
            </ul>
            <p className="mt-3">
              Warranty claims must be submitted to <a href="mailto:sales@emotres.com" className="text-brand hover:underline">sales@emotres.com</a> with
              a description of the defect and proof of purchase. We will repair or replace the defective unit at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">7. Returns and Cancellations</h2>
            <p>
              As all products are <strong className="text-text-primary">custom-made to order</strong>, cancellations after order
              confirmation may result in forfeiture of the deposit. Returns of custom products are not accepted unless the product
              is defective. For details, see our <a href="/delivery-returns" className="text-brand hover:underline">Delivery &amp; Returns</a> page.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">8. Limitation of Liability</h2>
            <p>
              MOTRES D.O.O. shall not be liable for indirect, incidental, or consequential damages arising from
              the use or inability to use our products. Our total liability shall not exceed the purchase price
              of the specific product giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">9. Intellectual Property</h2>
            <p>
              All motor designs, patents, and technical documentation are the property of MOTRES D.O.O.
              Reproduction, reverse engineering, or commercial use of our designs without written consent is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">10. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the <strong className="text-text-primary">Republic of Slovenia</strong>.
              Any disputes shall be subject to the exclusive jurisdiction of the courts of Ljubljana, Slovenia.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">11. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms &amp; Conditions at any time. Orders placed before the
              update date are governed by the Terms in effect at the time of order.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">12. Contact</h2>
            <p>
              For any questions regarding these Terms, please contact:<br />
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
