import Container from "@/components/common/Container";

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
          <h2 className="text-5xl font-semibold text-white lg:text-6xl">
            Explore Our Finest Collection
          </h2>
        </div>

      </Container>
    </section>
  );
}