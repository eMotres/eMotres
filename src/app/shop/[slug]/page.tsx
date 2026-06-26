import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products, getProductBySlug, PerformanceSpecs } from '@/lib/products';
import DynoTestResults from '@/components/DynoTestResults';
import MotorComparisonSection from '@/components/MotorComparison';
import BuyButton from '@/components/BuyButton';
import { isBuyable } from '@/lib/store';
import { SITE_URL } from '@/lib/site';
import { Metadata } from 'next';

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  const url = `/shop/${product.slug}/`;
  return {
    title: product.title,
    description: product.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      siteName: 'eMotres',
      locale: 'en_US',
      title: `${product.title} | eMotres`,
      description: product.description,
      url,
      images: [{ url: product.imageUrl, width: 600, height: 600, alt: product.title }],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products.filter(p => p.slug !== product.slug).slice(0, 4);
  const canBuy = isBuyable(product);

  const ps = product.performanceSpecs;
  const perfRows = ps
    ? [
        { label: 'Power', cont: ps.continuous.power, peak: ps.peak.power },
        { label: 'Torque', cont: ps.continuous.torque, peak: ps.peak.torque },
        ...(ps.continuous.thrust && ps.peak.thrust
          ? [{ label: 'Thrust', cont: ps.continuous.thrust, peak: ps.peak.thrust }]
          : []),
        { label: 'Speed', cont: ps.continuous.speed, peak: ps.peak.speed },
        { label: 'DC current', cont: ps.continuous.current, peak: ps.peak.current },
        { label: 'Efficiency', cont: ps.continuous.efficiency, peak: ps.peak.efficiency ?? '—' },
      ]
    : [];

  const productUrl = `${SITE_URL}/shop/${product.slug}/`;
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    image: [`${SITE_URL}${product.imageUrl}`],
    description: product.description,
    sku: product.sku,
    category: product.category,
    brand: { '@type': 'Brand', name: 'eMotres' },
    offers: {
      '@type': 'Offer',
      url: productUrl,
      priceCurrency: 'EUR',
      price: product.price.replace(/[^0-9.]/g, ''),
      availability: /in stock/i.test(product.status)
        ? 'https://schema.org/InStock'
        : 'https://schema.org/BackOrder',
      seller: { '@type': 'Organization', name: 'eMotres' },
    },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Shop', item: `${SITE_URL}/shop/` },
      { '@type': 'ListItem', position: 3, name: product.title, item: productUrl },
    ],
  };

  return (
    <main className="min-h-screen bg-surface-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-text-secondary mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-brand transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-brand transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-text-primary">{product.title}</span>
        </nav>

        {/* Main product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          {/* Image */}
          <div className="bg-surface-secondary rounded-2xl p-8 flex items-center justify-center aspect-square">
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={480}
              height={480}
              className="object-contain w-full h-full mix-blend-multiply"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand bg-orange-50 px-3 py-1 rounded-full">
                {product.category}
              </span>
              <span className="text-xs text-text-secondary bg-surface-secondary px-3 py-1 rounded-full">
                SKU: {product.sku}
              </span>
            </div>

            <h1 className="text-3xl font-extrabold text-text-primary mb-3 leading-tight">
              {product.title}
            </h1>

            <div className="mb-6">
              <div className="flex items-center gap-3 flex-wrap">
                <p className="text-3xl font-bold text-brand">{product.price}</p>
                {product.priceBadge && (
                  <span className="text-xs font-semibold uppercase tracking-wide text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                    {product.priceBadge}
                  </span>
                )}
              </div>

              {product.priceNote && (
                <p className="text-sm text-text-secondary mt-2">{product.priceNote}</p>
              )}

              {product.priceComingSoon && (
                <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand bg-orange-50 border border-orange-100 rounded-lg px-3 py-2">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {product.priceComingSoon}
                </p>
              )}

              {/* Stock status */}
              <div className="flex items-center gap-2 mt-4">
                <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span>
                <span className="text-sm text-text-secondary">{product.status}</span>
              </div>
            </div>

            {product.keyClaim && (
              <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-xl px-4 py-3.5 mb-6">
                <svg className="w-6 h-6 text-brand shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                </svg>
                <p className="text-sm sm:text-base font-bold text-text-primary leading-snug">{product.keyClaim}</p>
              </div>
            )}

            <p className="text-text-secondary leading-relaxed mb-8">{product.description}</p>

            {/* CTAs — Buy now (in stock) takes over as primary, else quote-only */}
            <div className="flex flex-col sm:flex-row gap-4">
              {canBuy ? (
                <>
                  <BuyButton
                    product={product}
                    className="flex-1 text-center bg-brand text-white font-bold py-4 px-8 rounded-xl hover:bg-brand-dark transition-colors shadow-lg"
                  />
                  <Link
                    href="/get-a-quote"
                    className="flex-1 text-center bg-surface-secondary text-text-primary font-bold py-4 px-8 rounded-xl hover:bg-surface-tertiary transition-colors border border-surface-tertiary"
                  >
                    Request a Quote
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/get-a-quote"
                    className="flex-1 text-center bg-brand text-white font-bold py-4 px-8 rounded-xl hover:bg-brand-dark transition-colors shadow-lg"
                  >
                    Request a Quote
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 text-center bg-surface-secondary text-text-primary font-bold py-4 px-8 rounded-xl hover:bg-surface-tertiary transition-colors border border-surface-tertiary"
                  >
                    Contact Us
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Details tabs section */}
        <div className="mb-16">
          <div className="border-b border-surface-tertiary mb-8">
            <span className="inline-block border-b-2 border-brand text-brand font-semibold pb-3 text-sm uppercase tracking-wider">
              Details
            </span>
          </div>

          {/* Unified specifications table */}
          <div className="mb-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-4">Specifications</h2>
            <div className="rounded-xl overflow-hidden border border-surface-tertiary">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-secondary">
                    <th className="text-left px-5 py-3 text-text-secondary font-semibold w-1/3"></th>
                    {ps ? (
                      <>
                        <th className="px-5 py-3 font-bold text-text-primary text-center">Continuous</th>
                        <th className="px-5 py-3 font-bold text-brand text-center">Peak</th>
                      </>
                    ) : (
                      <th className="px-5 py-3 font-bold text-text-primary text-right">Value</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {perfRows.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? 'bg-surface-primary' : 'bg-surface-secondary'}>
                      <td className="px-5 py-3 text-text-secondary">{row.label}</td>
                      <td className="px-5 py-3 text-text-primary font-semibold text-center">{row.cont}</td>
                      <td className="px-5 py-3 text-brand font-semibold text-center">{row.peak}</td>
                    </tr>
                  ))}
                  {/* SKU is already shown in the header badge, so skip it here */}
                  {product.specs.filter((s) => s.label !== 'SKU').map((spec, j) => {
                    const idx = perfRows.length + j;
                    return (
                      <tr key={spec.label} className={idx % 2 === 0 ? 'bg-surface-primary' : 'bg-surface-secondary'}>
                        <td className="px-5 py-3 text-text-secondary">{spec.label}</td>
                        <td colSpan={ps ? 2 : 1} className="px-5 py-3 text-text-primary font-semibold text-right">{spec.value}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Applications */}
            <div className="bg-surface-secondary rounded-xl p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-5">
                Applications
              </h2>
              <p className="text-text-secondary leading-relaxed text-sm">{product.applications}</p>
            </div>

            {/* Why eMotres */}
            <div className="bg-surface-secondary rounded-xl p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-4">
                Why eMotres?
              </h2>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-0.5">✓</span>
                  Patented construction — highest torque density on the market
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-0.5">✓</span>
                  1-year warranty on all motors
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-0.5">✓</span>
                  Custom motor design available (0.5 kW – 1 MW)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Test results — motors with dynamometer data only */}
        {product.dynoTest && <DynoTestResults test={product.dynoTest} />}

        {/* Head-to-head comparison — motors with comparison data only */}
        {product.comparison && (
          <MotorComparisonSection data={product.comparison} oursPoints={product.dynoTest?.points ?? []} />
        )}

        {/* Related products */}
        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map(p => (
              <Link
                key={p.slug}
                href={`/shop/${p.slug}`}
                className="group bg-surface-secondary rounded-xl p-4 hover:shadow-lg transition-all duration-300 border border-surface-tertiary hover:-translate-y-1"
              >
                <div className="relative h-36 mb-3 bg-surface-primary rounded-lg">
                  <Image
                    src={p.imageUrl}
                    alt={p.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
                  />
                </div>
                <p className="text-xs font-medium text-text-primary leading-snug mb-1">{p.title}</p>
                <p className="text-brand font-bold text-sm">{p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}
