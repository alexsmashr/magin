"use client";

import { useEffect, useId, useRef } from "react";
import type { PortfolioProject } from "@/data/portfolio";

type PortfolioModalProps = {
  project: PortfolioProject | null;
  onClose: () => void;
};

export default function PortfolioModal({ project, onClose }: PortfolioModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project) {
      if (!dialog.open) dialog.showModal();
      const video = videoRef.current;
      if (video) {
        video.currentTime = 0;
        void video.play().catch(() => {
          /* autoplay may be blocked; user can press play */
        });
      }
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }

    if (dialog.open) dialog.close();
  }, [project]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onCancel = (event: Event) => {
      event.preventDefault();
      onClose();
    };

    dialog.addEventListener("cancel", onCancel);
    return () => dialog.removeEventListener("cancel", onCancel);
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      className="portfolio-modal"
      aria-labelledby={titleId}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      {project ? (
        <div className="portfolio-modal__panel">
          <button
            type="button"
            className="portfolio-modal__close"
            onClick={onClose}
            aria-label="Cerrar"
          >
            ×
          </button>

          <div className="portfolio-modal__hero">
            <video
              ref={videoRef}
              className="portfolio-modal__video"
              src={project.videoSrc}
              controls
              playsInline
              preload="metadata"
              poster=""
            />
            <div className="portfolio-modal__hero-fade" aria-hidden="true" />
            <div className="portfolio-modal__hero-actions">
              <button
                type="button"
                className="portfolio-modal__play"
                onClick={() => {
                  const video = videoRef.current;
                  if (!video) return;
                  if (video.paused) void video.play();
                  else video.pause();
                }}
              >
                <span aria-hidden="true">▶</span>
                Reproducir
              </button>
            </div>
          </div>

          <div className="portfolio-modal__body">
            <div className="portfolio-modal__main">
              <p className="portfolio-modal__meta">
                <span>{project.year}</span>
                <span aria-hidden="true">·</span>
                <span>{project.duration}</span>
              </p>
              <h3 id={titleId} className="portfolio-modal__title">
                {project.title}
              </h3>
              <p className="portfolio-modal__description">{project.description}</p>
              {project.isPlaceholder ? (
                <p className="portfolio-modal__note">
                  Vista estructural de demostración. El video y el contenido
                  definitivo se reemplazarán con proyectos verificados de MAGÍN.
                </p>
              ) : null}
            </div>

            <aside className="portfolio-modal__aside">
              <p>
                <span className="portfolio-modal__label">Capacidades</span>
                {project.capabilities}
              </p>
              <div className="portfolio-modal__tags">
                {project.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`portfolio-tag portfolio-tag--${tag.tone}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
