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
        price: 'MAD 75',
        image: '/images/menu/bagel-poulet-pesto.jpg',
      },
      {
        name: 'Energie Bowl',
        description: 'Banane, prune, granola maison, purée d’oléagineux',
        price: 'MAD 65',
        image: '/images/menu/zayna-bowl.jpg',
      },
    ],
  },
  {
    name: 'Bagels',
    items: [
      {
        name: 'Bagel Kofta',
        description: 'Galette de kofta grillée, salade, pain sésame',
        price: 'MAD 83',
        image: '/images/menu/bagel-kofta.jpg',
      },
      {
        name: 'Fondant Dghmira',
        description: 'Viande effilochée façon dghmira, pain sésame',
        price: 'MAD 75',
        image: '/images/menu/fondant-dghmira.jpg',
      },
      {
        name: 'Bagel Poulet au Pesto',
        description: 'Poulet grillé, pesto, œuf poché, roquette',
        price: 'MAD 75',
        image: '/images/menu/bagel-poulet-pesto.jpg',
      },
      {
        name: 'Bagel Veggie Délice',
        description: 'Œuf poché, fromage frais, roquette, compotée de fruits rouges',
        price: 'MAD 68',
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
        price: 'MAD 55',
        image: '/images/menu/salade-cesar.jpg',
      },
      {
        name: 'Salade Quinoa',
        description: 'Quinoa, poulet, roquette, carotte, poivrons',
        price: 'MAD 55',
        image: '/images/menu/salade-quinoa.jpg',
      },
    ],
  },
  {
    name: 'Zayna Bowls',
    items: [
      {
        name: 'Energie Bowl',
        description: 'Banane, prune, granola maison, purée d’oléagineux',
        price: 'MAD 65',
        image: '/images/menu/zayna-bowl.jpg',
      },
      {
        // Confirmed by the client: same photo used for both bowls on Glovo.
        name: 'Golden Bowl',
        description: 'Banane, prune, granola maison, purée d’oléagineux',
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
        price: 'MAD 30',
        vegan: true,
        image: '/images/menu/jus-orange.jpg',
      },
      {
        name: 'Bissap aux Fruits Tropicaux',
        description: 'Infusion d’hibiscus aux fruits tropicaux',
        price: 'MAD 30',
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
