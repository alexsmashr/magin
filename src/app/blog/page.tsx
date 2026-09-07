import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogView from "@/components/blog/BlogView";
import { ORG_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos, noticias y contenidos de MAGÍN S.R.L. sobre comunicación, contenidos y tecnología para organizaciones.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: `Blog | ${ORG_NAME}`,
    description:
      "Artículos, noticias y contenidos sobre comunicación y tecnología para organizaciones.",
    url: `${SITE_URL}/blog`,
    type: "website",
    locale: "es_BO",
    siteName: ORG_NAME,
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="contenido-principal">
        <BlogView />
      </main>
      <Footer />
    </>
  );
}
