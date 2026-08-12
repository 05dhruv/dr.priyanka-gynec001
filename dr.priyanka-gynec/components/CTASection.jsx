"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteInfo } from "@/data/site";

export default function CTASection() {
  return (
    <section
      id="contact-numbers"
      className="relative py-14 md:py-18 bg-cream text-green-900 overflow-hidden scroll-mt-24"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start order-1">
  <motion.div
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative lg:-ml-10"
  >
    {/* Arch Shape Container */}
    <div className="overflow-hidden rounded-b-[320px]">
      <Image
        src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1786522486/ChatGPT_Image_Aug_12_2026_01_44_14_PM_eovk1z.png"
        alt="Shanthi Gynec"
        width={1200}
        height={1200}
        priority
        className="w-[520px] md:w-[620px] lg:w-[720px] h-auto object-contain"
      />
    </div>
  </motion.div>
</div>

          {/* Right Content */}
          <div className="text-left order-2">
            {/* Heading Motion */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8 text-green-800"
            >
              Care, that puts
              <br />
              <span className="italic">You First</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="text-green-900/90 text-lg md:text-xl leading-relaxed mb-6 max-w-xl"
            >
              Ready to meet a team that truly listens? Schedule your
              consultation and discover healthcare designed around your
              life, your choices, and your story.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="text-green-900/90 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            >
              Call us or send a message for appointment queries,
              directions, or quick questions.
            </motion.p>

            {/* Phone Numbers */}
            <div className="space-y-2">
              {siteInfo.phones.map((p, i) => (
                <motion.a
                  key={p.href}
                  href={p.href}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.35 + i * 0.1,
                    duration: 0.6,
                  }}
                  className="block font-display italic text-2xl md:text-3xl text-green-800 hover:text-green-600 transition-colors"
                >
                  {p.label}
                </motion.a>
              ))}

              {/* WhatsApp */}
              <motion.a
                href={siteInfo.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.75,
                  duration: 0.6,
                }}
                className="block font-display italic text-2xl md:text-3xl text-green-800 hover:text-green-600 transition-colors"
              >
                {siteInfo.whatsapp.label}
                <span className="ml-2 text-lg not-italic">
                  (WhatsApp)
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}