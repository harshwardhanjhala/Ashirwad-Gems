"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function PadparadschaSapphirePage() {
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
      title: "About Padparadscha Sapphire",
      paragraphs: [
        "Padparadscha is a variety of sapphire with a delicate blend of pink and orange. The name is generally traced to a Sinhalese word for the lotus blossom.",

        "It was first known from Sri Lanka and has also been found in Madagascar, Tanzania and elsewhere. Laboratories define the colour range carefully, and opinions on the boundaries between Padparadscha and pink or orange sapphire can differ.",

        "The appearance and value of Padparadscha Sapphire depend on several characteristics, including colour, clarity, cut, carat weight, origin, treatment, and overall quality.",
      ],
    },

    BENEFITS: {
      title: "Benefits of Padparadscha Sapphire",
      paragraphs: [
        "Padparadscha is not part of the classical Navratna. Because it is a sapphire, some practitioners may relate it to the planets traditionally linked with sapphires, but views vary, and any association is a matter of belief that is best discussed with a qualified astrologer.",

        "Sapphire is a variety of corundum with a Mohs hardness of 9, one of the hardest natural gemstones, and is excellent for rings and everyday wear.",

        "Astrological and metaphysical effects are matters of traditional belief and personal faith. They should not be considered guaranteed outcomes or substitutes for professional advice.",
      ],
    },

    "WHO SHOULD WEAR": {
      title: "Who Should Wear Padparadscha Sapphire?",
      paragraphs: [
        "Anyone who appreciates the colour and character of Padparadscha Sapphire may choose it as fine jewellery.",

        "Where a gemstone is chosen for astrological reasons, traditional practice is to have the individual birth chart examined by a qualified astrologer, since suitability can vary from person to person.",

        "For jewellery purposes, anyone who appreciates the look and character of Padparadscha Sapphire may choose it without wearing it for astrological reasons.",
      ],
    },

    "HOW TO WEAR": {
      title: "How to Wear Padparadscha Sapphire",
      paragraphs: [
        "Padparadscha Sapphire is commonly set in rings, pendants, earrings and bracelets in gold, silver or platinum, depending on the design. A secure setting protects the stone while allowing light to reach it.",

        "For astrological use, traditional practices may specify the metal, finger, day, and method of wearing a gemstone. These recommendations vary with the individual's birth chart and astrological tradition.",

        "If you are purchasing Padparadscha Sapphire specifically for astrological purposes, it is advisable to follow the guidance of a qualified practitioner rather than relying on a general recommendation.",
      ],
    },

    "QUALITY FACTORS": {
      title: "Padparadscha Sapphire Quality Factors",
      paragraphs: [
        "The ideal balance is a pinkish orange to orangey pink in which neither colour dominates, with soft, even saturation. Overly brown or overly pink stones are generally less valued.",

        "Clean, lively stones are rarer, though some inclusions are normal. Cut should preserve colour and maximise brilliance.",

        "Treatment status and origin carry large price effects. Unheated stones with a laboratory report that confirms the Padparadscha name are most valuable. Some pinkish-orange colour can be produced by treatments, including diffusion, which should be disclosed.",
      ],
    },

    "CARE & CLEANING": {
      title: "Padparadscha Sapphire Care & Cleaning",
      paragraphs: [
        "Sapphire is tough and suited to regular wear. Clean with lukewarm water, mild soap and a soft brush, rinse thoroughly and dry with a soft cloth. Stones that are fracture-filled or diffusion-treated need extra care, so follow the seller's guidance.",

        "When not being worn, store Padparadscha Sapphire jewellery separately in a soft pouch to reduce the possibility of scratches or damage to other pieces. Periodic checks of the setting by a jeweller are also advisable.",

        "If the stone has undergone any treatment, follow the specific care recommendations provided by the seller or a gemological professional.",
      ],
    },

    "PRICE GUIDE": {
      title: "Padparadscha Sapphire Price Guide",
      paragraphs: [
        "Fine unheated Padparadscha is among the most valuable sapphires, and prices rise rapidly with size and colour quality. Lower-quality or treated stones may be much more accessible.",

        "There is no single fixed price for Padparadscha Sapphire. When comparing prices, compare stones with similar characteristics, treatment status and certification.",

        "A very low price should be evaluated carefully, particularly when the gemstone is claimed to be natural, untreated, or from a specific origin.",
      ],
    },

    "BUYER BEWARE": {
      title: "Padparadscha Sapphire Buyer Beware",
      paragraphs: [
        "Because the term is applied loosely, request a report from a recognised laboratory that specifically uses the name Padparadscha and states treatment. Be careful of stones whose orange colour is surface-only or produced by diffusion without disclosure.",

        "A reputable seller should be able to explain the gemstone's treatment status and provide appropriate documentation or certification when available.",

        "Be careful with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value. A professional gemological report can provide useful information about identity and characteristics.",
      ],
    },

    "FAQ'S": {
      title: "Frequently Asked Questions",
      paragraphs: [
        "What is Padparadscha Sapphire? Padparadscha is a delicate pinkish-orange to orangey-pink sapphire valued for its rare balance of colours and is among the most collectible sapphires.",

        "Is Padparadscha Sapphire associated with any planet in astrology? Padparadscha is not part of the classical Navratna. Because it is a sapphire, some practitioners may relate it to the planets traditionally linked with sapphires, but views vary, and any association is a matter of belief that is best discussed with a qualified astrologer.",

        "Is Padparadscha Sapphire durable? Sapphire is a variety of corundum with a Mohs hardness of 9, one of the hardest natural gemstones, and is excellent for rings and everyday wear.",

        "What does Padparadscha mean? The name is generally linked to a Sinhalese word for the lotus blossom, describing the stone's pinkish-orange colour.",

        "Do all pinkish-orange sapphires qualify? No. Laboratories apply specific criteria, and only a report using the name confirms that the stone qualifies.",

        "How can I verify Padparadscha Sapphire? A reputable gemological laboratory certificate can help identify the gemstone and provide information about characteristics such as whether it is natural or synthetic and whether treatment has been detected.",
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
          PADPARADSCHA SAPPHIRE INTRO
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
              Padparadscha Sapphire
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
                Looking for a rare sapphire with the colour of a lotus
                blossom?
                Discover{" "}
                <span className="font-semibold text-white">
                  Padparadscha Sapphire
                </span>{" "}
                today and explore one of the most unusual and treasured
                sapphire colours.
              </p>


              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Padparadscha is a delicate pinkish-orange to orangey-pink
                sapphire valued for its rare balance of colours and is among
                the most collectible sapphires.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — PADPARADSCHA SAPPHIRE / 360 BLOCK
          ================================================= */}

          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "380px",
            }}
          >

            {/* Padparadscha Sapphire Glow */}

            <div
              className="
                absolute
                rounded-full
                bg-orange-500/10
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


            {/* Padparadscha Sapphire Video */}

            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: "560px",
                height: "340px",
              }}
            >
              <video
                src="/videos/gemstones/padparadscha-sapphire.mp4"
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
          PADPARADSCHA SAPPHIRE SECTION NAVIGATION
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
              Padparadscha Sapphire
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