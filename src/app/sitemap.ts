import type { MetadataRoute } from 'next';
import { products } from '@/lib/products';
import { SITE_URL } from '@/lib/site';

const BASE = SITE_URL;

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/zh/`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/zh/shop/`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/zh/technology/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/zh/news/`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/zh/motor-development-services/`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/zh/get-a-quote/`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/zh/faq/`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/zh/contact-us/`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE}/zh/blog/`, changeFrequency: 'weekly', priority: 0.5 },
    {
      url: `${BASE}/zh/inrunner-motor-with-tangential-magnets-polarization-vs-outrunner-with-radial-magnets-polarization/`,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    { url: `${BASE}/zh/radial-go-and-axial-motors-technology/`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE}/zh/privacy-policy/`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/zh/terms-conditions/`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/zh/delivery-returns/`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/shop/`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/technology/`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/news/`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/motor-development-services/`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/get-a-quote/`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog/`, changeFrequency: 'weekly', priority: 0.6 },
    {
      url: `${BASE}/inrunner-motor-with-tangential-magnets-polarization-vs-outrunner-with-radial-magnets-polarization/`,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    { url: `${BASE}/radial-go-and-axial-motors-technology/`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE}/faq/`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/contact-us/`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE}/privacy-policy/`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/terms-conditions/`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/delivery-returns/`, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const productEntries: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE}/shop/${p.slug}/`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const productEntriesZh: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE}/zh/shop/${p.slug}/`,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticEntries, ...productEntries, ...productEntriesZh];
}
