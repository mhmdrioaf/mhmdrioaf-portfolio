"use client";

import { TFrontmatter } from "@/types/content";
import Link from "next/link";

interface IContentCardProps {
  content: TFrontmatter;
}

export default function ContentCard({ content }: IContentCardProps) {
  return (
    <Link
      href={content.slug}
      className="w-full flex flex-col gap-2 overflow-hidden rounded-md bg-primary/75 hover:bg-primary/100 transition-colors backdrop-blur-sm p-4 mx-auto"
    >
      <h3 className="text-2xl font-bold">{content.title}</h3>
      <p className="truncate text-sm">{content.description}</p>
    </Link>
  );
}
