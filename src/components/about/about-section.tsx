import { EDUCATIONS, EXPERIENCES, SELF_DESCRIPTION } from "@/lib/constants";
import AboutCard from "./card";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full p-container-base md:p-container-md gap-4 flex flex-col bg-background text-on-primary"
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
        <div className="w-full flex flex-col gap-1">
          <b className="text-sm md:text-2xl">
            {EXPERIENCES.PRESENTOLOGICS.title}
          </b>
          <p className="text-sm md:text-base">
            {EXPERIENCES.PRESENTOLOGICS.period}
          </p>
          <p className="text-sm md:text-base whitespace-break-spaces">
            {EXPERIENCES.PRESENTOLOGICS.description}
          </p>
        </div>
        <div className="mt-2 w-full flex flex-col gap-1">
          <b className="text-sm md:text-2xl">{EXPERIENCES.DISTRICT.title}</b>
          <p className="text-sm md:text-base">{EXPERIENCES.DISTRICT.period}</p>
          <p className="text-sm md:text-base whitespace-break-spaces">
            {EXPERIENCES.DISTRICT.description}
          </p>
        </div>
        <div className="mt-2 w-full flex flex-col gap-1">
          <b className="text-sm md:text-2xl">
            {EXPERIENCES.SMK_MARKETPLACE.title}
          </b>
          <p className="text-sm md:text-base">
            {EXPERIENCES.SMK_MARKETPLACE.period}
          </p>
          <p className="text-sm md:text-base whitespace-break-spaces">
            {EXPERIENCES.SMK_MARKETPLACE.description}
          </p>
        </div>
        <div className="mt-2 w-full flex flex-col gap-1">
          <b className="text-sm md:text-2xl">{EXPERIENCES.SMK_PPDB.title}</b>
          <p className="text-sm md:text-base">{EXPERIENCES.SMK_PPDB.period}</p>
          <p className="text-sm md:text-base whitespace-break-spaces">
            {EXPERIENCES.SMK_PPDB.description}
          </p>
        </div>
      </AboutCard>
    </section>
  );
}
