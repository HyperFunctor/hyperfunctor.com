import Image from "next/image";

import { CompanyFragment } from "../generated/graphql";

interface LogoCloudProps {
  companies: CompanyFragment[];
}

export const LogoCloud = ({ companies }: LogoCloudProps) => {
  return (
    <div className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold uppercase text-gray-700 tracking-wide">
          Programistyczne staże dostarczane przez:
        </p>
        <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => {
            return (
              <a
                href={company.url!}
                target="_blank"
                key={company.id}
                className="hover:bg-gray-100 p-2 flex flex-col items-center"
                rel="noreferrer"
              >
                <div className="col-span-1 flex justify-center sm:col-span-2 lg:col-span-1">
                  <Image
                    className="h-12"
                    src={company.logo?.url!}
                    alt="Tuple"
                    width={company.logo?.width || 120}
                    height={company.logo?.height || 120}
                  />
                </div>
                <div className="mt-2 font-base">{company.name}</div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
