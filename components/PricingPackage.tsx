// @ts-nocheck
import Link from "next/link";

import { Price } from "./Price";

export const PricingPackage = ({ className, pkg }) => {
  return (
    <div className={`overflow-hidden mt-12 lg:mt-0 ${className}`}>
      <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
        <div>
          <span className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-blue-100 text-blue-600">
            {pkg.name}
          </span>
        </div>
        <div className="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
          {pkg.price.discounted} zł
          <span className="ml-4 text-3xl leading-8 font-medium text-gray-500 line-through">
            {" "}
            {pkg.price.regular} zł{" "}
          </span>
        </div>
        <div className="text-center text-gray-500 mt-2">
          {pkg.cheaper}{" "}
          <span className="font-bold text-blue-500">
            {pkg.price.regular - pkg.price.discounted} zł
          </span>{" "}
          {pkg.until}
        </div>
      </div>
      <div className="px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
        <ul>
          {pkg.elements.map((element, idx) => (
            <li className="flex items-start mb-4" key={idx}>
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-green-500"
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
        <div className="mt-6 rounded-md shadow">
          <Link href={`/order/${pkg.key}`}>
            <a className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              {pkg.buy}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
