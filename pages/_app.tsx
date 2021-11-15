import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";

import "../styles/main.css";
import { AppWrapper } from "../components/AppContext";
import { PL } from "../seo.config";

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
