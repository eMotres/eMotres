import React from 'react';
import Link from 'next/link';
import { BlogPostData } from '@/lib/blog';

const BlogPost: React.FC<BlogPostData & { readMoreLabel?: string }> = ({ imageUrl, category, title, excerpt, postUrl, readMoreLabel = 'Continue reading →' }) => {
  return (
    <Link
      href={postUrl}
      className="group bg-surface-primary rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col border border-surface-tertiary hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <span className="absolute top-4 left-4 bg-brand text-white text-xs font-bold py-1 px-3 rounded-full">
          {category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold mb-2 text-text-primary leading-snug">{title}</h3>
        <p className="text-text-secondary text-sm mb-4 flex-1 leading-relaxed">{excerpt}</p>
        <span className="text-brand font-bold text-sm group-hover:underline">{readMoreLabel}</span>
      </div>
    </Link>
  );
};

export default BlogPost;
