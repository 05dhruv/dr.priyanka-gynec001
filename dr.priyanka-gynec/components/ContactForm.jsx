"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send, Loader2 } from "lucide-react";

const initialForm = { name: "", phone: "", email: "", service: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.phone.trim()) next.phone = "Please enter a phone number.";
    else if (!/^[0-9+\-\s()]{7,}$/.test(form.phone))
      next.phone = "Please enter a valid phone number.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Please enter a valid email address.";
    if (!form.message.trim()) next.message = "Tell us a little about your query.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("submitting");
    // No backend is wired up — this simulates a submission for the UI only.
    setTimeout(() => {
      setStatus("success");
      setForm(initialForm);
    }, 900);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[28px] bg-white border border-wine/10 p-10 text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
          className="w-16 h-16 rounded-full bg-sage/10 text-sage flex items-center justify-center mb-6"
        >
          <CheckCircle2 size={32} />
        </motion.div>
        <h3 className="font-display text-2xl mb-3">Thank you for reaching out</h3>
        <p className="text-sm text-ink/60 max-w-sm mb-8">
          We&apos;ve received your message. Our team will get back to you shortly, or
          you can call us directly for an immediate response.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-wine underline underline-offset-4"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[28px] bg-white border border-wine/10 p-8 md:p-10"
    >
      <h3 className="font-display text-2xl mb-1">Send us a message</h3>
      <p className="text-sm text-ink/55 mb-8">
        For appointment queries, directions, or quick questions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <Field
          label="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Your name"
        />
        <Field
          label="Phone Number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder="+91 00000 00000"
        />
      </div>

      <div className="mb-5">
        <Field
          label="Email (optional)"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="you@example.com"
        />
      </div>

      <div className="mb-5">
        <label className="block text-xs font-semibold tracking-wide uppercase text-ink/50 mb-2">
          Speciality
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full rounded-xl border border-wine/15 bg-cream/40 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-wine/30 focus:border-wine transition-all"
        >
          <option value="">Select a speciality (optional)</option>
          <option value="Fertility & IVF">Fertility & IVF</option>
          <option value="Laparoscopy & Gynecology">Laparoscopy & Gynecology</option>
          <option value="Pregnancy & Birthing">Pregnancy & Birthing</option>
          <option value="Paediatrics">Paediatrics</option>
        </select>
      </div>

      <div className="mb-8">
        <label className="block text-xs font-semibold tracking-wide uppercase text-ink/50 mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="How can we help you?"
          className={`w-full rounded-xl border bg-cream/40 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
            errors.message
              ? "border-red-300 focus:ring-red-200"
              : "border-wine/15 focus:ring-wine/30 focus:border-wine"
          }`}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-xs text-red-500 mt-1.5"
            >
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-wine text-cream font-medium px-8 py-4 hover:bg-wine-deep transition-all duration-300 disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={17} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send size={16} /> Send Message
          </>
        )}
      </motion.button>
    </form>
  );
}

function Field({ label, name, value, onChange, error, placeholder, type = "text" }) {
  return (
    <div>
      <label className="block text-xs font-semibold tracking-wide uppercase text-ink/50 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-cream/40 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 transition-all ${
          error
            ? "border-red-300 focus:ring-red-200"
            : "border-wine/15 focus:ring-wine/30 focus:border-wine"
        }`}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-xs text-red-500 mt-1.5"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
