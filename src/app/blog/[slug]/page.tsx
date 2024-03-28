import MDXRenderer from "@/components/mdx-renderer";
import { getContent } from "@/lib/helper";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const contentSource = await getContent(params.slug);

  if (!contentSource)
    return {
      title: "Not Found",
      description: "The requested content was not found.",
    };

  return {
    title: contentSource.frontmatter.title as string,
    description: contentSource.frontmatter.description as string,
  };
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const contentSource = await getContent(params.slug);

  if (!contentSource) return notFound();

  return (
    <div className="w-full grid place-items-center">
      <MDXRenderer {...contentSource} />
    </div>
  );
}
