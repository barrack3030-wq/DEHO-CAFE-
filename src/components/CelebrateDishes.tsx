import React, { useState } from 'react';
import { CELEBRATE_DISHES } from '../data/restaurantData';
import { SectionFlourish } from './Flourish';
import { ChevronLeft, ChevronRight, Utensils } from 'lucide-react';

interface CelebrateDishesProps {
  onOpenMenuModal: () => void;
}

export const CelebrateDishes: React.FC<CelebrateDishesProps> = ({ onOpenMenuModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? CELEBRATE_DISHES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === CELEBRATE_DISHES.length - 1 ? 0 : prev + 1));
  };

  const currentDish = CELEBRATE_DISHES[currentIndex];
  const prevIndex = (currentIndex - 1 + CELEBRATE_DISHES.length) % CELEBRATE_DISHES.length;
  const nextIndex = (currentIndex + 1) % CELEBRATE_DISHES.length;

  return (
    <section className="py-16 md:py-20 bg-white text-[#1c1410] border-b border-stone-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Flourish */}
        <SectionFlourish label="Kelezatan Khas" />

        {/* Heading */}
        <h2 className="mt-2.5 font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#1c1410] uppercase">
          Eksplorasi Menu Unggulan
        </h2>

        {/* 3 Circular Food Images with Prev/Next Controls */}
        <div className="mt-10 relative max-w-3xl mx-auto flex items-center justify-center">
          {/* Previous Arrow Button */}
          <button
            onClick={prevSlide}
            id="prev-dish-btn"
            aria-label="Previous Dish"
            className="absolute left-0 sm:left-2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-stone-300 hover:border-[#b0d12a] hover:bg-[#b0d12a] text-stone-700 hover:text-[#1c1410] shadow-sm flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* 3 Circle Images Row */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10 w-full px-10">
            {/* Left Circular Dish */}
            <div
              onClick={prevSlide}
              className="hidden sm:block w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-stone-200 opacity-50 hover:opacity-90 transition-all cursor-pointer shrink-0 group"
            >
              <img
                src={CELEBRATE_DISHES[prevIndex].image}
                alt={CELEBRATE_DISHES[prevIndex].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Center Circular Dish (Aesthetic 4px border, not overwhelming 8px) */}
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#b0d12a] shadow-xl shrink-0 p-1 bg-white">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={currentDish.image}
                  alt={currentDish.name}
                  className="w-full h-full object-cover scale-102 hover:scale-108 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Price badge floating on center image */}
              <div className="absolute bottom-2.5 right-6 bg-[#f26522] text-white px-3 py-1 rounded-full text-xs font-display font-black tracking-wider uppercase shadow-md border-2 border-white">
                {currentDish.price}
              </div>
            </div>

            {/* Right Circular Dish */}
            <div
              onClick={nextSlide}
              className="hidden sm:block w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-stone-200 opacity-50 hover:opacity-90 transition-all cursor-pointer shrink-0 group"
            >
              <img
                src={CELEBRATE_DISHES[nextIndex].image}
                alt={CELEBRATE_DISHES[nextIndex].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Next Arrow Button */}
          <button
            onClick={nextSlide}
            id="next-dish-btn"
            aria-label="Next Dish"
            className="absolute right-0 sm:right-2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-stone-300 hover:border-[#b0d12a] hover:bg-[#b0d12a] text-stone-700 hover:text-[#1c1410] shadow-sm flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Center Dish Details underneath */}
        <div className="mt-7 max-w-lg mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f26522]">
            {currentDish.tagline}
          </span>
          <h3 className="mt-1 font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1c1410]">
            {currentDish.name}
          </h3>
          <p className="mt-2.5 text-stone-600 text-xs sm:text-sm leading-relaxed">
            {currentDish.description}
          </p>

          <div className="mt-4">
            <button
              onClick={onOpenMenuModal}
              className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-[#6d850e] hover:text-[#1c1410] uppercase tracking-wider py-1 border-b border-[#b0d12a] cursor-pointer transition-colors"
            >
              <Utensils className="w-3.5 h-3.5" />
              Lihat Menu Selengkapnya
            </button>
          </div>

          {/* Slide Indicator Dots */}
          <div className="mt-5 flex justify-center gap-2">
            {CELEBRATE_DISHES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx
                    ? 'bg-[#f26522] w-6'
                    : 'bg-stone-300 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
