"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "span" | "div";
}

export default function TextReveal({ text, className = "", as: Component = "p" }: TextRevealProps) {
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.5"], // Reveals between 80% and 50% scroll position
  });

  const words = text.split(" ");

  return (
    <Component ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </Component>
  );
}

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ["#4b5563", "#ffffff"]); // From grey-600 to white

  return (
    <span className="relative mr-2 mt-1">
      <span className="absolute opacity-20 text-gray-600">{children}</span>
      <motion.span style={{ opacity, color }}>
        {children}
      </motion.span>
    </span>
  );
}
