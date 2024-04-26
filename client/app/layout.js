import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/redux/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Artzen",
  description: "Simple Blogging Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
