import React, { useState } from 'react';
import { CIRCULAR_MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { SectionFlourish, WavyDivider } from './Flourish';
import { MenuItem } from '../types';
import { Utensils } from 'lucide-react';

interface MenuSectionProps {
  onOpenFullMenu: () => void;
  onSelectMenuItem: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onOpenFullMenu,
  onSelectMenuItem,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fish' | 'prawns-squid' | 'crab' | 'vegetables' | 'drinks'>('all');

  const filteredItems = activeFilter === 'all'
    ? CIRCULAR_MENU_ITEMS
    : CIRCULAR_MENU_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="menu" className="relative bg-[#1c1410] text-white py-20 md:py-28 overflow-hidden">
      {/* Top Wavy Edge Divider */}
      <div className="absolute top-0 inset-x-0 -mt-1 z-20">
        <WavyDivider fillColor="#ffffff" direction="down" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6">
        {/* Top Label */}
        <SectionFlourish
          label="Daftar Menu"
          textColor="text-[#b0d12a]"
          strokeColor="#b0d12a"
        />

        {/* Main Display Headline */}
        <h2 className="mt-2.5 font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
          Menu Pilihan Deho Cafe
        </h2>

        <p className="mt-2 text-stone-300 max-w-lg mx-auto text-sm sm:text-base font-normal">
          Berbagai hidangan laut segar dengan bumbu rempah pilihan. Kisaran harga {RESTAURANT_INFO.priceRange}.
        </p>

        {/* Clean, Refined Category Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'Semua Menu' },
            { id: 'fish', label: 'Ikan Bakar' },
            { id: 'prawns-squid', label: 'Udang & Cumi' },
            { id: 'crab', label: 'Kepiting' },
            { id: 'vegetables', label: 'Sayuran' },
            { id: 'drinks', label: 'Minuman' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#b0d12a] text-[#1c1410] shadow-sm font-bold'
                  : 'bg-white/10 hover:bg-white/20 text-stone-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Aesthetic Circular Menu Items Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-7">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectMenuItem(item)}
              className="group flex flex-col items-center cursor-pointer transform hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Circular Plate Image Frame */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full p-1 bg-stone-800 border-2 border-stone-700 group-hover:border-[#b0d12a] shadow-lg transition-all overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <span className="text-[10px] font-bold text-[#b0d12a] uppercase tracking-wider bg-black/80 px-2 py-0.5 rounded">
                    Lihat
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-3.5 font-display text-sm font-bold uppercase tracking-wider text-white group-hover:text-[#b0d12a] transition-colors line-clamp-1">
                {item.name}
              </h3>

              {/* Price */}
              <span className="text-xs font-semibold text-[#b0d12a] mt-0.5">
                {item.price}
              </span>

              {/* Short local note */}
              <span className="text-[11px] text-stone-400 mt-0.5 line-clamp-1 max-w-[130px] text-center">
                {item.localName}
              </span>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 sm:mt-14">
          <button
            onClick={onOpenFullMenu}
            id="menu-view-all-btn"
            className="bg-[#b0d12a] hover:bg-[#9ebb20] text-[#1c1410] font-display text-xs sm:text-sm font-black uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer inline-flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            <Utensils className="w-4 h-4 text-[#1c1410]" />
            Buka Daftar Menu Lengkap
          </button>
        </div>
      </div>

      {/* Bottom Wavy Divider */}
      <div className="absolute bottom-0 inset-x-0 -mb-1 z-20">
        <WavyDivider fillColor="#faf8f4" direction="up" />
      </div>
    </section>
  );
};
