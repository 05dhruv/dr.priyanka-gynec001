import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { blogPosts } from "@/data/site";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | Dr. Priyanka Gynec`, description: post.excerpt };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const [titleStart, ...rest] = post.title.split(" ");

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={titleStart}
        italic={rest.join(" ")}
        description={post.excerpt}
      />

      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <Reveal>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm font-medium text-wine mb-12 hover:gap-3 transition-all"
            >
              <ArrowLeft size={16} /> Back to all blogs
            </Link>

            <div className="prose-none space-y-6 text-ink/70 leading-relaxed">
              <p>
                This article is part of the Dr. Priyanka Gynec patient education series,
                where our specialists share practical, easy-to-understand guidance on{" "}
                {post.category.toLowerCase()}. Our aim is always the same: help you
                understand your options clearly, so you can make confident, informed
                choices about your care.
              </p>
              <p>{post.excerpt}</p>
              <p>
                Every patient&apos;s situation is different, which is why we recommend
                a personal consultation before making any treatment decisions. Our
                team takes the time to review your history, discuss your goals, and
                walk you through the path that&apos;s right for you—never a one-size-
                fits-all approach.
              </p>
              <p>
                If you&apos;d like to discuss this topic in more detail, our doctors
                are just a call away. Book a consultation with Dr. Priyanka Gynec and get
                answers tailored to your own journey.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
