import { site } from "../../lib/site";
import { locales, type Locale } from "../../lib/i18n";

function langOf(locale: Locale = "en") {
  return locales[locale].htmlLang;
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, site.url).toString(),
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function webPageJsonLd(title: string, description: string, path: string, locale: Locale = "en") {
  const url = new URL(path, site.url).toString();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    inLanguage: langOf(locale),
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
    about: { "@type": "Organization", name: site.legalName, url: site.url },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".lead", ".answer", ".sub"] },
  };
}

export function websiteJsonLd(locale: Locale = "en", description = site.description) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description,
    publisher: { "@type": "Organization", name: site.legalName, url: site.url },
    inLanguage: langOf(locale),
  };
}

export function productJsonLd(input: { name: string; description: string; path: string; image: string; category: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: input.name,
    description: input.description,
    url: new URL(input.path, site.url).toString(),
    image: new URL(input.image, site.url).toString(),
    category: input.category,
    brand: { "@type": "Brand", name: site.name },
    manufacturer: { "@type": "Organization", name: site.legalName, url: site.url },
  };
}

export function articleJsonLd(input: { title: string; description: string; path: string; image: string; date: string; locale?: Locale }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.date,
    dateModified: input.date,
    image: new URL(input.image, site.url).toString(),
    inLanguage: langOf(input.locale),
    author: { "@type": "Organization", name: site.legalName, url: site.url },
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
      logo: { "@type": "ImageObject", url: new URL(site.logo, site.url).toString() },
    },
    mainEntityOfPage: new URL(input.path, site.url).toString(),
  };
}

export function contactPageJsonLd(locale: Locale = "en", name = "Request a Quote", description = "Request a cosmetic packaging quotation from EHON Packaging.", path = "/contact/request-a-quote") {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name,
    url: new URL(path, site.url).toString(),
    description,
    mainEntity: { "@type": "Organization", name: site.legalName, url: site.url, email: site.email, telephone: site.phone },
  };
}

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: new URL(path, site.url).toString(),
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
    areaServed: "Worldwide",
    serviceType: "Cosmetic packaging manufacturing",
  };
}
