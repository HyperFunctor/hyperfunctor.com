import Image from "next/image";

import { ReasonFragment } from "../../generated/graphql";

export const CourseContentItem = ({
  image,
  title,
  direction = "",
  description,
}: ReasonFragment & { direction: "reverse" | ""} ) => {
  return (
    <div
      className={`flex ${
        direction === "reverse" ? "flex-row-reverse" : ""
      } flex-wrap items-center`}
    >
      <div className="w-full md:w-1/2 pb-4 flex justify-center">
        <img src={image?.url} alt="Picture of the author" width={360} height={360} />
      </div>
      <div className="w-full md:w-1/2 pb-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-lg text-gray-600">{description}</p>
      </div>
    </div>
  );
};
