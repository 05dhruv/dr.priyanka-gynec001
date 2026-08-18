import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import MomentsSection from "@/components/MomentsSection";
import { doctors } from "@/data/site";

export const metadata = {
  title: "About Dr. Priyanka Gynec | Trusted Women's Care Experts",
  description:
    "Learn about Dr. Priyanka Gynec, our experienced gynecologists, patient-first approach, and commitment to safe, compassionate women's healthcare.",
};

export default function AboutPage() {
  return (
    <div className="bg-cream-900 text-emerald-950 min-h-screen">
      <PageHero
        title="Your Health"
        italic="Matters"
        description="At the heart of Dr. Priyanka Gynec are two exceptional specialists—one leading women's health, fertility, and advanced laparoscopy, the other a trusted expert in pediatrics. Deeply current with the latest treatments and technology, they bring not just skill, but warmth, joy, and deeply personal care to every patient interaction."
        bgClass="bg-cream text-emerald-950 border-b border-emerald-900/10"
        eyebrowClass="text-emerald-700"
        italicClass="text-emerald-700 text "
        descriptionClass="text-emerald-900/80 max-w-6xl text-2xl "
      />
      <section className="py-10 md:py-14 bg-cream text-emerald-950">
        <div className="mx-auto max-w-6xl px-6 md:px-10 space-y-28">
          {doctors.map((doc, i) => (
            <Reveal key={doc.name}>
              <div className="grid lg:grid-cols-12 gap-12 items-center">
  {/* Doctor Image */}
  <div
    className={`lg:col-span-5 flex justify-center ${
      i % 2 === 1 ? "lg:order-2" : ""
    }`}
  >
    <div className="relative">
      <div className="absolute inset-0 rounded-full bg-emerald-200 blur-3xl opacity-40 scale-110" />

      <div className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-[8px] border-white shadow-2xl">
        <Image
          src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1786608482/IMG_1_wx7atm.jpg"
          alt={doc.name}
          fill
          className="object-cover"
          sizes="(max-width:768px) 280px, 420px"
        />
      </div>
    </div>
  </div>

  {/* Doctor Details */}
  <div
    className={`lg:col-span-7 ${
      i % 2 === 1 ? "lg:order-1" : ""
    }`}
  >
    <p className="text-emerald-700 uppercase tracking-[0.35em] text-xs mb-3">
      {doc.role}
    </p>

    <h2 className="font-display text-4xl md:text-5xl text-emerald-950 mb-6">
      {doc.name}
    </h2>

    <p className="text-emerald-900/80 leading-8 mb-10">
      {doc.bio}
    </p>

    {/* Accordion */}
    <div className="space-y-5">
      <details open className="border-b border-emerald-200 pb-5">
        <summary className="cursor-pointer list-none flex items-center justify-between text-lg font-semibold text-emerald-950">
          Education
          <span className="text-2xl">+</span>
        </summary>

        <ul className="mt-5 space-y-3">
          {doc.education.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-emerald-900/80"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </details>

      <details className="border-b border-emerald-200 pb-5">
        <summary className="cursor-pointer list-none flex items-center justify-between text-lg font-semibold text-emerald-950">
          Memberships & Awards
          <span className="text-2xl">+</span>
        </summary>

        <ul className="mt-5 space-y-3">
          {doc.awards.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-emerald-900/80"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </details>

      {doc.experience?.length > 0 && (
        <details className="border-b border-emerald-200 pb-5">
          <summary className="cursor-pointer list-none flex items-center justify-between text-lg font-semibold text-emerald-950">
            Work Experience
            <span className="text-2xl">+</span>
          </summary>

          <ul className="mt-5 space-y-3">
            {doc.experience.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-emerald-900/80"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  </div>
</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-10 md:py-14 bg-cream text-emerald-950">
        <div className="mx-auto max-w-6xl px-6 md:px-10 text-center">
          <Reveal>
            <p className="leaf-divider text-2xl justify-center text-emerald-700  tracking-[0.3em] uppercase mb-6">
              Our Guiding Philosophy
            </p>

            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] mb-8 text-balance text-emerald-950">
              Her Health{" "}
              <span className="italic-accent text-emerald-700">First</span>
            </h2>

            <p className="text-emerald-900/80 max-w-6xl text-2xl mb-4">
              At Dr. Priyanka Gynec, Her Health First isn&apos;t just a
              philosophy—it&apos;s how we practice medicine every day. We listen
              before we advise. We personalize before we prescribe. We put her
              comfort, her choices, and her voice at the center of every
              decision—because her health isn&apos;t just our priority,
              it&apos;s our promise.
            </p>

            <p className="text-emerald-900/80 max-w-6xl text-2xl">
              With expert care delivered with genuine empathy, we understand
              that her well-being shapes families, strengthens communities, and
              creates the foundation for generations to come.
            </p>
          </Reveal>
        </div>
      </section>

      <MomentsSection />
     
    </div>
  );
}