"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolling, setIsScrolling] = useState(false);

  const headerStyle = `w-[calc(100%-6rem)] inline-flex left-0 rounded-md px-8 py-8 sticky text-on-primary justify-between transition-all duration-300 z-50 ${
    isScrolling
      ? "bg-primary/85 backdrop-blur-sm opacity-100 top-4"
      : "opacity-0 -top-8"
  }`;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolling(window.scrollY > 250);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setIsScrolling(window.scrollY > 250);
      });
    };
  }, []);

  return (
    <header className={headerStyle}>
      <h3 className="font-bold">Rio</h3>

      <nav className="inline-flex items-center gap-2">
        <Link href="/blog">Projects</Link>
        <Link href="/links">Links</Link>
        <Link className="block md:hidden" href="/about">
          About
        </Link>
      </nav>
    </header>
  );
}
