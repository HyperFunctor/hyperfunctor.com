import { promises as fs } from "fs";
import yaml from "js-yaml";
import Link from "next/link";

export default function CancelPage({ website }) {
  return (
    <section className="py-16">
      <div className="max-w-screen-sm container mx-auto">
        <div className="mb-2">
          <Link href="/">
            <a className="text-blue-500 hover:text-blue-600">
              {website.status.link}
            </a>
          </Link>
        </div>
        <div className="rounded bg-white shadow p-8">
          <div className="text-center text-2xl font-semibold">
            {website.status.title}:{" "}
            <span className="text-orange-500">
              {website.status.cancel.title}
            </span>
          </div>
          <p className="mt-4 prose text-center text-gray-800">
            {website.status.cancel.blob}
          </p>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps({}) {
  const f = await fs.readFile("data.yml", "utf8");
  const data = yaml.load(f);
  const lang = process.env.GIT_BRANCH === "english" ? "en" : "pl";
  const { [lang]: website } = data;

  return {
    props: { website },
  };
}
