import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    summary: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    draft: z.boolean().default(false),
    specs: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.enum(["insights", "guide", "exhibition"]),
    date: z.union([z.string(), z.date()]).transform((value) =>
      value instanceof Date ? value.toISOString().slice(0, 10) : value
    ),
    image: z.string(),
    imageAlt: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { products, blog };
