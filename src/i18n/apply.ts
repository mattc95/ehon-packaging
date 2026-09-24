import type { SeoPage } from "../../lib/types";
import { localizePath, type Locale } from "../../lib/i18n";
import { getPageCopy } from "./index";

export function applyPage(page: SeoPage, locale: Locale): SeoPage {
  const copy = getPageCopy(locale, page.slug);
  const text = copy ?? {
    navLabel: page.navLabel,
    title: page.title,
    description: page.description,
    h1: page.h1,
    eyebrow: page.eyebrow,
    lead: page.lead,
    answer: page.answer,
    imageAlt: page.imageAlt,
    highlights: page.highlights,
    specs: page.specs,
    body: page.body,
    faqs: page.faqs,
    related: page.related.map((item) => ({ label: item.label, text: item.text })),
  };
  if (copy && copy.related.length !== page.related.length) {
    throw new Error(`Related count mismatch for ${locale} / ${page.slug}: ${copy.related.length} vs ${page.related.length}`);
  }
  if (copy?.specs && page.specs && copy.specs.length !== page.specs.length) {
    throw new Error(`Spec count mismatch for ${locale} / ${page.slug}`);
  }
  return {
    ...page,
    navLabel: text.navLabel,
    title: text.title,
    description: text.description,
    h1: text.h1,
    eyebrow: text.eyebrow,
    lead: text.lead,
    answer: text.answer,
    imageAlt: text.imageAlt,
    highlights: text.highlights,
    specs: text.specs,
    body: text.body,
    faqs: text.faqs,
    slug: page.slug,
    path: localizePath(page.path, locale),
    image: page.image,
    related: page.related.map((item, index) => ({
      href: localizePath(item.href, locale),
      label: text.related[index].label,
      text: text.related[index].text,
    })),
  };
}
