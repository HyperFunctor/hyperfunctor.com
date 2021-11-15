import { useForm } from "react-hook-form";
import Link from "next/link";

import { checkout } from "../../lib";
import { InferGetStaticPathsType, InferGetStaticPropsType } from "../../types";

export default function Order({
  bundle,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => checkout(bundle.key, data));

  const invoice = watch("invoice");

  return (
    <section className="py-16">
      <div className="max-w-screen-sm container mx-auto">
        <form action="#" method="POST" onSubmit={onSubmit}>
          <h1 className="font-bold text-3xl text-center mb-8">Zamówienie</h1>
          <div className="mt-10 sm:mt-0">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-2">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Imię
                      </label>
                      <input
                        {...register("first_name", { required: true })}
                        type="text"
                        id="first_name"
                        autoComplete="given-name"
                        className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
                          errors.first_name
                            ? "focus:border-red-500 border-red-300"
                            : ""
                        }`}
                      />
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.first_name && `Pole wymagane`}
                      </p>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nazwisko
                      </label>
                      <input
                        {...register("last_name", { required: true })}
                        type="text"
                        id="last_name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.last_name && `Pole wymagane`}
                      </p>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Adres E-mail
                      </label>
                      <input
                        {...register("email", { required: true })}
                        type="email"
                        id="email"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.email && `Pole wymagane`}
                      </p>
                    </div>

                    <div className="col-span-6 mt-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            {...register("terms", { required: true })}
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="invoice"
                            className="font-medium text-gray-700"
                          >
                            {
                              <div>
                                Potwierdzam, że zapoznałem się z{" "}
                                <Link href="/terms/">
                                  <a
                                    className="text-blue-500 hover:text-blue-600"
                                    target="_blank"
                                  >
                                    Regulaminem
                                  </a>
                                </Link>{" "}
                                i zgadzam się na jego warunki.
                              </div>
                            }
                          </label>
                        </div>
                      </div>
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.terms && `Pole wymagane`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-2">
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="coupon"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Coupon
                      </label>
                      <input
                        {...register("coupon", {})}
                        type="text"
                        name="coupon"
                        id="email"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200"></div>
            </div>
          </div>

          <div className="mt-10 sm:mt-0">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <fieldset>
                    <legend className="text-base font-medium text-gray-900">
                      Faktura?
                    </legend>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            {...register("invoice")}
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="invoice"
                            className="font-medium text-gray-700"
                          >
                            I&apos;d like an invoice
                          </label>
                          <p className="text-gray-500">
                            Select if you would like us to send you an invoice
                          </p>
                        </div>
                      </div>
                      {invoice && (
                        <div className="grid grid-cols-6 gap-2">
                          <div className="col-span-6">
                            <label
                              htmlFor="company_name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Nazwa Firmy
                            </label>
                            <input
                              {...register("company_name", { required: true })}
                              type="text"
                              id="company_name"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            <p className="mt-1 text-red-500 text-sm">
                              {errors.company_name && `Pole wymagane`}
                            </p>
                          </div>

                          <div className="col-span-6">
                            <label
                              htmlFor="street_address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Adres
                            </label>
                            <input
                              {...register("street_address", {
                                required: true,
                              })}
                              type="text"
                              id="street_address"
                              autoComplete="street-address"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            <p className="mt-1 text-red-500 text-sm">
                              {errors.street_address && `Pole wymagane`}
                            </p>
                          </div>

                          <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Miasto
                            </label>
                            <input
                              {...register("city", { required: true })}
                              type="text"
                              id="city"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            <p className="mt-1 text-red-500 text-sm">
                              {errors.city && `Pole wymagane`}
                            </p>
                          </div>

                          <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                            <label
                              htmlFor="postal_code"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Kod pocztowy
                            </label>
                            <input
                              {...register("postal_code", { required: true })}
                              type="text"
                              id="postal_code"
                              autoComplete="postal-code"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            <p className="mt-1 text-red-500 text-sm">
                              {errors.postal_code && `Pole wymagane`}
                            </p>
                          </div>

                          <div className="col-span-4">
                            <label
                              htmlFor="nip"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Numer NIP
                            </label>
                            <input
                              {...register("nip", {})}
                              type="text"
                              id="nip"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            <p className="mt-1 text-red-500 text-sm">
                              {errors.nip && `Pole wymagane`}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </fieldset>
                </div>
              </div>

              <div className="mt-5 shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <h4 className="font-semibold text-2xl">
                    Poznaj tajniki tworzenia stron internetowych przy użyciu
                    React.js i Next.js
                  </h4>
                  <p className="mt-2 text-gray-600 text-lg">{bundle.name}</p>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <div className="font-bold text-3xl">
                    {bundle.price.discounted} zł
                  </div>
                  <div className="text-gray-600 text-sm">+&nbsp;VAT</div>
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 inline-flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Zamawiam i płacę
              </button>
              <div className="mt-2 text-center text-gray-500">
                Nastąpi przekierowanie do płatności Stripe
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export async function getStaticProps({
  params,
}: InferGetStaticPathsType<typeof getStaticPaths>) {
  const bundle = bundles[params.bundle];

  return {
    props: { bundle },
  } as const;
}

export async function getStaticPaths() {
  const paths = [
    { params: { bundle: "basic" } },
    { params: { bundle: "full" } },
  ] as const;

  return {
    paths,
    fallback: false,
  };
}

const bundles = {
  full: {
    buy: "Kup",
    key: "full",
    name: "Pełen Pakiet",
    cheaper: "mniej o",
    until: "do 24/01/2021",
    currency: "zł",
    price: {
      regular: 1399,
      discounted: 999,
    },
    elements: [
      `kurs wideo`,
      `napisy w wersji polskiej, angielskiej i francuskiej`,
      `konsultacje wideo (grupowo)`,
      `dostęp do <strong>prywatnego kanału Discord</strong> z autorem i współuczestnikami kursu`,
    ],
  },
  basic: {
    buy: "Kup",
    key: "basic",
    name: "Tylko Wideo",
    cheaper: "mniej o",
    until: "do 24/01/2021",
    currency: "zł",
    price: {
      regular: 999,
      discounted: 699,
    },
    elements: [`kurs wideo`],
  },
} as const;
