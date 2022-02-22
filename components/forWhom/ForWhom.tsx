import { ForWhomItem } from "./ForWhomIteam";

export const ForWhom = () => {
  return (
    <section
      className="relative py-16 bg-gradient-to-r from-gray-50 to-pink-50 border-t-4 border-pink-400"
      id="dlakogo"
    >
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="mt-2 mb-8 text-center leading-9 font-extrabold text-3xl sm:leading-10 lg:text-4xl lg:leading-none">
          {data.title}
        </h2>

        {data.description
          .trim()
          .split("\n")
          .map((el) => el.trim())
          .filter((el) => el.length > 0)
          .map((text, idx) => (
            <p key={idx} className="leading-relaxed text-lg mb-8">
              {text}
            </p>
          ))}

        <div className="flex flex-wrap -mx-8">
          <div className="w-full md:w-1/2 px-8 pb-4">
            <h3 className="text-2xl font-semibold mb-1">{data.yes.title}</h3>
            <ul className="list-none mt-6">
              {data.yes.reasons.map((text, idx) => (
                <ForWhomItem text={text} reason="yes" key={idx} />
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/2 px-8">
            <h3 className="text-2xl font-semibold mb-1">{data.no.title}</h3>

            <ul className="list-none mt-6">
              {data.no.reasons.map((text, idx) => (
                <ForWhomItem text={text} reason="no" key={idx} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const data = {
  title: "Dla Kogo?",
  description: `
Chcesz budować aplikacje internetowe? Niestety, odnalezienie się w gąszczu różnych technologii webowych nie jest łatwe, a szukanie dobrych wzorców i praktyk to często godziny przedzierania się przez wątpliwej jakości materiały. My to zmieniamy!

Kurs jest zbudowany z myślą o osobach, które chcą rozwinąć swoje umiejętności budowania aplikacji internetowych. Jeśli szukasz praktycznego kursu online Next.js, Reacta i TypeScripta, to ten kurs jest dla Ciebie. Co ważniejsze, nawet jeśli czujesz, że brakuje Ci wiedzy tylko w pewnych obszarach (na przykład umiesz budować aplikacje frontendowe, ale nie jest dla Ciebie do końca jasne, jak połączyć je z backendem), to również skorzystasz na udziale w tym kursie!
`,
  yes: {
    title: "Kurs jest dla Ciebie, jeśli:",
    reasons: [
      "chcesz nauczyć się budować interaktywną aplikację internetową",
      "szukasz praktycznego kursu online Next.js, React.js i TypeScripta",
      "chcesz poznać nowoczesne praktyki i wzorce programiania w TypeScripcie",
      "szukasz łatwego wejścia do świata tworzenia rozbudowanych komercyjnych aplikacji internetowych",
    ],
  },
  no: {
    title: "Kurs NIE jest dla Ciebie, jeśli:",
    reasons: [
      "nie interesuje Cię ani React.js, ani Next.js",
      "znasz Next.js na wylot i wiesz co to jest reactRoot=concurrent",
    ],
  },
};
