import {
  NextSeoProps,
  ProductJsonLdProps,
  SocialProfileJsonLdProps,
} from "next-seo";

import { pricing } from "./lib/pricing";

const title = "Kurs Next.js, React, GraphQL i TypeScripta | Hyper Functor";
const description =
  "Praktyczny kurs Next.js, React i GraphQL z TypeScriptem –, najpopularniejszych frameworków do tworzenia aplikacji internetowych!";

export const seo: NextSeoProps = {
  titleTemplate: "%s | Hyper Functor",
  defaultTitle: title,
  title,
  description,
  canonical: "https://hyperfunctor.com",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    site_name: "hyperfunctor.com – kurs Next.js",
    url: "https://hyperfunctor.com",
    title,
    description,
    images: [
      {
        url: "https://hyperfunctor.com/og-hyper-functor.png",
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    handle: "@hyperfunctor",
    site: "hyperfunctor.com",
    cardType: "summary_large_image",
  },
};

export const productJsonLd: ProductJsonLdProps = {
  productName: title,
  images: ["https://hyperfunctor.com/og-hyper-functor.png"],
  description,
  brand: "Hyper Functor",
  releaseDate: pricing.full.until.toISOString(),
  offers: {
    price: pricing.full.discountPrice.toFixed(2),
    priceValidUntil: pricing.full.until.toISOString(),
    priceCurrency: "PLN",
    availability: "https://schema.org/OnlineOnly",
    seller: {
      name: "Hyper Functor",
    },
    url: "https://app.easycart.pl/checkout/kretes/kurs-nextjs",
  },
};

export const socialProfileJsonLd: SocialProfileJsonLdProps = {
  type: "Organization",
  name: "Hyper Functor",
  url: "https://hyperfunctor.com",
  sameAs: [
    "https://www.facebook.com/zaiste.programuj",
    "https://www.instagram.com/zaiste.programuj/",
  ],
};
