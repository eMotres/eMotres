import React from 'react';
import Image from 'next/image';

interface BlogPostProps {
  imageUrl: string;
  category: string;
  title: string;
  excerpt: string;
  postUrl: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ imageUrl, category, title, excerpt, postUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
        <div className="absolute top-4 left-4 bg-brand text-white text-sm font-bold py-1 px-3 rounded-full">{category}</div>
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
