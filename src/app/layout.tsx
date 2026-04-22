import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PG-licious | Luxury Artisanal Bakery",
  description: "Experience the finest artisanal pastries and bespoke cakes crafted with passion and elegance. Order online or design your own custom cake.",
  keywords: "bakery, luxury cakes, artisanal pastries, custom cakes, wedding cakes",
  openGraph: {
    title: "PG-licious | Luxury Artisanal Bakery",
    description: "Experience the finest artisanal pastries and bespoke cakes crafted with passion and elegance.",
    url: "https://pg-licious.com",
    siteName: "PG-licious Bakery",
    images: [
      {
        url: "/images/hero_image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
