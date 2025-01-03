"use client";

import "./globals.css";
import { useEffect, useState, useRef} from "react";
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
  const startTouchX = useRef(0);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleTouchStart = (e) => {
    startTouchX.current = e.touches[0].clientX
  };

  const handleTouchMove = (e) => {
    const currentTouchX = e.touches[0].clientX;
    const deltaTouchX = currentTouchX - startTouchX.current; // Declare before using
    if (deltaTouchX > 100) {
      closeDrawer();
    }
  };

  const handleTouchEnd = (e) => {
    startTouchX.current = 0
  };

  useEffect(() => {
    document.body.addEventListener("touchstart", handleTouchStart);
    document.body.addEventListener("touchmove", handleTouchMove);
    document.body.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.body.removeEventListener("touchstart", handleTouchStart);
      document.body.removeEventListener("touchmove", handleTouchMove);
      document.body.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDrawerOpen]);

  return (
    <html lang="en" className="schibstedGrotesk.variable h-full">
      <body
        className={
          "antialiased bg-white overflow-y-scroll overflow-x-hidden h-full"
        }
      >
        <SearchProvider>
          <Header toggleDrawer={toggleDrawer} />

          <Drawer closeDrawer={closeDrawer} isDrawerOpen={isDrawerOpen} />
          <main className="h-full">{children}</main>
        </SearchProvider>
      </body>
    </html>
  );
}
