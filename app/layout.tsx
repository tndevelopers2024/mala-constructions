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
  metadataBase: new URL("https://malaconstructions.com"),
  title: {
    default: "MALA Constructions | Building Luxury & Trust Since 1999",
    template: "%s | MALA Constructions",
  },
  description:
    "MALA Constructions – A legacy of innovation and customer satisfaction. Premium residential, commercial construction, and luxury stay services in Chennai.",
  keywords: [
    "MALA Constructions",
    "construction company Chennai",
    "residential construction",
    "commercial construction",
    "renovation Chennai",
    "luxury stay Chennai",
    "Mala Construction Kolathur",
  ],
  authors: [{ name: "MALA Constructions" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://malaconstructions.com",
    siteName: "MALA Constructions",
    title: "MALA Constructions | Building Luxury & Trust",
    description: "Experience premium construction and luxury living with Chennai's trusted builders since 1999.",
    images: [
      {
        url: "/images/open-graph/open-graph.webp",
        width: 1200,
        height: 630,
        alt: "MALA Constructions - Building Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MALA Constructions | Building Luxury & Trust",
    description: "Premium residential and commercial construction in Chennai.",
    images: ["/images/open-graph/open-graph.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
