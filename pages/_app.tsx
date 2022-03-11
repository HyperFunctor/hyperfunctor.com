import { DefaultSeo, ProductJsonLd, SocialProfileJsonLd } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/main.css";
import Script from "next/script";

import { productJsonLd, seo, socialProfileJsonLd } from "../seo.config";

declare global {
  interface Fbq {
    (name: string, value: string, ...rest: string[]): void;
    (...rest: string[]): void;
    push: Fbq;
    loaded: boolean;
    version: string;
    queue: Array<string[]>;
  }

  interface Window {
    dataLayer: Parameters<Gtag.Gtag>[];
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

const GOOGLE_ID = `G-3CVF7Z0P4M`;
const FB_PIXEL = `481020725889556`;
// const FB_PIXEL = `624234665563627`;

if (typeof window !== "undefined") {
  // Google
  window.dataLayer = window.dataLayer || [];
  const gtag = ((...args: Parameters<Gtag.Gtag>) => {
    window.dataLayer.push(args);
  }) as Gtag.Gtag;
  gtag("js", new Date());
  gtag("config", GOOGLE_ID);

  // Facebook
  const fbq: Fbq = (...args: string[]) => {
    fbq.queue.push(args);
  };
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  window.fbq ??= fbq;
  window._fbq ??= fbq;

  fbq("init", FB_PIXEL);
  fbq("track", "PageView");
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        id="gtag"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ID}`}
      />
      <Script
        id="pixel"
        src="https://connect.facebook.net/en_US/fbevents.js"
        strategy="lazyOnload"
      />
      <Script
        strategy="lazyOnload"
        data-domain="hyperfunctor.com"
        data-api="/api/event"
        src="/js/script.js"
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
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
      <DefaultSeo
        {...seo}
        noindex={true}
        nofollow={true}
        disableGooglebot={true}
        dangerouslyDisableGooglebot={true}
        dangerouslySetAllPagesToNoIndex={true}
        dangerouslySetAllPagesToNoFollow={true}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height={1}
          width={1}
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
      <Component {...pageProps} />
      <ProductJsonLd {...productJsonLd} />
      <SocialProfileJsonLd {...socialProfileJsonLd} />
    </>
  );
};

export default MyApp;
