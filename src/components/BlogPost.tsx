import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPostData } from '@/lib/blog';

const BlogPost: React.FC<BlogPostData> = ({ imageUrl, category, title, excerpt, postUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
        <Link
          href={`/blog?category=${category}`}
          className="absolute top-4 left-4 bg-brand text-white text-sm font-bold py-1 px-3 rounded-full hover:bg-opacity-80 transition-colors"
        >
          {category}
        </Link>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <a href={postUrl} className="text-brand font-bold hover:underline">Continue reading</a>
      </div>
    </div>
  );
};

export default BlogPost;
