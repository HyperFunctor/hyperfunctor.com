import { NextSeoProps, ProductJsonLdProps } from "next-seo";

import { pricing } from "./lib/pricing";

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
        url: "https://zaisteprogramuj.pl/og-zaiste-programuj_new.png",
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    handle: "@zaisteprogramuj",
    site: "zaisteprogramuj.pl",
    cardType: "summary_large_image",
  },
};

export const productJsonLd: ProductJsonLdProps = {
  productName: title,
  images: ["https://zaisteprogramuj.pl/og-zaiste-programuj_new.png"],
  description,
  brand: "Zaiste, Programuj!",
  releaseDate: pricing.full.until.toISOString(),
  offers: {
    price: pricing.full.discountPrice.toFixed(2),
    priceValidUntil: pricing.full.until.toISOString(),
    priceCurrency: "PLN",
    availability: "https://schema.org/OnlineOnly",
    seller: {
      name: "Zaiste, Programuj!",
    },
    url: "https://app.easycart.pl/checkout/kretes/kurs-nextjs",
  },
};

export const socialProfileJsonLd: any = {
  type: "Organization",
  name: "Zaiste, Programuj!",
  url: "https://zaisteprogramuj.pl",
  sameAs: [
    "https://www.facebook.com/zaiste.programuj",
    "https://www.instagram.com/zaiste.programuj/",
  ],
};
