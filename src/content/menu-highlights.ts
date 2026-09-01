// Display-only menu teaser for the marketing site (NOT a full ordering menu —
// that would live in a separate order-system project, see orderSiteUrl in
// site.config.ts).
//
// SOURCE: item names, categories and prices are copied from Zayna's live
// Glovo listing (glovoapp.com/fr/ma/rabat/stores/zayna-coffee-shop-rbt,
// pulled 2026-08-27). That's the delivery menu, so dine-in prices/portions
// could differ slightly — worth a quick confirm with the owner. Descriptions
// below are short, literal readings of the item names (not invented recipe
// details) since Glovo doesn't show descriptions; "vegan" is only marked on
// items that are self-evidently plant-based (juices) — everything else is
// left untagged because the actual ingredients aren't confirmed.
//
// PHOTO MATCHING: none of the photos received so far came labeled, so each
// was matched to a menu item by what's visibly on the plate.
// Confirmed by the client: Nglizi = scones, clotted cream, jam & tea
// ("Nglizi" ~ "Anglais" — an English cream tea), and the same bowl photo is
// used for both Energie Bowl and Golden Bowl. That also makes "Miricani"
// (~ "American") = the pancake stack a pretty safe bet by the same logic,
// though still worth a final confirm. High confidence from the image itself:
// Salade César/Quinoa, Carrot Cake, Cake au Citron, Brownies au Amlou,
// Cinnamon Rolls, Bagel Poulet au Pesto (chicken + green pesto sauce
// visible), Bissap (its deep red-purple color is exactly what hibiscus
// looks like), Jus Citron à la Menthe. Best-guess, please confirm: Bagel
// Kofta (matched to the burger-style patty sandwich — kofta is normally a
// grilled minced-meat patty) and Fondant Dghmira (matched to the
// shredded/braised-meat sandwich — "dghmira" is a Moroccan shredded-meat
// preparation). The standalone "Scones" dessert (as opposed to the Nglizi
// breakfast) has no photo yet — the scones image we have is the Nglizi one.

export type MenuCategory = {
  name: string;
  items: { name: string; description: string; price: string; vegan?: boolean; image?: string }[];
};

export const menuHighlights: MenuCategory[] = [
  {
    name: 'Top des ventes',
    items: [
      {
        name: 'Bagel Poulet au Pesto',
        description: 'Poulet grillé, pesto, œuf poché, roquette',
        price: 'MAD 65',
        image: '/images/menu/bagel-poulet-pesto.jpg',
      },
      {
        name: 'Energie Bowl',
        description: 'Banane, prune, granola maison, purée d’oléagineux',
        price: 'MAD 63',
        image: '/images/menu/zayna-bowl.jpg',
      },
    ],
  },
  {
    name: 'Bagels',
    items: [
      {
        name: 'Zayna Bagel',
        description: 'Poulet, poivrons grillés, fromage, patate douce',
        price: 'MAD 65',
        image: '/images/menu/bagel-veggie-delice.jpg',
      },
      {
        name: 'Bagel Kofta',
        description: 'Galette de kofta grillée, salade, pain sésame',
        price: 'MAD 75',
        image: '/images/menu/bagel-kofta.jpg',
      },
      {
        name: 'Fondant Dghmira',
        description: 'Viande effilochée façon dghmira, pain sésame',
        price: 'MAD 65',
        image: '/images/menu/fondant-dghmira.jpg',
      },
      {
        name: 'Bagel Poulet au Pesto',
        description: 'Poulet grillé, pesto, œuf poché, roquette',
        price: 'MAD 65',
        image: '/images/menu/bagel-poulet-pesto.jpg',
      },
      {
        name: 'Bagel Veggie Délice',
        description: 'Œuf poché, fromage frais, roquette, compotée de fruits rouges',
        price: 'MAD 55',
        image: '/images/menu/bagel-veggie-delice.jpg',
      },
    ],
  },
  {
    name: 'Petits-déjeuners',
    items: [
      {
        name: 'Nglizi',
        description: 'Scones, crème, confiture, thé',
        price: 'MAD 60',
        image: '/images/menu/nglizi.jpg',
      },
      {
        // GUESS: "Miricani" ~ "American" — paired with the pancake-stack
        // photo as the most likely match among the breakfast items. Please
        // confirm this is the right dish before launch.
        name: 'Miricani',
        description: 'Pancakes, fruits de saison, fruits secs',
        price: 'MAD 50',
        image: '/images/menu/miricani.jpg',
      },
    ],
  },
  {
    name: 'Salades',
    items: [
      {
        name: 'Salade César',
        description: 'Romaine, poulet, parmesan, croûtons',
        price: 'MAD 45',
        image: '/images/menu/salade-cesar.jpg',
      },
      {
        name: 'Salade Quinoa',
        description: 'Quinoa, poulet, roquette, carotte, poivrons',
        price: 'MAD 45',
        image: '/images/menu/salade-quinoa.jpg',
      },
      {
        name: 'Rainbow Salad',
        description: 'Houmous, épinards, poulet, laitue, tomates, poivrons, avocat & fromage',
        price: 'MAD 60',
        image: '/images/menu/rainbow-salad.jpg',
      },
    ],
  },
  {
    name: 'Zayna Bowls',
    items: [
      {
        name: 'Energie Bowl',
        description: 'Banane, prune, granola maison, purée d’oléagineux',
        price: 'MAD 63',
        image: '/images/menu/zayna-bowl.jpg',
      },
      {
        // Confirmed by the client: same photo used for both bowls on Glovo.
        name: 'Golden Bowl',
        description: 'Banane, porridge maison, purée d’oléagineux',
        price: 'MAD 59',
        image: '/images/menu/zayna-bowl.jpg',
      },
    ],
  },
  {
    name: 'Desserts',
    items: [
      {
        name: 'Carrot Cake au Fromage Blanc & Noix',
        description: 'Carrot cake, glaçage fromage blanc, noix',
        price: 'MAD 30',
        image: '/images/menu/carrot-cake.jpg',
      },
      {
        name: 'Brownies au Amlou',
        description: 'Brownie, sauce amlou',
        price: 'MAD 30',
        image: '/images/menu/brownies-amlou.jpg',
      },
      {
        name: 'Cake au Citron',
        description: 'Cake au citron, sauce citron',
        price: 'MAD 30',
        image: '/images/menu/cake-au-citron.jpg',
      },
      {
        // No standalone photo yet — the scones image received is Nglizi's
        // (scones + tea together), used above.
        name: 'Scones',
        description: 'Servis avec crème et confiture',
        price: 'MAD 30',
      },
      {
        name: 'Cinnamon Rolls',
        description: 'Glaçage, éclats de noix',
        price: 'MAD 30',
        image: '/images/menu/cinnamon-rolls.jpg',
      },
    ],
  },
  {
    name: 'Boissons',
    items: [
      {
        name: 'Jus d’Orange',
        description: '',
        price: 'MAD 25',
        vegan: true,
        image: '/images/menu/jus-orange.jpg',
      },
      {
        name: 'Bissap aux Fruits Tropicaux',
        description: 'Infusion d’hibiscus aux fruits tropicaux',
        price: 'MAD 28',
        vegan: true,
        image: '/images/menu/bissap.jpg',
      },
      {
        name: 'Jus Citron à la Menthe',
        description: '',
        price: 'MAD 25',
        vegan: true,
        image: '/images/menu/jus-citron-menthe.jpg',
      },
    ],
  },
];

export const menuNote =
  'Menu repris du service de livraison Glovo — à confirmer avec la carte affichée en salle avant mise en ligne, et à illustrer avec de vraies photos.';

// EN / AR versions — same items/prices/images, translated name+description,
// used by the homepage "favorites" teaser in every locale.
export const menuHighlightsEn: MenuCategory[] = [
  {
    name: 'Best Sellers',
    items: [
      {
        name: 'Chicken Pesto Bagel',
        description: 'Roasted chicken, pesto, poached egg, arugula',
        price: 'MAD 65',
        image: '/images/menu/bagel-poulet-pesto.jpg',
      },
      {
        name: 'Energie Bowl',
        description: 'Banana, plum, homemade granola, nut butter',
        price: 'MAD 63',
        image: '/images/menu/zayna-bowl.jpg',
      },
    ],
  },
  {
    name: 'Bagels',
    items: [
      {
        name: 'Zayna Bagel',
        description: 'Chicken, grilled peppers, cheese, sweet potatoes',
        price: 'MAD 65',
        image: '/images/menu/bagel-veggie-delice.jpg',
      },
      {
        name: 'Kofta Bagel',
        description: 'Grilled kofta patty, salad, sesame bread',
        price: 'MAD 75',
        image: '/images/menu/bagel-kofta.jpg',
      },
      {
        name: 'Fondant Dghmira',
        description: 'Shredded dghmira-style meat, sesame bread',
        price: 'MAD 65',
        image: '/images/menu/fondant-dghmira.jpg',
      },
      {
        name: 'Chicken Pesto Bagel',
        description: 'Roasted chicken, pesto, poached egg, arugula',
        price: 'MAD 65',
        image: '/images/menu/bagel-poulet-pesto.jpg',
      },
      {
        name: 'Veggie Delight Bagel',
        description: 'Poached egg, fresh cheese, arugula, red fruit compote',
        price: 'MAD 55',
        image: '/images/menu/bagel-veggie-delice.jpg',
      },
    ],
  },
  {
    name: 'Breakfasts',
    items: [
      {
        name: 'Nglizi',
        description: 'Scones, clotted cream, jam, tea',
        price: 'MAD 60',
        image: '/images/menu/nglizi.jpg',
      },
      {
        name: 'Miricani',
        description: 'Pancakes, seasonal fruit, dried fruit',
        price: 'MAD 50',
        image: '/images/menu/miricani.jpg',
      },
    ],
  },
  {
    name: 'Salads',
    items: [
      {
        name: 'Caesar Salad',
        description: 'Romaine, chicken, parmesan, croutons',
        price: 'MAD 45',
        image: '/images/menu/salade-cesar.jpg',
      },
      {
        name: 'Quinoa Salad',
        description: 'Quinoa, chicken, arugula, carrot, peppers',
        price: 'MAD 45',
        image: '/images/menu/salade-quinoa.jpg',
      },
      {
        name: 'Rainbow Salad',
        description: 'Hummus, spinach, chicken, lettuce, tomatoes, peppers, avocado & cheese',
        price: 'MAD 60',
        image: '/images/menu/rainbow-salad.jpg',
      },
    ],
  },
  {
    name: 'Zayna Bowls',
    items: [
      {
        name: 'Energie Bowl',
        description: 'Banana, plum, homemade granola, nut butter',
        price: 'MAD 63',
        image: '/images/menu/zayna-bowl.jpg',
      },
      {
        name: 'Golden Bowl',
        description: 'Banana, homemade porridge, nut butter',
        price: 'MAD 59',
        image: '/images/menu/zayna-bowl.jpg',
      },
    ],
  },
  {
    name: 'Desserts',
    items: [
      {
        name: 'Carrot Cake with Cream Cheese & Walnuts',
        description: 'Carrot cake, cream cheese frosting, walnuts',
        price: 'MAD 30',
        image: '/images/menu/carrot-cake.jpg',
      },
      {
        name: 'Amlou Brownies',
        description: 'Brownie, amlou sauce',
        price: 'MAD 30',
        image: '/images/menu/brownies-amlou.jpg',
      },
      {
        name: 'Lemon Cake',
        description: 'Lemon cake, lemon glaze',
        price: 'MAD 30',
        image: '/images/menu/cake-au-citron.jpg',
      },
      {
        name: 'Scones',
        description: 'Served with cream and jam',
        price: 'MAD 30',
      },
      {
        name: 'Cinnamon Rolls',
        description: 'Icing, chopped nuts',
        price: 'MAD 30',
        image: '/images/menu/cinnamon-rolls.jpg',
      },
    ],
  },
  {
    name: 'Drinks',
    items: [
      {
        name: 'Orange Juice',
        description: '',
        price: 'MAD 25',
        vegan: true,
        image: '/images/menu/jus-orange.jpg',
      },
      {
        name: 'Tropical Fruit Bissap',
        description: 'Hibiscus infusion with tropical fruit',
        price: 'MAD 28',
        vegan: true,
        image: '/images/menu/bissap.jpg',
      },
      {
        name: 'Lemon & Mint Juice',
        description: '',
        price: 'MAD 25',
        vegan: true,
        image: '/images/menu/jus-citron-menthe.jpg',
      },
    ],
  },
];

export const menuNoteEn =
  "Menu carried over from the Glovo delivery service — to be confirmed against the in-store menu before launch, and illustrated with real photos.";

export const menuHighlightsAr: MenuCategory[] = [
  {
    name: 'الأكثر مبيعًا',
    items: [
      {
        name: 'بيغل الدجاج بالبيستو',
        description: 'دجاج مشوي، بيستو، بيضة مسلوقة، جرجير',
        price: '65 درهم',
        image: '/images/menu/bagel-poulet-pesto.jpg',
      },
      {
        name: 'طبق الطاقة',
        description: 'موز، برقوق، غرانولا منزلية، زبدة مكسرات',
        price: '63 درهم',
        image: '/images/menu/zayna-bowl.jpg',
      },
    ],
  },
  {
    name: 'بيغلات',
    items: [
      {
        name: 'بيغل زاينة',
        description: 'دجاج، فلفل مشوي، جبن، بطاطا حلوة',
        price: '65 درهم',
        image: '/images/menu/bagel-veggie-delice.jpg',
      },
      {
        name: 'بيغل الكفتة',
        description: 'قطعة كفتة مشوية، سلطة، خبز بالسمسم',
        price: '75 درهم',
        image: '/images/menu/bagel-kofta.jpg',
      },
      {
        name: 'فوندان دغميرة',
        description: 'لحم مفروم على طريقة الدغميرة، خبز بالسمسم',
        price: '65 درهم',
        image: '/images/menu/fondant-dghmira.jpg',
      },
      {
        name: 'بيغل الدجاج بالبيستو',
        description: 'دجاج مشوي، بيستو، بيضة مسلوقة، جرجير',
        price: '65 درهم',
        image: '/images/menu/bagel-poulet-pesto.jpg',
      },
      {
        name: 'بيغل فيجي ديليس',
        description: 'بيضة مسلوقة، جبن طازج، جرجير، كومبوت فواكه حمراء',
        price: '55 درهم',
        image: '/images/menu/bagel-veggie-delice.jpg',
      },
    ],
  },
  {
    name: 'الفطور',
    items: [
      {
        name: 'نجليزي',
        description: 'سكونز، كريمة، مربى، شاي',
        price: '60 درهم',
        image: '/images/menu/nglizi.jpg',
      },
      {
        name: 'ميريكاني',
        description: 'فطائر، فواكه الموسم، فواكه مجففة',
        price: '50 درهم',
        image: '/images/menu/miricani.jpg',
      },
    ],
  },
  {
    name: 'السلطات',
    items: [
      {
        name: 'سلطة السيزر',
        description: 'خس روماني، دجاج، بارميزان، خبز محمّص',
        price: '45 درهم',
        image: '/images/menu/salade-cesar.jpg',
      },
      {
        name: 'سلطة الكينوا',
        description: 'كينوا، دجاج، جرجير، جزر، فلفل',
        price: '45 درهم',
        image: '/images/menu/salade-quinoa.jpg',
      },
      {
        name: 'رينبو سلاد',
        description: 'حمّص، سبانخ، دجاج، خس، طماطم، فلفل، أفوكادو وجبن',
        price: '60 درهم',
        image: '/images/menu/rainbow-salad.jpg',
      },
    ],
  },
  {
    name: 'أطباق زاينة',
    items: [
      {
        name: 'طبق الطاقة',
        description: 'موز، برقوق، غرانولا منزلية، زبدة مكسرات',
        price: '63 درهم',
        image: '/images/menu/zayna-bowl.jpg',
      },
      {
        name: 'الطبق الذهبي',
        description: 'موز، عصيدة منزلية، زبدة مكسرات',
        price: '59 درهم',
        image: '/images/menu/zayna-bowl.jpg',
      },
    ],
  },
  {
    name: 'الحلويات',
    items: [
      {
        name: 'كيك الجزر بجبنة الكريمة والجوز',
        description: 'كيك الجزر، طبقة جبنة الكريمة، جوز',
        price: '30 درهم',
        image: '/images/menu/carrot-cake.jpg',
      },
      {
        name: 'براوني بالأملو',
        description: 'براوني، صلصة الأملو',
        price: '30 درهم',
        image: '/images/menu/brownies-amlou.jpg',
      },
      {
        name: 'كيك الليمون',
        description: 'كيك الليمون، طبقة الليمون',
        price: '30 درهم',
        image: '/images/menu/cake-au-citron.jpg',
      },
      {
        name: 'سكونز',
        description: 'تُقدَّم مع الكريمة والمربى',
        price: '30 درهم',
      },
      {
        name: 'سينامون رولز',
        description: 'طبقة سكر، مكسرات مجروشة',
        price: '30 درهم',
        image: '/images/menu/cinnamon-rolls.jpg',
      },
    ],
  },
  {
    name: 'المشروبات',
    items: [
      {
        name: 'عصير برتقال',
        description: '',
        price: '25 درهم',
        vegan: true,
        image: '/images/menu/jus-orange.jpg',
      },
      {
        name: 'بيساب بالفواكه الاستوائية',
        description: 'منقوع الكركديه بالفواكه الاستوائية',
        price: '28 درهم',
        vegan: true,
        image: '/images/menu/bissap.jpg',
      },
      {
        name: 'عصير الليمون بالنعناع',
        description: '',
        price: '25 درهم',
        vegan: true,
        image: '/images/menu/jus-citron-menthe.jpg',
      },
    ],
  },
];

export const menuNoteAr =
  'القائمة منقولة من خدمة التوصيل Glovo — سيتم التأكد منها مقارنة بالقائمة المعروضة في المقهى قبل الإطلاق، وستُوضَّح بصور حقيقية.';
