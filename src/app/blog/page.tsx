import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogView from "@/components/blog/BlogView";

export const metadata: Metadata = {
  title: "Blog | MAGÍN",
  description:
    "Artículos, noticias y contenidos de MAGÍN sobre comunicación y tecnología para organizaciones.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <BlogView />
      </main>
      <Footer />
    </>
  );
}
