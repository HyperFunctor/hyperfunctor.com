import { MDXRemoteProps } from "next-mdx-remote";
import Link from "next/link";

import { MDXComponent } from "./NextMdx";

export const StaticPage = ({ markdown }: { markdown: MDXRemoteProps }) => {
  return (
    <section className="relative py-16 bg-white">
      <div className="mx-auto px-8 max-w-4xl">
        <Link href="/">
          <a className="block text-lg text-gray-400 mb-4">hyperfunctor.com</a>
        </Link>
        <div className="prose prose-brand lg:prose-lg max-w-3xl">
          <MDXComponent {...markdown} />
        </div>
      </div>
    </section>
  );
};
