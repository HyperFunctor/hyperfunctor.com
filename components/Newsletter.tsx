import React, { FormEventHandler, useRef, useState } from "react";

export function Newsletter() {
  const inputEl = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");

  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    if (!inputEl.current) {
      return;
    }

    const email = inputEl.current.value;

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
      return;
    }

    setMessage("Udało się! Jesteś na liście oczekujących.");
  };

  return (
    <>
      <form className="mt-12 sm:max-w-lg sm:w-full sm:flex" onSubmit={onSubmit}>
        <div className="min-w-0 flex-1">
          <label htmlFor="hero-email" className="sr-only">
            Email address
          </label>
          <input
            id="hero-email"
            aria-label="Email address"
            type="email"
            ref={inputEl}
            className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Podaj adres email"
            required
          />
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            type="submit"
            className="block w-full rounded-md border border-transparent px-5 py-3 bg-pink-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
          >
            Chcę wziąć udział
          </button>
        </div>
      </form>
      <div className="mt-2 text-gray-500">{message ? message : ``}</div>
    </>
  );
}
