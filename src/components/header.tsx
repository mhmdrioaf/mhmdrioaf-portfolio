"use client";

import { Angkor } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoDocuments, IoHome, IoPerson } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

export default function Header() {
  const [activeNav, setActiveNav] = React.useState<string>("welcome");
  const scrollIntoView = (id: string) => {
    const element = document.getElementById(id);
    setActiveNav(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  const pathname = usePathname();

  return (
    <header className="fixed right-1/2 bottom-0 md:bottom-1/2 md:right-0 transform translate-y-0 translate-x-1/2 md:translate-x-0 md:translate-y-1/2 z-50 py-container-base md:py-0 px-container-base">
      <nav className="flex flex-row md:flex-col gap-2">
        {pathname === "/" && (
          <>
            <button
              className={twMerge(
                "rounded-full p-2 grid place-items-center bg-surface text-on-surface hover:bg-on-surface hover:text-surface",
                activeNav === "welcome" && "bg-on-surface text-surface"
              )}
              onClick={() => scrollIntoView("welcome")}
            >
              <IoHome className="w-4 h-4" />
            </button>
            <button
              className={twMerge(
                "rounded-full p-2 grid place-items-center bg-surface text-on-surface hover:bg-on-surface hover:text-surface",
                activeNav === "about" && "bg-on-surface text-surface"
              )}
              onClick={() => scrollIntoView("about")}
            >
              <IoPerson className="w-4 h-4" />
            </button>
            <button
              className={twMerge(
                "rounded-full p-2 grid place-items-center bg-surface text-on-surface hover:bg-on-surface hover:text-surface",
                activeNav === "projects" && "bg-on-surface text-surface"
              )}
              onClick={() => scrollIntoView("projects")}
            >
              <IoDocuments className="w-4 h-4" />
            </button>
          </>
        )}

        {pathname !== "/" && (
          <>
            <Link
              href="/"
              className="rounded-full p-2 grid place-items-center bg-surface text-on-surface hover:bg-on-surface hover:text-surface"
              onClick={() => scrollIntoView("welcome")}
            >
              <IoHome className="w-4 h-4" />
            </Link>
            <Link
              href="/#about"
              className="rounded-full p-2 grid place-items-center bg-surface text-on-surface hover:bg-on-surface hover:text-surface"
              onClick={() => scrollIntoView("about")}
            >
              <IoPerson className="w-4 h-4" />
            </Link>
            <Link
              href="/#projects"
              className="rounded-full p-2 grid place-items-center bg-surface text-on-surface hover:bg-on-surface hover:text-surface"
              onClick={() => scrollIntoView("projects")}
            >
              <IoDocuments className="w-4 h-4" />
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
