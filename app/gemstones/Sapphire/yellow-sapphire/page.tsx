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

  const sectionContent: Record<
    string,
    {
      title: string;
      paragraphs: string[];
    }
  > = {
    ABOUT: {
      title: "About Yellow Sapphire",
      paragraphs: [
        "Yellow Sapphire is the yellow variety of corundum, coloured primarily by iron. Shades range from pale lemon to rich golden yellow, and some stones show orangey tones.",

        "Sources include Sri Lanka, Thailand, Madagascar, Tanzania and Australia, among others. Sri Lankan stones have long been popular in the Indian gemstone tradition.",

        "The appearance and value of Yellow Sapphire depend on several characteristics, including colour, clarity, cut, carat weight, origin, treatment, and overall quality.",
      ],
    },

    BENEFITS: {
      title: "Benefits of Yellow Sapphire",
      paragraphs: [
        "In traditional Vedic astrology, Yellow Sapphire or Pukhraj is associated with Jupiter or Guru and is traditionally linked with wisdom, learning and prosperity. These are matters of belief and tradition, not guaranteed outcomes.",

        "Sapphire is a variety of corundum with a Mohs hardness of 9, one of the hardest natural gemstones, and is excellent for rings and everyday wear.",

        "Astrological and metaphysical effects are matters of traditional belief and personal faith. They should not be considered guaranteed outcomes or substitutes for professional advice.",
      ],
    },

    "WHO SHOULD WEAR": {
      title: "Who Should Wear Yellow Sapphire?",
      paragraphs: [
        "Whether to wear it for astrological reasons is traditionally determined from the individual birth chart. It is also admired as fine jewellery for its warm colour.",

        "Where a gemstone is chosen for astrological reasons, traditional practice is to have the individual birth chart examined by a qualified astrologer, since suitability can vary from person to person.",

        "For jewellery purposes, anyone who appreciates the look and character of Yellow Sapphire may choose it without wearing it for astrological reasons.",
      ],
    },

    "HOW TO WEAR": {
      title: "How to Wear Yellow Sapphire",
      paragraphs: [
        "Yellow Sapphire is commonly set in rings, pendants, earrings and bracelets in gold, silver or platinum, depending on the design. A secure setting protects the stone while allowing light to reach it.",

        "For astrological use, traditional practices may specify the metal, finger, day, and method of wearing a gemstone. These recommendations vary with the individual's birth chart and astrological tradition.",

        "If you are purchasing Yellow Sapphire specifically for astrological purposes, it is advisable to follow the guidance of a qualified practitioner rather than relying on a general recommendation.",
      ],
    },

    "QUALITY FACTORS": {
      title: "Yellow Sapphire Quality Factors",
      paragraphs: [
        "A rich, evenly saturated golden to canary yellow is generally most valued. Stones that are too pale or have strong brown or green tones are usually less desirable.",

        "Natural sapphire commonly contains some inclusions, and eye-clean stones are more valuable. A well-proportioned cut that returns light evenly is important for brilliance.",

        "Heat treatment is widespread, and some yellow sapphires have been treated by diffusion or irradiation. Disclosure matters, and unheated stones are valued higher.",
      ],
    },

    "CARE & CLEANING": {
      title: "Yellow Sapphire Care & Cleaning",
      paragraphs: [
        "Sapphire is tough and suited to regular wear. Clean with lukewarm water, mild soap and a soft brush, rinse thoroughly and dry with a soft cloth. Stones that are fracture-filled or diffusion-treated need extra care, so follow the seller's guidance.",

        "When not being worn, store Yellow Sapphire jewellery separately in a soft pouch to reduce the possibility of scratches or damage to other pieces. Periodic checks of the setting by a jeweller are also advisable.",

        "If the stone has undergone any treatment, follow the specific care recommendations provided by the seller or a gemological professional.",
      ],
    },

    "PRICE GUIDE": {
      title: "Yellow Sapphire Price Guide",
      paragraphs: [
        "Prices depend on colour, clarity, size, origin and treatment. Fine, unheated stones with a laboratory report are valued most, while pale or treated stones are more accessible.",

        "There is no single fixed price for Yellow Sapphire. When comparing prices, compare stones with similar characteristics, treatment status and certification.",

        "A very low price should be evaluated carefully, particularly when the gemstone is claimed to be natural, untreated, or from a specific origin.",
      ],
    },

    "BUYER BEWARE": {
      title: "Yellow Sapphire Buyer Beware",
      paragraphs: [
        "Yellow sapphire is often imitated with citrine, yellow topaz, glass and synthetic stones. Ask for treatment disclosure and a laboratory report, and be wary of guaranteed astrological claims.",

        "A reputable seller should be able to explain the gemstone's treatment status and provide appropriate documentation or certification when available.",

        "Be careful with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value. A professional gemological report can provide useful information about identity and characteristics.",
      ],
    },

    "FAQ'S": {
      title: "Frequently Asked Questions",
      paragraphs: [
        "What is Yellow Sapphire? Yellow Sapphire, known as Pukhraj, is a durable corundum valued for its warm golden colour and its traditional association with Jupiter or Guru.",

        "Is Yellow Sapphire associated with any planet in astrology? In traditional Vedic astrology, Yellow Sapphire or Pukhraj is associated with Jupiter or Guru and is traditionally linked with wisdom, learning and prosperity. These are matters of belief and tradition, not guaranteed outcomes.",

        "Is Yellow Sapphire durable? Sapphire is a variety of corundum with a Mohs hardness of 9, one of the hardest natural gemstones, and is excellent for rings and everyday wear.",

        "Is Yellow Sapphire the same as Citrine or Yellow Topaz? No. They are different gemstones with different hardness and value. Yellow sapphire is corundum, which is much harder than citrine or topaz.",

        "What is Pukhraj? Pukhraj is the Indian name for yellow sapphire.",

        "How can I verify Yellow Sapphire? A reputable gemological laboratory certificate can help identify the gemstone and provide information about characteristics such as whether it is natural or synthetic and whether treatment has been detected.",
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
          YELLOW SAPPHIRE INTRO
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
              Yellow Sapphire (Pukhraj)
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
                Looking for a golden gemstone with a long tradition in Indian
                astrology?
                Discover{" "}
                <span className="font-semibold text-white">
                  Yellow Sapphire
                </span>{" "}
                today and explore Pukhraj, a sapphire admired for its warm
                yellow colour.
              </p>


              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Yellow Sapphire, known as Pukhraj, is a durable corundum
                valued for its warm golden colour and its traditional
                association with Jupiter or Guru.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — YELLOW SAPPHIRE / 360 BLOCK
          ================================================= */}

          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "380px",
            }}
          >

            {/* Yellow Sapphire Glow */}

            <div
              className="
                absolute
                rounded-full
                bg-yellow-500/10
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


            {/* Yellow Sapphire Video */}

            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: "560px",
                height: "340px",
              }}
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


      {/* =====================================================
          YELLOW SAPPHIRE SECTION NAVIGATION
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
              Yellow Sapphire
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