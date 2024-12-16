'use client'

import "./globals.css";
import { SearchProvider } from "../app/context/SearchContext";
import { Schibsted_Grotesk } from "next/font/google";

import Header from "./components/Header";

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
  return (
    <html lang="en" className="schibstedGrotesk.variable">
      <body className={"antialiased bg-[#FEFEE2] overflow-y-scroll overflow-x-hidden"}>
        <SearchProvider>
          <Header />
          <main>
            {children}
          </main>
        </SearchProvider>
      </body>
    </html>
  );
}
