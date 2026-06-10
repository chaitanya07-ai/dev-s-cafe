import React from "react";
import { ChevronDown, MapPin, Clock } from "lucide-react";
import Logo from "./Logo";
import { restaurant } from "../mock";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
      style={{
        background:
          "linear-gradient(180deg, #f8f1e3 0%, #f1e7d2 100%)",
      }}
    >
      {/* decorative stripes */}
      <div className="absolute top-0 left-0 w-full h-2 flex">
        <div className="flex-1 bg-[#d8431f]" />
        <div className="flex-1 bg-[#f6efe0]" />
        <div className="flex-1 bg-[#2f5d8a]" />
      </div>

      <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#d8431f]/8 blur-2xl" />
      <div className="absolute bottom-0 -left-10 w-72 h-72 rounded-full bg-[#2f5d8a]/8 blur-2xl" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="reveal in inline-block bg-[#f6efe0] border-4 border-[#2f5d8a] rounded-2xl px-8 py-10 md:px-16 md:py-14 diner-shadow">
          <Logo size="lg" />
        </div>

        <p className="reveal mt-9 font-display text-xl md:text-2xl text-[#2b211a] max-w-2xl mx-auto leading-relaxed">
          {restaurant.tagline}
        </p>

        <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#menu"
            className="bg-[#d8431f] hover:bg-[#bd3415] text-white font-cond uppercase tracking-widest text-sm px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 diner-shadow"
          >
            Explore the Menu
          </a>
          <a
            href="#visit"
            className="bg-transparent border-2 border-[#2f5d8a] text-[#2f5d8a] hover:bg-[#2f5d8a] hover:text-white font-cond uppercase tracking-widest text-sm px-8 py-3.5 rounded-full transition-all"
          >
            Visit Us
          </a>
        </div>

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[#5a4a3a] font-body">
          <span className="flex items-center gap-2 text-sm">
            <Clock size={16} className="text-[#d8431f]" /> Wed–Sun · 2–10 PM
          </span>
          <span className="flex items-center gap-2 text-sm">
            <MapPin size={16} className="text-[#d8431f]" /> Sector 118, TDI City, Mohali
          </span>
        </div>
      </div>

      <a
        href="#story"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-[#2f5d8a] animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={30} />
      </a>
    </section>
  );
}
