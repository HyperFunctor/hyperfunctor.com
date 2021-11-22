import { GetStaticPropsResult } from "next";
import { DeepReadonly } from "ts-essentials";

import { SectionsFragment } from "./generated/graphql";

export type Awaited<T> = T extends Promise<infer R> ? Awaited<R> : T;

export type InferGetStaticPathsType<T extends (...args: any) => any> = Awaited<
  ReturnType<T>
> extends { paths: ReadonlyArray<infer P> }
  ? P
  : never;

export type InferGetStaticPropsType<T> = T extends (
  ...args: any[]
) => Promise<GetStaticPropsResult<infer P>> | GetStaticPropsResult<infer P>
  ? DeepReadonly<Exclude<P, undefined>>
  : never;

export type SectionMetadata = Omit<
  SectionsFragment["sections"][number],
  "content"
>;
