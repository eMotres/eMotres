import React from 'react';
import type { Locale } from '@/i18n/dictionaries';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: string;
  productUrl: string;
  /** Already-localised badge text (e.g. 'sample' / '样品') supplied by the caller. */
  priceTag?: string;
  locale?: Locale;
}

// Title and price are already localised by the caller; only UI chrome is localised here.
const strings = {
  en: {
    cta: 'Select options',
    view: (title: string) => `View ${title}`,
  },
  zh: {
    cta: '选择规格',
    view: (title: string) => `查看 ${title}`,
  },
} as const;

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, price, productUrl, priceTag, locale = 'en' }) => {
  const t = strings[locale];
  return (
    <div className="group relative bg-surface-primary rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center overflow-hidden border border-surface-tertiary hover:-translate-y-1">
      {/* Plain <a> tag — bypasses Next.js router, works reliably everywhere */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a
        href={productUrl.endsWith('/') ? productUrl : productUrl + '/'}
        className="absolute inset-0 z-10"
        aria-label={t.view(title)}
      />
      <div className="w-full h-52 bg-surface-secondary flex items-center justify-center overflow-hidden select-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={title}
          draggable="false"
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300 pointer-events-none mix-blend-multiply"
        />
      </div>
      <div className="p-5 flex flex-col items-center flex-1 w-full">
        <h3 className="text-sm font-semibold text-text-primary leading-snug mb-3">{title}</h3>
        <p className="text-brand font-bold text-lg mb-4 flex items-center gap-2">
          {price}
          {priceTag && (
            <span className="text-[10px] font-semibold uppercase tracking-wide text-amber-800 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">
              {priceTag}
            </span>
          )}
        </p>
        <span className="mt-auto w-full bg-brand text-white font-bold py-2 px-6 rounded-lg group-hover:bg-brand-dark transition-colors duration-300">
          {t.cta}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
