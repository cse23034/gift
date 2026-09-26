"use client";

import RiseUp from "../components/riseup";

type TimelineItem = {
  date: string;
  title: string;
  description: string;
  emoji: string;
  photo: string;
  rotate?: number;
};

const timelineData: TimelineItem[] = [
  {
    date: "The Beginning",
    title: "First Letter From You 💌",
    description:
      "Gurthunda first letter nuvvu naaku raasav. Appudu manam friends ayyam.",
    emoji: "🌸",
    photo: "/acceptLetter.jpeg",
    rotate: 90,
  },
  {
    date: "",
    title: "Roome Girl 📸",
    description:
      "Nuvvu naaku pettina one and only Roome image ide.",
    emoji: "💫",
    photo: "/roome.jpeg",
    rotate: 0,
  },
  {
    date: "",
    title: "Last Letter From You 💔",
    description:
      "EMCET aipoyindi, nuvvu college nunchi vellipoyav.",
    emoji: "🥹",
    photo: "/lastLetter.jpeg",
    rotate: 1.5,
  },
  {
    date: "",
    title: "Snap Girl 👻",
    description:
      "Velthu velthu nee Snap account icchav.",
    emoji: "🎁",
    photo: "/snapGirl.jpeg",
    rotate: 0,
  },
  {
    date: "",
    title: "Insta Girl 📱",
    description:
      "Tarvatha Instagram lo ki shift ayyam.",
    emoji: "💕",
    photo: "/instaGirl.jpeg",
    rotate: 0,
  },
  {
    date: "Current",
    title: "Finally, We Met Again 🥹",
    description:
      "Chala rojula tarvatha... almost 3 years tarvatha kalisam.",
    emoji: "❤️",
    photo: "/meeting.jpeg",
    rotate: 90,
  },
];

export default function Timeline() {
  return (
    <section className="relative mx-auto w-full max-w-3xl px-6 py-16">
      {/* Heading */}
      <RiseUp>
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm tracking-[0.3em] text-pink-300/70 uppercase">
            Our little story
          </p>

          <h2 className="font-serif text-4xl text-[#fdf6f0]">
            A Few Moments ✨
          </h2>
        </div>
      </RiseUp>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-pink-400/0 via-pink-400/40 to-pink-400/0 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-14">
          {timelineData.map((item, index) => (
            <RiseUp key={index} delay={0.1 + index * 0.1}>
              <div
                className={`relative flex items-start md:w-1/2 ${
                  index % 2 === 0
                    ? "md:mr-auto md:pr-12"
                    : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-5 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-pink-300/30 bg-[#0f0a1a] shadow-[0_0_25px_rgba(242,140,191,0.2)] md:left-auto md:right-0 md:translate-x-1/2">
                  <span className="text-sm">{item.emoji}</span>
                </div>

                {/* Card */}
                <div className="ml-12 w-full overflow-visible rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-pink-300/20 hover:bg-white/[0.07] md:ml-0">
                  
                  {/* Text */}
                  <div className="p-6 pb-4">
                    {item.date && (
                      <p className="mb-2 text-xs tracking-[0.2em] text-pink-300/60 uppercase">
                        {item.date}
                      </p>
                    )}

                    <h3 className="mb-3 text-xl font-medium text-[#fdf6f0]">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-7 text-[#b8aec9]">
                      {item.description}
                    </p>
                  </div>

                  {/* Photo */}
                  <div className="px-6 pb-6">
                    <div className="flex justify-center">
                      <div
                        className="group relative w-full overflow-hidden rounded-xl bg-white/10 p-2 shadow-[0_10px_35px_rgba(0,0,0,0.25)] transition-all duration-500 hover:scale-[1.02]"
                        style={{
                          transform: `rotate(${item.rotate ?? 0}deg)`,
                        }}
                      >
                        <div className="relative h-64 w-full overflow-hidden rounded-lg">
                          <img
                            src={item.photo}
                            alt={item.title}
                            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          />

                          {/* Image overlay */}
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RiseUp>
          ))}
        </div>
      </div>
    </section>
  );
}