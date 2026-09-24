import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { barePath, hreflangLinks } from "./lib/i18n.ts";

const origin = "https://www.ehonpackaging.com";

export default defineConfig({
  site: origin,
  output: "static",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/admin") && !page.includes("/404"),
      serialize(item) {
        const path = new URL(item.url).pathname;
        const bare = barePath(path);
        const parts = bare.split("/").filter(Boolean);
        let priority = 0.6;
        if (bare === "/") priority = 1;
        else if (parts[0] === "products" && parts.length === 2) priority = 0.8;
        else if (parts[0] === "products" && parts.length >= 3) priority = 0.7;
        else if (["products", "contact", "resources"].includes(parts[0] || "") && parts.length <= 2) priority = 0.9;
        item.lastmod = new Date().toISOString().slice(0, 10);
        item.changefreq = parts[0] === "resources" || parts[0] === "news" ? "weekly" : "monthly";
        item.priority = priority;
        item.links = hreflangLinks(bare, origin).map((link) => ({ lang: link.hreflang, url: link.href }));
        return item;
      },
    }),
  ],
  trailingSlash: "never",
});
