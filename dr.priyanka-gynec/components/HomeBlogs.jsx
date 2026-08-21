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
              className="group rounded-[28px] bg-white border border-[#004b28]/15 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
            >
              {/* TOP BANNER IMAGE CONTAINER */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#004b28]/5 border-b border-[#004b28]/10">
                {post.image ? (
                  <>
                    {/* Subtle blurred background fill */}
                    <img
                      src={post.image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-md opacity-25 scale-110 pointer-events-none"
                    />
                    {/* Main image with object-cover object-center */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="relative z-10 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </>
                ) : (
                  <div className="w-full h-full bg-[#004b28]/10 flex items-center justify-center text-[#004b28]/40">
                    <span>Banner Image</span>
                  </div>
                )}

                {/* CATEGORY BADGE OVERLAY */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#004b28] text-xs font-bold uppercase tracking-wider border border-[#004b28]/15 shadow-xs">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-[#f5e7d8]/40">
                <div>
                  {/* DATE ROW */}
                  <div className="flex items-center gap-2 mb-3 text-xs text-[#004b28]/70 font-medium">
                    <Calendar size={13} className="text-[#e181b5]" />
                    <span>{post.date}</span>
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
