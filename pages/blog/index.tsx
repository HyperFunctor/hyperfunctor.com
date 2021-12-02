import { InferGetStaticPropsType } from "next";
import Link from "next/link";

import { Layout } from "../../components/layout/Layout";
import { ssrPostList } from "../../generated/page";

type PostListPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function PostListPage({ posts }: PostListPageProps) {
  return (
    <Layout>
      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Blog</h2>
            <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
              <p className="text-xl text-gray-500">Get weekly articles in your inbox on how to grow your business.</p>
            </div>
          </div>
          <div className="mt-6 pt-10 grid gap-16 grid-cols-3">
            <div className="col-span-2">
              {posts.map((post) => (
                <div key={post.title} className="mb-8">
                  <Link href={`/blog/${post.slug}`}>
                    <a className="block">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="text-sm text-gray-500">
                        {/* <time dateTime={post.datetime}>{post.date}</time> */}
                      </p>
                      <p className="mt-3 text-base text-gray-500">{post.body}</p>
                    </a>
                  </Link>
                  <div className="mt-3">
                    <Link href={`/blog/${post.slug}`}>
                      <a className="text-base font-semibold text-yellow-600 hover:text-yellow-500">
                        Read full story
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )

}

export async function getStaticProps() {
  const { props: { data: { posts } } } = await ssrPostList.getServerPage({});

  return {
    props: { posts },
  };
}
