// THE IN-STORE MENU ("la carte") — what's printed and handed to people sitting
// at Zayna, as opposed to menu-highlights.ts which is the Glovo delivery
// menu (destined to become the site's own ordering flow later, per the
// client — kept intentionally separate, do not merge the two).
//
// SOURCE: transcribed from photos of the current physical menu provided by
// the client, 2026-08-28 — this REPLACES an earlier transcription (2026-08-27)
// that turned out to be an outdated menu version. Prices are in DH (dirham)
// as printed on the menu itself — note these differ from the Glovo/delivery
// prices for the same-named dishes, that's expected, dine-in and delivery
// pricing are set independently, not a transcription error.

export type CarteItem = { name: string; description: string; price: string; image?: string };
export type CarteSection = { name: string; intro?: string; bannerImage?: string; items: CarteItem[] };

// Photo reuse note: images kept only where the dish clearly still matches
// the new menu description. New/renamed dishes with no matching photo have
// none for now — to be photographed later.

export const carteMenu: CarteSection[] = [
  {
    name: 'Petits-déjeuners',
    intro: 'Nos petits déjeuners sont servis avec une boisson chaude au choix.',
    items: [
      {
        name: 'Option 1',
        description: 'Omelette au khlie, jben, olives, huile d’olive, pain maison, thé.',
        price: '60 DH',
      },
      {
        name: 'Option 2',
        description:
          'Pancakes, accompagnés d’une garniture au choix : salée (sauce fromagère, jambon) ou sucrée (beurre salé, fruits frais).',
        price: '65 DH',
      },
      {
        name: 'Option 3',
        description: 'Zayna toast, avocat, oeuf, salade, boisson chaude.',
        price: '59 DH',
      },
    ],
  },
  {
    name: 'Brunchs signature',
    items: [
      {
        name: 'Zayna The Sweet',
        description:
          'Épinards sautés, œuf & fromage, petit bol de granola maison, pain du jour, jus frais, boisson chaude & dessert.',
        price: '90 DH',
      },
      {
        name: 'Ibiza Sun',
        description: 'Omelette aux poivrons, salade, pain du jour, huile d’olive, miel & fromage blanc.',
        price: '90 DH',
      },
      {
        name: 'Gourmet Stroll',
        description: 'Chakchouka, fromage blanc, olives, miel, beurre de cacahuète maison & pain du jour.',
        price: '100 DH',
      },
      {
        name: 'Brunch à Istanbul',
        description: 'Turkish eggs, pickles maison, salade, fromage, olives, miel & pain maison.',
        price: '100 DH',
      },
    ],
  },
  {
    name: 'Salades',
    items: [
      {
        name: 'Salade César',
        description: 'Laitue, tomates, croûtons, anchois maison, parmesan & sauce du chef.',
        price: '45 DH',
        image: '/images/menu/salade-cesar.jpg',
      },
      {
        name: 'Salade Quinoa',
        description: 'Quinoa, poulet aux herbes, carottes, poivrons, tomates & sauce du chef.',
        price: '45 DH',
        image: '/images/menu/salade-quinoa.jpg',
      },
      {
        name: 'Rainbow Salad',
        description: 'Houmous, épinards, poulet, laitue, tomates, poivrons, avocat & fromage.',
        price: '60 DH',
      },
    ],
  },
  {
    name: 'Extras',
    items: [
      { name: 'Egg', description: '', price: '+10 DH' },
      { name: 'Jambon', description: '', price: '+15 DH' },
      { name: 'Sweet potato', description: '', price: '+20 DH' },
    ],
  },
  {
    name: 'Zayna Bowls',
    items: [
      {
        name: 'Golden Bowl',
        description: 'Porridge d’avoine, fruits de saison, dattes & graines variées.',
        price: '59 DH',
        image: '/images/menu/zayna-bowl.jpg',
      },
      {
        name: 'Energy Bowl',
        description: 'Yaourt nature, granola maison, fruits de saison & beurre de cacahuète maison.',
        price: '63 DH',
        image: '/images/menu/zayna-bowl.jpg',
      },
    ],
  },
  {
    name: 'Couscous',
    items: [
      { name: 'Couscous au poulet', description: '', price: '45 DH' },
      { name: 'Couscous à la viande', description: '', price: '50 DH' },
    ],
  },
  {
    name: 'Tajines',
    items: [
      { name: 'Tajine de poulet', description: '', price: '40 DH' },
      { name: 'Tajine de poisson', description: '', price: '40 DH' },
      { name: 'Tajine de viande hachée', description: '', price: '45 DH' },
    ],
  },
  {
    name: 'Dessert at the counter',
    items: [],
  },
  {
    name: 'Cafés',
    bannerImage: '/images/carte/mug-shaghaf.jpg',
    items: [
      { name: 'Espresso', description: '', price: '15 DH' },
      { name: 'Double Espresso', description: '', price: '20 DH' },
      { name: 'Latte', description: '', price: '20 DH' },
      { name: 'Latte (lait végétal)', description: '', price: '35 DH' },
      { name: 'Cappuccino', description: '', price: '25 DH' },
      { name: 'Chocolat Chaud Maison', description: '', price: '22 DH' },
      { name: 'Matcha Latte', description: '', price: '35 DH' },
      { name: 'Iced Matcha Latte', description: '', price: '40 DH' },
    ],
  },
  {
    name: 'Thés',
    items: [
      { name: 'Thé à la Menthe', description: '', price: '15 DH' },
      { name: 'Thé à la Verveine', description: '', price: '15 DH' },
      { name: 'Sélection de Tisanes', description: '', price: '20 DH' },
      { name: 'Thé Glacé', description: '', price: '25 DH' },
    ],
  },
  {
    name: 'Jus & limonades',
    bannerImage: '/images/carte/mug-hob.jpg',
    items: [
      { name: 'Jus d’Orange Frais', description: '', price: '25 DH', image: '/images/menu/jus-orange.jpg' },
      { name: 'Jus Banane & Fleur d’Oranger', description: '', price: '25 DH' },
      { name: 'Jus Pomme & Cannelle', description: '', price: '30 DH' },
      { name: 'Jus de Carottes', description: '', price: '28 DH' },
      {
        name: 'Jus Citron & Menthe',
        description: '',
        price: '25 DH',
        image: '/images/menu/jus-citron-menthe.jpg',
      },
      { name: 'Limonade à l’Hibiscus', description: '', price: '28 DH', image: '/images/menu/bissap.jpg' },
      { name: 'Pink Energy', description: '', price: '30 DH' },
      { name: 'Green Boost', description: '', price: '30 DH' },
      { name: 'Olmès 50 cl', description: '', price: '20 DH' },
      { name: 'Eau Minérale 33 CL', description: '', price: '15 DH' },
    ],
  },
  {
    name: 'Bagels signature',
    items: [
      {
        name: 'Zayna Bagel',
        description: 'Poulet, poivrons grillés, fromage & patate douce.',
        price: '65 DH',
      },
      {
        name: 'Dghmira Fondant',
        description: 'Poulet, oignons caramélisés, patate douce & sauce du chef.',
        price: '65 DH',
        image: '/images/menu/fondant-dghmira.jpg',
      },
      {
        name: 'Kofta Bagel',
        description: 'Kofta grillée, sauce du chef, laitue, tomates séchées & pickles rouges.',
        price: '75 DH',
        image: '/images/menu/bagel-kofta.jpg',
      },
      {
        name: 'Chicken Pesto',
        description: 'Poulet rôti, sauce pesto & mozzarella.',
        price: '65 DH',
        image: '/images/menu/bagel-poulet-pesto.jpg',
      },
      {
        name: 'Veggie Delight',
        description: 'Légumes grillés, sauce pesto & mozzarella.',
        price: '55 DH',
        image: '/images/menu/bagel-veggie-delice.jpg',
      },
    ],
  },
];

export const carteNote =
  'Carte transcrite depuis le menu physique du café fourni par la cliente (2026-08-28) — à repasser une fois que de vraies photos des plats seront disponibles pour cette page.';

// ---------------------------------------------------------------------------
// ENGLISH & ARABIC — same structure, same prices/images, translated
// name/description so every locale shows the full in-store menu (not just
// the homepage).
// ---------------------------------------------------------------------------

export const carteMenuEn: CarteSection[] = [
  {
    name: 'Breakfasts',
    intro: 'Our breakfasts are served with a hot drink of your choice.',
    items: [
      {
        name: 'Option 1',
        description: 'Omelette with khlie, jben, olives, olive oil, homemade bread, tea.',
        price: '60 DH',
      },
      {
        name: 'Option 2',
        description:
          'Pancakes, accompanied by a choice of toppings: savory (cheese sauce, ham) or sweet (salted butter, fresh fruit).',
        price: '65 DH',
      },
      {
        name: 'Option 3',
        description: 'Zayna toast, avocat, oeuf, salade, boisson chaude.',
        price: '59 DH',
      },
    ],
  },
  {
    name: 'Brunches Signature',
    items: [
      {
        name: 'Zayna The Sweet',
        description:
          'Sautéed spinach with egg & cheese, small bowl of homemade granola, bread of the day, fresh juice, hot drink & dessert.',
        price: '90 DH',
      },
      {
        name: 'Ibiza Sun',
        description: 'Pepper omelet, salad, bread of the day, olive oil, honey & cottage cheese.',
        price: '90 DH',
      },
      {
        name: 'Gourmet Stroll',
        description: 'Chakchouka, white cheese, olives, honey, homemade peanut butter & bread of the day.',
        price: '100 DH',
      },
      {
        name: 'Brunch in Istanbul',
        description: 'Turkish eggs, homemade pickles, salad, cheese, olives, honey & homemade bread.',
        price: '100 DH',
      },
    ],
  },
  {
    name: 'Salads',
    items: [
      {
        name: 'Caesar Salad',
        description: 'Lettuce, tomatoes, croutons, homemade anchovies, Parmesan cheese & chef’s dressing.',
        price: '45 DH',
        image: '/images/menu/salade-cesar.jpg',
      },
      {
        name: 'Quinoa Salad',
        description: 'Quinoa, herbed chicken, carrots, bell peppers, tomatoes & chef’s dressing.',
        price: '45 DH',
        image: '/images/menu/salade-quinoa.jpg',
      },
      {
        name: 'Rainbow Salad',
        description: 'Hummus, spinach, chicken, lettuce, tomatoes, bell peppers, avocado & cheese.',
        price: '60 DH',
      },
    ],
  },
  {
    name: 'Extras',
    items: [
      { name: 'Egg', description: '', price: '+10 DH' },
      { name: 'Jambon', description: '', price: '+15 DH' },
      { name: 'Sweet potato', description: '', price: '+20 DH' },
    ],
  },
  {
    name: 'Zayna Bowls',
    items: [
      {
        name: 'Golden Bowl',
        description: 'Oatmeal porridge, seasonal fruit, dates & mixed seeds.',
        price: '59 DH',
        image: '/images/menu/zayna-bowl.jpg',
      },
      {
        name: 'Energy Bowl',
        description: 'Plain yogurt, homemade granola, seasonal fruit & homemade peanut butter.',
        price: '63 DH',
        image: '/images/menu/zayna-bowl.jpg',
      },
    ],
  },
  {
    name: 'Couscous',
    items: [
      { name: 'Chicken couscous', description: '', price: '45 DH' },
      { name: 'Meat couscous', description: '', price: '50 DH' },
    ],
  },
  {
    name: 'Tajines',
    items: [
      { name: 'Chicken tajine', description: '', price: '40 DH' },
      { name: 'Fish tajine', description: '', price: '40 DH' },
      { name: 'Minced meat tajine', description: '', price: '45 DH' },
    ],
  },
  {
    name: 'Dessert at the counter',
    items: [],
  },
  {
    name: 'Coffee',
    bannerImage: '/images/carte/mug-shaghaf.jpg',
    items: [
      { name: 'Espresso', description: '', price: '15 DH' },
      { name: 'Double espresso', description: '', price: '20 DH' },
      { name: 'Latte', description: '', price: '20 DH' },
      { name: 'Latte (plant-based milk)', description: '', price: '35 DH' },
      { name: 'Cappuccino', description: '', price: '25 DH' },
      { name: 'Homemade Hot Chocolate', description: '', price: '22 DH' },
      { name: 'Matcha Latte', description: '', price: '35 DH' },
      { name: 'Iced Matcha Latte', description: '', price: '40 DH' },
    ],
  },
  {
    name: 'Teas & fusions',
    items: [
      { name: 'Mint Tea', description: '', price: '15 DH' },
      { name: 'Verbena Tea', description: '', price: '15 DH' },
      { name: 'Selection of Herbal Teas', description: '', price: '20 DH' },
      { name: 'Iced Tea', description: '', price: '25 DH' },
    ],
  },
  {
    name: 'Juices & Lemonade',
    bannerImage: '/images/carte/mug-hob.jpg',
    items: [
      { name: 'Fresh Orange Juice', description: '', price: '25 DH', image: '/images/menu/jus-orange.jpg' },
      { name: 'Banana & Orange Blossom Juice', description: '', price: '25 DH' },
      { name: 'Apple & Cinnamon Juice', description: '', price: '30 DH' },
      { name: 'Carrot Juice', description: '', price: '28 DH' },
      {
        name: 'Lemon & Mint Juice',
        description: '',
        price: '25 DH',
        image: '/images/menu/jus-citron-menthe.jpg',
      },
      { name: 'Hibiscus Lemonade', description: '', price: '28 DH', image: '/images/menu/bissap.jpg' },
      { name: 'Pink Energy', description: '', price: '30 DH' },
      { name: 'Green Boost', description: '', price: '30 DH' },
      { name: 'Olmès 50 cl', description: '', price: '20 DH' },
      { name: 'Mineral Water 33 CL', description: '', price: '15 DH' },
    ],
  },
  {
    name: 'Signature Bagels',
    items: [
      {
        name: 'Zayna Bagel',
        description: 'Chicken, grilled peppers, cheese & sweet potatoes.',
        price: '65 DH',
      },
      {
        name: 'Dghmira Fondant',
        description: 'Chicken, caramelized onions, sweet potatoes & chef’s sauce.',
        price: '65 DH',
        image: '/images/menu/fondant-dghmira.jpg',
      },
      {
        name: 'Kofta Bagel',
        description: 'Grilled kofta, chef’s sauce, lettuce, sun-dried tomatoes & red pickles.',
        price: '75 DH',
        image: '/images/menu/bagel-kofta.jpg',
      },
      {
        name: 'Chicken Pesto',
        description: 'Roasted chicken, pesto & mozzarella.',
        price: '65 DH',
        image: '/images/menu/bagel-poulet-pesto.jpg',
      },
      {
        name: 'Veggie Delight',
        description: 'Grilled vegetables, pesto & mozzarella.',
        price: '55 DH',
        image: '/images/menu/bagel-veggie-delice.jpg',
      },
    ],
  },
];

export const carteNoteEn =
  "Menu transcribed from the café's current physical menu provided by the owner (2026-08-28) — to be updated with real dish photos once available.";

export const carteMenuAr: CarteSection[] = [
  {
    name: 'الفطور',
    intro: 'تُقدَّم وجبات الفطور مع مشروب ساخن حسب الاختيار.',
    items: [
      {
        name: 'الخيار 1',
        description: 'أومليت بالخليع، جبن طازج، زيتون، زيت الزيتون، خبز منزلي، شاي.',
        price: '60 درهم',
      },
      {
        name: 'الخيار 2',
        description: 'فطائر، مع إضافة حسب الاختيار: مالحة (صلصة الجبن، لحم مقدد) أو حلوة (زبدة مملحة، فواكه طازجة).',
        price: '65 درهم',
      },
      {
        name: 'الخيار 3',
        description: 'توست زاينة، أفوكادو، بيضة، سلطة، مشروب ساخن.',
        price: '59 درهم',
      },
    ],
  },
  {
    name: 'برانش سيغنتشر',
    items: [
      {
        name: 'زاينة ذا سويت',
        description: 'سبانخ سوتيه مع بيض وجبن، وعاء صغير من الغرانولا المنزلية، خبز اليوم، عصير طازج، مشروب ساخن وحلوى.',
        price: '90 درهم',
      },
      {
        name: 'إيبيزا صن',
        description: 'أومليت بالفلفل، سلطة، خبز اليوم، زيت الزيتون، عسل وجبن طازج.',
        price: '90 درهم',
      },
      {
        name: 'غورميه سترول',
        description: 'شكشوكة، جبن طازج، زيتون، عسل، زبدة فول سوداني منزلية وخبز اليوم.',
        price: '100 درهم',
      },
      {
        name: 'برانش إسطنبول',
        description: 'بيض تركي، مخللات منزلية، سلطة، جبن، زيتون، عسل وخبز منزلي.',
        price: '100 درهم',
      },
    ],
  },
  {
    name: 'السلطات',
    items: [
      {
        name: 'سلطة السيزر',
        description: 'خس، طماطم، خبز محمّص، أنشوجة منزلية، جبن بارميزان وصلصة الشيف.',
        price: '45 درهم',
        image: '/images/menu/salade-cesar.jpg',
      },
      {
        name: 'سلطة الكينوا',
        description: 'كينوا، دجاج بالأعشاب، جزر، فلفل، طماطم وصلصة الشيف.',
        price: '45 درهم',
        image: '/images/menu/salade-quinoa.jpg',
      },
      {
        name: 'رينبو سلاد',
        description: 'حمّص، سبانخ، دجاج، خس، طماطم، فلفل، أفوكادو وجبن.',
        price: '60 درهم',
      },
    ],
  },
  {
    name: 'إضافات',
    items: [
      { name: 'بيضة', description: '', price: '+10 درهم' },
      { name: 'لحم مقدد', description: '', price: '+15 درهم' },
      { name: 'بطاطا حلوة', description: '', price: '+20 درهم' },
    ],
  },
  {
    name: 'أطباق زاينة',
    items: [
      {
        name: 'الطبق الذهبي',
        description: 'عصيدة الشوفان، فواكه الموسم، تمر وبذور متنوعة.',
        price: '59 درهم',
        image: '/images/menu/zayna-bowl.jpg',
      },
      {
        name: 'طبق الطاقة',
        description: 'زبادي طبيعي، غرانولا منزلية، فواكه الموسم وزبدة فول سوداني منزلية.',
        price: '63 درهم',
        image: '/images/menu/zayna-bowl.jpg',
      },
    ],
  },
  {
    name: 'كسكس',
    items: [
      { name: 'كسكس بالدجاج', description: '', price: '45 درهم' },
      { name: 'كسكس باللحم', description: '', price: '50 درهم' },
    ],
  },
  {
    name: 'الطاجين',
    items: [
      { name: 'طاجين الدجاج', description: '', price: '40 درهم' },
      { name: 'طاجين السمك', description: '', price: '40 درهم' },
      { name: 'طاجين اللحم المفروم', description: '', price: '45 درهم' },
    ],
  },
  {
    name: 'حلوى عند الطاولة',
    items: [],
  },
  {
    name: 'القهوة',
    bannerImage: '/images/carte/mug-shaghaf.jpg',
    items: [
      { name: 'إسبريسو', description: '', price: '15 درهم' },
      { name: 'دبل إسبريسو', description: '', price: '20 درهم' },
      { name: 'لاتيه', description: '', price: '20 درهم' },
      { name: 'لاتيه (حليب نباتي)', description: '', price: '35 درهم' },
      { name: 'كابتشينو', description: '', price: '25 درهم' },
      { name: 'شوكولاتة ساخنة منزلية', description: '', price: '22 درهم' },
      { name: 'ماتشا لاتيه', description: '', price: '35 درهم' },
      { name: 'آيسد ماتشا لاتيه', description: '', price: '40 درهم' },
    ],
  },
  {
    name: 'الشاي',
    items: [
      { name: 'أتاي بالنعناع', description: '', price: '15 درهم' },
      { name: 'شاي اللويزة', description: '', price: '15 درهم' },
      { name: 'تشكيلة الأعشاب', description: '', price: '20 درهم' },
      { name: 'شاي مثلج', description: '', price: '25 درهم' },
    ],
  },
  {
    name: 'العصائر والليمونادة',
    bannerImage: '/images/carte/mug-hob.jpg',
    items: [
      { name: 'عصير برتقال طازج', description: '', price: '25 درهم', image: '/images/menu/jus-orange.jpg' },
      { name: 'عصير الموز وزهر البرتقال', description: '', price: '25 درهم' },
      { name: 'عصير التفاح والقرفة', description: '', price: '30 درهم' },
      { name: 'عصير الجزر', description: '', price: '28 درهم' },
      {
        name: 'عصير الليمون بالنعناع',
        description: '',
        price: '25 درهم',
        image: '/images/menu/jus-citron-menthe.jpg',
      },
      { name: 'ليمونادة الكركديه', description: '', price: '28 درهم', image: '/images/menu/bissap.jpg' },
      { name: 'بينك إنرجي', description: '', price: '30 درهم' },
      { name: 'غرين بوست', description: '', price: '30 درهم' },
      { name: 'أولميس 50 سل', description: '', price: '20 درهم' },
      { name: 'مياه معدنية 33 سل', description: '', price: '15 درهم' },
    ],
  },
  {
    name: 'بيغلات سيغنتشر',
    items: [
      {
        name: 'بيغل زاينة',
        description: 'دجاج، فلفل مشوي، جبن وبطاطا حلوة.',
        price: '65 درهم',
      },
      {
        name: 'فوندان دغميرة',
        description: 'دجاج، بصل مكرمل، بطاطا حلوة وصلصة الشيف.',
        price: '65 درهم',
        image: '/images/menu/fondant-dghmira.jpg',
      },
      {
        name: 'بيغل الكفتة',
        description: 'كفتة مشوية، صلصة الشيف، خس، طماطم مجففة ومخلل أحمر.',
        price: '75 درهم',
        image: '/images/menu/bagel-kofta.jpg',
      },
      {
        name: 'تشيكن بيستو',
        description: 'دجاج مشوي، صلصة البيستو وموزاريلا.',
        price: '65 درهم',
        image: '/images/menu/bagel-poulet-pesto.jpg',
      },
      {
        name: 'فيجي ديلايت',
        description: 'خضار مشوية، صلصة البيستو وموزاريلا.',
        price: '55 درهم',
        image: '/images/menu/bagel-veggie-delice.jpg',
      },
    ],
  },
];

export const carteNoteAr =
  'القائمة منسوخة من قائمة المقهى الورقية الحالية التي قدّمتها المالكة (2026-08-28) — سيتم تحديثها بصور حقيقية للأطباق فور توفرها.';
