import Link from "next/link";
import type { ReactNode } from "react";
import {
  articleHref,
  formatPublicationLabel,
  getFeaturedPost,
  getPublishedArticles,
  isPublished,
  postsBySection,
  type BlogPost,
  type CoverTone,
} from "@/data/blog";

function CoverMedia({
  post,
  className = "",
}: {
  post: BlogPost;
  className?: string;
}) {
  if (post.coverImage) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={post.coverImage}
        alt={post.coverAlt ?? ""}
        width={post.coverWidth ?? 1280}
        height={post.coverHeight ?? 720}
        className={`blog-card__img ${className}`.trim()}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <div
      className={`blog-cover blog-cover--${post.coverTone as CoverTone} ${className}`.trim()}
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
  const href = articleHref(post);
  const published = isPublished(post);

  const card = (
    <article
      className={`blog-card blog-card--${variant}${published ? "" : " blog-card--draft"}`}
    >
      <CoverMedia post={post} className="blog-card__cover" />
      <div className="blog-card__body">
        <p className="blog-card__meta">
          <span>{post.category}</span>
          <span aria-hidden="true"> · </span>
          <span>
            {published
              ? formatPublicationLabel(post)
              : `${formatPublicationLabel(post)} · no publicado`}
          </span>
        </p>
        <h3 className="blog-card__title">{post.title}</h3>
        {variant !== "list" && variant !== "row" ? (
          <p className="blog-card__excerpt">{post.excerpt}</p>
        ) : null}
        {variant === "row" ? (
          <p className="blog-card__excerpt blog-card__excerpt--compact">
            {post.excerpt}
          </p>
        ) : null}
        {href ? (
          <span className="blog-card__more">Leer artículo →</span>
        ) : (
          <span className="blog-card__more blog-card__more--muted">
            Próximamente
          </span>
        )}
      </div>
    </article>
  );

  if (!href) return card;

  return (
    <Link href={href} className="blog-card-link">
      {card}
    </Link>
  );
}

export default function BlogView() {
  const featured = getFeaturedPost();
  const published = getPublishedArticles();
  const articulos = postsBySection("articulos");
  const noticias = postsBySection("noticias");
  const contenidos = postsBySection("contenidos");
  const related = articulos.filter((p) => p.id !== featured.id).slice(0, 3);
  const articuloPrincipal =
    published.find((p) => p.section === "articulos") ?? articulos[0];
  const articulosGrid = articulos
    .filter((p) => p.id !== articuloPrincipal?.id)
    .slice(0, 3);

  const featuredHref = articleHref(featured);

  return (
    <div className="blog-page">
      <div className="blog-page__inner">
        <header className="blog-masthead">
          <p className="blog-masthead__kicker">MAGÍN Explica</p>
          <h1 className="blog-masthead__title">Blog</h1>
          <p className="blog-masthead__note">
            Espacio editorial de MAGÍN S.R.L. Cada nota publicada abre en su
            propia URL permanente, con la misma plantilla: título, bajada,
            fototitular y cuerpo.
          </p>
        </header>

        <nav className="blog-tabs" aria-label="Secciones del blog">
          <a href="#articulos">Artículos</a>
          <a href="#noticias">Noticias</a>
          <a href="#contenidos">Contenidos</a>
        </nav>

        <section className="blog-hero" aria-labelledby="blog-featured-title">
          <CoverMedia post={featured} className="blog-hero__cover" />
          <p className="blog-hero__category">{featured.category}</p>
          <h2 id="blog-featured-title" className="blog-hero__title">
            {featuredHref ? (
              <Link href={featuredHref}>{featured.title}</Link>
            ) : (
              featured.title
            )}
          </h2>
          <p className="blog-hero__excerpt">{featured.excerpt}</p>
          <p className="blog-hero__meta">
            {featured.publicationDate ? (
              <time dateTime={featured.publicationDate}>
                {formatPublicationLabel(featured)}
              </time>
            ) : (
              formatPublicationLabel(featured)
            )}
          </p>
          {featuredHref ? (
            <p className="blog-hero__cta">
              <Link href={featuredHref}>Leer artículo completo →</Link>
            </p>
          ) : null}
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
              isPublished(articuloPrincipal) ? (
                <Link
                  href={`/blog/${articuloPrincipal.slug}`}
                  className="blog-card-link"
                >
                  <article className="blog-feature-block">
                    <CoverMedia
                      post={articuloPrincipal}
                      className="blog-feature-block__cover"
                    />
                    <p className="blog-feature-block__meta">
                      {articuloPrincipal.category} ·{" "}
                      {formatPublicationLabel(articuloPrincipal)}
                    </p>
                    <h3 className="blog-feature-block__title">
                      {articuloPrincipal.title}
                    </h3>
                    <p className="blog-feature-block__excerpt">
                      {articuloPrincipal.excerpt}
                    </p>
                    <span className="blog-card__more">Leer artículo →</span>
                  </article>
                </Link>
              ) : (
                <article className="blog-feature-block blog-card--draft">
                  <CoverMedia
                    post={articuloPrincipal}
                    className="blog-feature-block__cover"
                  />
                  <p className="blog-feature-block__meta">
                    {articuloPrincipal.category} · no publicado
                  </p>
                  <h3 className="blog-feature-block__title">
                    {articuloPrincipal.title}
                  </h3>
                  <p className="blog-feature-block__excerpt">
                    {articuloPrincipal.excerpt}
                  </p>
                </article>
              )
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
              <p className="blog-side-cta__links">
                <Link href="/#soluciones">Soluciones</Link>
                {" · "}
                <Link href="/#proceso">Cómo trabajamos</Link>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
