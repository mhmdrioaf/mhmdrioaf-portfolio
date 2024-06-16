import { SOCIAL_MEDIA } from "@/lib/constants";
import { Angkor } from "next/font/google";
import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

const angkor = Angkor({ weight: ["400"] });

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="w-full h-svh p-container-base md:p-container-md flex flex-col justify-center items-center bg-background text-on-primary"
    >
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="text-base md:text-2xl">Welcome,</p>
        <h3
          className={twMerge(
            angkor.className,
            "text-xl md:text-3xl font-bold text-primary"
          )}
        >
          {"I'm Muhammad Rio Ananta Firdaus"}
        </h3>
        <p className="text-base md:text-2xl">
          {"Fullstack Web (Typescript-Based) Developer"}
        </p>
        <section id="social-media" className="inline-flex items-center gap-2">
          <Link
            href={SOCIAL_MEDIA.GITHUB}
            className="grid place-items-center p-2 rounded-full border border-primary bg-transparent text-primary hover:bg-primary hover:text-background hover:scale-105 transition-all ease-in-out"
          >
            <IoLogoGithub className="w-6 h-6" />
          </Link>
          <Link
            href={SOCIAL_MEDIA.LINKEDIN}
            className="grid place-items-center p-2 rounded-full border border-primary bg-transparent text-primary hover:bg-primary hover:text-background hover:scale-105 transition-all ease-in-out"
          >
            <IoLogoLinkedin className="w-6 h-6" />
          </Link>
          <Link
            href={SOCIAL_MEDIA.CV}
            className="grid place-items-center p-2 rounded-full border border-primary bg-transparent text-primary hover:bg-primary hover:text-background hover:scale-105 transition-all ease-in-out"
          >
            <p className="text-base">CV</p>
          </Link>
        </section>
      </div>
    </section>
  );
}
