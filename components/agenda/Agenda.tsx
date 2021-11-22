import { AgendaWeekFragment, SectionsFragment } from "../../generated/graphql";
import { SectionMetadataMDX } from "../../props";
import { MDXComponent } from "../NextMdx";

import { AgendaWeek } from "./AgendaWeek";

interface AgendaProps {
  readonly agenda: readonly AgendaWeekFragment[];
  readonly section: SectionMetadataMDX;
}

export const Agenda = ({ agenda, section }: AgendaProps) => {
  return (
    <section className="relative py-16 bg-white" id="agenda">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="mt-2 mb-2 text-center leading-9 font-extrabold sm:text-3xl sm:leading-10 lg:text-4xl lg:leading-none">
          {section.title}
        </h2>
        <p className="text-center text-lg mb-8 text-gray-600">
          {section.subTitle && <MDXComponent {...section.subTitle} />}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {agenda.map((item, idx) => (
            <AgendaWeek key={item.id} number={idx + 1} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const agendaItems = [
  {
    title: "Wprowadzenie do Next.js",
    points: [
      "Konfiguracja Next.js z TypeScript & Tailwind CSS",
      "Dodawanie stron",
      "Nawigacja i przekazywanie danych",
      "Dynamiczne strony",
      "Generowanie ścieżek dla stron dynamicznych",
      "Strony statyczne i pre-rendering",
    ],
  },
  {
    title: "Prototypowanie z Tailwind CSS",
    points: [
      "Konfiguracja wtyczek Tailwind, m.in. Tailwind UI",
      "RWD i Breakpoints w Tailwind CSS",
      "Podstawy Flexbox i Grid",
      "Przylepiony Navbar z użyciem Flexbox i Tailwind CSS",
      "Konfiguracja nawigacji dla urządzeń mobilnych",
      "Statyczne zasoby oraz obsługa obrazków",
    ],
  },
  {
    title: "Organizacja projektu Next.js",
    points: [
      "Wycinki stron jako komponenty w React.js",
      "Konfiguracja sekcji <head> i <body>",
      "Szablony dla layoutów",
      "Nawigacja z użyciem aktywnych odnośników",
      "Wyświetlanie kolekcji w React.js",
      "Krótko o React Dev Tools",
    ],
  },
  {
    title: "Zarządzanie danymi",
    points: [
      "Co to jest YAML",
      "Pobieranie danych dla stron Next.js z plików YAML",
      "Używanie innych formatów do przechowywania danych",
      "Prosta internacjonalizacja (i18n) przy użyciu YAML",
      "Współdzielenie danych przy użyciu React.js Context",
    ],
  },
  {
    title: "Markdown i MDX",
    points: [
      "Co to jest Markdown?",
      "Sekcja Frontmatter w Markdown",
      "Użycie biblioteki `react-markdown` w Next.js",
      "Co to jest MDX?",
      "Konfiguracja `next-mdx-remote`",
      "Umieszczanie linków Next.js w plikach MDX",
    ],
  },
  {
    title: "Pogłębianie wiedzy o React.js i Next.js",
    points: [
      "Destrukturyzacja propsów w komponentach React.js",
      "Normalizacja danych, aby przyspieszyć dostęp",
      "Kategoryzowanie danych przy użyciu tagów",
      "Użycie dynamicznych komponentów w React.js",
    ],
  },
  {
    title: "Optymalizacja strony dla wyszukiwarek (SEO)",
    points: [
      "Na czym polega optymalizacja stron pod wyszukiwarki",
      "Definicja meta atrybutów dla stron",
      "Wprowadzenie do OpenGraph",
      "Rodzaje bytów definiujących zawartość w OpenGraph",
      "Generowanie obrazów dla OpenGraph",
      "Użycie biblioteki `next-seo`",
    ],
  },
  {
    title: "Budowanie APIs",
    points: [
      "Co to jest API?",
      "Pobieranie danych ze zdalnych lokalizacji",
      "Wykonywanie zapytań HTTP z komponentów React.js",
      "Tworzenie funkcji obsługujących zapytania HTTP w API",
      "Routing po stronie serwera",
    ],
  },
  {
    title: "Formularze",
    points: [
      "Jak działają formulrze HTML?",
      "Budowanie formularza w React.js z użyciem `react-hook-form`",
      "Prosta walidacja formularzy",
      "Obsługa zgłoszeń formularzy po stronie Next.js",
      "Budowa newslettera przy integracji z MailerLite",
    ],
  },
  {
    title: "Używanie GraphQL",
    points: [
      "Wprowadzenie do GraphQL",
      "Omówienie zalet GraphQL",
      "Wykonywanie zapytań GraphQL",
      "Integracja z API YouTube przy użyciu GraphQL",
      "Zapisywanie zapytań GraphQL po stronie serwera",
    ],
  },
  {
    title: "Deployment i Hostowanie",
    points: [
      "Zmienne środowiskowe",
      "Środowisko deweloperskie a produkcyjne",
      "Deployment przy użyciu Git",
      "Konfiguracja własnych domen",
      "Hostowanie na platformie Vercel",
      "Hostowanie Next.js na własnym serwerze",
    ],
  },
  {
    title: "Zakończenie",
    points: [
      "Konfiguracja podświetlania kodu",
      "Użycie dynamicznych klas CSS w React.js",
      "Dodawania Favicon",
      "Integracja z FontAwesome",
      "Tworzenie spisu treści dla strony Next.js",
      "Dodawanie własnych kolorów w Tailwind CSS",
      '"i kilka innych... :)"',
    ],
  },
];
