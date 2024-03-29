"use client";

import TechStackCard from "./tech-stack-card";

export default function TechStack() {
  return (
    <div className="w-full inline-flex gap-2 items-center justify-center md:justify-normal">
      <TechStackCard image="/javascript.svg" title="JavaScript" />
      <TechStackCard image="/typescript.svg" title="Typescript" />
      <TechStackCard image="/react.svg" title="React.js" />
      <TechStackCard image="/vitejs.svg" title="Vite.js" />
      <TechStackCard image="/next-js.svg" title="Next.js" />
    </div>
  );
}
