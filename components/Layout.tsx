import React from "react";
import Navigation from "./Navigation";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <div className="w-full sm:pt-10 px-32 pb-10">{children}</div>
    </>
  );
}

export default Layout;