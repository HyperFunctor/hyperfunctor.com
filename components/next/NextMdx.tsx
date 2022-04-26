import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import { ComponentProps } from "react";

type MDXRemoteProps = Parameters<typeof MDXRemote>[0];

// MDX Components
const components = {
  a: ({ href, ...props }: ComponentProps<"a">) => {
    if (!href) {
      return <a {...props}></a>;
    }
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  },
};

export const MDXComponent = (props: Omit<MDXRemoteProps, "components">) => {
  return <MDXRemote {...props} components={components} />;
};
