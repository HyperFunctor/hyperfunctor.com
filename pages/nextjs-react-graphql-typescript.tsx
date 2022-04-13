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
import { PricingFooter } from "../components/PricingFooter";
import { PricingSection } from "../components/PricingSection.tsx";
import { Questions } from "../components/Questions";
import { Stats } from "../components/Stats";
import { Technologies } from "../components/Technologies";
import { Why } from "../components/Why";
import {
  getCurrentPricing,
  getGrossPrice,
  pricings,
  releaseDate,
} from "../lib/pricing";

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
  releaseDate: releaseDate.toISOString(),
  offers: pricings.map((p) => {
    const { state } = getCurrentPricing();
    const availability = {
      AVAILABLE: "https://schema.org/OnlineOnly",
      PRESALE: "https://schema.org/PreSale",
      OUTOFSTOCK: "https://schema.org/OutOfStock",
    }[state];

    return {
      price: getGrossPrice(p.price).toFixed(2),
      priceValidUntil: p.to.toISOString(),
      priceCurrency: "PLN",
      availability: availability,
      seller: {
        name: "Hyper Functor",
      },
      url: p.cartUrl,
    };
  }),
};

export default function ZaisteProgramujPage() {
  const { currentPricing } = getCurrentPricing();

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
      {currentPricing ? (
        <PricingSection />
      ) : (
        <NewsletterSection id="first" variant="inverse">
          Otrzymasz maila z unikalnym kodem rabatowym natychmiast gdy tylko
          ruszą zapisy na drugą edycję kursu Next.js, React i TypeScripta.
        </NewsletterSection>
      )}
      <Questions />
      <Faq />
      {currentPricing ? (
        <PricingFooter />
      ) : (
        <NewsletterSection id="second">
          Otrzymasz maila z unikalnym kodem rabatowym natychmiast gdy tylko
          ruszą zapisy na drugą edycję kursu Next.js, React i TypeScripta.
        </NewsletterSection>
      )}
      <Footer />
    </div>
  );
}
