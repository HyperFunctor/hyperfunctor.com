import { promises as fs } from "fs";

import { InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";

import { MDXComponent } from "../components/NextMdx";

export default function PrivacyPage({
  markdown,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Terms & Conditions - React.js + Next.js from A to Z</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-lg text-gray-400 mb-4">reactnextaz.com</div>
          <div className="prose prose-brand lg:prose-lg xl:prose-xl max-w-full">
            <MDXComponent {...markdown} />
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const source = await fs.readFile(`content/privacy.pl.md`, "utf8");
  const markdown = await serialize(source);

  return {
    props: { markdown },
  };
}
