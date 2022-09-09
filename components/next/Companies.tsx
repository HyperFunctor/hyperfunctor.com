import Image from "next/future/image";

import bitnoise from "../../images/partners/bitnoise.png";
import gyfted from "../../images/partners/gyfted.png";
import nextapps from "../../images/partners/nextapps.png";

const partners = [
  { alt: "bitnoise", logo: bitnoise },
  { alt: "gyfted", logo: gyfted },
  { alt: "nextapps", logo: nextapps },
];

export function Companies() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
          Staże programistyczne dostarczane przez
        </p>
        <div className="mt-6 flex flex-row justify-between sm:justify-evenly gap-x-2">
          {partners.map((p) => (
            <div key={p.alt} className="w-24 flex flex-col justify-center">
              <Image src={p.logo} alt={p.alt} loading="lazy" />
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
