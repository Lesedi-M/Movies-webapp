import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import SearchBox from "@/components/SearchBox";

import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Movies",
  description: "Showing the latest movies and shoes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers  >
          <Header/>
          <NavBar/>
          <SearchBox/>
          {children}
        </Providers>
        </body>
    </html>
  );
}
