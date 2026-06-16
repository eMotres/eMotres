'use client';

import React, { useState } from 'react';
import BlogPost from '@/components/BlogPost';
import { getPosts, getCategories } from '@/lib/blog';
import Link from 'next/link';

export default function BlogPage() {
  const [category, setCategory] = useState<string | undefined>(undefined);
  const posts = getPosts(category);
  const categories = getCategories();

  return (
    <main>
      <div className="bg-surface-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-center mb-4 text-text-primary">Technology Blog</h1>
          <p className="text-center text-lg text-text-secondary mb-12">
            Technical articles about the electric motors we produce.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setCategory(undefined)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!category ? 'bg-brand text-white' : 'bg-surface-primary text-text-secondary hover:bg-surface-tertiary border border-surface-tertiary'}`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === cat ? 'bg-brand text-white' : 'bg-surface-primary text-text-secondary hover:bg-surface-tertiary border border-surface-tertiary'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <BlogPost key={index} {...post} />
              ))
            ) : (
              <p className="col-span-full text-center text-text-secondary">No posts found in this category.</p>
            )}
          </div>
        </div>
      </div>    </main>
  );
}
