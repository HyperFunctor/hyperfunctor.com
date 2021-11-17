import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

export const getApolloClient = (
  _: unknown,
  initialState?: NormalizedCacheObject
) => {
  const httpLink = createHttpLink({
    uri: "https://api-eu-central-1.graphcms.com/v2/ckvz13wjd3x7001wd2x9j6na1/master",
  });
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache().restore(initialState || {}),
    ssrMode: !process.browser,
  });
};
