"use client";

import { useState, useRef, useEffect } from "react";
import { Send, ChevronDown, Check } from "lucide-react";
import { services } from "@/data/site";

export default function ContactForm() {
  const [selectedService, setSelectedService] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [serviceError, setServiceError] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    if (!selectedService) {
      e.preventDefault();
      setServiceError(true);
      setIsOpen(true);
      return false;
    }
    setServiceError(false);
  };

  return (
    <div className="bg-white border border-wine/10 rounded-[28px] sm:rounded-[32px] p-5 sm:p-8 md:p-10 shadow-sm w-full max-w-full overflow-hidden text-center sm:text-left">
      <h3 className="font-display text-3xl sm:text-4xl italic mb-3 text-center sm:text-left">
        Write to us
      </h3>

      <p className="text-ink/60 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto sm:mx-0 text-center sm:text-left">
        Have questions about your health? Need guidance?
        Want to provide feedback? Send us a message —
        we're here to listen and respond.
      </p>

      <form
        action="https://formsubmit.co/drpriyankagynec@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input
          type="hidden"
          name="_subject"
          value="New Contact Form Submission"
        />

        <input
          type="hidden"
          name="_captcha"
          value="false"
        />

        <input
          type="hidden"
          name="_template"
          value="table"
        />

        <input
          type="hidden"
          name="_next"
          value="http://localhost:3000/thank-you"
        />

        {/* Hidden input for form submission */}
        <input
          type="hidden"
          name="service"
          value={selectedService}
        />

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="w-full">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              required
              className="w-full h-12 sm:h-14 rounded-full px-5 border border-gray-200 outline-none focus:border-wine text-sm sm:text-base text-center sm:text-left transition-all"
            />
          </div>

          <div className="w-full">
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number *"
              required
              maxLength={10}
              pattern="[0-9]{10}"
              inputMode="numeric"
              onInput={(e) => {
                e.target.value = e.target.value
                  .replace(/\D/g, "")
                  .slice(0, 10);
              }}
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  "Please enter a valid 10-digit mobile number"
                )
              }
              onChange={(e) => e.target.setCustomValidity("")}
              className="w-full h-12 sm:h-14 rounded-full px-5 border border-gray-200 outline-none focus:border-wine text-sm sm:text-base text-center sm:text-left transition-all"
            />
          </div>
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address (Optional)"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Please enter a valid email address"
              )
            }
            onChange={(e) => e.target.setCustomValidity("")}
            className="w-full h-12 sm:h-14 rounded-full px-5 border border-gray-200 outline-none focus:border-wine text-sm sm:text-base text-center sm:text-left transition-all"
          />
        </div>

        {/* CUSTOM DROPDOWN (MANDATORY) */}
        <div className="relative mb-5" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
              if (serviceError) setServiceError(false);
            }}
            className={`w-full h-12 sm:h-14 rounded-full border ${
              serviceError ? "border-red-500 ring-2 ring-red-100" : "border-gray-200 focus:border-wine"
            } px-5 outline-none transition-all bg-white flex items-center justify-between text-sm sm:text-base text-ink`}
          >
            <span className={`truncate w-full text-center sm:text-left ${!selectedService ? (serviceError ? "text-red-500 font-medium" : "text-gray-400") : "text-ink font-medium"}`}>
              {selectedService || "Select Speciality *"}
            </span>
            <ChevronDown
              size={18}
              className={`ml-2 shrink-0 ${serviceError ? "text-red-500" : "text-gray-500"} transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
          </button>

          {serviceError && (
            <p className="text-red-500 text-xs mt-1.5 ml-3 text-center sm:text-left">
              Please select a speciality
            </p>
          )}

          {isOpen && (
            <div className="absolute top-full mt-2 left-0 right-0 z-50 bg-white border border-gray-200 rounded-2xl shadow-xl max-h-60 overflow-y-auto p-1.5 space-y-1">
              <button
                type="button"
                onClick={() => {
                  setSelectedService("");
                  setIsOpen(false);
                }}
                className={`w-full text-center sm:text-left px-4 py-2.5 text-xs sm:text-sm rounded-xl transition-colors ${
                  !selectedService ? "bg-wine/10 text-wine font-medium" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Select Speciality *
              </button>
              {services.map((service) => {
                const title = service.short || service.title;
                const isSelected = selectedService === title;
                return (
                  <button
                    key={service.slug}
                    type="button"
                    onClick={() => {
                      setSelectedService(title);
                      setServiceError(false);
                      setIsOpen(false);
                    }}
                    className={`w-full text-center sm:text-left px-4 py-2.5 text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-between ${
                      isSelected
                        ? "bg-wine text-white font-medium"
                        : "text-ink hover:bg-wine/10 hover:text-wine"
                    }`}
                  >
                    <span className="truncate w-full text-center sm:text-left">{title}</span>
                    {isSelected && <Check size={16} className="shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="mb-8">
          <textarea
            name="message"
            rows={4}
            placeholder="How can we help you? (Optional)"
            className="w-full rounded-[20px] sm:rounded-[24px] border border-gray-200 px-5 py-4 outline-none resize-none focus:border-wine text-sm sm:text-base text-center sm:text-left transition-all"
          />
        </div>

        <div className="flex justify-center sm:justify-start">
          <button
            type="submit"
            className="w-full sm:w-auto justify-center rounded-full bg-wine text-white px-8 sm:px-10 py-3.5 sm:py-4 hover:bg-wine-deep transition-all flex items-center gap-2 text-sm sm:text-base font-medium shadow-sm"
          >
            <Send size={18} />
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}