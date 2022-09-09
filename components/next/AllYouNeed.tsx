import {
  AcademicCapIcon,
  BookOpenIcon,
  GlobeAltIcon,
  ScaleIcon,
  LifebuoyIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Pragmatyzm ponad wszystko",
    description:
      "Next.js, React, TypeScript i GraphQL – wszystko, co potrzebne, aby stworzyć rozbudowaną aplikację internetową poznasz w 14 tygodni. To jest dokładnie to, czego teraz potrzebuje rynek, a program kursu jest <strong>dopracowany pod kątem pragmatyzmu.</strong>",
    icon: GlobeAltIcon,
  },
  {
    name: "Nauka przez eksperymentowanie",
    description:
      "Wierzymy, że najlepszym sposobem, aby nauczyć się programowania jest praca metodą prób i błędów. Niczym dziecko uczące się języka, nasi kursanci <strong>od początku będą pracować z prawdziwą aplikacją</strong> i mierzyć się z realnymi problemami.",
    icon: ScaleIcon,
  },
  {
    name: "Stały kontakt z mentorami",
    description:
      "Jeśli tylko potrzebujesz pomocy, podpowiedzi, albo ciekawostek, to <strong>nasi mentorzy są online każdego dnia</strong>. Rozwiązania problemów albo nowe wyzwania, to wszystko jest na wyciągnięcie ręki. Jesteś na głębokiej wodzie, ale nie jesteś sam!",
    icon: LifebuoyIcon,
  },
  {
    name: "Dla każdego coś…",
    description:
      "Znasz JS i nie wiesz co dalej? Pokierujemy Cię. Oprócz autorskich filmów, otrzymujesz również <strong>wyselekcjonowane przez nas materiały wysokiej jakości</strong> do poczytania i obejrzenia – poza zakresem kursu.",
    icon: UserGroupIcon,
  },
  {
    name: "Uniwersalna wiedza",
    description:
      "Frameworki przychodzą i odchodzą. Wzorce i dobre praktyki są stałe. My używamy konkretnych bibliotek, ale uczymy ogólnych i uniwersalnych dobrych wzorców. Zdobyta wiedza będzie przydatna zarówno za rok jak i dziesięć lat!",
    icon: BookOpenIcon,
  },
  {
    name: "Koniec z arbitralnymi decyzjami",
    description:
      "„Tak się po prostu robi” – słyszałeś to kiedyś? NO MORE. Wszystko, co pokazujemy ma uzasadnienie, podparcie w praktyce lub źródło. Nie uczymy bezmyślenego kopiowania lecz analizy i świadomości.",
    icon: AcademicCapIcon,
  },
];

export function AllYouNeed() {
  return (
    <section className="bg-gray-50 overflow-hidden py-10" id="o-kursie">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-80"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
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
            height={784}
            fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-base font-semibold text-pink-700 uppercase tracking-wide">
              Wszystko czego potrzebujesz do Next.js, GraphQL i TypeScripta
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">
              O kursie
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Chcesz budować aplikacje internetowe? Niestety, odnalezienie się w
              gąszczu różnych technologii webowych nie jest łatwe, a szukanie
              dobrych wzorców i praktyk to często godziny przedzierania się
              przez wątpliwej jakości materiały. My to zmieniamy!
            </p>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd
                  className="mt-2 text-base text-gray-500"
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                ></dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
