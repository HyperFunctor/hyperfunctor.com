import { promises as fs } from "fs";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

export default function Regulamin({ markdown }) {
  // const content = hydrate(markdown, {})
  const content = markdown;

  return (
    <>
      <Head>
        <title>Terms & Conditions - React.js + Next.js from A to Z</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-lg text-gray-400 mb-4">reactnextaz.com</div>
          <div className="prose lg:prose-lg xl:prose-xl max-w-full">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const lang = process.env.GIT_BRANCH === "english" ? "en" : "pl";

  const source = await fs.readFile(`content/terms.${lang}.md`, "utf8");
  // const markdown = await renderToString(source, {})

  return {
    props: { markdown: source },
  };
}
