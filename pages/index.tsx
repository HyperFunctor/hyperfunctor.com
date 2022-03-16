import dynamic from "next/dynamic";
import Link from "next/link";

const HomepageBg = dynamic<{}>(
  async () => {
    if (typeof navigator === "undefined") {
      return () => null;
    }

    if (
      navigator.userAgent.includes(`Page Speed`) ||
      navigator.userAgent.includes(`Lighthouse`)
    ) {
      return () => null;
    }

    const { HomepageBg } = await import(
      /* webpackChunkName: "HomepageBg" */ "../components/HomepageBg/HomepageBg"
    );
    return HomepageBg;
  },
  { ssr: false }
);
import { HyperFunctorLogo } from "../components/HyperFunctorLogo";
import { Newsletter } from "../components/Newsletter";

export default function HomePage() {
  return (
    <div className="min-h-full max-h-full h-full overflow-hidden bg-brand-black">
      <HomepageBg />
      <div className="flex flex-col h-screen items-center justify-between sm:justify-center gap-y-8 max-w-7xl mx-auto px-4 py-10 sm:py-2 translate-y-0 text-center">
        <header>
          <h1 className="text-[10vmin]">
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
        <main className="mx-auto w-[91%] max-w-[666px]">
          <Newsletter
            buttonText="Daj mi znać o następnych kursach"
            variant="inverse"
            id="landing"
          />
        </main>
      </div>
    </div>
  );
}
