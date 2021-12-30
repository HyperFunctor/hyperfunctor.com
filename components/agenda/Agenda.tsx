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
        <h2 className="mt-2 mb-2 text-center leading-9 font-extrabold text-3xl sm:leading-10 lg:text-4xl lg:leading-none">
          {section.title}
        </h2>
        <div className="text-center text-base mb-8 text-gray-600">
          {section.subTitle && <MDXComponent {...section.subTitle} />}
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {agenda.map((item, idx) => (
            <AgendaWeek key={item.id} number={idx + 1} item={item} />
          ))}
        </ol>
      </div>
    </section>
  );
};
