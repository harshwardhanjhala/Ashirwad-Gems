"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function BlueSapphirePage() {
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
      title: "About Blue Sapphire",
      paragraphs: [
        "Blue Sapphire, traditionally known as Neelam, is a blue variety of the mineral corundum. It is admired for its deep blue colour, durability, brilliance, and distinctive appearance.",
        "In Indian astrology, Blue Sapphire is traditionally associated with Shani or Saturn and is considered an important astrological gemstone. Apart from its astrological significance, it is also widely appreciated as a premium gemstone for jewellery.",
        "The beauty of a Blue Sapphire depends on several factors including its colour, clarity, cut, carat weight, origin, and treatment. A well-cut sapphire with an attractive blue colour can have exceptional visual appeal.",
      ],
    },

    BENEFITS: {
      title: "Benefits of Blue Sapphire",
      paragraphs: [
        "Blue Sapphire has a strong place in traditional Indian gemstone and astrological practices. It is traditionally associated with Saturn and is believed by practitioners to represent discipline, responsibility, stability, and focus.",
        "Many people choose Blue Sapphire because of its traditional astrological significance as well as its rich blue appearance. It is also valued for its durability, making it suitable for jewellery that can be worn regularly.",
        "Astrological effects are matters of traditional belief and personal faith. They should not be considered guaranteed outcomes or substitutes for professional advice.",
      ],
    },

    "WHO SHOULD WEAR": {
      title: "Who Should Wear Blue Sapphire?",
      paragraphs: [
        "Traditionally, Blue Sapphire is associated with the planet Saturn or Shani. In Vedic astrology, whether a person should wear Neelam is generally determined by examining their individual birth chart.",
        "People interested in wearing Blue Sapphire for astrological purposes often consult a qualified astrologer before choosing the gemstone, particularly because Saturn is considered an important planet in traditional astrology.",
        "For jewellery purposes, anyone who appreciates the colour, appearance, and durability of sapphire may choose a Blue Sapphire without necessarily wearing it for astrological reasons.",
      ],
    },

    "HOW TO WEAR": {
      title: "How to Wear Blue Sapphire",
      paragraphs: [
        "For astrological use, traditional practices may specify the metal, finger, day, and method of wearing Blue Sapphire. These recommendations can vary according to an individual's birth chart and astrological tradition.",
        "For jewellery use, Blue Sapphire can be set in rings, pendants, earrings, bracelets, and other jewellery designs. The setting should securely hold the gemstone while allowing sufficient light to interact with the stone.",
        "If you are purchasing Blue Sapphire specifically for astrological purposes, it is advisable to follow the guidance of a qualified practitioner rather than relying on a general recommendation.",
      ],
    },

    "QUALITY FACTORS": {
      title: "Blue Sapphire Quality Factors",
      paragraphs: [
        "The quality and value of a Blue Sapphire depend on several important characteristics. Colour is generally one of the most significant factors, with attractive, well-saturated blue colours being particularly desirable.",
        "Clarity also affects appearance and value. Natural sapphires can contain inclusions, and the importance of those inclusions depends on their size, position, visibility, and effect on the overall appearance of the stone.",
        "Cut influences brilliance, proportions, symmetry, and the way light travels through the gemstone. Carat weight, origin, treatment status, and laboratory certification can also have a significant impact on the value of a sapphire.",
      ],
    },

    "CARE & CLEANING": {
      title: "Blue Sapphire Care & Cleaning",
      paragraphs: [
        "Blue Sapphire is a durable gemstone and is suitable for regular jewellery use. However, proper care can help maintain its appearance and protect the jewellery setting.",
        "For routine cleaning, gently clean the gemstone using lukewarm water, mild soap, and a soft brush. Rinse thoroughly and dry it with a soft, lint-free cloth.",
        "Avoid exposing the gemstone to harsh chemicals, strong cleaning solutions, or unnecessary impacts. When not being worn, store the jewellery separately to reduce the possibility of scratches or damage to other pieces.",
      ],
    },

    "PRICE GUIDE": {
      title: "Blue Sapphire Price Guide",
      paragraphs: [
        "The price of a Blue Sapphire can vary significantly depending on its quality and characteristics. There is no single fixed price for all Blue Sapphires.",
        "Important factors include colour, clarity, cut, carat weight, origin, treatment status, and the availability of a reliable gemological certificate.",
        "When comparing prices, it is important to compare gemstones with similar characteristics and certification. A very low price should be evaluated carefully, particularly when the gemstone is claimed to be natural, untreated, or from a specific origin.",
      ],
    },

    "BUYER BEWARE": {
      title: "Blue Sapphire Buyer Beware",
      paragraphs: [
        "When purchasing a Blue Sapphire, always ask whether the gemstone is natural, treated, or synthetic. These characteristics can have a major effect on the gemstone's value.",
        "A reputable seller should be able to clearly explain the gemstone's treatment status and provide appropriate documentation when certification is available.",
        "Be careful with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value. A professional gemological report can provide useful information about the gemstone's identity and characteristics.",
      ],
    },

    "FAQ'S": {
      title: "Frequently Asked Questions",
      paragraphs: [
        "Is Blue Sapphire the same as Neelam? Yes. Neelam is the traditional Indian name commonly used for Blue Sapphire.",
        "Is every Blue Sapphire suitable for astrology? Traditional astrological practices generally consider an individual's birth chart before recommending a gemstone. Therefore, a general recommendation may not be suitable for everyone.",
        "Is Blue Sapphire durable? Yes. Sapphire is a variety of corundum and is a durable gemstone that is commonly used in jewellery.",
        "Can Blue Sapphire be treated? Yes. Sapphires can undergo different treatments to improve their appearance. Treatment status is therefore an important factor to consider when purchasing one.",
        "How can I verify a Blue Sapphire? A reputable gemological laboratory certificate can help identify the gemstone and provide information about characteristics such as whether it is natural or synthetic and whether treatment has been detected.",
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
          BLUE SAPPHIRE INTRO
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
              Blue Sapphire (Neelam Stone)
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
                Looking for the most powerful gemstone? Buy{" "}
                <span className="font-semibold text-white">
                  Blue Sapphire
                </span>{" "}
                today and experience an unmatched transformation.
                Referred to as Neelam stone in Hindi, it is a gemstone
                for Shani or Saturn. It is the best remedy for Shani
                sade sati, weak Shani, relationship, and career issues.
                For those seeking more than just an astrological gem,
                it is your stone of interest.
              </p>


              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Owing to its strong significance and captivating hue,
                the blue sapphire stone is widely used as jewelry,
                celebrating special moments in life.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — BLUE SAPPHIRE / 360 BLOCK
          ================================================= */}

          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "380px",
            }}
          >

            {/* Blue Glow */}

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


            {/* Blue Sapphire Video */}

            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: "560px",
                height: "340px",
              }}
            >
              <video
                src="/videos/gemstones/blue.mp4"
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
          BLUE SAPPHIRE SECTION NAVIGATION
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
              Blue Sapphire
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