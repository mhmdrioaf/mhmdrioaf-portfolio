"use client";

import { TFrontmatter } from "@/types/content";
import Link from "next/link";

interface IContentCardProps {
  content: TFrontmatter;
}

export default function ContentCard({ content }: IContentCardProps) {
  const { tags } = content;
  const _tags = tags.split(",").map((tag) => tag.trim());
  const date = new Date(content.updatedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <Link
      href={content.slug}
      className="w-full flex flex-col gap-2 overflow-hidden rounded-md bg-primary/45 hover:bg-primary/100 transition-colors p-4 mx-auto"
    >
      <div className="w-full flex flex-col gap-2 justify-normal lg:flex-row lg:justify-between">
        <h3 className="text-lg md:text-2xl font-bold line-clamp-2">
          {content.title}
        </h3>
        <p className="text-xs md:text-sm">{date}</p>
      </div>
      <p className="truncate text-xs md:text-sm">{content.description}</p>
      <div className="w-full inline-flex gap-2 items-center flex-wrap">
        {_tags.length > 0 &&
          _tags.map((tag) => (
            <span
              key={tag}
              className="bg-on-primary/20 text-on-primary text-xs md:text-base rounded-md p-2"
            >
              {tag}
            </span>
          ))}
      </div>
    </Link>
  );
}
