import type { Locale } from "../../lib/i18n";
import { ui as enUi, faqs as enFaqs } from "./en";
import type { ArticleCopy, Catalog, FaqCopy, ModelCopy, PageCopy, UiCopy } from "./types";
import { es } from "./es";
import { ptBr } from "./pt-br";
import { ja } from "./ja";
import { de } from "./de";
import { zh } from "./zh";
import { ko } from "./ko";
import { it } from "./it";
import { ru } from "./ru";
import { tr } from "./tr";

const catalogs: Record<Exclude<Locale, "en">, Catalog> = {
  zh,
  es,
  "pt-br": ptBr,
  ja,
  de,
  ko,
  it,
  ru,
  tr,
};

export function getUi(locale: Locale): UiCopy {
  return locale === "en" ? enUi : catalogs[locale].ui;
}

export function getFaqs(locale: Locale): FaqCopy[] {
  return locale === "en" ? enFaqs : catalogs[locale].faqs;
}

export function getPageCopy(locale: Locale, slug: string): PageCopy | undefined {
  if (locale === "en") return undefined;
  return catalogs[locale].pages[slug];
}

export function getModelCopy(locale: Locale, id: string): ModelCopy | undefined {
  if (locale === "en") return undefined;
  return catalogs[locale].models[id];
}

export function getArticleCopy(locale: Locale, id: string): ArticleCopy | undefined {
  if (locale === "en") return undefined;
  return catalogs[locale].articles[id];
}
