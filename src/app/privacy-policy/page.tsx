import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | eMotres',
  description: 'Privacy Policy of MOTRES D.O.O. — how we collect, use and protect your personal data in accordance with GDPR.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-surface-primary min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-text-primary mb-2">Privacy Policy</h1>
        <p className="text-sm text-text-secondary mb-10">Last updated: May 2025</p>

        <div className="prose prose-sm max-w-none space-y-8 text-text-secondary leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">1. Data Controller</h2>
            <p>
              Your personal data is processed by <strong className="text-text-primary">MOTRES D.O.O.</strong>,
              Kotnikova 34, Ljubljana 1000, Slovenia (EU).<br />
              Registration No.: 7255691000 · VAT: SI22399933<br />
              Email: <a href="mailto:sales@emotres.com" className="text-brand hover:underline">sales@emotres.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">2. Data We Collect</h2>
            <p>We may collect the following personal data when you use our website or contact us:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Name and email address (contact and quote forms)</li>
              <li>Company name and phone number (if provided)</li>
              <li>Message content submitted via forms</li>
              <li>Technical data: IP address, browser type, pages visited (via server logs)</li>
            </ul>
            <p className="mt-3">We do <strong className="text-text-primary">not</strong> use cookies for tracking or advertising. We do not use Google Analytics or similar third-party tracking services.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">3. Purpose and Legal Basis</h2>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-text-primary">Responding to enquiries and quotes</p>
                <p>Legal basis: Legitimate interest (Art. 6(1)(f) GDPR) and pre-contractual measures (Art. 6(1)(b) GDPR).</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary">Order fulfilment and invoicing</p>
                <p>Legal basis: Performance of a contract (Art. 6(1)(b) GDPR) and legal obligation (Art. 6(1)(c) GDPR).</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary">Marketing communications</p>
                <p>Legal basis: Your explicit consent (Art. 6(1)(a) GDPR). You may withdraw consent at any time.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">4. Data Retention</h2>
            <p>
              Contact and quote enquiry data is retained for up to <strong className="text-text-primary">3 years</strong> after last contact.
              Invoice and order data is retained for <strong className="text-text-primary">10 years</strong> in accordance with Slovenian accounting legislation.
              Data is deleted upon your request unless retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">5. Data Sharing</h2>
            <p>We do not sell or rent your personal data. We may share data with:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Shipping partners (GLS, DHL) — for order delivery only</li>
              <li>Accounting and legal service providers — under strict confidentiality</li>
              <li>Firebase (Google LLC) — website hosting; data may be processed in the EU/US under Standard Contractual Clauses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">6. Your Rights (GDPR)</h2>
            <p>Under GDPR you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong className="text-text-primary">Access</strong> — request a copy of your personal data</li>
              <li><strong className="text-text-primary">Rectification</strong> — correct inaccurate data</li>
              <li><strong className="text-text-primary">Erasure</strong> — request deletion ("right to be forgotten")</li>
              <li><strong className="text-text-primary">Restriction</strong> — limit how we process your data</li>
              <li><strong className="text-text-primary">Portability</strong> — receive your data in a machine-readable format</li>
              <li><strong className="text-text-primary">Objection</strong> — object to processing based on legitimate interest</li>
              <li><strong className="text-text-primary">Withdraw consent</strong> — at any time for consent-based processing</li>
            </ul>
            <p className="mt-3">
              To exercise any right, email us at <a href="mailto:sales@emotres.com" className="text-brand hover:underline">sales@emotres.com</a>.
              You also have the right to lodge a complaint with the Slovenian Information Commissioner
              (<a href="https://www.ip-rs.si" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">ip-rs.si</a>).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">7. Security</h2>
            <p>
              We use industry-standard measures to protect your data, including HTTPS encryption and access controls.
              No method of transmission over the internet is 100% secure; we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page reflects the most recent revision.
              Continued use of our website after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">9. Contact</h2>
            <p>
              For any privacy-related questions or requests, please contact:<br />
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
