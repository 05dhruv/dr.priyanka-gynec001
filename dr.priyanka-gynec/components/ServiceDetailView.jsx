"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ChevronDown,
  Phone,
  MessageCircle,
  Calendar,
  Sparkles,
  ShieldCheck,
  Award,
  Stethoscope,
  Clock,
  ArrowRight,
} from "lucide-react";
import { siteInfo, doctors } from "@/data/site";
import ExploreMoreSpecialities from "@/components/ExploreMoreSpecialities";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import AppointmentModal from "@/components/AppointmentModal";

export default function ServiceDetailView({ service }) {
  const [openFaqs, setOpenFaqs] = useState({});
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const drPriyanka = doctors[0] || {};

  const toggleFaq = (index) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const defaultBenefits = [
    {
      title: "Minimally Invasive Precision",
      desc: "Performs procedures using tiny micro-incisions for minimal post-operative scarring and aesthetic elegance.",
    },
    {
      title: "Reduced Post-Op Discomfort",
      desc: "Advanced surgical equipment reduces tissue trauma and significantly decreases post-procedure pain.",
    },
    {
      title: "Rapid Recovery & Return Home",
      desc: "Most procedures are day-care or require short 24-48 hour observation, letting you return to family quickly.",
    },
    {
      title: "Fertility-Preserving Approach",
      desc: "Delicate micro-dissection designed specifically to preserve normal pelvic anatomy and ovarian reserve.",
    },
  ];

  const parseBenefit = (benefitItem, idx) => {
    let title = "";
    let desc = "";

    if (typeof benefitItem === "object" && benefitItem !== null) {
      title = benefitItem.title || benefitItem.label || `Benefit ${idx + 1}`;
      desc = benefitItem.desc || benefitItem.description || "";
    } else if (typeof benefitItem === "string") {
      const itemStr = benefitItem.trim();

      if (itemStr.includes(":")) {
        const parts = itemStr.split(":");
        title = parts[0].trim();
        desc = parts.slice(1).join(":").trim();
      } else if (itemStr.includes("—")) {
        const parts = itemStr.split("—");
        title = parts[0].trim();
        desc = parts.slice(1).join("—").trim();
      } else if (itemStr.includes(" – ")) {
        const parts = itemStr.split(" – ");
        title = parts[0].trim();
        desc = parts.slice(1).join(" – ").trim();
      } else if (itemStr.includes(" - ")) {
        const parts = itemStr.split(" - ");
        title = parts[0].trim();
        desc = parts.slice(1).join(" - ").trim();
      } else {
        // Natural phrase break matching
        const regexBreak = /\s+(resulting in|ensuring|providing|allowing|featuring|with|for|to)\s+/i;
        const match = itemStr.match(regexBreak);

        if (match && match.index > 5) {
          title = itemStr.substring(0, match.index).trim();
          desc = itemStr.substring(match.index + 1).trim();
          desc = desc.charAt(0).toUpperCase() + desc.slice(1);
        } else {
          const words = itemStr.split(/\s+/);
          if (words.length > 4) {
            title = words.slice(0, 4).join(" ");
            desc = words.slice(4).join(" ");
            desc = desc.charAt(0).toUpperCase() + desc.slice(1);
          } else {
            title = itemStr;
            desc = "";
          }
        }
      }
    }

    // Ensure title and desc are never identical
    if (desc && title.toLowerCase() === desc.toLowerCase()) {
      desc = "";
    }

    return { title, desc };
  };

  const benefitsToRender = service.keyBenefits && service.keyBenefits.length > 0
    ? service.keyBenefits
    : defaultBenefits;

  return (
    <main className="min-h-screen bg-[#fbf5ee] text-[#1b2a26]">
      {/* =========================================================
          HERO BANNER
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f2e7dc] via-[#fbf5ee] to-[#fbf5ee] pt-28 pb-16 md:pt-36 md:pb-24">
        {/* Subtle Decorative Ambient Glows */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#e181b5]/15 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/2 -left-32 h-96 w-96 rounded-full bg-[#004b28]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Category Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#004b28]/15 bg-white/80 px-4 py-1.5 backdrop-blur-md shadow-xs mb-6"
            >
              <Sparkles size={15} className="text-[#e181b5]" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#004b28]">
                {service.category || "Specialized Women's Healthcare"}
              </span>
            </motion.div>

            {/* Service Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#004b28]"
            >
              {service.title}
            </motion.h1>

            {/* Blurb / Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl md:text-2xl text-[#1b2a26]/80 font-light max-w-3xl mx-auto leading-relaxed"
            >
              {service.blurb}
            </motion.p>

            {/* Quick Feature Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              <div className="flex items-center gap-2 rounded-full bg-[#004b28]/5 border border-[#004b28]/10 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-[#004b28]">
                <ShieldCheck size={16} className="text-[#004b28]" />
                <span>3D Laparoscopic &amp; Advanced Care</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-[#004b28]/5 border border-[#004b28]/10 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-[#004b28]">
                <Clock size={16} className="text-[#004b28]" />
                <span>Day Care / Fast Recovery</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href={siteInfo?.phones?.[0]?.href || "tel:919079765578"}
                className="inline-flex items-center gap-2.5 rounded-full bg-[#004b28] px-7 py-3.5 text-white font-medium text-base hover:bg-[#075540] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Phone size={18} />
                <span>Call +91 90797 65578</span>
              </a>

              <a
                href={siteInfo.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-white border border-[#004b28]/20 px-7 py-3.5 text-[#004b28] font-medium text-base hover:bg-[#004b28]/5 transition-all shadow-xs hover:-translate-y-0.5"
              >
                <MessageCircle size={18} className="text-[#25D366]" />
                <span>WhatsApp Consult</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OVERVIEW & DOCTOR HIGHLIGHT
      ========================================================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e181b5]">
                Medical Overview
              </span>
              <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-[#004b28] leading-tight">
                Understanding <span className="not-italic font-serif">{service.title}</span>
              </h2>
              <p className="text-base sm:text-lg text-[#1b2a26]/80 leading-relaxed font-light">
                {service.overview}
              </p>

              {/* Highlights List */}
              {Array.isArray(service.points) && service.points.length > 0 && (
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 bg-[#fbf5ee] p-3.5 rounded-2xl border border-[#004b28]/5">
                      <CheckCircle2 size={18} className="text-[#e181b5] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#004b28] font-medium">{pt}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Doctor Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#004b28]/10 group">
                <Image
                  src={drPriyanka.image || "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786608482/IMG_1_wx7atm.jpg"}
                  alt={drPriyanka.name || "Dr. Priyanka"}
                  width={600}
                  height={750}
                  className="w-full h-[460px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20">
                  <p className="font-display italic text-lg">Dr. Priyanka Pachauri</p>
                  <p className="text-xs text-white/80">MS (O&amp;G), FMAS, Advanced Infertility Fellowship</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          KEY BENEFITS & ADVANTAGES
      ========================================================= */}
      <section className="py-16 md:py-24 bg-[#fbf5ee]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#004b28]">
              Why Choose Our Care
            </span>
            <h2 className="mt-3 font-display italic text-3xl sm:text-4xl md:text-5xl text-[#004b28]">
              Key Benefits &amp; <span className="not-italic font-serif">Innovations</span>
            </h2>
            <p className="mt-4 text-base text-[#1b2a26]/70 max-w-xl mx-auto">
              Combining 3D technology, micro-surgical precision, and empathetic patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefitsToRender.map((benefitItem, idx) => {
              const { title, desc } = parseBenefit(benefitItem, idx);

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="rounded-3xl bg-white p-7 border border-[#004b28]/10 shadow-[0_10px_30px_rgba(0,75,40,0.04)] hover:shadow-[0_20px_45px_rgba(0,75,40,0.1)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-[#e181b5]/15 border border-[#e181b5]/30 flex items-center justify-center text-[#a32259] shrink-0 font-display italic text-xl font-bold">
                      0{idx + 1}
                    </div>
                    <h3 className="font-display italic text-xl text-[#004b28] leading-tight">
                      {title}
                    </h3>
                  </div>
                  {desc && (
                    <p className="text-sm text-[#1b2a26]/75 leading-relaxed font-light">
                      {desc}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================
          PROCEDURES & SPECTRUM OF CARE
      ========================================================= */}
      {Array.isArray(service.treatmentsIncluded) && service.treatmentsIncluded.length > 0 && (
        <section className="py-16 md:py-24 bg-white border-y border-[#004b28]/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 space-y-5">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e181b5]">
                  Spectrum of Procedures
                </span>
                <h2 className="font-display italic text-3xl sm:text-4xl lg:text-5xl text-[#004b28] leading-tight">
                  Procedures <span className="not-italic font-serif">&amp; Treatments</span>
                </h2>
                <p className="text-[#1b2a26]/80 text-base leading-relaxed font-light">
                  We perform targeted interventions using state-of-the-art medical instruments, tailored to your exact diagnosis and personal goals.
                </p>
                <div className="pt-2">
                  <a
                    href="tel:919079765578"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#004b28] hover:text-[#a32259] transition-colors"
                  >
                    <span>Discuss your diagnosis with Dr. Priyanka</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.treatmentsIncluded.map((treatment, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3.5 rounded-2xl border border-[#004b28]/10 bg-[#fbf5ee] p-5 hover:bg-[#004b28] hover:text-white transition-all duration-300 group"
                    >
                      <CheckCircle2 size={20} className="text-[#e181b5] shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                      <span className="text-sm font-medium text-[#004b28] group-hover:text-white leading-snug transition-colors">
                        {treatment}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* =========================================================
          WHEN TO CONSULT (CLINICAL SYMPTOMS)
      ========================================================= */}
      {Array.isArray(service.whenToConsult) && service.whenToConsult.length > 0 && (
        <section className="py-16 md:py-24 bg-[#fbf5ee]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#004b28]">
                Patient Awareness
              </span>
              <h2 className="mt-3 font-display italic text-3xl sm:text-4xl md:text-5xl text-[#004b28]">
                When Should You <span className="not-italic font-serif">Consult?</span>
              </h2>
              <p className="mt-4 text-base text-[#1b2a26]/75">
                If you experience any of the following symptoms or conditions, schedule an evaluation with Dr. Priyanka:
              </p>
            </div>

            <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.whenToConsult.map((symptom, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-[#004b28]/10 shadow-xs hover:border-[#004b28]/30 transition-all"
                >
                  <div className="h-8 w-8 rounded-full bg-[#004b28]/10 flex items-center justify-center text-[#004b28] shrink-0 font-bold text-xs mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-[#1b2a26]/85 leading-relaxed font-normal pt-1">
                    {symptom}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* =========================================================
          INTERACTIVE FREQUENTLY ASKED QUESTIONS (FAQ)
      ========================================================= */}
      {Array.isArray(service.faqs) && service.faqs.length > 0 && (
        <section className="py-16 md:py-24 bg-white border-y border-[#004b28]/10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e181b5]">
                Patient Clarity
              </span>
              <h2 className="mt-3 font-display italic text-3xl sm:text-4xl text-[#004b28]">
                Frequently Asked <span className="not-italic font-serif">Questions</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#1b2a26]/70">
                Clear answers regarding procedures, recovery, and treatments.
              </p>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => {
                const isOpen = !!openFaqs[idx];

                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-[#004b28]/40 bg-white shadow-md"
                        : "border-[#004b28]/15 bg-[#fbf5ee] hover:bg-white/80"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5">
                        <span
                          className={`h-7 px-2.5 rounded-full text-xs font-bold flex items-center justify-center shrink-0 transition-colors ${
                            isOpen
                              ? "bg-[#004b28] text-white"
                              : "bg-[#004b28]/10 text-[#004b28]"
                          }`}
                        >
                          Q{String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display italic text-lg sm:text-xl text-[#004b28] font-medium leading-snug">
                          {faq.question}
                        </span>
                      </div>

                      <div
                        className={`h-9 w-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 bg-[#004b28] text-white shadow-sm"
                            : "bg-[#004b28]/10 text-[#004b28] hover:bg-[#004b28] hover:text-white"
                        }`}
                      >
                        <ChevronDown size={18} />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#1b2a26]/85 leading-relaxed font-light border-t border-[#004b28]/10 pl-6 sm:pl-16">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* =========================================================
          DOCTOR SPOTLIGHT CARD
      ========================================================= */}
      <section className="py-16 md:py-20 bg-[#fbf5ee]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-[36px] bg-gradient-to-br from-[#004b28] via-[#075540] to-[#00381e] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#e181b5]/20 blur-[100px]" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="h-28 w-28 rounded-full bg-white/10 border-2 border-[#e181b5] flex items-center justify-center text-white mb-4 shadow-inner">
                  <Stethoscope size={48} strokeWidth={1.4} />
                </div>
                <h3 className="font-display italic text-2xl text-white">
                  {drPriyanka.name || "Dr. Priyanka Pachauri"}
                </h3>
                <p className="text-xs text-[#e181b5] uppercase tracking-wider font-semibold mt-1">
                  Obstetrician, Gynecologist &amp; IVF Specialist
                </p>
              </div>

              <div className="md:col-span-8 space-y-4 text-white/90">
                <p className="text-sm sm:text-base leading-relaxed font-light">
                  {drPriyanka.bio || "A highly distinguished specialist dedicated to combining advanced 3D laparoscopic surgical precision with compassionate maternal and fertility care."}
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setAppointmentModalOpen(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#e181b5] px-6 py-2.5 text-white font-medium text-sm hover:bg-[#d83b79] transition-all shadow-sm cursor-pointer"
                  >
                    <Calendar size={16} />
                    <span>Book Consultation</span>
                  </button>
                  <a
                    href={siteInfo.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-2.5 text-white font-medium text-sm transition-all"
                  >
                    <MessageCircle size={16} />
                    <span>Ask Question on WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          EXPLORE OTHER SPECIALITIES & TESTIMONIALS & CTA
      ========================================================= */}
      <ExploreMoreSpecialities currentSlug={service.slug} />
      <Testimonials />
      <CTASection />

      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
      />
    </main>
  );
}
