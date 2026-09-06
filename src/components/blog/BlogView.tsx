import Link from "next/link";
import type { ReactNode } from "react";
import {
  getFeaturedPost,
  postsBySection,
  type BlogPost,
} from "@/data/blog";

function Cover({ tone, className = "" }: { tone: BlogPost["cover"]; className?: string }) {
  return (
    <div
      className={`blog-cover blog-cover--${tone} ${className}`.trim()}
      aria-hidden="true"
    />
  );
}

function SectionTitle({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <div className="blog-section-title" id={id}>
      <h2>{children}</h2>
      <span className="blog-section-title__line" aria-hidden="true" />
    </div>
  );
}

function PostCard({
  post,
  variant = "grid",
}: {
  post: BlogPost;
  variant?: "grid" | "row" | "feature" | "list";
}) {
  return (
    <article className={`blog-card blog-card--${variant}`}>
      <Cover tone={post.cover} className="blog-card__cover" />
      <div className="blog-card__body">
        <p className="blog-card__meta">{post.dateLabel}</p>
        <h3 className="blog-card__title">{post.title}</h3>
        {variant !== "list" && variant !== "row" ? (
          <p className="blog-card__excerpt">{post.excerpt}</p>
        ) : null}
        {variant === "row" ? (
          <p className="blog-card__excerpt blog-card__excerpt--compact">
            {post.excerpt}
          </p>
        ) : null}
      </div>
    </article>
  );
}

export default function BlogView() {
  const featured = getFeaturedPost();
  const articulos = postsBySection("articulos");
  const noticias = postsBySection("noticias");
  const contenidos = postsBySection("contenidos");
  const related = articulos.filter((p) => p.id !== featured.id).slice(0, 3);
  const articuloPrincipal = articulos[1] ?? articulos[0];
  const articulosGrid = articulos.filter((p) => p.id !== articuloPrincipal?.id).slice(0, 3);

  return (
    <div className="blog-page">
      <div className="blog-page__inner">
        <header className="blog-masthead">
          <p className="blog-masthead__kicker">MAGÍN Explica</p>
          <h1 className="blog-masthead__title">Blog</h1>
          <p className="blog-masthead__note">
            Estructura editorial de demostración. Los contenidos definitivos se
            publicarán cuando estén verificados y aprobados.
          </p>
        </header>

        <nav className="blog-tabs" aria-label="Secciones del blog">
          <a href="#articulos">Artículos</a>
          <a href="#noticias">Noticias</a>
          <a href="#contenidos">Contenidos</a>
        </nav>

        <section className="blog-hero" aria-labelledby="blog-featured-title">
          <Cover tone={featured.cover} className="blog-hero__cover" />
          <h2 id="blog-featured-title" className="blog-hero__title">
            {featured.title}
          </h2>
          <p className="blog-hero__excerpt">{featured.excerpt}</p>
        </section>

        <div className="blog-related">
          {related.map((post) => (
            <PostCard key={post.id} post={post} variant="row" />
          ))}
        </div>

        <div className="blog-layout">
          <div className="blog-layout__main">
            <SectionTitle id="articulos">Artículos</SectionTitle>

            {articuloPrincipal ? (
              <article className="blog-feature-block">
                <Cover
                  tone={articuloPrincipal.cover}
                  className="blog-feature-block__cover"
                />
                <h3 className="blog-feature-block__title">
                  {articuloPrincipal.title}
                </h3>
                <p className="blog-feature-block__meta">
                  {articuloPrincipal.dateLabel}
                </p>
                <p className="blog-feature-block__excerpt">
                  {articuloPrincipal.excerpt}
                </p>
              </article>
            ) : null}

            <div className="blog-grid">
              {articulosGrid.map((post) => (
                <PostCard key={post.id} post={post} variant="grid" />
              ))}
            </div>

            <SectionTitle id="noticias">Noticias</SectionTitle>
            <div className="blog-grid blog-grid--news">
              {noticias.map((post) => (
                <PostCard key={post.id} post={post} variant="grid" />
              ))}
            </div>
          </div>

          <aside className="blog-layout__side" aria-labelledby="contenidos">
            <SectionTitle id="contenidos">Contenidos</SectionTitle>
            <div className="blog-side-list">
              {contenidos.map((post) => (
                <PostCard key={post.id} post={post} variant="list" />
              ))}
            </div>

            <div className="blog-side-cta">
              <p>¿Quieres conversar sobre un proyecto?</p>
              <Link href="/#contacto" className="btn-primary">
                Hablemos de tu proyecto
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
