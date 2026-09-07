import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogArticleView from "@/components/blog/BlogArticleView";
import {
  getArticleBySlug,
  getPublishedArticles,
} from "@/data/blog";
import { SITE_URL } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedArticles().map((article) => ({
    slug: article.slug as string,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return { title: { absolute: "Artículo no encontrado | MAGÍN S.R.L." } };
  }

  const title = article.metaTitle ?? `${article.title} | MAGÍN`;
  const description = article.metaDescription ?? article.excerpt;
  const url = `${SITE_URL}/blog/${article.slug}`;
  const ogImage = article.coverImage
    ? {
        url: article.coverImage,
        width: article.coverWidth ?? 1280,
        height: article.coverHeight ?? 720,
        alt: article.coverAlt ?? article.title,
      }
    : {
        url: "/brand/magin-logo.png",
        alt: "Logotipo de MAGÍN S.R.L.",
      };

  return {
    title: { absolute: title },
    description,
    keywords: [
      article.primaryKeyword,
      ...(article.secondaryKeywords ?? []),
    ].filter(Boolean) as string[],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      locale: "es_BO",
      siteName: "MAGÍN S.R.L.",
      publishedTime: article.publicationDate,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <Header />
      <main id="contenido-principal">
        <BlogArticleView article={article} />
      </main>
      <Footer />
    </>
  );
}
