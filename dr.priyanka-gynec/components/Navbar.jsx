"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks, siteInfo } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#fbf2f2]/95 backdrop-blur-md shadow-sm py-3"
          : "bg-gradient-to-b from-[#fbf2f2] via-[#fbf2f2]/90 to-transparent py-4 md:py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between">
        {/* Brand Logo with Pink Lotus Icon matching shanthigynec.com */}
        <Link href="/" className="flex items-center gap-1.5 group">
          <span className="font-display italic text-2xl md:text-[28px] text-[#004b28] tracking-tight">
            Dr. Priyanka
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[#e181b5] shrink-0"
          >
            <path
              d="M12 4C12 4 8 9 8 13C8 16 10 18 12 18C14 18 16 16 16 13C16 9 12 4 12 4Z"
              fill="currentColor"
              opacity="0.9"
            />
            <path
              d="M12 18C8.5 18 4 15 4 11C4 8.5 6 6.5 6 6.5C6 6.5 6.5 10.5 9.5 13C10.5 13.8 11.3 14.2 12 14.4V18Z"
              fill="currentColor"
              opacity="0.7"
            />
            <path
              d="M12 18C15.5 18 20 15 20 11C20 8.5 18 6.5 18 6.5C18 6.5 17.5 10.5 14.5 13C13.5 13.8 12.7 14.2 12 14.4V18Z"
              fill="currentColor"
              opacity="0.7"
            />
          </svg>
          <span className="font-display text-2xl md:text-[28px] text-[#004b28] tracking-tight">
            Gynec
          </span>
        </Link>

        {/* Navigation Links in Radley Italic Dark Green text */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 font-display italic text-[1.125rem] text-[#004b28] hover:underline decoration-[#004b28] underline-offset-4 transition-all py-2"
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      dropdown ? "rotate-180" : ""
                    }`}
                  />
                </Link>
                <AnimatePresence>
                  {dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64"
                    >
                      <div className="bg-[#fbf2f2] rounded-2xl shadow-xl shadow-[#004b28]/10 border border-[#e181b5]/20 overflow-hidden">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-3.5 text-sm font-display italic text-[#004b28] hover:bg-[#efa5c2]/20 transition-colors border-b border-black/5 last:border-none"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="font-display italic text-[1.125rem] text-[#004b28] hover:underline decoration-[#004b28] underline-offset-4 transition-all relative group py-2"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Primary CTA Button matching shanthigynec.com */}
        <div className="flex items-center gap-4">
          <a
            href="#contact-numbers"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-[#e181b5] text-[#fbf2f2] font-display italic text-[1.125rem] px-6 py-2.5 border border-[#e181b5] hover:bg-transparent hover:text-[#e181b5] transition-all duration-500 shadow-sm"
          >
            Call for Appointment
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-[#004b28]"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-[#fbf2f2] border-t border-[#e181b5]/20 mt-4 shadow-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-[#004b28]/10 py-1">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-xl font-display italic text-[#004b28]"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 pb-3 flex flex-col gap-2.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="text-base font-display italic text-[#004b28]/80 hover:text-[#e181b5]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-5 flex flex-col gap-2 text-sm text-[#004b28]/70">
                {siteInfo.phones.map((p) => (
                  <a key={p.href} href={p.href} className="hover:text-[#e181b5]">
                    {p.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
