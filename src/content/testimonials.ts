// Reviews page content + Review structured data.
//
// IMPORTANT: the 4.9/235 aggregate score is real (from the Google Business
// listing), but the individual quotes below are PLACEHOLDER text written to
// match that rating and Zayna's amenities (terrace, private room, vegan
// options) — they are NOT real customer quotes. Replace them with actual
// Google review text (with permission) before launch, or remove this page's
// quote cards and keep only the aggregate-rating block.

export type Testimonial = {
  author: string;
  rating: number;
  text: string;
  placeholder: true;
};

export const testimonials: Testimonial[] = [
  {
    author: 'Client Google (exemple)',
    rating: 5,
    text: 'Ambiance chaleureuse et terrasse agréable — exactement le genre de café où on prend le temps. À remplacer par un vrai avis.',
    placeholder: true,
  },
  {
    author: 'Client Google (exemple)',
    rating: 5,
    text: 'Belle découverte à Rabat, le service est attentionné et il y a de bonnes options véganes. À remplacer par un vrai avis.',
    placeholder: true,
  },
  {
    author: 'Client Google (exemple)',
    rating: 5,
    text: "La salle privée est parfaite pour un rendez-vous ou une petite réunion. À remplacer par un vrai avis.",
    placeholder: true,
  },
];
