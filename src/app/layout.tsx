import type { Metadata } from "next";
import { Arvo } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Header from "@/components/header";

const arvo = Arvo({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Rio Ananta Firdaus | Web Developer",
  description:
    "This website is Muhammad Rio Ananta Firdaus portfolio. It contains information about Muhammad Rio Ananta Firdaus, his projects, and his contact information.",
  creator: "Muhammad Rio Ananta Firdaus",
  keywords:
    "web developer, portfolio, rioananta, rio, ananta, firdaus, muhammad rio ananta firdaus, rio ananta, rio ananta firdaus, mhmdrioaf",
  generator: "Next.js",
  applicationName: "Muhammad Rio Ananta Firdaus Portfolio",
  openGraph: {
    type: "website",
    countryName: "Indonesia",
    description:
      "This website is Muhammad Rio Ananta Firdaus portfolio. It contains information about Muhammad Rio Ananta Firdaus, his projects, and his contact information.",
    emails: "dev.rioananta@gmail.com",
    locale: "en_US.utf-8",
    siteName: "Muhammad Rio Ananta Firdaus Portfolio",
    title: "Muhammad Rio Ananta Firdaus | Web Developer",
    url: "https://mhmdrioaf.vercel.app",
    images: ["https://mhmdrioaf.vercel.app/rio.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(arvo.className, "relative")}>
        <Header />
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
