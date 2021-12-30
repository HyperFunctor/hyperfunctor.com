import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/main.css";
import Script from "next/script";

import { AppWrapper } from "../components/AppContext";
import { seo } from "../seo.config";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script id="gtm">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M3XQX83');`}</Script>
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M3XQX83"
            height={0}
            width={0}
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
};

export default MyApp;
