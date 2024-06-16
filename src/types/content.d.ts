import { MDXRemoteSerializeResult } from "next-mdx-remote";

type TContentSource = Pick<
  MDXRemoteSerializeResult,
  "compiledSource" | "scope"
> & {
  frontmatter: TFrontmatter;
};

type TFrontmatter = {
  title: string;
  description: string;
  slug: string;
  link?: string;
  createdAt: string;
  updatedAt: string;
  tags: string;
  shortTitle: string;
  thumbnail: string;
};
