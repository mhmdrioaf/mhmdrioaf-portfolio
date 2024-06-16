import { EDUCATIONS, EXPERIENCES, SELF_DESCRIPTION } from "@/lib/constants";
import AboutCard from "./card";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full min-h-svh p-container-base md:p-container-md gap-4 flex flex-col justify-center items-center bg-background text-on-primary"
    >
      <AboutCard title="About Me">
        <p>{SELF_DESCRIPTION}</p>
      </AboutCard>
      <AboutCard title="Education">
        <b className="text-2xl">{EDUCATIONS.UNIVERSITY.title}</b>
        <p>{EDUCATIONS.UNIVERSITY.period}</p>
        <p>{EDUCATIONS.UNIVERSITY.description}</p>
        <p>{EDUCATIONS.UNIVERSITY.GPA}</p>
      </AboutCard>
      <AboutCard title="Experiences">
        <section id="presentologics" className="w-full flex flex-col gap-1">
          <b className="text-2xl">{EXPERIENCES.PRESENTOLOGICS.title}</b>
          <p>{EXPERIENCES.PRESENTOLOGICS.period}</p>
          <p className="whitespace-break-spaces">
            {EXPERIENCES.PRESENTOLOGICS.description}
          </p>
        </section>
        <section id="district" className="w-full flex flex-col gap-1">
          <b className="text-2xl">{EXPERIENCES.DISTRICT.title}</b>
          <p>{EXPERIENCES.DISTRICT.period}</p>
          <p className="whitespace-break-spaces">
            {EXPERIENCES.DISTRICT.description}
          </p>
        </section>
        <section id="smk_marketplace" className="w-full flex flex-col gap-1">
          <b className="text-2xl">{EXPERIENCES.SMK_MARKETPLACE.title}</b>
          <p>{EXPERIENCES.SMK_MARKETPLACE.period}</p>
          <p className="whitespace-break-spaces">
            {EXPERIENCES.SMK_MARKETPLACE.description}
          </p>
        </section>
        <section id="smk_ppdb" className="w-full flex flex-col gap-1">
          <b className="text-2xl">{EXPERIENCES.SMK_PPDB.title}</b>
          <p>{EXPERIENCES.SMK_PPDB.period}</p>
          <p className="whitespace-break-spaces">
            {EXPERIENCES.SMK_PPDB.description}
          </p>
        </section>
      </AboutCard>
    </section>
  );
}
