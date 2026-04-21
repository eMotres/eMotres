import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: string;
  productUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, price, productUrl }) => {
  return (
    <Link
      href={productUrl}
      className="group bg-surface-primary rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center overflow-hidden border border-surface-tertiary hover:-translate-y-1"
    >
      <div className="relative w-full h-52 bg-surface-secondary">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex flex-col items-center flex-1 w-full">
        <h3 className="text-sm font-semibold text-text-primary leading-snug mb-3">{title}</h3>
        <p className="text-brand font-bold text-lg mb-4">{price}</p>
        <span className="mt-auto w-full bg-brand text-white font-bold py-2 px-6 rounded-lg group-hover:bg-brand-dark transition-colors duration-300">
          Select options
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
