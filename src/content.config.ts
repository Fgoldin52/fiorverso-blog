import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The blog collection. Astro 6 uses the glob loader to pull Markdown
// from src/content/blog. The schema below enforces consistent, SEO/GEO-ready
// frontmatter on every post so nothing ships without the fields search
// engines and LLMs care about.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    // Core
    title: z.string(),
    description: z.string(), // becomes the meta description + OG description
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    // Audience framing — your "buyer-facing vs designer-facing" distinction.
    // Tag posts so you can keep the two angles organized.
    audience: z.enum(['buyer', 'designer']).default('buyer'),

    // Local SEO — the vertical + place this post targets.
    industry: z.string().optional(), // e.g. "restaurants", "dentists"
    location: z.string().default('Baltimore'),

    // GEO / answer-engine optimization. A short, direct, quotable answer
    // to the post's core question. Rendered into a callout AND into
    // structured data so LLMs and Google can lift it cleanly.
    keyTakeaway: z.string().optional(),

    // The question this post directly answers (powers FAQ structured data).
    faqQuestion: z.string().optional(),

    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),

    // Optional social/OG image path (relative to /public)
    image: z.string().optional(),
  }),
});

export const collections = { blog };
