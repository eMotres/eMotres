import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electric Motors for Drones and Aviation | eMotres Shop',
  description: 'Explore our range of high-performance electric motors. We offer both air-cooled and liquid-cooled motors from 5 kW to 170 kW, designed for drones, aviation, and other demanding applications.',
};

const ShopPage = () => {
  return (
    <main>
      <Navbar />
      <div className="bg-surface-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-center mb-4 text-text-primary">Electric Motors</h1>
          <p className="text-center text-text-secondary mb-12">High-performance motors for drones, aviation, marine, and automotive applications</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard
                key={product.slug}
                imageUrl={product.imageUrl}
                title={product.title}
                price={product.price}
                productUrl={`/shop/${product.slug}`}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ShopPage;
