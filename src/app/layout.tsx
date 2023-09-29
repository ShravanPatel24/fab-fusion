/* eslint-disable react/no-children-prop */

import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { HeaderFooter } from "./components/HeaderFooter";
import { CartProvider } from "./CartContext";

const inter = Poppins({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Fab Fusion",
  description: "Be More Stylish 😉",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "iconButton",
          termsPageUrl: "/terms",
          logoImageUrl: "/logo.png",
          privacyPageUrl: "/privacy",
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <CartProvider>
            <HeaderFooter children={children} />
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
