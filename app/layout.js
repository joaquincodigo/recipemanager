"use client";

import "./globals.css";
import { SearchProvider } from "../app/context/SearchContext";
import SearchBar from "./components/SearchBar";
import TopBanner from "./components/TopBanner";
import SearchButton from "./components/SearchButton";
import ProfileAvatar from "./components/ProfileAvatar";
import { Schibsted_Grotesk } from "next/font/google";
import { useState } from "react";
import useViewport from "./hooks/useViewport"


const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weights: ["400", "700"],
  variable: "--font-schibsted-grotesk", // Add a custom CSS variable for easy use
});

// export const metadata = {
//   title: "Recipe Hub",
//   description: "Explore, create and share your recipes",
// };

export default function RootLayout({ children }) {
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
  const isMobile = useViewport()

  const toggleSearchInput = () => {
    setIsSearchInputOpen(prevState => !prevState)
  };

  return (
    <html lang="en" className="schibstedGrotesk.variable">
      <body className={`antialiased`}>
        <SearchProvider>

          <header className="bg-[#7FC37E] flex justify-between h-9 md:h-12 px-3 py-0.5 items-center">

            {!isSearchInputOpen && <TopBanner />}
           
            {isSearchInputOpen && <SearchBar />}
          
            <div className="flex gap-3">
              {/* <SearchButton handleClick={toggleSearchInput} /> */}
              {!isSearchInputOpen && <SearchButton handleClick={toggleSearchInput} />}
              {isSearchInputOpen &&
                <button
                  onClick={toggleSearchInput}
                  className="text-sm text-white p-0.5 px-1 ms-1 rounded-md"

                >
                  Cancel
                </button>}
              {!isSearchInputOpen && <ProfileAvatar />}
            </div>

          </header>

          <main>
            {children}
          </main>

        </SearchProvider>
      </body>
    </html>
  );
}
