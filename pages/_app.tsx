import { DefaultSeo, ProductJsonLd, SocialProfileJsonLd } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/main.css";
import Script from "next/script";

import { productJsonLd, seo, socialProfileJsonLd } from "../seo.config";

declare global {
  interface Window {
    dataLayer: Parameters<Gtag.Gtag>[];
  }
}

if (typeof window !== "undefined") {
  window.dataLayer = window.dataLayer || [];
  const gtag = ((...args: Parameters<Gtag.Gtag>) => {
    window.dataLayer.push(args);
  }) as Gtag.Gtag;
  gtag("js", new Date());

  gtag("config", "G-3CVF7Z0P4M");
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        id="gtag"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-3CVF7Z0P4M"
      ></Script>
      <Script id="pixel">{`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '481020725889556');
fbq('track', 'PageView');`}</Script>
      <Script
        defer
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
          src="https://www.facebook.com/tr?id=624234665563627&ev=PageView&noscript=1"
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
