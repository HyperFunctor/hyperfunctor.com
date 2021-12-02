import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const toJSON = (_: any) => _.json();

const status = {
  link: "Powrót do strony głównej",
  success: {
    title: 'Sukces',
    blob: "Dzięki za złożenie zamówienia. Na Twój adres e-mail została wysłana faktura potwierdzająca zakup. W ciągu kilku dni dostaniejsz wiadomość z informacją o kolejnych krokach. Dla przypomnienia, kurs rozpoczenie się w styczniu 2022."
  },
  cancel: {
    blob: "Twoje zamówienie zostało anulowane."
  }
}

export default function SuccessPage() {
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout/${router.query.session_id as string}`
      : null,
    (url: string) => fetch(url).then(toJSON)
  );

  if (error) return <div>failed to load</div>;

  return (
    <section className="py-16">
      <div className="max-w-screen-sm container mx-auto">
        <div className="mb-2">
          <Link href="/">
            <a className="text-blue-500 hover:text-blue-600">{status.link}</a>
          </Link>
        </div>
        <div className="rounded bg-white shadow p-8">
          <div className="text-center text-2xl font-semibold">
            {data?.status ? <span className="text-green-500">{status.success.title}</span> : 'loading...'}
          </div>
          {data?.status ?
            <p className="mt-4 prose text-center text-gray-800">{status.success.blob}</p>
            : <div></div>
          }
        </div>
      </div>
    </section>
  );
}

export function getStaticProps({ }) {
  return {
    props: {}
  }
}