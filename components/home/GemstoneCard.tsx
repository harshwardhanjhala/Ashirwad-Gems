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
      className="group block overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-[#182133] to-[#101725] transition-all duration-500 hover:-translate-y-3 hover:border-[#D4AF37]/70 hover:shadow-[0_20px_60px_rgba(212,175,55,0.18)]"
    >
      {/* Image */}
      <div className="flex h-60 items-center justify-center overflow-hidden p-6">
          <Image
              src={image}
              alt={name}
              width={350}
              height={250}
              className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
          />
      </div>

      {/* Name */}
      <div className="px-5 pb-6 pt-2 text-center">
        <h3 className="text-xl font-semibold tracking-wide text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
          {name}
        </h3>

        {/* Gold line */}
        <div className="mx-auto mt-3 h-[2px] w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-14" />
      </div>
    </Link>
  );
}