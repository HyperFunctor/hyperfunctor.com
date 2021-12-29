// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return */
import { PricingPackage } from "./PricingPackage";

export const Pricing = ({ pricing }) => {
  return (
    <div id="kup-teraz">
      <div className="pt-8 pb-12 bg-gradient-to-r from-gray-50 to-pink-50 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-12 sm:mx-auto">
        <div className="z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md lg:max-w-5xl lg:items-center lg:flex lg:flex-row-reverse justify-center mx-auto">
            <PricingPackage
              className="rounded-lg shadow-lg max-w-md lg:min-w-0 lg:w-3/5"
              pkg={pricing.full}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
