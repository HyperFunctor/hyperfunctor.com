import { MDXRemote } from "next-mdx-remote";

type MDXRemoteProps = Parameters<typeof MDXRemote>[0];

// MDX Components
const components = {};

export const MDXComponent = (props: Omit<MDXRemoteProps, "components">) => {
  return <MDXRemote {...props} components={components} />;
};
