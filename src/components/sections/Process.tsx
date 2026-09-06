import { processSideLabels, processSteps } from "@/data/process";

function StepIcon({
  name,
}: {
  name: (typeof processSteps)[number]["icon"];
}) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="M16.5 16.5L21 21" />
        </svg>
      );
    case "clipboard":
      return (
        <svg {...common}>
          <rect x="6" y="4" width="12" height="16" rx="2" />
          <path d="M9 4.5h6v2H9z" />
          <path d="M9 11h6M9 14h4" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M4 7l5-2 6 2 5-2v12l-5 2-6-2-5 2V7z" />
          <path d="M9 5v12M15 7v12" />
        </svg>
      );
    case "bulb":
      return (
        <svg {...common}>
          <path d="M9 18h6M10 21h4" />
          <path d="M8.5 14c-1.4-1-2.5-2.5-2.5-4.3A5 5 0 0 1 12 4.5a5 5 0 0 1 6 5.2c0 1.8-1 3.3-2.5 4.3H8.5z" />
        </svg>
      );
    case "gear":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M5.8 5.8l1.6 1.6M16.6 16.6l1.6 1.6M18.2 5.8l-1.6 1.6M7.4 16.6l-1.6 1.6" />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <circle cx="9" cy="9" r="2.4" />
          <circle cx="16" cy="10" r="2" />
          <path d="M4.5 18c.6-2.4 2.4-3.6 4.5-3.6s3.9 1.2 4.5 3.6" />
          <path d="M13.2 18c.4-1.7 1.6-2.7 3-2.7 1.5 0 2.6 1 3 2.7" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Process() {
  return (
    <section
      id="proceso"
      className="process"
      aria-labelledby="process-heading"
    >
      <div className="process__landscape" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="process__intro">
          <ul className="process__side-labels" aria-hidden="true">
            {processSideLabels.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>

          <header className="process__header text-center">
            <p className="font-[family-name:var(--font-inter)] text-[0.6875rem] font-semibold tracking-[0.2em] text-magin-burgundy-bright uppercase">
              Nuestro proceso
            </p>
            <h2
              id="process-heading"
              className="mt-3 font-[family-name:var(--font-poppins)] text-[2rem] font-semibold tracking-[-0.03em] text-foreground sm:text-4xl"
            >
              Cómo trabajamos
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-[family-name:var(--font-inter)] text-base leading-relaxed text-magin-muted sm:text-lg">
              Un recorrido claro desde el diagnóstico hasta la implementación.
            </p>
          </header>

          <p className="process__quote" aria-hidden="true">
            Grandes ideas también llegan a destino.
          </p>
        </div>

        <div className="process-roadmap mt-14 sm:mt-16">
          <svg
            className="process-roadmap__snake process-roadmap__snake--mobile"
            viewBox="0 0 100 920"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 22 16
                 C 38 55, 48 90, 36 130
                 C 20 180, 12 220, 28 270
                 C 48 330, 58 370, 34 430
                 C 14 485, 10 530, 30 585
                 C 52 645, 60 690, 36 750
                 C 18 795, 22 840, 48 885
                 C 58 900, 50 910, 50 918"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeDasharray="5 7"
              strokeLinecap="round"
            />
          </svg>

          <svg
            className="process-roadmap__snake process-roadmap__snake--desktop"
            viewBox="0 0 800 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="process-roadmap__snake-path"
              d="M 400 8
                 C 480 35, 620 55, 680 110
                 C 740 170, 720 230, 640 270
                 S 420 310, 280 340
                 C 140 375, 90 430, 140 485
                 C 200 545, 360 560, 500 590
                 C 660 625, 740 680, 680 740
                 C 620 795, 430 820, 300 860
                 C 200 890, 260 930, 400 965
                 C 450 978, 400 990, 400 998"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeDasharray="8 10"
              strokeLinecap="round"
            />
          </svg>

          <div className="process-roadmap__start" aria-hidden="true">
            <span className="process-roadmap__plane">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.5 11.2l16.2-6.4c.7-.3 1.4.4 1.1 1.1L14.4 22.1c-.3.7-1.3.6-1.5-.2l-2.2-7.1-7.1-2.2c-.7-.2-.8-1.2-.1-1.4z" />
              </svg>
            </span>
            <span>Ideas que comienzan</span>
          </div>

          <ol className="process-roadmap__list">
            {processSteps.map((step, index) => (
              <li
                key={step.id}
                className={`process-step process-step--${index % 2 === 0 ? "right" : "left"}`}
              >
                <article className="process-step__card">
                  <div className="process-step__main">
                    <div className="process-step__icon" aria-hidden="true">
                      <StepIcon name={step.icon} />
                    </div>
                    <div>
                      <p className="process-step__number">{step.number}</p>
                      <h3 className="process-step__title">{step.title}</h3>
                      <p className="process-step__desc">{step.description}</p>
                    </div>
                  </div>
                  <ul className="process-step__keywords">
                    {step.keywords.map((keyword) => (
                      <li key={keyword}>{keyword}</li>
                    ))}
                  </ul>
                  <span className="process-step__node" aria-hidden="true">
                    {index + 1}
                  </span>
                </article>
              </li>
            ))}
          </ol>

          <div className="process-roadmap__end">
            <div className="process-roadmap__flag" aria-hidden="true">
              <span className="process-roadmap__flag-mark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M6 21V4" />
                  <path d="M6 4h11l-2.5 3.2L17 10.5H6" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <p>Proyectos que avanzan</p>
            </div>
            <div className="process-roadmap__closing">
              <h3>Implementación</h3>
              <p>
                Convertimos objetivos en proyectos claros, con acompañamiento
                continuo.
              </p>
            </div>
          </div>
        </div>

        <p className="process__footer-note">
          MAGÍN S.R.L. — Distintas capacidades, un mismo propósito.
        </p>
      </div>
    </section>
  );
}
