"use client";

import { useEffect, useRef, useState } from "react";

const techs = [
  { title: "High-Definition 3D", sub: "Laparoscopic Surgery" },
  { title: "Volusun E22BT2024, with 3d", sub: "& 4D ultrasound machine" },
  { title: "GERI time-lapse imaging", sub: "incubator" },
  { title: "AI-powered semen analysis", sub: "and DNA integrity testing" },
];

function FadeUpHeading() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <h2
      ref={ref}
      className="font-serif text-4xl md:text-5xl lg:text-[3.2rem] leading-[1.1] text-[#004b28]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(40px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      Empowering <span className="font-display italic">Women and Families</span> through
      advanced medical technology
    </h2>
  );
}

export default function TechShowcase() {
  return (
    <section className="relative bg-[#fbf5ee] py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <FadeUpHeading />

          <div className="flex justify-center md:justify-end">
            <div
              className="relative w-full max-w-lg md:max-w-2xl aspect-[2/1] overflow-hidden shadow-sm"
              style={{ borderRadius: "999px 999px 0 0" }}
            >
              <img
                src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1786294075/pregwomam-holding-scaning-repot_avsrx1.webp"
                alt="Expectant mother holding an ultrasound scan"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <div className="rounded-2xl border-2 border-[#004b28] bg-white/40">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {techs.map((t, i) => (
                <div
                  key={i}
                  className={`px-8 py-10 flex items-center justify-center text-center
                    ${i !== 0 ? "sm:border-l border-t sm:border-t-0 border-[#004b28]" : ""}
                    ${i === 2 ? "lg:border-l border-[#004b28]" : ""}
                  `}
                >
                  <p className="font-serif text-base md:text-lg leading-snug text-[#2B2320]">
                    {t.title}
                    <br />
                    {t.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}