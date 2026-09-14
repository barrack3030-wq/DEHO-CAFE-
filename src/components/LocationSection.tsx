import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { SectionFlourish } from './Flourish';
import { MapPin, Navigation, Phone, Clock, Copy, Check } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    RESTAURANT_INFO.fullAddress
  )}`;

  return (
    <section id="location" className="py-16 md:py-24 bg-white text-[#1c1410] border-t border-stone-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Top Flourish */}
          <SectionFlourish label="Find Us" />

          {/* Heading */}
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1c1410] uppercase">
            LOCATION IN LUWUK, BANGGAI
          </h2>

          <p className="mt-3 text-stone-600 max-w-xl mx-auto text-sm sm:text-base">
            Nestled in Karaton, Luwuk — where the lush green hills meet the sapphire waters of Central Sulawesi.
          </p>
        </div>

        {/* 2-Column Story + Map Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Story & Contact Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#faf8f4] border-4 border-[#b0d12a] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#f26522] block">
                Central Sulawesi Seafood Destination
              </span>
              <h3 className="mt-1 font-display text-2xl font-black uppercase text-[#1c1410]">
                Deho Cafe Karaton
              </h3>

              <p className="mt-4 text-stone-600 text-sm leading-relaxed">
                Whether you are exploring the pristine diving waters of the Banggai archipelago, traveling through Luwuk, or looking for a memorable family dinner, our doors are open every day until late evening.
              </p>

              {/* Information list */}
              <div className="mt-6 space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#b0d12a]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#8da819]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-stone-900 uppercase block">Address</span>
                    <p className="text-xs sm:text-sm text-stone-600 mt-0.5 font-medium leading-normal">
                      {RESTAURANT_INFO.fullAddress}
                    </p>
                    <button
                      onClick={handleCopyAddress}
                      className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-[#f26522] hover:text-[#1c1410] transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-600">Copied to clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#b0d12a]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#8da819]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-stone-900 uppercase block">Hours</span>
                    <p className="text-xs sm:text-sm text-stone-600 mt-0.5 font-medium">
                      {RESTAURANT_INFO.hours}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#b0d12a]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#8da819]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-stone-900 uppercase block">Phone</span>
                    <a
                      href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                      className="text-xs sm:text-sm text-[#f26522] font-bold hover:underline"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Navigation Button */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer noopener"
                id="location-get-directions-btn"
                className="w-full bg-[#b0d12a] hover:bg-[#9ebb20] text-[#1c1410] font-display text-sm font-black uppercase tracking-wider py-3.5 px-6 rounded-full shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Navigation className="w-4 h-4" />
                GET DIRECTIONS ON GOOGLE MAPS
              </a>
            </div>
          </div>

          {/* Interactive Map Embed Container (7 cols) */}
          <div className="lg:col-span-7 bg-stone-100 rounded-3xl overflow-hidden shadow-lg border-4 border-stone-200 relative min-h-[380px] flex flex-col">
            {/* Google Map iframe */}
            <iframe
              title="Deho Cafe Location Map in Luwuk"
              src={RESTAURANT_INFO.googleMapsEmbedUrl}
              className="w-full h-full min-h-[380px] border-0 flex-1"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Quick Map Overlay Bar */}
            <div className="bg-white/95 backdrop-blur-xs p-3.5 border-t border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold text-stone-800">
                  Deho Cafe • Karaton, Luwuk (Plus Code: 2QRV+99F)
                </span>
              </div>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-xs font-display font-black text-[#f26522] hover:text-[#1c1410] uppercase tracking-wider"
              >
                Open Full Map →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
