import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: string;
  productUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, price, productUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      <div className="relative w-full h-48 mb-4">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-blue-600 font-bold mt-2">{price}</p>
      <a href={productUrl} className="mt-4 bg-brand text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300">
        Select options
      </a>
    </div>
  );
};

export default ProductCard;
