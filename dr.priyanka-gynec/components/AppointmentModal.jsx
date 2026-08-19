"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, Calendar, Clock, Phone, User, CheckCircle2, Send, Stethoscope, AlertCircle } from "lucide-react";
import { siteInfo, services } from "@/data/site";

export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    speciality: "",
    preferred_date: "",
    time_slot: "Morning (10:00 AM - 1:00 PM)",
    notes: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Lock body scroll and reset form state whenever modal is opened or closed
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setErrorMsg("");
    } else {
      document.body.style.overflow = "";
      // Reset form data completely every time modal closes
      setFormData({
        name: "",
        phone: "",
        speciality: "",
        preferred_date: "",
        time_slot: "Morning (10:00 AM - 1:00 PM)",
        notes: "",
      });
      setSubmitted(false);
      setErrorMsg("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Name: Alphabets and spaces only
  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setFormData((prev) => ({ ...prev, name: value }));
    if (errorMsg) setErrorMsg("");
  };

  // Phone: Numbers only, max 10 digits with instant invalid prefix notification
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: value }));

    if (value.length > 0 && !/^[6-9]/.test(value)) {
      setErrorMsg("Invalid mobile number.");
    } else {
      if (errorMsg === "Invalid mobile number.") {
        setErrorMsg("");
      }
    }
  };

  // Generic change handler for all controlled fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = (e) => {
    // Strict Validations
    if (!formData.name.trim()) {
      e.preventDefault();
      setErrorMsg("Please enter your full name (alphabets only).");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      e.preventDefault();
      setErrorMsg("Invalid mobile number.");
      // Refresh form data back to blank on invalid submit
      setFormData({
        name: "",
        phone: "",
        speciality: "",
        preferred_date: "",
        time_slot: "Morning (10:00 AM - 1:00 PM)",
        notes: "",
      });
      return;
    }

    if (!formData.speciality) {
      e.preventDefault();
      setErrorMsg("Please select a speciality.");
      return;
    }

    if (!formData.preferred_date) {
      e.preventDefault();
      setErrorMsg("Please select a preferred appointment date.");
      return;
    }

    setErrorMsg("");
    // Native HTML FormSubmit.co submission proceeds to drpriyankagynec@gmail.com
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMsg("");
    setFormData({
      name: "",
      phone: "",
      speciality: "",
      preferred_date: "",
      time_slot: "Morning (10:00 AM - 1:00 PM)",
      notes: "",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Centered Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-white rounded-[28px] shadow-[0_25px_60px_rgba(0,0,0,0.3)] border border-[#004b28]/15 overflow-hidden z-10 my-auto"
          >
            {/* TOP BRANDING HEADER */}
            <div className="bg-[#004b28] p-5 sm:p-6 text-white relative flex items-center justify-between border-b border-[#9ecaba]/20">
              <div className="flex items-center gap-3.5">
                {/* Doctor Avatar */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#e181b5] shrink-0 bg-white/10">
                  <Image
                    src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1786608482/IMG_1_wx7atm.jpg"
                    alt="Dr. Priyanka"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#e181b5] font-semibold uppercase tracking-wider">
                    <Stethoscope size={13} />
                    <span>Dr. Priyanka Gynec</span>
                  </div>
                  <h2 className="font-display italic text-xl sm:text-2xl text-white font-medium">
                    Book <span className="not-italic font-serif">Appointment</span>
                  </h2>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleReset}
                aria-label="Close modal"
                className="h-8 w-8 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            {/* MODAL BODY CONTENT */}
            <div className="p-5 sm:p-7 max-h-[80vh] overflow-y-auto">
              {submitted ? (
                /* SUCCESS STATE */
                <div className="text-center py-6 space-y-4">
                  <div className="mx-auto w-14 h-14 rounded-full bg-[#004b28]/10 text-[#004b28] flex items-center justify-center">
                    <CheckCircle2 size={34} />
                  </div>

                  <h3 className="font-serif text-[#004b28] text-2xl">
                    Request Submitted!
                  </h3>

                  <p className="text-sm text-[#1b2a26]/80 font-light leading-relaxed max-w-sm mx-auto">
                    Thank you <strong className="font-semibold text-[#004b28]">{formData.name}</strong>. Our care coordinator will call you back at <strong className="font-semibold text-[#004b28]">{formData.phone}</strong> to confirm your slot.
                  </p>

                  <div className="bg-[#fbf5ee] p-3.5 rounded-xl border border-[#004b28]/10 text-left text-xs text-[#004b28]/80 space-y-1">
                    <p><span className="font-bold">Clinic Location:</span> Gandhi Nagar, Moradabad</p>
                    <p><span className="font-bold">Direct Call:</span> +91 90797 65578</p>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-[#004b28] text-white font-display italic text-base hover:bg-[#075540] transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                /* FORM INPUTS WITH FORMSUBMIT.CO DIRECT EMAIL INTEGRATION */
                <form
                  action="https://formsubmit.co/drpriyankagynec@gmail.com"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-3.5"
                >
                  {/* FORMSUBMIT HIDDEN CONFIGURATIONS */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Appointment Booking Request - Dr. Priyanka Gynec"
                  />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  {/* ERROR MESSAGE BANNER */}
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 font-medium animate-shake">
                      <AlertCircle size={16} className="shrink-0 text-red-500" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Full Name & Phone in 2 Columns on desktop */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#004b28] mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleNameChange}
                          placeholder="Enter Your Name"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#004b28]/20 bg-[#fbf5ee]/40 text-sm text-[#1b2a26] focus:bg-white focus:border-[#004b28] focus:outline-none transition-all pl-9"
                        />
                        <User size={15} className="absolute left-3 top-3 text-[#004b28]/50" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#004b28] mb-1">
                        Phone Number (10 Digits) *
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          required
                          maxLength={10}
                          pattern="[6-9][0-9]{9}"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          placeholder="Enter Your Number"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#004b28]/20 bg-[#fbf5ee]/40 text-sm text-[#1b2a26] focus:bg-white focus:border-[#004b28] focus:outline-none transition-all pl-9 font-mono"
                        />
                        <Phone size={15} className="absolute left-3 top-3 text-[#004b28]/50" />
                      </div>
                    </div>
                  </div>

                  {/* Speciality Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-[#004b28] mb-1">
                      Select Speciality *
                    </label>
                    <select
                      name="speciality"
                      required
                      value={formData.speciality}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#004b28]/20 bg-[#fbf5ee]/40 text-sm text-[#1b2a26] focus:bg-white focus:border-[#004b28] focus:outline-none transition-all"
                    >
                      <option value="" disabled>
                        Select Speciality
                      </option>
                      {Array.isArray(services) &&
                        services.map((s) => (
                          <option key={s.slug} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                    </select>
                  </div>

                  {/* Date & Time Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#004b28] mb-1">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          name="preferred_date"
                          required
                          value={formData.preferred_date}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#004b28]/20 bg-[#fbf5ee]/40 text-sm text-[#1b2a26] focus:bg-white focus:border-[#004b28] focus:outline-none transition-all pl-9"
                        />
                        <Calendar size={15} className="absolute left-3 top-3 text-[#004b28]/50 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#004b28] mb-1">
                        Time Slot
                      </label>
                      <div className="relative">
                        <select
                          name="time_slot"
                          value={formData.time_slot}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#004b28]/20 bg-[#fbf5ee]/40 text-sm text-[#1b2a26] focus:bg-white focus:border-[#004b28] focus:outline-none transition-all pl-9"
                        >
                          <option value="Morning (10:00 AM - 1:00 PM)">Morning (10 AM - 1 PM)</option>
                          <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2 PM - 5 PM)</option>
                          <option value="Evening (5:00 PM - 8:00 PM)">Evening (5 PM - 8 PM)</option>
                        </select>
                        <Clock size={15} className="absolute left-3 top-3 text-[#004b28]/50 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Notes / Symptoms */}
                  <div>
                    <label className="block text-xs font-semibold text-[#004b28] mb-1">
                      Notes / Health Concern (Optional)
                    </label>
                    <textarea
                      name="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Mention any symptoms or questions..."
                      className="w-full px-3.5 py-2 rounded-xl border border-[#004b28]/20 bg-[#fbf5ee]/40 text-sm text-[#1b2a26] focus:bg-white focus:border-[#004b28] focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 px-6 rounded-full bg-[#004b28] hover:bg-[#075540] text-white font-display italic text-base font-medium flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 cursor-pointer"
                    >
                      <Send size={16} />
                      <span>Confirm & Send Appointment Request</span>
                    </button>
                  </div>

                  {/* Direct Call Strip */}
                  <div className="pt-2 text-center border-t border-[#004b28]/10">
                    <a
                      href="tel:919079765578"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#e181b5] hover:underline"
                    >
                      <Phone size={13} />
                      Direct Call Helpline: +91 90797 65578
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
