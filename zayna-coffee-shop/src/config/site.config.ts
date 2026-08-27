// ============================================================================
// ZAYNA COFFEE SHOP — site configuration
// ============================================================================
// This is the one file to edit when something about the business changes
// (address, hours, phone, colors...). Everything below marked TODO is a
// placeholder pulled from the Google Business listing on 2026-08-27 — please
// double-check it, especially the opening time (only the closing time, 21:00,
// was visible on the listing) and the social links.
//
// When real photos arrive, drop them in `public/images/` and swap the
// `.photo-placeholder` blocks in the page files for real <img> tags — every
// spot is commented "PHOTO:" so they're easy to find with a project search.
// ============================================================================

export const identity = {
  name: 'Zayna Coffee Shop',
  shortName: 'Zayna',
  tagline: 'Café marocain contemporain au cœur de Rabat',
  // Used in <title> tags and meta descriptions.
  primaryKeyword: 'coffee shop à Rabat',
  description:
    "Zayna Coffee Shop, un café à Rabat noté 4.9/5 par ses clients : terrasse extérieure, salle privée et options véganes, à deux pas du centre-ville.",
  // REPLACE once a real domain exists — must match astro.config.mjs's SITE_URL.
  siteUrl: 'https://zayna-coffeeshop.ma',
};

export const contact = {
  address: {
    street: '12 Rue Jabli',
    postalCode: '10000',
    city: 'Rabat',
    country: 'Maroc',
    full: '12 Rue Jabli, Rabat 10000, Maroc',
  },
  phone: {
    display: '06 15 81 06 80',
    href: 'tel:+212615810680',
  },
  // TODO: no email was visible on the Google listing — add one once available.
  email: null,
  // Plain Google Maps embed (no API key required).
  mapEmbedSrc:
    'https://www.google.com/maps?q=12+Rue+Jabli,+Rabat+10000,+Maroc&output=embed',
  mapLinkHref: 'https://www.google.com/maps?q=12+Rue+Jabli,+Rabat+10000,+Maroc',
};

export const hours = {
  // TODO: only the closing time (21:00) was visible on the Google listing —
  // confirm the opening time and any weekly variation, then adjust the
  // schedule below and the display string on the Contact page.
  displayText: 'Tous les jours · 08:00 – 21:00 (à confirmer)',
  note: 'Les horaires peuvent varier lors des fêtes religieuses (ex. Mawlid an-Nabi).',
};

export const ratings = {
  score: 4.9,
  count: 235,
  source: 'Google',
};

export const priceRange = {
  display: 'MAD 50–100 par personne',
  min: 50,
  max: 100,
  currency: 'MAD',
};

export const amenities = [
  'Terrasse extérieure',
  'Salle privée',
  'Options véganes',
];

// TODO: fill in once the client provides real accounts.
export const socials = {
  instagram: null as string | null,
  facebook: null as string | null,
  tiktok: null as string | null,
};

// The companion WhatsApp order-landing-page engine, if/when Zayna gets one.
// TODO: set the real URL, or remove the "Commander" CTA from Header.astro
// if there is no separate order site.
export const orderSiteUrl: string | null = null;

export const nav = [
  { label: 'Accueil', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Avis', href: '/avis' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];
