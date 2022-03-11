import dynamic from "next/dynamic";
import Link from "next/link";

const HomepageBg = dynamic<{}>(
  () =>
    import(
      /* webpackChunkName: "HomepageBg" */ "../components/HomepageBg/HomepageBg"
    ).then((m) => m.HomepageBg),
  { ssr: false }
);
import { HyperFunctorLogo } from "../components/HyperFunctorLogo";

export default function HomePage() {
  return (
    <div className="min-h-full bg-[#1f2937]">
      <HomepageBg />
      <header className="flex flex-col h-screen items-center justify-center gap-y-2 max-w-7xl mx-auto px-4 py-2 -translate-y-8 text-center">
        <h1>
          <HyperFunctorLogo />
        </h1>
        <nav className="text-white">
          <Link prefetch={false} href="/nextjs-react-graphql-typescript">
            <a className="hover:text-pink-400 text-xl underline underline-offset-2 font-bold">
              Kurs Next.js, React, GraphQL i TypeScript
            </a>
          </Link>
        </nav>
      </header>
    </div>
  );
}
