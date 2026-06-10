import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    phase: z.number(),
    week: z.number(),
    day: z.number().optional(),
    objectives: z.array(z.string()),
    estimatedTime: z.string(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    videoUrl: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { lessons };
