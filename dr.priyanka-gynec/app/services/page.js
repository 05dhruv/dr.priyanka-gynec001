"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

import {
  Activity,
  Baby,
  Bone,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  ClipboardPlus,
  FlaskConical,
  HeartPulse,
  Microscope,
  Scissors,
  Search,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import { services as serviceData } from "@/data/site";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

/* =========================================================
   SERVICE ICONS
========================================================= */

function getServiceIcon(service) {
  const slug = service?.slug?.toLowerCase() || "";

  const iconMap = {
    /* Main Services */
    "fertility-ivf": FlaskConical,
    "pregnancy-birthing": HeartPulse,
    "antenatal-services": HeartPulse,
    paediatrics: Baby,
    "laparoscopy-gynecology": Microscope,

    /* Laparoscopic Services */
    cystectomy: CircleDot,
    "laparoscopic-cystectomy": CircleDot,
    myomectomy: Activity,
    "laparoscopic-myomectomy": Activity,
    hysterectomy: Scissors,
    "laparoscopic-hysterectomy": Scissors,
    sacrocolpopexy: Bone,
    sterilization: ShieldCheck,

    /* Hysteroscopy */
    "diagnostic-hysteroscopy": Search,
    polypectomy: ClipboardPlus,

    /* Maternity */
    "normal-delivery": Baby,

    /* Endometriosis */
    "endometriosis-surgery": HeartPulse,
  };

  return iconMap[slug] || Stethoscope;
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
  service,
  index,
  onHoverStart,
  onHoverEnd,
}) {
  const Icon = getServiceIcon(service);

  return (
    <div
      className="h-full px-2 md:px-3"
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <article
        className="
          group
          relative
          flex
          h-full
          min-h-[360px] sm:min-h-[410px]
          flex-col
          overflow-hidden
          rounded-[24px] sm:rounded-[28px]
          border
          border-[#004b28]/10
          bg-[#fffaf7]
          p-5 sm:p-7
          shadow-[0_15px_45px_rgba(0,75,40,0.07)]
          transition-all
          duration-500
          hover:-translate-y-2
          hover:shadow-[0_25px_60px_rgba(0,75,40,0.14)]
        "
      >
        {/* Decorative background circle */}

        <div
          className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            h-40
            w-40
            rounded-full
            bg-[#e181b5]/10
            transition-transform
            duration-700
            group-hover:scale-125
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-20
            -left-20
            h-48
            w-48
            rounded-full
            border
            border-[#004b28]/5
          "
        />

        {/* =================================================
            TOP
        ================================================= */}

        <div className="relative z-10 mb-7 flex items-center justify-between">
          {/* Number */}

          <span
            className="
              font-display
              text-sm
              italic
              tracking-[0.18em]
              text-[#004b28]/40
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* ICON */}

          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-[#e181b5]/30
              bg-[#fceff3]
              text-[#004b28]
              transition-all
              duration-500
              group-hover:rotate-6
              group-hover:border-[#e181b5]
              group-hover:bg-[#e181b5]
              group-hover:text-white
            "
          >
            <Icon
              size={28}
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="relative z-10 flex flex-1 flex-col">
          {/* Category */}

          <p
            className="
              mb-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#e181b5]
            "
          >
            Women&apos;s Healthcare
          </p>

          {/* Title */}

          <h2
            className="
              max-w-[90%]
              font-display
              text-[27px]
              leading-[1.12]
              italic
              text-[#004b28]
              md:text-[29px]
            "
          >
            <Link
              href={`/services/${service?.slug || ""}`}
              className="hover:text-[#e181b5] transition-colors"
            >
              {service?.title || "Specialized Care"}
            </Link>
          </h2>

          {/* Description */}

          <p
            className="
              mt-5
              text-[14px]
              leading-7
              text-[#004b28]/65
            "
          >
            {service?.blurb ||
              service?.homeBlurb ||
              "Compassionate and personalized healthcare designed around your needs."}
          </p>

          {/* =================================================
              SERVICE POINTS
          ================================================= */}

          {Array.isArray(service?.points) &&
            service.points.length > 0 && (
              <div className="mt-6 space-y-2.5">
                {service.points.slice(0, 3).map((point, pointIndex) => (
                  <div
                    key={`${service?.slug}-${pointIndex}`}
                    className="flex items-start gap-2.5"
                  >
                    <span
                      className="
                        mt-[9px]
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-[#e181b5]
                      "
                    />

                    <span
                      className="
                        text-[13px]
                        leading-6
                        text-[#004b28]/60
                      "
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            )}
        </div>

        {/* =================================================
            BOTTOM LINK
        ================================================= */}

        <div
          className="
            relative
            z-10
            mt-7
            border-t
            border-[#004b28]/10
            pt-5
          "
        >
          <Link
            href={`/services/${service?.slug || ""}`}
            className="
              inline-flex
              items-center
              gap-2
              font-display
              text-[16px]
              italic
              text-[#004b28]
              transition-all
              duration-300
              group-hover:gap-3
            "
          >
            Explore Service

            <ChevronRight
              size={17}
              strokeWidth={1.6}
            />
          </Link>
        </div>
      </article>
    </div>
  );
}

/* =========================================================
   SERVICES CAROUSEL
========================================================= */

function ServicesCarousel() {
  /*
    Important:
    services ko safe array banaya gaya hai.
    Isse services undefined hone par .map() error nahi aayega.
  */

  const services = Array.isArray(serviceData)
    ? serviceData
    : [];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: false,
    containScroll: "trimSnaps",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const autoplayRef = useRef(null);

  /* =======================================================
     SELECT CURRENT SLIDE
  ======================================================= */

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(
      emblaApi.selectedScrollSnap()
    );
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  /* =======================================================
     START AUTOPLAY
  ======================================================= */

  const startAutoplay = useCallback(() => {
    if (!emblaApi) return;

    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }

    autoplayRef.current = setInterval(() => {
      if (!emblaApi) return;

      emblaApi.scrollNext();
    }, 2500);
  }, [emblaApi]);

  /* =======================================================
     STOP AUTOPLAY
  ======================================================= */

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);

      autoplayRef.current = null;
    }
  }, []);

  /* =======================================================
     AUTOPLAY STATE
  ======================================================= */

  useEffect(() => {
    if (!emblaApi) return;

    if (isPaused) {
      stopAutoplay();
    } else {
      startAutoplay();
    }

    return () => {
      stopAutoplay();
    };
  }, [
    emblaApi,
    isPaused,
    startAutoplay,
    stopAutoplay,
  ]);

  /* =======================================================
     PREVIOUS
  ======================================================= */

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;

    emblaApi.scrollPrev();

    stopAutoplay();

    if (!isPaused) {
      startAutoplay();
    }
  }, [
    emblaApi,
    isPaused,
    startAutoplay,
    stopAutoplay,
  ]);

  /* =======================================================
     NEXT
  ======================================================= */

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;

    emblaApi.scrollNext();

    stopAutoplay();

    if (!isPaused) {
      startAutoplay();
    }
  }, [
    emblaApi,
    isPaused,
    startAutoplay,
    stopAutoplay,
  ]);

  /* =======================================================
     EMPTY STATE
  ======================================================= */

  if (!services.length) {
    return (
      <section className="bg-[#fbf4ef] py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Stethoscope
            className="mx-auto mb-5 text-[#004b28]"
            size={42}
            strokeWidth={1.3}
          />

          <p
            className="
              font-display
              text-xl
              italic
              text-[#004b28]
            "
          >
            Services are currently unavailable.
          </p>
        </div>
      </section>
    );
  }

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#fbf4ef]
        py-12
        md:py-20
      "
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-10 md:mb-12 max-w-2xl mx-auto text-center">
          
          <h1
            className="
              font-display
              text-4xl
              leading-[1.05]
              italic
              text-[#004b28]
              sm:text-5xl
              md:text-6xl
            "
          >
            Care designed around{" "}
            <br className="hidden sm:block" />
            <span className="text-[#004b28]/75">
              her journey.
            </span>
          </h1>

          <p
            className="
              mt-5
              max-w-xl
              mx-auto
              text-[15px]
              leading-7
              text-[#004b28]/65
              md:text-base
            "
          >
            From fertility and pregnancy care to
            advanced minimally invasive procedures,
            explore our specialized women&apos;s
            healthcare services.
          </p>
        </div>

        {/* =================================================
            EMBLA VIEWPORT (CARDS)
        ================================================= */}

        <div
          ref={emblaRef}
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="-ml-2 flex md:-ml-3">
            {services.map((service, index) => (
              <div
                key={
                  service?.slug ||
                  `service-${index}`
                }
                className="
                  min-w-0
                  shrink-0
                  grow-0
                  basis-full
                  pl-2
                  sm:basis-1/2
                  md:pl-3
                  lg:basis-1/3
                "
              >
                <ServiceCard
                  service={service}
                  index={index}
                  onHoverStart={() =>
                    setIsPaused(true)
                  }
                  onHoverEnd={() =>
                    setIsPaused(false)
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {/* =================================================
            NAVIGATION BUTTONS (CENTERED BELOW CARDS)
        ================================================= */}

        <div className="mt-8 md:mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous service"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-[#004b28]/15
              bg-white
              text-[#004b28]
              transition-all
              duration-300
              hover:bg-[#004b28]
              hover:text-white
            "
          >
            <ChevronLeft
              size={21}
              strokeWidth={1.5}
            />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next service"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-[#004b28]/15
              bg-white
              text-[#004b28]
              transition-all
              duration-300
              hover:bg-[#004b28]
              hover:text-white
            "
          >
            <ChevronRight
              size={21}
              strokeWidth={1.5}
            />
          </button>
        </div>

      </div>
    </section>
  );
}

/* =========================================================
   SERVICES PAGE
========================================================= */

import ExploreMoreSpecialities from "@/components/ExploreMoreSpecialities";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#fbf4ef]">

      {/* HERO */}

      <PageHero
        title="Specialized Care for Every Stage"
        description="Expert women's healthcare with a compassionate, personalized approach."
      />

      {/* SERVICE CAROUSEL */}

      <ServicesCarousel />

      {/* EXPLORE MORE SPECIALITIES GRID */}

      <ExploreMoreSpecialities />

      {/* CTA */}

      <CTASection />

    </main>
  );
}