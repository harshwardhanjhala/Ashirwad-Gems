"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function TanzanitePage() {
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
      title: "About Tanzanite",
      paragraphs: [
        "Tanzanite is the blue to violet variety of the mineral zoisite. It is known for strong trichroism, showing blue, violet and sometimes reddish or brownish colours from different directions.",

        "Commercial deposits are known only in the Merelani Hills of Tanzania, near Mount Kilimanjaro, and the gem was introduced to the market in the late 1960s. Its single source is an important part of its appeal.",

        "The appearance and value of Tanzanite depend on several characteristics, including colour, clarity, cut, carat weight, origin, treatment, and overall quality.",
      ],
    },

    BENEFITS: {
      title: "Benefits of Tanzanite",
      paragraphs: [
        "Tanzanite is a modern gemstone and is not part of classical Vedic gemstone texts. Some modern practitioners suggest it for Saturn-related or other purposes, but such uses are not traditional and remain a matter of belief.",

        "Tanzanite has a Mohs hardness of about 6.5 to 7 and perfect cleavage in one direction, so it is more delicate than sapphire and best suited to protective settings.",

        "Astrological and metaphysical effects are matters of traditional belief and personal faith. They should not be considered guaranteed outcomes or substitutes for professional advice.",
      ],
    },

    "WHO SHOULD WEAR": {
      title: "Who Should Wear Tanzanite?",
      paragraphs: [
        "Anyone who appreciates the colour and character of Tanzanite may choose it as fine jewellery.",

        "Where a gemstone is chosen for astrological reasons, traditional practice is to have the individual birth chart examined by a qualified astrologer, since suitability can vary from person to person.",

        "For jewellery purposes, anyone who appreciates the look and character of Tanzanite may choose it without wearing it for astrological reasons.",
      ],
    },

    "HOW TO WEAR": {
      title: "How to Wear Tanzanite",
      paragraphs: [
        "Tanzanite is commonly set in rings, pendants, earrings and bracelets in gold, silver or platinum, depending on the design. A secure setting protects the stone while allowing light to reach it.",

        "For astrological use, traditional practices may specify the metal, finger, day, and method of wearing a gemstone. These recommendations vary with the individual's birth chart and astrological tradition.",

        "If you are purchasing Tanzanite specifically for astrological purposes, it is advisable to follow the guidance of a qualified practitioner rather than relying on a general recommendation.",
      ],
    },

    "QUALITY FACTORS": {
      title: "Tanzanite Quality Factors",
      paragraphs: [
        "Vivid, saturated blue to violet-blue is most valued, and deep blue with violet flashes is especially desirable. Pale or greyish stones are valued less.",

        "Eye-clean stones are the norm for fine tanzanite. Cut quality is important to display colour and manage pleochroism.",

        "Nearly all tanzanite is heat treated to bring out its blue and violet colours, which is accepted in the trade. Size and colour have large effects on price.",
      ],
    },

    "CARE & CLEANING": {
      title: "Tanzanite Care & Cleaning",
      paragraphs: [
        "Avoid hard knocks, sudden temperature changes, and ultrasonic and steam cleaners. Clean with lukewarm soapy water and a soft cloth.",

        "When not being worn, store Tanzanite jewellery separately in a soft pouch to reduce the possibility of scratches or damage to other pieces. Periodic checks of the setting by a jeweller are also advisable.",

        "If the stone has undergone any treatment, follow the specific care recommendations provided by the seller or a gemological professional.",
      ],
    },

    "PRICE GUIDE": {
      title: "Tanzanite Price Guide",
      paragraphs: [
        "Prices depend on colour saturation, size and clarity, and fine large stones are significantly more valuable per carat. Compare stones of similar colour and size.",

        "There is no single fixed price for Tanzanite. When comparing prices, compare stones with similar characteristics, treatment status and certification.",

        "A very low price should be evaluated carefully, particularly when the gemstone is claimed to be natural, untreated, or from a specific origin.",
      ],
    },

    "BUYER BEWARE": {
      title: "Tanzanite Buyer Beware",
      paragraphs: [
        "Blue glass, synthetic stones and other blue-violet gems such as iolite are sometimes sold as tanzanite. Ask for treatment disclosure and, for significant purchases, a laboratory report.",

        "A reputable seller should be able to explain the gemstone's treatment status and provide appropriate documentation or certification when available.",

        "Be careful with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value. A professional gemological report can provide useful information about identity and characteristics.",
      ],
    },

    "FAQ'S": {
      title: "Frequently Asked Questions",
      paragraphs: [
        "What is Tanzanite? Tanzanite is a blue to violet gem with strong colour variation, found in a single locality in Tanzania.",

        "Is Tanzanite associated with any planet in astrology? Tanzanite is a modern gemstone and is not part of classical Vedic gemstone texts. Some modern practitioners suggest it for Saturn-related or other purposes, but such uses are not traditional and remain a matter of belief.",

        "Is Tanzanite durable? Tanzanite has a Mohs hardness of about 6.5 to 7 and perfect cleavage in one direction, so it is more delicate than sapphire and best suited to protective settings.",

        "Is all tanzanite heated? Almost all tanzanite on the market is heat treated to produce its blue and violet colours, which is widely accepted and should be disclosed.",

        "Where does tanzanite come from? Commercial deposits are known only from the Merelani Hills of Tanzania.",

        "How can I verify Tanzanite? A reputable gemological laboratory certificate can help identify the gemstone and provide information about characteristics such as whether it is natural or synthetic and whether treatment has been detected.",
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
          TANZANITE INTRO
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
              Tanzanite
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
                Looking for a rare blue-violet gemstone found in only one
                place?
                Discover{" "}
                <span className="font-semibold text-white">
                  Tanzanite
                </span>{" "}
                today and explore a modern gemstone discovered in the shadow
                of Mount Kilimanjaro.
              </p>


              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Tanzanite is a blue to violet gem with strong colour
                variation, found in a single locality in Tanzania.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — TANZANITE / 360 BLOCK
          ================================================= */}

          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "380px",
            }}
          >

            {/* Tanzanite Glow */}

            <div
              className="
                absolute
                rounded-full
                bg-indigo-500/10
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


            {/* Tanzanite Video */}

            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: "560px",
                height: "340px",
              }}
            >
              <video
                src="/videos/gemstones/tanzanite.mp4"
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
          TANZANITE SECTION NAVIGATION
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
              Tanzanite
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