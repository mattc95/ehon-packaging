import catalogJson from "../src/data/catalog.json";
import { catalogText } from "./catalog-i18n";
import type { Locale } from "./i18n";

export { catalogText } from "./catalog-i18n";

export type CatalogItem = {
  id: string;
  slug: string;
  code: string;
  title: string;
  category: string;
  subcategory: string;
  size: string;
  craft: string;
  accessories: string;
  updatedAt: string;
  description: string;
  images: {
    list: string;
    main: string;
    extra: string[];
  };
};

export const catalog = catalogJson as CatalogItem[];

const bySlug = new Map(catalog.map((item) => [`${item.category}/${item.slug}`, item]));

export function getCatalogItem(category: string, slug: string) {
  return bySlug.get(`${category}/${slug}`);
}

export function catalogByCategory(category: string) {
  return catalog.filter((item) => item.category === category);
}

export function catalogCount(category: string) {
  return catalogByCategory(category).length;
}

export function relatedCatalog(item: CatalogItem, limit = 8) {
  return catalogByCategory(item.category)
    .filter((other) => other.id !== item.id)
    .slice(0, limit);
}

export function catalogGallery(item: CatalogItem) {
  const urls = [item.images.main, item.images.list, ...item.images.extra].filter(Boolean);
  return [...new Set(urls)];
}

export function catalogDisplayName(item: CatalogItem, locale: Locale = "en") {
  const title = catalogText(item.title, locale);
  return title && title !== item.code ? title : item.code || title;
}

const subcategoryCopy: Record<string, Record<string, string>> = {
  en: { "泵头": "Pumps", "粉扑": "Puffs", "刷子-1": "Brushes", "刷头": "Brush heads" },
  zh: { "泵头": "泵头", "粉扑": "粉扑", "刷子-1": "刷子", "刷头": "刷头" },
};

export function subcategoryLabel(value: string, locale: Locale) {
  return (subcategoryCopy[locale] || subcategoryCopy.en)[value] || subcategoryCopy.en[value] || value;
}

export function catalogSubcategories(category: string) {
  return [...new Set(catalogByCategory(category).map((item) => item.subcategory).filter(Boolean))];
}

export function catalogSearchText(item: CatalogItem, locale: Locale = "en") {
  return [
    item.code,
    item.title,
    catalogText(item.title, locale),
    item.size,
    item.subcategory,
    subcategoryLabel(item.subcategory, locale),
    item.accessories,
    catalogText(item.accessories, locale),
    catalogText(item.craft, locale),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export function catalogDescription(item: CatalogItem, locale: Locale) {
  const name = catalogDisplayName(item, locale);
  if (locale === "zh") {
    const size = item.size ? `，尺寸 ${item.size}` : "";
    return `${name}，亿宏现有模具型号${size}。颜色、Logo 与表面处理可按品牌要求打样确认。`;
  }
  const size = item.size ? ` Size ${item.size}.` : "";
  return `${name} from the EHON model library.${size} Color, logo and finishing can be sampled to the brand brief.`;
}
