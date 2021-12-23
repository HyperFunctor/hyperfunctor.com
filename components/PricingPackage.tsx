// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return */
import Link from "next/link";

export const PricingPackage = ({ className, pkg }) => {
  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- @todo
    <div className={`overflow-hidden mt-12 lg:mt-0 ${className}`}>
      <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
        <div className="flex justify-center">
          <span className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-pink-100 text-pink-600">
            {pkg.name}
          </span>
        </div>
        <div className="mt-4 flex justify-center items-baseline text-6xl leading-none font-extrabold">
          {pkg.price} zł
        </div>
      </div>
      <div className="px-6 pt-6 pb-8 bg-gray-50 border-t sm:p-10 sm:pt-6">
        <ul>
          {pkg.elements.map((element, idx) => (
            <li className="flex items-start mb-4" key={idx}>
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-pink-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <p
                className="ml-3 text-base leading-6 text-gray-700"
                dangerouslySetInnerHTML={{ __html: element }}
              ></p>
            </li>
          ))}
        </ul>
        <div className="">
          {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- @todo */}
          <a href="https://app.easycart.pl/checkout/kretes/kurs-nextjs" className="button">
            {pkg.buy}
          </a>
          <div className="mt-2 text-gray-600 text-sm text-center">nastąpi przekierowanie do bramki płatności</div>
        </div>
      </div>
    </div>
  );
};
