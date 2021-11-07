import { promises as fs } from 'fs';
import yaml from 'js-yaml';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const toJSON = _ => _.json();

export default function SuccessPage({ website }) {
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout/${router.query.session_id}`
      : null,
      url => fetch(url).then(toJSON)
  );

  if (error) return <div>failed to load</div>;

  return (
    <section className="py-16">
      <div className="max-w-screen-sm container mx-auto">
        <div className="mb-2">
          <Link href="/">
            <a className="text-blue-500 hover:text-blue-600">{website.status.link}</a>
          </Link>
        </div>
        <div className="rounded bg-white shadow p-8">
          <div className="text-center text-2xl font-semibold">
            {website.status.title}: {data?.status ? <span className="text-green-500">{website.status.success.title}</span> : 'loading...'}
          </div>
          {data?.status ? 
            <p className="mt-4 prose text-center text-gray-800">{website.status.success.blob}</p>
            : <div></div>
          }
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps({ }) {
  const f = await fs.readFile('data.yml', 'utf8');
  const data = yaml.load(f);
  const lang = process.env.GIT_BRANCH === 'english' ? 'en' : 'pl';
  const { [lang]: website } = data;

  return {
    props: { website }
  }
}