import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Blog yazıları: src/content/blog/<dil>/<slug>.md
 * Aynı dosya adı iki dil klasöründe de varsa birbirinin çevirisi sayılır
 * ve dil değiştirici doğrudan o yazıya gider.
 */
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    /** true ise üretim build'inde gizlenir, `npm run dev` ile görünür */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
