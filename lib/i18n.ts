export const localeIds = ["en", "zh", "es", "pt-br", "ja", "de"] as const;
export type Locale = (typeof localeIds)[number];
export const translatedLocaleIds = ["zh", "es", "pt-br", "ja", "de"] as const;
export type TranslatedLocale = (typeof translatedLocaleIds)[number];

export type LocaleMeta = {
  id: Locale;
  /** BCP 47 language used on <html lang> and inLanguage. */
  htmlLang: string;
  /** Open Graph locale. */
  ogLocale: string;
  /** URL prefix. English stays unprefixed so existing URLs do not move. */
  prefix: string;
  /** hreflang codes that should point at this URL. x-default is added separately for English. */
  hreflang: string[];
  label: string;
  short: string;
  switcher: string;
};

export const locales: Record<Locale, LocaleMeta> = {
  en: {
    id: "en",
    htmlLang: "en",
    ogLocale: "en_US",
    prefix: "",
    hreflang: ["en"],
    label: "English",
    short: "EN",
    switcher: "EN · Global",
  },
  zh: {
    id: "zh",
    htmlLang: "zh-CN",
    ogLocale: "zh_CN",
    prefix: "/zh",
    hreflang: ["zh-CN", "zh-Hans"],
    label: "中文",
    short: "中文",
    switcher: "中文 · 简体",
  },
  es: {
    id: "es",
    htmlLang: "es",
    ogLocale: "es_ES",
    prefix: "/es",
    hreflang: ["es", "es-ES", "es-MX", "es-AR", "es-CO", "es-CL", "es-PE"],
    label: "Español",
    short: "ES",
    switcher: "ES · España y Latinoamérica",
  },
  "pt-br": {
    id: "pt-br",
    htmlLang: "pt-BR",
    ogLocale: "pt_BR",
    prefix: "/pt-br",
    hreflang: ["pt-BR"],
    label: "Português",
    short: "PT",
    switcher: "PT · Brasil",
  },
  ja: {
    id: "ja",
    htmlLang: "ja",
    ogLocale: "ja_JP",
    prefix: "/ja",
    hreflang: ["ja"],
    label: "日本語",
    short: "JA",
    switcher: "JA · 日本",
  },
  de: {
    id: "de",
    htmlLang: "de",
    ogLocale: "de_DE",
    prefix: "/de",
    hreflang: ["de", "de-DE", "de-AT", "de-CH"],
    label: "Deutsch",
    short: "DE",
    switcher: "DE · Deutschland, Österreich, Schweiz",
  },
};

const prefixed = translatedLocaleIds.map((id) => locales[id].prefix.slice(1));

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (localeIds as readonly string[]).includes(value);
}

export function isTranslatedLocale(value: string | undefined): value is TranslatedLocale {
  return !!value && (translatedLocaleIds as readonly string[]).includes(value);
}

/** Strip a locale prefix and return the English-equivalent path, always starting with /. */
export function barePath(pathname: string): string {
  const path = pathname.split("?")[0] || "/";
  const parts = path.split("/").filter(Boolean);
  if (parts.length && (prefixed as readonly string[]).includes(parts[0])) {
    const rest = parts.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return path.startsWith("/") ? path : `/${path}`;
}

export function localizePath(path: string, locale: Locale): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  const bare = barePath(path);
  const prefix = locales[locale].prefix;
  if (bare === "/") return prefix || "/";
  return `${prefix}${bare}`;
}

export function absoluteUrl(path: string, origin: string): string {
  return new URL(path, origin).toString();
}

export type HreflangLink = { hreflang: string; href: string };

/** Reciprocal alternates for one bare path, including x-default on the English URL. */
export function hreflangLinks(bare: string, origin: string): HreflangLink[] {
  const links: HreflangLink[] = [];
  for (const id of localeIds) {
    const href = absoluteUrl(localizePath(bare, id), origin);
    for (const code of locales[id].hreflang) links.push({ hreflang: code, href });
  }
  links.push({ hreflang: "x-default", href: absoluteUrl(localizePath(bare, "en"), origin) });
  return links;
}

export const inLanguageName: Record<Locale, string> = {
  en: "English",
  zh: "Chinese",
  es: "Spanish",
  "pt-br": "Portuguese",
  ja: "Japanese",
  de: "German",
};
