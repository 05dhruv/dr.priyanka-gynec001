"use client";

import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, italic, description }) {
  return (
    <section className="relative bg-wine-deep text-cream grain-bg overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-rose/20 blur-[110px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold/15 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-10 text-center">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="leaf-divider justify-center text-rose text-xs tracking-[0.3em] uppercase mb-6"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl leading-[1.02] text-balance"
        >
          {title} <span className="italic text-rose">{italic}</span>
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 max-w-2xl mx-auto text-cream/75 leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
