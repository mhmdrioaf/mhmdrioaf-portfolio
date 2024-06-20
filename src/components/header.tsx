"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { IoArrowBack, IoDocuments, IoHome, IoPerson } from "react-icons/io5";
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
  const router = useRouter();

  React.useEffect(() => {
    const elements = ["#welcome", "#about", "#projects"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      { threshold: [1.0, 0.1, 1.0] }
    );

    elements.forEach((element) => {
      const el = document.querySelector(element);
      if (el) observer.observe(el);
    });
  }, []);

  return (
    <header className="fixed right-1/2 bottom-0 md:bottom-1/2 md:right-0 transform translate-y-0 translate-x-1/2 md:translate-x-0 md:translate-y-1/2 z-50 py-container-base md:py-0 px-container-base">
      <nav className="flex flex-row md:flex-col gap-2">
        {pathname === "/" && (
          <>
            <button
              className={twMerge(
                "rounded-full p-2 grid place-items-center bg-surface text-on-surface hover:bg-on-surface hover:text-surface hover:scale-[1.2] transition-transform duration-150",
                activeNav === "welcome" &&
                  "bg-on-surface text-surface scale-[1.2]"
              )}
              onClick={() => scrollIntoView("welcome")}
            >
              <IoHome className="w-4 h-4" />
            </button>
            <button
              className={twMerge(
                "rounded-full p-2 grid place-items-center bg-surface text-on-surface hover:bg-on-surface hover:text-surface hover:scale-[1.2] transition-transform duration-150",
                activeNav === "about" &&
                  "bg-on-surface text-surface scale-[1.2]"
              )}
              onClick={() => scrollIntoView("about")}
            >
              <IoPerson className="w-4 h-4" />
            </button>
            <button
              className={twMerge(
                "rounded-full p-2 grid place-items-center bg-surface text-on-surface hover:bg-on-surface hover:text-surface hover:scale-[1.2] transition-transform duration-150",
                activeNav === "projects" &&
                  "bg-on-surface text-surface scale-[1.2]"
              )}
              onClick={() => scrollIntoView("projects")}
            >
              <IoDocuments className="w-4 h-4" />
            </button>
          </>
        )}

        {pathname !== "/" && (
          <button
            className="rounded-full p-2 grid place-items-center bg-surface text-on-surface hover:bg-on-surface hover:text-surface hover:scale-[1.2] transition-transform duration-150"
            onClick={() => router.back()}
          >
            <IoArrowBack className="w-4 h-4" />
          </button>
        )}
      </nav>
    </header>
  );
}
