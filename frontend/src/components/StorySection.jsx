import React from "react";
import { Star } from "lucide-react";
import { story } from "../mock";

function Diamond() {
  return (
    <div className="flex items-center justify-center gap-3 my-4">
      <span className="h-px w-16 bg-current opacity-40" />
      <Star size={14} className="fill-current" />
      <span className="h-px w-16 bg-current opacity-40" />
    </div>
  );
}

export default function StorySection() {
  return (
    <section id="story" className="py-20 md:py-28 bg-[#f1e7d2]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* portrait */}
        <div className="reveal relative order-1">
          <div className="absolute -inset-3 rotate-[-3deg] bg-[#2f5d8a] rounded-2xl" />
          <div className="absolute -inset-3 rotate-[2deg] bg-[#d8431f]/80 rounded-2xl" />
          <div className="relative rounded-2xl overflow-hidden border-4 border-[#f6efe0] diner-shadow bg-[#1d1d20]">
            <img
              src={story.image}
              alt="Dev's American Cafe — Dev"
              className="w-full h-[340px] md:h-[440px] object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#d8431f] text-white font-cond uppercase tracking-widest text-xs px-6 py-2.5 rounded-full whitespace-nowrap diner-shadow">
            {story.chefFull} · {story.role}
          </div>
        </div>

        {/* text */}
        <div className="reveal order-2 text-[#2b211a]">
          <p className="font-cond uppercase tracking-[0.3em] text-[#d8431f] text-sm">
            Our Story
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-800 mt-2 text-[#2f5d8a]">
            Made from the heart
          </h2>
          <div className="text-[#2f5d8a] -ml-px">
            <Diamond />
          </div>
          {story.paragraphs.map((p, i) => (
            <p key={i} className="font-body text-[15px] md:text-base leading-relaxed text-[#4a3c2e] mb-4">
              {p}
            </p>
          ))}

          <div className="grid grid-cols-3 gap-4 mt-8">
            {story.stats.map((s) => (
              <div
                key={s.label}
                className="bg-[#f6efe0] rounded-xl border border-[#e0d4ba] p-4 text-center"
              >
                <div className="font-display text-2xl md:text-3xl font-800 text-[#d8431f]">
                  {s.value}
                </div>
                <div className="font-cond uppercase tracking-wider text-[11px] text-[#6b5a47] mt-1 leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
