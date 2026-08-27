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
      'Zayna est ouvert tous les jours de 08:00 à 21:00. Les horaires peuvent varier lors des fêtes religieuses (ex. Mawlid an-Nabi) — nous vous invitons à confirmer par téléphone avant de vous déplacer un jour férié.',
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

export const faqEn: FaqItem[] = [
  {
    question: 'Where is Zayna Coffee Shop located?',
    answer:
      'Zayna Coffee Shop is located at 12 Rue Jabli, Rabat 10000, Morocco — about a 7-minute drive or a 13-minute walk from the city center.',
  },
  {
    question: 'What are the opening hours?',
    answer:
      'Zayna is open every day from 08:00 to 21:00. Hours may vary on religious holidays (e.g. Mawlid an-Nabi) — we recommend calling ahead before visiting on a public holiday.',
  },
  {
    question: 'Do you offer vegan options?',
    answer: 'Yes, Zayna offers vegan options on the menu, alongside Moroccan classics (mint tea, msemen, etc.).',
  },
  {
    question: 'Is there a terrace or outdoor seating?',
    answer: 'Yes, Zayna has an outdoor terrace to enjoy your coffee in the open air.',
  },
  {
    question: 'Can I book the private room?',
    answer:
      'Zayna has a private room, ideal for a meeting or a small gathering. Contact us by phone to check availability.',
  },
  {
    question: 'What is the average budget for a visit to Zayna?',
    answer: 'The average budget reported by customers is MAD 50 to 100 per person.',
  },
  {
    question: 'How can I contact Zayna Coffee Shop?',
    answer: 'By phone at 06 15 81 06 80, or via the form on the Contact page.',
  },
];

export const faqAr: FaqItem[] = [
  {
    question: 'أين يقع Zayna Coffee Shop؟',
    answer: 'يقع Zayna Coffee Shop في 12 Rue Jabli، الرباط 10000، المغرب — على بعد حوالي 7 دقائق بالسيارة أو 13 دقيقة سيرًا على الأقدام من وسط المدينة.',
  },
  {
    question: 'ما هي ساعات العمل؟',
    answer:
      'يفتح Zayna أبوابه يوميًا من الساعة 08:00 إلى 21:00. قد تتغير المواعيد في المناسبات الدينية (مثل المولد النبوي) — يُستحسن الاتصال هاتفيًا قبل الزيارة في يوم عطلة.',
  },
  {
    question: 'هل تقدمون خيارات نباتية؟',
    answer: 'نعم، يقدم Zayna خيارات نباتية ضمن القائمة، إلى جانب الكلاسيكيات المغربية (أتاي بالنعناع، مسمن، إلخ).',
  },
  {
    question: 'هل يوجد تراس أو جلسة خارجية؟',
    answer: 'نعم، يتوفر Zayna على تراس خارجي للاستمتاع بالقهوة في الهواء الطلق.',
  },
  {
    question: 'هل يمكن حجز القاعة الخاصة؟',
    answer: 'يتوفر Zayna على قاعة خاصة، مثالية لموعد عمل أو لقاء صغير. تواصلوا معنا هاتفيًا للتحقق من التوفر.',
  },
  {
    question: 'ما هي الميزانية المتوسطة للزيارة؟',
    answer: 'الميزانية المتوسطة حسب آراء العملاء تتراوح بين 50 و100 درهم للشخص.',
  },
  {
    question: 'كيف يمكن التواصل مع Zayna Coffee Shop؟',
    answer: 'عبر الهاتف على الرقم 06 15 81 06 80، أو عبر نموذج صفحة الاتصال.',
  },
];
