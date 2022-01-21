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

        <p className="leading-relaxed text-lg mb-8">{data.description}</p>

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
  description:
    "Kurs jest zbudowany z myślą o osobach, które chcą rozwinąć swoje umiejętności budowania aplikacji. Jeśli szukasz pierwszego kontaktu z TypeScriptem, Next.js lub React, albo programujesz już w języku innymi niż JS/TS, ten kurs jest dla Ciebie. Ponadto, jeśli czujesz, że brakuje Ci wiedzy w pewnych obszarach (na przykład umiesz budować aplikacje frontendowe, ale nie jest dla Ciebie do końca jasne, jak połączyć je z backendem) również skorzystasz na udziale w tym kursie.",
  yes: {
    title: "Kurs jest dla Ciebie, jeśli:",
    reasons: [
      "chcesz nauczyć się budować interaktywną aplikację internetową",
      "szukasz praktycznego wprowadzenia do Next.js, React.js i TypeScripta",
      "chcesz poznać nowoczesne praktyki i wzorce programiania w TypeScripcie",
      "szukasz łatwego wejścia do świata tworzenia rozbudowanych komercyjnych aplikacji internetowych",
    ],
  },
  no: {
    title: "Kurs NIE jest dla Ciebie, jeśli:",
    reasons: [
      "znasz zarówno frontend, backend i sposoby komunikacji między nimi",
      "nie interesuje Cię ani React.js, ani Next.js",
      "potrafisz już pisać aplikacje webowe",
    ],
  },
};
