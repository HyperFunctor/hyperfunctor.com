import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

interface Props {}

export const BlogNotification = ({}: Props) => {
  return (
    <div>
      <a href="#" className="inline-flex space-x-4">
        <span className="rounded bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-600 tracking-wide uppercase">
          Co nowego?
        </span>
        <span className="inline-flex items-center text-sm font-medium text-gray-600 space-x-1">
          <span>
            Nasz kurs jest kompatybilny z{" "}
            <span className="font-bold">Next.js 12</span>
          </span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </span>
      </a>
    </div>
  );
};
