import React from 'react';
import { ASSET_IMAGES, RESTAURANT_INFO } from '../data/restaurantData';
import { ThreeLimeStars, OrangePromoBadge } from './Flourish';
import { Phone, Clock, Flame } from 'lucide-react';

interface CatchOfTheDayProps {
  onReserveOrOrder: () => void;
}

export const CatchOfTheDay: React.FC<CatchOfTheDayProps> = ({ onReserveOrOrder }) => {
  return (
    <section className="py-16 md:py-24 bg-[#faf8f4] text-[#1c1410] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typography */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Small label with 3 lime icons */}
            <div className="flex items-center gap-2">
              <span className="font-serif italic text-base md:text-lg font-bold tracking-wide text-[#f26522]">
                Luwuk Fresh Catch
              </span>
              <ThreeLimeStars />
            </div>

            {/* Display Headline */}
            <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1c1410] leading-[1.12]">
              CATCH OF THE DAY!
            </h2>

            {/* Description */}
            <p className="mt-5 text-stone-600 text-sm sm:text-base leading-relaxed">
              Every morning, local fishermen in Banggai Regency bring their freshest catch directly to our kitchen. We select the best Snapper (Kakap), Grouper (Kerapu), and Rabbitfish (Baronang), grilling them over coconut shell charcoal with Sulawesi seasonings.
            </p>

            <div className="mt-6 space-y-3 w-full">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-stone-200/70 shadow-xs">
                <Flame className="w-5 h-5 text-[#f26522] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900 uppercase">
                    Grilled with Real Coconut Charcoal
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Traditional slow flame provides an irresistible smoky crust while keeping the fish juicy and tender.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-stone-200/70 shadow-xs">
                <Clock className="w-5 h-5 text-[#b0d12a] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900 uppercase">
                    Served Fresh Until 11:00 PM
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Whether an early lunch or late-night seaside supper, we cook each order fresh on demand.
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                id="catch-call-btn"
                className="bg-[#b0d12a] hover:bg-[#9ebb20] text-[#1c1410] font-display text-sm md:text-base font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#1c1410]" />
                CALL TO ORDER: (0461) 23024
              </a>

              <button
                onClick={onReserveOrOrder}
                className="text-xs sm:text-sm font-display font-black uppercase tracking-wider text-[#f26522] hover:text-[#1c1410] underline underline-offset-4 cursor-pointer transition-colors"
              >
                Reserve a Table
              </button>
            </div>
          </div>

          {/* Right Column: Photo Composition with Orange Badge */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md md:max-w-lg aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#b0d12a]">
              <img
                src={ASSET_IMAGES.grilledFish}
                alt="Signature Indonesian Ikan Bakar at Deho Cafe"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-black/65 backdrop-blur-xs text-white p-3 rounded-xl border border-white/20 text-xs">
                <span className="font-bold text-[#b0d12a] uppercase">Signature Platter:</span>{' '}
                Ikan Bakar Rica with fresh lime & sambal dabu-dabu
              </div>
            </div>

            {/* Big Orange Badge (like Gustavo's $2.29 PER ONE!) */}
            <div className="absolute -top-6 -right-2 md:-top-4 md:-right-4 z-20">
              <OrangePromoBadge
                topText="Open Everyday"
                mainText="TILL 11 PM"
                subText="DINE-IN & TAKEAWAY"
                size="md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
