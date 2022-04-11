import {
  NextSeo,
  NextSeoProps,
  ProductJsonLd,
  ProductJsonLdProps,
} from "next-seo";

import { Agenda } from "../components/Agenda";
import { AllYouNeed } from "../components/AllYouNeed";
import { Authors } from "../components/Authors";
import { DemoApp } from "../components/DemoApp";
import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";
import { ForWhom } from "../components/ForWhom";
import { Hero } from "../components/Hero";
import { NewsletterSection } from "../components/NewsletterSection";
import { Stats } from "../components/Stats";
import { Technologies } from "../components/Technologies";
import { Why } from "../components/Why";
import { pricing } from "../lib/pricing";

const zaisteProgramujTitle = "Kurs Next.js, React, GraphQL i TypeScripta";
const zaisteProgramujDescription =
  "Praktyczny kurs Next.js, React i GraphQL z TypeScriptem – najpopularniejszych frameworków do tworzenia aplikacji internetowych!";

const zaisteProgramujSeo: NextSeoProps = {
  title: zaisteProgramujTitle,
  description: zaisteProgramujDescription,
  canonical: "https://hyperfunctor.com/nextjs-react-graphql-typescript/",
  openGraph: {
    url: "https://hyperfunctor.com/nextjs-react-graphql-typescript/",
    title: zaisteProgramujTitle,
    description: zaisteProgramujDescription,
    images: [
      {
        url: "https://hyperfunctor.com/og-next.png",
        alt: zaisteProgramujTitle,
        width: 1200,
        height: 630,
      },
    ],
  },
};

const zaisteProgramujProductLd: ProductJsonLdProps = {
  productName: zaisteProgramujTitle,
  images: ["https://hyperfunctor.com/og-next.png"],
  description: zaisteProgramujDescription,
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

export default function ZaisteProgramujPage() {
  return (
    <div>
      <NextSeo {...zaisteProgramujSeo} />
      <ProductJsonLd {...zaisteProgramujProductLd} />
      <Hero />
      <Why />
      <Technologies />
      <ForWhom />
      <AllYouNeed />
      <Stats />
      <DemoApp />
      <Authors />
      <Agenda />
      <NewsletterSection id="first" variant="inverse">
        Otrzymasz maila z unikalnym kodem rabatowym natychmiast gdy tylko ruszą
        zapisy na drugą edycję kursu Next.js, React i TypeScripta.
      </NewsletterSection>
      <Faq />
      <NewsletterSection id="second">
        Otrzymasz maila z unikalnym kodem rabatowym natychmiast gdy tylko ruszą
        zapisy na drugą edycję kursu Next.js, React i TypeScripta.
      </NewsletterSection>
      <Footer />
    </div>
  );
}
