import Link from "next/link";

import { useCountdown } from "../../lib/hooks";
import {
  formatDate,
  getCurrentPricing,
  getLastDate,
  releaseDate,
} from "../../lib/pricing";

import { PulseDot } from "./PulseDot";

export function PricingFooter() {
  const { currentPricing } = getCurrentPricing();

  const finalCountDown = useCountdown(getLastDate());

  if (!currentPricing) {
    return null;
  }

  const isPastDeadline = releaseDate < getLastDate();

  return (
    <div className="bg-pink-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Gotowy do rozwoju?</span>
          {!isPastDeadline && (
            <span className="block font-bold text-pink-100">
              Sprzedaż trwa tylko do {formatDate(getLastDate())}.
            </span>
          )}
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link href={currentPricing.cartUrl}>
              <a
                target="_blank"
                className="block mt-3 w-full px-6 py-4 border border-transparent font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 text-center text-3xl text-gray-900 bg-white hover:bg-gray-100 focus:ring-offset-2 focus:ring-offset-pink-900 focus:ring-pink-500"
              >
                Kupuję dożywotni dostęp
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
