import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import Stripe from 'stripe';

import { checkout, formatAsMoney } from '../../lib';
import { pricing } from '../index';

type OrderPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const order = {
  title: "Zamówienie",
  form: {
    fname: "Imię",
    lname: "Nazwisko",
    email: "Adres E-mail",
    confirm: "Potwierdzam, że zapoznałem się z <Link href=\"/terms/\"><a className=\"text-blue-500 hover:text-blue-600\">Regulaminem</a></Link> i zgadzam się na jego warunki.",
    invoice_title: "Faktura?",
    invoice_checkbox_name: "Proszę o wystawienie faktury",
    invoice_checkbox_desc: "Zaznacz, jeśli chciałbyś, abyśmy wystawili Ci fakturę na firmę",
    required: "Pole wymagane",
    company_name: "Nazwa Firmy",
    address: "Adres",
    city: "Miasto",
    zipcode: "Kod pocztowy",
    taxnumber: "Numer NIP"
  },
  button: "Zamawiam i płacę",
  info: "Nastąpi przekierowanie do płatności Stripe"
}

export default function Order({ bundle, discount }: OrderPageProps) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = handleSubmit(data => checkout(bundle, data))

  const invoice = watch('invoice');
  const pkg = pricing.full;
  const required_message = order.form.required;

  return (
    <section className="py-16">
      <div className="max-w-screen-sm container mx-auto">
        <form action="#" method="POST" onSubmit={onSubmit}>
          <h1 className="font-bold text-3xl text-center mb-8">{order.title}</h1>
          <div className="mt-10 sm:mt-0">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-2">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">{order.form.fname}</label>
                      <input
                        {...register("first_name", { required: true })} type="text" id="first_name" autoComplete="given-name"
                        className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.first_name ? 'focus:border-red-500 border-red-300' : ''}`} />
                      <p className="mt-1 text-red-500 text-sm">{errors.first_name && required_message}</p>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">{order.form.lname}</label>
                      <input {...register("last_name", { required: true })} type="text" id="last_name" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      <p className="mt-1 text-red-500 text-sm">{errors.last_name && required_message}</p>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">{order.form.email}</label>
                      <input {...register("email", { required: true })} type="email" id="email" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      <p className="mt-1 text-red-500 text-sm">{errors.email && required_message}</p>
                    </div>

                    <div className="col-span-6 mt-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input {...register("terms", { required: true })} type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="invoice" className="font-medium text-gray-700">
                            <div>Potwierdzam, że zapoznałem się z <Link href="/terms/"><a className="text-blue-500 hover:text-blue-600">Regulaminem</a></Link> i zgadzam się na jego warunki.</div>
                          </label>
                        </div>
                      </div>
                      <p className="mt-1 text-red-500 text-sm">{errors.terms && required_message}</p>
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
                    <legend className="text-base font-medium text-gray-900">{order.form.invoice_title}</legend>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input {...register("invoice")} type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="invoice" className="font-medium text-gray-700">{order.form.invoice_checkbox_name}</label>
                          <p className="text-gray-500">{order.form.invoice_checkbox_desc}</p>
                        </div>
                      </div>
                      {invoice && <div className="grid grid-cols-6 gap-2">
                        <div className="col-span-6">
                          <label htmlFor="company_name" className="block text-sm font-medium text-gray-700">{order.form.company_name}</label>
                          <input {...register("company_name", { required: true })} type="text" id="company_name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                          <p className="mt-1 text-red-500 text-sm">{errors.company_name && required_message}</p>
                        </div>

                        <div className="col-span-6">
                          <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">{order.form.address}</label>
                          <input {...register("street_address", { required: true })} type="text" id="street_address" autoComplete="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                          <p className="mt-1 text-red-500 text-sm">{errors.street_address && required_message}</p>
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700">{order.form.city}</label>
                          <input {...register("city", { required: true })} type="text" id="city" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                          <p className="mt-1 text-red-500 text-sm">{errors.city && required_message}</p>
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                          <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">{order.form.zipcode}</label>
                          <input {...register("postal_code", { required: true })} type="text" id="postal_code" autoComplete="postal-code" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                          <p className="mt-1 text-red-500 text-sm">{errors.postal_code && required_message}</p>
                        </div>

                        <div className="col-span-4">
                          <label htmlFor="nip" className="block text-sm font-medium text-gray-700">{order.form.taxnumber}</label>
                          <input {...register("nip", {})} type="text" id="nip" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                          <p className="mt-1 text-red-500 text-sm">{errors.nip && required_message}</p>
                        </div>
                      </div>}
                    </div>
                  </fieldset>
                </div>
              </div>

              <div className="mt-5 shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <h4 className="font-semibold text-2xl">{pricing.title}</h4>
                  <p className="mt-2 text-gray-600 text-lg">{pkg.name}</p>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <div className="">
                    <div className='text-xl font-bold line-through text-red-500'>
                      {formatAsMoney(pkg.price.regular)}
                    </div>
                    <div className='text-3xl font-semibold'>
                      {formatAsMoney(pkg.price.regular * (1 - (discount || 0) / 100))}
                    </div>
                  </div>
                  <div className="text-gray-600 text-sm">{pricing.vat}</div>
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 inline-flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {order.button}
              </button>
              <div className="mt-2 text-center text-gray-500">
                {order.info}
              </div>
            </div >
          </div >
        </form >
      </div >
    </section >
  );
}

// FIXME how to type this?
export async function getStaticProps({ params }: any) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2020-08-27",
  });

  const { bundle: code } = params as Record<string, string>;
  const { data } = await stripe.promotionCodes.list({ code })
  const { coupon: { percent_off: discount } } = data[0]

  return {
    props: { bundle: code, discount }
  }
}

export async function getStaticPaths() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2020-08-27",
  });
  const { data } = await stripe.promotionCodes.list({ limit: 30 });

  const codes = data.filter(_ => _.active).map(_ => ({ bundle: _.code.toLowerCase() }))
  const paths = codes.map(_ => ({ params: _ }))

  return {
    paths,
    fallback: false
  };
}