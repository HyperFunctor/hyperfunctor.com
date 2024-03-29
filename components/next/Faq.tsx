const faqs = [
  {
    question: "Czy po tym kursie zostanę programistą/ką?",
    answer:
      "Nie. Każdy zawód wymaga lat doświadczenia, aby wykonywać go dobrze. Po tym kursie będziesz mieć całościowy pogląd na tworzenie nawet rozbudowanych aplikacji internetowych przy użyciu React, Next.js, GraphQL i TypeScripta. Będziesz w stanie połączyć wszystkie elementy, aby stworzyć nowoczesną i interaktywną aplikację internetową, od A do Z. Kurs pozwoli także wybrać dalszą drogę i zgłębić tajniki front-endu, back-endu, języka programowania TypeScript, itd.",
  },
  {
    question: "W jakim jęzku będzie prowadzone szkolenie?",
    answer: "Szkolenie będzie prowadzone w języku polskim.",
  },
  {
    question: "Jak dokładnie przebiega szkolenie?",
    answer:
      "Przez 16 tygodni będziemy omawiali konkretne zagadnienia związane z tworzeniem aplikacji internetowych w Next.js, React, GraphQL i TypeScript. Każdy tydzień to wycinek funkcji docelowej rozbudowanej aplikacji internetowej. W tym czasie będą poruszane zagadnienia z różnych modułów tematycznych. Na koniec każdego tygodnia będzie do wykonania praktyczne zadanie domowe. Postępy będą na bieżąco konsultowane z prowadzącymi w postaci otwartych, grupowych drzwi otwartych (tzw. Office Hours).",
  },
  {
    question: "Jestem początkujący/a. Czy ten kurs jest dla mnie?",
    answer:
      "Nie będziemy omawiać najbardziej podstawowych zagadnień typu „co to jest zmienna” czy „jak uruchomić aplikację w przeglądarce”. Chcemy mierzyć dalej i wyżej, więc nasz kurs zakłada pewien poziom znajomości pojęć związanych z programowaniem. Oczekujemy swobody w korzystaniu z JavaScriptu oraz podstawowego zapoznania się z Reactem. Jednakże, przy odpowiednim poziomie determinacji, zaangażowania i regularności każdy powinien sobie poradzić. Służymy pomocą i dodatkowymi materiałami.",
  },
  {
    question:
      "Co, jeśli szkolenie nie przypadnie mi do gustu lub okaże się za trudne bądź za proste?",
    answer:
      "Napisz nam w czym problem i zwrócimy Ci pieniądze. Masz na to 16 tygodni od startu kursu.",
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
      "Tak, planujemy nie tylko aktualizować, ale też rozwijać tematykę kursu. Aktualizacje będą darmowe, zaś nowe moduły rozszerzające zakres kursu będą udostępnione za darmo dla wszystkich uczestników poprzednich edycji kursu.",
  },
  {
    question: (
      <>
        Czy kurs omawia zmiany wprowadzone w{" "}
        <strong className="text-pink-700">Next.js 13</strong>?
      </>
    ),
    answer: (
      <>
        Tak! Kurs głównie skupia się na stabilnej wersji Next.js – czyli tej, w
        której zalecane jest korzystanie z folderu <code>pages</code>. W 2023
        roku dograliśmy jednak dodatkowe 90 minut materiału, w którym migrujemy
        stworzoną aplikację na eksperymentalne podejście z folderem{" "}
        <code>app</code>, wprowadzone w Next.js 13 pod nazwą <code>appDir</code>
        .
      </>
    ),
  },
];

export function Faq() {
  return (
    <section className="bg-gray-50" id="faq">
      <div className="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          FAQ (Często Zadawane Pytania)
        </h2>
        <div className="mt-8">
          <dl className="divide-y divide-gray-200">
            {faqs.map((faq) => (
              <div
                key={faq.question.toString()}
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
    </section>
  );
}
