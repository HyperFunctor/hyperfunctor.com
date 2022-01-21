import { NextSeoProps } from "next-seo";

const title =
  "Kurs programowania Next.js, React.js i TypeScripta | Zaiste, Programuj";
const description =
  "Praktyczny kurs Next.js, najpopularniejszego z frameworków do tworzenia aplikacji internetowych! TypeScript, Next.js i React.js od podstaw. Dla najlepszych staże programistyczne!";

export const seo: NextSeoProps = {
  title,
  description,
  canonical: "https://zaisteprogramuj.pl",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    site_name: "zaisteprogramuj.pl",
    url: "https://zaisteprogramuj.pl",
    title,
    description,
    images: [
      {
        url: "https://zaisteprogramuj.pl/og-zaiste-programuj.png",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@zaisteprogramuj",
    site: "zaisteprogramuj.pl",
    cardType: "summary_large_image",
  },
};
