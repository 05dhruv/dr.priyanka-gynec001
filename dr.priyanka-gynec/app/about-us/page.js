import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import MomentsSection from "@/components/MomentsSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import { doctors } from "@/data/site";

export const metadata = {
  title: "About Dr. Priyanka Gynec | Trusted Women's Care Experts",
  description:
    "Learn about Dr. Priyanka Gynec, our experienced gynecologists, patient-first approach, and commitment to safe, compassionate women's healthcare.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Your Health"
        italic="Matters"
        description="At the heart of Dr. Priyanka Gynec are two exceptional specialists—one leading women's health, fertility, and advanced laparoscopy, the other a trusted expert in pediatrics. Deeply current with the latest treatments and technology, they bring not just skill, but warmth, joy, and deeply personal care to every patient interaction."
      />

      <section className="py-24 md:py-32 bg-cream">
        <div className="mx-auto max-w-6xl px-6 md:px-10 space-y-28">
          {doctors.map((doc, i) => (
            <Reveal key={doc.name}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-gradient-to-br from-wine/90 via-wine-deep to-[#2f0d17] grain-bg flex items-end p-8">
                    <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-rose/25 blur-[90px]" />
                    <p className="relative font-display italic text-3xl text-cream/90">
                      {doc.name}
                    </p>
                  </div>
                </div>

                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="leaf-divider text-wine text-xs tracking-[0.3em] uppercase mb-4">
                    {doc.role}
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl mb-6">
                    {doc.name}
                  </h2>
                  <p className="text-ink/65 leading-relaxed mb-8">{doc.bio}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-wine mb-4">
                        Education
                      </h3>
                      <ul className="space-y-2.5">
                        {doc.education.map((e) => (
                          <li key={e} className="flex gap-2.5 text-sm text-ink/65 leading-relaxed">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-rose shrink-0" />
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-wine mb-4">
                        Memberships &amp; Awards
                      </h3>
                      <ul className="space-y-2.5">
                        {doc.awards.map((e) => (
                          <li key={e} className="flex gap-2.5 text-sm text-ink/65 leading-relaxed">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-rose shrink-0" />
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {doc.experience.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-wine mb-4">
                        Work Experience
                      </h3>
                      <ul className="space-y-2.5">
                        {doc.experience.map((e) => (
                          <li key={e} className="flex gap-2.5 text-sm text-ink/65 leading-relaxed">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-rose shrink-0" />
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-cream-deep">
        <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
          <Reveal>
            <p className="leaf-divider justify-center text-wine text-xs tracking-[0.3em] uppercase mb-6">
              Our Guiding Philosophy
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] mb-8 text-balance">
              Her Health <span className="italic-accent">First</span>
            </h2>
            <p className="text-ink/65 leading-relaxed max-w-2xl mx-auto mb-4">
              At Dr. Priyanka Gynec, Her Health First isn&apos;t just a philosophy—it&apos;s
              how we practice medicine every day. We listen before we advise. We
              personalize before we prescribe. We put her comfort, her choices, and
              her voice at the center of every decision—because her health isn&apos;t
              just our priority, it&apos;s our promise.
            </p>
            <p className="text-ink/65 leading-relaxed max-w-2xl mx-auto">
              With expert care delivered with genuine empathy, we understand that her
              well-being shapes families, strengthens communities, and creates the
              foundation for generations to come.
            </p>
          </Reveal>
        </div>
      </section>

      <MomentsSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
