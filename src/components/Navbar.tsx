import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between py-6">
        <div>
          <Link href="/">
            <Image src="https://emotres.com/wp-content/uploads/2024/08/logo-e-motres.webp" alt="eMotres Logo" width={150} height={37} />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/shop" className="hover:text-gray-300">Motors</Link>
          <Link href="/motor-development-services" className="hover:text-gray-300">Service</Link>
          <Link href="/blog" className="hover:text-gray-300">Technology</Link>
          <Link href="/faq" className="hover:text-gray-300">Faq</Link>
          <Link href="/#get-quote" className="hover:text-gray-300">Get a Quote</Link>
          <Link href="/contact-us" className="hover:text-gray-300">Contacts</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
