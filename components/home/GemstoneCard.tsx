import Image from "next/image";
import Link from "next/link";

interface GemstoneCardProps {
  name: string;
  image: string;
  href: string;
}

export default function GemstoneCard({
  name,
  image,
  href,
}: GemstoneCardProps) {
  return (
    <Link
      href={href}
      className="group flex w-full flex-col items-center transition-all duration-500 hover:-translate-y-3"
    >
      {/* Image */}
      <div className="relative flex h-56 w-full items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={350}
          height={250}
          className="h-[220px] w-[240px] object-contain transition-transform duration-700 group-hover:scale-110"
        />

        {/* Golden Glow */}
        <div
          className="
            absolute
            bottom-3
            left-1/2
            h-5
            w-32
            -translate-x-1/2
            rounded-full
            bg-[#D4AF37]/30
            blur-2xl
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
          "
        />
      </div>

      {/* Name */}
      <h3 className="mt-5 text-2xl font-semibold tracking-wide text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
        {name}
      </h3>

      {/* Gold underline */}
      <div className="mt-3 h-[2px] w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-16" />
    </Link>
  );
}