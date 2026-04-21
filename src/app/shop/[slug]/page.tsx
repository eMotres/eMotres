import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products, getProductBySlug } from '@/lib/products';
import { Metadata } from 'next';

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.title} | eMotres`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <main className="min-h-screen bg-surface-primary">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-text-secondary mb-8">
          <Link href="/" className="hover:text-brand transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-brand transition-colors">Motors</Link>
          <span className="mx-2">/</span>
          <span className="text-text-primary">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-surface-secondary rounded-2xl p-8 flex items-center justify-center aspect-square">
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={480}
              height={480}
              className="object-contain w-full h-full"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-brand bg-orange-50 px-3 py-1 rounded-full mb-4 w-fit">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4 leading-tight">
              {product.title}
            </h1>
            <p className="text-3xl font-bold text-brand mb-6">{product.price}</p>
            <p className="text-text-secondary leading-relaxed mb-8">{product.description}</p>

            <div className="bg-surface-secondary rounded-xl p-6 mb-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-4">Specifications</h2>
              <dl className="space-y-3">
                {product.specs.map(spec => (
                  <div key={spec.label} className="flex justify-between items-center border-b border-surface-tertiary pb-3 last:border-0 last:pb-0">
                    <dt className="text-sm text-text-secondary">{spec.label}</dt>
                    <dd className="text-sm font-semibold text-text-primary">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
