import { SectionMetadataMDX } from "../../props";

import { CourseContentItem, ReasonItem } from "./CourseContentItem";

interface CourseContentProps {
  readonly reasons: readonly ReasonItem[];
  readonly section: SectionMetadataMDX;
}

export const CourseContent = ({ reasons, section }: CourseContentProps) => {
  return (
    <section className="relative py-16 bg-white" id="content">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="mt-2 mb-8 text-center leading-9 font-extrabold sm:text-3xl sm:leading-10 lg:text-4xl lg:leading-none">
          {section.title}
        </h2>
        {reasons.map((reason, idx) => (
          <CourseContentItem
            key={idx}
            reason={reason}
            direction={idx % 2 === 0 ? "reverse" : ""}
          />
        ))}
      </div>
    </section>
  );
};
