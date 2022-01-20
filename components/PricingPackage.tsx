import { useRouter } from "next/router";

import { useCountdown } from "../lib/hooks";

interface PricingPackageProps {
  className?: string;
  pkg: typeof import("../lib/pricing").pricing["full"];
}

export const PricingPackage = ({ pkg }: PricingPackageProps) => {
  const countDown = useCountdown(pkg.until);
  const hasDiscount = Boolean(
    countDown &&
      pkg.price &&
      pkg.discountPrice &&
      pkg.price !== pkg.discountPrice
  );
  const router = useRouter();

  const utm = router.query.utm_source?.toString().trim();
  const easyCartUrl =
    `https://app.easycart.pl/checkout/kretes/kurs-nextjs` +
    (utm ? `?promo=1&ref=${encodeURIComponent(utm)}` : "");

  return (
    <div className="overflow-hidden mt-12 lg:mt-0 shadow-md">
      <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
        <div className="flex justify-center">
          <span className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-pink-100 text-pink-600">
            {hasDiscount ? pkg.discountName : pkg.name}
          </span>
        </div>
        <div className="mt-4 flex flex-col items-center text-center justify-baseline text-6xl leading-none font-extrabold">
          <span>
            {hasDiscount ? (
              <>
                <del className="text-2xl text-pink-500 mr-2">
                  {pkg.price}&nbsp;zł
                </del>{" "}
                {pkg.discountPrice}&nbsp;zł
              </>
            ) : (
              <>{pkg.price}&nbsp;zł</>
            )}
          </span>
          <small className="text-sm font-extralight -mt-2 mb-2">(brutto)</small>
        </div>
        {hasDiscount && countDown && (
          <div className="text-sm text-center">
            Do końca promocji: <strong>{countDown}</strong>
          </div>
        )}
        {!hasDiscount && countDown && (
          <div className="text-sm text-center">
            Do końca sprzedaży: <strong>{countDown}</strong>
          </div>
        )}
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
                  />
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
          <a href={easyCartUrl} className="button button-xl">
            {hasDiscount && pkg.discountBuy ? pkg.discountBuy : pkg.buy}
          </a>
          <p className="mt-2 text-gray-600 text-sm text-center">
            nastąpi przekierowanie do bramki płatności
          </p>

          <p className="mt-4 text-gray-500 max-w-lg mx-auto font-bold text-sm text-center">
            Jeśli chcesz zapłacić zwykłym przelewem albo planujesz zakupy
            większej liczby dostępów do kursu – skontaktuj się z nami!{" "}
            <a
              href="mailto:siema@zaisteprogramuj.pl"
              className="text-gray-600 border-b-2 border-pink-300 hover:bg-pink-100"
            >
              siema@zaisteprogramuj.pl
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
