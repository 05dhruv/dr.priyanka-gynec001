import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { blogPosts } from "@/data/site";
import { ArrowLeft, Clock, Calendar, CheckCircle2, User, Share2, PhoneCall } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Dr. Priyanka Gynec`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Find other 2 posts for recommendation
  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const [titleStart, ...rest] = post.title.split(" ");

  return (
    <>
      {/* HERO SECTION */}
      <PageHero
        eyebrow={post.category}
        title={titleStart}
        italic={rest.join(" ")}
        description={post.excerpt}
      />

      <section className="py-16 md:py-24 bg-[#fbf5ee]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
          
          {/* BACK LINK & ARTICLE META */}
          <Reveal className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#004b28]/15 pb-6">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#004b28] hover:text-[#e181b5] hover:-translate-x-1 transition-all duration-300"
            >
              <ArrowLeft size={18} /> Back to all articles
            </Link>

            <div className="flex items-center gap-4 text-xs font-medium text-[#004b28]/70">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[#e181b5]" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#e181b5]" />
                {post.readTime}
              </span>
            </div>
          </Reveal>

          {/* AUTHOR BAR */}
          <Reveal className="mb-10 rounded-2xl bg-white p-5 border border-[#004b28]/15 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#004b28]/10 text-[#004b28] flex items-center justify-center font-bold text-sm shrink-0 border border-[#004b28]/15">
                <User size={20} />
              </div>
              <div>
                <p className="text-base font-bold text-[#004b28]">{post.author}</p>
                <p className="text-xs text-[#004b28]/70">{post.authorRole}</p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-[#004b28] bg-[#004b28]/10 px-3.5 py-1.5 rounded-full">
              <Share2 size={13} />
              Medical Publication
            </div>
          </Reveal>

          {/* KEY TAKEAWAYS BOX */}
          {Array.isArray(post.takeaways) && post.takeaways.length > 0 && (
            <Reveal className="mb-12">
              <div className="rounded-2xl bg-white border-l-4 border-[#004b28] p-6 sm:p-8 shadow-sm">
                <h3 className="font-display italic text-xl text-[#004b28] mb-4 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-[#e181b5]" />
                  Key Clinical Takeaways
                </h3>
                <ul className="space-y-3">
                  {post.takeaways.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-[#1b2a26]/85 font-light leading-relaxed">
                      <span className="h-2 w-2 rounded-full bg-[#e181b5] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          {/* ARTICLE CONTENT SECTIONS */}
          <div className="space-y-10 text-[#1b2a26]/85 leading-relaxed font-light text-base sm:text-lg">
            {Array.isArray(post.sections) ? (
              post.sections.map((sec, idx) => (
                <Reveal key={idx} delay={idx * 0.05}>
                  <div className="space-y-4">
                    <h2 className="font-serif text-[#004b28] text-2xl sm:text-3xl font-semibold leading-tight pt-4">
                      {sec.heading}
                    </h2>
                    <p className="leading-relaxed font-light text-[#1b2a26]/80 text-base sm:text-lg">
                      {sec.content}
                    </p>
                  </div>
                </Reveal>
              ))
            ) : (
              <Reveal>
                <p>{post.excerpt}</p>
              </Reveal>
            )}

            {/* DOCTOR ADVICE BOX IN ARTICLE */}
            <Reveal className="my-12">
              <div className="rounded-2xl bg-[#004b28] text-white p-7 sm:p-9 shadow-md relative overflow-hidden">
                <div className="relative z-10 space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e181b5]">
                    Physician Consultation Advice
                  </span>
                  <p className="font-display italic text-xl sm:text-2xl leading-relaxed text-[#fbf5ee]">
                    &ldquo;Every woman&apos;s biological profile is unique. Prior to starting any treatment or surgical procedure, an in-person clinical assessment provides the safest path forward.&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-[#e181b5] pt-2">
                    — Dr. Priyanka Gynec Specialist Team
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* CALL TO ACTION CARD */}
          <Reveal className="mt-14">
            <div className="rounded-3xl bg-white border border-[#004b28]/15 p-8 text-center shadow-md">
              <h3 className="font-serif text-[#004b28] text-2xl sm:text-3xl mb-3">
                Have Questions About Your Health?
              </h3>
              <p className="text-sm sm:text-base text-[#1b2a26]/75 mb-6 max-w-xl mx-auto font-light">
                Schedule a confidential consultation with Dr. Priyanka for expert guidance and personalized treatment planning.
              </p>
              <a
                href="tel:919079765578"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#e181b5] text-white font-display italic text-lg hover:bg-[#004b28] transition-all duration-300 shadow-sm"
              >
                <PhoneCall size={18} />
                Call +91 90797 65578
              </a>
            </div>
          </Reveal>

          {/* RECOMMENDED OTHER ARTICLES */}
          {otherPosts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-[#004b28]/15">
              <h3 className="font-display italic text-2xl sm:text-3xl text-[#004b28] mb-8">
                Recommended <span className="not-italic font-serif">Articles</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {otherPosts.map((recPost) => (
                  <Link
                    key={recPost.slug}
                    href={`/blogs/${recPost.slug}`}
                    className="group block rounded-2xl bg-white border border-[#004b28]/15 p-6 hover:border-[#004b28]/30 hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-xs font-semibold text-[#e181b5] uppercase tracking-wider block mb-2">
                      {recPost.category}
                    </span>
                    <h4 className="font-serif text-[#004b28] text-xl leading-snug mb-2 group-hover:text-[#075540] transition-colors">
                      {recPost.title}
                    </h4>
                    <p className="text-xs text-[#1b2a26]/70 line-clamp-2 font-light">
                      {recPost.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      <CTASection />
    </>
  );
}
