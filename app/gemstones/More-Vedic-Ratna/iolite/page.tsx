"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function IolitePage() {
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
      title: "About Iolite",
      paragraphs: [
        "Iolite is the gem variety of the mineral cordierite. It shows strong pleochroism, appearing violet-blue from one direction and paler or yellowish grey from another.",

        "It is found in India, Sri Lanka, Brazil and Madagascar, among other places, and is sometimes called water sapphire because of its colour. Cutters orient the stone to show its best colour.",

        "The appearance and value of Iolite depend on several characteristics, including colour, clarity, cut, carat weight, origin, treatment, and overall quality.",
      ],
    },

    BENEFITS: {
      title: "Benefits of Iolite",
      paragraphs: [
        "In Indian tradition, Iolite is known as Neeli and is sometimes offered as an Upratna alternative to Blue Sapphire in connection with Saturn. This is a matter of belief and is not universally accepted.",

        "Iolite has a Mohs hardness of about 7 to 7.5 and is suitable for pendants, earrings and rings with sensible care.",

        "Astrological and metaphysical effects are matters of traditional belief and personal faith. They should not be considered guaranteed outcomes or substitutes for professional advice.",
      ],
    },

    "WHO SHOULD WEAR": {
      title: "Who Should Wear Iolite?",
      paragraphs: [
        "Anyone who appreciates the colour and character of Iolite may choose it as fine jewellery.",

        "Where a gemstone is chosen for astrological reasons, traditional practice is to have the individual birth chart examined by a qualified astrologer, since suitability can vary from person to person.",

        "For jewellery purposes, anyone who appreciates the look and character of Iolite may choose it without wearing it for astrological reasons.",
      ],
    },

    "HOW TO WEAR": {
      title: "How to Wear Iolite",
      paragraphs: [
        "Iolite is commonly set in rings, pendants, earrings and bracelets in gold, silver or platinum, depending on the design. A secure setting protects the stone while allowing light to reach it.",

        "For astrological use, traditional practices may specify the metal, finger, day, and method of wearing a gemstone. These recommendations vary with the individual's birth chart and astrological tradition.",

        "If you are purchasing Iolite specifically for astrological purposes, it is advisable to follow the guidance of a qualified practitioner rather than relying on a general recommendation.",
      ],
    },

    "QUALITY FACTORS": {
      title: "Iolite Quality Factors",
      paragraphs: [
        "A rich violet-blue colour viewed face up is most valued, while pale or greyish stones are less desirable. Orientation of the cut is critical.",

        "Fine iolite is often eye-clean. Cut quality matters because poor orientation can make stones look grey or yellowish.",

        "Origin and size affect price. Iolite is usually not heavily treated, but treatment disclosure should still be requested.",
      ],
    },

    "CARE & CLEANING": {
      title: "Iolite Care & Cleaning",
      paragraphs: [
        "Clean with lukewarm soapy water and a soft brush, and avoid hard knocks and harsh chemicals.",

        "When not being worn, store Iolite jewellery separately in a soft pouch to reduce the possibility of scratches or damage to other pieces. Periodic checks of the setting by a jeweller are also advisable.",

        "If the stone has undergone any treatment, follow the specific care recommendations provided by the seller or a gemological professional.",
      ],
    },

    "PRICE GUIDE": {
      title: "Iolite Price Guide",
      paragraphs: [
        "Iolite is generally affordable compared with sapphire and tanzanite, with price driven by colour saturation, clarity and size.",

        "There is no single fixed price for Iolite. When comparing prices, compare stones with similar characteristics, treatment status and certification.",

        "A very low price should be evaluated carefully, particularly when the gemstone is claimed to be natural, untreated, or from a specific origin.",
      ],
    },

    "BUYER BEWARE": {
      title: "Iolite Buyer Beware",
      paragraphs: [
        "Iolite is sometimes sold as tanzanite or sapphire, and glass imitations exist. Confirm identity, and do not pay sapphire or tanzanite prices for iolite.",

        "A reputable seller should be able to explain the gemstone's treatment status and provide appropriate documentation or certification when available.",

        "Be careful with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value. A professional gemological report can provide useful information about identity and characteristics.",
      ],
    },

    "FAQ'S": {
      title: "Frequently Asked Questions",
      paragraphs: [
        "What is Iolite? Iolite is a transparent violet-blue gemstone known for strong pleochroism and good value among blue-violet gems.",

        "Is Iolite associated with any planet in astrology? In Indian tradition, Iolite is known as Neeli and is sometimes offered as an Upratna alternative to Blue Sapphire in connection with Saturn. This is a matter of belief and is not universally accepted.",

        "Is Iolite durable? Iolite has a Mohs hardness of about 7 to 7.5 and is suitable for pendants, earrings and rings with sensible care.",

        "Why is iolite called water sapphire? The name comes from its blue-violet colour and sapphire-like appearance, though iolite is a different mineral with lower hardness.",

        "What is Neeli? Neeli is a name used in the Indian gemstone trade for iolite. It should not be confused with Neelam, which is blue sapphire.",

        "How can I verify Iolite? A reputable gemological laboratory certificate can help identify the gemstone and provide information about characteristics such as whether it is natural or synthetic and whether treatment has been detected.",
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
          IOLITE INTRO
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
              Iolite (Neeli)
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
                Looking for a violet-blue gemstone with remarkable colour
                shifts?
                Discover{" "}
                <span className="font-semibold text-white">
                  Iolite
                </span>{" "}
                today and explore a clear blue-violet gemstone often called
                water sapphire.
              </p>


              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Iolite is a transparent violet-blue gemstone known for strong
                pleochroism and good value among blue-violet gems.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — IOLITE / 360 BLOCK
          ================================================= */}

          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "380px",
            }}
          >

            {/* Iolite Glow */}

            <div
              className="
                absolute
                rounded-full
                bg-indigo-500/10
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


            {/* Iolite Video */}

            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: "560px",
                height: "340px",
              }}
            >
              <video
                src="/videos/gemstones/iolite.mp4"
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
          IOLITE SECTION NAVIGATION
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
              Iolite
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