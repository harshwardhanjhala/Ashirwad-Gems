"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function RoyalBlueSapphirePage() {
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
      title: "About Royal Blue Sapphire",
      paragraphs: [
        "Royal Blue Sapphire is blue sapphire with a rich, intense, medium-dark blue colour that may carry a subtle violet undertone. The term is a trade description and not a formal scientific grade.",

        "Stones in this colour come from sources such as Sri Lanka, Myanmar and Madagascar, among others, and the same colour description may be used for stones of very different quality.",

        "The appearance and value of Royal Blue Sapphire depend on several characteristics, including colour, clarity, cut, carat weight, origin, treatment, and overall quality.",
      ],
    },

    BENEFITS: {
      title: "Benefits of Royal Blue Sapphire",
      paragraphs: [
        "In traditional Vedic astrology, Blue Sapphire or Neelam is associated with Saturn or Shani. Traditional guidance often advises consulting a qualified astrologer before wearing it. These associations are matters of belief and tradition, not guaranteed outcomes.",

        "Sapphire is a variety of corundum with a Mohs hardness of 9, one of the hardest natural gemstones, and is excellent for rings and everyday wear.",

        "Astrological and metaphysical effects are matters of traditional belief and personal faith. They should not be considered guaranteed outcomes or substitutes for professional advice.",
      ],
    },

    "WHO SHOULD WEAR": {
      title: "Who Should Wear Royal Blue Sapphire?",
      paragraphs: [
        "Anyone who appreciates the colour and character of Royal Blue Sapphire may choose it as fine jewellery.",

        "Where a gemstone is chosen for astrological reasons, traditional practice is to have the individual birth chart examined by a qualified astrologer, since suitability can vary from person to person.",

        "For jewellery purposes, anyone who appreciates the look and character of Royal Blue Sapphire may choose it without wearing it for astrological reasons.",
      ],
    },

    "HOW TO WEAR": {
      title: "How to Wear Royal Blue Sapphire",
      paragraphs: [
        "Royal Blue Sapphire is commonly set in rings, pendants, earrings and bracelets in gold, silver or platinum, depending on the design. A secure setting protects the stone while allowing light to reach it.",

        "For astrological use, traditional practices may specify the metal, finger, day, and method of wearing a gemstone. These recommendations vary with the individual's birth chart and astrological tradition.",

        "If you are purchasing Royal Blue Sapphire specifically for astrological purposes, it is advisable to follow the guidance of a qualified practitioner rather than relying on a general recommendation.",
      ],
    },

    "QUALITY FACTORS": {
      title: "Royal Blue Sapphire Quality Factors",
      paragraphs: [
        "Look for a strongly saturated, vivid blue that remains bright and does not turn inky or too dark. Even colour distribution and good light return are important.",

        "Natural sapphire commonly contains some inclusions, and eye-clean stones are more valuable. A well-proportioned cut that returns light evenly is important for brilliance.",

        "Heat treatment is widely used on sapphire and accepted in the trade when disclosed. Unheated stones, notable origin and larger carat weight can substantially raise value.",
      ],
    },

    "CARE & CLEANING": {
      title: "Royal Blue Sapphire Care & Cleaning",
      paragraphs: [
        "Sapphire is tough and suited to regular wear. Clean with lukewarm water, mild soap and a soft brush, rinse thoroughly and dry with a soft cloth. Stones that are fracture-filled or diffusion-treated need extra care, so follow the seller's guidance.",

        "When not being worn, store Royal Blue Sapphire jewellery separately in a soft pouch to reduce the possibility of scratches or damage to other pieces. Periodic checks of the setting by a jeweller are also advisable.",

        "If the stone has undergone any treatment, follow the specific care recommendations provided by the seller or a gemological professional.",
      ],
    },

    "PRICE GUIDE": {
      title: "Royal Blue Sapphire Price Guide",
      paragraphs: [
        "Prices depend on colour, clarity, size, origin and treatment. Fine Royal Blue stones, especially unheated ones with a laboratory report, are valued considerably above commercial-quality stones.",

        "There is no single fixed price for Royal Blue Sapphire. When comparing prices, compare stones with similar characteristics, treatment status and certification.",

        "A very low price should be evaluated carefully, particularly when the gemstone is claimed to be natural, untreated, or from a specific origin.",
      ],
    },

    "BUYER BEWARE": {
      title: "Royal Blue Sapphire Buyer Beware",
      paragraphs: [
        "Because Royal Blue is a descriptive term, ask for a laboratory report confirming that the stone is natural sapphire and stating any treatment. Be cautious of glass-filled or diffusion-treated stones sold without disclosure.",

        "A reputable seller should be able to explain the gemstone's treatment status and provide appropriate documentation or certification when available.",

        "Be careful with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value. A professional gemological report can provide useful information about identity and characteristics.",
      ],
    },

    "FAQ'S": {
      title: "Frequently Asked Questions",
      paragraphs: [
        "What is Royal Blue Sapphire? Royal Blue describes a deep, strongly saturated blue, often with a hint of violet, and is among the most popular colours in fine blue sapphire.",

        "Is Royal Blue Sapphire associated with any planet in astrology? In traditional Vedic astrology, Blue Sapphire or Neelam is associated with Saturn or Shani. Traditional guidance often advises consulting a qualified astrologer before wearing it. These associations are matters of belief and tradition, not guaranteed outcomes.",

        "Is Royal Blue Sapphire durable? Sapphire is a variety of corundum with a Mohs hardness of 9, one of the hardest natural gemstones, and is excellent for rings and everyday wear.",

        "Is Royal Blue a grade? No. It is a descriptive trade term, and quality should be judged through the stone's actual colour, clarity, cut and the laboratory report.",

        "Is heating normal for blue sapphire? Yes. Heat treatment is widely used on sapphire. It should be disclosed, and unheated stones usually command a premium.",

        "How can I verify Royal Blue Sapphire? A reputable gemological laboratory certificate can help identify the gemstone and provide information about characteristics such as whether it is natural or synthetic and whether treatment has been detected.",
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
          ROYAL BLUE SAPPHIRE INTRO
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
              Royal Blue Sapphire (Neelam)
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
                Looking for a sapphire with deep, regal blue colour?
                Discover{" "}
                <span className="font-semibold text-white">
                  Royal Blue Sapphire
                </span>{" "}
                today and explore a rich blue much admired in fine sapphire
                jewellery.
              </p>


              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Royal Blue describes a deep, strongly saturated blue, often
                with a hint of violet, and is among the most popular colours
                in fine blue sapphire.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — ROYAL BLUE SAPPHIRE / 360 BLOCK
          ================================================= */}

          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "380px",
            }}
          >

            {/* Royal Blue Sapphire Glow */}

            <div
              className="
                absolute
                rounded-full
                bg-blue-500/10
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


            {/* Royal Blue Sapphire Video */}

            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: "560px",
                height: "340px",
              }}
            >
              <video
                src="/videos/gemstones/royal-blue-sapphire.mp4"
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
          ROYAL BLUE SAPPHIRE SECTION NAVIGATION
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
              Royal Blue Sapphire
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