import { promises as fs } from "fs";

import { InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";

import { MDXComponent } from "../components/NextMdx";

export default function RegulaminPage({
  markdown,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo title="Regulamin" />

      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-lg text-gray-400 mb-4">hyperfunctor.com</div>
          <div className="prose prose-brand lg:prose-lg xl:prose-xl max-w-full">
            <MDXComponent {...markdown} />
          </div>
        </div>
      </section>
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
