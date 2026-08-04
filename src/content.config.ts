import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // 用于 <h1> 与卡片标题，可与 SEO title 不同
    heading: z.string().optional(),
    category: z.enum(['boss', 'enemies', 'exploration', 'combat', 'beginner']),
    // 首选关键词，仅用于内部标注
    keyword: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    publishDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    order: z.number().default(50),
    featured: z.boolean().default(false),
    // 发售前预测内容标记：游戏已于 2026-08-04 发售，未按实机重写的旧攻略仍需标注
    preview: z.boolean().default(false),
    // 内容来源可信度标签，用于卡片/详情页徽章
    source: z
      .enum(['official', 'handson', 'trailer', 'analysis', 'lore', 'speculation'])
      .default('speculation'),
  }),
});

export const collections = { guides };
