import { Product } from '@/lib/products';
import type { Locale } from '@/i18n/dictionaries';

// The label keeps its trailing separator so the JSX child structure (and the
// rendered markup) is unchanged for English.
const label = { en: 'Buy now — ', zh: '立即购买 —— ' } as const;

/**
 * "Buy now" button — links to the product's Stripe Payment Link.
 * Render only when isBuyable(product) is true (see src/lib/store.ts).
 */
export default function BuyButton({
  product,
  className,
  locale = 'en',
}: {
  product: Product;
  className?: string;
  locale?: Locale;
}) {
  if (!product.stripePaymentLink) return null;
  return (
    <a href={product.stripePaymentLink} className={className}>
      {label[locale]}{product.price}
    </a>
  );
}
