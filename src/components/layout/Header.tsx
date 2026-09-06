"use client";

import MaginLogo from "@/components/ui/MaginLogo";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

const primaryNav = [
  { label: "Inicio", href: "/" },
  { label: "Soluciones", href: "/#soluciones" },
  { label: "Portafolio", href: "/#portafolio" },
  { label: "Cómo trabajamos", href: "/#proceso" },
] as const;

const blogNav = { label: "Blog", href: "/blog" } as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const closeOnWide = () => {
      if (mq.matches) setMenuOpen(false);
    };
    closeOnWide();
    mq.addEventListener("change", closeOnWide);
    return () => mq.removeEventListener("change", closeOnWide);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "is-menu-open" : ""}`}
    >
      <div className="site-header__shell mx-auto max-w-7xl px-3 pt-3 sm:px-5 sm:pt-4 lg:px-6">
        <div className="site-header__box flex h-[3.4rem] items-center justify-between gap-3 pl-4 pr-3.5 sm:h-[3.55rem] sm:gap-4 sm:pl-[1.15rem] sm:pr-5">
          <Link
            href="/"
            className="site-header__logo relative z-10 flex shrink-0 items-center"
            aria-label="MAGÍN — Inicio"
            onClick={closeMenu}
          >
            <MaginLogo
              width={118}
              height={37}
              className="site-header__logo-mark"
              title=""
              onDark
            />
          </Link>

          <nav
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block"
            aria-label="Navegación principal"
          >
            <ul className="flex items-center gap-0.5 xl:gap-1">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="site-nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="site-nav-sep" aria-hidden="true" />
              <li>
                <Link
                  href={blogNav.href}
                  className="site-nav-link site-nav-link--blog"
                >
                  {blogNav.label}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="relative z-10 flex items-center gap-2 sm:gap-2.5">
            <Link
              href="/#contacto"
              className="site-cta-header hidden sm:inline-flex"
            >
              Hablemos de tu proyecto
              <span aria-hidden="true">→</span>
            </Link>

            <button
              type="button"
              className="site-lang"
              aria-label="Idioma: español"
            >
              ES
              <span aria-hidden="true" className="text-[0.55rem] opacity-50">
                ▾
              </span>
            </button>

            <button
              type="button"
              className="site-menu-btn"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls={menuId}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span
                className={`site-menu-btn__icon ${menuOpen ? "is-open" : ""}`}
                aria-hidden="true"
              >
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div
            id={menuId}
            className="site-mobile-menu md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
          >
            <nav aria-label="Navegación móvil">
              <ul className="site-mobile-menu__list">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="site-mobile-menu__link"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="site-mobile-menu__blog">
                <Link
                  href={blogNav.href}
                  className="site-mobile-menu__link site-mobile-menu__link--blog"
                  onClick={closeMenu}
                >
                  {blogNav.label}
                </Link>
              </div>

              <Link
                href="/#contacto"
                className="site-mobile-menu__cta"
                onClick={closeMenu}
              >
                Hablemos de tu proyecto
                <span aria-hidden="true">→</span>
              </Link>
            </nav>
          </div>
        ) : null}
      </div>

      {menuOpen ? (
        <button
          type="button"
          className="site-mobile-backdrop md:hidden"
          aria-label="Cerrar menú"
          onClick={closeMenu}
        />
      ) : null}
    </header>
  );
}
