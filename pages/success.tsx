import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function SuccessPage() {
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.session_id ? `/api/checkout/${router.query.session_id}` : null,
    (url) => fetch(url).then((res) => res.json())
  );

  if (error) return <div>failed to load</div>;

  return (
    <section className="py-16">
      <div className="max-w-screen-sm container mx-auto">
        <div className="mb-2">
          <Link href="/">
            <a className="text-blue-500 hover:text-blue-600">
              Powrót do strony głównej
            </a>
          </Link>
        </div>
        <div className="rounded bg-white shadow p-8">
          <div className="text-center text-2xl font-semibold">
            website.status.title:{" "}
            {data?.status ? (
              <span className="text-green-500">
                website.status.success.title
              </span>
            ) : (
              "loading..."
            )}
          </div>
          {data?.status ? (
            <p className="mt-4 prose text-center text-gray-800">
              Dzięki za złożenie zamówienia. Na Twój adres e-mail została
              wysłana faktura potwierdzająca zakup. W ciągu kilku dni
              dostaniejsz wiadomość z informacją o kolejnych krokach. Dla
              przypomnienia, kurs rozpoczenie się w lutym 2021.
            </p>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </section>
  );
}
