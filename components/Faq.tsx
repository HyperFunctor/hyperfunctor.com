/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    question: "Czy po tym kursie zostanę programistą/ką?",
    answer:
      "Nie. Każdy zawód wymaga lat doświadczenia, aby wykonywać go dobrze. Po tym kursie będziesz mieć całościowy pogląd na tworzenie nawet rozbudowanych aplikacji internetowych przy użyciu React.js, Next.js i TypeScripta. Będziesz w stanie połączyć wszystkie elementy, aby stworzyć nowoczesną i interaktywną aplikację internetową, od A do Z. Kurs pozwoli także wybrać dalszą drogę i zgłębić tajniki front-endu, back-endu, języka programowania TypeScript, itd.",
  },
  {
    question: "W jakim jęzku będzie prowadzone szkolenie?",
    answer: "Szkolenie będzie prowadzone w języku polskim.",
  },
  {
    question: "Jak dokładnie przebiega szkolenie?",
    answer:
      "Przez 12 tygodni będziemy omawiali konkretne zagadnienia związane z tworzeniem aplikacji internetowych w React.js, Next.js i TypeScript. Każdy tydzień to wycinek funkcji docelowej rozbudowanej aplikacji internetowej. W tym czasie będą poruszane zagadnienia z różnych modułów tematycznych. Na koniec każdego tygodnia będzie do wykonania praktyczne zadanie domowe. Postępy będą na bieżąco konsultowane z prowadzącymi w postaci otwartych, grupowych drzwi otwartych (tzw. Office Hours).",
  },
  {
    question: "Jestem początkujący/a. Czy ten kurs jest dla mnie?",
    answer:
      "Nie będziemy omawiać najbardziej podstawowych zagadnień typu „co to jest zmienna” czy „jak uruchomić aplikację w przeglądarce”. Chcemy mierzyć dalej i wyżej, więc nasz kurs zakłada pewien poziom znajomości pojęć związanych z programowaniem. Jednakże, przy odpowiednim poziomie determinacji, zaangażowania i regularności każdy powinien sobie poradzić. Służymy pomocą i dodatkowymi materiałami.",
  },
  {
    question:
      "Co, jeśli szkolenie nie przypadnie mi do gustu lub okaże się za trudne bądź za proste?",
    answer:
      "W ciągu dwóch pierwszych tygodni możesz zrezygnować z uczestnictwa i pieniądze zostaną Ci zwrócone.",
  },
  {
    question: "Czy są zniżki studenckie?",
    answer: "Niestety, ale nie oferujemy zniżek studenckich.",
  },
  {
    question: "Czy można dokonać zakupu na raty?",
    answer: "Niestety, ale nie ma takiej możliwości.",
  },
  {
    question: "Czy można otrzymać fakturę VAT na firmę?",
    answer:
      "Tak, w czasie zamówienia podaj dane firmy wraz z NIP. W odpowiedzi zostanie wysłana Ci faktura.",
  },
  {
    question: "Czy dostęp do kursu jest dożywotni?",
    answer:
      "Tak, po zakończeniu kursu otrzymujesz dożywotni dostęp do wszystkich lekcji.",
  },
  {
    question: "Czy kurs będzie aktualizowany?",
    answer:
      "Tak, planujemy nie tylko aktualizować, ale też rozwijać tematykę kursu. Aktualizacje będą darmowe, zaś nowe moduły rozszerzające zakres kursu będą udostępnione za darmo dla wszystkich uczestników pierwszej edycji kursu.",
  },
];

export function Faq() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          FAQ (Często Zadawane Pytania)
        </h2>
        <div className="mt-8">
          <dl className="divide-y divide-gray-200">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
              >
                <dt className="text-base font-medium text-gray-900 md:col-span-5">
                  {faq.question}
                </dt>
                <dd className="mt-2 md:mt-0 md:col-span-7">
                  <p className="text-base text-gray-500">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
