import React from "react";
import { Star, Heart } from "lucide-react";
import { restaurant } from "../mock";

// CSS recreation of the Dev's American Cafe signboard logo
export default function Logo({ size = "md", dark = false }) {
  const scale = {
    sm: { name: "text-2xl", sub: "text-[9px]", star: 9, heart: 11 },
    md: { name: "text-4xl", sub: "text-xs", star: 12, heart: 14 },
    lg: { name: "text-7xl md:text-8xl", sub: "text-base md:text-lg", star: 20, heart: 26 },
  }[size];

  return (
    <div className="flex flex-col items-center leading-none select-none">
      <div className="flex items-center gap-1.5 mb-1">
        {[0, 1, 2].map((i) => (
          <Star key={i} size={scale.star} className="fill-[#d8431f] text-[#d8431f]" />
        ))}
      </div>
      <div
        className={`font-western ${scale.name} tracking-tight text-[#2f5d8a]`}
        style={{ textShadow: "2px 2px 0 #d8431f" }}
      >
        {restaurant.name}
      </div>
      <div className={`font-cond ${scale.sub} tracking-[0.4em] text-[#d8431f] font-600 mt-1 pl-[0.4em]`}>
        {restaurant.sub}
      </div>
      <Heart size={scale.heart} className="fill-[#d8431f] text-[#d8431f] my-1" />
      <div className={`font-display italic ${size === "lg" ? "text-xl" : "text-sm"} text-[#2f5d8a]`}>
        {restaurant.hindi}
      </div>
    </div>
  );
}
