import { Angkor } from "next/font/google";
import { twMerge } from "tailwind-merge";

interface IAboutCardProps {
  title: string;
  children: React.ReactNode;
}

const angkor = Angkor({ weight: ["400"], subsets: ["latin"] });

export default function AboutCard({ title, children }: IAboutCardProps) {
  return (
    <section
      id={`about-card-${title.toLowerCase()}`}
      className="w-full rounded-md p-4 flex flex-col gap-1 md:gap-2 bg-surface/45 text-primary"
    >
      <h3
        className={twMerge(angkor.className, "font-bold text-lg md:text-3xl")}
      >
        {title}
      </h3>
      {children}
    </section>
  );
}
