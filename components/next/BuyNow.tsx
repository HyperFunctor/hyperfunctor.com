import Link from "next/link";
import { ReactNode } from "react";

import { useCountdown } from "../../lib/hooks";
import { getCurrentPricing, getLastDate, formatDate } from "../../lib/pricing";

export const BuyNow = ({ children }: { children: ReactNode }) => {
  const { currentPricing } = getCurrentPricing();
  const countdown = useCountdown(getLastDate());

  if (!currentPricing) {
    return null;
  }

  return (
    <div className="mt-8">
      <Link href={currentPricing.cartUrl}>
        <a
          target="_blank"
          className={`cursor-pointer block mt-3 w-full px-6 py-3 border border-transparent font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 text-center text-3xl text-white bg-pink-600 hover:bg-pink-700 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-pink-500`}
        >
          {children}
        </a>
      </Link>
      <p className="mt-2 text-center font-medium">
        Sprzedaż otwarta jeszcze przez {countdown}.
      </p>
      <p className="mt-2 text-center font-medium">
        Promocyjna oferta obowiązuje tylko do {formatDate(currentPricing.to)}.
        Później cena rośnie.
      </p>
    </div>
  );
};
