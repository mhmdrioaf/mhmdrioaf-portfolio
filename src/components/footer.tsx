import { SOCIAL_MEDIA } from "@/lib/constants";
import Link from "next/link";
import { IoOpenOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="w-full text-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-container-base py-container-base md:px-container-md bg-surface text-on-surface rounded-t-lg pb-14 md:pb-0 mt-4">
      <section id="credits">
        <p>
          Built with{" "}
          <Link
            href="https://nextjs.org"
            target="_blank"
            className="hover:underline font-bold"
          >
            Next.js
          </Link>
          ,{" "}
          <Link
            href="https://tailwindcss.com"
            target="_blank"
            className="hover:underline font-bold"
          >
            TailwindCSS
          </Link>
          ,{" "}
          <Link
            href="https://tailwindcss.com"
            target="_blank"
            className="hover:underline font-bold"
          >
            MDX.
          </Link>
        </p>
      </section>

      <section id="contacts" className="flex flex-col gap-2">
        <b>Contacts</b>
        <Link target="_blank" href={SOCIAL_MEDIA.GITHUB}>
          <div className="inline-flex items-center gap-1">
            <p>GitHub</p>
            <span>
              <IoOpenOutline className="w-4 h-4" />
            </span>
          </div>
        </Link>
        <Link target="_blank" href={SOCIAL_MEDIA.LINKEDIN}>
          <div className="inline-flex items-center gap-1">
            <p>LinkedIn</p>
            <span>
              <IoOpenOutline className="w-4 h-4" />
            </span>
          </div>
        </Link>
        <Link target="_blank" href={SOCIAL_MEDIA.CV}>
          <div className="inline-flex items-center gap-1">
            <p>Curriculum Vitae</p>
            <span>
              <IoOpenOutline className="w-4 h-4" />
            </span>
          </div>
        </Link>
        <Link
          target="_blank"
          href="mailto:dev.rioananta@gmail.com?subject=Portfolio%20Reach%20Out&body=Hey%20there%2C%0A%5BYour%20message%5D&cc=jobs.rioananta@gmail.com"
        >
          <div className="inline-flex items-center gap-1">
            <p>dev.rioananta@gmail.com</p>
            <span>
              <IoOpenOutline className="w-4 h-4" />
            </span>
          </div>
        </Link>
      </section>
    </footer>
  );
}
