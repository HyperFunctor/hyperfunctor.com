import Image from "next/image";

import bitnoise from "../images/partners/bitnoise.png";
import gyfted from "../images/partners/gyfted.png";
import nextapps from "../images/partners/nextapps.png";

const partners = [
  { alt: "Next.js", logo: bitnoise },
  { alt: "React", logo: gyfted },
  { alt: "TypeScript", logo: nextapps },
  { alt: "GraphQL", logo: nextapps },
];

export function Technologies() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
          Technologie na kursie
        </p>
        <div className="mt-6 flex flex-row justify-evenly gap-8">
          {partners.map((p) => (
            <div
              key={p.alt}
              className="col-span-1 w-24 flex flex-col justify-center md:col-span-2 lg:col-span-1"
            >
              <Image src={p.logo} alt={p.alt} />
              <span className="uppercase text-center text-sm font-semibold mt-2 text-gray-500 tracking-wide">
                {p.alt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
