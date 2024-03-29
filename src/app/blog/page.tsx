import ContentList from "@/components/contents/content-list";
import { listContents } from "@/lib/helper";
import Link from "next/link";

export default async function BlogPage() {
  const contents = await listContents();
  return (
    <div className="w-full flex flex-col gap-4 px-16 py-8 md:px-32 md:py-16">
      <div className="w-full h-[125vh] fixed top-0 left-0 noise bg-blend-screen pointer-events-none z-[60] opacity-50" />

      <Link href="/" className="text-sm underline">
        <span>⬅ Back</span>
      </Link>

      {contents.length < 1 && <p>No content found</p>}
      {contents.length > 0 && <ContentList contents={contents} />}
    </div>
  );
}
