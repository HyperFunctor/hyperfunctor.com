import Link from "next/link";

import { Newsletter } from "../Newsletter";

export const Footer = () => {
  return (
    <footer className="bg-gray-800" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="flex flex-row">
            <Link href="/regulamin">
              <a className="block whitespace-nowrap text-pink-400 font-semibold hover:text-pink-500">
                Regulamin
              </a>
            </Link>
            <Link href="/polityka-prywatnosci">
              <a className="block ml-4 whitespace-nowrap text-pink-400 font-semibold hover:text-pink-500">
                Polityka Prywatności
              </a>
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              O Nas
            </h3>
            <p className="mt-2 text-base text-gray-300">
              Kretes sp. z o.o.<br />
              Chmielna 2 / 31<br />
              00-020 Warszawa
            </p>
          </div>
          <div className="max-w-md lg:mt-0">
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a
              href="https://www.facebook.com/zaiste.programuj"
              className="text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">YouTube</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2021 zaisteprogramuj.pl Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};
