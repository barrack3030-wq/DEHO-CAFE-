import React from 'react';
import { ASSET_IMAGES, RESTAURANT_INFO } from '../data/restaurantData';
import { ThreeLimeStars, OrangePromoBadge } from './Flourish';

interface FullWidthBannerProps {
  onOpenMenuModal: () => void;
}

export const FullWidthBanner: React.FC<FullWidthBannerProps> = ({ onOpenMenuModal }) => {
  return (
    <section className="relative bg-[#1c1410] text-white py-20 md:py-28 overflow-hidden">
      {/* Background Sizzling Food Photographic Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSET_IMAGES.seafoodHotplate}
          alt="Sizzling Sulawesi Seafood at Deho Cafe"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Column: Heading & Content */}
          <div className="max-w-2xl text-left">
            {/* Small Label with 3 lime icons */}
            <div className="flex items-center gap-2">
              <span className="font-serif italic text-lg md:text-xl font-bold tracking-wide text-[#b0d12a]">
                It's Fresh!
              </span>
              <ThreeLimeStars />
            </div>

            {/* Massive Display Headline */}
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.1]">
              THE REAL TASTE OF SULAWESI SEAFOOD!
            </h2>

            {/* Subtitle */}
            <p className="mt-5 text-stone-300 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
              We offer authentic Indonesian seafood favorites: charcoal-grilled snapper, wild tiger prawns in sweet chili glaze, crispy calamari rings, spicy crab saus Padang, and crisp stir-fried water spinach. Prepared hot and served fresh every evening in Karaton.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenMenuModal}
                id="banner-view-menu-btn"
                className="bg-[#b0d12a] hover:bg-[#9ebb20] text-[#1c1410] font-display text-sm md:text-base font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                VIEW FULL MENU
              </button>
              
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="text-white hover:text-[#b0d12a] text-sm md:text-base font-bold uppercase tracking-wider px-4 py-3 underline underline-offset-4 transition-colors"
              >
                Call: {RESTAURANT_INFO.phone}
              </a>
            </div>
          </div>

          {/* Right Column: Big Orange Scalloped Badge (like Gustavo's $8.29 IT'S FAJITAS DAY!) */}
          <div className="shrink-0 flex justify-center">
            <OrangePromoBadge
              topText="Google Rated 4.4 ★"
              mainText="944 REVIEWS"
              subText="Luwuk's Coastal Favorite"
              size="lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
