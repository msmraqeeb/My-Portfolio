"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
}

export default function ScrollReveal({ children }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"], // Transition as it comes into view
  });

  // Start grey/transparent, become full color/opaque as it reaches center
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const filter = useTransform(scrollYProgress, [0, 1], ["grayscale(100%)", "grayscale(0%)"]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        filter,
        y,
      }}
    >
      {children}
    </motion.div>
  );
}
