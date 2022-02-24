import { ReactNode } from "react";

const agenda = [
  {
    title: "Wprowadzenie",
    outcome: "Powstanie struktury aplikacji",
    items: [
      "Konfiguracja Next.js z TypeScript",
      "Dodawanie stron",
      "Nawigacja i przekazywanie danych",
      "Dynamiczne strony",
      "Konfiguracja repozytorium GitHub",
      "Deploy na Vercela jednym kliknięciem",
    ],
  },
  {
    title: "Stylowanie",
    outcome: "Ostylowane podstrony",
    items: [
      "React Dev Tools",
      "Podział strony na komponenty",
      "Konfiguracja Tailwind i Tailwind UI",
      "Responsywność w Tailwindzie",
      "Podstawy Flexbox i Grid w Tailwindzie",
      "Nawigacja; kolekcje",
    ],
  },
  {
    title: "Renderowanie w Next",
    outcome: "Dynamiczne i prerenderowane strony produktów",
    items: [
      "Strony statyczne i prerendering (SSG, ISR)",
      "Generowanie ścieżek dla stron dynamicznych",
      "Treść renderowana po stronie serwera (SSR)",
      "Pobieranie treści po stronie klienta (CSR)",
      "React Query",
      "Pobieranie danych z API Stripe",
    ],
  },
  {
    title: "Vercel",
    outcome: "Poznanie Vercela",
    items: [
      "Vercel",
      "Statyczne zasoby",
      "Obsługa obrazków, komponent Image, CDN",
      "Automatyczny pogląd pull requestów",
      "Konfiguracja środowiska staging",
      "Wykorzystanie GitHub Actions",
    ],
  },
  {
    title: "Organizacja pracy",
    outcome: "Lepsza organizacja projektu; podstawy SEO; Markdown",
    items: [
      "Wprowadzenie komponentu Layout",
      "Konfiguracja SEO przy użyciu next-seo",
      "Nawigacja z użyciem aktywnych odnośników",
      "Wprowadzenie do Markdowna",
      "Biblioteka react-markdown",
      "Omówienie next-mdx-remote",
    ],
  },
  {
    title: "Koszyk sklepowy",
    outcome: "Funkcjonalny koszyk",
    items: [
      "Czym jest Context w React.js",
      "Konfiguracja Context w Next.js",
      "Stan koszyka w Context",
      "Stylowanie koszyka",
      "Dodawanie i usuwanie z koszyka",
      "Zmiana ilości produktu w koszyku",
    ],
  },
  {
    title: "Next.js i API",
    outcome: "W pełni działający koszyk",
    items: [
      "Wprowadzenie do API Routes",
      "Rozgraniczenie klient / serwer",
      "API koszyka",
      "Biblioteki SWR i React Query",
      "Optymistyczne aktualizacje widoku",
      "Leniwe ładowanie i Suspense",
    ],
  },
  {
    title: "GraphQL",
    outcome: "Dynamiczne produkty z CMS",
    items: [
      "Omówienie CMS",
      "Konfiguracja produktów w CMS",
      "CMS dostarcza API GraphQL",
      "Połączenie z GraphQL w aplikacji",
      "Biblioteka Apollo",
    ],
  },
  {
    title: "Formularze",
    outcome: "Formularz zamówienia",
    items: [
      "Jak działają formularze",
      "Biblioteki do formularzy w React",
      "Walidacja formularzy",
      "Obsługa zdarzeń",
      "Obsługa formularza",
      "Przesłanie zamówienia",
    ],
  },
  {
    title: "Mutacje GraphQL",
    outcome: "Poznanie GraphQL",
    items: [
      "Mutacje w GraphQL",
      "Utworzenie schemy dla zamówienia",
      "Zapis danych z formularza w CMS",
      "Konfiguracja graphql-codegen",
      "Automatyczne generowanie komponentów",
      "Złożenie zamówienia",
    ],
  },
  {
    title: "Stripe",
    outcome: "Obsługa płatności",
    items: [
      "Konfiguracja Stripe",
      "Produkty w Stripe",
      "Strona płatności",
      "Obsługa udanych i nieudanych płatności",
      "Webhooki",
    ],
  },
  {
    title: "Konto użytkownika",
    outcome: "Uwierzytelnianie i historia zamówień",
    items: [
      "Pojęcie sesji",
      "Omówienie next-auth",
      "Logowanie i rejestracja",
      "Przypisywanie zamówień do konta",
      "Wyświetlanie historii swoich zamówień",
    ],
  },
  {
    title: "Testowanie",
    outcome: "Testy aplikacji",
    items: [
      "Testy jednostkowe w Jest",
      "Testy integracyjne w React Testing Library",
      "Testy e2e w Cypressie",
      "Konfiguracja CI/CD",
      "Deploy pod własną domeną",
    ],
  },
];

export function Agenda() {
  return (
    <section className="bg-gray-50" id="agenda">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-pink-600 tracking-wide uppercase">
            Agenda
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Jak przebiega kurs
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Każda lekcja to pragmatyczne podejście do problemu i rozwiązania
            w postaci wideo programowania w parach.
          </p>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {agenda.map((item, idx) => (
            <AgendaWeek key={idx} number={idx + 1} item={item} />
          ))}
        </ol>
      </div>
    </section>
  );
}

interface AgendaWeekProps {
  item: {
    title: ReactNode;
    outcome: ReactNode;
    items: ReactNode[];
  };
  number: number;
}

const AgendaWeek = ({ item, number }: AgendaWeekProps) => {
  return (
    <li className="break-words w-full hover:bg-white rounded-lg">
      <div className="px-4 py-5">
        <p className="text-pink-400 font-bold text-base">Tydzień {number}</p>
        <h4 className="text-2xl font-semibold">{item.title}</h4>
        <p className="text-gray-600 text-sm">{item.outcome}</p>
      </div>
      <div className="px-4 py-2">
        <ol className="list-decimal list-inside space-y-2 text-gray-600 font-semibold">
          {item.items.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ol>
      </div>
    </li>
  );
};
