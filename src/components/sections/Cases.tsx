"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import {
  portfolioProjects,
  type PortfolioProject,
} from "@/data/portfolio";
import PortfolioModal from "@/components/ui/PortfolioModal";

function Poster({ tone }: { tone: PortfolioProject["poster"] }) {
  return (
    <div className={`portfolio-card__poster portfolio-card__poster--${tone}`} aria-hidden="true">
      <div className="portfolio-card__poster-glow" />
      <div className="portfolio-card__poster-frame">
        {tone === "web" && <span className="portfolio-card__device portfolio-card__device--laptop" />}
        {tone === "av" && <span className="portfolio-card__device portfolio-card__device--monitor" />}
        {tone === "interactive" && (
          <span className="portfolio-card__device portfolio-card__device--tablet" />
        )}
        {tone === "immersive" && (
          <span className="portfolio-card__device portfolio-card__device--immersive" />
        )}
      </div>
      <span className="portfolio-card__play-hint" aria-hidden="true">
        ▶
      </span>
    </div>
  );
}

export default function Cases() {
  const [active, setActive] = useState<PortfolioProject | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section
      id="portafolio"
      className="portfolio"
      aria-labelledby="portfolio-heading"
    >
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <header className="max-w-2xl">
            <p className="font-[family-name:var(--font-inter)] text-[0.6875rem] font-semibold tracking-[0.2em] text-magin-burgundy-bright uppercase">
              Nuestro trabajo
            </p>
            <h2
              id="portfolio-heading"
              className="mt-3 font-[family-name:var(--font-poppins)] text-[2rem] font-semibold tracking-[-0.03em] text-foreground sm:text-4xl sm:leading-[1.1]"
            >
              Portafolio de proyectos integrales
            </h2>
            <p className="mt-4 max-w-xl font-[family-name:var(--font-inter)] text-base leading-relaxed text-magin-muted sm:text-lg">
              Cada proyecto combina distintas capacidades según su objetivo.
            </p>
          </header>

          <Link href="#portafolio" className="portfolio-all-btn self-start sm:self-auto">
            Ver todos los proyectos
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="portfolio-row mt-12 sm:mt-14" role="list">
          {portfolioProjects.map((project) => (
            <article key={project.id} className="portfolio-card" role="listitem">
              <button
                type="button"
                className="portfolio-card__hit"
                onClick={() => setActive(project)}
                aria-label={`Abrir proyecto: ${project.title}`}
              >
                <Poster tone={project.poster} />
                <div className="portfolio-card__content">
                  <div className="portfolio-card__text">
                    <h3 className="portfolio-card__title">{project.title}</h3>
                    <p className="portfolio-card__summary">{project.summary}</p>
                  </div>
                  <span className="portfolio-card__arrow" aria-hidden="true">
                    →
                  </span>
                </div>
                <div className="portfolio-card__tags">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`portfolio-tag portfolio-tag--${tag.tone}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </button>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center font-[family-name:var(--font-inter)] text-xs text-foreground/40 sm:text-left">
          Vista estructural. Los casos institucionales verificados reemplazarán
          estos ejemplos cuando estén aprobados.
        </p>
      </div>

      <PortfolioModal project={active} onClose={close} />
    </section>
  );
}
