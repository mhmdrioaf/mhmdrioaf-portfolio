"use client";

import { TContentSource } from "@/types/content";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Header from "./header";
import Link from "next/link";

const mdxComponents = {
  Image,
};

export default function MDXRenderer({ ...props }: TContentSource) {
  return (
    <div className="w-full md:w-4/5 relative flex flex-col gap-2 items-center justify-center">
      <div className="w-full flex flex-col gap-8 markdown px-16 py-8 md:px-32 md:py-16">
        <Link className="text-on-primary underline text-sm" href="/">
          <span>⬅ Back</span>
        </Link>
        <div className="w-full h-[125vh] fixed top-0 left-0 noise bg-blend-screen pointer-events-none z-[60] opacity-75" />
        <div className="w-full flex flex-col gap-2">
          <p className="text-2xl md:text-4xl hyphens-auto md:hyphens-none text-left font-bold">
            {props.frontmatter.title as string}
          </p>
        </div>
        <div className="prose-sm md:prose-base prose-headings:font-medium prose-a:text-on-primary prose-p:text-left prose-a:underline prose-headings:text-on-primary prose-p:text-on-primary prose-hr:border-on-primary prose-ul:list-disc">
          <MDXRemote {...props} components={mdxComponents} />
        </div>

        {props.frontmatter.link && (
          <div className="w-full">
            <a target="_blank" href={props.frontmatter.link}>
              <button className="w-full rounded-md text-sm text-center p-4 bg-primary/50 text-on-primary hover:bg-primary/100 transition-colors duration-300">
                View Live Project <span className="newWindow" />
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
