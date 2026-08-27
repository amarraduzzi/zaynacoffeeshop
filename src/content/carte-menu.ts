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

export type CarteItem = { name: string; description: string; price: string };
export type CarteSection = { name: string; intro?: string; items: CarteItem[] };

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
      },
      {
        name: 'Golden Bowl',
        description: 'Porridge aux flocons d’avoine, fruit de saison, dattes & graines variées.',
        price: '59 DH',
      },
      {
        name: 'Choco Chai Bowl',
        description: 'Un lit de yaourt nature, banane caramélisée, granola maison, pépites de chocolat, beurre de cacahuète.',
        price: '59 DH',
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
      },
      {
        name: 'Salade Quinoa',
        description: 'Quinoa, poulet aux herbes, carottes, roquette, poivrons, tomates & sauce du chef.',
        price: '45 DH',
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
      },
      {
        name: 'Bagel Poulet au Pesto',
        description: 'Poulet rôti, sauce pesto, roquette, salade, patate douce au four.',
        price: '70 DH',
      },
      {
        name: 'Bagel Veggie Délice',
        description: 'Légumes grillés, sauce pesto, roquette & mozzarella.',
        price: '65 DH',
      },
      {
        name: 'Bagel Kofta',
        description: 'Kofta grillée, sauce du chef, laitue, tomates confites, pickles rouges & patate douce au four.',
        price: '80 DH',
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
      { name: 'Carrot Cake au Fromage Blanc & Noix', description: '', price: '30 DH' },
      { name: 'Brownies au Amlou', description: '', price: '30 DH' },
      { name: 'Cake au Citron', description: '', price: '30 DH' },
      { name: 'Cinnamon Rolls', description: '', price: '30 DH' },
      { name: 'Tarte aux Fruits de Saison', description: '', price: '30 DH' },
      { name: 'Cookies', description: '', price: '30 DH' },
      { name: 'Scones', description: '', price: '30 DH' },
    ],
  },
  {
    name: 'Cafés',
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
    items: [
      { name: 'Jus d’Oranges', description: '', price: '25 DH' },
      { name: 'Jus de Pommes & Cannelle', description: '', price: '25 DH' },
      { name: 'Thé Green Glow', description: 'Concombre, pomme, épinards, citron', price: '30 DH' },
      { name: 'Bissap aux Fruits Tropicaux', description: '', price: '30 DH' },
      { name: 'Jus de Citron & Menthe', description: '', price: '25 DH' },
      { name: 'Jus de Carottes', description: '', price: '30 DH' },
      { name: 'Jus à la Betterave & Orange', description: '', price: '25 DH' },
      { name: 'Eau Minérale 33 CL', description: '', price: '15 DH' },
    ],
  },
];

export const carteNote =
  'Carte transcrite depuis le menu physique du café (2 pages photographiées) — à repasser une fois que de vraies photos des plats seront disponibles pour cette page.';
