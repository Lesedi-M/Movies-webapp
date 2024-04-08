import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Head from 'next/head';
import SearchBox from "@/components/SearchBox";

import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Global Trends: Discover the Latest Movies and TV Shows | Next Movies",
  description: "Explore the latest trends in movies and TV shows from around the globe on our premier movie website. From Hollywood blockbusters to international sensations, find what's hot and trending now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers  >
        <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        
      </Head>
          <Header/>
          <NavBar/>
          <SearchBox/>
          {children}
        </Providers>
        </body>
    </html>
  );
}
