import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { ORG_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${ORG_NAME} | Comunicación, contenidos y tecnología`,
    template: `%s | ${ORG_NAME}`,
  },
  description:
    "MAGÍN S.R.L. integra comunicación, contenidos y tecnología para desarrollar soluciones orientadas a proyectos y necesidades de organizaciones.",
  applicationName: ORG_NAME,
  authors: [{ name: ORG_NAME }],
  creator: ORG_NAME,
  publisher: ORG_NAME,
  keywords: [
    "MAGÍN",
    "MAGÍN S.R.L.",
    "MAGÍN Bolivia",
    "comunicación",
    "contenidos",
    "tecnología",
    "soluciones integrales",
    "organizaciones",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_BO",
    url: SITE_URL,
    siteName: ORG_NAME,
    title: `${ORG_NAME} | Comunicación, contenidos y tecnología`,
    description:
      "MAGÍN S.R.L. integra comunicación, contenidos y tecnología para desarrollar soluciones orientadas a proyectos y necesidades de organizaciones.",
    images: [
      {
        url: "/brand/magin-logo.png",
        width: 512,
        height: 160,
        alt: "Logotipo de MAGÍN S.R.L.",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${ORG_NAME} | Comunicación, contenidos y tecnología`,
    description:
      "MAGÍN S.R.L. integra comunicación, contenidos y tecnología para organizaciones.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
