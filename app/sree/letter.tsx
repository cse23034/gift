"use client";

import { useEffect, useState } from "react";
import { Caveat } from "next/font/google";

// Loads Caveat properly (this is the fix for issue #1 — the font was
// never actually being loaded before, so it fell back to a generic
// serif whose line metrics didn't match the ruled paper lines).
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const paragraphs = [

"Hi ra 😂❤️ First of all, many many more happy returns of the day! 🎂🥳 Ne life lo ee roju entha important o naaku telusu... birthday kada, heroine laga full attention neku 😂👑 Kani ee special day lo kuda na kosam konchem time icchinanduku thank you ra 🥹❤️",

"Na friends circle already chaala chinnadi, danlo ammailu ante inka rare species 😂. Alanti situation lo nuvvu vachav... appati nunchi na life lo konchem color, konchem entertainment, konchem headache kuda vachindi 😭😂❤️. But honestly, nuvvu vachina tarvatha na life konchem different ga, konchem better ga anipinchindi. So yeah... randomly na life loki vachinanduku thanks 🫶✨",

"Nuvvu na life lo oka part ga eppatiki gurthundipothav. Manam kalisi spend chesina time entha aina, mana conversations, memories, mana random moments anni naaku eppatiki special ga untayi. And thanks for everything ra... nuvvu chesina chinna chinna things kuda naaku chaala value untayi. 🥹❤️",

"Happy Birthday once again, Sree. 🎂✨ I hope ee year neeku chaala happiness, crazy memories, and nuvvu korukunna anni things tiskosthundi. Ilage happy ga undu, navvuthu undu... and obviously, nannu marchipoku 😂❤️",

];


const BirthdayLetter = () => {
  const [opened, setOpened] = useState(false);

  const [paragraphIndex, setParagraphIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!opened || finished) return;

    const currentParagraph = paragraphs[paragraphIndex];

    if (characterIndex < currentParagraph.length) {
      const timer = setTimeout(() => {
        setCharacterIndex((prev) => prev + 1);
      }, 35);

      return () => clearTimeout(timer);
    }

    if (paragraphIndex < paragraphs.length - 1) {
      const timer = setTimeout(() => {
        setParagraphIndex((prev) => prev + 1);
        setCharacterIndex(0);
      }, 500);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setFinished(true);
    }, 800);

    return () => clearTimeout(timer);
  }, [opened, paragraphIndex, characterIndex, finished]);

  return (
    <section className="flex min-h-screen items-center justify-center px-4 py-20">

      {/* ================= ENVELOPE ================= */}

      {!opened && (
        <div className="flex flex-col items-center">

          <p className="mb-10 text-sm tracking-[0.25em] text-pink-300/60">
            A LITTLE SURPRISE
          </p>

          <button
            onClick={() => setOpened(true)}
            className="group relative h-[220px] w-[340px]"
          >
            {/* Shadow */}
            <div className="absolute -bottom-6 left-1/2 h-8 w-[280px] -translate-x-1/2 rounded-full bg-black/40 blur-2xl" />

            {/* Envelope */}
            <div className="absolute bottom-0 left-0 h-[190px] w-full overflow-hidden rounded-xl border border-white/20 bg-gradient-to-br from-pink-300/30 via-purple-300/20 to-pink-400/20 shadow-2xl backdrop-blur-md transition-all duration-500 group-hover:-translate-y-2">

              {/* Left fold */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(0 0, 50% 55%, 0 100%)",
                  background: "rgba(255,255,255,0.06)",
                }}
              />

              {/* Right fold */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(100% 0, 50% 55%, 100% 100%)",
                  background: "rgba(255,255,255,0.04)",
                }}
              />
            </div>

            {/* Flap */}
            <div
              className="absolute left-0 top-[30px] z-20 h-[160px] w-full"
              style={{
                clipPath: "polygon(0 0, 50% 58%, 100% 0)",
                background:
                  "linear-gradient(135deg, #f472b6, #a855f7)",
              }}
            />

            {/* Seal */}
            <div className="absolute left-1/2 top-[115px] z-30 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-pink-500 text-2xl shadow-xl shadow-pink-500/30 transition-all duration-500 group-hover:scale-110">
              💌
            </div>
          </button>

          <p className="mt-8 text-sm text-[#b8aec9]">
            Click the envelope to open ❤️
          </p>
        </div>
      )}

      {/* ================= LETTER ================= */}

      {opened && (
        <div className="w-full max-w-[760px] animate-in fade-in duration-700">

          {/* Paper shadow */}
          <div className="relative">

            {/* Slightly rotated paper */}
            <div className="relative rotate-[0.4deg]">

              {/* Paper */}
              <div
                className="relative overflow-hidden px-8 py-12 sm:px-16 sm:py-14"
                style={{
                  background: `
                    linear-gradient(
                      rgba(255,253,242,0.96),
                      rgba(255,249,230,0.98)
                    )
                  `,
                  boxShadow:
                    "0 25px 60px rgba(0,0,0,0.35), inset 0 0 40px rgba(160,120,80,0.08)",
                }}
              >

                {/* Paper texture */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.15]"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.3'/%3E%3C/svg%3E\")",
                  }}
                />

                {/*
                  NOTE: this single wrapper holds the date, greeting, body
                  AND closing as one block. That matters for two reasons:
                  1. It's given an explicit `textAlign: "left"` so it can't
                     be overridden by a parent page/layout setting
                     `text-center` (that was why everything was rendering
                     centered in your app).
                  2. The red margin line is absolutely positioned with
                     `inset-y-0` *inside this same wrapper*, so it always
                     spans the full height of date+greeting+body+closing
                     together — it can't be cut short by only wrapping part
                     of the letter (that was why the line stopped after the
                     greeting instead of running the full page).
                  Previously the paragraphs array also repeated "Dear Sree,"
                  as its first line even though the big cursive greeting
                  right below already says it — that duplicate line has been
                  removed from the `paragraphs` array above.
                */}

                {/* Letter */}
                <div
                  className={`${caveat.className} relative text-left`}
                  style={{
                    ["--margin" as string]: "2.75rem",
                    paddingLeft: "var(--margin)",
                    textAlign: "left",
                  }}
                >

                  {/* Red margin line — spans this whole wrapper (date, greeting, body, closing) */}
                  <div
                    className="pointer-events-none absolute inset-y-0"
                    style={{ left: "var(--margin)", borderLeft: "1px solid rgba(248,113,113,0.35)" }}
                  />

                  {/* Date */}
                  <div className="mb-10 text-right text-[20px] font-medium text-[#5c4b53]">
                    04 October
                  </div>

                  {/* Greeting */}
                  <div className="mb-6 text-[28px] font-semibold text-[#4d3e46]">
                    Dear Sree,
                  </div>

                  {/* Body — ruled lines live ONLY here, sized to this block's
                      own line-height, so every line of text sits on a rule
                      no matter what's above it */}
                  <div
                    className="relative text-[23px] font-medium text-[#51434b]"
                    style={{
                      lineHeight: "2.4rem",
                      backgroundImage:
                        "repeating-linear-gradient(to bottom, transparent 0, transparent calc(2.4rem - 1px), rgba(80,150,220,0.22) calc(2.4rem - 1px), rgba(80,150,220,0.22) 2.4rem)",
                      backgroundPositionY: "0.35rem",
                    }}
                  >
                    {paragraphs.map((paragraph, index) => {

                      if (index > paragraphIndex) {
                        return null;
                      }

                      let content = paragraph;

                      if (index === paragraphIndex) {
                        content = paragraph.slice(0, characterIndex);
                      }

                      return (
                        <p
                          key={index}
                          className={index === paragraphs.length - 1 ? "mb-0" : "mb-[2.4rem]"}
                        >
                          {content}

                          {index === paragraphIndex &&
                            !finished && (
                              <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-pink-400 align-middle" />
                            )}
                        </p>
                      );
                    })}
                  </div>

                  {/* Closing */}
                  {finished && (
                    <div className="mt-10 animate-in fade-in duration-1000">
                      <p className="text-[22px] text-[#51434b]">
                        With lots of love,
                      </p>

                      <p className="mt-1 text-[34px] italic text-pink-500">
                        Your Bestie ❤️
                      </p>
                    </div>
                  )}

                </div>

                {/* Paper corner */}
                <div
                  className="absolute bottom-0 right-0 h-16 w-16"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 50%, rgba(180,140,100,0.12) 50%)",
                  }}
                />

              </div>
            </div>

            {/* Paper shadow underneath */}
            <div className="absolute -bottom-3 left-2 right-2 -z-10 h-5 rotate-[-1deg] bg-black/20 blur-md" />
          </div>

          {finished && (
            <p className="mt-8 text-center text-sm text-[#b8aec9] animate-in fade-in duration-1000">
              Written especially for you. ❤️
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default BirthdayLetter;