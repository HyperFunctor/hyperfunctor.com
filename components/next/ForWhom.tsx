import { CheckIcon } from "@heroicons/react/outline";
import Image from "next/image";

import Miszczyszyn from "/public/miszczyszyn.jpg";

const forWhom = [
  "Nieźle Ci idzie tworzenie aplikacji internetowych, ale chciałbyś poukładać i usystematyzować tę wiedzę?",
  "Obawiasz się, że popularne dzisiaj rozwiązania przestaną być używane za rok-dwa i chcesz uczyć się uniwersalnych konceptów?",
  "Korzystasz z z Vue albo Angulara i chętnie poznałbyś Reacta?",
  "Masz dość samozwańczych guru z YouTube, którzy każą Ci pisać kod w jeden konkretny sposób „bo tak”?",
  "Nie lubisz mieć wszystkiego podanego „na tacy” i chcesz trochę samodzielnie popracować?",
  "Podoba Ci się React, więc czas na kolejny krok?",
  "Umiesz tworzyć typowe Single Page Applications, ale chciałbyś, żeby działały lepiej i szybciej?",
  "Kumasz koncept statycznego generowania treści, ale nie do końca łapiesz co to jest to inkrementalne coś tam…",
  "Lub zwyczajnie chcesz się rozwijać i być na bieżąco 😁",
];

export function ForWhom() {
  return (
    <div className="relative bg-white py-4 pb-16" id="dla-kogo">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0 lg:translate-y-1/2">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative text-base max-w-prose mx-auto lg:max-w-none">
            <blockquote className="relative bg-white rounded-lg shadow-lg">
              <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <div className="relative text-lg text-gray-700 font-medium mt-8">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    Odczarowujemy edukację i podchodzimy do tematu zupełnie
                    inaczej niż większość: bazujemy na <em>pair programming</em>
                    , interakcjach z kursantami i ciągłej dyskusji.
                  </p>
                </div>
              </div>
              <cite className="relative flex items-center sm:items-start bg-pink-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                <span className="block relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                  <span className="block w-12 h-12 sm:w-20 sm:h-20">
                    <Image
                      layout="fill"
                      className="rounded-full bg-pink-300"
                      src={Miszczyszyn}
                      alt=""
                    />
                  </span>
                </span>
                <span className="relative ml-4 text-white font-normal leading-6 sm:ml-24 sm:pl-1">
                  <span className="font-semibold sm:inline">
                    Michał Miszczyszyn
                  </span>
                  <span className="hidden sm:inline">{" – "}</span>
                  <span className="block sm:inline">mentor</span>
                </span>
              </cite>
            </blockquote>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          <div>
            <div className="mt-6 text-gray-500 prose lg:prose-lg prose-pink">
              <h2 className="font-extrabold tracking-tight">Dla kogo?</h2>
              <p className="lead">
                Bez ogródek, prostym i zrozumiałym językiem, dla każdego. Takie
                były nasze założenia, gdy tworzyliśmy program kursu Next.js,
                React i TypeScripta. Stawiamy na pragmatyzm i zero zbędnej
                teorii.
              </p>
              <p>
                Mimo to, pewnie nadal zastanawiasz się{" "}
                <strong>„czy ten kurs jest dla mnie?”</strong> Sprawdźmy to z
                naszą checklistą. Odpowiedz, czy…
              </p>
            </div>
            <div>
              <ul className="list-none mt-6 space-y-4">
                {forWhom.map((text) => (
                  <li key={text}>
                    <CheckIcon
                      className="absolute h-6 w-6 text-green-500"
                      aria-hidden="true"
                    />
                    <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="prose lg:prose-lg mt-8">
              <p className="lead">
                Jeśli choć{" "}
                <strong>na jedno pytanie odpowiedziałeś „tak”</strong>, to ten
                kurs jest właśnie dla Ciebie!
              </p>
              <p className="lead">
                Jeśli nadal masz wątpliwości, to koniecznie{" "}
                <a href="mailto:hi@hyperfunctor.com">napisz do nas</a>! Pomożemy
                Ci podjąć właściwą decyzję.
              </p>
              <p className="lead">Co nas wyróżnia?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
