import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SpecialityCard from "@/components/SpecialityCard";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import { iconMap } from "@/components/icons";
import { services } from "@/data/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Dr. Priyanka Gynec`,
    description: service.blurb,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon];
  const otherServices = services.filter((s) => s.slug !== service.slug);
  const [titleStart, ...rest] = service.title.split(" ");

  return (
    <>
      <PageHero eyebrow="Speciality Service" title={titleStart} italic={rest.join(" ")} description={service.blurb} />

      <section className="py-24 md:py-32 bg-cream">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="w-16 h-16 rounded-2xl bg-wine/5 border border-wine/10 flex items-center justify-center text-wine mb-8">
                  {Icon && <Icon size={28} strokeWidth={1.6} />}
                </div>
                <h2 className="font-display text-3xl md:text-4xl mb-6 text-balance">
                  What we offer
                </h2>
                <ul className="space-y-4">
                  {service.points.map((pt, i) => (
                    <li
                      key={pt}
                      className="flex items-start gap-4 rounded-2xl border border-wine/10 bg-white p-5 hover:border-wine/25 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <span className="font-display italic text-wine/40 text-2xl leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-ink/75 leading-relaxed pt-0.5">{pt}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <div className="rounded-[32px] bg-gradient-to-br from-wine via-wine-deep to-[#2f0d17] grain-bg p-10 text-cream sticky top-28">
                  <p className="font-display italic text-2xl text-cream mb-4">Her Health First</p>
                  <p className="text-cream/75 leading-relaxed mb-8">
                    Every treatment plan at Dr. Priyanka Gynec begins with listening. Speak
                    with our team to understand how this speciality can be tailored to
                    your story.
                  </p>
                  <a
                    href="#contact-numbers"
                    className="inline-flex items-center gap-2 rounded-full bg-cream text-wine-deep font-medium px-6 py-3.5 hover:bg-rose hover:text-cream transition-all duration-300"
                  >
                    Book a Consultation
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-cream-deep">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-xl mb-14">
            <p className="leaf-divider text-wine text-xs tracking-[0.3em] uppercase mb-5">
              Explore More
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-balance">
              Other <span className="italic-accent">specialities</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherServices.map((s, i) => (
              <SpecialityCard key={s.slug} service={s} index={i} variant="home" />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}
