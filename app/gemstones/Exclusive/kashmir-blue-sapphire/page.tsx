"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function KashmirBlueSapphirePage() {
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
      title: "About Kashmir Blue Sapphire",
      paragraphs: [
        "Kashmir Blue Sapphire is blue sapphire from the Padar region of the Himalaya in Kashmir, where deposits were discovered in the 1880s and worked for a limited period.",

        "Its famed velvety quality is attributed to microscopic inclusions that scatter light and create a soft, glowing appearance. Because the deposit has been largely inactive for many years, genuine stones are very scarce and are traded mainly in the collector and auction market.",

        "The appearance and value of Kashmir Blue Sapphire depend on several characteristics, including colour, clarity, cut, carat weight, origin, treatment, and overall quality.",
      ],
    },

    BENEFITS: {
      title: "Benefits of Kashmir Blue Sapphire",
      paragraphs: [
        "In traditional Vedic astrology, Blue Sapphire or Neelam is associated with Saturn or Shani. Traditional guidance often advises consulting a qualified astrologer before wearing it. These associations are matters of belief and tradition, not guaranteed outcomes.",

        "Sapphire is a variety of corundum with a Mohs hardness of 9, one of the hardest natural gemstones, and is excellent for rings and everyday wear.",

        "Astrological and metaphysical effects are matters of traditional belief and personal faith. They should not be considered guaranteed outcomes or substitutes for professional advice.",
      ],
    },

    "WHO SHOULD WEAR": {
      title: "Who Should Wear Kashmir Blue Sapphire?",
      paragraphs: [
        "Anyone who appreciates the colour and character of Kashmir Blue Sapphire may choose it as fine jewellery.",

        "Where a gemstone is chosen for astrological reasons, traditional practice is to have the individual birth chart examined by a qualified astrologer, since suitability can vary from person to person.",

        "For jewellery purposes, anyone who appreciates the look and character of Kashmir Blue Sapphire may choose it without wearing it for astrological reasons.",
      ],
    },

    "HOW TO WEAR": {
      title: "How to Wear Kashmir Blue Sapphire",
      paragraphs: [
        "Kashmir Blue Sapphire is commonly set in rings, pendants, earrings and bracelets in gold, silver or platinum, depending on the design. A secure setting protects the stone while allowing light to reach it.",

        "For astrological use, traditional practices may specify the metal, finger, day, and method of wearing a gemstone. These recommendations vary with the individual's birth chart and astrological tradition.",

        "If you are purchasing Kashmir Blue Sapphire specifically for astrological purposes, it is advisable to follow the guidance of a qualified practitioner rather than relying on a general recommendation.",
      ],
    },

    "QUALITY FACTORS": {
      title: "Kashmir Blue Sapphire Quality Factors",
      paragraphs: [
        "The ideal colour is a rich cornflower blue with a velvety, even appearance. Saturation and glow matter more than depth of tone.",

        "Fine silk and soft, hazy zoning are characteristic and not necessarily negative, but stones should still show good transparency and an attractive cut.",

        "Origin is everything. Only a recognised laboratory can determine Kashmir origin, and the report should also state whether the stone has been heated.",
      ],
    },

    "CARE & CLEANING": {
      title: "Kashmir Blue Sapphire Care & Cleaning",
      paragraphs: [
        "Sapphire is tough and suited to regular wear. Clean with lukewarm water, mild soap and a soft brush, rinse thoroughly and dry with a soft cloth. Stones that are fracture-filled or diffusion-treated need extra care, so follow the seller's guidance.",

        "When not being worn, store Kashmir Blue Sapphire jewellery separately in a soft pouch to reduce the possibility of scratches or damage to other pieces. Periodic checks of the setting by a jeweller are also advisable.",

        "If the stone has undergone any treatment, follow the specific care recommendations provided by the seller or a gemological professional.",
      ],
    },

    "PRICE GUIDE": {
      title: "Kashmir Blue Sapphire Price Guide",
      paragraphs: [
        "Genuine Kashmir sapphires are among the most expensive sapphires in the world, with large, unheated, fine-colour stones achieving exceptional prices. Values vary greatly with colour, size, treatment and documentation.",

        "There is no single fixed price for Kashmir Blue Sapphire. When comparing prices, compare stones with similar characteristics, treatment status and certification.",

        "A very low price should be evaluated carefully, particularly when the gemstone is claimed to be natural, untreated, or from a specific origin.",
      ],
    },

    "BUYER BEWARE": {
      title: "Kashmir Blue Sapphire Buyer Beware",
      paragraphs: [
        "Kashmir is one of the most misused origin names in the trade. Never rely on colour or a seller's word alone, and require a report from a recognised laboratory, such as GRS, Gubelin or SSEF, stating Kashmir origin.",

        "A reputable seller should be able to explain the gemstone's treatment status and provide appropriate documentation or certification when available.",

        "Be careful with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value. A professional gemological report can provide useful information about identity and characteristics.",
      ],
    },

    "FAQ'S": {
      title: "Frequently Asked Questions",
      paragraphs: [
        "What is Kashmir Blue Sapphire? Kashmir sapphires are celebrated for a velvety, luminous cornflower blue and extreme rarity, and are among the most collectible gemstones in the world.",

        "Is Kashmir Blue Sapphire associated with any planet in astrology? In traditional Vedic astrology, Blue Sapphire or Neelam is associated with Saturn or Shani. Traditional guidance often advises consulting a qualified astrologer before wearing it. These associations are matters of belief and tradition, not guaranteed outcomes.",

        "Is Kashmir Blue Sapphire durable? Sapphire is a variety of corundum with a Mohs hardness of 9, one of the hardest natural gemstones, and is excellent for rings and everyday wear.",

        "Why are Kashmir sapphires so valuable? The combination of velvety colour, historic rarity and very limited production makes genuine stones highly sought after by collectors.",

        "Can I identify a Kashmir sapphire by its colour? No. Similar colour can occur in stones from other sources, so origin should be confirmed by a gemological laboratory.",

        "How can I verify Kashmir Blue Sapphire? A reputable gemological laboratory certificate can help identify the gemstone and provide information about characteristics such as whether it is natural or synthetic and whether treatment has been detected.",
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
          KASHMIR BLUE SAPPHIRE INTRO
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
              Kashmir Blue Sapphire (Neelam)
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
                Looking for the most legendary name in blue sapphire?
                Discover{" "}
                <span className="font-semibold text-white">
                  Kashmir Blue Sapphire
                </span>{" "}
                today and explore sapphires associated with the Kashmir region
                of the Himalaya, long regarded as a pinnacle of blue sapphire.
              </p>


              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Kashmir sapphires are celebrated for a velvety, luminous
                cornflower blue and extreme rarity, and are among the most
                collectible gemstones in the world.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — KASHMIR BLUE SAPPHIRE / 360 BLOCK
          ================================================= */}

          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "380px",
            }}
          >

            {/* Kashmir Blue Sapphire Glow */}

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


            {/* Kashmir Blue Sapphire Video */}

            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: "560px",
                height: "340px",
              }}
            >
              <video
                src="/videos/gemstones/kashmir-blue-sapphire.mp4"
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
          KASHMIR BLUE SAPPHIRE SECTION NAVIGATION
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
              Kashmir Blue Sapphire
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