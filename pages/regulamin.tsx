import { promises as fs } from "fs";

import { InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";

import { StaticPage } from "../components/StaticPage";

export default function RegulaminPage({
  markdown,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo title="Regulamin Sklepu" />

      <StaticPage markdown={markdown} />
    </>
  );
}

export async function getStaticProps() {
  const source = await fs.readFile(`content/terms.pl.md`, "utf8");
  const markdown = await serialize(source);

  return {
    props: { markdown },
  };
}
