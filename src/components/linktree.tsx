"use client";

import Image from "next/image";
import SocialLink from "./link";

const LINKS: { name: string; url: string }[] = [
  {
    name: "Portfolio",
    url: "https://mhmdrioaf.vercel.app",
  },
  {
    name: "GitHub",
    url: "https://github.com/mhmdrioaf",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mhmdrioaf/",
  },
  {
    name: "X/Twitter",
    url: "https://twitter.com/oirioir",
  },
  {
    name: "Email",
    url: "mailto:dev.rioananta@gmail.com?subject=LinkTree%20Reach%20Out&body=Hi%20Rio%2C%20I%20found%20your%20LinkTree%20and%20I'd%20like%20to%20connect%20with%20you.",
  },
];

export default function LinkTree() {
  return (
    <div className="w-full p-16 md:p-8 md:w-1/2 flex flex-col gap-8">
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <Image
          src="/rio.jpg"
          width={200}
          height={200}
          className="object-cover rounded-full aspect-square overflow-hidden border-2 border-primary/65"
          alt="Profile Image"
          sizes="100vw"
        />
        <div className="flex flex-col gap-2 text-center">
          <h3 className="text-2xl font-bold">Muhammad Rio Ananta Firdaus</h3>
          <p className="text-sm">Hi, please take a look at my links below.</p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4">
        {LINKS.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            className="w-full rounded-md bg-surface/45 text-primary font-medium hover:bg-surface/100 p-4"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="w-full inline-flex justify-between items-center gap-2 text-primary/65 text-xs md:text-sm">
        <p>
          Built with{" "}
          <span>
            <SocialLink link="https://nextjs.org/" name="Next.js" /> and{" "}
            <SocialLink link="https://tailwindcss.com/" name="TailwindCSS" />
          </span>
        </p>

        <p>&copy; 2024 Muhammad Rio Ananta Firdaus</p>
      </div>
    </div>
  );
}
