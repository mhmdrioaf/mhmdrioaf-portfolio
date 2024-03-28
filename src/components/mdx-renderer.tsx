"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";

const mdxComponents = {
  Image,
};

export default function MDXRenderer({ ...props }: MDXRemoteSerializeResult) {
  return (
    <div className="w-3/4 flex flex-col gap-8 markdown px-32 py-16">
      <div className="w-full h-screen fixed top-0 left-0 noise bg-blend-screen pointer-events-none z-[60] opacity-75" />
      <div className="w-full flex flex-col gap-2">
        <p className="text-4xl font-bold">
          {props.frontmatter.title as string}
        </p>
      </div>
      <div className="prose-base prose-headings:font-medium prose-a:text-on-primary prose-p:text-left prose-a:underline prose-headings:text-on-primary prose-p:text-on-primary prose-hr:border-on-primary">
        <MDXRemote {...props} components={mdxComponents} />
      </div>
    </div>
  );
}
