import { DeepReadonly } from "ts-essentials";

import { ReasonFragment } from "../../generated/graphql";

import { CourseContentItem } from "./CourseContentItem";

interface CourseContentProps {
  reasons: DeepReadonly<ReasonFragment[]>;
}

export const CourseContent = ({ reasons }: CourseContentProps) => {
  return (
    <section className="relative py-16 bg-white" id="content">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="mt-2 mb-8 text-center leading-9 font-extrabold sm:text-3xl sm:leading-10 lg:text-4xl lg:leading-none">
          Zawartość Kursu
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
