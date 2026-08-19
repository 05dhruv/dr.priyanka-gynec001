"use client";

import { motion } from "framer-motion";
import { MessageCircle, PhoneCall } from "lucide-react";
import { siteInfo } from "@/data/site";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3">
      <motion.a
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href={siteInfo.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-black/20"
      >
        <MessageCircle size={26} />
      </motion.a>
      <motion.a
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.75, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href={siteInfo?.phones?.[0]?.href || "tel:919079765578"}
        aria-label="Call for appointment"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-wine text-cream flex items-center justify-center shadow-lg shadow-black/20"
      >
        <PhoneCall size={24} />
      </motion.a>
    </div>
  );
}
