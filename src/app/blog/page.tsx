import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPost from '@/components/BlogPost';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electric Motor Technology Blog | eMotres',
  description: 'Explore the technical features of our electric motors. Our blog covers topics like tangential magnet polarization, comparisons of motor technologies (Inrunner vs. Outrunner, Radial vs. Axial), and more.',
};

const posts = [
  {
    imageUrl: "https://emotres.com/wp-content/uploads/elementor/thumbs/comparsion-qsbifcxazpnwcmim2cqcgafaf8bvoxj6wfchut4m7u.webp",
    category: "Comparation",
    title: "Inrunner motor with tangential magnets polarization vs Outrunner with radial magnets polarization",
    excerpt: "The torque equation in a synchronous motor or generator is directly proportional to...",
    postUrl: "https://emotres.com/inrunner-motor-with-tangential-magnets-polarization-vs-outrunner-with-radial-magnets-polarization/",
  },
  {
    imageUrl: "https://emotres.com/wp-content/uploads/elementor/thumbs/motres-cooling-system-qsbf3fol1nhx3mpnc0kvu1v60hf0n4g1euzcmwxu2i.webp",
    category: "Comparation",
    title: "Comparation Radial GO and Axial motors technology",
    excerpt: "There is a powerful promotion of the superiority of the axial electric motor...",
    postUrl: "https://emotres.com/radial-go-and-axial-motors-technology/",
  },
  {
    imageUrl: "https://emotres.com/wp-content/uploads/elementor/thumbs/electric-motors-qsbmht61tg579fsdw5orftzqdghnz7xmpaiyntzere.webp",
    category: "Terminology",
    title: "Technology",
    excerpt: "Table of Contents Tangential magnets polarization The tangential polarization of our magnets significantly...",
    postUrl: "https://emotres.com/technology/",
  },
];

const BlogPage = () => {
  return (
    <main>
      <Navbar />
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-center mb-12">Latest News</h1>
          <p className="text-center text-lg text-gray-600 mb-12">Welcome to our blog, where we write about the technical features of the electric motors we produce.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default BlogPage;
