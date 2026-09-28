// ─────────────────────────────────────────────────────────────────────────────
// Online store (Stripe) — OFF by default.
//
// The whole shop scaffold is dormant until STORE_ENABLED is true. While it's
// false the site behaves exactly as before: every product shows "Request a
// Quote" and no "Buy now" buttons appear anywhere.
//
// HOW TO GO LIVE (when a product is actually in stock):
//   1. In Stripe → Payment links (https://dashboard.stripe.com/payment-links)
//      create a link for the product. Turn on "Collect shipping address" and,
//      for EU VAT, enable Stripe Tax. Set the "after payment" redirect to
//      https://emotres.com/order-confirmed/
//   2. Paste that link into the product's `stripePaymentLink` in
//      src/lib/products.ts and set `inStock: true`.
//   3. Flip STORE_ENABLED to true below.
//   4. Deploy.
//
// Only products that are in stock AND have a payment link get a Buy button —
// everything else stays quote-only, so custom / made-to-order motors are never
// accidentally "buyable".
// ─────────────────────────────────────────────────────────────────────────────

import type { Product } from './products';

export const STORE_ENABLED = false;

/** True when this product can be purchased online right now. */
export function isBuyable(product: Product): boolean {
  return STORE_ENABLED && product.inStock === true && !!product.stripePaymentLink;
}
