import {
  BeakerIcon,
  BriefcaseIcon,
  CheckIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

import { useCountdown } from "../../lib/hooks";
import {
  formatDate,
  formatMoney,
  getCurrentPricing,
  getGrossPrice,
  getLastDate,
  releaseDate,
  standardPrice,
} from "../../lib/pricing";

import { agenda } from "./Agenda";
import { PulseDot } from "./PulseDot";

const features = [
  {
    name: "Budowa prawdziwej aplikacji",
    icon: BriefcaseIcon,
    description:
      "Głęboko wierzymy, że nie ma sensu wałkować suchej teorii. Od pierwszego dnia budujesz prawdziwą aplikację.",
  },
  {
    name: "Nowoczesny kod, uniwersalna wiedza",
    icon: KeyIcon,
    description:
      "Frameworki przychodzą i odchodzą, a wzorce są uniwersalne. Uczymy dobryk praktyk i zasad na przykładzie Next.js.",
  },
  {
    name: "Nauka przez eksperymentowanie",
    icon: BeakerIcon,
    description:
      "Nie wkuwamy na pamięć. TypeScript i GraphiQL pomagają nam eksperymentować dzięki inteligentnym podpowiedziom.",
  },
];
const checklist = [
  "Dożywotni dostęp",
  "Aktualizacje materiałów",
  "Zamknięta grupa",
  "Stały kontakt z mentorami",
  "Konsultacje live",
  "Gwarancja satysfakcji",
];

export function PricingSection() {
  const { currentPricing } = getCurrentPricing();

  const finalCountDown = useCountdown(getLastDate());

  if (!currentPricing) {
    return null;
  }

  const isPastDeadline = new Date() > releaseDate;
  const normalPrice = formatMoney(getGrossPrice(standardPrice));
  const discountPrice = formatMoney(getGrossPrice(currentPricing.price));
  const isDiscount = normalPrice !== discountPrice;

  return (
    <div className="relative bg-white">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gray-800" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:px-8 lg:grid lg:grid-cols-2">
        <div className="bg-white py-8 px-4 sm:py-16 sm:px-6 lg:px-0 lg:pr-8">
          <div className="max-w-lg mx-auto lg:mx-0">
            <h2 className="mt-2 text-4xl font-extrabold text-gray-900">
              Wybierz Kurs Nowoczesnego Frontendu: Next.js, React, GraphQL
              i TypeScript
            </h2>
            <p className="text-2xl mt-4">
              Kurs Nowoczesnego Frontendu kosztuje mniej niż większość
              jednodniowych szkoleń!
            </p>
            <p className="my-4 text-xl">
              Materiał jest rozłożony na {agenda.length} tygodni, co oznacza, że
              tydzień naszego kursu kosztuje{" "}
              <strong className="bg-pink-500 text-white px-1 shadow-md shadow-pink-300">
                tylko około{" "}
                {Math.round(currentPricing.price / agenda.length / 5) * 5} zł
                netto
              </strong>
              . To znacznie mniej niż wynosi przeciętna stawka godzinowa
              programisty aplikacji webowych.
            </p>
            <p className="mb-6 text-xl">
              Zakup naszego kursu zwróci się{" "}
              <span className="underline decoration-pink-500">
                niezwykle szybko
              </span>
              .
            </p>
            <dl className="mt-12 space-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute h-12 w-12 flex items-center justify-center bg-gray-500 rounded-md">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="bg-gray-800 py-8 px-4 sm:py-24 sm:px-6 lg:bg-none lg:px-0 lg:pl-8 lg:flex lg:items-center lg:justify-end">
          <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
            <div>
              <h2 className="sr-only">Cena kursu</h2>
              <p>
                <span className="flex flex-col text-center">
                  {isDiscount && (
                    <del className="text-3xl text-pink-400 mr-2">
                      {formatMoney(getGrossPrice(standardPrice))}
                    </del>
                  )}
                  <span className="text-5xl font-extrabold text-white tracking-tight mt-1">
                    {formatMoney(getGrossPrice(currentPricing.price))} brutto
                  </span>
                  <small className="text-white">
                    (wystawiamy faktury VAT 23%)
                  </small>
                  {!isPastDeadline && (
                    <>
                      <span className="mt-4 text-2xl font-medium text-gray-100">
                        Całkowite zamknięcie sprzedaży{" "}
                        <strong className="underline decoration-2 underline-offset-2 decoration-solid text-white">
                          {formatDate(getLastDate())}
                        </strong>
                        !
                      </span>
                    </>
                  )}
                </span>
              </p>
            </div>
            <ul
              role="list"
              className="rounded overflow-hidden grid gap-px sm:grid-cols-2"
            >
              {checklist.map((item) => (
                <li
                  key={item}
                  className="bg-gray-800 bg-opacity-50 py-4 px-2 flex items-center space-x-3 text-base text-white"
                >
                  <CheckIcon
                    className="h-6 w-6 text-gray-300"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href={currentPricing.cartUrl}
              target="_blank"
              className="block mt-3 w-full px-6 py-4 border border-transparent font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 text-center text-4xl text-white bg-pink-600 hover:bg-pink-700 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-pink-500"
            >
              Kupuję dożywotni dostęp
              <PulseDot />
            </Link>
            {isPastDeadline ? (
              <p className="-translate-y-6 text-xl text-center font-medium text-gray-200">
                Kurs wystartował {formatDate(releaseDate)}.
              </p>
            ) : (
              <p className="-translate-y-6 text-xl text-center font-medium text-gray-200">
                Start kursu {formatDate(releaseDate)}.
              </p>
            )}
            {/* <p className="text-white font-bold text-center text-2xl sm:text-3xl">
              Do końca sprzedaży: {finalCountDown}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
