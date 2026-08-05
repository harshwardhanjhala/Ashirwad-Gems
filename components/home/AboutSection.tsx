import Image from "next/image";
import Container from "@/components/common/Container";

export default function AboutSection() {
  return (
    <section className="bg-black py-40">
      <Container>

        {/* Section Label */}
        <div className="mb-20 flex justify-center">
          <div className="flex items-center gap-4">
            <div className="h-px w-20 bg-[#D4AF37]" />

            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
              ABOUT US
            </span>

            <div className="h-px w-20 bg-[#D4AF37]" />
          </div>
        </div>

        <div className="grid items-center gap-24 lg:grid-cols-2">
        
          {/* LEFT */}
          <div className="flex justify-center">
        
            <div className="w-full max-w-[520px] rounded-3xl p-14 backdrop-blur-sm">

              <div className="w-full max-w-[520px]">
                  <Image
                    src="/images/about/about-title1.png"
                    alt="Ashirwad Precious Gems"
                    width={520}
                    height={150}
                    priority
                    className="h-auto w-full object-contain"
                  />
                </div>

              <div className="mt-6 h-px w-40 bg-[#D4AF37]" />

              <p className="mt-10 text-lg leading-9 text-slate-300">
                Delivering authentic natural gemstones with trust, purity,
                and excellence. Every gemstone is carefully selected to meet
                the highest standards of quality and craftsmanship.
              </p>

            </div>

          </div>

          {/* RIGHT */}
          <div className="mx-auto max-w-[700px]">

            <h3 className="text-2xl font-semibold leading-tight text-white">
              Authentic Precious Gemstones
              <br />
              Trusted Across Generations
            </h3>

            <p className="mt-10 text-md leading-10 text-slate-300">
              Ashirwad Precious Gems specializes in offering original,
              natural, and certified precious gemstones sourced with the
              highest standards of quality. Our collection includes Ruby,
              Emerald, Sapphire, Yellow Sapphire, Diamond, Pearl, Coral,
              Cat&apos;s Eye, Hessonite, and many other rare gemstones.
            </p>

            <p className="mt-8 text-md leading-10 text-slate-300">
              Whether you are searching for gemstones for fine jewellery,
              investment, or astrological purposes, every stone is carefully
              examined to ensure authenticity, brilliance, and lasting value.
              Our commitment to trust and customer satisfaction makes us a
              reliable destination for genuine precious gemstones.
            </p>

            <button className="group mt-12 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37] transition-all duration-300 hover:gap-6">
              <span>Explore Collection</span>

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>

          </div>

        </div>

      </Container>
    </section>
  );
}