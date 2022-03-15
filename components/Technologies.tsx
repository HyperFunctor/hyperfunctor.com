import Graphql from "../images/tech/graphql.svg";
import Next from "../images/tech/next.svg";
import React from "../images/tech/react.svg";
import Typescript from "../images/tech/typescript.svg";

const partners = [
  { alt: "Next.js", logo: Next },
  { alt: "React", logo: React },
  { alt: "TypeScript", logo: Typescript },
  { alt: "GraphQL", logo: Graphql },
];

export function Technologies() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
          Technologie na kursie
        </p>
        <div className="mt-6 flex flex-row justify-between sm:justify-evenly gap-x-2">
          {partners.map((p) => (
            <div
              key={p.alt}
              title={p.alt}
              className="h-24 flex flex-1 flex-col justify-center items-center"
            >
              <p.logo className="flex-1 w-60 max-w-full" />
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
