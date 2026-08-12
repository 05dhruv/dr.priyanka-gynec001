"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/site";
import Reveal from "./Reveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % testimonials.length),
    []
  );
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next, paused]);

  const t = testimonials[index];

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-5xl px-6 md:px-10 text-center">
        <Reveal>
          <p className="leaf-divider justify-center text-wine text-xs tracking-[0.3em] uppercase mb-5">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-14">
            Real people <span className="italic-accent">Real results</span>
          </h2>
        </Reveal>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="mx-auto mb-6 text-rose/40" size={36} strokeWidth={1.5} />

          <div className="min-h-[220px] md:min-h-[160px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-display text-xl md:text-2xl leading-relaxed text-ink/85 text-balance">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-6 text-sm tracking-[0.2em] uppercase text-wine font-semibold">
                  {t.name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="w-10 h-10 rounded-full border border-wine/20 flex items-center justify-center hover:bg-wine hover:text-cream hover:border-wine transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-7 bg-wine" : "w-1.5 bg-wine/25"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="w-10 h-10 rounded-full border border-wine/20 flex items-center justify-center hover:bg-wine hover:text-cream hover:border-wine transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
