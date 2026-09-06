import Link from "next/link";

export default function MaginExplains() {
  return (
    <section id="explica" className="magin-explains">
      <div className="magin-explains__inner">
        <p className="magin-explains__eyebrow">MAGÍN Explica</p>
        <h2 className="magin-explains__title">Artículos, noticias y contenidos</h2>
        <p className="magin-explains__text">
          Ideas claras sobre comunicación, diseño y tecnología para
          organizaciones.
        </p>
        <Link href="/blog" className="btn-primary">
          Ir al blog
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
