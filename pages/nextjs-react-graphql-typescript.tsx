import { GetStaticProps } from "next";
import {
  NextSeo,
  NextSeoProps,
  ProductJsonLd,
  ProductJsonLdProps,
} from "next-seo";

import { Agenda } from "../components/next/Agenda";
import { AllYouNeed } from "../components/next/AllYouNeed";
import { Authors } from "../components/next/Authors";
import { DemoApp } from "../components/next/DemoApp";
import { Faq } from "../components/next/Faq";
import { Footer } from "../components/next/Footer";
import { ForWhom } from "../components/next/ForWhom";
import { Hero } from "../components/next/Hero";
import { NewsletterSection } from "../components/next/NewsletterSection";
import { PricingFooter } from "../components/next/PricingFooter";
import { PricingSection } from "../components/next/PricingSection.tsx";
import { Questions } from "../components/next/Questions";
import { Stats } from "../components/next/Stats";
import { Technologies } from "../components/next/Technologies";
import { Testimonials } from "../components/next/Testimonials";
import { Why } from "../components/next/Why";
import {
  getCurrentPricing,
  getGrossPrice,
  pricings,
  releaseDate,
} from "../lib/pricing";

const nextjsCourseTitle =
  "Kurs Nowoczesny Frontend: Next.js, React, GraphQL i TypeScript";
const nextjsCourseDescription =
  "Praktyczny kurs Nowoczesny Frontend: Next.js, React, GraphQL, TypeScript – najpopularniejszych frameworków do tworzenia aplikacji internetowych!";

const nextjsCourseSeo: NextSeoProps = {
  title: nextjsCourseTitle,
  description: nextjsCourseDescription,
  canonical: "https://hyperfunctor.com/nextjs-react-graphql-typescript/",
  openGraph: {
    url: "https://hyperfunctor.com/nextjs-react-graphql-typescript/",
    title: nextjsCourseTitle,
    description: nextjsCourseDescription,
    images: [
      {
        url: "https://hyperfunctor.com/og-next.png",
        alt: nextjsCourseTitle,
        width: 1200,
        height: 630,
      },
    ],
  },
};

const nextjsCourseProductLd: ProductJsonLdProps = {
  productName: nextjsCourseTitle,
  images: ["https://hyperfunctor.com/og-next.png"],
  description: nextjsCourseDescription,
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

export default function nextjsCoursePage() {
  const { currentPricing } = getCurrentPricing();

  return (
    <div>
      <NextSeo {...nextjsCourseSeo} />
      <ProductJsonLd {...nextjsCourseProductLd} />
      <Hero />
      <Why />
      <Technologies />
      <ForWhom />
      <AllYouNeed />
      <Stats />
      <Testimonials />
      <DemoApp />
      <Authors />
      <Agenda />
      <PricingSection />
      {currentPricing ? null : (
        <NewsletterSection id="zapisz-sie" variant="inverse">
          Otrzymasz maila z unikalnym <strong>kodem rabatowym</strong>{" "}
          natychmiast gdy tylko ruszą zapisy na czwartą edycję kursu Next.js,
          React i TypeScripta.
        </NewsletterSection>
      )}
      <Questions />
      <Faq />
      {currentPricing ? (
        <PricingFooter />
      ) : (
        <NewsletterSection id="second">
          Otrzymasz maila z unikalnym <strong>kodem rabatowym</strong>{" "}
          natychmiast gdy tylko ruszą zapisy na czwartą edycję kursu Next.js,
          React i TypeScripta.
        </NewsletterSection>
      )}
      <Footer />
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {},
    revalidate: 60,
  };
}
