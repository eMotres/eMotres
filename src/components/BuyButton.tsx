import { Product } from '@/lib/products';

/**
 * "Buy now" button — links to the product's Stripe Payment Link.
 * Render only when isBuyable(product) is true (see src/lib/store.ts).
 */
export default function BuyButton({ product, className }: { product: Product; className?: string }) {
  if (!product.stripePaymentLink) return null;
  return (
    <a href={product.stripePaymentLink} className={className}>
      Buy now — {product.price}
    </a>
  );
}
