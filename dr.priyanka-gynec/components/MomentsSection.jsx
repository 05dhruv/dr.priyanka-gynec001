"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Reveal from "./Reveal";

export default function MomentsSection() {
  return (
    <section className="py-24 md:py-32 bg-cream-deep">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="leaf-divider justify-center text-wine text-xs tracking-[0.3em] uppercase mb-5">
            Our Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl">
            Moments that <span className="italic-accent">Move Us</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="group relative w-full aspect-video rounded-[32px] overflow-hidden bg-gradient-to-br from-wine via-wine-deep to-[#2f0d17] grain-bg"
          >
            <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-rose/25 blur-[100px]" />
            <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-gold/25 blur-[100px]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 rounded-full bg-cream/95 flex items-center justify-center shadow-xl"
              >
                <Play size={26} className="text-wine ml-1" fill="currentColor" />
              </motion.span>
              <p className="font-display italic text-cream/90 text-lg">
                Watch stories from Dr. Priyanka Gynec
              </p>
            </div>
          </motion.button>
        </Reveal>
      </div>
    </section>
  );
}
