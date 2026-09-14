import React from 'react';
import { ASSET_IMAGES, RESTAURANT_INFO } from '../data/restaurantData';
import { OrangePromoBadge } from './Flourish';
import { Star, CheckCircle2 } from 'lucide-react';

interface PromoSplitProps {
  onExploreSpecials: () => void;
}

export const PromoSplit: React.FC<PromoSplitProps> = ({ onExploreSpecials }) => {
  return (
    <section id="specials" className="py-16 md:py-20 bg-white text-[#1c1410] border-y border-stone-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Side: Photo Composition with subtle border and badge */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Main Rounded Image Frame */}
            <div className="relative w-full max-w-md md:max-w-lg aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-stone-200">
              <img
                src={ASSET_IMAGES.diningAmbiance}
                alt="Deho Cafe Dining Ambiance in Luwuk"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium bg-black/60 backdrop-blur-xs p-2.5 rounded-xl border border-white/20">
                📍 Karaton, Luwuk • Suasana santai untuk keluarga & sahabat
              </div>
            </div>

            {/* Orange Round Badge overlapping the image */}
            <div className="absolute -bottom-4 -right-2 md:bottom-2 md:-right-4 z-20">
              <OrangePromoBadge
                topText="Kisaran Harga"
                mainText="Rp25k-75k"
                subText="PER ORANG"
                size="md"
              />
            </div>
          </div>

          {/* Right Side: Typography & Description */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f26522]">
              Suasana Nyaman & Santai
            </span>

            {/* Bold Headline */}
            <h2 className="mt-1.5 font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#1c1410] leading-tight">
              Makan Enak, Suasana Hangat di Luwuk
            </h2>

            {/* Body Text */}
            <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <strong>Deho Cafe</strong> menjadi pilihan tepat di Luwuk untuk menikmati aneka hidangan laut segar khas Sulawesi. Diproses dengan bumbu rempah pilihan, pemanggangan arang kelapa tradisional, dan sambal dabu-dabu pedas segar.
            </p>

            {/* Key Quality Pillars */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-800 bg-[#faf8f4] p-3 rounded-xl border border-stone-200/60">
                <CheckCircle2 className="w-4 h-4 text-[#8da819] shrink-0" />
                <span>Ikan Segar Hasil Tangkapan Harian</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-800 bg-[#faf8f4] p-3 rounded-xl border border-stone-200/60">
                <CheckCircle2 className="w-4 h-4 text-[#8da819] shrink-0" />
                <span>Bumbu Rempah Sulawesi Otentik</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-800 bg-[#faf8f4] p-3 rounded-xl border border-stone-200/60">
                <CheckCircle2 className="w-4 h-4 text-[#8da819] shrink-0" />
                <span>Makan di Tempat & Pesan Antar</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-800 bg-[#faf8f4] p-3 rounded-xl border border-stone-200/60">
                <CheckCircle2 className="w-4 h-4 text-[#8da819] shrink-0" />
                <span>Buka Setiap Hari s/d Pukul 23:00</span>
              </div>
            </div>

            {/* Rating Highlight Pill */}
            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-stone-700">
                <strong>{RESTAURANT_INFO.rating} / 5.0</strong> ({RESTAURANT_INFO.reviewsCount} Google Reviews)
              </span>
            </div>

            {/* Button */}
            <div className="mt-6">
              <button
                onClick={onExploreSpecials}
                id="promo-explore-btn"
                className="bg-[#b0d12a] hover:bg-[#9ebb20] text-[#1c1410] font-display text-xs sm:text-sm font-black uppercase tracking-wider px-7 py-3 rounded-full shadow-sm hover:shadow transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                Eksplorasi Menu & Harga
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
