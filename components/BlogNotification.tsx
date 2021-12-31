import { ChevronRightIcon } from "@heroicons/react/solid";
import React from "react";

export const BlogNotification = ({}) => {
  return (
    <div>
      <span className="flex items-start space-x-2 sm:space-x-4">
        <span className="whitespace-nowrap rounded bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-600 tracking-wide uppercase">
          Co nowego?
        </span>
        <span className="inline-flex items-center text-sm font-medium text-gray-600 sm:space-x-1">
          <span>
            Nasz kurs jest kompatybilny z{" "}
            <span className="font-bold">Next.js&nbsp;12</span>
          </span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </span>
      </span>
    </div>
  );
};
