/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/outline";

const features = [
  {
    name: "Nowoczesny frontend",
    description:
      "Zapomnij o naleciałościach historycznych. Uczymy tylko <strong>najnowszych, najwydajniejszych i uznanych rozwiązań</strong>.",
  },
  {
    name: "Uniwersalna wiedza",
    description:
      "Cała zdobyta <strong>wiedza jest tak uniwersalna</strong>, że bez trudu wykorzystasz ją w <strong>Remix, Gatsby, Nuxt</strong> (Vue.js) i Angularze.",
  },
  {
    name: "Seniorzy z doświadczeniem",
    description:
      "Jakub i Michał pracują w branży od kilkunastu lat. Są <strong>przede wszystkim praktykami</strong>, a później wykładowcami. Zero ściemy.",
  },
  {
    name: "Maksimum praktyki",
    description:
      "Teorię sam sobie doczytasz z materiałów dodatkowych. Kurs skupia się na <strong>konkretnym celu biznesowym: budowaniu aplikacji</strong>.",
  },
  {
    name: "Dożywotni dostęp",
    description:
      "Zachęcamy do przerabiania materiałów na bieżąco, ale bez stresu: możesz do nich wrócić <strong>kiedy zechcesz</strong>.",
  },
  {
    name: "Przyszłe aktualizacje treści",
    description:
      "Nowoczesny kurs musi być aktualny. Każda kolejna edycja to <strong>nowe materiały i zmiany</strong>, do których również masz dostęp.",
  },
  {
    name: "Zamknięta grupa",
    description:
      "Otrzymujesz na zawsze dostęp do <strong>zamkniętej grupy Programistów Nowoczesnego Frontendu</strong>. Pomoc i materiały – online niemal 24/7.",
  },
  {
    name: "Zadowolenie lub zwrot kasy",
    description:
      "Napisz co Ci się nie spodobało. Jeśli nic nie będziemy mogli poradzić, to <strong>pieniądze po prostu wrócą na Twoje konto</strong>.",
  },
];

export const Why = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto pt-4 pb-8 px-4 sm:px-6 lg:pb-12 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Masz dość kursów pełnych złych praktyk?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Większośc kursów w Internecie jest pobieżna, przestarzała lub pełna
            błędów i złych praktyk. Na pewno wiesz o czym mówimy.{" "}
            <strong>U nas jest inaczej.</strong>
          </p>
        </div>
        <ul className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <li key={feature.name}>
              <CheckIcon
                className="absolute h-6 w-6 text-green-500"
                aria-hidden="true"
              />
              <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                {feature.name}
              </p>
              <p
                className="mt-2 ml-9 text-base text-gray-500"
                dangerouslySetInnerHTML={{ __html: feature.description }}
              ></p>
            </li>
          ))}
        </ul>
        <div className="max-w-3xl mt-12 mx-auto text-center">
          <p className="mt-4 text-lg text-gray-800">
            …a to tylko kilka powodów, by dołączyć do naszego kursu Nowoczesnego
            Frontendu.
          </p>
          <p className="text-lg text-gray-800">
            Poniżej znajdziesz więcej informacji.{" "}
            <strong>Nic nie ryzykujesz!</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
