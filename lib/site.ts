export const site = {
  name: "EHON Packaging",
  legalName: "Guangdong EHON Technology Co., Ltd.",
  url: "https://www.ehonpackaging.com",
  description:
    "EHON Packaging is a cosmetic packaging manufacturer founded in 1992 in Shantou, China, providing custom design, molding, decoration and quality control for global beauty brands.",
  email: "yh@styihong.com",
  phone: "+86-754-88608623",
  phoneHref: "tel:+8675488608623",
  whatsappE164: "8613502978512",
  whatsappDisplay: "+86 135 0297 8512",
  wechatId: "13502978512",
  lineId: "ehonpackaging",
  address: {
    street: "EHON Industrial Zone, No.2 ZhuJinYiHeng Road, ZhuJin Industrial Park",
    district: "LongHu District",
    locality: "Shantou",
    region: "Guangdong",
    country: "CN",
    full: "EHON Industrial Zone, No.2 ZhuJinYiHeng Road, LongHu District, Shantou, Guangdong, China",
  },
  founded: "1992",
  logo: "/assets/logo.png",
  ogImage: "/assets/hero-series.jpg",
} as const;

export function whatsappHref(text?: string) {
  const base = `https://wa.me/${site.whatsappE164}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function lineHref() {
  return `https://line.me/R/ti/p/@${site.lineId}`;
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "Manufacturer"],
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  logo: `${site.url}${site.logo}`,
  image: `${site.url}${site.ogImage}`,
  foundingDate: site.founded,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  brand: { "@type": "Brand", name: site.name },
  areaServed: "Worldwide",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.phone,
      email: site.email,
      contactType: "sales",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Chinese", "Spanish", "Portuguese", "Japanese", "German"],
    },
  ],
  knowsAbout: [
    "cosmetic packaging",
    "lipstick packaging",
    "mascara packaging",
    "custom OEM ODM packaging",
    "sustainable cosmetic packaging",
  ],
};
