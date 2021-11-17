import Image from "next/image";
import { DeepReadonly } from "ts-essentials";

import { ReasonFragment } from "../../generated/graphql";

interface CourseContentItemProps {
  reason: DeepReadonly<ReasonFragment>;
  direction: "reverse" | "";
}

export const CourseContentItem = ({
  reason,
  direction,
}: CourseContentItemProps) => {
  return (
    <div
      className={`flex ${
        direction === "reverse" ? "flex-row-reverse" : ""
      } flex-wrap items-center`}
    >
      <div className="w-full md:w-1/2 pb-4 flex justify-center">
        <img
          src={reason.image?.url}
          alt="Picture of the author"
          width={360}
          height={360}
        />
      </div>
      <div className="w-full md:w-1/2 pb-4">
        <h3 className="text-2xl font-bold">{reason.title}</h3>
        <p className="mt-2 text-lg text-gray-600">{reason.description}</p>
      </div>
    </div>
  );
};
