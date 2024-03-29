import ContentList from "@/components/contents/content-list";
import Header from "@/components/header";
import SocialLink from "@/components/link";
import SelfProfile from "@/components/profile/self";
import { listContents } from "@/lib/helper";

export default async function Home() {
  const contents = await listContents();

  return (
    <main className="w-full flex flex-col gap-8 px-16 py-8 md:px-32 md:py-16 bg-background text-on-primary background min-h-screen">
      <div className="w-full h-[125vh] fixed top-0 left-0 noise bg-blend-screen pointer-events-none z-[60] opacity-50" />
      <Header />
      <div className="w-full flex flex-col gap-4">
        <SelfProfile />

        <div className="w-full hidden md:block">
          <p className="font-medium text-justify italic">
            {
              "Seasoned web developer with over four years of dedicated experience in non-commercial projects, I specialize in web development, embracing the latest technologies with enthusiasm. My expertise lies in the React.js and/or Next.js frameworks, where I've honed my skills and fostered a deep passion for crafting dynamic and efficient web solutions. My adaptability to emerging technologies underscores my commitment to staying at the forefront of the ever-evolving web development landscape."
            }
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4">
        {contents.length < 1 && <p>No content found</p>}
        {contents.length > 0 && <ContentList contents={contents} />}
      </div>

      <div className="w-full flex flex-col gap-2">
        <div className="w-full inline-flex gap-2 items-center">
          <SocialLink name="GitHub" link="https://github.com/mhmdrioaf/" />
          <SocialLink
            name="LinkedIn"
            link="https://linkedin.com/in/rioananta/"
          />
          <SocialLink name="Twitter" link="https://twitter.com/oirioir" />
        </div>

        <div>
          <p className="text-sm text-on-primary/65">
            Built with{" "}
            <span>
              <SocialLink link="https://nextjs.org/" name="Next.js" />,
              <SocialLink
                link="https://tailwindcss.com/"
                name="TailwindCSS"
              />{" "}
              and
              <SocialLink link="https://mdxjs.com/" name=" MDX" />
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
