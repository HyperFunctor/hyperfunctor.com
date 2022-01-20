import { useCountdown } from "../../lib/hooks";
import { pricing } from "../../lib/pricing";

const navigation = [
  { name: "Dla Kogo", href: "#dlakogo" },
  // { name: "Agenda", href: "#agenda" },
  { name: "Agenda", href: "#content" },
  { name: "FAQ", href: "#faq" },
  { name: "O autorach", href: "#autorzy" },
  { name: "Kup teraz ", href: "#kup-teraz" },
];

export function Nav() {
  const countDown = useCountdown(pricing.full.until);

  const countDownText = countDown && (
    <span className="text-base font-normal text-white">
      Do końca sprzedaży: <strong>{countDown}</strong>
    </span>
  );

  return (
    <header className="bg-gray-700 fixed z-50 w-full">
      <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8" aria-label="Top">
        <a href="#" className="sr-only">
          <h1>Zaiste, Programuj!</h1>
        </a>
        <div className="w-full py-4 flex items-center justify-between lg:justify-start border-b border-gray-500 lg:border-none">
          {navigation.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`block text-base font-bold text-white hover:text-pink-300 lg:mr-8 ${
                index === 2 ? "hidden sm:block" : ""
              }
              ${
                index === 4
                  ? "underline underline-offset-2 decoration-pink-300 decoration-wavy"
                  : ""
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="hidden md:block">{countDownText}</div>
        </div>
        <div className="block md:hidden text-center py-2">{countDownText}</div>
      </nav>
    </header>
  );
}
