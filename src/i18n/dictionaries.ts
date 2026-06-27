// Lightweight i18n for the additive Chinese (/zh) subtree.
// English lives at the root and is the default; Simplified Chinese lives under /zh.
// No middleware / no URL changes to the existing English site (ads-safe).

export type Locale = 'en' | 'zh';

export const locales: Locale[] = ['en', 'zh'];

/** Detect locale from a pathname ('/zh' or '/zh/...' => 'zh', else 'en'). */
export function localeFromPathname(pathname: string): Locale {
  return pathname === '/zh' || pathname.startsWith('/zh/') ? 'zh' : 'en';
}

// Shared UI chrome strings (navbar etc.). Page bodies are translated in the
// /zh page files themselves.
export const ui = {
  en: {
    nav: {
      shop: 'Motors',
      technology: 'Technology',
      services: 'Services',
      news: 'News',
      blog: 'Blog',
      faq: 'FAQ',
    },
    contact: 'Contact',
    quote: 'Get a Quote',
  },
  zh: {
    nav: {
      shop: '电机产品',
      technology: '核心技术',
      services: '定制服务',
      news: '新闻',
      blog: '技术博客',
      faq: '常见问题',
    },
    contact: '联系我们',
    quote: '获取报价',
  },
} as const;
