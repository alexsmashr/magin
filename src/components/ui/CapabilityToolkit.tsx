import Image from "next/image";
import type { ReactNode } from "react";

export type CapabilityAccent =
  | "marketing"
  | "audiovisual"
  | "design"
  | "informatics"
  | "newmedia";

type CapabilityToolkitProps = {
  accent: CapabilityAccent;
  letterSrc: string;
  letterAlt: string;
  title: string;
  description: string;
  icons: ReactNode;
  className?: string;
};

export default function CapabilityToolkit({
  accent,
  letterSrc,
  letterAlt,
  title,
  description,
  icons,
  className = "",
}: CapabilityToolkitProps) {
  return (
    <article
      className={`toolkit toolkit--${accent} ${className}`.trim()}
      aria-labelledby={`toolkit-${accent}-title`}
    >
      <div className="toolkit__object">
        <div className="toolkit__glow" aria-hidden="true" />
        <div className="toolkit__body">
          <div className="toolkit__lid" aria-hidden="true" />
          <div className="toolkit__well">
            <div className="toolkit__icons" aria-hidden="true">
              {icons}
            </div>
            <div className="toolkit__letter">
              <Image
                src={letterSrc}
                alt={letterAlt}
                fill
                sizes="120px"
                className="toolkit__letter-img"
              />
            </div>
          </div>
          <div className="toolkit__front" aria-hidden="true" />
        </div>
      </div>

      <div className="toolkit__copy">
        <h3
          id={`toolkit-${accent}-title`}
          className="font-[family-name:var(--font-poppins)] text-base font-semibold tracking-tight text-foreground sm:text-lg"
        >
          {title}
        </h3>
        <p className="mt-2 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-magin-muted">
          {description}
        </p>
      </div>
    </article>
  );
}
