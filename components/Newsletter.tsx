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

    setMessage("Success! You joined the waiting list.");
  };

  return (
    <>
      <form className="mt-4 flex max-w-md mx-auto" onSubmit={onSubmit}>
        <input
          aria-label="Email address"
          type="email"
          required
          ref={inputEl}
          className="appearance-none w-full px-5 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out"
          placeholder="Enter your email"
        />
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:bg-blue-400 transition duration-150 ease-in-out">
            Notify me
          </button>
        </div>
      </form>
      <div className="mt-2 text-gray-200">{message ? message : ``}</div>
    </>
  );
}
