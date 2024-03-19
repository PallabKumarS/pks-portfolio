import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PKS Portfolio",
  description: "Portfolio website for Pallab Kumar Sarker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
