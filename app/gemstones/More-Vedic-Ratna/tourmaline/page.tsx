"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function TourmalinePage() {
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
      title: "About Tourmaline",
      paragraphs: [
        "Tourmaline is a group of boron silicate minerals found in almost every colour. Well-known varieties include rubellite (pink to red), indicolite (blue), verdelite (green) and watermelon tourmaline with pink and green zones.",

        "Sources include Brazil, Mozambique, Nigeria, Afghanistan and Namibia, among others, and the rare copper-bearing Paraiba tourmaline has vivid neon blue-green colour. Tourmaline can also show strong pleochroism.",

        "The appearance and value of Tourmaline depend on several characteristics, including colour, clarity, cut, carat weight, origin, treatment, and overall quality.",
      ],
    },

    BENEFITS: {
      title: "Benefits of Tourmaline",
      paragraphs: [
        "Tourmaline is not part of the classical Navratna. Traditions linking different colours of tourmaline to different planets vary widely, and any such association is a matter of belief.",

        "Tourmaline has a Mohs hardness of about 7 to 7.5 and suits most jewellery, though some stones can be brittle or contain fractures.",

        "Astrological and metaphysical effects are matters of traditional belief and personal faith. They should not be considered guaranteed outcomes or substitutes for professional advice.",
      ],
    },

    "WHO SHOULD WEAR": {
      title: "Who Should Wear Tourmaline?",
      paragraphs: [
        "Anyone who appreciates the colour and character of Tourmaline may choose it as fine jewellery.",

        "Where a gemstone is chosen for astrological reasons, traditional practice is to have the individual birth chart examined by a qualified astrologer, since suitability can vary from person to person.",

        "For jewellery purposes, anyone who appreciates the look and character of Tourmaline may choose it without wearing it for astrological reasons.",
      ],
    },

    "HOW TO WEAR": {
      title: "How to Wear Tourmaline",
      paragraphs: [
        "Tourmaline is commonly set in rings, pendants, earrings and bracelets in gold, silver or platinum, depending on the design. A secure setting protects the stone while allowing light to reach it.",

        "For astrological use, traditional practices may specify the metal, finger, day, and method of wearing a gemstone. These recommendations vary with the individual's birth chart and astrological tradition.",

        "If you are purchasing Tourmaline specifically for astrological purposes, it is advisable to follow the guidance of a qualified practitioner rather than relying on a general recommendation.",
      ],
    },

    "QUALITY FACTORS": {
      title: "Tourmaline Quality Factors",
      paragraphs: [
        "Colour is the main factor and depends on variety: vivid, saturated and clean colours are valued, and rare colours such as Paraiba are especially prized. Zoning can add character in bi-colour stones.",

        "Clarity expectations vary by colour. Green and blue tourmaline are often cleaner, while rubellite often has inclusions. Cutting should orient the stone for the best colour.",

        "Heat treatment is used for some colours and irradiation for some pink stones, and Paraiba tourmaline requires a laboratory report. Origin and treatment influence price.",
      ],
    },

    "CARE & CLEANING": {
      title: "Tourmaline Care & Cleaning",
      paragraphs: [
        "Clean with lukewarm soapy water and a soft brush, and avoid ultrasonic or steam cleaning for included or fractured stones. Tourmaline can attract dust when warmed or rubbed because of its pyroelectric nature.",

        "When not being worn, store Tourmaline jewellery separately in a soft pouch to reduce the possibility of scratches or damage to other pieces. Periodic checks of the setting by a jeweller are also advisable.",

        "If the stone has undergone any treatment, follow the specific care recommendations provided by the seller or a gemological professional.",
      ],
    },

    "PRICE GUIDE": {
      title: "Tourmaline Price Guide",
      paragraphs: [
        "Prices vary enormously by variety, from accessible green and pink stones to very high prices for Paraiba. Colour, clarity and size matter most.",

        "There is no single fixed price for Tourmaline. When comparing prices, compare stones with similar characteristics, treatment status and certification.",

        "A very low price should be evaluated carefully, particularly when the gemstone is claimed to be natural, untreated, or from a specific origin.",
      ],
    },

    "BUYER BEWARE": {
      title: "Tourmaline Buyer Beware",
      paragraphs: [
        "Check the variety and treatment, since glass and dyed material can imitate tourmaline, and Paraiba claims need laboratory verification.",

        "A reputable seller should be able to explain the gemstone's treatment status and provide appropriate documentation or certification when available.",

        "Be careful with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value. A professional gemological report can provide useful information about identity and characteristics.",
      ],
    },

    "FAQ'S": {
      title: "Frequently Asked Questions",
      paragraphs: [
        "What is Tourmaline? Tourmaline is a mineral family with a wide range of colours, from pink rubellite to blue indicolite, green verdelite and bi-coloured watermelon.",

        "Is Tourmaline associated with any planet in astrology? Tourmaline is not part of the classical Navratna. Traditions linking different colours of tourmaline to different planets vary widely, and any such association is a matter of belief.",

        "Is Tourmaline durable? Tourmaline has a Mohs hardness of about 7 to 7.5 and suits most jewellery, though some stones can be brittle or contain fractures.",

        "What is Paraiba tourmaline? It is a rare copper-bearing tourmaline with vivid blue to green colours. Laboratories can identify the copper-bearing character and sometimes the origin.",

        "Why does tourmaline show different colours from different angles? Tourmaline is pleochroic, meaning it can show different colours when viewed from different directions.",

        "How can I verify Tourmaline? A reputable gemological laboratory certificate can help identify the gemstone and provide information about characteristics such as whether it is natural or synthetic and whether treatment has been detected.",
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
          TOURMALINE INTRO
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
              Tourmaline
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
                Looking for a gemstone that comes in almost every colour?
                Discover{" "}
                <span className="font-semibold text-white">
                  Tourmaline
                </span>{" "}
                today and explore one of the most colourful gemstone families
                in the world.
              </p>


              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Tourmaline is a mineral family with a wide range of colours,
                from pink rubellite to blue indicolite, green verdelite and
                bi-coloured watermelon.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — TOURMALINE / 360 BLOCK
          ================================================= */}

          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "380px",
            }}
          >

            {/* Tourmaline Glow */}

            <div
              className="
                absolute
                rounded-full
                bg-pink-500/10
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


            {/* Tourmaline Video */}

            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: "560px",
                height: "340px",
              }}
            >
              <video
                src="/videos/gemstones/tourmaline.mp4"
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
          TOURMALINE SECTION NAVIGATION
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
              Tourmaline
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