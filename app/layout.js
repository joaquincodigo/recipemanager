import "./globals.css";
import { SearchProvider } from "../app/context/SearchContext";
import SearchBar from "./components/SearchBar";
import TopBanner from "./components/TopBanner";


export const metadata = {
  title: "Recipe Manager",
  description: "Explore, create and share your recipes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <SearchProvider>
          <header className="bg-[#7FC37E] flex flex-col md:flex-row justify-between pe-2">
            <TopBanner/> 
            <SearchBar />
          </header>

          <main>{children}</main>
        </SearchProvider>
      </body>
    </html>
  );
}
