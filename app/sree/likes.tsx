import React from "react";

type LikeCardProps = {
  icon : React.ReactNode;
  title: string;
  description: string;
};


const LikeCard = ({ icon,title, description }: LikeCardProps) => {
  return (
    <div
      className="
        group
        relative
        w-full
        max-w-sm
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/[0.04]
        p-12
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-pink-300/30
        hover:bg-white/[0.07]
        hover:shadow-[0_25px_70px_rgba(242,140,191,0.15)]
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-32
          w-32
          rounded-full
          bg-pink-400/10
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-pink-400/20
        "
      />

      {/* Icon */}
      <div className="mb-5 flex justify-center items-center gap-2">
        <span className="text-xs tracking-[0.2em] text-pink-200/60 uppercase">
          {icon}
        </span>
      </div>

      {/* Title */}
      <h3
        className="
          relative
          text-xl
          font-medium
          tracking-tight
          text-[#fdf6f0]
        "
      >
        {title}
      </h3>

      {/* Divider */}
      <div className="my-4 h-px w-12 bg-gradient-to-r from-pink-400 to-transparent" />

      {/* Description */}
      <p className="relative text-sm leading-7 text-[#b8aec9]">
        {description}
      </p>
    </div>
  );
};

export default LikeCard;