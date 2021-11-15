import {
  CheckIcon,
  LightBulbIcon,
  LightningBoltIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { BlogNotification } from "./BlogNotification";
import { LogoCloud } from "./LogoCloud";

const points = [
  '12 tygodni nauki (<span class="font-bold">15h</span>) + 3 tygodnie projekt końcowy (<span class="font-bold">30h</span>)',
  "Całościowe wprowadzenie do React.js",
  "Uzywamy TypeScript",
  "Najpopularniejsze narzędzie dla React.js: Next.js w wersji 12",
  "Dwóch prowadzących z wieloletnim doświadczeniem zawodowym",
  "Dla najlepszych: płatne praktyki zawodowe w IT",
];

export function Hero2() {
  return (
    <div className="bg-white pb-8 sm:pb-12 lg:pb-12">
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div>{/* Logo */}</div>
            <div>
              <BlogNotification />
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
                  Zacznij programować <br />{" "}
                  <span className="text-pink-400">juz dziś</span>
                </h1>
                <p className="mt-6 text-xl text-gray-500">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo.
                </p>
                <ul className="list-none mt-6">
                  {points.map((argument, idx) => (
                    <li className="py-2" key={idx + 1}>
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold w-8 h-8 uppercase text-gray-800 bg-yellow-50 mr-3  inline-flex items-center justify-center rounded-full">
                            <StarIcon
                              className="h-5 w-5 text-yellow-300"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <div>
                          <h4
                            className="text-gray-700"
                            dangerouslySetInnerHTML={{ __html: argument }}
                          ></h4>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <form action="#" className="mt-12 sm:max-w-lg sm:w-full sm:flex">
                <div className="min-w-0 flex-1">
                  <label htmlFor="hero-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="hero-email"
                    type="email"
                    className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md border border-transparent px-5 py-3 bg-pink-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
                  >
                    Chcę wziąć udział
                  </button>
                </div>
              </form>
              <div className="mt-6">
                <div className="min-w-0 flex-1 py-1 text-gray-500 sm:py-3">
                  <span className="font-medium text-gray-900">
                    Kurs zaczyna się
                  </span>{" "}
                  <span className="font-medium text-pink-600">
                    18 stycznia 2022
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="z-10 flex items-center justify-center">
            <img
              className="inline-block h-64 w-64 rounded-full border-8"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <div className="absolute inset-y-0 left-1/2 h-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
              <svg
                className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
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
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
