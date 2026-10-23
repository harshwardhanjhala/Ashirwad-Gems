"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function PearlPage() {
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
    "ABOUT": { title: "About Pearl", paragraphs: ["Pearl, traditionally known as Moti, is an organic gemstone formed within certain molluscs and admired for its soft lustre.", "In Indian astrology, Pearl is traditionally associated with Chandra or the Moon. It is also used in jewellery for its distinctive appearance.", "The quality and value of Pearl depend on characteristics such as colour, clarity or surface quality, size, shape or cut, origin, and treatment status."] },
    "BENEFITS": { title: "Benefits of Pearl", paragraphs: ["Pearl has a place in traditional Indian gemstone and astrological practices and is traditionally associated with Chandra or the Moon.", "Many people choose Pearl for its appearance, jewellery use, and traditional significance.", "Astrological effects are matters of traditional belief and personal faith and should not be considered guaranteed outcomes."] },
    "WHO SHOULD WEAR": { title: "Who Should Wear Pearl?", paragraphs: ["Traditional astrological practices associate Pearl with Chandra or the Moon. Whether a person should wear it is generally determined by examining their individual birth chart.", "People interested in wearing it for astrological purposes often consult a qualified astrologer.", "For jewellery purposes, Pearl can also be selected according to personal preference, quality, and design."] },
    "HOW TO WEAR": { title: "How to Wear Pearl", paragraphs: ["For astrological use, traditional practices may specify the metal, finger, day, and method of wearing Pearl.", "For jewellery use, Pearl can be set in rings, pendants, earrings, bracelets, and other designs.", "If purchasing it specifically for astrological purposes, follow the guidance of a qualified practitioner."] },
    "QUALITY FACTORS": { title: "Pearl Quality Factors", paragraphs: ["Colour and overall appearance are important factors when evaluating Pearl.", "Other characteristics such as clarity or surface quality, size, cut or shape, origin, and treatment can affect appearance and value.", "A reliable laboratory report can provide useful information about identity and relevant characteristics."] },
    "CARE & CLEANING": { title: "Pearl Care & Cleaning", paragraphs: ["Pearl should be handled according to the properties of the material and its jewellery setting.", "For routine cleaning, use a gentle method appropriate for the gemstone, such as lukewarm water, mild soap, and a soft cloth or brush when suitable.", "Avoid harsh chemicals, unnecessary impacts, and improper cleaning equipment. Store jewellery separately when not being worn."] },
    "PRICE GUIDE": { title: "Pearl Price Guide", paragraphs: ["The price of Pearl can vary significantly depending on quality and characteristics.", "Important factors can include colour, clarity or surface quality, size, cut or shape, origin, treatment status, and certification.", "When comparing prices, compare gemstones with similar characteristics and documentation."] },
    "BUYER BEWARE": { title: "Pearl Buyer Beware", paragraphs: ["When purchasing Pearl, ask whether the material is natural, synthetic, treated, dyed, cultured, or otherwise processed, as applicable.", "A reputable seller should clearly explain the gemstone's identity and treatment status and provide appropriate documentation when available.", "Be cautious with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value."] },
    "FAQ'S": { title: "Frequently Asked Questions", paragraphs: ["Is Pearl used in traditional Indian astrology? Yes. It has a traditional association, although practices vary.", "Is every Pearl suitable for astrology? Traditional practices generally consider an individual's birth chart before recommending a gemstone.", "Can Pearl be treated or enhanced? Depending on the material, treatments or enhancements may be possible.", "Is Pearl suitable for jewellery? It can be used in jewellery when the material and setting are appropriate and it is cared for properly.", "How can I verify Pearl? A reputable gemological laboratory or qualified specialist can help identify the material and relevant characteristics."] }
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
              Pearl (Moti Stone)
            </h1>

            <div className="space-y-1" style={{ marginTop: "12px" }}>
              <p
                className="text-white/80"
                style={{ fontSize: "16px", lineHeight: "1.75" }}
              >
                Explore <span className="font-semibold text-white">Pearl</span>,
                traditionally known as Moti, and discover its gemstone
                characteristics, traditional significance, jewellery use, and buying considerations.
              </p>

              <p
                className="text-white/80"
                style={{ fontSize: "16px", lineHeight: "1.75" }}
              >
                Its distinctive appearance and traditional significance have made
                Pearl a popular choice among gemstone enthusiasts and jewellery buyers.
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
                src="/videos/gemstones/pearl.mp4"
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
              Pearl
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
