import { NextSeoProps } from "next-seo";

export const seo: NextSeoProps = {
  title: "React.js + Next.js od A do Z - Kurs Programowania w 12 tygodni",
  description:
    "Kurs jest zbudowany z myślą o osobach początkujących. Jeśli szukasz pierwszego kontaktu z programowaniem bądź programujesz w języku innymi niż JavaScript, ten kurs jest dla Ciebie.",
  canonical: "https://reactnextaz.pl",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    site_name: "reactnextaz.pl",
    url: "https://reactnextaz.pl",
    title: "React.js + Next.js od A do Z - Kurs Programowania w 12 tygodni",
    description:
      "Kurs jest zbudowany z myślą o osobach początkujących. Jeśli szukasz pierwszego kontaktu z programowaniem bądź programujesz w języku innymi niż JavaScript, ten kurs jest dla Ciebie.",
    images: [
      {
        url: "https://reactnextaz.pl/og-pl.png",
        alt: "React.js + Next.js od A do Z - Kurs Programowania w 12 tygodni",
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@zaiste",
    site: "reactnextaz.pl",
    cardType: "summary_large_image",
  },
};
