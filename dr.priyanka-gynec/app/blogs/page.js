import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { blogPosts } from "@/data/site";
import { ArrowUpRight, Clock, Calendar, User, BookOpen, Sparkles } from "lucide-react";

export const metadata = {
  title: "Blogs & Medical Insights | Dr. Priyanka Gynec",
  description:
    "Expert-reviewed medical guidance on fertility, laparoscopic surgery, PCOS, pregnancy, and women's health by Dr. Priyanka.",
};

export default function BlogsPage() {
  const featuredPost = blogPosts[0];
  const secondaryPosts = blogPosts.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Medical Insights & Patient Guidance"
        title="Evidence-Based Care for"
        italic="Her Journey"
        description="Practical, physician-authored advice on fertility, laparoscopic surgery, pregnancy, and women's health."
      />

      <section className="py-20 md:py-28 bg-[#fbf5ee]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          
          {/* SECTION HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e181b5]">
                Featured Publications
              </span>
              <h2 className="mt-2 font-display italic text-3xl sm:text-4xl text-[#004b28]">
                Latest Articles by <span className="not-italic font-serif">Dr. Priyanka</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#1b2a26]/70 max-w-md">
              Curated medical insights designed to help you make informed decisions for your reproductive health.
            </p>
          </div>

          {/* =========================================================
              FEATURED BLOG CARD (ELEGANT LUXURY CARD WITH IMAGE BANNER)
          ========================================================= */}
          {featuredPost && (
            <Reveal className="mb-12">
              <Link
                href={`/blogs/${featuredPost.slug}`}
                className="group block rounded-[32px] bg-white border border-[#004b28]/15 p-6 sm:p-8 md:p-10 shadow-[0_15px_45px_rgba(0,75,40,0.06)] hover:shadow-[0_25px_60px_rgba(0,75,40,0.12)] hover:border-[#004b28]/30 transition-all duration-500 relative overflow-hidden"
              >
                {/* TOP BANNER IMAGE */}
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[16/8] rounded-2xl overflow-hidden mb-8 border border-[#004b28]/10 bg-[#004b28]/5">
                  {featuredPost.image ? (
                    <>
                      <img
                        src={featuredPost.image}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover blur-md opacity-25 scale-110 pointer-events-none"
                      />
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="relative z-10 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#004b28]/40">
                      <span>Featured Article Image</span>
                    </div>
                  )}

                  <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#004b28] text-xs font-semibold uppercase tracking-wider shadow-xs border border-[#004b28]/15">
                      <BookOpen size={13} />
                      {featuredPost.category}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#e181b5] text-white text-xs font-bold uppercase tracking-wider shadow-xs">
                      <Sparkles size={12} />
                      Featured Read
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4 text-xs text-[#004b28]/70 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#e181b5]" />
                      {featuredPost.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} className="text-[#e181b5]" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-[#004b28] text-2xl sm:text-3xl lg:text-4xl leading-tight mb-4 group-hover:text-[#075540] transition-colors">
                  {featuredPost.title}
                </h3>

                <p className="text-[#1b2a26]/80 text-base sm:text-lg leading-relaxed mb-8 font-light max-w-4xl">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-6 border-t border-[#004b28]/10 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#004b28]/10 text-[#004b28] flex items-center justify-center font-bold text-sm shrink-0">
                      <User size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#004b28]">{featuredPost.author}</p>
                      <p className="text-xs text-[#004b28]/60">{featuredPost.authorRole}</p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#004b28] group-hover:text-[#e181b5] group-hover:gap-3 transition-all duration-300">
                    <span>Read Full Article</span>
                    <ArrowUpRight size={18} className="transition-transform group-hover:rotate-45" />
                  </div>
                </div>
              </Link>
            </Reveal>
          )}

          {/* =========================================================
              SECONDARY BLOG GRID (2 CARDS WITH BANNER IMAGES)
          ========================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {secondaryPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="group flex flex-col h-full rounded-[28px] bg-white border border-[#004b28]/15 overflow-hidden shadow-[0_10px_35px_rgba(0,75,40,0.05)] hover:shadow-[0_20px_50px_rgba(0,75,40,0.1)] hover:border-[#004b28]/30 transition-all duration-500"
                >
                  {/* TOP BANNER IMAGE CONTAINER */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#004b28]/5 border-b border-[#004b28]/10">
                    {post.image ? (
                      <>
                        <img
                          src={post.image}
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 w-full h-full object-cover blur-md opacity-25 scale-110 pointer-events-none"
                        />
                        <img
                          src={post.image}
                          alt={post.title}
                          className="relative z-10 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#004b28]/40">
                        <span>Blog Image</span>
                      </div>
                    )}

                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#004b28] text-xs font-semibold uppercase tracking-wider border border-[#004b28]/15 shadow-xs">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 sm:p-8 flex flex-col flex-1">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-2 text-xs text-[#004b28]/60 font-medium">
                        <Calendar size={13} className="text-[#e181b5]" />
                        <span>{post.date}</span>
                        <span>•</span>
                        <Clock size={13} className="text-[#e181b5]" />
                        <span>{post.readTime}</span>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="text-[#004b28]/40 group-hover:text-[#004b28] group-hover:rotate-45 transition-all duration-300"
                      />
                    </div>

                    <h3 className="font-serif text-[#004b28] text-2xl leading-snug mb-4 group-hover:text-[#075540] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#1b2a26]/75 leading-relaxed font-light mb-6 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="pt-5 border-t border-[#004b28]/10 flex items-center justify-between text-xs text-[#004b28]/70">
                      <span className="font-medium">By {post.author}</span>
                      <span className="font-semibold text-[#004b28] group-hover:text-[#e181b5] transition-colors">Read Article &rarr;</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* =========================================================
              DOCTOR PHILOSOPHY SPOTLIGHT BANNER
          ========================================================= */}
          <Reveal>
            <div className="rounded-[32px] bg-gradient-to-r from-[#004b28] to-[#075540] p-8 sm:p-12 text-white relative overflow-hidden shadow-lg">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-10 translate-y-10">
                <svg width="320" height="320" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4C12 4 8 9 8 13C8 16 10 18 12 18C14 18 16 16 16 13C16 9 12 4 12 4Z" />
                </svg>
              </div>

              <div className="max-w-3xl relative z-10">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e181b5]">
                  Clinical Philosophy
                </span>
                <blockquote className="mt-4 font-display italic text-2xl sm:text-3xl lg:text-4xl text-[#fbf5ee] leading-snug">
                  &ldquo;Empowering women with clear, physician-backed medical knowledge is the cornerstone of compassionate healthcare. When patients understand their bodies, they make confident choices.&rdquo;
                </blockquote>
                <p className="mt-6 text-sm sm:text-base font-semibold text-[#e181b5]">
                  — Dr. Priyanka <span className="text-white/70 font-normal ml-2">(MBBS, MS - Obs & Gynae)</span>
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      <CTASection />
    </>
  );
}
