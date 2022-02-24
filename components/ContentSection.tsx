import Image from "next/image";

const stats = [
  { label: "tygodni", value: "13" },
  { label: "lekcji", value: "70" },
  { label: "godzin wideo", value: "Ponad 20" },
  { label: "satysfakcji", value: "100%" },
];

export function ContentSection() {
  return (
    <div className="relative bg-white py-16 sm:py-24">
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
          <div className="mt-12 relative text-base max-w-prose mx-auto lg:max-w-none">
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
                    Zajebisty kurs. Zajebisty kurs. Zajebisty kurs. Zajebisty
                    kurs. Zajebisty kurs. Zajebisty kurs. Zajebisty kurs.
                    Zajebisty kurs. Zajebisty kurs. Zajebisty kurs. Zajebisty
                    kurs. Zajebisty kurs. Zajebisty kurs. Zajebisty kurs.
                    Zajebisty kurs. Zajebisty kurs.{" "}
                  </p>
                </div>
              </div>
              <cite className="relative flex items-center sm:items-start bg-pink-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                <div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                  <div className="w-12 h-12 sm:w-20 sm:h-20">
                    <Image
                      layout="fill"
                      className="rounded-full bg-pink-300"
                      src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80"
                      alt=""
                    />
                  </div>
                </div>
                <span className="relative ml-4 text-pink-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                  <p className="text-white font-semibold sm:inline">
                    Konrad Walenrod
                  </p>{" "}
                  <p className="sm:inline">uczestnik pierwszej edycji</p>
                </span>
              </cite>
            </blockquote>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <div className="mt-6 text-gray-500 prose lg:prose-lg prose-pink ">
              <h2 className="font-extrabold tracking-tight">
                Gotów na tworzenie rozbudowanych aplikacji?
              </h2>
              <p className="lead">
                Bez ogródek, prostym i zrozumiałym językiem, dla każdego. Takie
                były nasze założenia, gdy tworzyliśmy program kursu Next.js,
                React i TypeScripta. Stawiamy na pragmatyzm i zero zbędnej
                teorii.
              </p>
              <h3>Konsultacje na żywo</h3>
              <p>
                W ramach kursu wchodzisz w interakcje z mentoremi na żywo. W
                wydzielonych godzinach Jakub i Michał są dostępni, aby
                odpowiadać na pytania uczestników na grupowej wideokonferencji.
              </p>
              <h3>Zamknięta społeczność</h3>
              <p>
                Nauka w pojedynkę często jest trudna. Dostęp do zamkniętej
                społeczności kursantów pozwala nie tylko na bardziej efektywną
                naukę, ale także motywuje, będąc w otoczeniu kursantów o
                podobnych celach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
