'use client';

import { useEffect } from 'react';

/**
 * The root layout renders <html lang="en"> for the whole app. For the additive
 * /zh subtree we correct the document language client-side (and restore it on
 * leaving) — keeps the English pages byte-identical while giving /zh the right
 * lang for screen readers and JS-aware crawlers. hreflang tags carry the rest.
 */
export default function ZhLang() {
  useEffect(() => {
    document.documentElement.lang = 'zh-CN';
    return () => {
      document.documentElement.lang = 'en';
    };
  }, []);
  return null;
}
