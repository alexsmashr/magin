"use client";

import { useId } from "react";

type MaginLogoProps = {
  width: number;
  height: number;
  className?: string;
  title?: string;
  /** Fondo oscuro: letras blancas, I en guindo */
  onDark?: boolean;
};

/**
 * Logo MAGÍN.
 * M/A/G/N → negro (o blanco si onDark)
 * I → mismo guindo del CTA (--magin-burgundy-bright / #b8244a)
 */
export default function MaginLogo({
  width,
  height,
  className = "",
  title = "MAGÍN",
  onDark = false,
}: MaginLogoProps) {
  const uid = useId().replace(/:/g, "");
  const filterMono = `magin-mono-${uid}`;
  const filterRedMask = `magin-red-${uid}`;
  const maskI = `magin-i-${uid}`;

  return (
    <span
      className={`magin-logo-light ${onDark ? "magin-logo-light--on-dark" : ""} ${className}`.trim()}
    >
      <svg
        className="magin-logo-light__svg"
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        role={title ? "img" : "presentation"}
        aria-label={title || undefined}
        aria-hidden={title ? undefined : true}
      >
        {title ? <title>{title}</title> : null}
        <defs>
          <filter
            id={filterMono}
            colorInterpolationFilters="sRGB"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          >
            {onDark ? (
              <feColorMatrix
                type="matrix"
                values="
                  0 0 0 0 1
                  0 0 0 0 1
                  0 0 0 0 1
                  0 0 0 1 0"
              />
            ) : (
              <>
                <feComponentTransfer>
                  <feFuncR type="table" tableValues="1 0" />
                  <feFuncG type="table" tableValues="1 0" />
                  <feFuncB type="table" tableValues="1 0" />
                </feComponentTransfer>
                <feColorMatrix type="saturate" values="0" />
              </>
            )}
          </filter>

          <filter
            id={filterRedMask}
            colorInterpolationFilters="sRGB"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          >
            <feColorMatrix
              type="matrix"
              values="
                0 0 0 0 0
                0 0 0 0 0
                0 0 0 0 0
                1.4 -0.7 -0.7 0 0"
            />
            <feComponentTransfer>
              <feFuncA type="linear" slope="2.2" intercept="-0.05" />
            </feComponentTransfer>
          </filter>

          <mask
            id={maskI}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width={width}
            height={height}
          >
            <image
              href="/brand/magin-logo.png"
              width={width}
              height={height}
              preserveAspectRatio="xMidYMid meet"
              filter={`url(#${filterRedMask})`}
            />
          </mask>
        </defs>

        <image
          href="/brand/magin-logo.png"
          width={width}
          height={height}
          preserveAspectRatio="xMidYMid meet"
          filter={`url(#${filterMono})`}
        />

        <rect
          width={width}
          height={height}
          fill="var(--magin-burgundy-bright)"
          mask={`url(#${maskI})`}
        />
      </svg>
    </span>
  );
}
