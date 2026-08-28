// "Popular at Zayna" homepage photo strip — real product photos supplied by
// the owner (2026-08-28), replacing the old standalone À propos page per her
// instruction: no page about herself/the business, more of her own products
// front and center on the site instead.

export type PopularItem = { name: string; image: string };

export const popularProducts: PopularItem[] = [
  { name: 'Cake aux fruits rouges', image: '/images/populaire/cake-cerises.jpg' },
  { name: 'Carrot Cake', image: '/images/populaire/carrot-cake.jpg' },
  { name: 'Petit-déjeuner Zayna', image: '/images/populaire/petit-dejeuner.jpg' },
  { name: 'Œufs façon Shakshuka', image: '/images/populaire/shakshuka.jpg' },
  { name: 'Pâtisserie à la confiture', image: '/images/populaire/pastry-confiture.jpg' },
  { name: 'Smoothie maison', image: '/images/populaire/smoothie.jpg' },
  { name: 'Pain Perdu Glacé', image: '/images/populaire/pain-perdu.jpg' },
  { name: 'Café & Scones', image: '/images/populaire/cafe-scones.jpg' },
  { name: 'Salade Bowl', image: '/images/populaire/salade-bowl.jpg' },
];

export const popularProductsEn: PopularItem[] = [
  { name: 'Mixed berry cake', image: '/images/populaire/cake-cerises.jpg' },
  { name: 'Carrot Cake', image: '/images/populaire/carrot-cake.jpg' },
  { name: 'Zayna breakfast', image: '/images/populaire/petit-dejeuner.jpg' },
  { name: 'Shakshuka-style eggs', image: '/images/populaire/shakshuka.jpg' },
  { name: 'Jam pastry', image: '/images/populaire/pastry-confiture.jpg' },
  { name: 'House smoothie', image: '/images/populaire/smoothie.jpg' },
  { name: 'French Toast & Ice Cream', image: '/images/populaire/pain-perdu.jpg' },
  { name: 'Coffee & Scones', image: '/images/populaire/cafe-scones.jpg' },
  { name: 'Salad Bowl', image: '/images/populaire/salade-bowl.jpg' },
];

export const popularProductsAr: PopularItem[] = [
  { name: 'كيك التوت', image: '/images/populaire/cake-cerises.jpg' },
  { name: 'كيك الجزر', image: '/images/populaire/carrot-cake.jpg' },
  { name: 'فطور زاينة', image: '/images/populaire/petit-dejeuner.jpg' },
  { name: 'بيض على طريقة الشكشوكة', image: '/images/populaire/shakshuka.jpg' },
  { name: 'معجنات بالمربى', image: '/images/populaire/pastry-confiture.jpg' },
  { name: 'سموذي منزلي', image: '/images/populaire/smoothie.jpg' },
  { name: 'باين بيردو مع الآيس كريم', image: '/images/populaire/pain-perdu.jpg' },
  { name: 'قهوة مع سكونز', image: '/images/populaire/cafe-scones.jpg' },
  { name: 'سلطة بول', image: '/images/populaire/salade-bowl.jpg' },
];
