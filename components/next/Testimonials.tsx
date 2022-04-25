import { CheckIcon } from "@heroicons/react/outline";
import Image from "next/image";

import Larto from "/images/testimonials/konrad-nojman.png";
import Siemion from "/images/testimonials/jakub-semienowicz.jpg";
import Pawel from "/images/testimonials/pawel-pikus.webp";

const testimonials = [
  {
    photo: Larto,
    name: "Konrad Nojman",
    role: "Senior JS Developer",
    text: (
      <p>
        W kursie podoba mi się wyjątkowo organiczne podejście do uczestników
        i planu pracy. Na sesjach live, Michał i Kuba{" "}
        <strong>
          nie tylko odpowiadają na pytania do zadań, ale też rozszerzają temat
        </strong>{" "}
        o <em>bigger picture</em>. Ciągle szukają dodatkowych inicjatyw, które
        kursanci mogą wykonać w ramach dalszego samorozwoju.
      </p>
    ),
  },
  {
    photo: Siemion,
    name: "Jakub Siemienowicz ",
    role: "Junior Frontend Developer w Grey Group Poland",
    text: (
      <p>
        Kurs prowadzony w konwencji <em>pair programmingu</em> był strzałem
        w dziesiątkę. Dzięki temu podejściu{" "}
        <strong>
          mogłem zobaczyć, w jaki sposób myślą i podejmują decyzje doświadczeni
          deweloperzy
        </strong>
        . Jako tutorialowy wyjadacz, mogę Ci zagwarantować, że materiały na tym
        kursie są zupełnie innej jakości niż to, co znajdziesz na youtube czy
        Udemy.
      </p>
    ),
  },
  {
    photo: Pawel,
    name: "Paweł Pikus",
    role: "JavaScript Developer",
    text: (
      <>
        <p>
          Przez ostanie 2 lata korzystałem już z wielu kursów, dobierając je pod
          kątem nie tylko aktualności, ale także jakości przekazu.{" "}
          <strong>
            Kurs tworzenia nowoczesnego frontendu z Michałem i Jakubem to
            prawdziwy unikat
          </strong>
          .
        </p>
        <p>
          Panowie swoją ogromną, ekspercką wiedzą dzielą się w sposób przystępny
          i niewymuszony. Lekcje prowadzone są w formacie{" "}
          <em>pair programmingu</em>, dzięki czemu prowadzący uzupełniają się
          wzajemnie. Z rozwagą dawkują materiał i 
          <strong>wyjaśniają zawiłości technologiczne</strong> oraz zwracają
          uwagę na sposób w jaki różne technologie współgrają ze sobą w jednej
          aplikacji.
        </p>
        <p>
          Największą wartością kursu jest możliwość konsultacji z mentorami oraz
          interakcji z kursowym <em>community</em> na Discordzie. Michał i Jakub
          są super pomocni, umiejętnie naprowadzają na rozwiązania i inspirują
          do dalszej pracy.{" "}
          <strong>To najlepszy kurs na jaki do tej pory trafiłem</strong> –
          prawdziwy „<em>game changer</em>”, który znacznie przyspieszył
          osiągnięcie wymarzonego celu. Polecam serdecznie!
        </p>
      </>
    ),
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-16" id="opinie">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-5 lg:items-start">
        <div className="mx-auto max-w-md sm:max-w-3xl sm:px-6 lg:px-0 lg:col-span-2 mr-8 self-center">
          <div className="text-gray-500 prose lg:prose-xl prose-pink">
            <h2 className="font-extrabold tracking-tight">
              Co mówią nasi kursanci?
            </h2>
            <p className="lead">
              Przeszkoliliśmy setki osób, a z naszych materiałów online
              skorzystało <strong>pół miliona ludzi</strong>.
            </p>
            <p className="lead">Co o nas mówią?</p>
          </div>
        </div>

        <ul className="text-base max-w-4xl mx-auto lg:max-w-none col-span-3 flex flex-row flex-wrap justify-center items-center">
          {testimonials.map((testimonial) => (
            <li
              key={testimonial.name}
              className="group sm:w-1/2 mb-8 px-4 sm:px-0 sm:even:pl-4 sm:odd:pr-4 sm:last:odd:px-2 sm:last:odd:w-full"
            >
              <blockquote className="group-odd:bg-white group-odd:text-gray-700 group-even:text-white group-even:bg-pink-800 rounded-lg shadow-lg flex flex-col px-6 py-8 sm:px-6 sm:pt-8 sm:pb-6 relative before:content-['”'] before:font-serif before:text-9xl before:absolute before:top-0 before:right-2">
                <div className="prose-p:mb-2 order-2 rounded-t-lg text-lg font-normal">
                  {testimonial.text}
                </div>
                <cite className="flex mb-4 items-center order-1">
                  <span className="block relative w-8 h-8 sm:w-12 sm:h-12 border-2 border-white rounded-full">
                    <Image
                      className="rounded-full"
                      width={48}
                      height={48}
                      src={testimonial.photo}
                      alt=""
                    />
                  </span>
                  <span className="not-italic ml-4 leading-tight flex-1">
                    <span className="block font-semibold">
                      {testimonial.name}
                    </span>
                    <span className="block">{testimonial.role}</span>
                  </span>
                </cite>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
