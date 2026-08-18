"use client";

import { motion } from "framer-motion";

export default function PageHero({
  eyebrow,
  title,
  italic,
  description,
  bgClass = "bg-[#fbf5ee] text-[#004b28]",
  eyebrowClass = "text-[#e181b5]",
  italicClass = "text-[#e181b5]",
  descriptionClass = "text-[#004b28]/75",
  paddingClass = "pt-24 pb-8 md:pt-36 md:pb-12",
  titleClass = "text-3xl sm:text-5xl md:text-6xl lg:text-7xl break-words",
}) {
  return (
    <section className={`relative overflow-hidden ${paddingClass} ${bgClass}`}>
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#e181b5]/15 blur-[110px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#004b28]/10 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 text-center">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`leaf-divider justify-center text-xs tracking-[0.3em] uppercase mb-6 ${eyebrowClass}`}
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`font-display leading-[1.05] tracking-tight text-[#004b28] ${titleClass}`}
        >
          {title} {italic && <span className={`italic ${italicClass}`}>{italic}</span>}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className={`mt-7 max-w-2xl mx-auto leading-relaxed ${descriptionClass}`}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
