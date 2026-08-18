import ContactForm from "@/components/ContactForm";
import { siteInfo } from "@/data/site";

export const metadata = {
  title: "Contact Us | Dr. Priyanka Gynec",
  description:
    "Get in touch with Dr. Priyanka Gynec for appointment queries, directions, or quick questions. Call, WhatsApp, or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      {/* CONTACT SECTION */}

      <section className="py-12 md:py-32 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* LEFT SIDE */}

            <div className="text-center lg:text-left">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-wine mb-3 sm:mb-4">
                Contact Us
              </p>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-8 md:mb-12 text-green-800 break-words">
                Your Health <span className="italic">First</span>
              </h1>

              <div className="space-y-8 sm:space-y-10">

                <div>
                  <h3 className="font-display italic text-2xl sm:text-3xl mb-2 sm:mb-3">
                    Call our landlines
                  </h3>

                  <div className="space-y-2 text-base sm:text-lg text-ink/70">
                    {siteInfo.phones.map((phone) => (
                      <a
                        key={phone.href}
                        href={phone.href}
                        className="block hover:text-wine transition-colors"
                      >
                        {phone.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-display italic text-2xl sm:text-3xl mb-2 sm:mb-3">
                    WhatsApp us on
                  </h3>

                  <a
                    href={siteInfo.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg text-ink/70 hover:text-wine transition-colors"
                  >
                    {siteInfo.whatsapp.label}
                  </a>
                </div>

                <div>
                  <h3 className="font-display italic text-2xl sm:text-3xl mb-2 sm:mb-3">
                    Email Us
                  </h3>

                  <a
                    href={`mailto:${siteInfo.email}`}
                    className="text-base sm:text-lg text-ink/70 hover:text-wine transition-colors break-all"
                  >
                    {siteInfo.email}
                  </a>
                </div>

                <div>
                  <h3 className="font-display italic text-2xl sm:text-3xl mb-2 sm:mb-3">
                    Office Address
                  </h3>

                  <p className="text-base sm:text-lg text-ink/70 leading-relaxed">
                    {siteInfo.address}
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE */}

            <div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* MAP + CONSULTATION HOURS */}

      <section className="pb-16 md:pb-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* GOOGLE MAP */}

            <div className="overflow-hidden rounded-[24px] sm:rounded-[32px] border border-wine/10 shadow-sm h-[360px] sm:h-[480px] lg:h-[700px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.4883605830296!2d78.7727968759046!3d28.827006300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afbaccac4be07%3A0xb8843fc8e89360a6!2sShree%20advanced%20urogynae%20clinic!5e1!3m2!1sen!2sin!4v1786688478257!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* RIGHT CONTENT */}

            <div className="pt-2 text-center lg:text-left">

              <h3 className="font-display italic text-[#005c3c] text-3xl sm:text-4xl md:text-5xl mb-6">
                Consultation Hours
              </h3>

              <div className="space-y-8 sm:space-y-10">

                <div>
                  <p className="text-xl sm:text-2xl font-medium mb-2">
                    Monday to Friday
                  </p>

                  <p className="text-lg sm:text-xl text-ink/75">
                    9:00 AM – 1:00 PM
                  </p>

                  <p className="text-lg sm:text-xl text-ink/75">
                    4:00 PM – 7:00 PM
                  </p>
                </div>

                <div>
                  <p className="text-xl sm:text-2xl font-medium mb-2">
                    Saturday
                  </p>

                  <p className="text-lg sm:text-xl text-ink/75">
                    9:00 AM – 2:00 PM
                  </p>
                </div>

                <div>
                  <p className="text-xl sm:text-2xl font-medium">
                    Sundays By Appointment Only
                  </p>
                </div>

                <div>
                  <h4 className="font-display italic text-[#005c3c] text-3xl sm:text-4xl mb-3">
                    24/7 Emergency Care Available
                  </h4>
                </div>

                <div>
                  <h4 className="font-display italic text-[#005c3c] text-3xl sm:text-4xl mb-4">
                    Visit Us
                  </h4>

                  <p className="text-lg sm:text-xl text-ink/75 leading-relaxed">
                    Shree Advanced Urogynae Clinic
                    <br />
                    A-2 Gandhi Nagar
                    <br />
                    Moradabad, Uttar Pradesh
                    <br />
                    India
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}