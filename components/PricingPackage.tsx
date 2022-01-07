import { polishPlurals } from "polish-plurals";
import { useEffect, useState } from "react";

const dni = polishPlurals.bind(null, "dzień", "dni", "dni");
const godzin = polishPlurals.bind(null, "godzina", "godziny", "godzin");

interface PricingPackageProps {
  className?: string;
  pkg: typeof import("../pages/index").pricing["full"];
}

const formatUntil = (until: Date, now: Date) => {
  const SECOND_MS = 1000;
  const MINUTE_MS = SECOND_MS * 60;
  const HOUR_MS = MINUTE_MS * 60;
  const DAY_MS = HOUR_MS * 24;

  const diff = until.getTime() - now.getTime();

  if (diff <= 0) {
    return null;
  }

  const days = Math.floor(diff / DAY_MS);
  const hours = Math.floor((diff - days * DAY_MS) / HOUR_MS);
  const minutes = Math.floor(
    (diff - days * DAY_MS - hours * HOUR_MS) / MINUTE_MS
  );
  const seconds = Math.floor(
    (diff - days * DAY_MS - hours * HOUR_MS - minutes * MINUTE_MS) / SECOND_MS
  );

  return (
    <span className="tabular-nums whitespace-nowrap">
      {days > 0 && `${days} ${dni(days)}`}{" "}
      {hours > 0 && `${hours} ${godzin(hours)}`} {minutes} min {seconds} sek
    </span>
  );
};

const useCountdown = (until: Date) => {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 100);
    return () => {
      clearInterval(interval);
    };
  });

  return now && formatUntil(until, now);
};

export const PricingPackage = ({ className, pkg }: PricingPackageProps) => {
  const countDown = useCountdown(pkg.until);
  const hasDiscount = Boolean(countDown && pkg.price && pkg.discountPrice);

  return (
    <div className={`overflow-hidden mt-12 lg:mt-0 {className || ""}`}>
      <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
        <div className="flex justify-center">
          <span className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-pink-100 text-pink-600">
            {hasDiscount ? pkg.discountName : pkg.name}
          </span>
        </div>
        <div className="mt-4 flex justify-center text-center items-baseline text-6xl leading-none font-extrabold">
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
        </div>
        {hasDiscount && countDown && (
          <div className="text-sm text-center">
            Do końca promocji: <strong>{countDown}</strong>
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
          <a
            href="https://app.easycart.pl/checkout/kretes/kurs-nextjs"
            className="button button-xl"
          >
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
