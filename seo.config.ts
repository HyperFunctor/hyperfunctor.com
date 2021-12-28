import { NextSeoProps } from "next-seo";

const title =
  "Kurs programowania Next.js / React.js w 12 tygodni - Zaiste, Programuj";

export const seo: NextSeoProps = {
  title,
  description:
    "Kurs jest zbudowany z myślą o osobach początkujących. Jeśli szukasz pierwszego kontaktu z programowaniem bądź programujesz w języku innymi niż TypeScript, ten kurs jest dla Ciebie.",
  canonical: "https://zaisteprogramuj.pl",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    site_name: "zaisteprogramuj.pl",
    url: "https://zaisteprogramuj.pl",
    title,
    description:
      "Kurs jest zbudowany z myślą o osobach początkujących. Jeśli szukasz pierwszego kontaktu z programowaniem bądź programujesz w języku innymi niż JavaScript, ten kurs jest dla Ciebie.",
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
