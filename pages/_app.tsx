import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/main.css";
import { AppWrapper } from "../components/AppContext";
import { seo } from "../seo.config";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          data-domain="zaisteprogramuj.pl"
          data-api="/api/event"
          src="/js/script.js"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=42"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=42"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=42"
        />
        <link rel="manifest" href="/site.webmanifest?v=42" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg?v=42"
          color="#62a26c"
        />
        <link rel="shortcut icon" href="/favicon.ico?v=42" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <DefaultSeo {...seo} />
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
};

export default MyApp;
