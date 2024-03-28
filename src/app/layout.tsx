import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rio | Web Developer",
  description: "Muhammad Rio Ananta Firdaus portfolio website",
  creator: "Muhammad Rio Ananta Firdaus",
  keywords: "web developer, portfolio, rioananta, rio, ananta, firdaus",
  generator: "Next.js",
  applicationName: "Rio's Portfolio",
  openGraph: {
    type: "website",
    countryName: "Indonesia",
    description: "Muhammad Rio Ananta Firdaus portfolio website",
    emails: "dev.rioananta@gmail.com",
    locale: "en_US",
    siteName: "Rio's Portfolio",
    title: "Rio | Web Developer",
    url: "https://mhmdrioaf.vercel.app",
    images: ["/rio.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
