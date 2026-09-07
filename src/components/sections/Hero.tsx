export default function Hero() {
  return (
    <section className="hero-banner" aria-labelledby="hero-heading">
      <div className="hero-banner__frame">
        <div className="hero-banner__media" aria-hidden="true">
          {/* img nativo: conserva alpha del PNG; decorativo (texto lleva el mensaje) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/hero-banner.png?v=user-original"
            alt=""
            width={1024}
            height={576}
            className="hero-banner__image"
            decoding="async"
          />
        </div>

        <div className="hero-banner__copy">
          <p className="hero-banner__eyebrow font-[family-name:var(--font-inter)]">
            De la idea al impacto
          </p>

          <h1
            id="hero-heading"
            className="hero-banner__title mt-3 font-[family-name:var(--font-poppins)] font-semibold tracking-[-0.035em] sm:mt-5"
          >
            Tu proyecto,
            <br />
            <span className="text-magin-burgundy-bright">sin límites.</span>
          </h1>

          <p className="hero-banner__text mt-4 max-w-[34rem] font-[family-name:var(--font-inter)] text-[0.9375rem] leading-[1.65] sm:mt-5 sm:text-base sm:leading-[1.7]">
            MAGÍN integra comunicación, contenidos y tecnología para desarrollar
            soluciones dirigidas a organizaciones. Combinamos estrategia,
            diseño y capacidades digitales según cada proyecto.
          </p>
        </div>
      </div>
    </section>
  );
}
