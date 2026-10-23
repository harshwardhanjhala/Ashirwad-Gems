"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function PigeonBloodRubyPage() {
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
      title: "About Pigeon Blood Ruby",
      paragraphs: [
        "Pigeon Blood Ruby is not a separate mineral or locality. It is a trade term describing ruby, the red variety of corundum, with a vivid, slightly purplish red colour that is highly saturated.",

        "The term is historically associated with Burmese rubies from Mogok, but laboratories have also used it for stones that meet the colour description from other sources. Because it is a trade term and not a scientific standard, its use should always be backed by a laboratory report.",

        "The appearance and value of Pigeon Blood Ruby depend on several characteristics, including colour, clarity, cut, carat weight, origin, treatment, and overall quality.",
      ],
    },

    BENEFITS: {
      title: "Benefits of Pigeon Blood Ruby",
      paragraphs: [
        "In traditional Vedic astrology, Ruby or Manik is associated with the Sun or Surya. Astrological effects remain matters of tradition and personal faith, not guaranteed outcomes.",

        "Ruby is a variety of corundum with a Mohs hardness of 9, making it highly durable and suitable for everyday jewellery.",

        "Astrological and metaphysical effects are matters of traditional belief and personal faith. They should not be considered guaranteed outcomes or substitutes for professional advice.",
      ],
    },

    "WHO SHOULD WEAR": {
      title: "Who Should Wear Pigeon Blood Ruby?",
      paragraphs: [
        "These stones are chosen mostly by collectors and investors seeking exceptional rubies. For astrological purposes, suitability is generally determined from an individual birth chart.",

        "Where a gemstone is chosen for astrological reasons, traditional practice is to have the individual birth chart examined by a qualified astrologer, since suitability can vary from person to person.",

        "For jewellery purposes, anyone who appreciates the look and character of Pigeon Blood Ruby may choose it without wearing it for astrological reasons.",
      ],
    },

    "HOW TO WEAR": {
      title: "How to Wear Pigeon Blood Ruby",
      paragraphs: [
        "Often set as a solitaire or with white diamonds in gold or platinum, to let the red colour take centre stage. Traditional astrological wearing guidance should come from a qualified practitioner.",

        "For astrological use, traditional practices may specify the metal, finger, day, and method of wearing a gemstone. These recommendations vary with the individual's birth chart and astrological tradition.",

        "If you are purchasing Pigeon Blood Ruby specifically for astrological purposes, it is advisable to follow the guidance of a qualified practitioner rather than relying on a general recommendation.",
      ],
    },

    "QUALITY FACTORS": {
      title: "Pigeon Blood Ruby Quality Factors",
      paragraphs: [
        "The defining feature is colour: a pure, vivid red with a slight hint of blue, neither too dark nor too light, with even distribution. Laboratories use specific wording in reports, so check exactly what the report states.",

        "Lively stones with fine silk and few visible fractures are highly valued. A well-proportioned cut is essential to bring out the glow.",

        "Unheated status, origin and carat weight can multiply value. Always check whether the report mentions heating or fracture filling.",
      ],
    },

    "CARE & CLEANING": {
      title: "Pigeon Blood Ruby Care & Cleaning",
      paragraphs: [
        "Ruby is tough and suitable for regular wear. Clean with lukewarm water, mild soap and a soft brush. If the stone has been fracture-filled, avoid ultrasonic cleaning and harsh chemicals.",

        "When not being worn, store Pigeon Blood Ruby jewellery separately in a soft pouch to reduce the possibility of scratches or damage to other pieces. Periodic checks of the setting by a jeweller are also advisable.",

        "If the stone has undergone any treatment, follow the specific care recommendations provided by the seller or a gemological professional.",
      ],
    },

    "PRICE GUIDE": {
      title: "Pigeon Blood Ruby Price Guide",
      paragraphs: [
        "Pigeon Blood quality rubies sit at the very top of the ruby market, with prices rising sharply with size and unheated status. Smaller or heated stones with similar colour will cost much less.",

        "There is no single fixed price for Pigeon Blood Ruby. When comparing prices, compare stones with similar characteristics, treatment status and certification.",

        "A very low price should be evaluated carefully, particularly when the gemstone is claimed to be natural, untreated, or from a specific origin.",
      ],
    },

    "BUYER BEWARE": {
      title: "Pigeon Blood Ruby Buyer Beware",
      paragraphs: [
        "The phrase Pigeon Blood is often used loosely in sales descriptions. Treat it as a claim that must be supported by a reputable laboratory report, and avoid stones described this way without documentation.",

        "A reputable seller should be able to explain the gemstone's treatment status and provide appropriate documentation or certification when available.",

        "Be careful with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value. A professional gemological report can provide useful information about identity and characteristics.",
      ],
    },

    "FAQ'S": {
      title: "Frequently Asked Questions",
      paragraphs: [
        "What is Pigeon Blood Ruby? Pigeon Blood is a trade term for an intense, pure red with a subtle bluish undertone, usually accompanied by strong fluorescence, and the finest examples are exceptionally rare.",

        "Is Pigeon Blood Ruby associated with any planet in astrology? In traditional Vedic astrology, Ruby or Manik is associated with the Sun or Surya. Astrological effects remain matters of tradition and personal faith, not guaranteed outcomes.",

        "Is Pigeon Blood Ruby durable? Ruby is a variety of corundum with a Mohs hardness of 9, making it highly durable and suitable for everyday jewellery.",

        "Is Pigeon Blood Ruby always from Burma? No. The term describes a colour, and while it is historically linked to Burmese stones, a laboratory report is needed to confirm both colour grade and origin.",

        "Is Pigeon Blood a gemstone variety? No. It is a trade colour description applied to ruby, not a separate gemstone species.",

        "How can I verify Pigeon Blood Ruby? A reputable gemological laboratory certificate can help identify the gemstone and provide information about characteristics such as whether it is natural or synthetic and whether treatment has been detected.",
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
          PIGEON BLOOD RUBY INTRO
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
              Pigeon Blood Ruby
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
                Looking for the most celebrated red in the world of rubies?
                Discover{" "}
                <span className="font-semibold text-white">
                  Pigeon Blood Ruby
                </span>{" "}
                today and discover a colour grade long regarded as the
                benchmark for fine ruby.
              </p>


              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Pigeon Blood is a trade term for an intense, pure red with a
                subtle bluish undertone, usually accompanied by strong
                fluorescence, and the finest examples are exceptionally rare.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — PIGEON BLOOD RUBY / 360 BLOCK
          ================================================= */}

          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "380px",
            }}
          >

            {/* Pigeon Blood Ruby Glow */}

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


            {/* Pigeon Blood Ruby Video */}

            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: "560px",
                height: "340px",
              }}
            >
              <video
                src="/videos/gemstones/pigeon-blood-ruby.mp4"
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
          PIGEON BLOOD RUBY SECTION NAVIGATION
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
              Pigeon Blood Ruby
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