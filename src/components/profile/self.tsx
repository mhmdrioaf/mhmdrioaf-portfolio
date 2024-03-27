"use client";

import Image from "next/image";
import TechStack from "./tech-stack";

export default function SelfProfile() {
  return (
    <div className="w-full inline-flex items-stretch gap-4">
      <div className="w-40 h-40 relative rounded-xl overflow-hidden border-2 border-primary/50 shrink-0">
        <Image
          src="/rio.jpg"
          alt="Photo Profile"
          fill
          className="object-cover scale-125 object-center"
          sizes="100vw"
        />
      </div>

      <div className="w-full flex flex-col gap-2 justify-between">
        <div className="w-full flex flex-col gap-1">
          <h3 className="text-4xl font-bold">Muhammad Rio Ananta Firdaus</h3>
          <p className="text-lg">Web Developer</p>
        </div>

        <TechStack />
      </div>
    </div>
  );
}
