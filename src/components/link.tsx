"use client";

interface ISocialLinkProps {
  link: string;
  name: string;
}

export default function SocialLink({ link, name }: ISocialLinkProps) {
  return (
    <a
      href={link}
      className="text-sm text-primary/65 hover:text-primary/100 hover:underline"
      target="_blank"
    >
      {name}
    </a>
  );
}
