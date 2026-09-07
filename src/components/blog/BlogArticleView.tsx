import Link from "next/link";
import type { BlogBlock, BlogPost, CoverTone } from "@/data/blog";
import {
  formatPublicationLabel,
  getRelatedArticles,
  isPublished,
} from "@/data/blog";
import { BlogPostingJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";

function ToneFallback({
  tone,
  className = "",
}: {
  tone: CoverTone;
  className?: string;
}) {
  return (
    <div
      className={`blog-cover blog-cover--${tone} ${className}`.trim()}
      aria-hidden="true"
    />
  );
}

function RelatedThumb({
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
        alt=""
        width={post.coverWidth ?? 640}
        height={post.coverHeight ?? 360}
        className={className}
        loading="lazy"
        decoding="async"
      />
    );
  }
  return <ToneFallback tone={post.coverTone} className={className} />;
}

function Block({ block }: { block: BlogBlock }) {
  if (block.type === "h2") {
    return <h2 className="blog-article__h2">{block.text}</h2>;
  }
  if (block.type === "h3") {
    return <h3 className="blog-article__h3">{block.text}</h3>;
  }
  if (block.type === "pLink") {
    return (
      <p className="blog-article__p">
        {block.before}
        <Link href={block.href} className="blog-article__link">
          {block.label}
        </Link>
        {block.after}
      </p>
    );
  }
  return <p className="blog-article__p">{block.text}</p>;
}

/** Relacionados horizontales (bajo el cuerpo). */
function RelatedHorizontal({ items }: { items: BlogPost[] }) {
  if (items.length === 0) return null;

  return (
    <section
      className="blog-related-h"
      aria-labelledby="related-horizontal-heading"
    >
      <div className="blog-related-h__head">
        <span className="blog-related-h__mark" aria-hidden="true">
          #
        </span>
        <h2 id="related-horizontal-heading" className="blog-related-h__title">
          También te puede interesar
        </h2>
      </div>
      <ul className="blog-related-h__grid">
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/blog/${item.slug}`} className="blog-related-h__card">
              <RelatedThumb post={item} className="blog-related-h__thumb" />
              <span className="blog-related-h__meta">
                {item.category}
                <span aria-hidden="true"> · </span>
                {formatPublicationLabel(item)}
              </span>
              <span className="blog-related-h__card-title">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Relacionados verticales (sidebar). */
function RelatedVertical({ items }: { items: BlogPost[] }) {
  if (items.length === 0) return null;

  return (
    <div className="blog-related-v">
      <p className="blog-related-v__kicker">Más notas</p>
      <ul className="blog-related-v__list">
        {items.map((item, index) => (
          <li key={item.id}>
            <Link href={`/blog/${item.slug}`} className="blog-related-v__item">
              <span className="blog-related-v__num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <RelatedThumb post={item} className="blog-related-v__thumb" />
              <span className="blog-related-v__body">
                <span className="blog-related-v__cat">{item.category}</span>
                <span className="blog-related-v__title">{item.title}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BlogArticleView({ article }: { article: BlogPost }) {
  const url = `${SITE_URL}/blog/${article.slug}`;
  const related = getRelatedArticles(article, 4);
  const relatedSide = related.slice(0, 4);
  const solution = article.relatedSolution;
  const coverSrc = article.coverImage;
  const coverW = article.coverWidth ?? 1280;
  const coverH = article.coverHeight ?? 720;

  return (
    <div className="blog-article-page">
      <BlogPostingJsonLd
        title={article.title}
        description={article.metaDescription ?? article.excerpt}
        url={url}
        datePublished={article.publicationDate}
        image={coverSrc ? `${SITE_URL}${coverSrc}` : undefined}
      />

      <div className="blog-article-layout">
        <article className="blog-article">
          <nav className="blog-article__crumbs" aria-label="Miga de pan">
            <Link href="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog">Blog</Link>
            <span aria-hidden="true">/</span>
            <span>{article.category}</span>
          </nav>

          <header className="blog-article__header">
            <p className="blog-article__category">{article.category}</p>
            <h1 className="blog-article__title">{article.title}</h1>
            <p className="blog-article__lead">{article.excerpt}</p>
            <p className="blog-article__meta">
              {article.publicationDate ? (
                <time dateTime={article.publicationDate}>
                  {formatPublicationLabel(article)}
                </time>
              ) : (
                <span>{formatPublicationLabel(article)}</span>
              )}
              {article.author ? (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{article.author}</span>
                </>
              ) : null}
            </p>
          </header>

          <figure className="blog-article__figure">
            {coverSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={coverSrc}
                alt={article.coverAlt ?? ""}
                width={coverW}
                height={coverH}
                className="blog-article__photo"
                decoding="async"
              />
            ) : (
              <ToneFallback
                tone={article.coverTone}
                className="blog-article__photo-fallback"
              />
            )}
            {article.imageCaption || article.imageCredit ? (
              <figcaption className="blog-article__figcaption">
                {article.imageCaption ? (
                  <span>{article.imageCaption}</span>
                ) : null}
                {article.imageCredit ? (
                  <span className="blog-article__credit">
                    {article.imageCredit}
                  </span>
                ) : null}
              </figcaption>
            ) : null}
          </figure>

          <section
            className="blog-article__body"
            aria-label="Contenido del artículo"
          >
            {(article.content ?? []).map((block, index) => (
              <Block key={`${block.type}-${index}`} block={block} />
            ))}
          </section>

          {solution ? (
            <aside
              className="blog-article__solution"
              aria-label="Solución relacionada"
            >
              <p>
                {solution.cta ??
                  `Conoce cómo MAGÍN aborda proyectos de ${solution.label}.`}
              </p>
              <div className="blog-article__actions">
                <Link href={solution.href} className="btn-primary">
                  {solution.label}
                  <span aria-hidden="true">→</span>
                </Link>
                <Link href="/#portafolio" className="blog-article__text-link">
                  Experiencia y proyectos
                </Link>
                <Link href="/#proceso" className="blog-article__text-link">
                  Cómo trabajamos
                </Link>
                <Link href="/#contacto" className="blog-article__text-link">
                  Contacto
                </Link>
              </div>
            </aside>
          ) : null}

          <RelatedHorizontal items={related} />
        </article>

        <aside className="blog-article-side" aria-label="Explorar más">
          <RelatedVertical items={relatedSide} />

          <div className="blog-article-side__card">
            <p className="blog-article-side__kicker">Siguiente paso</p>
            <p className="blog-article-side__text">
              De la lectura informativa a una conversación sobre tu proyecto.
            </p>
            <Link href="/#proceso" className="blog-article__text-link">
              Cómo trabajamos
            </Link>
            <Link
              href="/#contacto"
              className="btn-primary blog-article-side__cta"
            >
              Hablemos de tu proyecto
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="blog-article-side__card">
            <p className="blog-article-side__kicker">Blog</p>
            <Link href="/blog" className="blog-article__text-link">
              Volver al listado
            </Link>
            {isPublished(article) ? (
              <p className="blog-article-side__slug">/blog/{article.slug}</p>
            ) : null}
          </div>
        </aside>
      </div>
    </div>
  );
}
