"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function BlueTopazPage() {
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
      title: "About Blue Topaz",
      paragraphs: [
        "Blue Topaz is topaz, a silicate mineral that is rarely blue in nature. Most blue topaz on the market is produced by irradiating and heating colourless topaz, a treatment widely used and accepted in the trade.",

        "Common trade shades include sky blue, Swiss blue and London blue, in increasing depth. Topaz is mined in countries such as Brazil, Nigeria, Pakistan and Sri Lanka.",

        "The appearance and value of Blue Topaz depend on several characteristics, including colour, clarity, cut, carat weight, origin, treatment, and overall quality.",
      ],
    },

    BENEFITS: {
      title: "Benefits of Blue Topaz",
      paragraphs: [
        "In Indian tradition, Blue Topaz is sometimes offered as an alternative or Upratna to Blue Sapphire in connection with Saturn. This is a matter of belief and tradition and is not universally accepted.",

        "Topaz has a Mohs hardness of 8 but also has perfect cleavage in one direction, so it can chip or split if struck sharply and benefits from a protective setting.",

        "Astrological and metaphysical effects are matters of traditional belief and personal faith. They should not be considered guaranteed outcomes or substitutes for professional advice.",
      ],
    },

    "WHO SHOULD WEAR": {
      title: "Who Should Wear Blue Topaz?",
      paragraphs: [
        "Anyone who appreciates the colour and character of Blue Topaz may choose it as fine jewellery.",

        "Where a gemstone is chosen for astrological reasons, traditional practice is to have the individual birth chart examined by a qualified astrologer, since suitability can vary from person to person.",

        "For jewellery purposes, anyone who appreciates the look and character of Blue Topaz may choose it without wearing it for astrological reasons.",
      ],
    },

    "HOW TO WEAR": {
      title: "How to Wear Blue Topaz",
      paragraphs: [
        "Blue Topaz is commonly set in rings, pendants, earrings and bracelets in gold, silver or platinum, depending on the design. A secure setting protects the stone while allowing light to reach it.",

        "For astrological use, traditional practices may specify the metal, finger, day, and method of wearing a gemstone. These recommendations vary with the individual's birth chart and astrological tradition.",

        "If you are purchasing Blue Topaz specifically for astrological purposes, it is advisable to follow the guidance of a qualified practitioner rather than relying on a general recommendation.",
      ],
    },

    "QUALITY FACTORS": {
      title: "Blue Topaz Quality Factors",
      paragraphs: [
        "Colour intensity and evenness are the main factors, with deeper London blue shades usually costing more than pale sky blue.",

        "Topaz is usually very clean, so eye-clean stones are the norm. Cut quality strongly affects brilliance.",

        "Treatment is standard, so disclosure is essential. Reputable sellers use stones that have been properly processed and tested.",
      ],
    },

    "CARE & CLEANING": {
      title: "Blue Topaz Care & Cleaning",
      paragraphs: [
        "Avoid sharp knocks and sudden temperature changes. Clean with lukewarm soapy water and a soft brush, and avoid ultrasonic and steam cleaning.",

        "When not being worn, store Blue Topaz jewellery separately in a soft pouch to reduce the possibility of scratches or damage to other pieces. Periodic checks of the setting by a jeweller are also advisable.",

        "If the stone has undergone any treatment, follow the specific care recommendations provided by the seller or a gemological professional.",
      ],
    },

    "PRICE GUIDE": {
      title: "Blue Topaz Price Guide",
      paragraphs: [
        "Blue topaz is generally affordable, with prices based on colour depth, size and cut quality.",

        "There is no single fixed price for Blue Topaz. When comparing prices, compare stones with similar characteristics, treatment status and certification.",

        "A very low price should be evaluated carefully, particularly when the gemstone is claimed to be natural, untreated, or from a specific origin.",
      ],
    },

    "BUYER BEWARE": {
      title: "Blue Topaz Buyer Beware",
      paragraphs: [
        "Do not pay sapphire or aquamarine prices for blue topaz, and be wary of glass or synthetic stones. Ask about treatment and request clear documentation.",

        "A reputable seller should be able to explain the gemstone's treatment status and provide appropriate documentation or certification when available.",

        "Be careful with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value. A professional gemological report can provide useful information about identity and characteristics.",
      ],
    },

    "FAQ'S": {
      title: "Frequently Asked Questions",
      paragraphs: [
        "What is Blue Topaz? Blue topaz is a clear, brilliant blue gemstone available in sky blue, Swiss blue and deep London blue shades.",

        "Is Blue Topaz associated with any planet in astrology? In Indian tradition, Blue Topaz is sometimes offered as an alternative or Upratna to Blue Sapphire in connection with Saturn. This is a matter of belief and tradition and is not universally accepted.",

        "Is Blue Topaz durable? Topaz has a Mohs hardness of 8 but also has perfect cleavage in one direction, so it can chip or split if struck sharply and benefits from a protective setting.",

        "Is blue topaz natural? The topaz is a natural mineral, but most blue topaz is treated to achieve its colour. Natural blue topaz is rare and usually pale.",

        "Is blue topaz safe to wear? Properly processed blue topaz from reputable sources is widely sold for jewellery. Buy from a trusted seller who can document the treatment.",

        "How can I verify Blue Topaz? A reputable gemological laboratory certificate can help identify the gemstone and provide information about characteristics such as whether it is natural or synthetic and whether treatment has been detected.",
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
          BLUE TOPAZ INTRO
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
              Blue Topaz
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
                Looking for a bright, clear blue gemstone at an accessible
                price?
                Discover{" "}
                <span className="font-semibold text-white">
                  Blue Topaz
                </span>{" "}
                today and explore a popular blue gemstone available in many
                shades.
              </p>


              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Blue topaz is a clear, brilliant blue gemstone available in
                sky blue, Swiss blue and deep London blue shades.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — BLUE TOPAZ / 360 BLOCK
          ================================================= */}

          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "380px",
            }}
          >

            {/* Blue Topaz Glow */}

            <div
              className="
                absolute
                rounded-full
                bg-sky-500/10
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


            {/* Blue Topaz Video */}

            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: "560px",
                height: "340px",
              }}
            >
              <video
                src="/videos/gemstones/blue-topaz.mp4"
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
          BLUE TOPAZ SECTION NAVIGATION
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
              Blue Topaz
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