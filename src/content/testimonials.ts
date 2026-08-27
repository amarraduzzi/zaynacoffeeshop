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

export const testimonialsEn: Testimonial[] = [
  {
    author: 'Google customer (example)',
    rating: 5,
    text: 'Warm atmosphere and a lovely terrace — exactly the kind of café where you take your time. To be replaced with a real review.',
    placeholder: true,
  },
  {
    author: 'Google customer (example)',
    rating: 5,
    text: 'Great find in Rabat, attentive service and good vegan options. To be replaced with a real review.',
    placeholder: true,
  },
  {
    author: 'Google customer (example)',
    rating: 5,
    text: 'The private room is perfect for a meeting or a small get-together. To be replaced with a real review.',
    placeholder: true,
  },
];

export const testimonialsAr: Testimonial[] = [
  {
    author: 'عميل من Google (مثال)',
    rating: 5,
    text: 'أجواء دافئة وتراس رائع — بالضبط نوع المقهى الذي تأخذ فيه وقتك. سيُستبدل برأي حقيقي.',
    placeholder: true,
  },
  {
    author: 'عميل من Google (مثال)',
    rating: 5,
    text: 'اكتشاف رائع في الرباط، خدمة مهتمة وخيارات نباتية جيدة. سيُستبدل برأي حقيقي.',
    placeholder: true,
  },
  {
    author: 'عميل من Google (مثال)',
    rating: 5,
    text: 'القاعة الخاصة مثالية لموعد عمل أو لقاء صغير. سيُستبدل برأي حقيقي.',
    placeholder: true,
  },
];
