"use client";

import Link from "next/link";
import { ChevronRight, Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/site";

export default function HomeBlogs() {
  const displayBlogs = Array.isArray(blogPosts) ? blogPosts.slice(0, 3) : [];

  return (
    <section className="py-16 md:py-24 bg-[#fbf5ee] border-t border-[#004b28]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#004b28] font-normal tracking-tight">
            BLOGS
          </h2>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {displayBlogs.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group rounded-[28px] bg-[#f5e7d8] border border-[#ebd7c5] p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
            >
              {/* TOP ROW: DATE & CATEGORY */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-[#004b28]/10 text-[#004b28] text-xs font-semibold px-3 py-1 rounded-full border border-[#004b28]/15">
                    <Calendar size={13} className="text-[#e181b5]" />
                    {post.date}
                  </span>

                  <span className="text-xs font-bold text-[#e181b5] uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="font-display italic font-normal text-xl sm:text-2xl text-[#004b28] group-hover:text-[#e181b5] transition-colors leading-snug mb-3 line-clamp-2">
                  {post.title}
                </h3>

                {/* EXCERPT */}
                <p className="text-[#1b4332]/80 text-sm leading-relaxed line-clamp-3 mb-6 font-light">
                  {post.excerpt}
                </p>
              </div>

              {/* BOTTOM FOOTER LINK */}
              <div className="pt-4 border-t border-[#004b28]/15 flex items-center justify-between text-sm text-[#004b28] font-display italic font-medium">
                <span>Read Full Article</span>
                <div className="w-8 h-8 rounded-full bg-[#004b28]/10 group-hover:bg-[#004b28] group-hover:text-white text-[#004b28] flex items-center justify-center transition-all">
                  <ArrowRight size={15} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* BOTTOM MORE BLOGS PILL BUTTON */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e181b5] text-[#fbf2f2] font-display italic text-[1.125rem] px-8 py-3 border border-[#e181b5] hover:bg-[#fbf2f2] hover:border-[#004b28] hover:text-[#004b28] transition-all duration-500 shadow-sm cursor-pointer"
          >
            <span>More Blogs</span>
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
