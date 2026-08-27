import type { APIRoute } from 'astro';
import { identity } from '../config/site.config';

// Hand-written static sitemap (see astro.config.mjs for why: the
// @astrojs/sitemap integration crashes at build time against this Astro
// version). Update this list if pages are added or removed.
const paths = [
  '',
  'carte',
  'menu',
  'a-propos',
  'avis',
  'faq',
  'contact',
  'en',
  'ar',
];

export const GET: APIRoute = () => {
  const urls = paths
    .map(
      (p) => `  <url><loc>${identity.siteUrl}/${p}</loc></url>`
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
