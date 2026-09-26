"use client";
import { motion, useAnimation } from "framer-motion";
import { ReactNode } from "react";
import { getScrollDirection } from "./scrollDirection";

export default function RiseUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const controls = useAnimation();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      viewport={{ amount: 0.3 }}
      onViewportEnter={() => {
        if (getScrollDirection() === "down") {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", delay },
          });
        } else {
          // entering because user scrolled up — show instantly, no rise animation
          controls.set({ opacity: 1, y: 0 });
        }
      }}
      onViewportLeave={() => {
        controls.set({ opacity: 0, y: 40 });
      }}
    >
      {children}
    </motion.div>
  );
}