"use client";

import "./globals.css";
import { useState } from "react";
import { SearchProvider } from "../app/context/SearchContext";
import { Schibsted_Grotesk } from "next/font/google";

import Header from "./components/Header";
import Drawer from "./components/Drawer";

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weights: ["400", "700"],
  variable: "--font-schibsted-grotesk",
});

// export const metadata = {
//   title: "Recipe Hub",
//   description: "Explore, create and share your recipes",
// };

export default function RootLayout({ children }) {
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <html lang="en" className="schibstedGrotesk.variable">
      <body
        className={
          "antialiased bg-[#FEFEE2] overflow-y-scroll overflow-x-hidden"
        }
      >
        <SearchProvider>
          <Header toggleDrawer={toggleDrawer} />

          <Drawer closeDrawer={closeDrawer} isDrawerOpen={isDrawerOpen} />
          <main>{children}</main>
        </SearchProvider>
      </body>
    </html>
  );
}
