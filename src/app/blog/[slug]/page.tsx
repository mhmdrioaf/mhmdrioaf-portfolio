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
    authors: [
      {
        name: "Muhammad Rio Ananta Firdaus",
        url: "https://github.com/mhmdrioaf",
      },
      {
        name: "Rio Ananta",
        url: "https://linkedin.com/in/rioananta",
      },
    ],
    keywords: [
      "Next.js",
      "TypeScript",
      "MDX",
      "Blog",
      "Javascript",
      "Rio",
      "Rio Ananta",
      "Muhammad Rio Ananta Firdaus",
      "Portfolio",
      "Frontend",
      "Backend",
      "Fullstack",
      "Developer",
      contentSource.frontmatter.title as string,
    ],
    creator: "Muhammad Rio Ananta Firdaus",
    openGraph: {
      type: 'article',
      description: contentSource.frontmatter.description,
      emails: ['dev.rioananta@gmail.com', 'jobs.rioananta@gmail.com'],
      siteName: "Muhammad Rio Ananta Firdaus Portfolio",
      locale: "en_US.utf-8",
      title: contentSource.frontmatter.title,
      url: "https://mhmdrioaf.vercel.app" + contentSource.frontmatter.slug,
      images: contentSource.frontmatter.thumbnail,
      tags: contentSource.frontmatter.tags,
      authors: "Muhammad Rio Ananta Firdaus",
    }
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
    <div className="w-full grid place-items-center bg-background text-foreground">
      <MDXRenderer {...contentSource} />
    </div>
  );
}
