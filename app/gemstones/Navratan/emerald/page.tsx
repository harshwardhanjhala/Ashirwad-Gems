"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function EmeraldPage() {
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
    "ABOUT": { title: "About Emerald", paragraphs: ["Emerald, traditionally known as Panna, is the green variety of the mineral beryl. It is admired for its distinctive green colour and natural character.", "In Indian astrology, Emerald is traditionally associated with Budha or Mercury. It is also highly valued in jewellery for its rich green appearance.", "Its beauty and value depend on colour, clarity, cut, carat weight, origin, and treatment. Inclusions are common in natural emeralds."] },
    "BENEFITS": { title: "Benefits of Emerald", paragraphs: ["Emerald has a significant place in traditional Indian gemstone and astrological practices. It is traditionally associated with Mercury and is believed by practitioners to represent communication, intellect, learning, and clarity.", "Many people choose Emerald for its traditional significance and distinctive green colour.", "Astrological effects are matters of traditional belief and personal faith and should not be considered guaranteed outcomes."] },
    "WHO SHOULD WEAR": { title: "Who Should Wear Emerald?", paragraphs: ["Traditionally, Emerald is associated with Mercury or Budha. In Vedic astrology, whether a person should wear Panna is generally determined by their birth chart.", "People interested in it for astrological purposes often consult a qualified astrologer.", "For jewellery purposes, Emerald may be chosen simply for its colour, character, and design suitability."] },
    "HOW TO WEAR": { title: "How to Wear Emerald", paragraphs: ["Traditional astrological practices may specify the metal, finger, day, and method of wearing Emerald.", "For jewellery use, Emerald can be set in rings, pendants, earrings, bracelets, and other designs.", "If purchasing it specifically for astrological purposes, follow qualified traditional guidance."] },
    "QUALITY FACTORS": { title: "Emerald Quality Factors", paragraphs: ["Colour is one of the most important factors when evaluating Emerald. Attractive, vivid green colour is generally desirable.", "Natural emeralds commonly contain inclusions. Their effect depends on size, location, visibility, and effect on appearance and durability.", "Cut, carat weight, origin, treatment status, and laboratory certification can also influence value."] },
    "CARE & CLEANING": { title: "Emerald Care & Cleaning", paragraphs: ["Emerald requires more careful handling than sapphire because many emeralds contain inclusions and may have undergone clarity enhancement.", "Clean gently with lukewarm water, mild soap, and a soft brush, then rinse and dry with a soft cloth.", "Avoid harsh chemicals, sudden temperature changes, and unnecessary impacts. Unless treatment is known to be suitable, avoid ultrasonic or steam cleaning."] },
    "PRICE GUIDE": { title: "Emerald Price Guide", paragraphs: ["Emerald prices vary widely according to colour, clarity, origin, size, treatment, cut, and certification.", "Colour and overall visual appearance are particularly important.", "Compare gemstones with similar characteristics and treatment status and consider a reliable laboratory report."] },
    "BUYER BEWARE": { title: "Emerald Buyer Beware", paragraphs: ["Ask whether the Emerald is natural, synthetic, or treated. Emeralds are commonly clarity enhanced.", "A reputable seller should explain treatment status and provide appropriate documentation when available.", "Be cautious of unsupported claims about guaranteed astrological results or exceptional origin."] },
    "FAQ'S": { title: "Frequently Asked Questions", paragraphs: ["Is Emerald the same as Panna? Yes. Panna is the traditional Indian name commonly used for Emerald.", "Are inclusions normal in Emerald? Yes. They are common in natural emeralds.", "Is Emerald durable? It is suitable for jewellery but generally needs more care than sapphire.", "Can Emerald be treated? Yes. Clarity enhancement is common.", "How can I verify it? A reputable gemological laboratory report can provide useful identity and treatment information."] }
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
              Emerald (Panna Stone)
            </h1>

            <div className="space-y-1" style={{ marginTop: "12px" }}>
              <p
                className="text-white/80"
                style={{ fontSize: "16px", lineHeight: "1.75" }}
              >
                Explore <span className="font-semibold text-white">Emerald</span>,
                traditionally known as Panna, and discover its gemstone
                characteristics, traditional significance, jewellery use, and buying considerations.
              </p>

              <p
                className="text-white/80"
                style={{ fontSize: "16px", lineHeight: "1.75" }}
              >
                Its distinctive appearance and traditional significance have made
                Emerald a popular choice among gemstone enthusiasts and jewellery buyers.
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
                src="/videos/gemstones/emerald.mp4"
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
              Emerald
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
