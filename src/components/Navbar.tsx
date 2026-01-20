import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="container mx-auto flex items-center justify-between py-6">
        <div>
          <a href="/" className="text-3xl font-bold accent-orange">eMotres</a>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="/products" className="hover:text-gray-300">Products</a>
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
