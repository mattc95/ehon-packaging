import { getCollection } from "astro:content";
import { site } from "../../lib/site";
import { products } from "../../lib/products";
import { customPages, capabilityPages, aboutPages } from "../../lib/company";
import { faqs } from "../data/faq";

export async function buildLlmsText() {
  const models = await getCollection("products", ({ data }) => !data.draft);
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const url = (path: string) => new URL(path, site.url).toString();
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.legalName} manufactures custom cosmetic packaging in Shantou, Guangdong, China. Founded in ${site.founded}. Factory area 40,000㎡+. More than 1,000 packaging designs. ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018. 14 patents. 8 trademarks.`,
    "",
    `Site: ${site.url}`,
    `Email: ${site.email}`,
    `Phone: ${site.phone}`,
    `WhatsApp: ${site.whatsappDisplay}`,
    `WeChat: ${site.wechatId}`,
    `Line: ${site.lineId}`,
    `Address: ${site.address.full}`,
    "",
    "## Categories",
    "",
    ...products.map((item) => `- [${item.navLabel}](${url(item.path)}): ${item.description}`),
    "",
    "## Product details",
    "",
    ...models
      .sort((a, b) => a.data.title.localeCompare(b.data.title))
      .map((item) => `- [${item.data.title}](${url(`/products/${item.data.category}/${item.id}`)}): ${item.data.description}`),
    "",
    "## Custom packaging, factory and trust",
    "",
    ...[...customPages, ...capabilityPages, ...aboutPages].map((item) => `- [${item.navLabel}](${url(item.path)}): ${item.description}`),
    "",
    "## Resources",
    "",
    ...posts
      .sort((a, b) => a.data.title.localeCompare(b.data.title))
      .map((post) => {
        const base = post.data.section === "guide" ? "/resources/packaging-guide" : post.data.section === "exhibition" ? "/news/exhibitions" : "/resources/blog";
        return `- [${post.data.title}](${url(`${base}/${post.id}`)}): ${post.data.description}`;
      }),
    `- [FAQ](${url("/resources/faq")}): Buyer questions about OEM, certificates, materials and contact.`,
    `- [Request a Quote](${url("/contact/request-a-quote")}): Send a packaging brief.`,
    "",
    "## Frequently asked questions",
    "",
    ...faqs.flatMap((faq) => [`### ${faq.question}`, "", faq.answer, ""]),
  ];
  return lines.join("\n");
}

export async function GET() {
  return new Response(await buildLlmsText(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
