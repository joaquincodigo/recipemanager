import "./globals.css";
import { SearchProvider } from "../app/context/SearchContext";
import SearchBar from "./components/SearchBar";
import TopBanner from "./components/TopBanner";
import ProfileAvatar from "./components/ProfileAvatar";
import { Schibsted_Grotesk } from 'next/font/google';

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ['latin'],
  weights: ['400', '700'],
  variable: '--font-schibsted-grotesk', // Add a custom CSS variable for easy use
});


export const metadata = {
  title: "Recipe Hub",
  description: "Explore, create and share your recipes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="schibstedGrotesk.variable">
      <body className={`antialiased`}>

        <SearchProvider>

          <header className="bg-[#7FC37E] flex flex-col md:flex-row justify-between px-3 py-auto items-center">

            <TopBanner/> 
            <SearchBar />
            <ProfileAvatar/>
            
          </header>

          <main>{children}</main>

        </SearchProvider>
      </body>
    </html>
  );
}
