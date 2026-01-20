import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">eMotres</h3>
            <p>Your one-stop shop for all things electric vehicles.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/products" className="hover:text-gray-300">Products</a></li>
              <li><a href="/about" className="hover:text-gray-300">About</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">Facebook</a>
              <a href="#" className="hover:text-gray-300">Twitter</a>
              <a href="#" className="hover:text-gray-300">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} eMotres. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
