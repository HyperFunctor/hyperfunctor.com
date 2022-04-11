import Image from "next/image";
import Link from "next/link";

import TypeofwebLogoWhite from "../images/typeofweb_logo_white.png";
import ZaisteLogo from "../images/zaiste_logo.png";

interface NavigationItem {
  name: string;
  href: string;
  icon: () => JSX.Element;
}

const navigation: NavigationItem[] = [
  {
    name: "Facebook",
    href: "https://facebook.com/zaiste.programuj/",
    icon: () => (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9l2.3.2v2.5h-1.3c-1.2 0-1.6.7-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/zaiste.programuj/",
    icon: () => (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <path d="M12.31 2c2.43 0 2.79.01 3.81.06 1.07.05 1.8.22 2.43.47a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.25.64.42 1.36.47 2.43.05 1.06.06 1.4.06 4.12v.08c0 2.64-.01 2.99-.06 4.04a7.35 7.35 0 0 1-.47 2.43 4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15 7.3 7.3 0 0 1-2.43.47c-1.06.05-1.4.06-4.12.06h-.08a69.6 69.6 0 0 1-4.04-.06 7.35 7.35 0 0 1-2.43-.47 4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.16-1.77 7.35 7.35 0 0 1-.46-2.43 64.6 64.6 0 0 1-.06-3.8v-.63c0-2.43.01-2.79.06-3.81.05-1.07.22-1.8.46-2.43a4.9 4.9 0 0 1 1.16-1.77 4.9 4.9 0 0 1 1.77-1.16 7.35 7.35 0 0 1 2.43-.46 64.6 64.6 0 0 1 3.8-.06h.64zm-.08 1.8h-.46c-2.46 0-2.79.01-3.81.06-.98.04-1.5.2-1.86.34-.47.19-.8.4-1.15.75A3.1 3.1 0 0 0 4.2 6.1c-.13.36-.3.88-.34 1.86a64.64 64.64 0 0 0-.06 3.8v.47c0 2.46.01 2.79.06 3.81.04.98.2 1.5.34 1.86a3.27 3.27 0 0 0 1.9 1.9c.36.13.88.3 1.86.34 1.05.05 1.37.06 4.04.06h.08c2.6 0 2.92-.01 3.96-.06.98-.04 1.5-.2 1.86-.34a3.27 3.27 0 0 0 1.9-1.9c.13-.35.3-.88.34-1.86.05-1.05.06-1.37.06-4.04v-.08c0-2.6-.01-2.92-.06-3.96-.04-.98-.2-1.5-.34-1.86a3.1 3.1 0 0 0-.75-1.15 3.1 3.1 0 0 0-1.15-.75 5.6 5.6 0 0 0-1.86-.34 64.64 64.64 0 0 0-3.8-.06zM12 6.87a5.13 5.13 0 1 1 0 10.27 5.13 5.13 0 0 1 0-10.28zm0 1.8a3.33 3.33 0 1 0 0 6.66 3.33 3.33 0 0 0 0-6.66zm5.34-3.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon />
            </a>
          ))}
        </div>
        <div className="prose prose-gray prose-p:text-gray-300 prose-a:text-gray-400 prose-a:font-normal mt-8 md:mt-0 md:order-1 space-y-2">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/">
              <a className="!text-gray-300">Hyper Functor</a>
            </Link>
            . All rights reserved.
          </p>
          <p>
            <Link href="/regulamin">
              <a>Regulamin</a>
            </Link>{" "}
            |{" "}
            <Link href="/polityka-prywatnosci">
              <a>Polityka Prywatności</a>
            </Link>
          </p>
        </div>
        <div className="md:order-1 flex flex-row gap-4 items-center mt-8 md:mt-0 ">
          <p className="text-gray-200 font-sans font-bold">By:</p>
          <Image
            width={64}
            height={64}
            src={TypeofwebLogoWhite}
            title="Type of Web - Michał Miszczyszyn"
            alt=""
          />
          <Image
            width={64}
            height={64}
            src={ZaisteLogo}
            title="Zaiste.net – Jakub Neander"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
}
