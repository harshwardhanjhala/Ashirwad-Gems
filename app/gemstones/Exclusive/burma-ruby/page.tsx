"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function BurmaRubyPage() {
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
      title: "About Burma Ruby",
      paragraphs: [
        "Burma Ruby refers to ruby, the red variety of corundum, that originates from Myanmar. Notable deposits include the Mogok Stone Tract and, more recently, Mong Hsu and other localities.",

        "Mogok rubies in particular are admired for a vivid red often enhanced by natural fluorescence, which can give the stone a glowing appearance. Origin cannot be judged by eye and is established by gemological laboratories through analysis of inclusions and trace elements.",

        "The appearance and value of Burma Ruby depend on several characteristics, including colour, clarity, cut, carat weight, origin, treatment, and overall quality.",
      ],
    },

    BENEFITS: {
      title: "Benefits of Burma Ruby",
      paragraphs: [
        "In traditional Vedic astrology, Ruby or Manik is associated with the Sun or Surya. Astrological effects remain matters of tradition and personal faith, not guaranteed outcomes.",

        "Ruby is a variety of corundum with a Mohs hardness of 9, making it highly durable and suitable for everyday jewellery.",

        "Astrological and metaphysical effects are matters of traditional belief and personal faith. They should not be considered guaranteed outcomes or substitutes for professional advice.",
      ],
    },

    "WHO SHOULD WEAR": {
      title: "Who Should Wear Burma Ruby?",
      paragraphs: [
        "Burma Ruby suits collectors and buyers seeking a fine-quality ruby with documented origin. For astrological use, suitability is traditionally judged from the individual birth chart.",

        "Where a gemstone is chosen for astrological reasons, traditional practice is to have the individual birth chart examined by a qualified astrologer, since suitability can vary from person to person.",

        "For jewellery purposes, anyone who appreciates the look and character of Burma Ruby may choose it without wearing it for astrological reasons.",
      ],
    },

    "HOW TO WEAR": {
      title: "How to Wear Burma Ruby",
      paragraphs: [
        "Burma Ruby is commonly set in rings and pendants in gold or platinum. For astrological use, traditional guidance on the metal, finger and day of wearing varies and should come from a qualified practitioner.",

        "For astrological use, traditional practices may specify the metal, finger, day, and method of wearing a gemstone. These recommendations vary with the individual's birth chart and astrological tradition.",

        "If you are purchasing Burma Ruby specifically for astrological purposes, it is advisable to follow the guidance of a qualified practitioner rather than relying on a general recommendation.",
      ],
    },

    "QUALITY FACTORS": {
      title: "Burma Ruby Quality Factors",
      paragraphs: [
        "Colour is the leading factor, with vivid, well-saturated red valued most highly. Stones with a strong, even colour and natural fluorescence are especially desirable.",

        "Natural rubies normally contain inclusions, and fine silk can be a sign of natural origin. Transparency, cut proportions and the absence of damaging fractures strongly affect appearance and value.",

        "A laboratory report confirming Burmese origin and treatment status is central to value. Unheated stones of Burmese origin typically command significant premiums over heated or treated stones.",
      ],
    },

    "CARE & CLEANING": {
      title: "Burma Ruby Care & Cleaning",
      paragraphs: [
        "Ruby is tough and suitable for regular wear. Clean with lukewarm water, mild soap and a soft brush. If the stone has been fracture-filled, avoid ultrasonic cleaning and harsh chemicals.",

        "When not being worn, store Burma Ruby jewellery separately in a soft pouch to reduce the possibility of scratches or damage to other pieces. Periodic checks of the setting by a jeweller are also advisable.",

        "If the stone has undergone any treatment, follow the specific care recommendations provided by the seller or a gemological professional.",
      ],
    },

    "PRICE GUIDE": {
      title: "Burma Ruby Price Guide",
      paragraphs: [
        "Prices depend on colour, clarity, size, treatment and especially origin. Fine unheated Burmese rubies can reach very high prices per carat, particularly above one or two carats.",

        "There is no single fixed price for Burma Ruby. When comparing prices, compare stones with similar characteristics, treatment status and certification.",

        "A very low price should be evaluated carefully, particularly when the gemstone is claimed to be natural, untreated, or from a specific origin.",
      ],
    },

    "BUYER BEWARE": {
      title: "Burma Ruby Buyer Beware",
      paragraphs: [
        "Origin claims are among the most misused in the gem trade. Insist on a report from a recognised laboratory stating origin and treatment, and be wary of low prices attached to Burmese or unheated claims. Also ask about sourcing and documentation, as trade rules and ethical considerations can apply to stones from Myanmar.",

        "A reputable seller should be able to explain the gemstone's treatment status and provide appropriate documentation or certification when available.",

        "Be careful with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value. A professional gemological report can provide useful information about identity and characteristics.",
      ],
    },

    "FAQ'S": {
      title: "Frequently Asked Questions",
      paragraphs: [
        "What is Burma Ruby? Burma Ruby is prized for its saturated red colour, strong natural fluorescence and rarity, and fine examples are among the most sought-after rubies in the world.",

        "Is Burma Ruby associated with any planet in astrology? In traditional Vedic astrology, Ruby or Manik is associated with the Sun or Surya. Astrological effects remain matters of tradition and personal faith, not guaranteed outcomes.",

        "Is Burma Ruby durable? Ruby is a variety of corundum with a Mohs hardness of 9, making it highly durable and suitable for everyday jewellery.",

        "Does Burma Ruby mean the stone is better? Burmese origin is highly valued, but quality still depends on the individual stone. A fine ruby from another origin can outshine a poor-quality stone from Myanmar.",

        "Can origin be verified? Yes. Recognised laboratories can examine inclusions and trace-element chemistry to give an origin opinion, which is normally included in the report.",

        "How can I verify Burma Ruby? A reputable gemological laboratory certificate can help identify the gemstone and provide information about characteristics such as whether it is natural or synthetic and whether treatment has been detected.",
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
          BURMA RUBY INTRO
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
              Burma Ruby
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
                Looking for a ruby with a legendary reputation for vivid red
                colour?
                Discover{" "}
                <span className="font-semibold text-white">
                  Burma Ruby
                </span>{" "}
                today and explore rubies associated with Myanmar, historically
                known as Burma, where the famed Mogok region has produced
                celebrated stones for centuries.
              </p>


              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Burma Ruby is prized for its saturated red colour, strong
                natural fluorescence and rarity, and fine examples are among
                the most sought-after rubies in the world.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — BURMA RUBY / 360 BLOCK
          ================================================= */}

          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "380px",
            }}
          >

            {/* Burma Ruby Glow */}

            <div
              className="
                absolute
                rounded-full
                bg-red-500/10
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


            {/* Burma Ruby Video */}

            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: "560px",
                height: "340px",
              }}
            >
              <video
                src="/videos/gemstones/burma-ruby.mp4"
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
          BURMA RUBY SECTION NAVIGATION
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
              Burma Ruby
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