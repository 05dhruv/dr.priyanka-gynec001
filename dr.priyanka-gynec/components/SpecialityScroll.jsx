"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
  Sparkles,
} from "lucide-react";
import { services as siteServices } from "@/data/site";

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
    "endometriosis-surgery": Sparkles,
  };
  return map[slug] || Stethoscope;
}

export default function SpecialityScroll({ services: propServices }) {
  const displayServices =
    Array.isArray(propServices) && propServices.length > 0
      ? propServices
      : siteServices;

  return (
    <section className="bg-[#fbf5ee] py-20 lg:py-24 relative">
      <div className="max-w-[1700px] mx-auto px-5 lg:px-12">
        {/* =========================
            DESKTOP VERSION (STICKY CARD STACKING)
        ========================== */}
        <div className="hidden lg:grid lg:grid-cols-[0.8fr_1.2fr] gap-20 items-start">
          {/* Left Sticky Heading */}
          <div className="sticky top-28 h-fit self-start">
            <h2
              className="
                font-serif
                text-[#004b28]
                text-[70px]
                xl:text-[90px]
                leading-[0.92]
                tracking-[-0.03em]
              "
            >
              Care that grows
              <br />
              with Her—
              <span className="italic block">
                at every
                <br />
                life stage
              </span>
            </h2>
          </div>

          {/* Right Side Sticky Stacked Cards */}
          <div className="relative space-y-6 pb-20">
            {displayServices.map((item, index) => {
              const itemTitle = item.short || item.title;
              const itemDesc = item.homeBlurb || item.blurb;
              const itemLink = item.link || `/services/${item.slug}`;
              const IconComponent = getServiceIcon(item.slug);

              // Calculate top offset so cards stack cleanly like an overlapping deck
              const topOffset = 110 + Math.min(index * 8, 80);

              return (
                <motion.div
                  key={item.slug || index}
                  style={{
                    position: "sticky",
                    top: `${topOffset}px`,
                    zIndex: index + 10,
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="
                    rounded-[999px]
                    bg-[#f5e7d8]
                    border
                    border-[#ebd7c5]
                    overflow-hidden
                    px-7
                    py-5
                    shadow-[0_16px_40px_rgba(7,85,64,0.1)]
                    hover:shadow-[0_20px_50px_rgba(7,85,64,0.16)]
                    transition-all
                    duration-300
                  "
                >
                  <div className="flex items-center gap-6">
                    {/* Circle Icon Frame */}
                    <div
                      className="
                        relative
                        w-[125px]
                        h-[125px]
                        rounded-full
                        shrink-0
                        border-[5px]
                        border-[#9ecaba]
                        bg-gradient-to-br
                        from-[#004b28]
                        via-[#075540]
                        to-[#004b28]
                        flex
                        items-center
                        justify-center
                        shadow-md
                      "
                    >
                      <IconComponent className="w-13 h-13 text-[#f5e7d8]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-[#004b28] text-3xl xl:text-4xl leading-tight mb-2">
                        {itemTitle}
                      </h3>

                      <p className="text-[#1b4332] text-sm xl:text-base leading-relaxed mb-4 max-w-xl line-clamp-2">
                        {itemDesc}
                      </p>

                      <Link
                        href={itemLink}
                        className="
                          inline-flex
                          items-center
                          gap-3
                          text-[#004b28]
                          hover:text-[#075540]
                          italic
                          text-lg
                          hover:gap-5
                          transition-all
                          font-medium
                        "
                      >
                        Know More
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =========================
            MOBILE VERSION (STICKY CARD STACKING)
        ========================== */}
        <div className="lg:hidden">
          <div className="text-center mb-8">
            <h2
              className="
                font-serif
                text-[#004b28]
                text-[42px]
                leading-[0.95]
              "
            >
              Care that grows
              <br />
              with Her—
              <span className="italic block">
                at every
                <br />
                life stage
              </span>
            </h2>
          </div>

          <div className="relative space-y-4 pb-12">
            {displayServices.map((item, index) => {
              const itemTitle = item.short || item.title;
              const itemDesc = item.homeBlurb || item.blurb;
              const itemLink = item.link || `/services/${item.slug}`;
              const IconComponent = getServiceIcon(item.slug);

              const mobileTopOffset = 80 + Math.min(index * 6, 60);

              return (
                <motion.div
                  key={item.slug || index}
                  style={{
                    position: "sticky",
                    top: `${mobileTopOffset}px`,
                    zIndex: index + 10,
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4 }}
                  className="
                    rounded-[40px] sm:rounded-[999px]
                    bg-[#f5e7d8]
                    border
                    border-[#ebd7c5]
                    overflow-hidden
                    px-5
                    py-4
                    shadow-[0_10px_30px_rgba(7,85,64,0.12)]
                  "
                >
                  <div className="flex items-center gap-4">
                    {/* Circle Icon Frame */}
                    <div
                      className="
                        relative
                        w-20
                        h-20
                        sm:w-24
                        sm:h-24
                        rounded-full
                        shrink-0
                        border-4
                        border-[#9ecaba]
                        bg-gradient-to-br
                        from-[#004b28]
                        via-[#075540]
                        to-[#004b28]
                        flex
                        items-center
                        justify-center
                        shadow-sm
                      "
                    >
                      <IconComponent className="w-9 h-9 sm:w-11 sm:h-11 text-[#f5e7d8]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="
                          font-serif
                          text-[#004b28]
                          text-[20px]
                          sm:text-[24px]
                          leading-tight
                          mb-1.5
                        "
                      >
                        {itemTitle}
                      </h3>

                      <p
                        className="
                          text-[#1b4332]
                          text-xs
                          sm:text-sm
                          leading-relaxed
                          mb-2
                          line-clamp-2
                        "
                      >
                        {itemDesc}
                      </p>

                      <Link
                        href={itemLink}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          text-[#004b28]
                          hover:text-[#075540]
                          italic
                          text-xs
                          sm:text-sm
                          font-medium
                        "
                      >
                        Know More
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}