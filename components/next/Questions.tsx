export function Questions() {
  return (
    <section className="bg-gray-600 flex" id="mentorzy">
      <div className="container mx-auto space-y-8 px-8 py-16 md:space-y-0 gap-4 grid grid-cols-1 md:grid-cols-2">
        <div className="md:mr-8">
          <h2 className="text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            Pytania?
          </h2>
          <p className="mt-2 text-xl text-white">
            Jeśli masz jakiekolwiek pytania, to{" "}
            <a className="font-bold" href="mailto:hi@hyperfunctor.com">
              napisz do nas
            </a>{" "}
            na adres{" "}
            <a className="underline" href="mailto:hi@hyperfunctor.com">
              hi@hyperfunctor.com
            </a>
            . Przejrzyj też FAQ poniżej.
          </p>
        </div>
        <div className="md:ml-8 text-xl text-white space-y-2">
          <h2 className="text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            Satysfakcja lub zwrot pieniędzy
          </h2>
          <p>
            Jesteśmy przekonani, że kurs Nowoczesny Frontend spełni wszystkie
            Twoje oczekiwania!
          </p>
          <p>
            Jeśli jednak nie znajdziesz w nim nic wartościowego, to wystarczy,
            że napiszesz nam o tym co Cię zawiodło i pieniądze wrócą do Ciebie.
          </p>
          <p>
            Myślę, że zgodzisz się z nami, że taki układ jest uczciwy zarówno
            wobec autorów (nas), jak i kupujących.
          </p>
        </div>
      </div>
    </section>
  );
}
