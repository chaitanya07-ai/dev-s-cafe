import React, { useState } from "react";
import { Star } from "lucide-react";
import { menu } from "../mock";
import { ItemCard, ListRow, PriceTag } from "./MenuItems";

function SectionHeader({ title, subtitle, accent }) {
  return (
    <div className="text-center mb-10" style={{ color: accent }}>
      <h3 className="font-display font-900 text-4xl md:text-5xl text-[#2b211a]">{title}</h3>
      <div className="flex items-center justify-center gap-3 mt-3">
        <span className="h-px w-20 md:w-28" style={{ background: accent, opacity: 0.5 }} />
        <Star size={16} className="fill-current" />
        <span className="h-px w-20 md:w-28" style={{ background: accent, opacity: 0.5 }} />
      </div>
      {subtitle && (
        <p className="font-body italic text-[#6b5a47] mt-3 max-w-xl mx-auto text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function CategoryBlock({ cat }) {
  return (
    <div
      className="rounded-3xl px-5 py-12 md:px-12 md:py-16 mb-10 border border-[#e6dcc4]"
      style={{ backgroundColor: cat.soft }}
    >
      <SectionHeader title={cat.title} subtitle={cat.subtitle} accent={cat.accent} />

      {/* card grid items */}
      {cat.items && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cat.items.map((it) => (
            <ItemCard key={it.name} item={it} accent={cat.accent} />
          ))}
        </div>
      )}

      {/* finger-food groups (image + sub-list) */}
      {cat.groups && (
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cat.groups.map((g) => (
            <div
              key={g.label}
              className="reveal bg-[#f6efe0] rounded-2xl overflow-hidden border border-[#e6dcc4] diner-shadow"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={g.img}
                  alt={g.label}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h4
                  className="font-display font-800 text-2xl mb-3"
                  style={{ color: cat.accent }}
                >
                  {g.label}
                </h4>
                {g.items.map((it) => (
                  <ListRow key={it.name} item={it} accent={cat.accent} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* drink/sides photo strip + list */}
      {cat.list && (
        <div className="max-w-5xl mx-auto">
          {cat.imgs && (
            <div className="grid grid-cols-3 gap-4 mb-9">
              {cat.imgs.map((src, i) => (
                <div
                  key={i}
                  className="reveal h-36 md:h-48 rounded-2xl overflow-hidden border border-[#e6dcc4] diner-shadow"
                >
                  <img
                    src={src}
                    alt="drink"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          )}
          <div className="bg-[#f6efe0] rounded-2xl border border-[#e6dcc4] px-6 py-6 md:px-10 md:py-8 diner-shadow">
            <div className="grid sm:grid-cols-2 gap-x-12">
              {cat.list.map((it) => (
                <ListRow key={it.name} item={it} accent={cat.accent} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function MenuSection() {
  const tabs = [
    { id: "all", label: "All" },
    ...menu.map((c) => ({ id: c.id, label: c.title })),
  ];
  const [active, setActive] = useState("all");
  const shown = active === "all" ? menu : menu.filter((c) => c.id === active);

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#f6efe0]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <p className="font-cond uppercase tracking-[0.3em] text-[#d8431f] text-sm">
            Eat · Drink · Repeat
          </p>
          <h2 className="font-display font-900 text-5xl md:text-6xl text-[#2f5d8a] mt-2">
            The Menu
          </h2>
          <p className="font-body text-[#6b5a47] mt-3">
            Prices subject to change without prior notice. (GST is extra.)
          </p>
        </div>

        {/* sticky filter tabs */}
        <div className="sticky top-[64px] z-30 -mx-4 px-4 py-3 mb-8 bg-[#f6efe0]/95 backdrop-blur-md">
          <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-1 justify-start md:justify-center">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`font-cond uppercase tracking-wider text-xs md:text-sm px-4 py-2 rounded-full whitespace-nowrap transition-all border ${
                  active === t.id
                    ? "bg-[#d8431f] text-white border-[#d8431f]"
                    : "bg-[#f6efe0] text-[#5a4a3a] border-[#d8c9aa] hover:border-[#d8431f] hover:text-[#d8431f]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {shown.map((cat) => (
          <CategoryBlock key={cat.id} cat={cat} />
        ))}
      </div>
    </section>
  );
}
