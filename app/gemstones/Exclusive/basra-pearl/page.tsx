"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function BasraPearlPage() {
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
      title: "About Basra Pearl",
      paragraphs: [
        "Basra Pearl is a trade name for natural saltwater pearls from the Persian Gulf, named after the historic trading port of Basra rather than a place where the pearls grew. Natural pearls form without human intervention inside oysters, unlike cultured pearls.",

        "The Gulf pearling industry flourished for centuries before cultured pearls reshaped the market in the early twentieth century. Natural Gulf pearls are now very rare and are traded largely through collectors, antique dealers and auctions.",

        "The appearance and value of Basra Pearl depend on several characteristics, including colour, clarity, cut, carat weight, origin, treatment, and overall quality.",
      ],
    },

    BENEFITS: {
      title: "Benefits of Basra Pearl",
      paragraphs: [
        "In traditional Vedic astrology, Pearl or Moti is associated with the Moon or Chandra and is traditionally linked with calmness and emotional balance. These are matters of belief and tradition, not guaranteed outcomes.",

        "Pearl is a soft organic gem with a Mohs hardness of about 2.5 to 4.5, so it scratches easily and needs gentle handling.",

        "Astrological and metaphysical effects are matters of traditional belief and personal faith. They should not be considered guaranteed outcomes or substitutes for professional advice.",
      ],
    },

    "WHO SHOULD WEAR": {
      title: "Who Should Wear Basra Pearl?",
      paragraphs: [
        "Basra Pearl suits collectors and buyers who value natural pearls. For astrological use, suitability is traditionally judged from the individual birth chart.",

        "Where a gemstone is chosen for astrological reasons, traditional practice is to have the individual birth chart examined by a qualified astrologer, since suitability can vary from person to person.",

        "For jewellery purposes, anyone who appreciates the look and character of Basra Pearl may choose it without wearing it for astrological reasons.",
      ],
    },

    "HOW TO WEAR": {
      title: "How to Wear Basra Pearl",
      paragraphs: [
        "Basra Pearl is set in rings, pendants and earrings or strung as necklaces, in silver or gold. Protective settings are advisable, and traditional guidance on metal, finger and day of wearing should come from a qualified practitioner.",

        "For astrological use, traditional practices may specify the metal, finger, day, and method of wearing a gemstone. These recommendations vary with the individual's birth chart and astrological tradition.",

        "If you are purchasing Basra Pearl specifically for astrological purposes, it is advisable to follow the guidance of a qualified practitioner rather than relying on a general recommendation.",
      ],
    },

    "QUALITY FACTORS": {
      title: "Basra Pearl Quality Factors",
      paragraphs: [
        "Lustre is among the most important factors, with a bright, mirror-like surface preferred. Colour, such as white or cream with a rose overtone, is also considered.",

        "Shape, size and surface cleanliness are major factors, and well-matched round or near-round natural pearls are rare. Drops, buttons and baroque shapes are common in natural pearls.",

        "The key issue is natural versus cultured origin, which can only be confirmed by a gemmological laboratory using X-ray testing. A report from a recognised laboratory is essential.",
      ],
    },

    "CARE & CLEANING": {
      title: "Basra Pearl Care & Cleaning",
      paragraphs: [
        "Wipe with a soft damp cloth after wear and keep the pearl away from perfume, hairspray, acids and harsh chemicals. Store it separately in soft fabric, and avoid dry heat and prolonged direct sunlight.",

        "When not being worn, store Basra Pearl jewellery separately in a soft pouch to reduce the possibility of scratches or damage to other pieces. Periodic checks of the setting by a jeweller are also advisable.",

        "If the stone has undergone any treatment, follow the specific care recommendations provided by the seller or a gemological professional.",
      ],
    },

    "PRICE GUIDE": {
      title: "Basra Pearl Price Guide",
      paragraphs: [
        "Natural Gulf pearls are far more valuable than comparable cultured pearls, and prices are strongly shaped by size, shape, lustre, colour and provenance. Documentation is therefore central to value.",

        "There is no single fixed price for Basra Pearl. When comparing prices, compare stones with similar characteristics, treatment status and certification.",

        "A very low price should be evaluated carefully, particularly when the gemstone is claimed to be natural, untreated, or from a specific origin.",
      ],
    },

    "BUYER BEWARE": {
      title: "Basra Pearl Buyer Beware",
      paragraphs: [
        "Cultured pearls, imitation glass pearls and coated beads are sometimes sold using Basra as a descriptive label. Insist on a report from a recognised laboratory confirming natural saltwater origin.",

        "A reputable seller should be able to explain the gemstone's treatment status and provide appropriate documentation or certification when available.",

        "Be careful with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value. A professional gemological report can provide useful information about identity and characteristics.",
      ],
    },

    "FAQ'S": {
      title: "Frequently Asked Questions",
      paragraphs: [
        "What is Basra Pearl? Basra pearls are natural saltwater pearls historically linked with the Persian Gulf pearl trade and are valued for their lustre, rarity and heritage.",

        "Is Basra Pearl associated with any planet in astrology? In traditional Vedic astrology, Pearl or Moti is associated with the Moon or Chandra and is traditionally linked with calmness and emotional balance. These are matters of belief and tradition, not guaranteed outcomes.",

        "Is Basra Pearl durable? Pearl is a soft organic gem with a Mohs hardness of about 2.5 to 4.5, so it scratches easily and needs gentle handling.",

        "Are Basra Pearls natural or cultured? Genuine Basra pearls are natural saltwater pearls, not cultured. A recognised laboratory can confirm this using X-ray examination.",

        "Do Basra Pearls come from the city of Basra? No. The name reflects the historic trade route, while the pearls were harvested from the waters of the Persian Gulf.",

        "How can I verify Basra Pearl? A reputable gemological laboratory certificate can help identify the gemstone and provide information about characteristics such as whether it is natural or synthetic and whether treatment has been detected.",
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
          BASRA PEARL INTRO
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
              Basra Pearl (Moti)
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
                Looking for the rare natural pearls of the Persian Gulf?
                Discover{" "}
                <span className="font-semibold text-white">
                  Basra Pearl
                </span>{" "}
                today and explore a pearl tradition that has been admired for
                centuries.
              </p>


              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Basra pearls are natural saltwater pearls historically linked
                with the Persian Gulf pearl trade and are valued for their
                lustre, rarity and heritage.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — BASRA PEARL / 360 BLOCK
          ================================================= */}

          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "380px",
            }}
          >

            {/* Basra Pearl Glow */}

            <div
              className="
                absolute
                rounded-full
                bg-slate-300/10
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


            {/* Basra Pearl Video */}

            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: "560px",
                height: "340px",
              }}
            >
              <video
                src="/videos/gemstones/basra-pearl.mp4"
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
          BASRA PEARL SECTION NAVIGATION
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
              Basra Pearl
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