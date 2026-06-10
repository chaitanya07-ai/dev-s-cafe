import React from "react";
import { Instagram, Facebook, Phone, MapPin, Heart } from "lucide-react";
import Logo from "./Logo";
import { restaurant } from "../mock";

export default function Footer() {
  return (
    <footer className="bg-[#221912] text-[#e9dcc6] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="flex justify-center md:justify-start">
            <div className="bg-[#f6efe0] rounded-2xl px-8 py-7 inline-block">
              <Logo size="md" />
            </div>
          </div>

          <div className="text-center">
            <h4 className="font-cond uppercase tracking-[0.3em] text-[#d8431f] text-sm mb-4">
              Find Us
            </h4>
            <p className="font-body text-sm text-[#cdbfa6] leading-relaxed flex items-start gap-2 justify-center">
              <MapPin size={16} className="shrink-0 mt-0.5 text-[#d8431f]" />
              {restaurant.address}
            </p>
            <a
              href={`tel:${restaurant.phoneTel}`}
              className="inline-flex items-center gap-2 mt-4 font-display text-lg hover:text-[#d8431f] transition-colors"
            >
              <Phone size={16} className="text-[#d8431f]" /> {restaurant.phone}
            </a>
          </div>

          <div className="text-center md:text-right">
            <h4 className="font-cond uppercase tracking-[0.3em] text-[#d8431f] text-sm mb-4">
              Follow
            </h4>
            <div className="flex gap-4 justify-center md:justify-end">
              <a
                href={restaurant.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="bg-white/10 hover:bg-[#d8431f] p-3 rounded-full transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={restaurant.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="bg-white/10 hover:bg-[#2f5d8a] p-3 rounded-full transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
            <p className="font-body text-sm text-[#cdbfa6] mt-4">@devswithlove</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-[#9c8f78]">
            © {new Date().getFullYear()} Dev's American Cafe. All rights reserved.
          </p>
          <p className="font-body text-xs text-[#9c8f78] flex items-center gap-1.5">
            Made with <Heart size={12} className="fill-[#d8431f] text-[#d8431f]" /> in Mohali · दिल से
          </p>
        </div>
      </div>
    </footer>
  );
}
