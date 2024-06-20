"use client";

import { TContentSource } from "@/types/content";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoArrowBack, IoOpenOutline } from "react-icons/io5";

const mdxComponents = {
  Image,
};

export default function MDXRenderer({ ...props }: TContentSource) {
  const router = useRouter();
  return (
    <div className="w-full md:w-4/5 relative flex flex-col gap-2 items-center justify-center">
      <div className="w-full flex flex-col gap-8 markdown p-container-base md:px-32 md:py-16">
        <button
          onClick={() => router.back()}
          className="text-primary underline text-sm inline-flex gap-1"
        >
          <IoArrowBack className="w-4 h-4" />
          <p>Back</p>
        </button>
        <div className="w-full flex flex-col gap-2">
          <p className="text-2xl md:text-4xl hyphens-auto md:hyphens-none text-left font-bold">
            {props.frontmatter.title as string}
          </p>
          <p className="text-sm md:text-base text-left text-foreground">
            {new Date(props.frontmatter.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <b>Keywords: {props.frontmatter.tags}</b>
        </div>
        <div className="prose-sm md:prose-base prose-headings:font-medium prose-a:text-foreground prose-p:text-left prose-a:underline prose-headings:text-foreground prose-p:text-foreground prose-hr:border-foreground prose-ul:list-disc">
          <MDXRemote {...props} components={mdxComponents} />
        </div>

        {props.frontmatter.link && (
          <div className="w-full">
            <a target="_blank" href={props.frontmatter.link}>
              <button className="w-full rounded-md text-sm text-center justify-center p-4 bg-surface/50 text-on-surface hover:bg-surface/100 transition-colors duration-300 inline-flex items-center gap-1">
                <p>View Live Project</p>
                <IoOpenOutline className="w-4 h-4" />
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
