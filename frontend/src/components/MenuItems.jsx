import React from "react";
import { Leaf } from "lucide-react";

function VegBadge({ veg }) {
  return (
    <span
      className={`inline-flex items-center justify-center w-4 h-4 border ${
        veg ? "border-[#5a9e54]" : "border-[#d8431f]"
      } rounded-[3px] shrink-0`}
      title={veg ? "Veg" : "Non-Veg"}
    >
      <span
        className={`w-2 h-2 rounded-full ${veg ? "bg-[#5a9e54]" : "bg-[#d8431f]"}`}
      />
    </span>
  );
}

export function PriceTag({ price, accent }) {
  return (
    <span
      className="font-display font-700 text-lg md:text-xl whitespace-nowrap"
      style={{ color: accent }}
    >
      {price}
      <span className="text-sm">/-</span>
    </span>
  );
}

// Card with image for items that have a photo
export function ItemCard({ item, accent }) {
  return (
    <div className="reveal group bg-[#f6efe0] rounded-2xl overflow-hidden border border-[#e6dcc4] hover:-translate-y-1.5 transition-transform duration-300 diner-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          {typeof item.veg === "boolean" && <VegBadge veg={item.veg} />}
        </div>
        <div
          className="absolute bottom-0 right-0 text-white font-display font-700 px-4 py-1.5 rounded-tl-2xl text-lg"
          style={{ backgroundColor: accent }}
        >
          {item.price}/-
        </div>
      </div>
      <div className="p-5">
        <h4 className="font-display text-xl font-700 text-[#2b211a] leading-snug">
          {item.name}
        </h4>
        {item.desc && (
          <p className="font-body text-sm text-[#6b5a47] mt-2 leading-relaxed">
            {item.desc}
          </p>
        )}
      </div>
    </div>
  );
}

// Simple text row (dotted leader) for list-style categories
export function ListRow({ item, accent }) {
  return (
    <div className="reveal flex items-end gap-3 py-2.5">
      <div className="flex items-center gap-2 shrink-0">
        {typeof item.veg === "boolean" && <VegBadge veg={item.veg} />}
        <span className="font-display text-lg md:text-xl text-[#2b211a]">{item.name}</span>
      </div>
      <span className="flex-1 dotted-leader mb-1.5" style={{ color: accent }} />
      <PriceTag price={item.price} accent={accent} />
    </div>
  );
}

export { VegBadge };
