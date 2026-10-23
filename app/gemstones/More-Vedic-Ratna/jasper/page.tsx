"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function JasperPage() {
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
      title: "About Jasper",
      paragraphs: [
        "Jasper is an opaque, microcrystalline variety of quartz coloured by mineral impurities. Colours include red, brown, yellow, green and blue, and patterns include bands, spots and landscape-like scenes.",

        "Well-known types include red jasper, picture jasper, ocean jasper, leopard-skin jasper and bloodstone. It has been used for beads, seals and carvings since ancient times and is found worldwide.",

        "The appearance and value of Jasper depend on several characteristics, including colour, clarity, cut, carat weight, origin, treatment, and overall quality.",
      ],
    },

    BENEFITS: {
      title: "Benefits of Jasper",
      paragraphs: [
        "Jasper is not part of the classical Navratna. Some practitioners associate red jasper with Mars or Mangal, but traditions vary and any association is a matter of belief.",

        "Jasper has a Mohs hardness of about 6.5 to 7 and is tough, making it durable for cabochons, beads and carvings.",

        "Astrological and metaphysical effects are matters of traditional belief and personal faith. They should not be considered guaranteed outcomes or substitutes for professional advice.",
      ],
    },

    "WHO SHOULD WEAR": {
      title: "Who Should Wear Jasper?",
      paragraphs: [
        "Anyone who appreciates the colour and character of Jasper may choose it as fine jewellery.",

        "Where a gemstone is chosen for astrological reasons, traditional practice is to have the individual birth chart examined by a qualified astrologer, since suitability can vary from person to person.",

        "For jewellery purposes, anyone who appreciates the look and character of Jasper may choose it without wearing it for astrological reasons.",
      ],
    },

    "HOW TO WEAR": {
      title: "How to Wear Jasper",
      paragraphs: [
        "Jasper is commonly set in rings, pendants, earrings and bracelets in gold, silver or platinum, depending on the design. A secure setting protects the stone while allowing light to reach it.",

        "For astrological use, traditional practices may specify the metal, finger, day, and method of wearing a gemstone. These recommendations vary with the individual's birth chart and astrological tradition.",

        "If you are purchasing Jasper specifically for astrological purposes, it is advisable to follow the guidance of a qualified practitioner rather than relying on a general recommendation.",
      ],
    },

    "QUALITY FACTORS": {
      title: "Jasper Quality Factors",
      paragraphs: [
        "Appealing colour, pattern and polish are the key factors. Because each stone is unique, buyers usually choose by the beauty of the pattern.",

        "Jasper is opaque, so clarity in the usual sense does not apply. Look for an even, high polish and a well-proportioned cut, and avoid cracks.",

        "Origin, rarity of pattern and type influence price. Some jasper is dyed or stabilised, and this should be disclosed.",
      ],
    },

    "CARE & CLEANING": {
      title: "Jasper Care & Cleaning",
      paragraphs: [
        "Clean with a soft damp cloth and mild soap, and avoid harsh chemicals. Store apart from harder stones to avoid scratching.",

        "When not being worn, store Jasper jewellery separately in a soft pouch to reduce the possibility of scratches or damage to other pieces. Periodic checks of the setting by a jeweller are also advisable.",

        "If the stone has undergone any treatment, follow the specific care recommendations provided by the seller or a gemological professional.",
      ],
    },

    "PRICE GUIDE": {
      title: "Jasper Price Guide",
      paragraphs: [
        "Jasper is generally an affordable stone, with fine pattern pieces or rare types commanding higher prices.",

        "There is no single fixed price for Jasper. When comparing prices, compare stones with similar characteristics, treatment status and certification.",

        "A very low price should be evaluated carefully, particularly when the gemstone is claimed to be natural, untreated, or from a specific origin.",
      ],
    },

    "BUYER BEWARE": {
      title: "Jasper Buyer Beware",
      paragraphs: [
        "Dyed jasper and imitations are sold as natural stones, and exotic names may be used loosely. Ask what the stone is and whether it has been dyed or treated.",

        "A reputable seller should be able to explain the gemstone's treatment status and provide appropriate documentation or certification when available.",

        "Be careful with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value. A professional gemological report can provide useful information about identity and characteristics.",
      ],
    },

    "FAQ'S": {
      title: "Frequently Asked Questions",
      paragraphs: [
        "What is Jasper? Jasper is an opaque microcrystalline quartz known for rich earthy colours and one-of-a-kind patterns.",

        "Is Jasper associated with any planet in astrology? Jasper is not part of the classical Navratna. Some practitioners associate red jasper with Mars or Mangal, but traditions vary and any association is a matter of belief.",

        "Is Jasper durable? Jasper has a Mohs hardness of about 6.5 to 7 and is tough, making it durable for cabochons, beads and carvings.",

        "Is jasper the same as agate? They are related varieties of microcrystalline quartz, but jasper is opaque while agate is usually translucent with banding.",

        "Is jasper dyed? Some jasper is dyed to deepen or change colour. Ask the seller whether the stone is natural colour.",

        "How can I verify Jasper? A reputable gemological laboratory certificate can help identify the gemstone and provide information about characteristics such as whether it is natural or synthetic and whether treatment has been detected.",
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
          JASPER INTRO
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
              Jasper
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
                Looking for an opaque stone with earthy colours and natural
                patterns?
                Discover{" "}
                <span className="font-semibold text-white">
                  Jasper
                </span>{" "}
                today and explore a distinctive stone valued for its pattern
                and natural character.
              </p>


              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Jasper is an opaque microcrystalline quartz known for rich
                earthy colours and one-of-a-kind patterns.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — JASPER / 360 BLOCK
          ================================================= */}

          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "380px",
            }}
          >

            {/* Jasper Glow */}

            <div
              className="
                absolute
                rounded-full
                bg-amber-500/10
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


            {/* Jasper Video */}

            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: "560px",
                height: "340px",
              }}
            >
              <video
                src="/videos/gemstones/jasper.mp4"
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
          JASPER SECTION NAVIGATION
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
              Jasper
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