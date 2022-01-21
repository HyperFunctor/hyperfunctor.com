import NextImage from "next/image";
import { useRouter } from "next/router";

import { useCountdown } from "../lib/hooks";
import { AuthorFragmentMDX } from "../props";

interface PricingPackageProps {
  pkg: typeof import("../lib/pricing").pricing["full"];
  hideBullshit: boolean;
  readonly authors: readonly AuthorFragmentMDX[];
}

export const PricingPackage = ({
  pkg,
  hideBullshit,
  authors,
}: PricingPackageProps) => {
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
    <div className="overflow-hidden mt-12 lg:mt-0 shadow-md max-w-2xl">
      {!hideBullshit && (
        <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
          <div className="flex justify-center">
            <span className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-pink-100 text-pink-600">
              {hasDiscount ? pkg.discountName : pkg.name}
            </span>
          </div>
          <p className="text-center mt-4 text-lg">
            To wszystko kosztuje tylko:
          </p>
          <p className="flex my-4 flex-row justify-center text-center items-baseline">
            <span className="text-6xl leading-none font-bold">
              {hasDiscount ? (
                <>
                  <del className="text-2xl text-pink-500 mr-2">
                    {pkg.price}&nbsp;zł
                  </del>{" "}
                  {pkg.discountPrice}
                </>
              ) : (
                <>{pkg.price}</>
              )}
            </span>
            <span className="text-4xl">&nbsp;zł&nbsp;brutto</span>
          </p>
          <p className="my-4 text-center text-lg">
            …czyli mniej niż większość jednodniowych szkoleń!
          </p>
          <p className="mb-2 mt-4 text-lg">
            Materiał jest rozłożony na 12 tygodni, co oznacza, że tydzień
            naszego kursu kosztuje{" "}
            <strong className="bg-pink-500 text-white px-1 shadow-md shadow-pink-300">
              tylko około 140zł netto
            </strong>
            . To mniej-więcej tyle, ile wynosi przeciętna stawka godzinowa
            senior-developera aplikacji webowych.
          </p>
          <p className="mb-6 text-lg">
            Zakup naszego kursu zwróci się{" "}
            <span className="underline decoration-pink-500">
              niezwykle szybko
            </span>
            .
          </p>
          <p className="text-xl text-center mt-6 mb-2">
            {hasDiscount && countDown && "Promocja kończy się: "}
            {!hasDiscount && countDown && "Sprzedaż kończy się: "}
            <strong className="underline decoration-2 underline-offset-2 decoration-solid">
              7.&nbsp;lutego o godz. 23:59
            </strong>
          </p>
          <p className="text-xl text-center mb-2">
            Pozostało <strong>{countDown}</strong>
          </p>
        </div>
      )}
      <div className="px-6 pt-6 pb-8 bg-gray-50 border-t sm:p-10">
        {!hideBullshit && (
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
        )}
        <div>
          <a href={easyCartUrl} className="button button-xl text-center">
            {hasDiscount && pkg.discountBuy ? pkg.discountBuy : pkg.buy}
          </a>
          {!hideBullshit && (
            <p className="mt-2 text-gray-600 text-sm text-center">
              nastąpi przekierowanie do bramki płatności
            </p>
          )}

          {!hideBullshit && (
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
          )}

          {hideBullshit && (
            <>
              <p className="text-xl text-center mt-2 font-bold">{countDown}</p>
              <ul className="flex flex-row space-x-8 mt-8 justify-center">
                {authors.map((author) => {
                  return (
                    <li key={author.id} className="flex items-center">
                      <span className="rounded-full mr-2 overflow-hidden inline-block w-[64px] h-[64px]  shadow-sm border-pink-500 border">
                        {author.avatar?.url && (
                          <NextImage
                            src={author.avatar.url}
                            width={64}
                            height={64}
                          />
                        )}
                      </span>
                      {author.name}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
