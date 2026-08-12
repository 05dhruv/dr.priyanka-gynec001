"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/site";
import Reveal from "./Reveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % testimonials.length),
    []
  );

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;

    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next, paused]);

  const t = testimonials[index];

  return (
    <section className="py-16 md:py-14 bg-cream text-green-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div
          className="grid lg:grid-cols-[380px_1fr] gap-14 lg:gap-28 items-start"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* LEFT SIDE */}
          <Reveal>
            <div>
              <p className="text-xl uppercase tracking-[0.2em] text-green-800/80 mb-10 ">
                Testimonials
              </p>

              <h2 className="font-display text-[52px] md:text-[72px] lg:text-[54px] leading-[1.05] text-green-800 italic">
                Real people
                <br />
                Real results
              </h2>
            </div>
          </Reveal>

          {/* RIGHT SIDE */}
          <div>
            {/* Counter + Arrows */}
            <div className="flex items-center gap-6 mb-10">
              <button
                aria-label="Previous testimonial"
                onClick={prev}
                className="text-green-900 hover:opacity-70 transition"
              >
                <ChevronLeft size={26} strokeWidth={1.5} />
              </button>

              <span className="font-display text-2xl md:text-3xl italic text-green-800">
                {index + 1} / {testimonials.length}
              </span>

              <button
                aria-label="Next testimonial"
                onClick={next}
                className="text-green-900 hover:opacity-70 transition"
              >
                <ChevronRight size={26} strokeWidth={1.5} />
              </button>
            </div>

            {/* Testimonial Content */}
            <div className="min-h-[320px] md:min-h-[260px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <p className="font-display text-base md:text-lg lg:text-xl leading-[1.9] text-green-900 max-w-4xl">
                    {t.quote}
                  </p>

                  <p className="mt-14 text-xl md:text-2xl font-display italic text-green-800">
                    {t.name}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="mt-8 flex justify-center lg:justify-start gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-10 h-2 bg-green-800"
                      : "w-2 h-2 bg-green-800/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}