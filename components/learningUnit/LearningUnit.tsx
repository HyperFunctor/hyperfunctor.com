import { MDXRemoteSerializeResult } from "next-mdx-remote";

import { MDXComponent } from "../NextMdx";

import * as cl from "./learningUnit.module.css";

interface LearningUnitProps {
  content: MDXRemoteSerializeResult;
}

export const LearningUnit = ({ content }: LearningUnitProps) => {
  return (
    // @ts-ignore
    <div className={cl.content}>
      <div className="flex flex-col min-w-0 break-words bg-white w-full shadow hover:shadow-2xl hover:border-gray-300 rounded-sm">
        <MDXComponent {...content} />
      </div>
    </div>
  );
};
