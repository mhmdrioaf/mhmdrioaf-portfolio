"use client";

import Image from "next/image";

interface ITechStackCardProps {
  image: string;
  title: string;
}

export default function TechStackCard({ image, title }: ITechStackCardProps) {
  return (
    <div
      className="p-2 rounded-md bg-primary grid place-items-center w-12 h-12 md:w-16 md:h-16"
      title={title}
    >
      <Image src={image} alt={title} width={25} height={25} />
    </div>
  );
}
