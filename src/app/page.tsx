import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustSignals from "@/components/sections/TrustSignals";
import IntegratedSolutions from "@/components/sections/IntegratedSolutions";
import Process from "@/components/sections/Process";
import Cases from "@/components/sections/Cases";
import MaginExplains from "@/components/sections/MaginExplains";
import Contact from "@/components/sections/Contact";
import { ORG_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${ORG_NAME} | Comunicación, contenidos y tecnología`,
  },
  description:
    "MAGÍN S.R.L. integra comunicación, contenidos y tecnología para desarrollar soluciones orientadas a proyectos y necesidades de organizaciones.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: `${ORG_NAME} | Comunicación, contenidos y tecnología`,
    description:
      "MAGÍN S.R.L. integra comunicación, contenidos y tecnología para desarrollar soluciones orientadas a proyectos y necesidades de organizaciones.",
    url: `${SITE_URL}/`,
    type: "website",
    locale: "es_BO",
    siteName: ORG_NAME,
    images: [
      {
        url: "/brand/magin-logo.png",
        alt: "Logotipo institucional de MAGÍN S.R.L.",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido-principal">
        <Hero />
        <TrustSignals />
        <IntegratedSolutions />
        <Cases />
        <Process />
        <MaginExplains />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
