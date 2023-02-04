import Image from "next/image";

import Marcin from "/images/testimonials/marcin-parda.jpg";
import Larto from "/images/testimonials/konrad-nojman.png";
import Siemion from "/images/testimonials/jakub-semienowicz.jpg";
import Pawel from "/images/testimonials/pawel-pikus.webp";

const testimonials = [
  {
    photo: Marcin,
    name: "Marcin Parda",
    role: "JavaScript Developer w STX Next",
    className: "col-span-2",
    text: (
      <>
        <p>
          Kupiłem kurs <strong>jako mid JS developer</strong>, chcąc nauczyć się
          Next.js i GraphQL. Z materiałów wyłuskałem{" "}
          <strong>
            masę dobrych praktyk, ciekawych porad, optymalizacji tworzenia kodu
            i przydatnych Reactowych wzorców
          </strong>
          . Treść Zadań nie narzuca sposobu rozwiązania, więc trzeba się wykazać{" "}
          <strong>kreatywnością</strong>, pogrzebać w dokumentacji i popytać
          innych osób. Pozostali kursanci oferowali nie tylko swoją pomoc, ale
          też wspólną naukę przy jednym projekcie! Dobrze się to zgrywa z
          możliwością{" "}
          <strong>
            zadawania pytań na discordzie i podczas konsultacji live
          </strong>{" "}
          z mentorami.
        </p>
        <p>
          <strong>Kuba i Michał mają świetną chemię</strong> na ekranie, przez
          co wprowadzają luźniejszą atmosferę podczas lekcji i konsultacji.
          Dzięki temu łatwiej było przełamać strach przed zadaniem pytania
          i włączeniem kamerki na spotkaniach.
        </p>
        <p>
          Kurs polecam{" "}
          <strong>
            osobom chcącym zostać frontendowcami, juniorom oraz midom
          </strong>
          , którzy chcieliby mieć większą styczność z Next.js. Swoją drogą sam{" "}
          <strong>kurs zdążył się zwrócić</strong>, bo dzięki wiedzy nabytej w
          nim udało mi się “błysnąć” na rozmowie o podwyżkę, czego rezultatem
          było podbicie seniority. Dzięki, chłopaki.
        </p>
      </>
    ),
  },
  {
    photo: Larto,
    name: "Konrad Nojman",
    role: "JavaScript Developer w HTD Health",
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
    role: "React Developer w Today",
    text: (
      <p>
        Kurs prowadzony w konwencji <em>pair programmingu</em> był strzałem
        w dziesiątkę. Dzięki temu podejściu{" "}
        <strong>
          mogłem zobaczyć, w jaki sposób myślą i podejmują decyzje doświadczeni
          deweloperzy
        </strong>
        . Jako tutorialowy wyjadacz, mogę Ci zagwarantować, że materiały na tym
        kursie są zupełnie innej jakości niż to, co znajdziesz na YouTube czy
        Udemy.
      </p>
    ),
  },
  {
    photo: Pawel,
    name: "Paweł Pikus",
    role: "Test Automation Engineer w Huuuge Games",
    className: "col-span-2",
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
      <div className="mx-4 mb-4 sm:px-6 lg:mx-auto lg:max-w-4xl">
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

        <ul className="text-base lg:grid lg:grid-cols-2 gap-x-8 gap-y-12 mt-8">
          {testimonials.map((testimonial) => (
            <li
              key={testimonial.name}
              className={`group ${testimonial.className || ""}`}
            >
              <blockquote className="group-odd:bg-white h-full group-odd:text-gray-700 group-even:text-white group-even:bg-pink-900 rounded-lg shadow-lg flex flex-col px-6 py-8 sm:px-6 sm:pt-8 sm:pb-6 relative before:content-['”'] before:font-serif before:text-9xl before:absolute before:top-0 before:right-2">
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
