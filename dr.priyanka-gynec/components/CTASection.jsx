"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { siteInfo } from "@/data/site";
import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section
      id="contact-numbers"
      className="relative py-24 md:py-32 bg-wine text-cream grain-bg overflow-hidden scroll-mt-24"
    >
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose/20 blur-[120px]" />
      <div className="mx-auto max-w-5xl px-6 md:px-10 text-center relative z-10">
        <Reveal>
          <p className="leaf-divider justify-center text-rose text-xs tracking-[0.3em] uppercase mb-6">
            Get in touch
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-6 text-balance">
            Care, that puts <span className="italic text-rose">You First</span>
          </h2>
          <p className="max-w-xl mx-auto text-cream/75 mb-14 leading-relaxed">
            Ready to meet a team that truly listens? Schedule your consultation and
            discover healthcare designed around your life, your choices, and your
            story. Call us or send a message for appointment queries, directions, or
            quick questions.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {siteInfo.phones.map((p, i) => (
            <motion.a
              key={p.href}
              href={p.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="flex items-center justify-center gap-3 rounded-2xl bg-cream/10 border border-cream/15 px-6 py-5 font-display text-xl hover:bg-cream hover:text-wine transition-all duration-300"
            >
              <Phone size={18} />
              {p.label}
            </motion.a>
          ))}
        </div>

        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ y: -4 }}
          href={siteInfo.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] text-white px-6 py-5 font-display text-xl hover:brightness-95 transition-all duration-300 w-full sm:w-auto sm:px-14"
        >
          <MessageCircle size={18} />
          {siteInfo.whatsapp.label} (WhatsApp)
        </motion.a>
      </div>
    </section>
  );
}
