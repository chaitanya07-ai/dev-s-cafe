import React, { useEffect, useState } from "react";
import { Menu as MenuIcon, X, Phone } from "lucide-react";
import { Star, Heart } from "lucide-react";
import { restaurant } from "../mock";

const links = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Visit Us", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f6efe0]/95 backdrop-blur-md shadow-[0_2px_18px_-8px_rgba(34,25,18,0.5)] py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="flex flex-col items-center leading-none">
            <div className="flex gap-0.5 mb-0.5">
              {[0, 1, 2].map((i) => (
                <Star key={i} size={7} className="fill-[#d8431f] text-[#d8431f]" />
              ))}
            </div>
            <span
              className="font-western text-2xl text-[#2f5d8a]"
              style={{ textShadow: "1.5px 1.5px 0 #d8431f" }}
            >
              DEV'S
            </span>
          </div>
          <div className="hidden sm:flex flex-col leading-tight border-l border-[#caa] pl-2.5">
            <span className="font-cond text-[10px] tracking-[0.3em] text-[#d8431f]">AMERICAN</span>
            <span className="font-cond text-[10px] tracking-[0.3em] text-[#d8431f]">CAFE</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-cond uppercase text-sm tracking-widest text-[#2b211a] hover:text-[#d8431f] transition-colors relative after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-[#d8431f] hover:after:w-full after:transition-all after:duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${restaurant.phoneTel}`}
            className="flex items-center gap-2 bg-[#d8431f] hover:bg-[#bd3415] text-white font-cond uppercase tracking-wider text-sm px-4 py-2 rounded-full transition-colors"
          >
            <Phone size={15} /> Call
          </a>
        </nav>

        <button
          className="md:hidden text-[#2b211a]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <MenuIcon size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#f6efe0] border-t border-[#e0d4ba] px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-cond uppercase tracking-widest text-[#2b211a] hover:text-[#d8431f]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${restaurant.phoneTel}`}
            className="flex items-center gap-2 bg-[#d8431f] text-white font-cond uppercase tracking-wider text-sm px-4 py-2 rounded-full w-max"
          >
            <Phone size={15} /> {restaurant.phone}
          </a>
        </div>
      )}
    </header>
  );
}
