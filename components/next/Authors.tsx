import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import Neander from "/public/neander.png";
import Miszczyszyn from "/public/miszczyszyn.jpg";

const people = [
  {
    name: "Jakub Neander",
    role: "Senior Fullstack Developer",
    imageUrl: Neander,
    shortBio: (
      <>
        <p>
          Jakub jest programistą z ponad 15-letnim doświadczeniem zawodowym.
          Karierę rozpoczynał w 2003 od pracy w{" "}
          <a href="http://www.man.poznan.pl/online/pl/">
            Poznańskim Centrum Superkomputerowo Sieciowym
          </a>{" "}
          pracując nad systemami kolejkowymi dla komputerów SPARC oraz nad
          integracją usług{" "}
          <a href="http://vlab.psnc.pl/">Wirtualnego Laboratorium</a> w
          technologii SOAP.
        </p>
      </>
    ),
    bio: (
      <>
        <p>
          W następnych latach pracował w Banku Zachodnim WBK (obecnie{" "}
          <a href="https://www.santander.pl/">Santander</a> ) jako programista,
          projektant i architekt aplikacji <strong>Java EE</strong>, m.in. przy
          budowie systemu bankowości elektronicznej Centrum24.
        </p>
        <p>
          Studiował informatykę (ze specjalizacją w sztucznej inteligencji) na{" "}
          <a href="https://wmi.amu.edu.pl/pl/">
            Uniwersytecie im. Adama Mickiewicza
          </a>{" "}
          w Poznaniu i{" "}
          <a href="http://www.u-psud.fr/en/index.html">
            Universite Paris-Sud XI
          </a>{" "}
          w Paryżu. Pracował w laboratorium informatycznym LIMSI w Paryżu.
          Stypendysta Rządu Francuskiego, w ramach którego realizował projekt z
          dziedziny sztucznej inteligencji dt. przetwarzania informacji
          przestrzenno-czasowej w tekstach języka naturalnego. Studiował także
          biznes elektroniczny i nowoczesne technologie na{" "}
          <a href="https://www.hec.edu/en">HEC Paris</a> oraz{" "}
          <a href="https://www.telecom-paris.fr/">Telecom Paristech</a> w
          Paryżu.
        </p>
        <p>
          Od 2011 prowadzi we Francji firmę informatyczną, która obługuje
          klientów korporacyjnych i instytucje rządowe.
        </p>
        <p>
          Od 2006 w ramach hobby organizuje konferencje programistyczne.
          Pomysłowadca pierwszej w Polsce konferencji dotyczących języków
          programowania <strong>Python</strong> i <strong>Ruby</strong> o nazwie
          RuPy. W latach 2014-2017 organizował konferencję{" "}
          <a href="https://polyconf.com/">PolyConf</a>, która promuje mniej
          znane języki programowania. Konferencje odbywały się w Polsce, w
          Czechach, na Węgrzech, we Francji i w Brazylii.
        </p>
      </>
    ),
    twitterUrl: "http://twitter.com/zaiste",
    linkedinUrl: "https://linkedin.com/in/mmiszczyszyn",
  },
  {
    name: "Michał Miszczyszyn",
    role: "Senior Fullstack Developer",
    imageUrl: Miszczyszyn,
    shortBio: (
      <>
        <p>
          Michał to doświadczony leader i programista full-stack zorientowany na
          biznes. Nie boi się żadnej technologii. Przedsiębiorca, aktywista,
          bloger, prelegent i nauczyciel.
        </p>
        <p>
          Autor i wydawca bestsellera: książki „
          <a href="https://typescriptnapowaznie.pl/">TypeScript na poważnie</a>
          ”.
        </p>
      </>
    ),
    bio: (
      <>
        <p>
          Redaktor biuletynu programistycznego „
          <a href="https://news.typeofweb.com/">
            Polski frontend i backend newsletter
          </a>
          ”.
        </p>
        <p>
          Twórca najpopularniejszego{" "}
          <a href="https://typeofweb.com/kurs/react-js">
            polskiego darmowego kursu React
          </a>
          .
        </p>
        <p>
          Założyciel bloga <a href="https://typeofweb.com">Type of Web</a>,
          który jest jednym z najpopularniejszych blogów programistycznych w
          Polsce (Open Source).
        </p>
        <p>
          Autor aplikacji DevFAQ: Największej społecznościowej bazy pytań z
          technicznych rozmów rekrutacyjnych (Open Source).
        </p>
        <p>
          Administrator strony{" "}
          <a href="https://polskifrontend.pl">Polskifrontend.pl</a>: agregator
          newsów frontendowych (Open Source).
        </p>
        <p>
          Twórca społeczności, prowadzi i zarządza największą siecią spotkań
          programistycznych w Polsce: meet.js. Organizator kilku edycji
          konferencji{" "}
          <a href="https://summit.meetjs.pl/2017/">meet.js Summit</a> z ponad
          500 uczestnikami i uczestniczkami na każdej.
        </p>
        <p>
          Uwielbia typy, języki funkcyjne, programowanie w parach i dzielić się
          pomysłami.
        </p>
      </>
    ),
    twitterUrl: "http://twitter.com/mmiszy",
    linkedinUrl: "https://linkedin.com/in/mmiszczyszyn",
  },
];

export function Authors() {
  return (
    <section className="bg-white" id="mentorzy">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Mentorzy z doświadczeniem w TypeScript, Next.js i GraphQL
            </h2>
            <p className="text-xl text-gray-500">
              Prowadzący to senior-deweloperzy z kilkunastoma latami
              komercyjnego doświadczenia oraz bogatym portfolio dydaktycznym.
            </p>
            <p className="text-xl font-bold text-gray-500">
              Nie jesteśmy specjalistami od marketingu, tylko od programowania.
              Jesteśmy rzetelni i autentyczni.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
              {people.map((person) => (
                <li key={person.name}>
                  <article className="space-y-4">
                    <div className="aspect-1 object-top">
                      <Image
                        className="object-cover shadow-lg rounded-lg"
                        src={person.imageUrl}
                        // layout="fill"
                        alt=""
                      />
                    </div>
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-pink-600">{person.role}</p>
                    </div>
                    <div className="prose-brand prose-lg">
                      {person.shortBio}
                      <Disclosure as="div">
                        {({ open }) => (
                          <>
                            <div className="text-lg">
                              <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-500">
                                <span className="h-7 flex items-center">
                                  <span className="mr-2">Czytaj dalej…</span>
                                  <ChevronDownIcon
                                    className={`
                                      ${
                                        open ? "-rotate-180" : "rotate-0"
                                      } h-6 w-6 transform
                                    `}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </div>
                            <Disclosure.Panel as="div">
                              {person.bio}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </div>

                    <ul className="flex space-x-5">
                      <li>
                        <a
                          href={person.twitterUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href={person.linkedinUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
