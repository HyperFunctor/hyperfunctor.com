import { ReactNode } from "react";

export const agenda = [
  {
    title: "Wprowadzenie",
    outcome: "Przygotowanie do kursu",
    items: [
      "Motywacja: React, Next, TypeScript, GraphQL, Tailwind CSS",
      "Wymagania",
      "Narzędzia: VS Code - Edytor kodu",
      "Narzędzia: Git & GitHub",
      "Przygotowanie środowiska do kursu",
      "Dodatkowe materiały wspomagające",
    ],
  },
  {
    title: "Pierwsze kroki",
    outcome: "Powstanie struktury aplikacji",
    items: [
      "Konfiguracja Next.js z TypeScript",
      "Struktura aplikacji Next.js",
      "Konfiguracja repozytorium GitHub",
      "Deploy na Vercela jednym kliknięciem",
      "Narzędzia deweloperskie w Chrome: Dev Tools & React Dev Tools",
      "Dodawanie stron",
    ],
  },
  {
    title: "Stylowanie",
    outcome: "Ostylowane podstrony",
    items: [
      "Filozofia Tailwind CSS",
      "Komponenty i re-organizacja aplikacji",
      "Podział strony na sekcje i Flexbox",
      "Responsywność, Breakpointy i Grid",
      "Komponenty i dane dynamiczne",
      "Propsy komponentów i dane dynamiczne",
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
      "Inferencja typów przy SSG",
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
      "Wprowadzenie do Markdowna",
      "Biblioteka react-markdown",
      "Omówienie next-mdx-remote",
      "Obsługa odnośników w Markdown",
    ],
  },
  {
    title: "Koszyk sklepowy",
    outcome: "Funkcjonalny koszyk",
    items: [
      "Czym jest Context w React",
      "Konfiguracja Context w Next.js",
      "Stan koszyka w Context",
      "Stylowanie koszyka",
      "Dodawanie i usuwanie z koszyka",
      "Zmiana ilości produktu w koszyku",
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
    title: "Next.js i API",
    outcome: "W pełni działający koszyk",
    items: [
      "Wprowadzenie do API Routes",
      "Rozgraniczenie klient / serwer",
      "Pliki .env i zmienne środowiskowe",
      "Dodawanie recenzji produktów",
      "Operowanie na cache w Apollo GraphQL",
      "Optymistyczne aktualizacje widoku",
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
  {
    title: "Bonus",
    outcome: "Zaawansowane",
    items: [
      "Stripe Webhooks",
      "i18n - obsługa wielu języków w Next.js",
      "Edge API Routes w Next.js",
      "Persisted Queries w GraphQL",
    ],
  },
  {
    is2023: true,
    title: (
      <>
        Next.js 13 z <code>appDir</code>
      </>
    ),
    outcome: "Eksperymentalne podejście do tworzenia aplikacji",
    items: [
      <>
        Podejście <code>app</code> vs <code>pages</code>
      </>,
      "Zagnieżdżanie layoutów",
      "Dynamiczne renderowanie",
      "Komponenty jako async function",
      "Statyczne renderowanie",
      <>
        Hook <code>use()</code> i cache
      </>,
    ],
  },
];

export function Agenda() {
  return (
    <section className="bg-gray-50" id="agenda">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-pink-700 tracking-wide uppercase">
            Agenda kursu Next.js, GraphQL i TypeScript
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
            <AgendaWeek key={idx} number={idx} item={item} />
          ))}
        </ol>
      </div>
    </section>
  );
}

interface AgendaWeekProps {
  item: {
    is2023?: boolean;
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
        <p className="text-pink-700 font-bold text-base">Tydzień {number}</p>
        <h3 className="relative">
          {item.is2023 && (
            <span className="text-red-500 block font-bold transform-gpu animate-pulse-fast rotate-[30deg] absolute right-[-0.5rem] top-[-1rem]">
              Nowość 2023 <span className="sr-only">: </span>
            </span>
          )}
          <span className="text-2xl font-semibold">{item.title}</span>
          <span className="sr-only">: </span>
          <span className="block text-gray-600 text-sm">{item.outcome}</span>
        </h3>
      </div>
      <div className="px-4 py-2">
        <ol className="list-decimal list-inside space-y-2 text-gray-600 font-semibold">
          {item.items.map((point, idx) => (
            <li key={idx}>
              <h4 className="inline">{point}</h4>
            </li>
          ))}
        </ol>
      </div>
    </li>
  );
};
