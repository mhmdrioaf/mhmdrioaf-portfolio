"use client";

import Image from "next/image";
import TechStack from "./tech-stack";

export default function SelfProfile() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center md:items-stretch gap-4">
      <div className="w-40 h-40 relative rounded-xl overflow-hidden border-2 border-primary/50 shrink-0">
        <Image
          src="/rio.jpg"
          alt="Photo Profile"
          fill
          className="object-cover scale-125 object-center"
          sizes="100vw"
        />
      </div>

      <div className="w-full flex flex-col gap-4 md:gap-2 justify-between">
        <div className="w-full flex flex-col gap-1">
          <h3 className="text-lg md:text-4xl font-bold text-center md:text-left">
            Muhammad Rio Ananta Firdaus
          </h3>
          <p className="text-sm md:text-lg text-center md:text-left">
            Web Developer
          </p>
        </div>

        <TechStack />
      </div>
    </div>
  );
}
