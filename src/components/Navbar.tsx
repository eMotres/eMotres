import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-6">
        <div>
          <Link href="/" className="text-3xl font-bold accent-orange">eMotres</Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/products" className="hover:text-gray-300">Products</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
