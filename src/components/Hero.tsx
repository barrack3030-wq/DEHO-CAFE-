import React from 'react';
import { MapPin, ArrowRight, Utensils, Star, Clock } from 'lucide-react';
import { RESTAURANT_INFO, ASSET_IMAGES } from '../data/restaurantData';
import { WavyDivider } from './Flourish';

interface HeroProps {
  onOpenMenuModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenMenuModal }) => {
  return (
    <section id="home" className="relative bg-[#1c1410] text-white overflow-hidden">
      {/* Hero Background Photographic Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSET_IMAGES.heroTable}
          alt="Deho Cafe Seafood Feast in Luwuk"
          className="w-full h-full object-cover object-center scale-102"
          referrerPolicy="no-referrer"
          fetchPriority="high"
        />
        {/* Soft, cinematic dark overlay for readability without harshness */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-[#1c1410]/95" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32 flex flex-col items-center text-center">
        {/* Refined pill label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-amber-100 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#b0d12a]" />
          <span>Restoran Seafood Segar di Karaton, Luwuk</span>
        </div>

        {/* Main Display Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase leading-[1.12] drop-shadow-sm max-w-3xl">
          Cita Rasa Seafood Segar <br className="hidden sm:inline" />
          <span className="text-[#b0d12a]">Khas Sulawesi</span>
        </h1>

        {/* Balanced, aesthetic supporting copy */}
        <p className="mt-4 sm:mt-5 text-stone-200 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed">
          Nikmati olahan ikan bakar rempah, cumi, dan udang segar hasil tangkapan nelayan lokal Banggai dengan sambal dabu-dabu khas. Tersedia santap di tempat dan takeaway.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={onOpenMenuModal}
            id="hero-view-menu-btn"
            className="bg-[#b0d12a] hover:bg-[#9ebb20] text-[#1c1410] font-display text-xs sm:text-sm font-black uppercase tracking-wider px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Utensils className="w-4 h-4 text-[#1c1410]" />
            Lihat Menu Spesial
          </button>

          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer noopener"
            id="hero-get-directions-btn"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 font-display text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-sm transition-all flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MapPin className="w-4 h-4 text-[#f26522]" />
            Petunjuk Arah
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Clean, aesthetic quick badge row (No cluttered emojis) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-stone-300">
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-white/10">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="text-white font-bold">{RESTAURANT_INFO.rating}</span>
            <span className="text-stone-400">({RESTAURANT_INFO.reviewsCount} Ulasan)</span>
          </div>

          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-white/10">
            <Clock className="w-3.5 h-3.5 text-[#b0d12a]" />
            <span>Buka Setiap Hari (10:00 – 23:00)</span>
          </div>

          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-white/10">
            <span className="text-stone-400">Harga Rata-rata:</span>
            <span className="text-white font-medium">{RESTAURANT_INFO.priceRange}</span>
          </div>
        </div>
      </div>

      {/* Elegant Wavy Divider Transition to Warm White Section */}
      <div className="relative -mb-1">
        <WavyDivider fillColor="#faf8f4" direction="down" />
      </div>
    </section>
  );
};
