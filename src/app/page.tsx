import AboutSection from "@/components/about/about-section";
import Welcome from "@/components/profile/welcome";

export default async function Home() {
  return (
    <main className="w-full flex flex-col">
      <Welcome />
      <AboutSection />
    </main>
  );
}
