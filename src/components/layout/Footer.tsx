import MaginLogo from "@/components/ui/MaginLogo";
import Link from "next/link";

/** Actualizar con la URL real del LinkedIn de MAGÍN */
const LINKEDIN_URL = "https://www.linkedin.com/";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Soluciones", href: "/#soluciones" },
  { label: "Portafolio", href: "/#portafolio" },
  { label: "Cómo trabajamos", href: "/#proceso" },
  { label: "Blog", href: "/blog" },
] as const;

const solutionLinks = [
  { label: "Estrategia y Comunicación", href: "/#estrategia-comunicacion" },
  { label: "Contenido y Diseño", href: "/#contenido-diseno" },
  { label: "Tecnología e Innovación", href: "/#tecnologia-innovacion" },
] as const;

const capabilityLinks = [
  { label: "Marketing", href: "/#soluciones" },
  { label: "Audiovisual", href: "/#soluciones" },
  { label: "Diseño Gráfico", href: "/#soluciones" },
  { label: "Informática", href: "/#soluciones" },
  { label: "New Media", href: "/#soluciones" },
] as const;

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__glow" aria-hidden="true" />

      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link href="/" aria-label="MAGÍN — Inicio">
              <MaginLogo
                width={118}
                height={37}
                className="h-7 w-auto sm:h-8"
                title=""
                onDark
              />
            </Link>
            <p className="site-footer__tagline">
              Comunicación + tecnología para organizaciones.
            </p>
            <div className="site-footer__socials">
              <a
                href={LINKEDIN_URL}
                className="site-footer__social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MAGÍN en LinkedIn"
              >
                <LinkedInIcon />
                <span className="sr-only">in</span>
              </a>
            </div>
          </div>

          <div className="site-footer__col">
            <h2 className="site-footer__heading">Navegación</h2>
            <ul className="site-footer__list">
              {navLinks.map((item) => (
                <li key={item.href + item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h2 className="site-footer__heading">Soluciones</h2>
            <ul className="site-footer__list">
              {solutionLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h2 className="site-footer__heading">Capacidades</h2>
            <ul className="site-footer__list">
              {capabilityLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h2 className="site-footer__heading">Contacto</h2>
            <ul className="site-footer__list">
              <li>
                <a href="tel:+59164633075">+591 64633075</a>
              </li>
              <li>
                  <Link href="/#contacto">Hablemos de tu proyecto</Link>
              </li>
              <li>
                <span className="site-footer__muted">Bolivia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__rule" aria-hidden="true" />

        <div className="site-footer__bottom">
          <p className="site-footer__legal">
            © {year} MAGÍN S.R.L. Todos los derechos reservados.
          </p>
          <p className="site-footer__legal">MAGÍN</p>
        </div>
      </div>
    </footer>
  );
}
