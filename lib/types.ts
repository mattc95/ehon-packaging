export type Faq = { question: string; answer: string };

export type Card = { title: string; text: string; href?: string };

export type Spec = { label: string; value: string };

export type SeoPage = {
  slug: string;
  path: string;
  navLabel: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  lead: string;
  answer: string;
  image: string;
  imageAlt: string;
  highlights: Card[];
  specs?: Spec[];
  body: { heading: string; paragraphs: string[] }[];
  faqs: Faq[];
  related: { href: string; label: string; text: string }[];
};

export type Article = {
  slug: string;
  path: string;
  kind: "blog" | "guide" | "exhibition";
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  date: string;
  image: string;
  imageAlt: string;
  lead: string;
  sections: { heading: string; paragraphs: string[] }[];
  faqs: Faq[];
};
