import React from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export const Base = ({ children, website }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">{children}</main>
      <Footer {...website} />
    </div>
  );
};
