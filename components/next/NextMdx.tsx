import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { ComponentProps } from "react";

type MDXRemoteProps = Parameters<typeof MDXRemote>[0];

// MDX Components
const components = {
  a: ({ href, ...props }: ComponentProps<"a">) => {
    if (!href) {
      return <a {...props} />;
    }
    return <Link href={href} {...props} ref={null} />;
  },
};

export const MDXComponent = (props: Omit<MDXRemoteProps, "components">) => {
  return <MDXRemote {...props} components={components} />;
};
