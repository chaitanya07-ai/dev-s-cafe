import React from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { restaurant } from "../mock";

export default function VisitSection() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    restaurant.mapsQuery
  )}&output=embed`;

  return (
    <section id="visit" className="py-20 md:py-28 bg-[#2f5d8a] text-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-2 flex">
        <div className="flex-1 bg-[#d8431f]" />
        <div className="flex-1 bg-[#f6efe0]" />
        <div className="flex-1 bg-[#d8431f]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-cond uppercase tracking-[0.3em] text-[#ffd9cf] text-sm">Come on over</p>
          <h2 className="font-display font-900 text-5xl md:text-6xl mt-2">Visit Us</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* info cards */}
          <div className="flex flex-col gap-6">
            <div className="reveal bg-white/10 backdrop-blur rounded-2xl p-7 border border-white/15">
              <div className="flex items-start gap-4">
                <span className="bg-[#d8431f] rounded-full p-2.5 shrink-0">
                  <MapPin size={20} />
                </span>
                <div>
                  <h3 className="font-cond uppercase tracking-widest text-sm text-[#ffd9cf]">
                    Location
                  </h3>
                  <p className="font-body mt-1.5 leading-relaxed text-white/90">
                    {restaurant.address}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      restaurant.mapsQuery
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-3 font-cond uppercase tracking-wider text-sm bg-white text-[#2f5d8a] px-4 py-2 rounded-full hover:bg-[#ffd9cf] transition-colors"
                  >
                    <Navigation size={15} /> Get Directions
                  </a>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="reveal bg-white/10 backdrop-blur rounded-2xl p-7 border border-white/15">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#d8431f] rounded-full p-2.5">
                    <Phone size={18} />
                  </span>
                  <h3 className="font-cond uppercase tracking-widest text-sm text-[#ffd9cf]">
                    Call Us
                  </h3>
                </div>
                <a
                  href={`tel:${restaurant.phoneTel}`}
                  className="font-display text-2xl hover:text-[#ffd9cf] transition-colors"
                >
                  {restaurant.phone}
                </a>
              </div>

              <div className="reveal bg-white/10 backdrop-blur rounded-2xl p-7 border border-white/15">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#d8431f] rounded-full p-2.5">
                    <Clock size={18} />
                  </span>
                  <h3 className="font-cond uppercase tracking-widest text-sm text-[#ffd9cf]">
                    Hours
                  </h3>
                </div>
                <ul className="font-body text-sm space-y-1.5">
                  {restaurant.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-3">
                      <span className="text-white/80">{h.day}</span>
                      <span
                        className={
                          h.closed ? "text-[#ffb3a3] font-600" : "text-white font-500"
                        }
                      >
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* map */}
          <div className="reveal rounded-2xl overflow-hidden border-4 border-white/15 diner-shadow min-h-[360px]">
            <iframe
              title="Dev's American Cafe location"
              src={mapSrc}
              className="w-full h-full min-h-[360px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
