import React from 'react';
import { WHY_VISIT_PILLARS } from '../data/restaurantData';
import { SectionFlourish } from './Flourish';
import { Anchor, Sparkles, Heart } from 'lucide-react';

export const WhyVisit: React.FC = () => {
  const iconList = [
    <Anchor key="1" className="w-5 h-5 text-[#b0d12a]" />,
    <Sparkles key="2" className="w-5 h-5 text-[#f26522]" />,
    <Heart key="3" className="w-5 h-5 text-[#b0d12a]" />,
  ];

  return (
    <section className="py-16 md:py-24 bg-white text-[#1c1410] border-t border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Flourish */}
        <SectionFlourish label="Experience" />

        {/* Heading */}
        <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1c1410] uppercase">
          WHY VISIT DEHO CAFE
        </h2>

        <p className="mt-3 text-stone-600 max-w-xl mx-auto text-sm sm:text-base">
          From early fishermen catches to comforting evening dinners, here is why locals and visitors choose Deho Cafe in Luwuk.
        </p>

        {/* 3 Cards matching the Gustavo profile layout with lime frames */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_VISIT_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="bg-white border-4 border-[#b0d12a] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group text-left"
            >
              {/* Image Frame */}
              <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-stone-900">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Floating Icon Badge */}
                <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-md">
                  {iconList[idx]}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#f26522]">
                    {pillar.subtitle}
                  </span>
                  <h3 className="mt-1 font-display text-lg sm:text-xl font-black uppercase text-[#1c1410]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-500 uppercase">
                  <span>Deho Hospitality</span>
                  <span className="text-[#b0d12a] font-black">Karaton • Luwuk</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
