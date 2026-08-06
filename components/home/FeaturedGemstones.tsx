import Container from "@/components/common/Container";
import GemstoneGrid from "./GemstoneGrid";

export default function FeaturedGemstones() {
  return (
    <section className="relative bg-[#0B1120] py-32">

      <Container>

        {/* Section Label */}
        <div className="flex justify-center">
          <div className="flex items-center gap-4">
            <div className="h-px w-20 bg-[#D4AF37]" />

            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
              FEATURED GEMSTONES
            </span>

            <div className="h-px w-20 bg-[#D4AF37]" />
          </div>
        </div>

        {/* Heading */}
        <div className="mt-8 text-center">
          <h2 className="text-3xl font-semibold tracking-wide text-white md:text-4xl lg:text-5xl">
            Explore Our Finest Collection
          </h2>
        </div>

        {/* Gemstone Cards */}   
        <div className="mt-24">
          <GemstoneGrid />
        </div>

      </Container>
    </section>
  );
}