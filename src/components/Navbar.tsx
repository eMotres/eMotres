'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-surface-primary border-b border-surface-tertiary shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-brand">eMotres</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <Link href="/" className="text-text-secondary hover:text-brand px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              <Link href="/shop" className="text-text-secondary hover:text-brand px-3 py-2 rounded-md text-sm font-medium transition-colors">Motors</Link>
              <Link href="/motor-development-services" className="text-text-secondary hover:text-brand px-3 py-2 rounded-md text-sm font-medium transition-colors">Service</Link>
              <Link href="/blog" className="text-text-secondary hover:text-brand px-3 py-2 rounded-md text-sm font-medium transition-colors">Technology</Link>
              <Link href="/faq" className="text-text-secondary hover:text-brand px-3 py-2 rounded-md text-sm font-medium transition-colors">FAQ</Link>
              <Link href="/get-a-quote" className="text-text-secondary hover:text-brand px-3 py-2 rounded-md text-sm font-medium transition-colors">Get a Quote</Link>
              <Link href="/contact" className="text-text-secondary hover:text-brand px-3 py-2 rounded-md text-sm font-medium transition-colors">Contacts</Link>
              <Link href="/shop" className="ml-4 bg-brand text-white font-semibold py-2 px-5 rounded-lg hover:bg-brand-dark transition-colors text-sm">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-brand hover:bg-surface-secondary focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-surface-primary border-t border-surface-tertiary" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-text-secondary hover:text-brand block px-3 py-2 rounded-md text-base font-medium transition-colors">Home</Link>
            <Link href="/shop" className="text-text-secondary hover:text-brand block px-3 py-2 rounded-md text-base font-medium transition-colors">Motors</Link>
            <Link href="/motor-development-services" className="text-text-secondary hover:text-brand block px-3 py-2 rounded-md text-base font-medium transition-colors">Service</Link>
            <Link href="/blog" className="text-text-secondary hover:text-brand block px-3 py-2 rounded-md text-base font-medium transition-colors">Technology</Link>
            <Link href="/faq" className="text-text-secondary hover:text-brand block px-3 py-2 rounded-md text-base font-medium transition-colors">FAQ</Link>
            <Link href="/get-a-quote" className="text-text-secondary hover:text-brand block px-3 py-2 rounded-md text-base font-medium transition-colors">Get a Quote</Link>
            <Link href="/contact" className="text-text-secondary hover:text-brand block px-3 py-2 rounded-md text-base font-medium transition-colors">Contacts</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
