import { DefaultSeo, ProductJsonLd, SocialProfileJsonLd } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/main.css";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useRef } from "react";

import { defaultSeo, socialProfileJsonLd } from "../seo.config";

declare global {
  interface Fbq {
    (name: string, value: string, ...rest: string[]): void;
    (...rest: string[]): void;
    push: Fbq;
    loaded: boolean;
    version: string;
    queue: Array<string[]>;
  }

  // eslint-disable-next-line no-var
  var FB_PIXEL_1: string;
  // eslint-disable-next-line no-var
  var FB_PIXEL_2: string;
  // eslint-disable-next-line no-var
  var GOOGLE_ID: string;

  interface Window {
    dataLayer: Parameters<Gtag.Gtag>[];
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}
globalThis.GOOGLE_ID = `G-3CVF7Z0P4M`;
globalThis.FB_PIXEL_1 = `481020725889556`;
globalThis.FB_PIXEL_2 = `704393714174175`;
// const FB_PIXEL = `624234665563627`;

const runAnalytics = () => {
  if (typeof window !== "undefined") {
    // Google
    window.dataLayer = window.dataLayer || [];
    window.gtag = ((...args: Parameters<Gtag.Gtag>) => {
      window.dataLayer.push(args);
    }) as Gtag.Gtag;
    gtag("js", new Date());
    gtag("config", GOOGLE_ID, { send_page_view: false });

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

    window.fbq("init", FB_PIXEL_1);
    window.fbq("track", "PageView");

    window.fbq("init", FB_PIXEL_2);
    window.fbq("track", "PageView");
  }
};

console.log(runAnalytics.toString());

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const prevAsPath = useRef<string | null>(null);
  useEffect(() => {
    if (prevAsPath.current === router.asPath) {
      return;
    }
    prevAsPath.current = router.asPath;
    gtag("event", "page_view");
  }, [router.asPath]);

  return (
    <>
      <Script
        id="gtag"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ID}`}
      />
      <Script
        id="pixel"
        strategy="afterInteractive"
        src="https://connect.facebook.net/en_US/fbevents.js"
      />
      <Script
        strategy="afterInteractive"
        data-domain="hyperfunctor.com"
        data-api="/api/event"
        src="/js/script.js"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >{`(${runAnalytics.toString()})()`}</Script>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=69"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=69"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=69"
        />
        <link rel="manifest" href="/site.webmanifest?v=69" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg?v=69"
          color="#1f2937"
        />
        <link rel="shortcut icon" href="/favicon.ico?v=69" />
        <meta name="msapplication-TileColor" content="#1f2937" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="facebook-domain-verification"
          content="06g2uajnvytpv7fd5wuqmemx69lcha"
        />
      </Head>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height={1}
          width={1}
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_1}&ev=PageView&noscript=1`}
          alt=""
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height={1}
          width={1}
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_2}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
      <DefaultSeo {...defaultSeo} />
      <Component {...pageProps} />
      <SocialProfileJsonLd {...socialProfileJsonLd} />
    </>
  );
};

export default MyApp;
