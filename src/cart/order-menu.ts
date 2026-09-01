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

export type Locale = 'fr' | 'en' | 'ar';

export const categories: MenuCategory[] = [
  { id: 'bagels', label: 'Bagels' },
  { id: 'petits-dejeuners', label: 'Petits-déjeuners' },
  { id: 'salades', label: 'Salades' },
  { id: 'bowls', label: 'Zayna Bowls' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'boissons', label: 'Boissons' },
];

export const categoriesEn: MenuCategory[] = [
  { id: 'bagels', label: 'Bagels' },
  { id: 'petits-dejeuners', label: 'Breakfasts' },
  { id: 'salades', label: 'Salads' },
  { id: 'bowls', label: 'Zayna Bowls' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'boissons', label: 'Drinks' },
];

export const categoriesAr: MenuCategory[] = [
  { id: 'bagels', label: 'بيغلات' },
  { id: 'petits-dejeuners', label: 'الفطور' },
  { id: 'salades', label: 'السلطات' },
  { id: 'bowls', label: 'أطباق زاينة' },
  { id: 'desserts', label: 'الحلويات' },
  { id: 'boissons', label: 'المشروبات' },
];

export function getCategories(locale: Locale): MenuCategory[] {
  if (locale === 'en') return categoriesEn;
  if (locale === 'ar') return categoriesAr;
  return categories;
}

export function getMenuItems(locale: Locale): MenuItem[] {
  if (locale === 'en') return menuItemsEn;
  if (locale === 'ar') return menuItemsAr;
  return menuItems;
}

export const menuItems: MenuItem[] = [
  {
    id: 'zayna-bagel',
    categoryId: 'bagels',
    name: 'Zayna Bagel',
    description: 'Poulet, poivrons grillés, fromage, patate douce',
    priceMAD: 65,
    image: '/images/menu/bagel-veggie-delice.jpg',
  },
  {
    id: 'bagel-poulet-pesto',
    categoryId: 'bagels',
    name: 'Bagel Poulet au Pesto',
    description: 'Poulet grillé, pesto, œuf poché, roquette',
    priceMAD: 65,
    image: '/images/menu/bagel-poulet-pesto.jpg',
    tags: ['Populaire'],
  },
  {
    id: 'bagel-kofta',
    categoryId: 'bagels',
    name: 'Bagel Kofta',
    description: 'Galette de kofta grillée, salade, pain sésame',
    priceMAD: 75,
    image: '/images/menu/bagel-kofta.jpg',
  },
  {
    id: 'fondant-dghmira',
    categoryId: 'bagels',
    name: 'Fondant Dghmira',
    description: 'Viande effilochée façon dghmira, pain sésame',
    priceMAD: 65,
    image: '/images/menu/fondant-dghmira.jpg',
  },
  {
    id: 'bagel-veggie-delice',
    categoryId: 'bagels',
    name: 'Bagel Veggie Délice',
    description: 'Œuf poché, fromage frais, roquette, compotée de fruits rouges',
    priceMAD: 55,
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
    priceMAD: 45,
    image: '/images/menu/salade-cesar.jpg',
  },
  {
    id: 'salade-quinoa',
    categoryId: 'salades',
    name: 'Salade Quinoa',
    description: 'Quinoa, poulet, roquette, carotte, poivrons',
    priceMAD: 45,
    image: '/images/menu/salade-quinoa.jpg',
  },
  {
    id: 'rainbow-salad',
    categoryId: 'salades',
    name: 'Rainbow Salad',
    description: 'Houmous, épinards, poulet, laitue, tomates, poivrons, avocat & fromage',
    priceMAD: 60,
    image: '/images/menu/rainbow-salad.jpg',
  },
  {
    id: 'energie-bowl',
    categoryId: 'bowls',
    name: 'Energie Bowl',
    description: 'Banane, prune, granola maison, purée d’oléagineux',
    priceMAD: 63,
    image: '/images/menu/zayna-bowl.jpg',
    tags: ['Populaire'],
  },
  {
    id: 'golden-bowl',
    categoryId: 'bowls',
    name: 'Golden Bowl',
    description: 'Banane, porridge maison, purée d’oléagineux',
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
    priceMAD: 25,
    vegan: true,
    image: '/images/menu/jus-orange.jpg',
  },
  {
    id: 'bissap',
    categoryId: 'boissons',
    name: 'Bissap aux Fruits Tropicaux',
    description: 'Infusion d’hibiscus aux fruits tropicaux',
    priceMAD: 28,
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

export const menuItemsEn: MenuItem[] = [
  { id: 'zayna-bagel', categoryId: 'bagels', name: 'Zayna Bagel', description: 'Chicken, grilled peppers, cheese, sweet potatoes', priceMAD: 65, image: '/images/menu/bagel-veggie-delice.jpg' },
  { id: 'bagel-poulet-pesto', categoryId: 'bagels', name: 'Chicken Pesto Bagel', description: 'Roasted chicken, pesto, poached egg, arugula', priceMAD: 65, image: '/images/menu/bagel-poulet-pesto.jpg', tags: ['Popular'] },
  { id: 'bagel-kofta', categoryId: 'bagels', name: 'Kofta Bagel', description: 'Grilled kofta patty, salad, sesame bread', priceMAD: 75, image: '/images/menu/bagel-kofta.jpg' },
  { id: 'fondant-dghmira', categoryId: 'bagels', name: 'Fondant Dghmira', description: 'Shredded dghmira-style meat, sesame bread', priceMAD: 65, image: '/images/menu/fondant-dghmira.jpg' },
  { id: 'bagel-veggie-delice', categoryId: 'bagels', name: 'Veggie Delight Bagel', description: 'Poached egg, fresh cheese, arugula, red fruit compote', priceMAD: 55, image: '/images/menu/bagel-veggie-delice.jpg' },
  { id: 'nglizi', categoryId: 'petits-dejeuners', name: 'Nglizi', description: 'Scones, clotted cream, jam, tea', priceMAD: 60, image: '/images/menu/nglizi.jpg' },
  { id: 'miricani', categoryId: 'petits-dejeuners', name: 'Miricani', description: 'Pancakes, seasonal fruit, dried fruit', priceMAD: 50, image: '/images/menu/miricani.jpg' },
  { id: 'salade-cesar', categoryId: 'salades', name: 'Caesar Salad', description: 'Romaine, chicken, parmesan, croutons', priceMAD: 45, image: '/images/menu/salade-cesar.jpg' },
  { id: 'salade-quinoa', categoryId: 'salades', name: 'Quinoa Salad', description: 'Quinoa, chicken, arugula, carrot, peppers', priceMAD: 45, image: '/images/menu/salade-quinoa.jpg' },
  { id: 'rainbow-salad', categoryId: 'salades', name: 'Rainbow Salad', description: 'Hummus, spinach, chicken, lettuce, tomatoes, peppers, avocado & cheese', priceMAD: 60, image: '/images/menu/rainbow-salad.jpg' },
  { id: 'energie-bowl', categoryId: 'bowls', name: 'Energie Bowl', description: 'Banana, plum, homemade granola, nut butter', priceMAD: 63, image: '/images/menu/zayna-bowl.jpg', tags: ['Popular'] },
  { id: 'golden-bowl', categoryId: 'bowls', name: 'Golden Bowl', description: 'Banana, homemade porridge, nut butter', priceMAD: 59, image: '/images/menu/zayna-bowl.jpg' },
  { id: 'carrot-cake', categoryId: 'desserts', name: 'Carrot Cake with Cream Cheese & Walnuts', description: 'Carrot cake, cream cheese frosting, walnuts', priceMAD: 30, image: '/images/menu/carrot-cake.jpg' },
  { id: 'brownies-amlou', categoryId: 'desserts', name: 'Amlou Brownies', description: 'Brownie, amlou sauce', priceMAD: 30, image: '/images/menu/brownies-amlou.jpg' },
  { id: 'cake-au-citron', categoryId: 'desserts', name: 'Lemon Cake', description: 'Lemon cake, lemon glaze', priceMAD: 30, image: '/images/menu/cake-au-citron.jpg' },
  { id: 'scones', categoryId: 'desserts', name: 'Scones', description: 'Served with cream and jam', priceMAD: 30 },
  { id: 'cinnamon-rolls', categoryId: 'desserts', name: 'Cinnamon Rolls', description: 'Icing, chopped nuts', priceMAD: 30, image: '/images/menu/cinnamon-rolls.jpg' },
  { id: 'jus-orange', categoryId: 'boissons', name: 'Orange Juice', description: '', priceMAD: 25, vegan: true, image: '/images/menu/jus-orange.jpg' },
  { id: 'bissap', categoryId: 'boissons', name: 'Tropical Fruit Bissap', description: 'Hibiscus infusion with tropical fruit', priceMAD: 28, vegan: true, image: '/images/menu/bissap.jpg' },
  { id: 'jus-citron-menthe', categoryId: 'boissons', name: 'Lemon & Mint Juice', description: '', priceMAD: 25, vegan: true, image: '/images/menu/jus-citron-menthe.jpg' },
];

export const menuItemsAr: MenuItem[] = [
  { id: 'zayna-bagel', categoryId: 'bagels', name: 'بيغل زاينة', description: 'دجاج، فلفل مشوي، جبن، بطاطا حلوة', priceMAD: 65, image: '/images/menu/bagel-veggie-delice.jpg' },
  { id: 'bagel-poulet-pesto', categoryId: 'bagels', name: 'بيغل الدجاج بالبيستو', description: 'دجاج مشوي، بيستو، بيضة مسلوقة، جرجير', priceMAD: 65, image: '/images/menu/bagel-poulet-pesto.jpg', tags: ['الأكثر طلبًا'] },
  { id: 'bagel-kofta', categoryId: 'bagels', name: 'بيغل الكفتة', description: 'قطعة كفتة مشوية، سلطة، خبز بالسمسم', priceMAD: 75, image: '/images/menu/bagel-kofta.jpg' },
  { id: 'fondant-dghmira', categoryId: 'bagels', name: 'فوندان دغميرة', description: 'لحم مفروم على طريقة الدغميرة، خبز بالسمسم', priceMAD: 65, image: '/images/menu/fondant-dghmira.jpg' },
  { id: 'bagel-veggie-delice', categoryId: 'bagels', name: 'بيغل فيجي ديليس', description: 'بيضة مسلوقة، جبن طازج، جرجير، كومبوت فواكه حمراء', priceMAD: 55, image: '/images/menu/bagel-veggie-delice.jpg' },
  { id: 'nglizi', categoryId: 'petits-dejeuners', name: 'نجليزي', description: 'سكونز، كريمة، مربى، شاي', priceMAD: 60, image: '/images/menu/nglizi.jpg' },
  { id: 'miricani', categoryId: 'petits-dejeuners', name: 'ميريكاني', description: 'فطائر، فواكه الموسم، فواكه مجففة', priceMAD: 50, image: '/images/menu/miricani.jpg' },
  { id: 'salade-cesar', categoryId: 'salades', name: 'سلطة السيزر', description: 'خس روماني، دجاج، بارميزان، خبز محمّص', priceMAD: 45, image: '/images/menu/salade-cesar.jpg' },
  { id: 'salade-quinoa', categoryId: 'salades', name: 'سلطة الكينوا', description: 'كينوا، دجاج، جرجير، جزر، فلفل', priceMAD: 45, image: '/images/menu/salade-quinoa.jpg' },
  { id: 'rainbow-salad', categoryId: 'salades', name: 'رينبو سلاد', description: 'حمّص، سبانخ، دجاج، خس، طماطم، فلفل، أفوكادو وجبن', priceMAD: 60, image: '/images/menu/rainbow-salad.jpg' },
  { id: 'energie-bowl', categoryId: 'bowls', name: 'طبق الطاقة', description: 'موز، برقوق، غرانولا منزلية، زبدة مكسرات', priceMAD: 63, image: '/images/menu/zayna-bowl.jpg', tags: ['الأكثر طلبًا'] },
  { id: 'golden-bowl', categoryId: 'bowls', name: 'الطبق الذهبي', description: 'موز، عصيدة منزلية، زبدة مكسرات', priceMAD: 59, image: '/images/menu/zayna-bowl.jpg' },
  { id: 'carrot-cake', categoryId: 'desserts', name: 'كيك الجزر بجبنة الكريمة والجوز', description: 'كيك الجزر، طبقة جبنة الكريمة، جوز', priceMAD: 30, image: '/images/menu/carrot-cake.jpg' },
  { id: 'brownies-amlou', categoryId: 'desserts', name: 'براوني بالأملو', description: 'براوني، صلصة الأملو', priceMAD: 30, image: '/images/menu/brownies-amlou.jpg' },
  { id: 'cake-au-citron', categoryId: 'desserts', name: 'كيك الليمون', description: 'كيك الليمون، طبقة الليمون', priceMAD: 30, image: '/images/menu/cake-au-citron.jpg' },
  { id: 'scones', categoryId: 'desserts', name: 'سكونز', description: 'تُقدَّم مع الكريمة والمربى', priceMAD: 30 },
  { id: 'cinnamon-rolls', categoryId: 'desserts', name: 'سينامون رولز', description: 'طبقة سكر، مكسرات مجروشة', priceMAD: 30, image: '/images/menu/cinnamon-rolls.jpg' },
  { id: 'jus-orange', categoryId: 'boissons', name: 'عصير برتقال', description: '', priceMAD: 25, vegan: true, image: '/images/menu/jus-orange.jpg' },
  { id: 'bissap', categoryId: 'boissons', name: 'بيساب بالفواكه الاستوائية', description: 'منقوع الكركديه بالفواكه الاستوائية', priceMAD: 28, vegan: true, image: '/images/menu/bissap.jpg' },
  { id: 'jus-citron-menthe', categoryId: 'boissons', name: 'عصير الليمون بالنعناع', description: '', priceMAD: 25, vegan: true, image: '/images/menu/jus-citron-menthe.jpg' },
];
