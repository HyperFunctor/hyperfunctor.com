import { AcademicCapIcon } from "@heroicons/react/outline";
import Image from "next/image";

import demoScreen from "../images/demo.png";

export function DemoApp() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-32 overflow-hidden">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
          <div className="py-8">
            <div>
              <span className="h-12 w-12 rounded-md flex items-center justify-center bg-pink-600">
                <AcademicCapIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
            </div>
            <div className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                Zbuduj prawdziwą aplikację
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                W czasie kursu Next.js, React, TypeScrpta i GraphQL zbudujesz
                pełnoprawną aplikację internetową od A do Z: ultraszybki,
                statycznie renderowany sklep internetowy.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Pomysł na projekt zaczerpnęliśmy od naszych partnerów,
                a zdobywana wiedza wprost odpowiada rynkowym wymaganiom.
              </p>
              <div className="mt-6">
                <a
                  href=""
                  className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700"
                >
                  Zapisz się teraz
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              loading="lazy"
              className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src={demoScreen.src}
              alt="Demo aplikacji, którą stworzysz na kursie"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
