import { FAQEntry } from "./FAQEntry";

export const FAQ = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-8">
        <h2
          className="text-4xl mb-8 font-semibold tracking-wider text-center"
          id="faq"
        >
          FAQ (Często Zadawane Pytania)
        </h2>

        <dl>
          {faqItems.map((entry) => (
            <FAQEntry
              key={entry.question}
              question={entry.question}
              answer={entry.answer}
            />
          ))}
        </dl>
      </div>
    </section>
  );
};

const faqItems = [
  {
    question: "Czy po tym kursie zostanę programistą?",
    answer: `
        Niestety nie. Każdy zawód wymaga lat doświadczenia, aby wykonywać go dobrze. Po tym kursie będziesz mieć całościowy pogląd na tworzenie
        prostych stron internetowy przy użyciu React.js. Będziesz w stanie (na podstawowym poziomie) połączyć wszystkie elementy, aby stworzyć nowoczesną i
        interaktywną stronę internetową od A do Z. Kurs pozwoli także wybrać dalszą drogę i zgłębić tajniki frontendu, backendu, TypeScriptu, itd.`,
  },
  {
    question: "W jakim jęzku będzie prowadzone szkolenie?",
    answer: `
        Szkolenie będzie prowadzone w języku angielskim, ale z polskimi napisami. Znajomość języka angielskiego jest konieczna w pracy programisty. W ten
        sposób chcę przygotować i oswoić uczestników z tym językiem. Rozmowy na chacie i w ramach Q&A będą prowadzone po polsku w zależności od chęci i
        odwagi uczestników.`,
  },
  {
    question: "Jak dokładnie przebiega szkolenie?",
    answer: `
        Przez 12 tygodni będziemy omawiali konkretne zagadnienia związane z tworzeniem stron internetowych w React.js. Każdy tydzień to wycinek
        funkcjonalności docelowej strony internetowej. W tym czasie będą poruszane zagadnienia z różnych modułów tematycznych. Na koniec tygodnia
        będzie do wykonania zadanie domowe. Po 12 tygodniach nauki rozpoczynamy wykonanie projektu w grupach 2-3 osobowych. Projekty będą autorskie.
        Może to być projekt rozwiązania zagadnienia biznesowego lub osobistego problemu, np. automatyzacja jakiejś czynności. Projekty będą na bieżąco
        konsultowane z prowadzącym w okresie 3 tygodni (tzw. Office Hours). Po tym czasie każdy zespół będzie prezentował swój projekt.`,
  },
  {
    question: "Nigdy nie programowałem. Czy ten kurs jest dla mnie?",
    answer: `Tak. Kurs zakłada brak znajomości programowania. Niemniej, szkolenie wprowadza wiele pojęć jednocześnie. Nie potrzeba też ścisłego umysłu. Wielu programistów wywodzi się z nauk humanistycznych. Niemniej ważna jest determinacja, zaangażowanie i regularność.`,
  },
  {
    question:
      "Co, jeśli szkolenie nie przypadnie mi do gustu lub okaże się za trudne bądź za proste?",
    answer: `W ciągu dwóch pierwszych tygodni możesz zrezygnować z uczestnictwa i pieniądze zostaną Ci zwrócone.`,
  },
  {
    question: "Czy są zniżki studenckie?",
    answer: `Przykro mi, ale nie oferuję zniżek studenckich.`,
  },
  {
    question: "Czy można dokonać zakupu na raty?",
    answer: `Przykro mi, ale nie ma takiej możliwości.`,
  },
  {
    question: "Czy można otrzymać fakturę VAT na firmę?",
    answer: `Tak, w czasie zamówienia podaj dane firmy wraz z NIP. W odpowiedzi zostanie wysłana Ci faktura.`,
  },
  {
    question: "Czy dostęp do kursu jest dożywotni?",
    answer: `Tak, po zakończeniu kursu otrzymujesz dożytowni dostęp do wszystkich lekcji.`,
  },
  {
    question: "Czy kurs będzie aktualizowany?",
    answer: `Tak, planuję nie tylko aktualizować, ale też rozwijać tematykę kursu. Aktualizacje będą darmowe. Nowe moduły zaś rozszerzające zakres kursu mogą być dodatkowo płatne - zastanawiam się nad ostateczną formą rozwoju tego kursu.`,
  },
];
