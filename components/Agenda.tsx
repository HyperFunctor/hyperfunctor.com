import { AgendaWeek } from "./AgendaWeek";

export const Agenda = ({ agenda }) => {
  return (
    <section className="relative py-16 bg-white" id="agenda">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="mt-2 mb-2 text-center leading-9 font-extrabold sm:text-3xl sm:leading-10 lg:text-4xl lg:leading-none">
          {agenda.title}
        </h2>
        <p className="text-center text-lg mb-8 text-gray-600">
          {agenda.subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {agenda.weeks.map((item, idx) => (
            <AgendaWeek
              number={idx + 1}
              key={idx + 1}
              unit={agenda.unit}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
