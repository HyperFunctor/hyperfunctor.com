import Link from "next/link";
import React, { FormEventHandler, ForwardedRef, useRef, useState } from "react";

export function Newsletter({
  variant,
  initalFocusRef,
  buttonText = "Chcę wziąć udział",
  id,
}: {
  variant?: "inverse" | "pink";
  initalFocusRef?: ForwardedRef<HTMLInputElement>;
  buttonText?: string;
  id: string;
}) {
  const inputEl = useRef<HTMLInputElement | null>(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    if (!inputEl.current) {
      return;
    }

    const email = inputEl.current.value;

    try {
      // @ts-ignore
      fbq("track", "Lead");
    } catch {}

    setIsLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- @todo
      const { error } = await res.json();

      inputEl.current.value = "";

      if (error) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- @todo
        setMessage(error);
      } else {
        setMessage("Udało się! Jesteś na liście oczekujących.");
      }
    } catch (error) {
      setMessage(String(error));
    } finally {
      setIsLoading(false);
    }
  };

  const btnStyles =
    variant === "inverse"
      ? "text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-pink-500"
      : "text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-pink-500";

  const textStyles =
    variant === "inverse" || variant === "pink"
      ? "text-gray-200 prose-a:text-gray-200"
      : "text-gray-500 prose-gray";

  return (
    <>
      <form
        className={`mt-3 flex flex-col ${isLoading ? "cursor-wait" : ""}`}
        onSubmit={onSubmit}
      >
        <div className="sm:flex">
          <label htmlFor={`email-${id}`} className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id={`email-${id}`}
            ref={(el) => {
              inputEl.current = el;

              if (initalFocusRef) {
                if (typeof initalFocusRef === "function") {
                  initalFocusRef(el);
                } else {
                  initalFocusRef.current = el;
                }
              }
            }}
            disabled={isLoading}
            className={`block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:flex-1 border-gray-300 ${
              isLoading ? "cursor-wait" : ""
            }`}
            placeholder="Podaj adres email"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`mt-3 w-full px-6 py-3 border border-transparent text-lg font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto ${btnStyles} ${
              isLoading ? "cursor-wait" : ""
            }`}
          >
            {buttonText}
          </button>
        </div>
        <label
          className={`mt-3 prose text-xs ${textStyles} max-w-full ${
            isLoading ? "cursor-wait" : ""
          }`}
        >
          <input
            type="checkbox"
            required
            disabled={isLoading}
            className={`focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300 rounded mr-2`}
          />
          Rozumiem i akceptuję{" "}
          <Link href="/newsletter">Regulamin Newslettera</Link> oraz{" "}
          <Link href="/polityka-prywatnosci">Politykę Prywatności</Link>.
          Wyrażam zgodę na otrzymywanie na podany adres e-mail informacji
          handlowych w rozumieniu ustawy z dnia 18 lipca 2002 r. o świadczeniu
          usług drogą elektroniczną.
        </label>
      </form>
      <div className="mt-2 text-gray-500 h-6">{message}</div>
    </>
  );
}
