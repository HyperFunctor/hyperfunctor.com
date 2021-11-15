import { LearningUnit } from "./LearningUnit";

const data = {
  unit: {
    title: "Przebieg i Tematyka Kursu",
    paragraph_1:
      'Kurs składa się z <strong class="font-semibold">2 głównych</strong> i <strong class="font-semibold">9 pobocznych</strong> modułów, które w praktyczny sposób wprowadzają uczestnika do tematyki budowania stron internetowych przy użyciu React.js i Next.js. Celem kursu jest dostarczyć całościowy pogląd na tworzenie stron internetowych w kontekście wspomnianych technologii.',
    paragraph_2:
      'Szkolenie będzie realizowane przez okres <strong class="font-semibold">12 tygodni</strong> w formie kursu wideo online o długości około <strong class="font-semibold">18 godzin</strong> na zamkniętej platformie. Podczas kursu prowadzący będzie dostępny w wydzielonych i wcześniej zakomunikowanych przedziałach czasowych, aby odpowiadać na pytania uczestników. Interakcje z prowadzącym będą miały charakter czatu tekstowego Discord oraz konferencji wideo.  Kursanci będą też zobowiązani aktywnie uczestniczyć w tygodniowych podsumowaniach oraz wykonywać na bieżąco prace domowe. Czas na wykonanie prac domowych nie jest uwzględniony w długości kursu.',
    paragraph_3:
      "Dodatkowo, uczestnicy programu będą realizowali w grupach 2-3 osobowych projekt autorski, tj. stronę internetową według własnego pomysłu, przez 3 kolejne tygodnie. Każda osoba będzie musiała poświęcić około 20-40 godzin na realizację tego projektu.",
  },
  modules: {},
  principals: [
    {
      name: "React.js",
      description:
        "Biblioteka do budowania interfejsów użytkownika w przeglądarce",
      points: [
        "Podstawy składni JavaScript i JSX",
        "Model React.js: widok jako funkcja stanu aplikacji",
        "Komponenty i ich kompozycja",
        "React Hooks",
        "Dynamiczne style CSS",
      ],
    },
    {
      name: "Next.js",
      description: "Framework do budowania aplikacji front-endowych w React.js",
      points: [
        "Pojęcie Strony i Komponentu",
        "Nawigacja, struktury menu i aktywne linki",
        "Dynamiczne generowanie ścieżek",
        "Przekazywanie danych do komponentów",
        "Pobieranie danych z systemu plików i zdalnej lokalizacji",
      ],
    },
  ],
};

export const LearningUnitList = () => {
  return (
    <section className="pb-20 bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="mt-2 mb-8 text-center leading-9 font-extrabold sm:text-3xl sm:leading-10 lg:text-4xl lg:leading-none">
          {data.unit.title}
        </h2>

        <p
          className="text-lg leading-relaxed font-light mb-8"
          dangerouslySetInnerHTML={{ __html: data.unit.paragraph_1 }}
        />
        <p
          className="text-lg leading-relaxed font-light mb-8"
          dangerouslySetInnerHTML={{ __html: data.unit.paragraph_2 }}
        />
        <p
          className="text-lg leading-relaxed font-light mb-8"
          dangerouslySetInnerHTML={{ __html: data.unit.paragraph_3 }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {data.principals.map((module, idx) => (
            <LearningUnit
              name={module.name}
              description={module.description}
              points={module.points}
              index={idx}
              key={idx}
            />
          ))}
        </div>

        <hr className="my-8" />
      </div>
    </section>
  );
};
