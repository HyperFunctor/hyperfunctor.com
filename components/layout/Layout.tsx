import { PropsWithChildren } from "react";

import { Footer } from "./Footer";
import { Nav } from "./Nav";

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
