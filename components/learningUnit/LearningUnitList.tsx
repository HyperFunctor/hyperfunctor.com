import { CourseDetailsFragment } from "../../generated/graphql";

import { LearningUnit } from "./LearningUnit";

export const LearningUnitList = ({
  courseDetailsTitle,
  courseDetailsParagraph,
  courseDetailsBox,
}: CourseDetailsFragment) => {
  return (
    <section className="pb-20 bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="mt-2 mb-8 text-center leading-9 font-extrabold sm:text-3xl sm:leading-10 lg:text-4xl lg:leading-none">
          {courseDetailsTitle}
        </h2>

        <div className="text-lg leading-relaxed font-light mb-8">
          {/* @todo MDX */}
          {courseDetailsParagraph}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {courseDetailsBox.map((box, idx) => (
            <LearningUnit key={idx} content={box} />
          ))}
        </div>

        <hr className="my-8" />
      </div>
    </section>
  );
};
