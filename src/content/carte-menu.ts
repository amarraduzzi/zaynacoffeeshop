// THE IN-STORE MENU ("la carte") — what's printed and handed to people sitting
// at Zayna, as opposed to menu-highlights.ts which is the Glovo delivery
// menu (destined to become the site's own ordering flow later, per the
// client — kept intentionally separate, do not merge the two).
//
// SOURCE: transcribed directly from photos of the physical menu (2 pages)
// provided by the client, 2026-08-27. Prices are in DH (dirham) as printed
// on the menu itself — note these differ from the Glovo/delivery prices for
// the same-named dishes (e.g. Bagel Kofta is 83 MAD on Glovo, 80 DH here;
// Salade César is 55 MAD on Glovo, 45 DH here) — that's expected, dine-in
// and delivery pricing are often set independently, not a transcription
// error.

export type CarteItem = { name: string; description: string; price: string; image?: string };
export type CarteSection = { name: string; intro?: string; bannerImage?: string; items: CarteItem[] };

// Photo reuse note: most of these images were shot for the Glovo delivery
// menu (src/content/menu-highlights.ts / src/cart/order-menu.ts) — same
// dish, so reusing them here is legitimate, not a placeholder trick. Items
// with no matching Glovo photo (brunchs, tajines, cafés, thés, most cold
// drinks) still have none — this carte was never photographed on its own.

export const carteMenu: CarteSection[] = [
  {
    name: 'Petits-déjeuners',
    intro: 'Nos petits déjeuners sont servis avec une boisson chaude au choix.',
    items: [
      {
        name: 'Miricani',
        description:
          'Pancakes du chef, jus d’orange ou carottes. Accompagnés de garniture au choix : beurre de cacahuète, beurre salé ou fruits frais.',
        price: '45 DH',
        image: '/images/menu/miricani.jpg',
      },
      {
        name: 'Mghribi',
        description:
          'Msemen, Batbout & Beghrir (crêpes marocaines), huile d’olive, olives, beurre de cacahuètes, jben et jus frais.',
        price: '50 DH',
      },
      {
        name: 'Nglizi',
        description:
          '2 véritables scones anglais maison servis avec du beurre salé, confiture artisanale & miel.',
        price: '60 DH',
        image: '/images/menu/nglizi.jpg',
      },
    ],
  },
  {
    name: 'Brunchs',
    intro: 'Nos brunchs sont servis avec un jus, une boisson chaude et un dessert au choix.',
    items: [
      {
        name: 'Balade Gourmande',
        description: 'Chak-chouka, fromage blanc, olives, miel, beurre de cacahuète maison, pain du jour.',
        price: '95 DH',
      },
      {
        name: 'Zayna la Douce',
        description:
          'Batbout maison, moitié houmous à la betterave, anchois maison, pickles et moitié beurre de cacahuètes, banane, fruits secs.',
        price: '110 DH',
      },
      {
        name: 'Soleil d’Ibiza',
        description: 'Omelette aux poivrons, salade, pain du jour, huile d’olive, miel, fromage blanc.',
        price: '110 DH',
      },
      {
        name: 'Brunch à Istanbul',
        description: 'Turkish eggs, pickles maison, salade, fromage, olives, miel, pain maison, fruits.',
        price: '120 DH',
      },
    ],
  },
  {
    name: 'Zayna Bowls',
    intro: 'Votre bowl est servi avec une boisson chaude.',
    items: [
      {
        name: 'Énergie Bowl',
        description: 'Un lit de yaourt nature, granola maison, fruits de saison & pâte de cacahuète maison.',
        price: '63 DH',
        image: '/images/menu/zayna-bowl.jpg',
      },
      {
        name: 'Golden Bowl',
        description: 'Porridge aux flocons d’avoine, fruit de saison, dattes & graines variées.',
        price: '59 DH',
        image: '/images/menu/zayna-bowl.jpg',
      },
      {
        name: 'Choco Chai Bowl',
        description: 'Un lit de yaourt nature, banane caramélisée, granola maison, pépites de chocolat, beurre de cacahuète.',
        price: '59 DH',
        image: '/images/menu/zayna-bowl.jpg',
      },
    ],
  },
  {
    name: 'Salades',
    items: [
      {
        name: 'Salade César',
        description: 'Laitue, tomates, croûtons, anchois, parmesan & sauce du chef.',
        price: '45 DH',
        image: '/images/menu/salade-cesar.jpg',
      },
      {
        name: 'Salade Quinoa',
        description: 'Quinoa, poulet aux herbes, carottes, roquette, poivrons, tomates & sauce du chef.',
        price: '45 DH',
        image: '/images/menu/salade-quinoa.jpg',
      },
    ],
  },
  {
    name: 'Bagels',
    items: [
      {
        name: 'Fondant Dghmira',
        description: 'Poulet, oignons caramélisés, patate douce au four & sauce du chef.',
        price: '70 DH',
        image: '/images/menu/fondant-dghmira.jpg',
      },
      {
        name: 'Bagel Poulet au Pesto',
        description: 'Poulet rôti, sauce pesto, roquette, salade, patate douce au four.',
        price: '70 DH',
        image: '/images/menu/bagel-poulet-pesto.jpg',
      },
      {
        name: 'Bagel Veggie Délice',
        description: 'Légumes grillés, sauce pesto, roquette & mozzarella.',
        price: '65 DH',
        image: '/images/menu/bagel-veggie-delice.jpg',
      },
      {
        name: 'Bagel Kofta',
        description: 'Kofta grillée, sauce du chef, laitue, tomates confites, pickles rouges & patate douce au four.',
        price: '80 DH',
        image: '/images/menu/bagel-kofta.jpg',
      },
    ],
  },
  {
    name: 'Tajines',
    intro: 'Un tajine différent chaque semaine.',
    items: [
      { name: 'Tajine de poulet au citron (chaque lundi)', description: '', price: '45 DH' },
      {
        name: 'Tajine de boulettes de sardines à la sauce tomate (chaque mercredi)',
        description: '',
        price: '40 DH',
      },
    ],
  },
  {
    name: 'Desserts',
    items: [
      {
        name: 'Carrot Cake au Fromage Blanc & Noix',
        description: '',
        price: '30 DH',
        image: '/images/menu/carrot-cake.jpg',
      },
      {
        name: 'Brownies au Amlou',
        description: '',
        price: '30 DH',
        image: '/images/menu/brownies-amlou.jpg',
      },
      {
        name: 'Cake au Citron',
        description: '',
        price: '30 DH',
        image: '/images/menu/cake-au-citron.jpg',
      },
      {
        name: 'Cinnamon Rolls',
        description: '',
        price: '30 DH',
        image: '/images/menu/cinnamon-rolls.jpg',
      },
      { name: 'Tarte aux Fruits de Saison', description: '', price: '30 DH' },
      { name: 'Cookies', description: '', price: '30 DH' },
      { name: 'Scones', description: '', price: '30 DH' },
    ],
  },
  {
    name: 'Cafés',
    bannerImage: '/images/carte/mug-shaghaf.jpg',
    items: [
      { name: 'Espresso', description: '', price: '17 DH' },
      { name: 'Double Espresso', description: '', price: '17 DH' },
      { name: 'Café au Lait', description: '', price: '20 DH' },
      { name: 'Café Latte', description: '', price: '22 DH' },
      { name: 'Cappuccino', description: '', price: '25 DH' },
      { name: 'Chocolat Chaud Maison', description: '', price: '22 DH' },
      { name: 'Matcha Latte', description: '', price: '35 DH' },
      { name: 'Iced Cappuccino Latte', description: '', price: '36 DH' },
      { name: 'Iced Matcha Latte', description: '', price: '40 DH' },
    ],
  },
  {
    name: 'Thés',
    items: [
      { name: 'Thé à la Menthe', description: '', price: '15 DH' },
      { name: 'Thé à la Menthe & Fleur d’Oranger', description: '', price: '15 DH' },
      { name: 'Thé à la Verveine', description: '', price: '15 DH' },
      { name: 'Sélection de Tisanes', description: '', price: '25 DH' },
    ],
  },
  {
    name: 'Boissons froides',
    bannerImage: '/images/carte/mug-hob.jpg',
    items: [
      { name: 'Jus d’Oranges', description: '', price: '25 DH', image: '/images/menu/jus-orange.jpg' },
      { name: 'Jus de Pommes & Cannelle', description: '', price: '25 DH' },
      { name: 'Thé Green Glow', description: 'Concombre, pomme, épinards, citron', price: '30 DH' },
      {
        name: 'Bissap aux Fruits Tropicaux',
        description: '',
        price: '30 DH',
        image: '/images/menu/bissap.jpg',
      },
      {
        name: 'Jus de Citron & Menthe',
        description: '',
        price: '25 DH',
        image: '/images/menu/jus-citron-menthe.jpg',
      },
      { name: 'Jus de Carottes', description: '', price: '30 DH' },
      { name: 'Jus à la Betterave & Orange', description: '', price: '25 DH' },
      { name: 'Eau Minérale 33 CL', description: '', price: '15 DH' },
    ],
  },
];

export const carteNote =
  'Carte transcrite depuis le menu physique du café (2 pages photographiées) — à repasser une fois que de vraies photos des plats seront disponibles pour cette page.';

// ---------------------------------------------------------------------------
// ENGLISH & ARABIC — same structure, same prices/images, translated
// name/description so every locale shows the full in-store menu (not just
// the homepage). Prices are left in their original DH figures since the
// currency is understood either way.
// ---------------------------------------------------------------------------

export const carteMenuEn: CarteSection[] = [
  {
    name: 'Breakfasts',
    intro: 'Our breakfasts are served with a hot drink of your choice.',
    items: [
      {
        name: 'Miricani',
        description:
          "Chef's pancakes, orange or carrot juice. Served with a topping of your choice: peanut butter, salted butter or fresh fruit.",
        price: '45 DH',
        image: '/images/menu/miricani.jpg',
      },
      {
        name: 'Mghribi',
        description:
          'Msemen, batbout & beghrir (Moroccan pancakes), olive oil, olives, peanut butter, fresh cheese (jben) and fresh juice.',
        price: '50 DH',
      },
      {
        name: 'Nglizi',
        description:
          '2 real homemade English scones served with salted butter, artisanal jam & honey.',
        price: '60 DH',
        image: '/images/menu/nglizi.jpg',
      },
    ],
  },
  {
    name: 'Brunches',
    intro: 'Our brunches are served with a juice, a hot drink and a dessert of your choice.',
    items: [
      {
        name: 'Balade Gourmande',
        description: 'Chakchouka, fresh cheese, olives, honey, homemade peanut butter, bread of the day.',
        price: '95 DH',
      },
      {
        name: 'Zayna la Douce',
        description:
          'Homemade batbout, half beet hummus with homemade anchovies and pickles, half peanut butter with banana and dried fruit.',
        price: '110 DH',
      },
      {
        name: 'Soleil d’Ibiza',
        description: 'Pepper omelette, salad, bread of the day, olive oil, honey, fresh cheese.',
        price: '110 DH',
      },
      {
        name: 'Brunch à Istanbul',
        description: 'Turkish eggs, homemade pickles, salad, cheese, olives, honey, homemade bread, fruit.',
        price: '120 DH',
      },
    ],
  },
  {
    name: 'Zayna Bowls',
    intro: 'Your bowl is served with a hot drink.',
    items: [
      {
        name: 'Énergie Bowl',
        description: 'A bed of plain yogurt, homemade granola, seasonal fruit & homemade nut butter.',
        price: '63 DH',
        image: '/images/menu/zayna-bowl.jpg',
      },
      {
        name: 'Golden Bowl',
        description: 'Oat porridge, seasonal fruit, dates & assorted seeds.',
        price: '59 DH',
        image: '/images/menu/zayna-bowl.jpg',
      },
      {
        name: 'Choco Chai Bowl',
        description:
          'A bed of plain yogurt, caramelized banana, homemade granola, chocolate chips, peanut butter.',
        price: '59 DH',
        image: '/images/menu/zayna-bowl.jpg',
      },
    ],
  },
  {
    name: 'Salads',
    items: [
      {
        name: 'Caesar Salad',
        description: 'Lettuce, tomatoes, croutons, anchovies, parmesan & chef’s sauce.',
        price: '45 DH',
        image: '/images/menu/salade-cesar.jpg',
      },
      {
        name: 'Quinoa Salad',
        description: 'Quinoa, herb chicken, carrots, arugula, peppers, tomatoes & chef’s sauce.',
        price: '45 DH',
        image: '/images/menu/salade-quinoa.jpg',
      },
    ],
  },
  {
    name: 'Bagels',
    items: [
      {
        name: 'Fondant Dghmira',
        description: 'Chicken, caramelized onions, oven-baked sweet potato & chef’s sauce.',
        price: '70 DH',
        image: '/images/menu/fondant-dghmira.jpg',
      },
      {
        name: 'Chicken Pesto Bagel',
        description: 'Roasted chicken, pesto sauce, arugula, oven-baked sweet potato.',
        price: '70 DH',
        image: '/images/menu/bagel-poulet-pesto.jpg',
      },
      {
        name: 'Veggie Delight Bagel',
        description: 'Grilled vegetables, pesto sauce, arugula & mozzarella.',
        price: '65 DH',
        image: '/images/menu/bagel-veggie-delice.jpg',
      },
      {
        name: 'Kofta Bagel',
        description: 'Grilled kofta, chef’s sauce, lettuce, confit tomatoes, red pickles & oven-baked sweet potato.',
        price: '80 DH',
        image: '/images/menu/bagel-kofta.jpg',
      },
    ],
  },
  {
    name: 'Tajines',
    intro: 'A different tajine every week.',
    items: [
      { name: 'Lemon chicken tajine (every Monday)', description: '', price: '45 DH' },
      {
        name: 'Sardine meatball tajine in tomato sauce (every Wednesday)',
        description: '',
        price: '40 DH',
      },
    ],
  },
  {
    name: 'Desserts',
    items: [
      {
        name: 'Carrot Cake with Cream Cheese & Walnuts',
        description: '',
        price: '30 DH',
        image: '/images/menu/carrot-cake.jpg',
      },
      { name: 'Amlou Brownies', description: '', price: '30 DH', image: '/images/menu/brownies-amlou.jpg' },
      { name: 'Lemon Cake', description: '', price: '30 DH', image: '/images/menu/cake-au-citron.jpg' },
      { name: 'Cinnamon Rolls', description: '', price: '30 DH', image: '/images/menu/cinnamon-rolls.jpg' },
      { name: 'Seasonal Fruit Tart', description: '', price: '30 DH' },
      { name: 'Cookies', description: '', price: '30 DH' },
      { name: 'Scones', description: '', price: '30 DH' },
    ],
  },
  {
    name: 'Coffee',
    bannerImage: '/images/carte/mug-shaghaf.jpg',
    items: [
      { name: 'Espresso', description: '', price: '17 DH' },
      { name: 'Double Espresso', description: '', price: '17 DH' },
      { name: 'Café au Lait', description: '', price: '20 DH' },
      { name: 'Café Latte', description: '', price: '22 DH' },
      { name: 'Cappuccino', description: '', price: '25 DH' },
      { name: 'Homemade Hot Chocolate', description: '', price: '22 DH' },
      { name: 'Matcha Latte', description: '', price: '35 DH' },
      { name: 'Iced Cappuccino Latte', description: '', price: '36 DH' },
      { name: 'Iced Matcha Latte', description: '', price: '40 DH' },
    ],
  },
  {
    name: 'Teas',
    items: [
      { name: 'Mint Tea', description: '', price: '15 DH' },
      { name: 'Mint & Orange Blossom Tea', description: '', price: '15 DH' },
      { name: 'Verbena Tea', description: '', price: '15 DH' },
      { name: 'Herbal Tea Selection', description: '', price: '25 DH' },
    ],
  },
  {
    name: 'Cold Drinks',
    bannerImage: '/images/carte/mug-hob.jpg',
    items: [
      { name: 'Orange Juice', description: '', price: '25 DH', image: '/images/menu/jus-orange.jpg' },
      { name: 'Apple & Cinnamon Juice', description: '', price: '25 DH' },
      { name: 'Green Glow Tea', description: 'Cucumber, apple, spinach, lemon', price: '30 DH' },
      {
        name: 'Tropical Fruit Bissap',
        description: '',
        price: '30 DH',
        image: '/images/menu/bissap.jpg',
      },
      {
        name: 'Lemon & Mint Juice',
        description: '',
        price: '25 DH',
        image: '/images/menu/jus-citron-menthe.jpg',
      },
      { name: 'Carrot Juice', description: '', price: '30 DH' },
      { name: 'Beet & Orange Juice', description: '', price: '25 DH' },
      { name: 'Mineral Water 33 CL', description: '', price: '15 DH' },
    ],
  },
];

export const carteNoteEn =
  "Menu transcribed from the café's physical menu (2 photographed pages) — to be updated with real dish photos once available.";

export const carteMenuAr: CarteSection[] = [
  {
    name: 'الفطور',
    intro: 'تُقدَّم وجبات الفطور مع مشروب ساخن حسب الاختيار.',
    items: [
      {
        name: 'ميريكاني',
        description:
          'فطائر الشيف، مع عصير برتقال أو جزر. تُقدَّم مع إضافة حسب الاختيار: زبدة الفول السوداني، زبدة مملحة أو فواكه طازجة.',
        price: '45 درهم',
        image: '/images/menu/miricani.jpg',
      },
      {
        name: 'مغربي',
        description: 'مسمن، بطبوط وبغرير، زيت الزيتون، زيتون، زبدة الفول السوداني، جبن طازج وعصير طازج.',
        price: '50 درهم',
      },
      {
        name: 'نجليزي',
        description: 'قطعتان من السكونز الإنجليزية الأصيلة محضّرتان منزليًا، تُقدَّمان مع زبدة مملحة، مربى تقليدي وعسل.',
        price: '60 درهم',
        image: '/images/menu/nglizi.jpg',
      },
    ],
  },
  {
    name: 'برانش',
    intro: 'يُقدَّم البرانش مع عصير، مشروب ساخن وحلوى حسب الاختيار.',
    items: [
      {
        name: 'نزهة الذواقة',
        description: 'شكشوكة، جبن طازج، زيتون، عسل، زبدة فول سوداني منزلية، خبز اليوم.',
        price: '95 درهم',
      },
      {
        name: 'زاينة الحلوة',
        description: 'بطبوط منزلي، نصفه حمّص بالشمندر مع أنشوجة ومخللات منزلية، والنصف الآخر زبدة فول سوداني مع موز وفواكه مجففة.',
        price: '110 درهم',
      },
      {
        name: 'شمس إيبيزا',
        description: 'أومليت بالفلفل، سلطة، خبز اليوم، زيت الزيتون، عسل، جبن طازج.',
        price: '110 درهم',
      },
      {
        name: 'إفطار إسطنبولي',
        description: 'بيض تركي، مخللات منزلية، سلطة، جبن، زيتون، عسل، خبز منزلي، فواكه.',
        price: '120 درهم',
      },
    ],
  },
  {
    name: 'أطباق زاينة',
    intro: 'يُقدَّم الطبق مع مشروب ساخن.',
    items: [
      {
        name: 'طبق الطاقة',
        description: 'طبقة من الزبادي الطبيعي، غرانولا منزلية، فواكه الموسم وزبدة مكسرات منزلية.',
        price: '63 درهم',
        image: '/images/menu/zayna-bowl.jpg',
      },
      {
        name: 'الطبق الذهبي',
        description: 'عصيدة الشوفان، فواكه الموسم، تمر وبذور متنوعة.',
        price: '59 درهم',
        image: '/images/menu/zayna-bowl.jpg',
      },
      {
        name: 'طبق شوكو تشاي',
        description: 'طبقة من الزبادي الطبيعي، موز مكرمل، غرانولا منزلية، رقائق شوكولاتة، زبدة فول سوداني.',
        price: '59 درهم',
        image: '/images/menu/zayna-bowl.jpg',
      },
    ],
  },
  {
    name: 'السلطات',
    items: [
      {
        name: 'سلطة السيزر',
        description: 'خس، طماطم، خبز محمّص، أنشوجة، جبن بارميزان وصلصة الشيف.',
        price: '45 درهم',
        image: '/images/menu/salade-cesar.jpg',
      },
      {
        name: 'سلطة الكينوا',
        description: 'كينوا، دجاج بالأعشاب، جزر، جرجير، فلفل، طماطم وصلصة الشيف.',
        price: '45 درهم',
        image: '/images/menu/salade-quinoa.jpg',
      },
    ],
  },
  {
    name: 'بيغلات',
    items: [
      {
        name: 'فوندان دغميرة',
        description: 'دجاج، بصل مكرمل، بطاطا حلوة مشوية وصلصة الشيف.',
        price: '70 درهم',
        image: '/images/menu/fondant-dghmira.jpg',
      },
      {
        name: 'بيغل الدجاج بالبيستو',
        description: 'دجاج مشوي، صلصة البيستو، جرجير، بطاطا حلوة مشوية.',
        price: '70 درهم',
        image: '/images/menu/bagel-poulet-pesto.jpg',
      },
      {
        name: 'بيغل فيجي ديليس',
        description: 'خضار مشوية، صلصة البيستو، جرجير وموزاريلا.',
        price: '65 درهم',
        image: '/images/menu/bagel-veggie-delice.jpg',
      },
      {
        name: 'بيغل الكفتة',
        description: 'كفتة مشوية، صلصة الشيف، خس، طماطم مقددة، مخلل أحمر وبطاطا حلوة مشوية.',
        price: '80 درهم',
        image: '/images/menu/bagel-kofta.jpg',
      },
    ],
  },
  {
    name: 'الطاجين',
    intro: 'طاجين مختلف كل أسبوع.',
    items: [
      { name: 'طاجين الدجاج بالليمون (كل يوم اثنين)', description: '', price: '45 درهم' },
      { name: 'طاجين كرات السردين بصلصة الطماطم (كل يوم أربعاء)', description: '', price: '40 درهم' },
    ],
  },
  {
    name: 'الحلويات',
    items: [
      {
        name: 'كيك الجزر بجبنة الكريمة والجوز',
        description: '',
        price: '30 درهم',
        image: '/images/menu/carrot-cake.jpg',
      },
      { name: 'براوني بالأملو', description: '', price: '30 درهم', image: '/images/menu/brownies-amlou.jpg' },
      { name: 'كيك الليمون', description: '', price: '30 درهم', image: '/images/menu/cake-au-citron.jpg' },
      { name: 'سينامون رولز', description: '', price: '30 درهم', image: '/images/menu/cinnamon-rolls.jpg' },
      { name: 'تارت الفواكه الموسمية', description: '', price: '30 درهم' },
      { name: 'كوكيز', description: '', price: '30 درهم' },
      { name: 'سكونز', description: '', price: '30 درهم' },
    ],
  },
  {
    name: 'القهوة',
    bannerImage: '/images/carte/mug-shaghaf.jpg',
    items: [
      { name: 'إسبريسو', description: '', price: '17 درهم' },
      { name: 'دبل إسبريسو', description: '', price: '17 درهم' },
      { name: 'قهوة بالحليب', description: '', price: '20 درهم' },
      { name: 'كافيه لاتيه', description: '', price: '22 درهم' },
      { name: 'كابتشينو', description: '', price: '25 درهم' },
      { name: 'شوكولاتة ساخنة منزلية', description: '', price: '22 درهم' },
      { name: 'ماتشا لاتيه', description: '', price: '35 درهم' },
      { name: 'آيسد كابتشينو لاتيه', description: '', price: '36 درهم' },
      { name: 'آيسد ماتشا لاتيه', description: '', price: '40 درهم' },
    ],
  },
  {
    name: 'الشاي',
    items: [
      { name: 'أتاي بالنعناع', description: '', price: '15 درهم' },
      { name: 'أتاي بالنعناع وزهر البرتقال', description: '', price: '15 درهم' },
      { name: 'شاي اللويزة', description: '', price: '15 درهم' },
      { name: 'تشكيلة الأعشاب', description: '', price: '25 درهم' },
    ],
  },
  {
    name: 'المشروبات الباردة',
    bannerImage: '/images/carte/mug-hob.jpg',
    items: [
      { name: 'عصير برتقال', description: '', price: '25 درهم', image: '/images/menu/jus-orange.jpg' },
      { name: 'عصير التفاح والقرفة', description: '', price: '25 درهم' },
      { name: 'شاي جرين غلو', description: 'خيار، تفاح، سبانخ، ليمون', price: '30 درهم' },
      { name: 'بيساب بالفواكه الاستوائية', description: '', price: '30 درهم', image: '/images/menu/bissap.jpg' },
      {
        name: 'عصير الليمون بالنعناع',
        description: '',
        price: '25 درهم',
        image: '/images/menu/jus-citron-menthe.jpg',
      },
      { name: 'عصير الجزر', description: '', price: '30 درهم' },
      { name: 'عصير الشمندر والبرتقال', description: '', price: '25 درهم' },
      { name: 'مياه معدنية 33 سل', description: '', price: '15 درهم' },
    ],
  },
];

export const carteNoteAr =
  'القائمة منسوخة من قائمة المقهى الورقية (صفحتان مصورتان) — سيتم تحديثها بصور حقيقية للأطباق فور توفرها.';
