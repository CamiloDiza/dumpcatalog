import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const modelos = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/modelos',
  }),

  schema: z.object({
    name: z.string(),
    slug: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    tags: z.array(z.string()),
    profileImage: z.string(),
    featured: z.boolean().default(false),
    shortPhrase: z.string().optional(),
    photos: z.array(z.string()).default([]),
    videos: z.array(z.string()).default([]),
  }),
});

export const collections = {
  modelos,
};