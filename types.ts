import { GetStaticProps, GetStaticPropsResult } from "next";

export type Awaited<T> = T extends Promise<infer R> ? Awaited<R> : T;

export type InferGetStaticPathsType<T extends (...args: any) => any> = Awaited<
  ReturnType<T>
> extends { paths: ReadonlyArray<infer P> }
  ? P
  : never;

export type InferGetStaticPropsType<T> = T extends (
  ...args: any[]
) => Promise<GetStaticPropsResult<infer P>>
  ? P
  : never;
