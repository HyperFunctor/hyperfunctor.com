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
    uri: process.env.GRAPHCMS_API_URL,
  });
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache().restore(initialState || {}),
    ssrMode: !process.browser,
    assumeImmutableResults: true,
  });
};
