import React from "react";
import Navigation from "./Navigation";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <div className="w-full py-10 px-32">{children}</div>
    </>
  );
}

export default Layout;
