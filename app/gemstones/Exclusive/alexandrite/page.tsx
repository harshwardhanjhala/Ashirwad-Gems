"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function AlexandritePage() {
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
      title: "About Alexandrite",
      paragraphs: [
        "Alexandrite is a rare variety of the mineral chrysoberyl. Its famous feature is a colour change caused by trace chromium: the stone typically appears green to bluish green in daylight and shifts toward red or purplish red under incandescent light.",

        "The gemstone was first reported in Russia's Ural Mountains in the 1830s and is said to have been named after the future Tsar Alexander II. Today it is also found in Sri Lanka, Brazil, India, Tanzania, Madagascar and other localities, though fine natural stones remain scarce.",

        "The appearance and value of Alexandrite depend on several characteristics, including colour, clarity, cut, carat weight, origin, treatment, and overall quality.",
      ],
    },

    BENEFITS: {
      title: "Benefits of Alexandrite",
      paragraphs: [
        "Alexandrite is not part of the classical Navratna, but some modern practitioners regard it as an alternative linked with Mercury or Budh. Such associations vary between practitioners and are matters of tradition and personal belief rather than established fact.",

        "Alexandrite rates about 8.5 on the Mohs scale, making it hard and well suited to rings and daily-wear jewellery when sensibly set.",

        "Astrological and metaphysical effects are matters of traditional belief and personal faith. They should not be considered guaranteed outcomes or substitutes for professional advice.",
      ],
    },

    "WHO SHOULD WEAR": {
      title: "Who Should Wear Alexandrite?",
      paragraphs: [
        "Alexandrite appeals mainly to collectors and lovers of rare gemstones. Those who wish to wear it for astrological reasons should seek individual guidance, as it is not a standard classical recommendation.",

        "Where a gemstone is chosen for astrological reasons, traditional practice is to have the individual birth chart examined by a qualified astrologer, since suitability can vary from person to person.",

        "For jewellery purposes, anyone who appreciates the look and character of Alexandrite may choose it without wearing it for astrological reasons.",
      ],
    },

    "HOW TO WEAR": {
      title: "How to Wear Alexandrite",
      paragraphs: [
        "Alexandrite is commonly set in rings, pendants and earrings in gold or platinum. Settings that allow both daylight and warm indoor light to reach the stone help show its colour change.",

        "For astrological use, traditional practices may specify the metal, finger, day, and method of wearing a gemstone. These recommendations vary with the individual's birth chart and astrological tradition.",

        "If you are purchasing Alexandrite specifically for astrological purposes, it is advisable to follow the guidance of a qualified practitioner rather than relying on a general recommendation.",
      ],
    },

    "QUALITY FACTORS": {
      title: "Alexandrite Quality Factors",
      paragraphs: [
        "The strength and clarity of the colour change is the most important factor. Fine stones show a distinct shift, such as bluish green to purplish red, with good saturation in both lighting conditions.",

        "Natural Alexandrite often contains inclusions, and eye-clean stones of larger sizes are rare. Cutting should balance weight retention with the best display of colour change and brilliance.",

        "Origin, carat weight and treatment status all influence value. Natural stones with a strong colour change and a reliable laboratory report are the most desirable.",
      ],
    },

    "CARE & CLEANING": {
      title: "Alexandrite Care & Cleaning",
      paragraphs: [
        "Clean with lukewarm water, mild soap and a soft brush, then dry with a soft cloth. Alexandrite is tough, but avoid hard knocks and store it apart from other gems so it is not scratched or does not scratch them.",

        "When not being worn, store Alexandrite jewellery separately in a soft pouch to reduce the possibility of scratches or damage to other pieces. Periodic checks of the setting by a jeweller are also advisable.",

        "If the stone has undergone any treatment, follow the specific care recommendations provided by the seller or a gemological professional.",
      ],
    },

    "PRICE GUIDE": {
      title: "Alexandrite Price Guide",
      paragraphs: [
        "Fine natural Alexandrite with a strong colour change is among the most expensive coloured gemstones per carat, and prices rise steeply with size. Stones with a weaker shift or heavy inclusions are priced considerably lower.",

        "There is no single fixed price for Alexandrite. When comparing prices, compare stones with similar characteristics, treatment status and certification.",

        "A very low price should be evaluated carefully, particularly when the gemstone is claimed to be natural, untreated, or from a specific origin.",
      ],
    },

    "BUYER BEWARE": {
      title: "Alexandrite Buyer Beware",
      paragraphs: [
        "Lab-created Alexandrite and synthetic colour-change corundum are widely sold under the name Alexandrite, and some are described misleadingly. Always confirm that the stone is natural chrysoberyl with a reputable laboratory report.",

        "A reputable seller should be able to explain the gemstone's treatment status and provide appropriate documentation or certification when available.",

        "Be careful with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value. A professional gemological report can provide useful information about identity and characteristics.",
      ],
    },

    "FAQ'S": {
      title: "Frequently Asked Questions",
      paragraphs: [
        "What is Alexandrite? Alexandrite is a rare, colour-change variety of chrysoberyl that shifts between green and red tones depending on the light.",

        "Is Alexandrite associated with any planet in astrology? Alexandrite is not part of the classical Navratna, but some modern practitioners regard it as an alternative linked with Mercury or Budh. Such associations vary between practitioners and are matters of tradition and personal belief rather than established fact.",

        "Is Alexandrite durable? Alexandrite rates about 8.5 on the Mohs scale, making it hard and well suited to rings and daily-wear jewellery when sensibly set.",

        "Why does Alexandrite change colour? The change is caused by trace chromium, which absorbs light so that the stone looks green in daylight and reddish under incandescent light.",

        "How can I tell natural Alexandrite from synthetic? A gemological laboratory can identify natural chrysoberyl and detect synthetic or imitation material through testing and microscopic examination. Visual inspection alone is not reliable.",

        "How can I verify Alexandrite? A reputable gemological laboratory certificate can help identify the gemstone and provide information about characteristics such as whether it is natural or synthetic and whether treatment has been detected.",
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
          ALEXANDRITE INTRO
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
              Alexandrite
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
                Looking for a rare gemstone that changes colour with the
                light?
                Discover{" "}
                <span className="font-semibold text-white">
                  Alexandrite
                </span>{" "}
                today and experience one of the most fascinating coloured
                gemstones in the world. Known for its remarkable shift between
                green and red tones, it is treasured by collectors and
                connoisseurs.
              </p>


              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Alexandrite is a rare, colour-change variety of chrysoberyl
                that shifts between green and red tones depending on the
                light.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — ALEXANDRITE / 360 BLOCK
          ================================================= */}

          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "380px",
            }}
          >

            {/* Alexandrite Glow */}

            <div
              className="
                absolute
                rounded-full
                bg-emerald-500/10
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


            {/* Alexandrite Video */}

            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: "560px",
                height: "340px",
              }}
            >
              <video
                src="/videos/gemstones/alexandrite.mp4"
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
          ALEXANDRITE SECTION NAVIGATION
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
              Alexandrite
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