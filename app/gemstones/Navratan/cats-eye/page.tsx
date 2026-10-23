"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function CatsEyePage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    "ABOUT",
    "BENEFITS",
    "WHO SHOULD WEAR",
    "HOW TO WEAR",
    "QUALITY FACTORS",
    "CARE & CLEANING",
    "PRICE GUIDE",
    "BUYER BEWARE",
    "FAQ'S",
  ];

  const sectionContent: Record<string, { title: string; paragraphs: string[] }> = {
    "ABOUT": { title: "About Cat's Eye", paragraphs: ["Cat's Eye, traditionally known as Lehsunia, is a gemstone valued for its distinctive chatoyant band of light.", "In Indian astrology, Cat's Eye is traditionally associated with Ketu. It is also used in jewellery for its distinctive appearance.", "The quality and value of Cat's Eye depend on characteristics such as colour, clarity or surface quality, size, shape or cut, origin, and treatment status."] },
    "BENEFITS": { title: "Benefits of Cat's Eye", paragraphs: ["Cat's Eye has a place in traditional Indian gemstone and astrological practices and is traditionally associated with Ketu.", "Many people choose Cat's Eye for its appearance, jewellery use, and traditional significance.", "Astrological effects are matters of traditional belief and personal faith and should not be considered guaranteed outcomes."] },
    "WHO SHOULD WEAR": { title: "Who Should Wear Cat's Eye?", paragraphs: ["Traditional astrological practices associate Cat's Eye with Ketu. Whether a person should wear it is generally determined by examining their individual birth chart.", "People interested in wearing it for astrological purposes often consult a qualified astrologer.", "For jewellery purposes, Cat's Eye can also be selected according to personal preference, quality, and design."] },
    "HOW TO WEAR": { title: "How to Wear Cat's Eye", paragraphs: ["For astrological use, traditional practices may specify the metal, finger, day, and method of wearing Cat's Eye.", "For jewellery use, Cat's Eye can be set in rings, pendants, earrings, bracelets, and other designs.", "If purchasing it specifically for astrological purposes, follow the guidance of a qualified practitioner."] },
    "QUALITY FACTORS": { title: "Cat's Eye Quality Factors", paragraphs: ["Colour and overall appearance are important factors when evaluating Cat's Eye.", "Other characteristics such as clarity or surface quality, size, cut or shape, origin, and treatment can affect appearance and value.", "A reliable laboratory report can provide useful information about identity and relevant characteristics."] },
    "CARE & CLEANING": { title: "Cat's Eye Care & Cleaning", paragraphs: ["Cat's Eye should be handled according to the properties of the material and its jewellery setting.", "For routine cleaning, use a gentle method appropriate for the gemstone, such as lukewarm water, mild soap, and a soft cloth or brush when suitable.", "Avoid harsh chemicals, unnecessary impacts, and improper cleaning equipment. Store jewellery separately when not being worn."] },
    "PRICE GUIDE": { title: "Cat's Eye Price Guide", paragraphs: ["The price of Cat's Eye can vary significantly depending on quality and characteristics.", "Important factors can include colour, clarity or surface quality, size, cut or shape, origin, treatment status, and certification.", "When comparing prices, compare gemstones with similar characteristics and documentation."] },
    "BUYER BEWARE": { title: "Cat's Eye Buyer Beware", paragraphs: ["When purchasing Cat's Eye, ask whether the material is natural, synthetic, treated, dyed, cultured, or otherwise processed, as applicable.", "A reputable seller should clearly explain the gemstone's identity and treatment status and provide appropriate documentation when available.", "Be cautious with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value."] },
    "FAQ'S": { title: "Frequently Asked Questions", paragraphs: ["Is Cat's Eye used in traditional Indian astrology? Yes. It has a traditional association, although practices vary.", "Is every Cat's Eye suitable for astrology? Traditional practices generally consider an individual's birth chart before recommending a gemstone.", "Can Cat's Eye be treated or enhanced? Depending on the material, treatments or enhancements may be possible.", "Is Cat's Eye suitable for jewellery? It can be used in jewellery when the material and setting are appropriate and it is cared for properly.", "How can I verify Cat's Eye? A reputable gemological laboratory or qualified specialist can help identify the material and relevant characteristics."] }
  };

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      <Header />

      <div style={{ height: "65px" }} />

      <section style={{ width: "calc(100% - 320px)", maxWidth: "1320px", margin: "0 auto" }}>
        <div
          className="grid grid-cols-1 items-center lg:grid-cols-[1.15fr_0.85fr]"
          style={{ minHeight: "430px", columnGap: "40px" }}
        >
          <div style={{ maxWidth: "650px" }}>
            <h1
              className="font-semibold leading-tight tracking-tight"
              style={{ fontSize: "32px" }}
            >
              Cat's Eye (Lehsunia Stone)
            </h1>

            <div className="space-y-1" style={{ marginTop: "12px" }}>
              <p
                className="text-white/80"
                style={{ fontSize: "16px", lineHeight: "1.75" }}
              >
                Explore <span className="font-semibold text-white">Cat's Eye</span>,
                traditionally known as Lehsunia, and discover its gemstone
                characteristics, traditional significance, jewellery use, and buying considerations.
              </p>

              <p
                className="text-white/80"
                style={{ fontSize: "16px", lineHeight: "1.75" }}
              >
                Its distinctive appearance and traditional significance have made
                Cat's Eye a popular choice among gemstone enthusiasts and jewellery buyers.
              </p>
            </div>
          </div>

          <div
            className="relative flex items-center justify-center"
            style={{ minHeight: "380px" }}
          >
            <div
              className="absolute rounded-full bg-blue-500/10 blur-[100px]"
              style={{ width: "360px", height: "360px" }}
            />

            <div
              className="absolute rounded-full border border-[#D4AF37]/10"
              style={{ width: "360px", height: "360px" }}
            />

            <div
              className="absolute rounded-full border border-[#D4AF37]/10"
              style={{ width: "280px", height: "280px" }}
            />

            <div
              className="relative z-10 overflow-hidden"
              style={{ width: "560px", height: "340px" }}
            >
              <video
                src="/videos/gemstones/cats-eye.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: "scale(1.12)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10" style={{ marginTop: "10px" }}>
        <div style={{ width: "calc(100% - 320px)", maxWidth: "1320px", margin: "0 auto" }}>
          <nav
            className="flex items-center justify-between overflow-x-auto"
            style={{ minHeight: "72px", gap: "25px" }}
          >
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => toggleSection(section)}
                className={`whitespace-nowrap text-[13px] font-medium transition ${
                  activeSection === section
                    ? "text-[#D4AF37]"
                    : "text-white/80 hover:text-[#D4AF37]"
                }`}
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {activeSection && sectionContent[activeSection] && (
        <section className="border-t border-white/10 bg-[#0D1424]">
          <div
            style={{
              width: "calc(100% - 320px)",
              maxWidth: "1100px",
              margin: "0 auto",
              paddingTop: "70px",
              paddingBottom: "70px",
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Cat's Eye
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              {sectionContent[activeSection].title}
            </h2>

            <div className="mt-6 max-w-4xl space-y-5">
              {sectionContent[activeSection].paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[17px] leading-8 text-white/60"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
