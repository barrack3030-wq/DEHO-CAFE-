import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { SectionFlourish } from './Flourish';
import { Star, Award, ThumbsUp, ShieldCheck, MapPin } from 'lucide-react';

export const ReviewsSummary: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#faf8f4] text-[#1c1410] border-t border-stone-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Flourish */}
        <SectionFlourish label="Guest Feedback" />

        {/* Heading */}
        <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1c1410] uppercase">
          COMMUNITY RATING & TRUST
        </h2>

        <p className="mt-3 text-stone-600 max-w-lg mx-auto text-sm sm:text-base">
          Deho Cafe is trusted and loved by hundreds of diners in Luwuk, Banggai Regency, and travelers across Indonesia.
        </p>

        {/* Large Central Credibility Card matching the clean, elegant card style */}
        <div className="mt-10 bg-white border-4 border-[#b0d12a] rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#b0d12a]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col items-center">
            {/* Google Verified Badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-stone-100 text-stone-700 text-xs font-bold uppercase tracking-wider mb-4 border border-stone-200">
              <ShieldCheck className="w-4 h-4 text-[#8da819]" />
              Verified Public Google Maps Rating
            </div>

            {/* Giant Rating Number */}
            <div className="flex items-baseline gap-2">
              <span className="font-display text-6xl sm:text-7xl md:text-8xl font-black text-[#1c1410] tracking-tight">
                {RESTAURANT_INFO.rating}
              </span>
              <span className="text-2xl sm:text-3xl font-display font-bold text-stone-400">
                / 5.0
              </span>
            </div>

            {/* 5 Big Gold Stars */}
            <div className="flex items-center gap-1.5 text-amber-400 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-7 h-7 sm:w-8 sm:h-8 fill-amber-400 text-amber-400 ${
                    i === 4 ? 'opacity-80' : ''
                  }`}
                />
              ))}
            </div>

            {/* Review Count Credibility Statement */}
            <div className="mt-4">
              <span className="font-display text-xl sm:text-2xl font-black text-[#f26522] uppercase tracking-wide">
                Based on {RESTAURANT_INFO.reviewsCount} Customer Reviews
              </span>
            </div>

            <p className="mt-2 text-stone-500 text-xs sm:text-sm max-w-md">
              Evaluated on food taste, fresh local seafood ingredients, atmosphere in Karaton, and value for money.
            </p>

            {/* 3 Metric Badges */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full border-t border-stone-200/80 pt-6">
              <div className="flex flex-col items-center p-3 rounded-xl bg-[#faf8f4]">
                <Award className="w-5 h-5 text-[#f26522] mb-1" />
                <span className="font-display text-sm font-black text-stone-900 uppercase">
                  Fresh Catch
                </span>
                <span className="text-xs text-stone-500">Daily Banggai Seafood</span>
              </div>

              <div className="flex flex-col items-center p-3 rounded-xl bg-[#faf8f4]">
                <ThumbsUp className="w-5 h-5 text-[#b0d12a] mb-1" />
                <span className="font-display text-sm font-black text-stone-900 uppercase">
                  Fair Pricing
                </span>
                <span className="text-xs text-stone-500">Rp25k–75k per person</span>
              </div>

              <div className="flex flex-col items-center p-3 rounded-xl bg-[#faf8f4]">
                <MapPin className="w-5 h-5 text-[#f26522] mb-1" />
                <span className="font-display text-sm font-black text-stone-900 uppercase">
                  Prime Spot
                </span>
                <span className="text-xs text-stone-500">Karaton, Central Sulawesi</span>
              </div>
            </div>

            {/* Google Maps Link */}
            <div className="mt-8">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                id="reviews-view-google-maps-btn"
                className="inline-flex items-center gap-2 bg-[#1c1410] hover:bg-stone-800 text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all"
              >
                Read & Verify on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
