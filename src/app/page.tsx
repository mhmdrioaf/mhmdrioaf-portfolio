import AboutSection from "@/components/about/about-section";
import ContentList from "@/components/contents/content-list";
import Welcome from "@/components/profile/welcome";
import { listContents } from "@/lib/helper";

export default async function Home() {
  const contents = await listContents();
  return (
    <main className="w-full flex flex-col">
      <Welcome />
      <AboutSection />
      <ContentList contents={contents} />
    </main>
  );
}
