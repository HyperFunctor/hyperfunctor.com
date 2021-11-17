import Image from "next/image";
import React from "react";

export const AuthorJakub = () => {
  return (
    <div className="prose lg:prose-lg">
      <h2 className="mt-2 mb-8 leading-9 font-extrabold sm:text-3xl sm:leading-10 lg:text-4xl lg:leading-none">
        Jakub
      </h2>

      <div className="flex justify-center">
        <Image
          src="/neander.png"
          width={300}
          height={300}
          alt="Zdjęcie Jakuba"
        />
      </div>

      <hr className="my-6" />

      <a
        className="bg-white text-blue-400 text-2xl font-normal focus:outline-none mr-2"
        href="https://twitter.com/zaiste"
      >
        <span className="fab fa-twitter" aria-label="Twitter Jakuba" />
      </a>
      <a
        className="bg-white text-gray-900 text-2xl font-normal focus:outline-none mr-2"
        href="https://github.com/zaiste/"
      >
        <span className="fab fa-github" aria-label="Github Jakuba" />
      </a>
      <a
        className="bg-white text-gray-900 text-2xl font-normal focus:outline-none mr-2"
        href="https://zaiste.net/"
      >
        <span className="fas fa-link" aria-label="Link Jakuba" />
      </a>
    </div>
  );
};
