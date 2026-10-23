import type { MetadataRoute } from 'next';
import prisma, { isDatabaseConfigured } from '@/lib/prisma';
import { PROPERTIES } from '@/data/properties';
import { BLOG_POSTS } from '@/data/blogs';
import { SITE_URL } from '@/lib/seo';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date();

  // 1. Core Static Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/properties`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/why-choose-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/sell-property`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
  ];

  // 2. Dynamic Property Pages
  let propertyRoutes: MetadataRoute.Sitemap = [];
  if (isDatabaseConfigured()) {
    try {
      const dbProperties = await prisma.property.findMany({
        where: { published: true },
        select: { slug: true, updatedAt: true },
      });

      if (dbProperties && dbProperties.length > 0) {
        propertyRoutes = dbProperties.map((p) => ({
          url: `${SITE_URL}/properties/${p.slug}`,
          lastModified: p.updatedAt || currentDate,
          changeFrequency: 'weekly',
          priority: 0.9,
        }));
      }
    } catch (err) {
      console.warn('Sitemap DB properties lookup fallback:', err);
    }
  }

  // Fallback to curated property slugs
  if (propertyRoutes.length === 0) {
    propertyRoutes = PROPERTIES.map((p) => ({
      url: `${SITE_URL}/properties/${p.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    }));
  }

  // 3. Dynamic Blog Post Pages
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((b) => ({
    url: `${SITE_URL}/blog/${b.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...propertyRoutes, ...blogRoutes];
}
