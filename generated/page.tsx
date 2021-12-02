import * as Types from "./graphql";

import * as Operations from "./graphql";
import { NextRouter, useRouter } from "next/router";
import { QueryHookOptions, useQuery } from "@apollo/client";
import * as Apollo from "@apollo/client";
import type React from "react";
import { getApolloClient } from "../lib/apolloClient";
export async function getServerPagePostElement(
  options: Omit<Apollo.QueryOptions<Types.PostElementQueryVariables>, "query">,
  ctx?: any
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.PostElementQuery>({
    ...options,
    query: Operations.PostElementDocument,
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
export type PagePostElementComp = React.FC<{
  data?: Types.PostElementQuery;
  error?: Apollo.ApolloError;
}>;
export const ssrPostElement = {
  getServerPage: getServerPagePostElement,
};
export async function getServerPagePostList(
  options: Omit<Apollo.QueryOptions<Types.PostListQueryVariables>, "query">,
  ctx?: any
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.PostListQuery>({
    ...options,
    query: Operations.PostListDocument,
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
export type PagePostListComp = React.FC<{
  data?: Types.PostListQuery;
  error?: Apollo.ApolloError;
}>;
export const ssrPostList = {
  getServerPage: getServerPagePostList,
};
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
