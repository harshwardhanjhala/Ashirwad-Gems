"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function NoOilEmeraldPage() {
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

  const sectionContent: Record<
    string,
    {
      title: string;
      paragraphs: string[];
    }
  > = {
    ABOUT: {
      title: "About No-Oil Emerald",
      paragraphs: [
        "No-Oil Emerald is not a mining locality or a separate species. It describes the treatment status of an emerald, the green variety of beryl, where laboratory testing has not found oil, resin or other filler in its fractures.",

        "Most emeralds contain surface-reaching fractures and are routinely filled to improve their appearance. Fine stones with no detectable enhancement are therefore uncommon and are valued for their natural state.",

        "The appearance and value of No-Oil Emerald depend on several characteristics, including colour, clarity, cut, carat weight, origin, treatment, and overall quality.",
      ],
    },

    BENEFITS: {
      title: "Benefits of No-Oil Emerald",
      paragraphs: [
        "In traditional Vedic astrology, Emerald or Panna is associated with Mercury or Budh and is traditionally linked with intellect, communication and learning. These are matters of belief and tradition, not guaranteed outcomes.",

        "Emerald has a Mohs hardness of about 7.5 to 8 but is often internally fractured, so it is more brittle than sapphire or ruby and needs careful handling.",

        "Astrological and metaphysical effects are matters of traditional belief and personal faith. They should not be considered guaranteed outcomes or substitutes for professional advice.",
      ],
    },

    "WHO SHOULD WEAR": {
      title: "Who Should Wear No-Oil Emerald?",
      paragraphs: [
        "Anyone who appreciates the colour and character of No-Oil Emerald may choose it as fine jewellery.",

        "Where a gemstone is chosen for astrological reasons, traditional practice is to have the individual birth chart examined by a qualified astrologer, since suitability can vary from person to person.",

        "For jewellery purposes, anyone who appreciates the look and character of No-Oil Emerald may choose it without wearing it for astrological reasons.",
      ],
    },

    "HOW TO WEAR": {
      title: "How to Wear No-Oil Emerald",
      paragraphs: [
        "No-Oil Emerald is commonly set in rings, pendants and earrings in gold or platinum, with protective settings such as bezels or sheltered claws to reduce the risk of knocks.",

        "For astrological use, traditional practices may specify the metal, finger, day, and method of wearing a gemstone. These recommendations vary with the individual's birth chart and astrological tradition.",

        "If you are purchasing No-Oil Emerald specifically for astrological purposes, it is advisable to follow the guidance of a qualified practitioner rather than relying on a general recommendation.",
      ],
    },

    "QUALITY FACTORS": {
      title: "No-Oil Emerald Quality Factors",
      paragraphs: [
        "Colour and transparency are judged as for any emerald, but a clean, vivid stone with no enhancement is especially notable. Even, well-saturated green remains the main colour goal.",

        "Inclusions are normal in emerald. The key question is how much they affect transparency and durability, so stones with good transparency and a protective cut are preferred.",

        "The laboratory wording matters. Reports may describe clarity enhancement as none, minor, moderate or significant, and only a report indicating none or no indications supports a No-Oil claim.",
      ],
    },

    "CARE & CLEANING": {
      title: "No-Oil Emerald Care & Cleaning",
      paragraphs: [
        "Without filler, the stone relies on its natural structure, so avoid knocks, sudden temperature changes and ultrasonic or steam cleaning. Clean gently with a soft cloth and lukewarm water.",

        "When not being worn, store No-Oil Emerald jewellery separately in a soft pouch to reduce the possibility of scratches or damage to other pieces. Periodic checks of the setting by a jeweller are also advisable.",

        "If the stone has undergone any treatment, follow the specific care recommendations provided by the seller or a gemological professional.",
      ],
    },

    "PRICE GUIDE": {
      title: "No-Oil Emerald Price Guide",
      paragraphs: [
        "No-Oil emeralds command a notable premium over comparable enhanced stones, and truly fine examples are rare. Prices depend on colour, clarity, size and origin.",

        "There is no single fixed price for No-Oil Emerald. When comparing prices, compare stones with similar characteristics, treatment status and certification.",

        "A very low price should be evaluated carefully, particularly when the gemstone is claimed to be natural, untreated, or from a specific origin.",
      ],
    },

    "BUYER BEWARE": {
      title: "No-Oil Emerald Buyer Beware",
      paragraphs: [
        "No-Oil is a claim that must be verified. Insist on a report from a recognised laboratory that explicitly addresses clarity enhancement, and be wary of verbal claims or unusually low prices.",

        "A reputable seller should be able to explain the gemstone's treatment status and provide appropriate documentation or certification when available.",

        "Be careful with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value. A professional gemological report can provide useful information about identity and characteristics.",
      ],
    },

    "FAQ'S": {
      title: "Frequently Asked Questions",
      paragraphs: [
        "What is No-Oil Emerald? No-Oil Emerald describes an emerald in which no clarity-enhancing oil or resin has been detected, a rarity prized by collectors.",

        "Is No-Oil Emerald associated with any planet in astrology? In traditional Vedic astrology, Emerald or Panna is associated with Mercury or Budh and is traditionally linked with intellect, communication and learning. These are matters of belief and tradition, not guaranteed outcomes.",

        "Is No-Oil Emerald durable? Emerald has a Mohs hardness of about 7.5 to 8 but is often internally fractured, so it is more brittle than sapphire or ruby and needs careful handling.",

        "What does No-Oil mean? It means laboratory testing did not detect oil or resin filling the stone's fractures. It does not mean the emerald is flawless.",

        "Is an unenhanced emerald more valuable? Generally yes, when colour and clarity are comparable, because stones without enhancement are rare. The laboratory report should confirm the claim.",

        "How can I verify No-Oil Emerald? A reputable gemological laboratory certificate can help identify the gemstone and provide information about characteristics such as whether it is natural or synthetic and whether treatment has been detected.",
      ],
    },
  };

  const toggleSection = (section: string) => {
    setActiveSection(
      activeSection === section ? null : section
    );
  };

  return (
    <main className="min-h-screen bg-[#0B1120] text-white">

      {/* =====================================================
          MAIN WEBSITE HEADER
      ===================================================== */}

      <Header />

      {/* SPACE BELOW MAIN HEADER */}

      <div style={{ height: "65px" }} />


      {/* =====================================================
          NO-OIL EMERALD INTRO
      ===================================================== */}

      <section
        style={{
          width: "calc(100% - 320px)",
          maxWidth: "1320px",
          margin: "0 auto",
        }}
      >

        <div
          className="grid grid-cols-1 items-center lg:grid-cols-[1.15fr_0.85fr]"
          style={{
            minHeight: "430px",
            columnGap: "40px",
          }}
        >

          {/* =================================================
              LEFT — HEADING + DESCRIPTION
          ================================================= */}

          <div
            style={{
              maxWidth: "650px",
            }}
          >

            <h1
              className="font-semibold leading-tight tracking-tight"
              style={{
                fontSize: "32px",
              }}
            >
              No-Oil Emerald (Panna)
            </h1>


            <div
              className="space-y-1"
              style={{
                marginTop: "12px",
              }}
            >

              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Looking for an emerald with no clarity enhancement?
                Discover{" "}
                <span className="font-semibold text-white">
                  No-Oil Emerald
                </span>{" "}
                today and explore one of the rarest categories in the emerald
                market.
              </p>


              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                No-Oil Emerald describes an emerald in which no clarity-
                enhancing oil or resin has been detected, a rarity prized by
                collectors.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — NO-OIL EMERALD / 360 BLOCK
          ================================================= */}

          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "380px",
            }}
          >

            {/* No-Oil Emerald Glow */}

            <div
              className="
                absolute
                rounded-full
                bg-emerald-500/10
                blur-[100px]
              "
              style={{
                width: "360px",
                height: "360px",
              }}
            />


            {/* Outer Circle */}

            <div
              className="
                absolute
                rounded-full
                border
                border-[#D4AF37]/10
              "
              style={{
                width: "360px",
                height: "360px",
              }}
            />


            {/* Inner Circle */}

            <div
              className="
                absolute
                rounded-full
                border
                border-[#D4AF37]/10
              "
              style={{
                width: "280px",
                height: "280px",
              }}
            />


            {/* No-Oil Emerald Video */}

            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: "560px",
                height: "340px",
              }}
            >
              <video
                src="/videos/gemstones/no-oil-emerald.mp4"
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


      {/* =====================================================
          NO-OIL EMERALD SECTION NAVIGATION
      ===================================================== */}

      <section
        className="border-t border-white/10"
        style={{
          marginTop: "10px",
        }}
      >

        <div
          style={{
            width: "calc(100% - 320px)",
            maxWidth: "1320px",
            margin: "0 auto",
          }}
        >

          <nav
            className="
              flex
              items-center
              justify-between
              overflow-x-auto
            "
            style={{
              minHeight: "72px",
              gap: "25px",
            }}
          >

            {sections.map((section) => (

              <button
                key={section}
                onClick={() => toggleSection(section)}
                className={`
                  whitespace-nowrap
                  text-[13px]
                  font-medium
                  transition
                  ${
                    activeSection === section
                      ? "text-[#D4AF37]"
                      : "text-white/80 hover:text-[#D4AF37]"
                  }
                `}
              >
                {section}
              </button>

            ))}

          </nav>

        </div>

      </section>


      {/* =====================================================
          ACTIVE SECTION CONTENT
      ===================================================== */}

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

            {/* Small Label */}

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              No-Oil Emerald
            </p>


            {/* Section Heading */}

            <h2 className="mt-4 text-3xl font-semibold">
              {sectionContent[activeSection].title}
            </h2>


            {/* Section Content */}

            <div className="mt-6 max-w-4xl space-y-5">

              {sectionContent[activeSection].paragraphs.map(
                (paragraph, index) => (

                  <p
                    key={index}
                    className="text-[17px] leading-8 text-white/60"
                  >
                    {paragraph}
                  </p>

                )
              )}

            </div>

          </div>

        </section>

      )}

    </main>
  );
}