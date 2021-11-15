import { CourseContentItem } from "./CourseContentItem";

const data = {
  title: "Zawartość Kursu",
  arguments: [
    {
      title: "12 tygodniowy kurs wideo",
      image: "/lessons.svg",
      description:
        "Kurs składa się z ponad 100 lekcji, łącznie ponad 15h wideo. Otrzymujesz dożywotni dostęp do kursu oraz jego aktualizacji.  Logicznie ułożony materiał sprawia, że nauka jest szybka i efektywna.",
    },
    {
      title: "Konsultacje na żywo",
      image: "/conference-call.svg",
      description:
        "W ramach kursu masz możliwość interakcji z mentorem na żywo. W wydzielonych godzinach Jakub będzie dostępny, aby odpowiadać na pytania uczestników. Konsultacje będą miały formę grupowej wideokonferencji.",
    },
    {
      title: "Zamknięta społeczność",
      image: "/group-chat.svg",
      description:
        "Nauka w pojedynkę często jest trudna. Dostęp do zamkniętej społeczności kursantów pozwala nie tylko na bardziej efektywną naukę, ale także motywuje będąc w otoczeniu kursantów o podobnych celach.",
    },
  ],
};

export const CourseContent = () => {
  return (
    <section className="relative py-16 bg-white" id="content">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="mt-2 mb-8 text-center leading-9 font-extrabold sm:text-3xl sm:leading-10 lg:text-4xl lg:leading-none">
          {data.title}
        </h2>
        {data.arguments.map((argument, idx) => (
          <CourseContentItem
            {...argument}
            direction={idx % 2 === 0 ? "reverse" : ""}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
};
