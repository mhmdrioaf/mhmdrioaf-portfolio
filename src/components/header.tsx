"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolling, setIsScrolling] = useState(false);

  const headerStyle = `w-full inline-flex left-0 rounded-md px-8 py-8 sticky text-on-primary justify-between transition-all duration-300 z-50 ${
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
        <a href="https://github.com/mhmdrioaf" target="_blank">
          GitHub
        </a>
        <a href="https://linkedin.com/in/rioananta" target="_blank">
          LinkedIn
        </a>
        <a href="https://twitter.com/oirioir" target="_blank">
          Twitter
        </a>
      </nav>
    </header>
  );
}
