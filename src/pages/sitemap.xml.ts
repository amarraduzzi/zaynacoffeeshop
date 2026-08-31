import type { APIRoute } from 'astro';
import { identity } from '../config/site.config';

// Hand-written static sitemap (see astro.config.mjs for why: the
// @astrojs/sitemap integration crashes at build time against this Astro
// version). Update this list if pages are added or removed.
// 'menu' is deliberately excluded — it's now just a redirect to 'carte'
// (online ordering was removed 2026-08-31), not a real page worth indexing.
const routes = ['', 'carte', 'galerie', 'avis', 'faq', 'contact'];
const paths = [
  ...routes,
  ...routes.map((r) => `en${r ? '/' + r : ''}`),
  ...routes.map((r) => `ar${r ? '/' + r : ''}`),
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
