import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.ehonpackaging.com",
  output: "static",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/admin") && !page.includes("/404"),
      serialize(item) {
        const path = new URL(item.url).pathname;
        const parts = path.split("/").filter(Boolean);
        let priority = 0.6;
        if (path === "/") priority = 1;
        else if (["products", "contact", "resources"].includes(parts[0] || "") && parts.length <= 2) priority = 0.9;
        else if (parts[0] === "products" && parts.length === 2) priority = 0.8;
        else if (parts[0] === "products" && parts.length === 3) priority = 0.7;
        item.lastmod = new Date().toISOString().slice(0, 10);
        item.changefreq = parts[0] === "resources" || parts[0] === "news" ? "weekly" : "monthly";
        item.priority = priority;
        return item;
      },
    }),
  ],
  trailingSlash: "never",
});
