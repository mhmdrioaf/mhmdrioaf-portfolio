import { EDUCATIONS, EXPERIENCES, SELF_DESCRIPTION } from "@/lib/constants";
import AboutCard from "./card";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full min-h-svh p-container-base md:p-container-md gap-4 flex flex-col justify-center items-center bg-background text-on-primary"
    >
      <AboutCard title="About Me">
        <p className="text-sm md:text-base">{SELF_DESCRIPTION}</p>
      </AboutCard>
      <AboutCard title="Education">
        <b className="text-sm md:text-2xl">{EDUCATIONS.UNIVERSITY.title}</b>
        <p className="text-sm md:text-base">{EDUCATIONS.UNIVERSITY.period}</p>
        <p className="text-sm md:text-base">
          {EDUCATIONS.UNIVERSITY.description}
        </p>
        <p className="text-sm md:text-base">{EDUCATIONS.UNIVERSITY.GPA}</p>
      </AboutCard>
      <AboutCard title="Experiences">
        <section id="presentologics" className="w-full flex flex-col gap-1">
          <b className="text-sm md:text-2xl">
            {EXPERIENCES.PRESENTOLOGICS.title}
          </b>
          <p className="text-sm md:text-base">
            {EXPERIENCES.PRESENTOLOGICS.period}
          </p>
          <p className="text-sm md:text-base whitespace-break-spaces">
            {EXPERIENCES.PRESENTOLOGICS.description}
          </p>
        </section>
        <section id="district" className="mt-2 w-full flex flex-col gap-1">
          <b className="text-sm md:text-2xl">{EXPERIENCES.DISTRICT.title}</b>
          <p className="text-sm md:text-base">{EXPERIENCES.DISTRICT.period}</p>
          <p className="text-sm md:text-base whitespace-break-spaces">
            {EXPERIENCES.DISTRICT.description}
          </p>
        </section>
        <section
          id="smk_marketplace"
          className="mt-2 w-full flex flex-col gap-1"
        >
          <b className="text-sm md:text-2xl">
            {EXPERIENCES.SMK_MARKETPLACE.title}
          </b>
          <p className="text-sm md:text-base">
            {EXPERIENCES.SMK_MARKETPLACE.period}
          </p>
          <p className="text-sm md:text-base whitespace-break-spaces">
            {EXPERIENCES.SMK_MARKETPLACE.description}
          </p>
        </section>
        <section id="smk_ppdb" className="mt-2 w-full flex flex-col gap-1">
          <b className="text-sm md:text-2xl">{EXPERIENCES.SMK_PPDB.title}</b>
          <p className="text-sm md:text-base">{EXPERIENCES.SMK_PPDB.period}</p>
          <p className="text-sm md:text-base whitespace-break-spaces">
            {EXPERIENCES.SMK_PPDB.description}
          </p>
        </section>
      </AboutCard>
    </section>
  );
}
