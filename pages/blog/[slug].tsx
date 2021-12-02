import { InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";

import { MDXComponent } from "../../components/NextMdx";
import { Layout } from "../../components/layout/Layout";
import { ssrPostElement, ssrPostList } from "../../generated/page";

type PostPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Post({ post }: PostPageProps) {
  return (
    <Layout>
      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="max-w-lg mx-auto px-4 sm:px-6 xl:max-w-7xl xl:px-0">
          <header className="py-8 xl:pb-16">
            <div>
              <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                {post?.title}
              </h1>
            </div>
          </header>
          <div className="grid grid-cols-4">
            <div className="col-span-3">
              <main className="prose lg:prose-lg max-w-none">
                {post?.body && <MDXComponent {...post?.body} />}
              </main>
            </div>
            <div>Author info</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

function toMdx(content: string | undefined | null) {
  if (content === null || content === undefined) {
    return content;
  }
  return serialize(content);
}

export async function getStaticPaths() {
  const { props: { data } } = await ssrPostList.getServerPage({})

  const paths = data.posts.map(_ => ({ params: { slug: _.slug } }))

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const { props: { data } } = await ssrPostElement.getServerPage({ variables: { slug } });

  return {
    props: {
      post: { ...data.post, body: await toMdx(data.post?.body as string) }
    }
  }
}