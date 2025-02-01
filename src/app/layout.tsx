import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import "./globals.css";
import { Jost } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { CustomThemeProvider } from "@/components/ThemeToggle";

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
    <CustomThemeProvider>
      <html lang="en">
        <body className={`${jost.variable} antialiased`}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <Navbar />
            <main className="">{children}</main>
            <Footer />
          </AppRouterCacheProvider>
        </body>
      </html>
    </CustomThemeProvider>
  );
}
