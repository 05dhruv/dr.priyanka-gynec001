"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/site";
import {
  FlaskConical,
  HeartPulse,
  Baby,
  Microscope,
  CircleDot,
  Activity,
  Scissors,
  Bone,
  ShieldCheck,
  Search,
  ClipboardPlus,
  Stethoscope,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function getServiceIcon(slug) {
  const map = {
    "laparoscopy-gynecology": Microscope,
    "fertility-ivf": FlaskConical,
    "pregnancy-birthing": HeartPulse,
    "antenatal-services": HeartPulse,
    paediatrics: Baby,
    cystectomy: CircleDot,
    "laparoscopic-cystectomy": CircleDot,
    myomectomy: Activity,
    "laparoscopic-myomectomy": Activity,
    hysterectomy: Scissors,
    "laparoscopic-hysterectomy": Scissors,
    sacrocolpopexy: Bone,
    sterilization: ShieldCheck,
    "diagnostic-hysteroscopy": Search,
    polypectomy: ClipboardPlus,
    "normal-delivery": Baby,
    "endometriosis-surgery": HeartPulse,
  };
  return map[slug] || Stethoscope;
}

export default function ExploreMoreSpecialities({ currentSlug }) {
  const list = currentSlug
    ? services.filter((s) => s.slug !== currentSlug)
    : services;

  return (
    <section className="relative py-20 md:py-28 bg-[#fbf5ee] overflow-hidden">
      {/* BACKGROUND AMBIENT GLOWS */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#e84b8c]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#004b28]/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e84b8c]/10 border border-[#e84b8c]/20 text-[#e84b8c] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            <Sparkles size={14} />
            <span>Explore Specialities</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#004b28] italic leading-[1.08]">
            Care for every <span className="text-[#e84b8c] not-italic font-serif">stage of life.</span>
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-[#004b28]/70 max-w-lg mx-auto">
            Discover our comprehensive range of specialized gynaecological & maternal healthcare services.
          </p>
        </div>

        {/* LUXURY GRADIENT BACKDROP CONTAINER */}
        <div className="relative overflow-hidden rounded-[36px] sm:rounded-[48px] bg-gradient-to-br from-[#d83b79] via-[#e84b8c] to-[#a32259] p-5 sm:p-8 md:p-12 shadow-[0_25px_60px_rgba(216,59,121,0.3)] border border-white/20">
          
          {/* DECORATIVE LIGHT GLOWS */}
          <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/20 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-black/20 blur-[80px]" />

          {/* GRID OF PREMIUM CARDS */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
            {list.map((service, index) => {
              const Icon = getServiceIcon(service.slug);
              const title = service.short || service.title;

              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="
                      group
                      relative
                      flex
                      h-full
                      w-full
                      min-h-[180px]
                      sm:min-h-[205px]
                      flex-col
                      items-center
                      justify-between
                      rounded-3xl
                      bg-white/95
                      backdrop-blur-md
                      p-4
                      sm:p-5
                      text-center
                      border
                      border-white/80
                      shadow-[0_10px_25px_rgba(0,0,0,0.05)]
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:scale-[1.03]
                      hover:bg-white
                      hover:shadow-[0_20px_40px_rgba(163,34,89,0.3)]
                      hover:border-[#e84b8c]/40
                    "
                  >
                    {/* TOP ICON BADGE */}
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        sm:h-16
                        sm:w-16
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-br
                        from-[#f472b6]
                        to-[#e84b8c]
                        text-white
                        shadow-[0_8px_20px_rgba(232,75,140,0.35)]
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:rotate-6
                        group-hover:shadow-[0_12px_28px_rgba(232,75,140,0.5)]
                        shrink-0
                        mt-1
                      "
                    >
                      <Icon
                        size={26}
                        className="sm:w-7 sm:h-7"
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* TITLE */}
                    <div className="my-auto py-2">
                      <h3
                        className="
                          font-display
                          font-bold
                          text-xs
                          sm:text-[14px]
                          text-slate-800
                          leading-snug
                          group-hover:text-[#e84b8c]
                          transition-colors
                          break-words
                        "
                      >
                        {title}
                      </h3>
                    </div>

                    {/* EXPLORE LINK MICRO-INDICATOR */}
                    <div
                      className="
                        inline-flex
                        items-center
                        gap-1
                        text-[11px]
                        font-semibold
                        text-[#e84b8c]
                        opacity-0
                        group-hover:opacity-100
                        -translate-y-1
                        group-hover:translate-y-0
                        transition-all
                        duration-300
                      "
                    >
                      <span>Explore</span>
                      <ArrowRight size={12} />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
