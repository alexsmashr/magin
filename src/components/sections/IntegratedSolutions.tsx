import type { ReactNode } from "react";
import CapabilityToolkit from "@/components/ui/CapabilityToolkit";

function IconShell({ children }: { children: ReactNode }) {
  return <span className="toolkit-icon">{children}</span>;
}

const marketingIcons = (
  <>
    <IconShell>
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="1.5" fill="currentColor" />
      </svg>
    </IconShell>
    <IconShell>
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M7 12c0-3.3 3.6-6 8-6s8 2.7 8 6-3.6 6-8 6c-.7 0-1.4-.1-2-.2L8 22l1.2-4.2C7.5 16.5 7 14.3 7 12Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </IconShell>
    <IconShell>
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M8 22V14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M14 22V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M20 22V16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M26 22V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </IconShell>
  </>
);

const audiovisualIcons = (
  <>
    <IconShell>
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 11.5v9l8-4.5-8-4.5Z" fill="currentColor" />
      </svg>
    </IconShell>
    <IconShell>
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="9" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 9V7h4v2M18 9V7h4v2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </IconShell>
    <IconShell>
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M5 16c1.5-4 3-6 4.5-6S12 16 13.5 16 16 10 17.5 10 20 16 21.5 16 24 10 25.5 10 28 16 29 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </IconShell>
  </>
);

const designIcons = (
  <>
    <IconShell>
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M20 7l5 5-12 12H8v-5L20 7Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M17.5 9.5l5 5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </IconShell>
    <IconShell>
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="12" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="16" y="15" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </IconShell>
    <IconShell>
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="7" y="7" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 13h18M13 7v18" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </IconShell>
  </>
);

const informaticsIcons = (
  <>
    <IconShell>
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M12 10L7 16l5 6M20 10l5 6-5 6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconShell>
    <IconShell>
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="8" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 25h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </IconShell>
    <IconShell>
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="18" y="6" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="12" y="18" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </IconShell>
  </>
);

const newMediaIcons = (
  <>
    <IconShell>
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="3" fill="currentColor" />
        <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.3" opacity="0.7" />
      </svg>
    </IconShell>
    <IconShell>
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 7l9 5v8l-9 5-9-5v-8l9-5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M16 16V27M16 16l9-5M16 16l-9-5" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    </IconShell>
    <IconShell>
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="8" y="8" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 16h8M16 12v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </IconShell>
  </>
);

const capabilities = [
  {
    accent: "marketing" as const,
    letterSrc: "/brand/letters/M-marketing.png",
    letterAlt: "Letra M — Marketing",
    title: "Marketing",
    description:
      "Estrategia para comprender, conectar y orientar la comunicación.",
    icons: marketingIcons,
  },
  {
    accent: "audiovisual" as const,
    letterSrc: "/brand/letters/A-audiovisual.png",
    letterAlt: "Letra A — Audiovisual",
    title: "Audiovisual",
    description:
      "Contenido audiovisual para explicar, documentar y conectar.",
    icons: audiovisualIcons,
  },
  {
    accent: "design" as const,
    letterSrc: "/brand/letters/G-diseno-grafico.png",
    letterAlt: "Letra G — Diseño Gráfico",
    title: "Diseño Gráfico",
    description: "Diseño que organiza información y construye identidad.",
    icons: designIcons,
  },
  {
    accent: "informatics" as const,
    letterSrc: "/brand/letters/I-informatica.png",
    letterAlt: "Letra I — Informática",
    title: "Informática",
    description:
      "Soluciones digitales desarrolladas según las necesidades del proyecto.",
    icons: informaticsIcons,
  },
  {
    accent: "newmedia" as const,
    letterSrc: "/brand/letters/N-new-media.png",
    letterAlt: "Letra N — New Media",
    title: "New Media",
    description:
      "Experiencias digitales que amplían las posibilidades de comunicación.",
    icons: newMediaIcons,
  },
] as const;

const commercialLines = [
  {
    title: "Estrategia y Comunicación",
    note: "Principalmente Marketing",
  },
  {
    title: "Contenido y Diseño",
    note: "Principalmente Audiovisual y Diseño Gráfico",
  },
  {
    title: "Tecnología e Innovación",
    note: "Principalmente Informática y New Media",
  },
] as const;

export default function IntegratedSolutions() {
  return (
    <section
      id="soluciones"
      className="solutions relative overflow-hidden"
      aria-labelledby="solutions-heading"
    >
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-[family-name:var(--font-inter)] text-[0.6875rem] font-semibold tracking-[0.2em] text-magin-burgundy-bright uppercase">
            Lo que hacemos
          </p>
          <h2
            id="solutions-heading"
            className="mt-3 font-[family-name:var(--font-poppins)] text-[2rem] font-semibold tracking-[-0.03em] text-foreground sm:text-4xl sm:leading-[1.1]"
          >
            Soluciones integrales
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-[family-name:var(--font-inter)] text-base leading-relaxed text-magin-muted sm:text-lg sm:leading-relaxed">
            Cinco capacidades que se combinan según cada proyecto.
          </p>
        </header>

        <div className="solutions-system relative mt-14 sm:mt-16 lg:mt-20">
          {/* Connecting trajectory — decorative */}
          <svg
            className="solutions-path"
            viewBox="0 0 1000 720"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="solutions-path-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(184, 36, 74, 0.55)" />
                <stop offset="45%" stopColor="rgba(107, 63, 160, 0.4)" />
                <stop offset="100%" stopColor="rgba(58, 110, 165, 0.5)" />
              </linearGradient>
              <filter
                id="solutions-path-blur"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="3" />
              </filter>
            </defs>
            <path
              className="solutions-path__glow"
              d="M500 0 C500 70, 180 90, 180 200 C180 290, 500 310, 500 400 C500 490, 820 510, 820 600 C820 660, 500 680, 500 720"
              fill="none"
              stroke="url(#solutions-path-gradient)"
              strokeWidth="6"
              filter="url(#solutions-path-blur)"
              opacity="0.35"
            />
            <path
              className="solutions-path__core"
              d="M500 0 C500 70, 180 90, 180 200 C180 290, 500 310, 500 400 C500 490, 820 510, 820 600 C820 660, 500 680, 500 720"
              fill="none"
              stroke="url(#solutions-path-gradient)"
              strokeWidth="1.5"
              opacity="0.55"
            />
          </svg>

          <svg
            className="solutions-path solutions-path--desktop"
            viewBox="0 0 1100 640"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="solutions-path-gradient-d"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="80%"
              >
                <stop offset="0%" stopColor="rgba(184, 36, 74, 0.5)" />
                <stop offset="50%" stopColor="rgba(107, 63, 160, 0.38)" />
                <stop offset="100%" stopColor="rgba(58, 110, 165, 0.48)" />
              </linearGradient>
              <filter
                id="solutions-path-blur-d"
                x="-10%"
                y="-10%"
                width="120%"
                height="120%"
              >
                <feGaussianBlur stdDeviation="4" />
              </filter>
            </defs>
            <path
              d="M550 8 C550 55, 160 80, 170 210 C185 340, 550 300, 550 300 C550 300, 930 340, 930 210 C940 80, 550 55, 550 8"
              fill="none"
              stroke="url(#solutions-path-gradient-d)"
              strokeWidth="7"
              filter="url(#solutions-path-blur-d)"
              opacity="0.28"
            />
            <path
              d="M170 210 C280 250, 420 275, 550 300 C680 275, 820 250, 930 210"
              fill="none"
              stroke="url(#solutions-path-gradient-d)"
              strokeWidth="7"
              filter="url(#solutions-path-blur-d)"
              opacity="0.22"
            />
            <path
              d="M300 520 C400 470, 480 430, 550 420 C620 430, 700 470, 800 520"
              fill="none"
              stroke="url(#solutions-path-gradient-d)"
              strokeWidth="6"
              filter="url(#solutions-path-blur-d)"
              opacity="0.25"
            />
            <path
              d="M550 8 C550 55, 160 80, 170 210 C185 340, 550 300, 550 300 C550 300, 930 340, 930 210 C940 80, 550 55, 550 8"
              fill="none"
              stroke="url(#solutions-path-gradient-d)"
              strokeWidth="1.4"
              opacity="0.5"
            />
            <path
              d="M170 210 C280 250, 420 275, 550 300 C680 275, 820 250, 930 210"
              fill="none"
              stroke="url(#solutions-path-gradient-d)"
              strokeWidth="1.3"
              opacity="0.42"
            />
            <path
              d="M300 520 C400 470, 480 430, 550 420 C620 430, 700 470, 800 520"
              fill="none"
              stroke="url(#solutions-path-gradient-d)"
              strokeWidth="1.3"
              opacity="0.42"
            />
          </svg>

          <div className="solutions-grid relative z-10">
            {capabilities.map((capability, index) => (
              <CapabilityToolkit
                key={capability.accent}
                accent={capability.accent}
                letterSrc={capability.letterSrc}
                letterAlt={capability.letterAlt}
                title={capability.title}
                description={capability.description}
                icons={capability.icons}
                className={`solutions-grid__item solutions-grid__item--${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl sm:mt-20">
          <ul className="solutions-lines flex flex-col gap-6 sm:flex-row sm:justify-between sm:gap-8">
            {commercialLines.map((line) => (
              <li key={line.title} className="text-center sm:flex-1">
                <p className="font-[family-name:var(--font-poppins)] text-sm font-medium text-foreground/90">
                  {line.title}
                </p>
                <p className="mt-1.5 font-[family-name:var(--font-inter)] text-xs leading-relaxed text-foreground/45">
                  {line.note}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-12 max-w-xl text-center font-[family-name:var(--font-inter)] text-sm leading-relaxed text-magin-muted sm:mt-14 sm:text-[0.9375rem]">
          MAGÍN integra las capacidades necesarias según cada proyecto.
        </p>
      </div>
    </section>
  );
}
