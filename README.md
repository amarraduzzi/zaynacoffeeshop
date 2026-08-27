# Zayna Coffee Shop — website

Static, multi-page marketing site for Zayna Coffee Shop (Rabat), built on the
`amplify-restaurant-site` boilerplate (Astro + Tailwind, static output).

## Stack

Astro (static output, no client-side framework runtime) + Tailwind CSS.

## Setup

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## What's real vs. placeholder

Pulled from the Google Business listing (2026-08-27) and already wired in —
no action needed:

- Name, address (12 Rue Jabli, Rabat 10000), phone (06 15 81 06 80)
- Rating (4.9/5, 235 reviews), price range (MAD 50–100)
- Amenities: outdoor terrace, private room, vegan options
- Opening hours confirmed (08:00–21:00 daily, from the printed in-store menu)
  and brand colors (terracotta `#AA5432` / beige `#ECE7A0`, from `Logo_Zayna.pdf`)
- Instagram handle (`zayna_coffee_shop`, from the printed menu's "Follow Us")
- Both menus are real: `src/content/menu-highlights.ts` (Glovo delivery menu,
  transcribed from the live Glovo listing) and `src/content/carte-menu.ts`
  (in-store menu, transcribed from photos of the physical menu). These are
  kept as two separate pages/files on purpose — the Glovo one is meant to
  become the site's own ordering flow later, the carte is what's on the
  table in the café. Don't merge them.

Still placeholder — search the codebase for `TODO` and `PLACEHOLDER` to find
every instance:

- **Photos** — every `.photo-placeholder` block in the page files is a spot
  waiting for a real `<img>`. Drop images in `public/images/` and swap the
  block once you send them over.
- **A few menu photo/item matches are best-guesses** — see the comment block
  at the top of `menu-highlights.ts` for which ones to double check (Bagel
  Kofta, Fondant Dghmira, and the standalone dessert "Scones" has no photo
  of its own yet). The carte has no photos at all yet.
- **Reviews** — `src/content/testimonials.ts` has example quotes matching the
  4.9★ rating, not real customer text. Replace with actual Google reviews
  (with permission) or remove the quote cards.
- **About-page story** — `src/pages/a-propos.astro` has placeholder copy
  about the café's concept; swap in the real story.
- **Social links** — `socials` in `site.config.ts` is empty; add Instagram /
  Facebook / TikTok once available.
- **Contact form** — has no backend yet; point its `action` at a form
  service (Formspree, Web3Forms, Netlify Forms...) before launch.
- **Domain** — `SITE_URL` in `astro.config.mjs` and `identity.siteUrl` in
  `site.config.ts` use a placeholder domain; update both together once a
  real domain is chosen.

## The one file you edit most

`src/config/site.config.ts` — identity, contact info, hours, price range,
amenities, nav. The three content files:

- `src/content/faq.ts` — FAQ page content + FAQPage structured data
- `src/content/testimonials.ts` — reviews page content
- `src/content/menu-highlights.ts` — Glovo/delivery menu (page: `/menu`, nav label "Commander")
- `src/content/carte-menu.ts` — in-store menu (page: `/carte`, nav label "Carte")

## Pages

`/` `/carte` `/menu` `/a-propos` `/avis` `/faq` `/contact` — French (primary,
unprefixed). `/en` and `/ar` currently have a translated homepage only, as a
working example of the i18n routing; the other five pages need translating
per language before those locales are complete.

## Deploy

Any static host works (Netlify, Vercel, Cloudflare Pages, GitHub Pages).
Push `dist/` after `npm run build`, or connect the repo and let the host run
the build command.
