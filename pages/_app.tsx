import { AppProps } from "next/app";
import { DefaultSeo } from 'next-seo';
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

import '../styles/main.css'
import { PL } from '../seo.config';
import { AppWrapper } from "../components/AppContext";


const httpLink = createHttpLink({
  uri: 'https://api-eu-central-1.graphcms.com/v2/ckvz13wjd3x7001wd2x9j6na1/master',
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({}),
  ssrMode: !process.browser,
});

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
  )
}

export default MyApp
