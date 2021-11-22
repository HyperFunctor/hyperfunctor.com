import Image from "next/image";
import { DeepReadonly } from "ts-essentials";

import { ReasonFragmentMDX } from "../../props";
import { MDXComponent } from "../NextMdx";

interface CourseContentItemProps {
  reason: ReasonItem;
  direction: "reverse" | "";
}

export type ReasonItem = DeepReadonly<
  ReasonFragmentMDX & { plaiceholder?: string | null }
>;

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
        {reason.image && (
          <Image
            src={reason.image.url}
            alt=""
            width={360}
            height={360}
            blurDataURL={reason.plaiceholder || undefined}
          />
        )}
      </div>
      <div className="w-full md:w-1/2 pb-4">
        <h3 className="text-2xl font-bold">{reason.title}</h3>
        <p className="mt-2 text-lg text-gray-600">
          {reason.description && <MDXComponent {...reason.description} />}
        </p>
      </div>
    </div>
  );
};
