import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";

import "../styles/main.css";
import { PL } from "../seo.config";

import { AppWrapper } from "../components/AppContext";

const MyApp = ({
  Component,
  pageProps,
  source,
}: AppProps & { source: string }) => {
  return (
    <>
      <DefaultSeo {...PL} />
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
};

export default MyApp;
