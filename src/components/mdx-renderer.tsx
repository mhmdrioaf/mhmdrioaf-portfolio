"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export default function MDXRenderer({ ...props }: MDXRemoteSerializeResult) {
  return (
    <div className="w-full flex flex-col gap-8 markdown px-32 py-16">
      <div className="w-full h-screen fixed top-0 left-0 noise bg-blend-screen pointer-events-none z-[60] opacity-50" />
      <div className="w-full flex flex-col gap-2">
        <p className="text-4xl font-bold">
          {props.frontmatter.title as string}
        </p>
        <div className="w-full h-px rounded-md bg-on-primary" />
      </div>
      <div className="prose w-full markdown">
        <MDXRemote {...props} />
      </div>
    </div>
  );
}
