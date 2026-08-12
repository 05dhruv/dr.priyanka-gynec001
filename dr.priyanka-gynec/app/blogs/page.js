import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { blogPosts } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Blogs | Dr. Priyanka Gynec",
  description:
    "Insights on fertility, gynecology, pregnancy and paediatric care from the Dr. Priyanka Gynec team.",
};

export default function BlogsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Blog"
        title="Insights for"
        italic="Her Journey"
        description="Practical, expert-reviewed guidance on fertility, gynecology, pregnancy, and paediatric care."
      />

      <section className="py-24 md:py-32 bg-cream">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="group block rounded-[28px] bg-white border border-wine/10 p-8 h-full hover:border-wine/25 hover:-translate-y-1 transition-all duration-400"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-wine">
                      {post.category}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-wine/30 group-hover:text-wine group-hover:rotate-45 transition-all duration-300"
                    />
                  </div>
                  <h2 className="font-display text-2xl md:text-[26px] leading-snug mb-4 text-balance">
                    {post.title}
                  </h2>
                  <p className="text-sm text-ink/60 leading-relaxed">{post.excerpt}</p>
                  <span className="mt-6 inline-block text-xs text-ink/40">{post.date}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
