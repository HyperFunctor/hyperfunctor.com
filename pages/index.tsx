import Link from "next/link";

import { HomepageBg } from "../components/HomepageBg/HomepageBg";
import { HyperFunctorLogo } from "../components/HyperFunctorLogo";

export default function HomePage() {
  return (
    <HomepageBg>
      <header className="flex flex-col h-screen items-center justify-center gap-y-2 max-w-7xl mx-auto px-4 py-2 -translate-y-8 text-center">
        <h1>
          <HyperFunctorLogo />
        </h1>
        <nav className="text-white">
          <Link href="/nextjs-react-graphql-typescript">
            <a className="hover:text-pink-400 text-xl underline underline-offset-2 font-bold">
              Kurs Next.js, React, GraphQL i TypeScript
            </a>
          </Link>
        </nav>
      </header>
    </HomepageBg>
  );
}
