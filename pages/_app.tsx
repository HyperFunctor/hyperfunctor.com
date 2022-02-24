import { DefaultSeo, ProductJsonLd, SocialProfileJsonLd } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/main.css";
import Script from "next/script";

import { productJsonLd, seo, socialProfileJsonLd } from "../seo.config";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script id="gtm">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M3XQX83');`}</Script>
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
        data-domain="zaisteprogramuj.pl"
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
        <meta
          name="google-site-verification"
          content="SiPrRJJyiYXMKAZhjo8QJsKBfMzPeFEXta_QjHjl81s"
        />
      </Head>
      <DefaultSeo {...seo} />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-M3XQX83"
          height={0}
          width={0}
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
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
