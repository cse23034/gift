"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

type Question = {
  question: string;
  options?: string[];
  placeholder?: string;
};

const questions: Question[] = [
  {
    question: "Next time ekkadiki veldam? 🚗",
    options: [
      "Malli college canteen 🥤",
      "Baita lunch 🍕",
      "Movie 🎬",
      "Long drive 🌙",
    ],
  },
  {
    question: "Entha mandi boyfriends unnaru? 😂",
    options: [
      "Evaru leru 😇",
      "2 👀",
      "5 😭",
      "10+ 💀",
    ],
  },
  {
    question: "First nannu ela, ekkada chusavo describe cheyyi? 👀",
    placeholder: "First time nannu chusinappudu... 👀",
  },
  {
    question: "Na lo neeku nachindi enti? ❤️",
    placeholder: "Cheppu... em nachindi? 🫶",
  },
  {
    question: "Na phone oka roju neeku isthe, first em chustav? 👀",
    options: [
      "Call History 📞",
      "Instagram Chats 📱",
      "WhatsApp Chats 💬",
      "Gallery 📸",
    ],
  },
  {
    question: "Nuvvu padukune mundu chese panulu enti? 🌙",
    placeholder: "Padukune mundu em chestav? 👀",
  },
  {
    question: "Evariki teliyani oka secret cheppu 🤫",
    placeholder: "Okay... secret cheppu 🤐",
  },
  {
    question: "Random ga nenu hug adigithe em chestav? 🫂",
    options: [
      "Immediate hug ❤️",
      "“Enduku?” ani adugutha 😂",
      "Maybe... 👀",
      "Paripotha 🏃‍♀️",
    ],
  },
];



const QuestionCard = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});

  const [submitted, setSubmitted] = useState(false);

  const question = questions[currentQuestion];
  const answer = selectedAnswers[currentQuestion];

  const hasOptions = question.options && question.options.length > 0;

  const handleSelect = (option: string) => {
    if (submitted) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion]: option,
    }));
  };

  const handleTextChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion]: e.target.value,
    }));
  };

  const handleNext = () => {
    if (!answer?.trim()) return;

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Last question answered — build the question+answer pairs
      // using the EXACT questions above, and email them to you.
      const combined = questions
        .map((q, i) => `Q: ${q.question}\nA: ${selectedAnswers[i] ?? answer}`)
        .join("\n\n");

      emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { message: combined },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  if (submitted) {
    return (
      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-pink-300/60">
          Quiz Complete
        </p>

        <h2 className="mt-4 text-4xl font-bold text-[#fdf6f0]">
          You made it ❤️
        </h2>

        <p className="mt-4 text-[#b8aec9]">
          You made it till the end 👀✨
        </p>

        <p className="mt-2 text-sm text-pink-300/70">
          Your answers are safely stored here 💌
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg">
      {/* Progress */}
      <div className="mb-5 flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-pink-300/60">
          Question {currentQuestion + 1}
        </p>

        <p className="text-sm text-[#b8aec9]">
          {currentQuestion + 1} / {questions.length}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-500"
          style={{
            width: `${((currentQuestion + 1) / questions.length) * 100}%`,
          }}
        />
      </div>

      {/* Question Card */}
      <div
        key={currentQuestion}
        className="group relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] animate-in fade-in slide-in-from-right-8 duration-500"
      >
        {/* Glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-pink-400/10 blur-3xl transition-all duration-500 group-hover:bg-pink-400/20" />

        {/* Question */}
        <h3 className="relative mb-7 text-2xl font-medium leading-relaxed text-[#fdf6f0]">
          {question.question}
        </h3>

        {/* OPTIONS */}
        {hasOptions ? (
          <div className="relative space-y-3">
            {question.options!.map((option) => {
              const isSelected = answer === option;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`w-full rounded-2xl border px-5 py-4 text-left text-sm transition-all duration-300 ${
                    isSelected
                      ? "border-pink-300/50 bg-pink-400/15 text-pink-100 shadow-lg shadow-pink-500/10"
                      : "border-white/10 bg-white/[0.03] text-[#b8aec9] hover:-translate-y-0.5 hover:border-pink-300/20 hover:bg-white/[0.06] hover:text-[#fdf6f0]"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        ) : (
          /* OPEN ENDED QUESTION */
          <div className="relative">
            <textarea
              value={answer || ""}
              onChange={handleTextChange}
              placeholder={question.placeholder}
              rows={5}
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-[#fdf6f0] outline-none placeholder:text-[#b8aec9]/40 transition-all duration-300 focus:border-pink-300/40 focus:bg-white/[0.06] focus:ring-2 focus:ring-pink-400/10"
            />

            <p className="mt-2 text-right text-xs text-[#b8aec9]/40">
              Write whatever comes to your mind 💭
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-7 flex gap-3">
          {currentQuestion > 0 && (
            <button
              type="button"
              onClick={handleBack}
              className="rounded-2xl border border-white/10 px-5 py-3 text-sm text-[#b8aec9] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
            >
              ← Back
            </button>
          )}

          <button
            type="button"
            onClick={handleNext}
            disabled={!answer?.trim()}
            className={`ml-auto rounded-2xl px-7 py-3 text-sm font-medium transition-all duration-300 ${
              answer?.trim()
                ? "bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-lg shadow-pink-500/20 hover:-translate-y-0.5 hover:shadow-pink-500/30"
                : "cursor-not-allowed bg-white/10 text-white/30"
            }`}
          >
            {currentQuestion === questions.length - 1
              ? "Finish ❤️"
              : "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;