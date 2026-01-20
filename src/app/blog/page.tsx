import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPost from '@/components/BlogPost';
import { Metadata } from 'next';
import { getPosts, getCategories } from '@/lib/blog';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Electric Motor Technology Blog | eMotres',
  description: 'Explore the technical features of our electric motors. Our blog covers topics like tangential magnet polarization, comparisons of motor technologies (Inrunner vs. Outrunner, Radial vs. Axial), and more.',
};

export default function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const category = typeof searchParams.category === 'string' ? searchParams.category : undefined;
  const posts = getPosts(category);
  const categories = getCategories();

  return (
    <main>
      <Navbar />
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-center mb-12">Latest News</h1>
          <p className="text-center text-lg text-gray-600 mb-8">Welcome to our blog, where we write about the technical features of the electric motors we produce.</p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/blog"
              className={`px-4 py-2 rounded-full font-medium transition-colors ${!category ? 'bg-brand text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog?category=${cat}`}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${category === cat ? 'bg-brand text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
              >
                {cat}
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <BlogPost key={index} {...post} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">No posts found in this category.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
