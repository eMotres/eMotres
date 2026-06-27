'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ui, localeFromPathname } from '@/i18n/dictionaries';

const navLinks: { href: string; key: keyof typeof ui.en.nav }[] = [
  { href: '/shop', key: 'shop' },
  { href: '/technology', key: 'technology' },
  { href: '/motor-development-services', key: 'services' },
  { href: '/news', key: 'news' },
  { href: '/blog', key: 'blog' },
  { href: '/faq', key: 'faq' },
];

const LocaleSwitcher = ({ locale }: { locale: 'en' | 'zh' }) => (
  <div className="flex items-center gap-1.5 text-xs font-semibold">
    <Link
      href="/"
      className={locale === 'en' ? 'text-brand' : 'text-text-secondary hover:text-text-primary transition-colors'}
    >
      EN
    </Link>
    <span className="text-border">|</span>
    <Link
      href="/zh"
      className={locale === 'zh' ? 'text-brand' : 'text-text-secondary hover:text-text-primary transition-colors'}
    >
      中文
    </Link>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const locale = localeFromPathname(pathname || '/');
  const t = ui[locale];
  const home = locale === 'zh' ? '/zh' : '/';

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
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {t.nav[link.key]}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LocaleSwitcher locale={locale} />
            <Link
              href="/contact-us"
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              {t.contact}
            </Link>
            <Link
              href="/get-a-quote"
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
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-text-secondary hover:text-text-primary px-3 py-2 rounded-md hover:bg-surface-secondary transition-colors"
              >
                {t.nav[link.key]}
              </Link>
            ))}
            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-text-secondary hover:text-text-primary px-3 py-2 rounded-md hover:bg-surface-secondary transition-colors"
            >
              {t.contact}
            </Link>
            <div className="px-3 py-2">
              <LocaleSwitcher locale={locale} />
            </div>
            <Link
              href="/get-a-quote"
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
