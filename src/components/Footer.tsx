'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ui, localeFromPathname } from '@/i18n/dictionaries';

// en href is the original; zh href points to the Chinese page where one exists,
// otherwise falls back to the English page (legal pages aren't translated yet).
const companyLinks = [
  { en: '/motor-development-services', zh: '/zh/motor-development-services', key: 'service' },
  { en: '/technology', zh: '/zh/technology', key: 'technology' },
  { en: '/contact-us', zh: '/zh/contact-us', key: 'contacts' },
] as const;

const supportLinks = [
  { en: '/faq', zh: '/zh/faq', key: 'faq' },
  { en: '/get-a-quote', zh: '/zh/get-a-quote', key: 'getQuote' },
  { en: '/terms-conditions', zh: '/terms-conditions', key: 'terms' },
  { en: '/delivery-returns', zh: '/delivery-returns', key: 'delivery' },
  { en: '/privacy-policy', zh: '/privacy-policy', key: 'privacy' },
] as const;

const Footer = () => {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const locale = localeFromPathname(pathname || '/');
  const t = ui[locale].footer;
  const home = locale === 'zh' ? '/zh' : '/';

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link href={home} className="text-2xl font-bold text-white mb-4 inline-block">eMotres</Link>
            <p className="text-sm leading-relaxed mb-4">
              MOTRES D.O.O<br />
              Reg. No.: 7255691000<br />
              VAT: SI22399933
            </p>
            <p className="text-sm leading-relaxed mb-4">
              Kotnikova 34<br />
              Ljubljana 1000, Slovenia
            </p>
            <p className="text-sm">
              <a href="mailto:sales@emotres.com" className="hover:text-white transition-colors">
                sales@emotres.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{t.company}</h3>
            <ul className="space-y-2 text-sm">
              {companyLinks.map(link => (
                <li key={link.key}>
                  <Link href={locale === 'zh' ? link.zh : link.en} className="hover:text-white transition-colors">
                    {t[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{t.support}</h3>
            <ul className="space-y-2 text-sm">
              {supportLinks.map(link => (
                <li key={link.key}>
                  <Link href={locale === 'zh' ? link.zh : link.en} className="hover:text-white transition-colors">
                    {t[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{t.connect}</h3>
            <a
              href="https://www.linkedin.com/company/motres/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            {locale === 'zh'
              ? `版权所有 © ${year} eMotres。${t.rights}`
              : `Copyright © ${year} eMotres. ${t.rights}`}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
