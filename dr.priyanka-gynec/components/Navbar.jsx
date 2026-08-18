"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks, siteInfo } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const pathname = usePathname();

  // Blur / transparent navbar only on homepage
  const isHomePage = pathname === "/";

  // Find Specialities menu
  const specialityLink = navLinks.find(
    (link) => link.children && link.children.length > 0
  );

  /* =====================================================
     SCROLL
  ===================================================== */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* =====================================================
     BODY SCROLL LOCK - MOBILE
  ===================================================== */

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* =====================================================
     CLOSE DROPDOWN WHEN ROUTE CHANGES
  ===================================================== */

  useEffect(() => {
    setDropdown(false);
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isHomePage
          ? scrolled
            ? "bg-[#fbf5ee]/95 backdrop-blur-md shadow-sm py-3"
            : "bg-gradient-to-b from-[#fbf5ee] via-[#fbf5ee]/90 to-transparent py-4 md:py-5"
          : "bg-[#fbf5ee] shadow-sm py-3"
      }`}
      onMouseLeave={() => setDropdown(false)}
    >
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between">
        {/* ================= LOGO ================= */}

        <Link
          href="/"
          className="flex items-center gap-1.5 group shrink-0"
        >
          <span className="font-display italic text-2xl md:text-[28px] text-[#004b28] tracking-tight">
            Dr. Priyanka
          </span>

          {/* LOTUS ICON */}
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

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const hasChildren =
              link.children && link.children.length > 0;

            /* =================================================
               SPECIALITIES
            ================================================= */

            if (hasChildren) {
              return (
                <div
                  key={link.label}
                  className="relative h-full group"
                  onMouseEnter={() => setDropdown(true)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 py-3 font-display italic text-[1.125rem] text-[#004b28] hover:text-[#e181b5] hover:underline decoration-[#e181b5] underline-offset-4 transition-all duration-300"
                  >
                    {link.label}

                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        dropdown ? "rotate-180 text-[#e181b5]" : ""
                      }`}
                    />
                  </Link>
                </div>
              );
            }

            /* =================================================
               NORMAL NAV LINK
            ================================================= */

            return (
              <Link
                key={link.href}
                href={link.href}
                className="font-display italic text-[1.125rem] text-[#004b28] hover:text-[#e181b5] hover:underline decoration-[#e181b5] underline-offset-4 transition-all duration-300 py-3"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* =====================================================
            CTA + MOBILE BUTTON
        ===================================================== */}

        <div className="flex items-center gap-4">
          <a
            href="#contact-numbers"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-[#e181b5] text-[#fbf2f2] font-display italic text-[1.125rem] px-6 py-2.5 border border-[#e181b5] hover:bg-transparent hover:text-[#e181b5] transition-all duration-500 shadow-sm"
          >
            Call for Appointment
          </a>

          {/* MOBILE MENU BUTTON */}

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-[#004b28]"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* =====================================================
          FULL WIDTH SPECIALITIES MEGA DROPDOWN
      ===================================================== */}

      <AnimatePresence>
        {dropdown && specialityLink && (
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            transition={{
              duration: 0.22,
              ease: "easeOut",
            }}
            className="absolute left-0 top-full w-full z-[110]"
            onMouseEnter={() => setDropdown(true)}
          >
            <div className="w-full bg-[#fbf5ee] border-t border-[#004b28]/10 border-b border-[#004b28]/10 shadow-[0_20px_45px_rgba(0,75,40,0.14)]">
              <div className="mx-auto max-w-7xl px-8 md:px-12 lg:px-16">
                {/* =================================================
                    FOUR CATEGORY COLUMNS
                ================================================= */}

                <div className="grid grid-cols-4 py-9 gap-6">
                  {specialityLink.children.map((col, index) => (
                    <div
                      key={col.category}
                      className={
                        index > 0
                          ? "border-l border-[#004b28]/10 pl-6"
                          : ""
                      }
                    >
                      {/* CATEGORY TITLE */}

                      <p className="mb-4 text-[13px] uppercase tracking-[0.2em] font-sans font-semibold text-[#e181b5]">
                        {col.category}
                      </p>

                      {/* SERVICES */}

                      <div className="flex flex-col gap-1.5">
                        {col.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setDropdown(false)}
                            className="group flex items-center justify-between py-1.5 font-display italic text-[18px] md:text-[19px] text-[#004b28] hover:text-[#e181b5] transition-colors"
                          >
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                              {item.label}
                            </span>

                            <span className="text-[#e181b5] opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs">
                              →
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* =================================================
                    BOTTOM STRIP
                ================================================= */}

                <div className="border-t border-[#004b28]/10 py-4 flex items-center justify-between">
                  <p className="font-display italic text-sm text-[#004b28]/60">
                    Compassionate care for every stage of her journey.
                  </p>

                  <Link
                    href={specialityLink.href}
                    onClick={() => setDropdown(false)}
                    className="font-display italic text-sm text-[#004b28] hover:text-[#e181b5] transition-colors"
                  >
                    View all specialities →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="lg:hidden overflow-hidden bg-[#fbf5ee] border-t border-[#e181b5]/20 shadow-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="border-b border-[#004b28]/10 py-1"
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-xl font-display italic text-[#004b28] hover:text-[#e181b5] transition-colors"
                  >
                    {link.label}
                  </Link>

                  {/* MOBILE SPECIALITIES */}

                  {link.children && (
                    <div className="pl-4 pb-3 flex flex-col gap-3">
                      {link.children.map((col) => (
                        <div
                          key={col.category}
                          className="flex flex-col gap-1.5"
                        >
                          <span className="text-sm uppercase tracking-wider font-sans font-semibold text-[#e181b5]">
                            {col.category}
                          </span>

                          <div className="flex flex-col gap-1 pl-2">
                            {col.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="text-lg text-[18px] font-display italic text-[#004b28]/80 hover:text-[#e181b5]"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* PHONE NUMBERS */}

              <div className="mt-5 flex flex-col gap-2 text-sm text-[#004b28]/70">
                {siteInfo.phones.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="hover:text-[#e181b5]"
                  >
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