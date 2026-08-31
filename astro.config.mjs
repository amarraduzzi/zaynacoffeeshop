import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// Site URL is read from src/config/site.config.ts at content-authoring time,
// but astro.config needs it too (for sitemap + canonical generation). Kept
// as a plain constant here — update this AND site.config.ts's identity.siteUrl
// together once Zayna has a real domain.
const SITE_URL = 'https://zayna-coffeeshop.ma'; // REPLACE with the real domain when known

export default defineConfig({
  site: SITE_URL,
  // Hand-written static sitemap endpoint (src/pages/sitemap.xml.ts) instead
  // of @astrojs/sitemap — see amplify-restaurant-site's original config for
  // why (integration crashes against this Astro version).
  // React was only ever used for the /menu ordering cart (src/cart/*). That
  // cart was removed at the client's request (2026-08-31) and no page
  // imports React any more, so this integration is currently unused —
  // left in place in case ordering comes back; safe to remove otherwise.
  integrations: [tailwind({ applyBaseStyles: false }), react()],
  // Static output: every page ships as pre-rendered HTML, no client JS
  // needed to read it — good for SEO and for AI answer engines that don't
  // execute JS.
  output: 'static',
  // FR primary (unprefixed), EN and AR as opt-in translations under /en/
  // and /ar/.
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'ar'],
    routing: { prefixDefaultLocale: false },
  },
});
