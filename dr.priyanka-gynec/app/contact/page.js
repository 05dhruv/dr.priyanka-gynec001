import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { siteInfo } from "@/data/site";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Contact Us | Dr. Priyanka Gynec",
  description:
    "Get in touch with Dr. Priyanka Gynec for appointment queries, directions, or quick questions. Call, WhatsApp, or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Start"
        italic="the Conversation"
        description="Call us or send a message for appointment queries, directions, or quick questions. Our team is here to help."
      />

      <section className="py-24 md:py-32 bg-cream">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <div className="rounded-[28px] bg-wine text-cream p-8 grain-bg">
                  <div className="w-11 h-11 rounded-full bg-cream/15 flex items-center justify-center mb-5">
                    <Phone size={18} />
                  </div>
                  <h3 className="font-display text-xl mb-4">Call</h3>
                  <div className="flex flex-col gap-2 text-sm text-cream/85">
                    {siteInfo.phones.map((p) => (
                      <a key={p.href} href={p.href} className="hover:text-cream transition-colors w-fit">
                        {p.label}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="rounded-[28px] bg-white border border-wine/10 p-8">
                  <div className="w-11 h-11 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-5">
                    <MessageCircle size={18} />
                  </div>
                  <h3 className="font-display text-xl mb-3">WhatsApp</h3>
                  <a
                    href={siteInfo.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink/65 hover:text-wine transition-colors"
                  >
                    {siteInfo.whatsapp.label}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="rounded-[28px] bg-white border border-wine/10 p-8">
                  <div className="w-11 h-11 rounded-full bg-wine/10 text-wine flex items-center justify-center mb-5">
                    <Mail size={18} />
                  </div>
                  <h3 className="font-display text-xl mb-3">Email</h3>
                  <a
                    href={`mailto:${siteInfo.email}`}
                    className="text-sm text-ink/65 hover:text-wine transition-colors"
                  >
                    {siteInfo.email}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="rounded-[28px] bg-white border border-wine/10 p-8">
                  <div className="w-11 h-11 rounded-full bg-sage/10 text-sage flex items-center justify-center mb-5">
                    <MapPin size={18} />
                  </div>
                  <h3 className="font-display text-xl mb-3">Office</h3>
                  <p className="text-sm text-ink/65 leading-relaxed">{siteInfo.address}</p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
