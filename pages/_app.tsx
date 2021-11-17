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
      </Head>
      <DefaultSeo {...seo} />
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
};

export default MyApp;
