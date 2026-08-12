"use client";

import { motion } from "framer-motion";

const trustPoints = [
  {
    title: "Expertise with Heart",
    body: "Gold medal credentials, international fellowships, and recognition as leaders in laparoscopy, fertility treatment, and expert endometriosis care across India.",
    icon:
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786383398/doctor-assuarence-1_fkbvtx.svg",
  },
  {
    title: "Continuity You Can Count On",
    body: "From first visit through every follow-up, an integrated team that knows your history, remembers your concerns, and ensures seamless care at every stage.",
    icon:
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786383398/lotus-flower-1_da12vz.svg",
  },
  {
    title: "The Outcomes You Hope For",
    body: "Successful pregnancies after years of trying. Pain-free living after endometriosis. Minimally invasive surgeries that protect fertility. Healthy, thriving children under expert care.",
    icon:
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786383397/desktop-moniter-showing-baby-image-1_zcofsl.svg",
  },
  {
    title: "Her Trust, Earned Daily",
    body: "Our reputation isn’t built on marketing—it’s built on mothers telling daughters, friends referring friends, and families returning because they’ve experienced care that truly puts them first.",
    icon:
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786383397/ayurveda-symbol-1_ylxp2i.svg",
  },
];

export default function WhyTrust() {
  return (
    <section className="bg-[#fbf5ee] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-10 text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-[#004B28] leading-[1.15]">
            Why women across India{" "}
            <span className="block">
              <em className="font-display italic">trust</em> Dr. Priyanka{" "}
              <em className="font-display italic">Gynec</em>
            </span>
          </h2>
        </motion.div>

        {/* Center Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-16 md:mb-20"
        >
          <img
            src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1786294075/lady-practicing-yoga-1024x815_arma6v.webp"
            alt="Woman practicing yoga"
            width={480}
            height={382}
            className="w-80 md:w-[28rem] h-auto object-contain"
          />
        </motion.div>

        {/* Four Trust Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-20 gap-y-14 md:gap-y-20">

          {trustPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
              }}
              className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-5 md:gap-8"
            >

              {/* ICON */}
              <div className="shrink-0 w-[76px] md:w-[82px] flex items-center justify-center">
                <img
                  src={point.icon}
                  alt=""
                  className="w-[76px] md:w-[82px] h-auto object-contain"
                />
              </div>

              {/* TEXT */}
              <div className="flex-1 text-center md:text-left">
                <h3
                  className="
                    font-display
                    text-[27px]
                    md:text-[30px]
                    leading-[1.2]
                    font-medium
                    text-[#005536]
                    mb-5
                  "
                >
                  {point.title}
                </h3>

                <p
                  className="
                    text-[17px]
                    md:text-[18px]
                    leading-[1.6]
                    text-[#111111]
                  "
                >
                  {point.body}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}