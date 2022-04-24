import { CheckIcon } from "@heroicons/react/outline";
import Image from "next/image";

import Miszczyszyn from "/public/miszczyszyn.jpg";

const testimonials = [
  {
    photo: Miszczyszyn,
    name: "Konrad Nojman",
    role: "2k22",
    text: (
      <p>
        W kursie podoba mi się wyjątkowo organiczne podejście do uczestników
        i planu pracy. Na sesjach live, Michał i Kuba nie tylko odpowiadają na
        pytania do zadań, ale też rozszerzają temat o <em>bigger picture</em>.
        Ciągle szukają dodatkowych inicjatyw, które kursanci mogą wykonać
        w ramach dalszego samorozwoju.
      </p>
    ),
  },
  // {
  //   photo: Miszczyszyn,
  //   name: "Michał 2 Miszczyszyn",
  //   role: "mentor",
  //   text: (
  //     <p>
  //       Odczarowujemy edukację i podchodzimy do tematu zupełnie inaczej niż
  //       większość: bazujemy na <em>pair programming</em>, interakcjach z
  //       kursantami i ciągłej dyskusji.
  //     </p>
  //   ),
  // },
  // {
  //   photo: Miszczyszyn,
  //   name: "Michał 3 Miszczyszyn",
  //   role: "mentor",
  //   text: (
  //     <p>
  //       Odczarowujemy edukację i podchodzimy do tematu zupełnie inaczej niż
  //       większość: bazujemy na <em>pair programming</em>, interakcjach z
  //       kursantami i ciągłej dyskusji.
  //     </p>
  //   ),
  // },
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
              className="group sm:w-1/2 mb-8 px-4 sm:px-0 sm:even:pl-4 sm:odd:pr-4 sm:last:odd:px-2"
            >
              <blockquote className="group-odd:bg-white group-odd:text-gray-700 group-even:text-white group-even:bg-pink-800 rounded-lg shadow-lg flex flex-col px-6 py-8 sm:px-8 sm:pt-10 sm:pb-8 relative before:content-['”'] before:font-serif before:text-9xl before:absolute before:top-0 before:right-2">
                <div className="order-2 rounded-t-lg text-lg font-medium ">
                  {testimonial.text}
                </div>
                <cite className="flex mb-4 items-center order-1">
                  <span className="block relative w-8 h-8 sm:w-12 sm:h-12 border-2 border-white rounded-full">
                    <Image
                      layout="fill"
                      className="rounded-full"
                      src={testimonial.photo}
                      alt=""
                    />
                  </span>
                  <span className="not-italic ml-4 leading-tight">
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
