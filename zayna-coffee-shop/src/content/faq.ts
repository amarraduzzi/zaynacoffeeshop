// FAQ page content + FAQPage structured data.
// Answers are drafted from confirmed listing data (address, hours, price
// range, amenities) plus reasonable defaults for a Rabat coffee shop —
// review and adjust wording once the owner confirms details (esp. hours,
// reservations, parking, payment methods).

export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: 'Où se trouve Zayna Coffee Shop ?',
    answer:
      "Zayna Coffee Shop se trouve au 12 Rue Jabli, Rabat 10000, Maroc — à environ 7 minutes en voiture ou 13 minutes à pied du centre-ville.",
  },
  {
    question: 'Quels sont les horaires d’ouverture ?',
    answer:
      'Le café ferme à 21:00. Les horaires peuvent varier lors des fêtes religieuses (ex. Mawlid an-Nabi) — nous vous invitons à confirmer par téléphone avant de vous déplacer un jour férié.',
  },
  {
    question: 'Proposez-vous des options véganes ?',
    answer:
      'Oui, Zayna propose des options véganes à la carte, en plus des classiques marocains (thé à la menthe, msemen, etc.).',
  },
  {
    question: 'Y a-t-il une terrasse ou un espace extérieur ?',
    answer: 'Oui, Zayna dispose d’une terrasse extérieure pour profiter du café en plein air.',
  },
  {
    question: 'Peut-on réserver une salle privée ?',
    answer:
      'Zayna dispose d’une salle privée, idéale pour un rendez-vous ou une petite réunion. Contactez-nous par téléphone pour vérifier la disponibilité.',
  },
  {
    question: 'Quel est le budget moyen pour un passage chez Zayna ?',
    answer:
      'Le budget moyen constaté est de MAD 50 à 100 par personne, selon les avis clients.',
  },
  {
    question: 'Comment contacter Zayna Coffee Shop ?',
    answer: 'Par téléphone au 06 15 81 06 80, ou via le formulaire de la page Contact.',
  },
];
