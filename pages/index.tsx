import Link from "next/link";

import { HomepageBg } from "../components/HomepageBg";

export default function HomePage() {
  return (
    <HomepageBg>
      <header className="flex flex-row justify-between items-center max-w-7xl mx-auto">
        <h1 className="hyperfunctor-logo">
          <strong className="-translate-y-[1px] inline-block">HYPER</strong>
          FUNCTOR
        </h1>
        <nav className="text-white">
          <Link href="/nextjs-react-graphql-typescript">
            <a className="hover:text-pink-400 text-xl underline underline-offset-2 font-bold">
              Kurs Next.js, React, GraphQL i TypeScript
            </a>
          </Link>
        </nav>
      </header>
    </HomepageBg>
  );
}
