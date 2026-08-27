// The cart-able version of Zayna's Glovo/delivery menu. Same real items,
// prices and photos as src/content/menu-highlights.ts (the display list
// used elsewhere) — duplicated here rather than shared because the cart
// needs a numeric priceMAD and a stable id per item to add/remove/count
// lines, which the display schema doesn't have. If a price or item changes,
// update both files (search the item name in menu-highlights.ts too).
//
// "Top des ventes" from Glovo isn't a separate category here — duplicating
// items into a second category doesn't make sense for a cart (the same
// item would need two ids). Instead, the two bestsellers get a "Populaire"
// tag, shown as a badge on their card.
import type { MenuCategory, MenuItem } from './types';

export const categories: MenuCategory[] = [
  { id: 'bagels', label: 'Bagels' },
  { id: 'petits-dejeuners', label: 'Petits-déjeuners' },
  { id: 'salades', label: 'Salades' },
  { id: 'bowls', label: 'Zayna Bowls' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'boissons', label: 'Boissons' },
];

export const menuItems: MenuItem[] = [
  {
    id: 'bagel-poulet-pesto',
    categoryId: 'bagels',
    name: 'Bagel Poulet au Pesto',
    description: 'Poulet grillé, pesto, œuf poché, roquette',
    priceMAD: 75,
    image: '/images/menu/bagel-poulet-pesto.jpg',
    tags: ['Populaire'],
  },
  {
    id: 'bagel-kofta',
    categoryId: 'bagels',
    name: 'Bagel Kofta',
    description: 'Galette de kofta grillée, salade, pain sésame',
    priceMAD: 83,
    image: '/images/menu/bagel-kofta.jpg',
  },
  {
    id: 'fondant-dghmira',
    categoryId: 'bagels',
    name: 'Fondant Dghmira',
    description: 'Viande effilochée façon dghmira, pain sésame',
    priceMAD: 75,
    image: '/images/menu/fondant-dghmira.jpg',
  },
  {
    id: 'bagel-veggie-delice',
    categoryId: 'bagels',
    name: 'Bagel Veggie Délice',
    description: 'Œuf poché, fromage frais, roquette, compotée de fruits rouges',
    priceMAD: 68,
    image: '/images/menu/bagel-veggie-delice.jpg',
  },
  {
    id: 'nglizi',
    categoryId: 'petits-dejeuners',
    name: 'Nglizi',
    description: 'Scones, crème, confiture, thé',
    priceMAD: 60,
    image: '/images/menu/nglizi.jpg',
  },
  {
    id: 'miricani',
    categoryId: 'petits-dejeuners',
    name: 'Miricani',
    description: 'Pancakes, fruits de saison, fruits secs',
    priceMAD: 50,
    image: '/images/menu/miricani.jpg',
  },
  {
    id: 'salade-cesar',
    categoryId: 'salades',
    name: 'Salade César',
    description: 'Romaine, poulet, parmesan, croûtons',
    priceMAD: 55,
    image: '/images/menu/salade-cesar.jpg',
  },
  {
    id: 'salade-quinoa',
    categoryId: 'salades',
    name: 'Salade Quinoa',
    description: 'Quinoa, poulet, roquette, carotte, poivrons',
    priceMAD: 55,
    image: '/images/menu/salade-quinoa.jpg',
  },
  {
    id: 'energie-bowl',
    categoryId: 'bowls',
    name: 'Energie Bowl',
    description: 'Banane, prune, granola maison, purée d’oléagineux',
    priceMAD: 65,
    image: '/images/menu/zayna-bowl.jpg',
    tags: ['Populaire'],
  },
  {
    id: 'golden-bowl',
    categoryId: 'bowls',
    name: 'Golden Bowl',
    description: 'Banane, prune, granola maison, purée d’oléagineux',
    priceMAD: 59,
    image: '/images/menu/zayna-bowl.jpg',
  },
  {
    id: 'carrot-cake',
    categoryId: 'desserts',
    name: 'Carrot Cake au Fromage Blanc & Noix',
    description: 'Carrot cake, glaçage fromage blanc, noix',
    priceMAD: 30,
    image: '/images/menu/carrot-cake.jpg',
  },
  {
    id: 'brownies-amlou',
    categoryId: 'desserts',
    name: 'Brownies au Amlou',
    description: 'Brownie, sauce amlou',
    priceMAD: 30,
    image: '/images/menu/brownies-amlou.jpg',
  },
  {
    id: 'cake-au-citron',
    categoryId: 'desserts',
    name: 'Cake au Citron',
    description: 'Cake au citron, sauce citron',
    priceMAD: 30,
    image: '/images/menu/cake-au-citron.jpg',
  },
  {
    id: 'scones',
    categoryId: 'desserts',
    name: 'Scones',
    description: 'Servis avec crème et confiture',
    priceMAD: 30,
    // No standalone photo yet — see menu-highlights.ts's note.
  },
  {
    id: 'cinnamon-rolls',
    categoryId: 'desserts',
    name: 'Cinnamon Rolls',
    description: 'Glaçage, éclats de noix',
    priceMAD: 30,
    image: '/images/menu/cinnamon-rolls.jpg',
  },
  {
    id: 'jus-orange',
    categoryId: 'boissons',
    name: 'Jus d’Orange',
    description: '',
    priceMAD: 30,
    vegan: true,
    image: '/images/menu/jus-orange.jpg',
  },
  {
    id: 'bissap',
    categoryId: 'boissons',
    name: 'Bissap aux Fruits Tropicaux',
    description: 'Infusion d’hibiscus aux fruits tropicaux',
    priceMAD: 30,
    vegan: true,
    image: '/images/menu/bissap.jpg',
  },
  {
    id: 'jus-citron-menthe',
    categoryId: 'boissons',
    name: 'Jus Citron à la Menthe',
    description: '',
    priceMAD: 25,
    vegan: true,
    image: '/images/menu/jus-citron-menthe.jpg',
  },
];
