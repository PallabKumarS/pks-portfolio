import type { Metadata } from "next";
import "./globals.css";
import { Jost } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Provider from "@/providers/Provider";

const jost = Jost({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "PKS Portfolio",
  description: "Pallab's Portfolio with Nextjs 13 App Router and MUI v5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <html lang="en">
        <body className={`${jost.className} antialiased`}>
          <Navbar />
          <main className="bg-background">{children}</main>
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
