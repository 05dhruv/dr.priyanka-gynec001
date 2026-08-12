import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteInfo } from "@/data/site";
import { FacebookIcon, InstagramIcon, YoutubeIcon, WhatsAppIcon } from "./social-icons";

const socialIcons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  YouTube: YoutubeIcon,
  WhatsApp: WhatsAppIcon,
};

export default function Footer() {
  return (
    <footer className="bg-[#fbf2f2] text-[#14271d] border-t border-[#004b28]/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-1.5 mb-5">
              <span className="font-display italic text-2xl text-[#004b28]">Dr. Priyanka</span>
              <svg
                width="22"
                height="22"
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
              <span className="font-display text-2xl text-[#004b28]">Gynec</span>
            </div>
            <p className="font-display italic text-[#004b28] text-lg mb-4">
              Fertility • Maternity • 3D Laparoscopy • Paediatrics
            </p>
            <p className="text-sm leading-relaxed text-[#14271d]/75 max-w-sm">
              Dr. Priyanka Gynec is a leading women&apos;s health and fertility center in
              Moradabad, offering advanced gynecology, laparoscopy, IVF, and pregnancy
              care with expert doctors and compassionate support at every stage of a
              woman&apos;s life.
            </p>
            <div className="flex gap-3 mt-6">
              {siteInfo.socials.map((s) => {
                const Icon = socialIcons[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-[#004b28]/20 flex items-center justify-center text-[#004b28] hover:bg-[#e181b5] hover:border-[#e181b5] hover:text-white hover:-translate-y-1 transition-all duration-300"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display italic text-lg mb-4 text-[#004b28]">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-[#14271d]/75">
              <li><Link href="/" className="hover:text-[#004b28] hover:underline transition-colors">Home</Link></li>
              <li><Link href="/" className="hover:text-[#004b28] hover:underline transition-colors">About Us</Link></li>
              <li><Link href="/" className="hover:text-[#004b28] hover:underline transition-colors">Our Services</Link></li>
              <li><Link href="/" className="hover:text-[#004b28] hover:underline transition-colors">Laparoscopy & Gynecology</Link></li>
              <li><Link href="/" className="hover:text-[#004b28] hover:underline transition-colors">Pregnancy & Birthing</Link></li>
              <li><Link href="/" className="hover:text-[#004b28] hover:underline transition-colors">Fertility & IVF</Link></li>
              <li><Link href="/" className="hover:text-[#004b28] hover:underline transition-colors">Paediatric Care</Link></li>
              <li><Link href="/" className="hover:text-[#004b28] hover:underline transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display italic text-lg mb-4 text-[#004b28]">For Appointments</h4>
            <div className="flex items-start gap-3 mb-4">
              <Phone size={17} className="mt-0.5 text-[#004b28] shrink-0" />
              <div className="flex flex-col gap-1.5 text-sm text-[#14271d]/75">
                {siteInfo.phones.map((p) => (
                  <a key={p.href} href={p.href} className="hover:text-[#004b28] transition-colors">
                    {p.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle size={17} className="text-[#004b28] shrink-0" />
              <a href={siteInfo.whatsapp.href} className="text-sm text-[#14271d]/75 hover:text-[#004b28] transition-colors">
                {siteInfo.whatsapp.label} (WhatsApp)
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display italic text-lg mb-4 text-[#004b28]">Email &amp; Office</h4>
            <div className="flex items-start gap-3 mb-4">
              <Mail size={17} className="mt-0.5 text-[#004b28] shrink-0" />
              <a href={`mailto:${siteInfo.email}`} className="text-sm text-[#14271d]/75 hover:text-[#004b28] transition-colors">
                {siteInfo.email}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={17} className="mt-0.5 text-[#004b28] shrink-0" />
              <p className="text-sm text-[#14271d]/75 leading-relaxed">{siteInfo.address}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-[#004b28]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#14271d]/60">
          <p>© {new Date().getFullYear()} Dr. Priyanka Gynec. All rights reserved.</p>
          <p>Designed with care for Her Health First.</p>
        </div>
      </div>
    </footer>
  );
}
