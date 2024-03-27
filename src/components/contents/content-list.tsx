"use client";

import { TFrontmatter } from "@/types/content";
import ContentCard from "./content-card";

interface IContentListProps {
  contents: TFrontmatter[];
}

export default function ContentList({ contents }: IContentListProps) {
  return (
    <div className="w-full flex flex-col gap-4">
      {contents.map((content, idx) => (
        <ContentCard key={idx} content={content} />
      ))}
    </div>
  );
}
