"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function PanjshirEmeraldPage() {
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
      title: "About Panjshir Emerald",
      paragraphs: [
        "Panjshir Emerald is emerald, the green variety of beryl, mined in the Panjshir Valley in northeastern Afghanistan, in high mountain terrain.",

        "Emeralds from the region have been known for a long time and are valued for their vivid green colour. As with all emeralds, individual quality varies greatly, and origin opinions should come from a laboratory.",

        "The appearance and value of Panjshir Emerald depend on several characteristics, including colour, clarity, cut, carat weight, origin, treatment, and overall quality.",
      ],
    },

    BENEFITS: {
      title: "Benefits of Panjshir Emerald",
      paragraphs: [
        "In traditional Vedic astrology, Emerald or Panna is associated with Mercury or Budh and is traditionally linked with intellect, communication and learning. These are matters of belief and tradition, not guaranteed outcomes.",

        "Emerald has a Mohs hardness of about 7.5 to 8 but is often internally fractured, so it is more brittle than sapphire or ruby and needs careful handling.",

        "Astrological and metaphysical effects are matters of traditional belief and personal faith. They should not be considered guaranteed outcomes or substitutes for professional advice.",
      ],
    },

    "WHO SHOULD WEAR": {
      title: "Who Should Wear Panjshir Emerald?",
      paragraphs: [
        "Anyone who appreciates the colour and character of Panjshir Emerald may choose it as fine jewellery.",

        "Where a gemstone is chosen for astrological reasons, traditional practice is to have the individual birth chart examined by a qualified astrologer, since suitability can vary from person to person.",

        "For jewellery purposes, anyone who appreciates the look and character of Panjshir Emerald may choose it without wearing it for astrological reasons.",
      ],
    },

    "HOW TO WEAR": {
      title: "How to Wear Panjshir Emerald",
      paragraphs: [
        "Panjshir Emerald is commonly set in rings, pendants and earrings in gold or platinum, with protective settings such as bezels or sheltered claws to reduce the risk of knocks.",

        "For astrological use, traditional practices may specify the metal, finger, day, and method of wearing a gemstone. These recommendations vary with the individual's birth chart and astrological tradition.",

        "If you are purchasing Panjshir Emerald specifically for astrological purposes, it is advisable to follow the guidance of a qualified practitioner rather than relying on a general recommendation.",
      ],
    },

    "QUALITY FACTORS": {
      title: "Panjshir Emerald Quality Factors",
      paragraphs: [
        "Vivid, evenly saturated green is most valued, and fine Panjshir stones can show a pure green with a slightly bluish tone. Very pale or very dark stones are usually priced lower.",

        "Inclusions are normal in emerald. The key question is how much they affect transparency and durability, so stones with good transparency and a protective cut are preferred.",

        "Origin, treatment and carat weight influence price. Most emeralds are enhanced with oil or resin, so ask for the degree of enhancement and a laboratory report that states origin where relevant.",
      ],
    },

    "CARE & CLEANING": {
      title: "Panjshir Emerald Care & Cleaning",
      paragraphs: [
        "Clean with a soft cloth and lukewarm water only. Avoid ultrasonic and steam cleaners and harsh chemicals, which can affect any clarity-enhancing filler in the fractures.",

        "When not being worn, store Panjshir Emerald jewellery separately in a soft pouch to reduce the possibility of scratches or damage to other pieces. Periodic checks of the setting by a jeweller are also advisable.",

        "If the stone has undergone any treatment, follow the specific care recommendations provided by the seller or a gemological professional.",
      ],
    },

    "PRICE GUIDE": {
      title: "Panjshir Emerald Price Guide",
      paragraphs: [
        "Prices depend on colour, clarity, size, treatment and documented origin. Fine, transparent stones with vivid colour and minimal enhancement command the highest prices.",

        "There is no single fixed price for Panjshir Emerald. When comparing prices, compare stones with similar characteristics, treatment status and certification.",

        "A very low price should be evaluated carefully, particularly when the gemstone is claimed to be natural, untreated, or from a specific origin.",
      ],
    },

    "BUYER BEWARE": {
      title: "Panjshir Emerald Buyer Beware",
      paragraphs: [
        "Ask whether the emerald is natural, what clarity enhancement has been used and to what degree. Synthetic and imitation emeralds are common, and origin is hard to judge by eye, so rely on a recognised laboratory report. Ask also for documentation of provenance, as trade conditions affecting stones from Afghanistan can vary.",

        "A reputable seller should be able to explain the gemstone's treatment status and provide appropriate documentation or certification when available.",

        "Be careful with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value. A professional gemological report can provide useful information about identity and characteristics.",
      ],
    },

    "FAQ'S": {
      title: "Frequently Asked Questions",
      paragraphs: [
        "What is Panjshir Emerald? Panjshir emeralds are known for attractive green colour, often with a slight bluish tone, and are valued by buyers seeking a distinctive emerald origin.",

        "Is Panjshir Emerald associated with any planet in astrology? In traditional Vedic astrology, Emerald or Panna is associated with Mercury or Budh and is traditionally linked with intellect, communication and learning. These are matters of belief and tradition, not guaranteed outcomes.",

        "Is Panjshir Emerald durable? Emerald has a Mohs hardness of about 7.5 to 8 but is often internally fractured, so it is more brittle than sapphire or ruby and needs careful handling.",

        "Where do Panjshir emeralds come from? They are mined in the Panjshir Valley of northeastern Afghanistan.",

        "Can origin be confirmed? A recognised gemological laboratory can offer an opinion on origin based on inclusions and trace-element analysis, and this is usually stated in the report.",

        "How can I verify Panjshir Emerald? A reputable gemological laboratory certificate can help identify the gemstone and provide information about characteristics such as whether it is natural or synthetic and whether treatment has been detected.",
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
          PANJSHIR EMERALD INTRO
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
              Panjshir Emerald (Panna)
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
                Looking for an emerald from the high Hindu Kush with vivid
                green colour?
                Discover{" "}
                <span className="font-semibold text-white">
                  Panjshir Emerald
                </span>{" "}
                today and explore emeralds from the Panjshir Valley of
                Afghanistan.
              </p>


              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Panjshir emeralds are known for attractive green colour, often
                with a slight bluish tone, and are valued by buyers seeking a
                distinctive emerald origin.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — PANJSHIR EMERALD / 360 BLOCK
          ================================================= */}

          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "380px",
            }}
          >

            {/* Panjshir Emerald Glow */}

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


            {/* Panjshir Emerald Video */}

            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: "560px",
                height: "340px",
              }}
            >
              <video
                src="/videos/gemstones/panjshir-emerald.mp4"
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
          PANJSHIR EMERALD SECTION NAVIGATION
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
              Panjshir Emerald
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