"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
};

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fbf2f2]">
      {/* IMAGE BAND */}
      <div className="relative w-full h-[50svh] min-h-[320px] sm:h-[70svh] md:h-[65vh] md:min-h-[560px] lg:h-[93vh]">
        <motion.div
          initial={{ scale: 1.025, opacity: 0.92 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1786294076/women-holding-baby-1_h4e8ge.webp"
            alt="Happy family mother, grandmother and baby"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center md:object-center"
          />
          <div className="absolute inset-0 bg-[#17301e]/[0.07]" />
        </motion.div>

        {/* CURVE DIVIDER */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[110px] sm:h-[140px] md:h-[190px] lg:h-[230px]"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path
              d="M0 140 Q720 -120 1440 140 L1440 200 L0 200 Z"
              fill="#fbf2f2"
            />
          </svg>
        </motion.div>
      </div>

      {/* TEXT PANEL */}
      <div className="relative z-10 mx-auto -mt-16 flex max-w-3xl flex-col items-center px-2 text-center sm:-mt-24 md:-mt-32 lg:-mt-49">
        <motion.h1
          {...reveal}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-5 text-3xl leading-[0.98] font-display italic tracking-tight text-[#004b28] md:text-3xl lg:text-6xl"
        >
          Her Health First
        </motion.h1>

        <motion.p
          {...reveal}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.34 }}
          className="mt-7 max-w-6xl text-sm leading-relaxed font-display italic text-[#14271d]/80 md:text-[15px]"
        >
          Her journey. Her choices. Always. At Dr. Priyanka Gynec, we combine genuine
          warmth with world-class expertise and cutting-edge technology,
          supporting every stage of your journey.
        </motion.p>

        <motion.div
          {...reveal}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.48 }}
          className="mt-7"
        >

          <a
            href="#contact-numbers"
            className="inline-flex items-center justify-center rounded-full bg-[#e181b5] text-[#fbf2f2] font-display italic text-base md:text-[1.125rem] px-5 md:px-6 py-2.5 border border-[#e181b5] hover:bg-transparent hover:text-[#004b28] transition-all duration-500 shadow-sm"
          >
            Call for Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
}