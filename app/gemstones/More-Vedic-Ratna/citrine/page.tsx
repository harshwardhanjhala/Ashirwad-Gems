"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function CitrinePage() {
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
      title: "About Citrine",
      paragraphs: [
        "Citrine is the yellow to orange-brown variety of quartz, with colour caused by traces of iron. Its name is derived from the French or Latin word for lemon.",

        "Natural citrine is relatively uncommon, and a large share of citrine in the market is produced by heating amethyst or smoky quartz. Sources include Brazil, Bolivia and Madagascar, among others.",

        "The appearance and value of Citrine depend on several characteristics, including colour, clarity, cut, carat weight, origin, treatment, and overall quality.",
      ],
    },

    BENEFITS: {
      title: "Benefits of Citrine",
      paragraphs: [
        "In Indian tradition, Citrine or Sunela is regarded as an Upratna and is often offered as an alternative to Yellow Sapphire in connection with Jupiter or Guru. This is a matter of tradition and belief.",

        "Citrine has a Mohs hardness of 7 and is suitable for everyday jewellery with reasonable care.",

        "Astrological and metaphysical effects are matters of traditional belief and personal faith. They should not be considered guaranteed outcomes or substitutes for professional advice.",
      ],
    },

    "WHO SHOULD WEAR": {
      title: "Who Should Wear Citrine?",
      paragraphs: [
        "Anyone who appreciates the colour and character of Citrine may choose it as fine jewellery.",

        "Where a gemstone is chosen for astrological reasons, traditional practice is to have the individual birth chart examined by a qualified astrologer, since suitability can vary from person to person.",

        "For jewellery purposes, anyone who appreciates the look and character of Citrine may choose it without wearing it for astrological reasons.",
      ],
    },

    "HOW TO WEAR": {
      title: "How to Wear Citrine",
      paragraphs: [
        "Citrine is commonly set in rings, pendants, earrings and bracelets in gold, silver or platinum, depending on the design. A secure setting protects the stone while allowing light to reach it.",

        "For astrological use, traditional practices may specify the metal, finger, day, and method of wearing a gemstone. These recommendations vary with the individual's birth chart and astrological tradition.",

        "If you are purchasing Citrine specifically for astrological purposes, it is advisable to follow the guidance of a qualified practitioner rather than relying on a general recommendation.",
      ],
    },

    "QUALITY FACTORS": {
      title: "Citrine Quality Factors",
      paragraphs: [
        "Rich, evenly saturated golden to amber colours are most valued, while pale lemon stones are usually less expensive. The colour should look natural and even.",

        "Citrine is normally clean, and visible inclusions reduce value. The cut should show even colour and sparkle.",

        "Whether the stone is natural or heat treated affects value and should be disclosed. Size and colour intensity also affect price.",
      ],
    },

    "CARE & CLEANING": {
      title: "Citrine Care & Cleaning",
      paragraphs: [
        "Clean with lukewarm soapy water and a soft brush, and avoid prolonged strong heat and harsh chemicals.",

        "When not being worn, store Citrine jewellery separately in a soft pouch to reduce the possibility of scratches or damage to other pieces. Periodic checks of the setting by a jeweller are also advisable.",

        "If the stone has undergone any treatment, follow the specific care recommendations provided by the seller or a gemological professional.",
      ],
    },

    "PRICE GUIDE": {
      title: "Citrine Price Guide",
      paragraphs: [
        "Citrine is generally affordable, with prices varying by colour, size and whether the stone is natural or heated.",

        "There is no single fixed price for Citrine. When comparing prices, compare stones with similar characteristics, treatment status and certification.",

        "A very low price should be evaluated carefully, particularly when the gemstone is claimed to be natural, untreated, or from a specific origin.",
      ],
    },

    "BUYER BEWARE": {
      title: "Citrine Buyer Beware",
      paragraphs: [
        "Citrine is often confused with or substituted for yellow sapphire and topaz, and glass or dyed quartz is sold as citrine. Confirm identity and treatment, and do not accept citrine at yellow sapphire prices.",

        "A reputable seller should be able to explain the gemstone's treatment status and provide appropriate documentation or certification when available.",

        "Be careful with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value. A professional gemological report can provide useful information about identity and characteristics.",
      ],
    },

    "FAQ'S": {
      title: "Frequently Asked Questions",
      paragraphs: [
        "What is Citrine? Citrine is the yellow to orange-brown variety of quartz, valued for its warm colour, clarity and versatility.",

        "Is Citrine associated with any planet in astrology? In Indian tradition, Citrine or Sunela is regarded as an Upratna and is often offered as an alternative to Yellow Sapphire in connection with Jupiter or Guru. This is a matter of tradition and belief.",

        "Is Citrine durable? Citrine has a Mohs hardness of 7 and is suitable for everyday jewellery with reasonable care.",

        "Is citrine a substitute for Yellow Sapphire? In some traditions it is offered as an alternative, but it is a different gemstone with lower hardness and price. Views on substitutes vary.",

        "Is most citrine heat treated? A large share of citrine on the market is made by heating amethyst or smoky quartz. Ask the seller whether the stone is natural or heat treated.",

        "How can I verify Citrine? A reputable gemological laboratory certificate can help identify the gemstone and provide information about characteristics such as whether it is natural or synthetic and whether treatment has been detected.",
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
          CITRINE INTRO
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
              Citrine (Sunela)
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
                Looking for a warm, sunny gemstone in golden yellow to orange?
                Discover{" "}
                <span className="font-semibold text-white">
                  Citrine
                </span>{" "}
                today and explore a bright and affordable quartz gemstone.
              </p>


              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Citrine is the yellow to orange-brown variety of quartz,
                valued for its warm colour, clarity and versatility.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — CITRINE / 360 BLOCK
          ================================================= */}

          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "380px",
            }}
          >

            {/* Citrine Glow */}

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


            {/* Citrine Video */}

            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: "560px",
                height: "340px",
              }}
            >
              <video
                src="/videos/gemstones/citrine.mp4"
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
          CITRINE SECTION NAVIGATION
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
              Citrine
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