"use client";

import { extractIdFromSlug } from "@/lib/helper";
import { TFrontmatter } from "@/types/content";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface IContentListProps {
  contents: TFrontmatter[];
}

export default function ContentList({ contents }: IContentListProps) {
  const [selected, setSelected] = React.useState<string>(
    extractIdFromSlug(contents[0].slug)
  );

  function onSelectedChange(slug: string) {
    setSelected(extractIdFromSlug(slug));
  }

  const selectedContent = contents.find(
    (content) => extractIdFromSlug(content.slug) === selected
  )!;

  return (
    <section
      id="projects"
      className="w-full bg-background text-foreground px-container-base md:px-container-md mb-4"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 bg-surface text-on-surface rounded-md p-4">
        <section className="flex flex-col gap-1 col-span-1 md:col-span-4">
          <h3 className="font-bold text-lg md:text-3xl">Projects</h3>
          <p className="text-sm md:text-base">
            {
              "These are the projects I've worked on over the past four years. Click on any project image to view more details."
            }
          </p>
        </section>
        <div className="order-2 md:order-1 flex flex-col gap-2 col-span-1">
          {contents.map((content) => (
            <button
              onClick={() => onSelectedChange(content.slug)}
              className={twMerge(
                "w-full rounded-md text-sm px-4 py-2 transition-colors",
                selected === extractIdFromSlug(content.slug)
                  ? "bg-primary text-on-primary"
                  : "bg-surface/85 text-on-surface hover:bg-surface/100"
              )}
              key={content.slug}
            >
              {content.shortTitle}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.a
            initial={{
              filter: "blur(0.25rem)",
              scale: 0.95,
            }}
            animate={{ filter: "blur(0)", scale: 1 }}
            exit={{
              filter: "blur(0.25rem)",
              scale: 0.95,
            }}
            transition={{ duration: 0.3 }}
            key={selectedContent.slug}
            className="order-1 md:order-2 w-full h-full aspect-video relative rounded-lg overflow-hidden col-span-1 md:col-span-3"
            href={selectedContent.slug}
          >
            <Image
              src={selectedContent.thumbnail}
              fill
              className="object-cover"
              alt={selectedContent.shortTitle}
            />
          </motion.a>
        </AnimatePresence>
      </div>
    </section>
  );
}
