import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getPublishedArticles } from "@/data/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getPublishedArticles().map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: article.publicationDate
      ? new Date(article.publicationDate)
      : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...articles,
  ];
}
