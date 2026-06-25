// Google Ads + GA4 conversion helpers.
//
// The Google Ads tag (AW-796970697) and GA4 (G-6BEVZ36QEB) are both loaded in
// src/app/layout.tsx. This module reports leads (quote / contact form
// submissions) to both.

export const GOOGLE_ADS_ID = 'AW-796970697';

// Conversion label from Google Ads.
//   Google Ads → Goals → Conversions → + New conversion action → Website →
//   create an action for the form submit. Google then shows a snippet with
//   send_to: 'AW-796970697/XXXXXXXXXXXXXXXXXX'  — paste ONLY the part after the
//   slash here. Until this is set, submissions still fire the GA4 `generate_lead`
//   event, which can be imported into Google Ads as a conversion.
export const ADS_LEAD_CONVERSION_LABEL = '';

/**
 * Report a successful lead (quote / contact form submission) to GA4 and Google Ads.
 * Call ONLY after a confirmed-successful submission.
 */
export function trackLead(source: string): void {
  if (typeof window === 'undefined') return;
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  const gtag = w.gtag;
  if (typeof gtag !== 'function') return;

  // GA4 — fires immediately, visible in GA4, importable into Google Ads.
  gtag('event', 'generate_lead', {
    currency: 'EUR',
    event_category: 'form',
    event_label: source,
  });

  // Google Ads — direct conversion. Only fires once the label above is set.
  if (ADS_LEAD_CONVERSION_LABEL) {
    gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${ADS_LEAD_CONVERSION_LABEL}`,
    });
  }
}
