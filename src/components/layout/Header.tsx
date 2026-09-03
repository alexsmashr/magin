import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Casos", href: "#casos" },
  { label: "MAGÍN explica", href: "#magin-explica" },
  { label: "Nosotros", href: "#nosotros" },
] as const;

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 h-[var(--header-height)]">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="relative z-10 flex shrink-0 items-center rounded-sm"
          aria-label="MAGÍN — Inicio"
        >
          <Image
            src="/brand/magin-logo.png"
            alt="MAGÍN"
            width={118}
            height={37}
            className="h-7 w-auto sm:h-8"
            priority
          />
        </Link>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
          aria-label="Navegación principal"
        >
          <ul className="flex items-center gap-7 xl:gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-[family-name:var(--font-inter)] text-[0.8125rem] font-medium tracking-wide text-white/75 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative z-10 flex items-center gap-3 sm:gap-4">
          <Link
            href="#contacto"
            className="hidden items-center gap-2 rounded-full border border-white/25 bg-transparent px-4 py-2 font-[family-name:var(--font-poppins)] text-[0.8125rem] font-medium text-white transition-colors hover:border-white/45 hover:bg-white/[0.04] sm:inline-flex"
          >
            Hablemos de tu proyecto
            <span aria-hidden="true" className="text-white/70">
              →
            </span>
          </Link>

          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-full border border-white/15 px-2.5 py-1.5 font-[family-name:var(--font-inter)] text-[0.75rem] font-medium tracking-wider text-white/80 transition-colors hover:border-white/30 hover:text-white"
            aria-label="Idioma: español"
          >
            ES
            <span aria-hidden="true" className="text-[0.6rem] text-white/50">
              ▾
            </span>
          </button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/85 transition-colors hover:border-white/30 hover:text-white lg:hidden"
            aria-label="Abrir menú"
            aria-expanded="false"
          >
            <span className="flex w-4 flex-col gap-1" aria-hidden="true">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
