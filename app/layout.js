import "./globals.css";

import { SearchProvider } from "../app/context/SearchContext";

import SearchBar from "./components/SearchBar";

export const metadata = {
  title: "Recipe Manager",
  description: "Explore, create and share your recipes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>

        <SearchProvider>

          <header>
            <p>IM A PLACEHOLDER IN LAYOUT IM NOT A COMPONENT</p>
            <SearchBar />
          </header>

          <main>
            {children}
          </main>

        </SearchProvider>

      </body>
    </html>
  );
}
