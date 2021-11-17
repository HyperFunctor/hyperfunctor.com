import * as Types from "./graphql";

import * as Operations from "./graphql";
import { NextRouter, useRouter } from "next/router";
import { QueryHookOptions, useQuery } from "@apollo/client";
import * as Apollo from "@apollo/client";
import type React from "react";
import { getApolloClient } from "../lib/apolloClient";
export async function getServerPageWebsite(
  options: Omit<Apollo.QueryOptions<Types.WebsiteQueryVariables>, "query">,
  ctx?: any
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.WebsiteQuery>({
    ...options,
    query: Operations.WebsiteDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageWebsiteComp = React.FC<{
  data?: Types.WebsiteQuery;
  error?: Apollo.ApolloError;
}>;
export const ssrWebsite = {
  getServerPage: getServerPageWebsite,
};
