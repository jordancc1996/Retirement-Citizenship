import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    hubTitle: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    category: z.string(),
    categoryLabel: z.string(),
    date: z.string(),
    displayDate: z.string(),
    readTime: z.string(),
    image: z.string(),
    cardImage: z.string().optional(),
    imageAlt: z.string(),
    excerpt: z.string(),
    featured: z.boolean().optional(),
    heroKicker: z.string().optional(),
    heroSubtitle: z.string().optional(),
    ogImage: z.string().optional(),
    relatedType: z.enum(['blog', 'analysis']).optional(),
    order: z.number(),
  }),
});

const faqs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    slug: z.string(),
    category: z.string().optional(),
    question: z.string(),
  }),
});

export const collections = { articles, faqs };
