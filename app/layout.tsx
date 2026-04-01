import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MALA Constructions | Transforming Spaces Since 1999",
    template: "%s | MALA Constructions",
  },
  description:
    "MALA Constructions – A legacy of innovation and customer satisfaction. Premium residential, commercial construction, renovation, and luxury stay services in Chennai.",
  keywords: [
    "MALA Constructions",
    "construction company Chennai",
    "residential construction",
    "commercial construction",
    "renovation Chennai",
    "luxury stay Chennai",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
