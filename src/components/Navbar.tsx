'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ui, localeFromPathname } from '@/i18n/dictionaries';

const navLinks: { href: string; key: keyof typeof ui.en.nav; zh: boolean }[] = [
  { href: '/shop', key: 'shop', zh: true },
  { href: '/technology', key: 'technology', zh: true },
  { href: '/motor-development-services', key: 'services', zh: true },
  { href: '/news', key: 'news', zh: true },
  { href: '/blog', key: 'blog', zh: true },
  { href: '/faq', key: 'faq', zh: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const locale = localeFromPathname(pathname || '/');
  const t = ui[locale];
  const home = locale === 'zh' ? '/zh' : '/';
  // On /zh, link to the Chinese pages. `zh: false` hides an entry that has no Chinese version.
  const links = navLinks
    .filter(l => locale === 'en' || l.zh)
    .map(l => ({ ...l, url: locale === 'zh' ? `/zh${l.href}` : l.href }));
  const contactHref = locale === 'zh' ? '/zh/contact-us' : '/contact-us';
  const quoteHref = locale === 'zh' ? '/zh/get-a-quote' : '/get-a-quote';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-surface-primary border-b border-border transition-shadow duration-200 ${scrolled ? 'shadow-sm' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={home} className="flex items-center gap-1 group">
            <span className="text-xl font-extrabold tracking-tight text-text-primary group-hover:text-brand transition-colors">
              e<span className="text-brand">Motres</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.url}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {t.nav[link.key]}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={contactHref}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              {t.contact}
            </Link>
            <Link
              href={quoteHref}
              className="text-sm font-semibold bg-brand text-white px-4 py-2 rounded-lg hover:bg-brand-dark transition-colors"
            >
              {t.quote}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="md:hidden p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-surface-secondary transition-colors"
          >
            {!isOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-surface-primary">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.url}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-text-secondary hover:text-text-primary px-3 py-2 rounded-md hover:bg-surface-secondary transition-colors"
              >
                {t.nav[link.key]}
              </Link>
            ))}
            <Link
              href={contactHref}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-text-secondary hover:text-text-primary px-3 py-2 rounded-md hover:bg-surface-secondary transition-colors"
            >
              {t.contact}
            </Link>
            <Link
              href={quoteHref}
              onClick={() => setIsOpen(false)}
              className="mt-2 text-sm font-semibold bg-brand text-white text-center px-4 py-2.5 rounded-lg hover:bg-brand-dark transition-colors"
            >
              {t.quote}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
