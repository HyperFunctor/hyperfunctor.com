import { ReactNode } from "react";

import { Newsletter } from "./Newsletter";

export function NewsletterSection({
  variant,
  children,
  id,
}: {
  variant?: "inverse";
  children: ReactNode;
  id: string;
}) {
  return (
    <div className={`${variant === "inverse" ? "bg-gray-800" : "bg-pink-700"}`}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Zapisz się na listę oczekujących na kurs Next.js
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
            {children}
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8 flex-1">
          <Newsletter
            id={id}
            variant={variant === "inverse" ? "inverse" : "pink"}
          />
        </div>
      </div>
    </div>
  );
}
