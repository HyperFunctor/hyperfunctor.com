import Image from "next/image";

import { InternshipsFragment } from "../generated/graphql";

interface LogoCloudProps {
  internships: InternshipsFragment["internships"];
}

export const LogoCloud = ({ internships }: LogoCloudProps) => {
  return (
    <div className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold uppercase text-gray-700 tracking-wide">
          Programistyczne staże dostarczane przez:
        </p>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          {internships.map((internship) => {
            return (
              <div
                key={internship.id}
                className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
              >
                <Image
                  className="h-12"
                  src={internship.url}
                  alt="Tuple"
                  width={internship.width || 105}
                  height={internship.height || 48}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
