"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function YellowSapphirePage() {
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
    "ABOUT": { title: "About Yellow Sapphire", paragraphs: ["Yellow Sapphire, traditionally known as Pukhraj, is a yellow variety of corundum. It is admired for its bright yellow colour, durability, brilliance, and elegant appearance.", "In Indian astrology, Yellow Sapphire is traditionally associated with Brihaspati or Jupiter and is considered an important astrological gemstone. It is also widely appreciated as a precious gemstone for jewellery.", "Its appearance and value depend on factors such as colour, clarity, cut, carat weight, origin, and treatment."] },
    "BENEFITS": { title: "Benefits of Yellow Sapphire", paragraphs: ["Yellow Sapphire has an important place in traditional Indian gemstone and astrological practices. It is traditionally associated with Jupiter and is believed by practitioners to represent wisdom, knowledge, prosperity, and growth.", "Many people choose it for its traditional significance as well as its warm yellow appearance and suitability for jewellery.", "Astrological effects are matters of traditional belief and personal faith and should not be considered guaranteed outcomes."] },
    "WHO SHOULD WEAR": { title: "Who Should Wear Yellow Sapphire?", paragraphs: ["Traditionally, Yellow Sapphire is associated with Jupiter or Brihaspati. In Vedic astrology, whether a person should wear Pukhraj is generally determined by examining their individual birth chart.", "People interested in wearing it for astrological purposes often consult a qualified astrologer before choosing the gemstone.", "For jewellery purposes, anyone who appreciates the colour, appearance, and durability of sapphire may choose Yellow Sapphire."] },
    "HOW TO WEAR": { title: "How to Wear Yellow Sapphire", paragraphs: ["For astrological use, traditional practices may specify the metal, finger, day, and method of wearing Yellow Sapphire. These recommendations can vary according to an individual's birth chart and tradition.", "For jewellery use, it can be set in rings, pendants, earrings, bracelets, and other designs.", "If purchasing it specifically for astrological purposes, follow the guidance of a qualified practitioner rather than relying on a general recommendation."] },
    "QUALITY FACTORS": { title: "Yellow Sapphire Quality Factors", paragraphs: ["Colour is generally one of the most important factors, with attractive, evenly distributed yellow colours being particularly desirable.", "Clarity affects appearance and value. Natural sapphires can contain inclusions, and their importance depends on their size, position, visibility, and effect on appearance.", "Cut, carat weight, origin, treatment status, and laboratory certification can also affect value."] },
    "CARE & CLEANING": { title: "Yellow Sapphire Care & Cleaning", paragraphs: ["Yellow Sapphire is a durable gemstone and is suitable for regular jewellery use.", "For routine cleaning, gently clean it using lukewarm water, mild soap, and a soft brush. Rinse thoroughly and dry with a soft cloth.", "Avoid harsh chemicals and unnecessary impacts. Store the jewellery separately when not being worn."] },
    "PRICE GUIDE": { title: "Yellow Sapphire Price Guide", paragraphs: ["The price of Yellow Sapphire can vary significantly depending on its quality and characteristics.", "Important factors include colour, clarity, cut, carat weight, origin, treatment status, and certification.", "When comparing prices, compare gemstones with similar characteristics and documentation."] },
    "BUYER BEWARE": { title: "Yellow Sapphire Buyer Beware", paragraphs: ["Ask whether the Yellow Sapphire is natural, treated, or synthetic, as these characteristics can significantly affect value.", "A reputable seller should explain the treatment status and provide appropriate documentation when certification is available.", "Be cautious with unsupported claims about guaranteed astrological results, rare origins, or unusually high value."] },
    "FAQ'S": { title: "Frequently Asked Questions", paragraphs: ["Is Yellow Sapphire the same as Pukhraj? Yes. Pukhraj is the traditional Indian name commonly used for Yellow Sapphire.", "Is every Yellow Sapphire suitable for astrology? Traditional practices generally consider an individual's birth chart before recommending a gemstone.", "Is Yellow Sapphire durable? Yes. Sapphire is a durable gemstone commonly used in jewellery.", "Can Yellow Sapphire be treated? Yes. Sapphires can undergo treatments to improve their appearance.", "How can I verify it? A reputable gemological laboratory certificate can provide useful information about identity and treatment."] }
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
              Yellow Sapphire (Pukhraj Stone)
            </h1>

            <div className="space-y-1" style={{ marginTop: "12px" }}>
              <p
                className="text-white/80"
                style={{ fontSize: "16px", lineHeight: "1.75" }}
              >
                Explore <span className="font-semibold text-white">Yellow Sapphire</span>,
                traditionally known as Pukhraj, and discover its gemstone
                characteristics, traditional significance, jewellery use, and buying considerations.
              </p>

              <p
                className="text-white/80"
                style={{ fontSize: "16px", lineHeight: "1.75" }}
              >
                Its distinctive appearance and traditional significance have made
                Yellow Sapphire a popular choice among gemstone enthusiasts and jewellery buyers.
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
                src="/videos/gemstones/yellow-sapphire.mp4"
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
              Yellow Sapphire
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
