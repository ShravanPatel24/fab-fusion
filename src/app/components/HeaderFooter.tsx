"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export function HeaderFooter({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (
    pathname !== "/auth/sign-in" &&
    pathname !== "/auth/sign-up" &&
    pathname !== "/"
  ) {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  } else {
    return <>{children}</>;
  }
}
