import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import { services } from "@/data/site";

export const metadata = {
  title: "Dr. Priyanka Gynec Services – IVF, Laparoscopy, Pregnancy Care",
  description:
    "Explore Dr. Priyanka Gynec's services in fertility & IVF, laparoscopy & gynecology, pregnancy & birthing care, and pediatrics for women's health at every life stage.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Specialty Services"
        title="Care for Every Stage"
        italic="of Her Journey"
        description="From adolescence through motherhood to menopause—integrated care that evolves with your life, delivered with expertise and heart."
      />

      <section className="py-24 md:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="mb-14 max-w-xl">
            <p className="leaf-divider text-wine text-xs tracking-[0.3em] uppercase mb-5">
              Our Specialities
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-balance">
              Four pillars, <span className="italic-accent">one promise</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} variant="services" />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}
