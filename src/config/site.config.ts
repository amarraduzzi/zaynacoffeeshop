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
  // Confirmed by the client (2026-08-27): same number as the phone contact,
  // used as the WhatsApp order number on /menu. Digits only, country code,
  // no + or spaces — this is the exact format wa.me needs.
  whatsappNumber: '212615810680',
  // TODO: no email was visible on the Google listing — add one once available.
  email: null,
  // Plain Google Maps embed (no API key required).
  mapEmbedSrc:
    'https://www.google.com/maps?q=12+Rue+Jabli,+Rabat+10000,+Maroc&output=embed',
  mapLinkHref: 'https://www.google.com/maps?q=12+Rue+Jabli,+Rabat+10000,+Maroc',
};

export const hours = {
  // Confirmed via the printed in-store menu ("Opening hours: 9am - 9pm").
  displayText: 'Tous les jours · 09:00 – 21:00',
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

export const amenitiesEn = ['Outdoor terrace', 'Private room', 'Vegan options'];
export const amenitiesAr = ['تراس خارجي', 'قاعة خاصة', 'خيارات نباتية'];

// Instagram confirmed via the "Follow Us" handle printed on the in-store menu.
// TODO: facebook/tiktok still need confirming.
export const socials = {
  instagram: 'https://www.instagram.com/zayna_coffee_shop',
  facebook: null as string | null,
  tiktok: null as string | null,
};

// Two distinct menus by design (client instruction, 2026-08-27): "Carte" is
// the in-store menu people read while sitting at the café; "Commander" is
// the Glovo-sourced menu, now built as a real add-to-cart + WhatsApp-checkout
// flow directly on this site (see src/cart/*) — NOT a separate project.
// Keep the two menus as separate pages/content files — do not merge.
export const nav = [
  { label: 'Accueil', href: '/' },
  { label: 'Carte', href: '/carte' },
  { label: 'Commander', href: '/menu' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Avis', href: '/avis' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

// Shared with Header.astro and Footer.astro so nav labels translate
// consistently everywhere, now that every page exists in all 3 locales.
export const navLabels: Record<string, Record<'fr' | 'en' | 'ar', string>> = {
  '/': { fr: 'Accueil', en: 'Home', ar: 'الرئيسية' },
  '/carte': { fr: 'Carte', en: 'In-store menu', ar: 'القائمة' },
  '/menu': { fr: 'Commander', en: 'Order online', ar: 'اطلب الآن' },
  '/a-propos': { fr: 'À propos', en: 'About', ar: 'من نحن' },
  '/avis': { fr: 'Avis', en: 'Reviews', ar: 'التقييمات' },
  '/faq': { fr: 'FAQ', en: 'FAQ', ar: 'الأسئلة الشائعة' },
  '/contact': { fr: 'Contact', en: 'Contact', ar: 'اتصل بنا' },
};
