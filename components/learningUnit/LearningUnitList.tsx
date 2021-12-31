import { CourseDetailsFragmentMDX } from "../../props";
import { MDXComponent } from "../NextMdx";

import { LearningUnit } from "./LearningUnit";

export const LearningUnitList = ({
  courseDetailsTitle,
  courseDetailsParagraph,
  courseDetailsBox,
}: CourseDetailsFragmentMDX) => {
  return (
    <section className="sm:pb-20 bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="mt-2 mb-8 text-center leading-9 font-extrabold text-3xl sm:leading-10 lg:text-4xl lg:leading-none">
          {courseDetailsTitle}
        </h2>

        <div className="text-lg prose-brand leading-relaxed font-normal mb-8 prose-xl">
          {courseDetailsParagraph && (
            <MDXComponent {...courseDetailsParagraph} />
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {courseDetailsBox.map(
            (box, idx) => box && <LearningUnit key={idx} content={box} />
          )}
        </div>

        <hr className="my-8" />
      </div>
    </section>
  );
};
