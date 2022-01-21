// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return */
import { PricingPackage } from "./PricingPackage";

export const Pricing = ({ pricing }) => {
  return (
    <div id="kup-teraz">
      <div className="pt-8 pb-12 px-4 sm:px-6 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-12 flex justify-center lg:px-8 bg-gradient-to-r from-gray-50 to-pink-100">
        <PricingPackage
          className="rounded-lg shadow-lg max-w-md lg:min-w-0 lg:w-3/5"
          pkg={pricing.full}
        />
      </div>
    </div>
  );
};

export const Pricing2 = ({ pricing, authors }) => {
  return (
    <div id="kup-teraz2">
      <div className="pt-8 pb-12 px-4 sm:px-6 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-12 flex flex-col items-center justify-center lg:px-8 bg-gradient-to-l from-gray-50 to-pink-100">
        <h3 className="text-4xl mb-8 font-bold max-w-xl text-center">
          Gotowy, aby zrobić krok w kierunku rozwoju?
        </h3>
        <PricingPackage
          pkg={pricing.full}
          authors={authors}
          hideBullshit={true}
        />
      </div>
    </div>
  );
};
