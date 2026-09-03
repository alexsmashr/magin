import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="hero-ambient relative isolate"
      aria-labelledby="hero-heading"
    >
      <div
        className="mx-auto grid max-w-7xl grid-cols-1 content-center items-center gap-10 px-5 pb-12 pt-[calc(var(--header-height)+1.25rem)] sm:gap-12 sm:px-8 sm:pb-14 lg:min-h-[100svh] lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-8 lg:px-10 lg:pb-8 lg:pt-[var(--header-height)] xl:gap-10"
      >
        {/* Copy — ~40% */}
        <div className="relative z-10 w-full max-w-xl self-center lg:max-w-none">
          <h1
            id="hero-heading"
            className="font-[family-name:var(--font-poppins)] text-[1.875rem] font-semibold leading-[1.12] tracking-tight text-white sm:text-[2.25rem] lg:text-[2.35rem] xl:text-[2.85rem]"
          >
            Comunicación{" "}
            <span className="text-magin-burgundy-bright" aria-hidden="true">
              +
            </span>{" "}
            <span className="text-magin-burgundy-bright">tecnología</span>
            <br className="hidden sm:block" />{" "}
            para organizaciones
          </h1>

          <p className="mt-4 font-[family-name:var(--font-poppins)] text-[0.9375rem] font-medium text-white/90 sm:text-base">
            De la idea a la implementación.
          </p>

          <p className="mt-3 max-w-md font-[family-name:var(--font-inter)] text-sm leading-relaxed text-magin-muted sm:text-[0.9375rem]">
            Integramos estrategia, contenido, diseño y tecnología para
            desarrollar soluciones orientadas a las necesidades de cada
            organización.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3.5">
            <Link
              href="#contacto"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-magin-burgundy-bright px-5 font-[family-name:var(--font-poppins)] text-sm font-semibold text-white transition-colors hover:bg-[#c92d54]"
            >
              Hablemos de tu proyecto
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="#proceso"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/20 px-5 font-[family-name:var(--font-poppins)] text-sm font-medium text-white/90 transition-colors hover:border-white/40 hover:bg-white/[0.03]"
            >
              <span
                aria-hidden="true"
                className="flex h-5 w-5 items-center justify-center rounded-full border border-white/35 text-[0.55rem]"
              >
                ▶
              </span>
              Conoce cómo trabajamos
            </Link>
          </div>
        </div>

        {/* Brand mark + orbit — ~60% */}
        <div className="relative z-0 flex w-full items-center justify-center self-center lg:justify-end">
          <div className="hero-visual">
            {/* C. AURA */}
            <div
              className="hero-logo-aura pointer-events-none absolute left-1/2 top-1/2 z-0 h-[72%] w-[88%] -translate-x-1/2 -translate-y-1/2"
              aria-hidden="true"
            />

            {/* Orbit — independent layer under logo */}
            <div className="hero-visual__orbit" aria-hidden="true">
              <div className="hero-orbit">
                <div className="hero-orbit-glow" />
                <div className="hero-orbit-core" />
                <div className="hero-orbit-highlight" />
              </div>
            </div>

            {/* Official logo — above orbit */}
            <Image
              src="/brand/magin-logo.png"
              alt="MAGÍN"
              width={646}
              height={202}
              priority
              className="hero-visual__logo hero-logo-depth object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
