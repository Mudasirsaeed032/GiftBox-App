"use client";
import React from "react";
import { motion } from "motion/react";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

type Props = {
  className?: string;
  testimonials: Testimonial[];
  duration?: number; // seconds for one loop
};

export const TestimonialsColumn: React.FC<Props> = ({
  className,
  testimonials,
  duration = 10,
}) => {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {/* Duplicate once for a seamless infinite scroll */}
        {[0, 1].map((idx) => (
          <React.Fragment key={idx}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-10 rounded-3xl border border-pink-700 hover:border-pink-400 max-w-xs w-full bg-white transition-colors duration-200"
                key={`${idx}-${i}`}
              >
                <div className="text-sm leading-relaxed">{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">{name}</div>
                    <div className="leading-5 opacity-60 tracking-tight text-xs">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
