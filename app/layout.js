import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import { SearchProvider } from "./context/SearchContext";
import { Schibsted_Grotesk } from "next/font/google";

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weights: ["400", "700"],
  variable: "--font-schibsted-grotesk",
});

export const metadata = {
  title: "Recipes Haven",
  description: "Explore, create and share your recipes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="schibstedGrotesk.variable h-screen overflow-hidden">
      <body
        className={
          "antialiased bg-white overflow-y-scroll overflow-x-hidden h-full"
        }
      >
        <AuthProvider>
          <SearchProvider>
            {children}
          </SearchProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
