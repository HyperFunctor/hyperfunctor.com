import { DefaultSeoProps, SocialProfileJsonLdProps } from "next-seo";

const hyperfunctorTitle =
  "Szkoła programowania JavaScript, TypeScript, GraphQL";
const hyperfunctorDescription =
  "Szkoła programowania JavaScript, TypeScript, GraphQL dla ambitnych; bootcamp; webdevelopment";

export const socialProfileJsonLd: SocialProfileJsonLdProps = {
  type: "Organization",
  name: "Hyper Functor",
  url: "https://hyperfunctor.com",
  sameAs: [
    "https://www.facebook.com/zaiste.programuj",
    "https://www.instagram.com/zaiste.programuj",
  ],
};

export const defaultSeo: DefaultSeoProps = {
  titleTemplate: "%s | Hyper Functor",
  defaultTitle: hyperfunctorTitle,
  title: hyperfunctorTitle,
  description: hyperfunctorDescription,
  openGraph: {
    type: "website",
    locale: "pl_PL",
    site_name:
      "hyperfunctor.com – szkoła programowania JavaScript, TypeScript, GraphQL",
    url: "https://hyperfunctor.com",
    title: hyperfunctorTitle,
    description: hyperfunctorDescription,
    images: [
      {
        url: "https://hyperfunctor.com/og-hyper-functor.png?v2",
        alt: hyperfunctorTitle,
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
