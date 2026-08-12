"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { iconMap } from "@/components/icons";

export default function ServiceCard({ service, index = 0 }) {
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between rounded-3xl bg-white border border-[#004b28]/10 p-7 md:p-8 hover:border-[#004b28]/30 hover:shadow-xl hover:shadow-[#004b28]/5 transition-all duration-300"
    >
      <div>
        <div className="w-14 h-14 rounded-2xl bg-[#fbf5ee] border border-[#004b28]/15 flex items-center justify-center text-[#004b28] mb-6 group-hover:bg-[#004b28] group-hover:text-white transition-colors duration-300">
          {Icon && <Icon size={26} strokeWidth={1.7} />}
        </div>

        <h3 className="font-display text-2xl md:text-3xl text-[#004b28] font-medium leading-tight mb-3">
          {service.title}
        </h3>

        <p className="text-[#111111]/80 text-base leading-relaxed mb-6">
          {service.blurb || service.homeBlurb}
        </p>

        {service.points && service.points.length > 0 && (
          <ul className="space-y-2 mb-6">
            {service.points.slice(0, 3).map((pt) => (
              <li key={pt} className="flex items-start gap-2.5 text-sm text-[#111111]/70">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#004b28] shrink-0" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link
        href={`/services/${service.slug}`}
        className="inline-flex items-center gap-2 font-display italic text-lg text-[#004b28] group-hover:text-[#075c43] group-hover:gap-3 transition-all duration-300 mt-2"
      >
        <span>Know More</span>
        <span className="text-xl">→</span>
      </Link>
    </motion.div>
  );
}
