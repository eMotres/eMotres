import React from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electric Motors for Drones and Aviation | eMotres Shop',
  description: 'Explore our range of high-performance electric motors. We offer both air-cooled and liquid-cooled motors from 5 kW to 170 kW, designed for drones, aviation, and other demanding applications.',
};

const coreProducts = products.filter(p => p.technology === 'AeroStator Core');
const classicProducts = products.filter(p => p.technology === 'Classic');

const ShopPage = () => {
  return (
    <main>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl font-extrabold text-center mb-3 text-text-primary">Electric Motors</h1>
          <p className="text-center text-text-secondary mb-16">High-performance motors for drones, aviation, marine, and automotive applications</p>

          {/* ── AeroStator Core Section ── */}
          <div className="mb-16" style={{ isolation: 'isolate' }}>
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px flex-1 bg-brand/20" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand">New Generation</span>
              <div className="h-px flex-1 bg-brand/20" />
            </div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold text-text-primary">AeroStator Core</h2>
              <p className="text-sm text-text-secondary mt-1 max-w-xl mx-auto">
                Patented stator architecture — tangential magnets, rectangular copper windings, best-in-class cooling. Highest torque density on the market.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {coreProducts.map(product => (
                <ProductCard
                  key={product.slug}
                  imageUrl={product.imageUrl}
                  title={product.title}
                  price={product.price}
                  priceTag={product.priceBadge ? 'sample' : undefined}
                  productUrl={`/shop/${product.slug}`}
                />
              ))}
            </div>
          </div>

          {/* ── Classic Line Section ── */}
          <div style={{ isolation: 'isolate' }}>
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">Classic Line</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold text-text-primary">Old Motor Construction</h2>
              <p className="text-sm text-text-secondary mt-1 max-w-xl mx-auto">
                No longer in production. Custom orders available with the new AeroStator Core technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {classicProducts.map(product => (
                <ProductCard
                  key={product.slug}
                  imageUrl={product.imageUrl}
                  title={product.title}
                  price={product.price}
                  priceTag={product.priceBadge ? 'sample' : undefined}
                  productUrl={`/shop/${product.slug}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default ShopPage;
