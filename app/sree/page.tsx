"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Starfield from "../components/Starfield";
import LikeCard from "./likes";
import { FaSearch,FaCamera, FaStar, FaPeace, FaSmile, FaCar, FaHeart } from "react-icons/fa";
import Timeline from "./timeline";
import QuestionCard from "./questioncard";
import RiseUp from "../components/riseup";
import BirthdayLetter from "./letter";

const COLORS = ["#ff7aa8", "#ffd6a5", "#c268d9", "#ff9fbd", "#fff8f5"];

export default function Surprise() {
  const [pieces, setPieces] = useState<{ id: number; color: string }[]>([]);

  useEffect(() => {
    setPieces(
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }))
    );
  }, []);

  return (
    <main className="birthday-page">
      <Starfield />

      {/* CONFETTI */}
      <div className="confetti-container">
        {pieces.map((piece) => (
          <motion.div
            key={piece.id}
            className="confetti"
            style={{ background: piece.color }}
            initial={{
              x: 0,
              y: 0,
              rotate: 0,
              opacity: 1,
              scale: 1,
            }}
            animate={{
              x: Math.random() * 1400 - 700,
              y: Math.random() * -800 - 100,
              rotate: Math.random() * 900 - 450,
              opacity: 0,
            }}
            transition={{
              duration: 1 + Math.random() * 0.7,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* HERO */}
      <section className="hero-content">
        <RiseUp delay={0}>
          <div className="photo-frame">
            <img
              src="/sree.jpeg"
              alt="Sree"
              className="object-cover object-[10%_40%]"
            />
          </div>
        </RiseUp>

        <RiseUp delay={0.15}>
          <p className="photo-caption">
            Happy Birthday,{" "}
            <span className="name-gradent">Sree</span> 🎂
          </p>
        </RiseUp>

        <RiseUp delay={0.3}>
          <p className="photo-caption">
            Today is all about celebrating{" "}
            <span className="name-gradent">YOU</span>
          </p>
        </RiseUp>

        <RiseUp delay={0.45}>
          <div className="button-wrapper">
            <button
              className="surprise-button"
              onClick={() => {
                document.getElementById("like")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Lets Begin
            </button>
          </div>
        </RiseUp>
      </section>

      {/* THINGS I LIKE */}
      <section className="hero-content gap-10" id="like">
        <RiseUp delay={0}>
          <div className="text-4xl name-gradent">
            <p>Some Things I Like About You ❤️</p>
          </div>
        </RiseUp>

        <div className="grid grid-cols-1 gap-x-30 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Your Random Talks",
              description:
                "Netho matladuthu unte inka inka matladalanipistundi.",
              icon: "💬",
            },
            {
              title: "You Just Get Me",
              description:
                "Nuvvu nannu chala baga ardham chesukuntav.",
              icon: "🫂",
            },
            {
              title: "You Value My Time",
              description:
                "Andari ammaila laga naatho chala sepu matladu ani adagavu.",
              icon: "⏳",
            },
            {
              title: "The Trust You Have in Me",
              description:
                "Nuvvu naatho chala vishayalu share chesukuntav.",
              icon: "🤍",
            },
            {
              title: "Your Selflessness",
              description:
                "Neekosam idi cheyyi, adi cheyyi ani eppudu adagavu.",
              icon: "🌷",
            },
            {
              title: "Your Cute Voice",
              description:
                "Nee voice chala baguntundi, chala baga songs kuda padutav",
              icon: "🎧",
            },
          ].map((item, i) => (
            <RiseUp key={i} delay={0.1 + i * 0.12}>
              <LikeCard
                icon={<span className="text-3xl">{item.icon}</span>}
                title={item.title}
                description={item.description}
              />
            </RiseUp>
          ))}
        </div>
      </section>
      {/* time line */}
      <section>
          <Timeline />
      </section>
      
      {/* QUESTIONS */}
      <section className="hero-content flex justify-center">
        <RiseUp delay={0}>
          <div>
            <p className="name-gradent text-6xl mb-10">
              Lets Have Some Fun
            </p>
          </div>
        </RiseUp>

        <RiseUp delay={0.2}>
          <QuestionCard />
        </RiseUp>
      </section>

      {/* LETTER */}
      <section className="hero-content">

        <RiseUp delay={0.2}>
          <BirthdayLetter />
        </RiseUp>
      </section>

      {/* NEW CHAPTER */}
      <section className="hero-content gap-10">
        <RiseUp delay={0}>
          <div className="text-4xl name-gradent">
            <p>For This New Chapter</p>
          </div>
        </RiseUp>

        <div className="grid grid-cols-1 gap-x-30 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <FaCamera />,
              title: "New Memories",
              description:
                "Ee year lo inka chala beautiful memories create cheskovali.",
            },
            {
              icon: <FaStar />,
              title: "Big Dreams, Bigger Wins",
              description:
                "Nuvvu anukunnavi anni one by one achieve chesi, inka chala heights ki vellali.",
            },
            {
              icon: <FaPeace />,
              title: "Peace & Happiness",
              description:
                "Life entha busy aina, neeku peace, happiness and konchem me-time eppudu undali.",
            },
            {
              icon: <FaSmile />,
              title: "Keep That Smile",
              description:
                "Nee smile alane undali... endukante adi chala baguntundi.",
            },
            {
              icon: <FaCar />,
              title: "More Adventures",
              description:
                "Inka chala random plans, unexpected trips, long drives and crazy adventures kavali.",
            },
            {
              icon: <FaHeart />,
              title: "More Us",
              description:
                "Mana friendship lo inka chala random conversations, memories, laughs and madness undali.",
            },
          ].map((item, i) => (
            <RiseUp key={i} delay={0.1 + i * 0.12}>
              <LikeCard
                icon={<span className="text-3xl">{item.icon}</span>}
                title={item.title}
                description={item.description}
              />
            </RiseUp>
          ))}
        </div>
      </section>
    </main>
  );
}
