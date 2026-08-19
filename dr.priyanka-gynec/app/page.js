import Hero from "@/components/Hero";
import TechShowcase from "@/components/TechShowcase";
import WhyTrust from "@/components/WhyTrust";
import MomentsSection from "@/components/MomentsSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import SpecialityScroll from "@/components/SpecialityScroll";
import HomeBlogs from "@/components/HomeBlogs";
import { services } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Her Story Section */}
      <section className="bg-cream pt-10 pb-0 lg:pt-12 lg:pb-0">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">

            {/* Left */}
            <div>
              <h2 className="font-display italic text-[#005c3c] text-[48px] md:text-[60px] lg:text-[65px] leading-[0.9] tracking-[-0.07em]">
                Her Story, Always
              </h2>
            </div>

            {/* Right */}
            <div className="max-w-[640px]">
              <p className="text-[#24333B] text-[16px] md:text-[18px] leading-[1.2] font-light">
                At Dr. Priyanka Gynec, Her Health First isn't just a promise—
                it's a philosophy. We place your comfort, your choices, and your
                story at the center of everything we do. Whether you're
                navigating fertility, preparing for birth, or managing complex
                conditions—we listen first, then bring world-class expertise and
                cutting-edge technology to support you. 3D laparoscopy.
                AI-based imaging. Time-lapse embryo monitoring. We have it all,
                but we use it with empathy, patience, and genuine care for your
                unique path. This is healthcare we've designed around your life.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Specialities Scroll Section */}
      <SpecialityScroll services={services} />

      <TechShowcase />
      <WhyTrust />
      <MomentsSection />
      <Testimonials />
      <HomeBlogs />
      <CTASection />
    </>
  );
}