import SelfProfile from "@/components/profile/self";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col gap-8 px-16 py-8 md:px-32 md:py-16 bg-background text-on-primary background min-h-screen">
      <div className="w-full h-[125vh] fixed top-0 left-0 noise bg-blend-screen pointer-events-none z-[60] opacity-50" />
      <div className="w-full flex flex-col gap-4">
        <SelfProfile />

        <div className="w-full">
          <p className="hyphens-auto text-justify">
            {
              "Seasoned web developer with over four years of dedicated experience in non-commercial projects, I specialize in web development, embracing the latest technologies with enthusiasm. My expertise lies in the React.js and/or Next.js frameworks, where I've honed my skills and fostered a deep passion for crafting dynamic and efficient web solutions. My adaptability to emerging technologies underscores my commitment to staying at the forefront of the ever-evolving web development landscape."
            }
          </p>
        </div>

        <div className="w-full inline-flex items-center justify-center gap-2 flex-wrap">
          <a
            href="https://github.com/mhmdrioaf"
            className="p-2 rounded-md text-sm font-bold bg-primary/45 hover:bg-primary-100"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/rioananta/"
            className="p-2 rounded-md text-sm font-bold bg-primary/45 hover:bg-primary-100"
          >
            LinkedIn
          </a>

          <a
            href="https://twitter.com/oirioir"
            className="p-2 rounded-md text-sm font-bold bg-primary/45 hover:bg-primary-100"
          >
            Twitter/X
          </a>

          <a
            href="mailto:dev.rioananta@gmail.com?subject=Portfolio%20Reach%20Out&body=Hi%20Rio%2C%20I%20found%20your%Portfolio%20and%20I'd%20like%20to%20connect%20with%20you."
            className="p-2 rounded-md text-sm font-bold bg-primary/45 hover:bg-primary-100"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
