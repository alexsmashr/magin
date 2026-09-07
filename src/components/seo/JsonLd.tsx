import { ORG_NAME, ORG_PHONE, SITE_URL } from "@/lib/site";

/** JSON-LD Organization — solo datos verificables del proyecto. */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG_NAME,
    url: SITE_URL,
    telephone: ORG_PHONE,
    areaServed: {
      "@type": "Country",
      name: "Bolivia",
    },
    description:
      "MAGÍN S.R.L. integra comunicación, contenidos y tecnología para desarrollar soluciones orientadas a proyectos y necesidades de organizaciones.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** JSON-LD BlogPosting — sin inventar autores individuales. */
export function BlogPostingJsonLd({
  title,
  description,
  url,
  datePublished,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  image?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
    },
    ...(datePublished ? { datePublished } : {}),
    ...(image ? { image: [image] } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
