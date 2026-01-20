import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const products = [
  {
    imageUrl: "https://emotres.com/wp-content/uploads/2024/08/CIAG_125_25_2025-Apr-17_04-52-17PM-000_CustomizedView3927969501-e1744956980369-300x300.png",
    title: "5 kW air-cooled electric motor CIAG 125_25",
    price: "€1,500.00",
    productUrl: "https://emotres.com/shop/5-kw-air-cooled-electric-motor/",
  },
  {
    imageUrl: "https://emotres.com/wp-content/uploads/2024/08/12-kW-electric-motor-150-40-600x600-1-300x300.webp",
    title: "12 kW air-cooled electric motor",
    price: "€2,000.00",
    productUrl: "https://emotres.com/shop/12-kw-air-cooled-electric-motor/",
  },
  {
    imageUrl: "https://emotres.com/wp-content/uploads/2024/08/20-kW-electric-motor-200-30-600x600-1-300x300.webp",
    title: "13 kW air-cooled electric motor",
    price: "€2,500.00",
    productUrl: "https://emotres.com/shop/13-kw-air-cooled-electric-motor/",
  },
  {
    imageUrl: "https://emotres.com/wp-content/uploads/2024/08/20-kW-electric-motor-200-45-600x600-1-300x300.webp",
    title: "20 kW air-cooled electric motor",
    price: "€3,000.00",
    productUrl: "https://emotres.com/shop/20-kw-air-cooled-electric-motor/",
  },
  {
    imageUrl: "https://emotres.com/wp-content/uploads/2024/08/50-kW-electric-motor-200-50-600x600-1-300x300.webp",
    title: "50 kW air-cooled electric motor",
    price: "€4,000.00",
    productUrl: "https://emotres.com/shop/50-kw-air-cooled-electric-motor/",
  },
  {
    imageUrl: "https://emotres.com/wp-content/uploads/2024/08/Liquid-cooled-50-kW-electric-motor-600x600-1-300x300.webp",
    title: "50 kW liquid-cooled electric motor",
    price: "€5,000.00",
    productUrl: "https://emotres.com/shop/liquid-cooled-50-kw-electric-motor/",
  },
  {
    imageUrl: "https://emotres.com/wp-content/uploads/2024/08/110-kW-liquid-cooled-electric-motor-250-50-600x600-1-300x300.webp",
    title: "110 kW liquid-cooled electric motor",
    price: "€7,000.00",
    productUrl: "https://emotres.com/shop/110-kw-liquid-cooled-electric-motor/",
  },
  {
    imageUrl: "https://emotres.com/wp-content/uploads/2024/08/170-kW-liquid-cooled-electric-motor-300-70-600x600-1-300x300.webp",
    title: "170 kW liquid-cooled electric motor",
    price: "€11,000.00",
    productUrl: "https://emotres.com/shop/170-kw-liquid-cooled-electric-motor/",
  },
];

const ShopPage = () => {
  return (
    <main>
      <Navbar />
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-center mb-12">Shop</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ShopPage;
