import Link from 'next/link';

const status = {
  link: "Powrót do strony głównej",
  title: 'Status płatności',
  cancel: {
    title: 'Anulowano',
    blob: "Twoje zamówienie zostało anulowane."
  }
}

export default function CancelPage({ }) {
  return (
    <section className="py-16">
      <div className="max-w-screen-sm mx-auto">
        <div className="mb-2">
          <Link href="/">
            <a className="text-blue-500 hover:text-blue-600">{status.link}</a>
          </Link>
        </div>
        <div className="rounded bg-white shadow p-8">
          <div className="text-center text-2xl font-semibold">
            {status.title}: <span className="bg-red-400 px-2 py-1 text-white">{status.cancel.title}</span>
          </div>
          <p className="mt-4 prose text-center text-gray-800">{status.cancel.blob}</p>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps({ }) {
  return {
    props: {}
  }
}