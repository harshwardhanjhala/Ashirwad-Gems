"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function BiColourSapphirePage() {
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
      title: "About Bi-Colour Sapphire",
      paragraphs: [
        "Bi-Colour Sapphire is corundum that shows two clearly separate colour zones within a single crystal. Common combinations include blue with yellow, blue with green, and pink with purple.",

        "These stones are found in sources such as Australia, Thailand and Montana, among others. Cutters orient the stone to show the colour boundary attractively, which makes each one unique.",

        "The appearance and value of Bi-Colour Sapphire depend on several characteristics, including colour, clarity, cut, carat weight, origin, treatment, and overall quality.",
      ],
    },

    BENEFITS: {
      title: "Benefits of Bi-Colour Sapphire",
      paragraphs: [
        "Bi-colour sapphires are not part of classical Navratna recommendations. Any astrological association depends on the colours present and the tradition followed, and should be discussed with a qualified astrologer as a matter of belief.",

        "Sapphire is a variety of corundum with a Mohs hardness of 9, one of the hardest natural gemstones, and is excellent for rings and everyday wear.",

        "Astrological and metaphysical effects are matters of traditional belief and personal faith. They should not be considered guaranteed outcomes or substitutes for professional advice.",
      ],
    },

    "WHO SHOULD WEAR": {
      title: "Who Should Wear Bi-Colour Sapphire?",
      paragraphs: [
        "Anyone who appreciates the colour and character of Bi-Colour Sapphire may choose it as fine jewellery.",

        "Where a gemstone is chosen for astrological reasons, traditional practice is to have the individual birth chart examined by a qualified astrologer, since suitability can vary from person to person.",

        "For jewellery purposes, anyone who appreciates the look and character of Bi-Colour Sapphire may choose it without wearing it for astrological reasons.",
      ],
    },

    "HOW TO WEAR": {
      title: "How to Wear Bi-Colour Sapphire",
      paragraphs: [
        "Bi-Colour Sapphire is commonly set in rings, pendants, earrings and bracelets in gold, silver or platinum, depending on the design. A secure setting protects the stone while allowing light to reach it.",

        "For astrological use, traditional practices may specify the metal, finger, day, and method of wearing a gemstone. These recommendations vary with the individual's birth chart and astrological tradition.",

        "If you are purchasing Bi-Colour Sapphire specifically for astrological purposes, it is advisable to follow the guidance of a qualified practitioner rather than relying on a general recommendation.",
      ],
    },

    "QUALITY FACTORS": {
      title: "Bi-Colour Sapphire Quality Factors",
      paragraphs: [
        "A clean, well-defined division between two attractive and well-saturated colours is most desirable. Balanced proportions of each colour and pleasing contrast add value.",

        "Clarity and cut are judged as for other sapphires. Orientation of the colour boundary and symmetry are key to the stone's appearance.",

        "Heat treatment is widely used on sapphire and accepted in the trade when disclosed. Unheated stones, notable origin and larger carat weight can substantially raise value.",
      ],
    },

    "CARE & CLEANING": {
      title: "Bi-Colour Sapphire Care & Cleaning",
      paragraphs: [
        "Sapphire is tough and suited to regular wear. Clean with lukewarm water, mild soap and a soft brush, rinse thoroughly and dry with a soft cloth. Stones that are fracture-filled or diffusion-treated need extra care, so follow the seller's guidance.",

        "When not being worn, store Bi-Colour Sapphire jewellery separately in a soft pouch to reduce the possibility of scratches or damage to other pieces. Periodic checks of the setting by a jeweller are also advisable.",

        "If the stone has undergone any treatment, follow the specific care recommendations provided by the seller or a gemological professional.",
      ],
    },

    "PRICE GUIDE": {
      title: "Bi-Colour Sapphire Price Guide",
      paragraphs: [
        "Prices vary with the attractiveness and sharpness of the colour split, size and clarity. They are often set by collectors and designers and are less standardised than for single-colour sapphires.",

        "There is no single fixed price for Bi-Colour Sapphire. When comparing prices, compare stones with similar characteristics, treatment status and certification.",

        "A very low price should be evaluated carefully, particularly when the gemstone is claimed to be natural, untreated, or from a specific origin.",
      ],
    },

    "BUYER BEWARE": {
      title: "Bi-Colour Sapphire Buyer Beware",
      paragraphs: [
        "Confirm that both colours are natural. Some stones are treated, composite or synthetic to imitate colour zoning, and a laboratory report helps verify what you are buying.",

        "A reputable seller should be able to explain the gemstone's treatment status and provide appropriate documentation or certification when available.",

        "Be careful with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value. A professional gemological report can provide useful information about identity and characteristics.",
      ],
    },

    "FAQ'S": {
      title: "Frequently Asked Questions",
      paragraphs: [
        "What is Bi-Colour Sapphire? Bi-colour sapphires display two distinct colours, such as blue and yellow or blue and green, in a single stone.",

        "Is Bi-Colour Sapphire associated with any planet in astrology? Bi-colour sapphires are not part of classical Navratna recommendations. Any astrological association depends on the colours present and the tradition followed, and should be discussed with a qualified astrologer as a matter of belief.",

        "Is Bi-Colour Sapphire durable? Sapphire is a variety of corundum with a Mohs hardness of 9, one of the hardest natural gemstones, and is excellent for rings and everyday wear.",

        "Are both colours natural? In natural bi-colour sapphire, both colours occur in the crystal itself. A laboratory report can help confirm natural origin and detect treatment.",

        "Is a bi-colour sapphire as hard as other sapphires? Yes. It is still corundum with a Mohs hardness of 9.",

        "How can I verify Bi-Colour Sapphire? A reputable gemological laboratory certificate can help identify the gemstone and provide information about characteristics such as whether it is natural or synthetic and whether treatment has been detected.",
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
          BI-COLOUR SAPPHIRE INTRO
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
              Bi-Colour Sapphire
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
                Looking for a sapphire that shows two colours in a single
                stone?
                Discover{" "}
                <span className="font-semibold text-white">
                  Bi-Colour Sapphire
                </span>{" "}
                today and explore a distinctive variety that combines
                contrasting tones within one gemstone.
              </p>


              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Bi-colour sapphires display two distinct colours, such as blue
                and yellow or blue and green, in a single stone.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — BI-COLOUR SAPPHIRE / 360 BLOCK
          ================================================= */}

          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "380px",
            }}
          >

            {/* Bi-Colour Sapphire Glow */}

            <div
              className="
                absolute
                rounded-full
                bg-teal-500/10
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


            {/* Bi-Colour Sapphire Video */}

            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: "560px",
                height: "340px",
              }}
            >
              <video
                src="/videos/gemstones/bi-colour-sapphire.mp4"
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
          BI-COLOUR SAPPHIRE SECTION NAVIGATION
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
              Bi-Colour Sapphire
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