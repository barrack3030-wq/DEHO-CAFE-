import React from 'react';
import { FEATURE_CARDS } from '../data/restaurantData';
import { SectionFlourish } from './Flourish';
import { ArrowUpRight } from 'lucide-react';

interface FeaturedCardsProps {
  onSelectCard: (id: string) => void;
}

export const FeaturedCards: React.FC<FeaturedCardsProps> = ({ onSelectCard }) => {
  return (
    <section id="about" className="py-16 md:py-20 bg-[#faf8f4] text-[#1c1410]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Clean, balanced spacing */}
        <div className="text-center max-w-2xl mx-auto">
          <SectionFlourish label="Pilihan Utama" />

          <h2 className="mt-2.5 font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#1c1410] uppercase">
            Hidangan Favorit Deho Cafe
          </h2>

          <p className="mt-2.5 text-stone-600 text-sm sm:text-base leading-relaxed">
            Ikan laut segar pilihan yang diolah langsung dengan bumbu otentik Sulawesi untuk cita rasa terbaik di Luwuk.
          </p>
        </div>

        {/* 3 Refined, Aesthetic Cards - No clunky 4px borders */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {FEATURE_CARDS.map((card, idx) => (
            <div
              key={card.id}
              onClick={() => onSelectCard(card.id)}
              className="group relative bg-white border border-stone-200/80 hover:border-stone-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-stone-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Refined Tasteful Tag */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#1c1410] px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-xs border border-stone-200">
                  {idx === 0 ? 'Paling Populer' : idx === 1 ? 'Rekomendasi Chef' : 'Santap / Bawa Pulang'}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-lg sm:text-xl font-black uppercase text-[#1c1410] group-hover:text-[#f26522] transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-[#b0d12a] flex items-center justify-center shrink-0 transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-stone-700 group-hover:text-[#1c1410]" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="font-medium text-stone-400">
                    {idx === 0 ? 'Panggang Arang Kelapa' : idx === 1 ? 'Hasil Laut Harian' : 'Buka Setiap Hari'}
                  </span>
                  <span className="font-bold text-[#f26522] group-hover:underline">
                    Lihat Pilihan
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
