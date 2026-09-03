import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustSignals from "@/components/sections/TrustSignals";
import IntegratedSolutions from "@/components/sections/IntegratedSolutions";
import Process from "@/components/sections/Process";
import Cases from "@/components/sections/Cases";
import MaginExplains from "@/components/sections/MaginExplains";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustSignals />
        <IntegratedSolutions />
        <Process />
        <Cases />
        <MaginExplains />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
