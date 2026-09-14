import React, { useState } from 'react';
import { FULL_MENU_LIST, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuItem } from '../types';
import { X, Search, Phone, Flame, Check } from 'lucide-react';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialItem?: MenuItem | null;
}

export const FullMenuModal: React.FC<FullMenuModalProps> = ({
  isOpen,
  onClose,
  initialItem,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrderItems, setSelectedOrderItems] = useState<Record<string, number>>({});

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'All Dishes' },
    { id: 'fish', label: 'Ikan Bakar' },
    { id: 'prawns-squid', label: 'Udang & Cumi' },
    { id: 'crab', label: 'Kepiting' },
    { id: 'vegetables', label: 'Sayuran' },
    { id: 'drinks', label: 'Minuman' },
  ];

  const filteredItems = FULL_MENU_LIST.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.localName && item.localName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleOrderItem = (id: string) => {
    setSelectedOrderItems((prev) => {
      const current = prev[id] || 0;
      if (current > 0) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: 1 };
    });
  };

  const totalSelected = Object.keys(selectedOrderItems).length;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-[#b0d12a] my-auto max-h-[92vh] flex flex-col animate-fadeIn">
        {/* Modal Header */}
        <div className="bg-[#1c1410] text-white p-5 sm:p-6 flex items-center justify-between border-b-2 border-stone-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#b0d12a]">
              Deho Cafe • Karaton, Luwuk
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              SEAFOOD MENU & SPECIALS
            </h3>
            <p className="text-xs text-stone-300 mt-0.5">
              Typical price: {RESTAURANT_INFO.priceRange} • Fresh daily catch
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close menu modal"
            className="w-10 h-10 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 bg-[#faf8f4] border-b border-stone-200 flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-display font-black uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#b0d12a] text-[#1c1410] shadow-sm'
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64 shrink-0">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-stone-300 rounded-full pl-9 pr-4 py-1.5 text-xs text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-[#b0d12a]"
            />
          </div>
        </div>

        {/* Items List (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 divide-y divide-stone-100">
          {filteredItems.length === 0 ? (
            <div className="py-16 text-center text-stone-500">
              <p className="text-sm font-semibold">No dishes found matching "{searchQuery}"</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-2 text-xs font-bold text-[#f26522] hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-2">
              {filteredItems.map((dish) => {
                const isSelected = !!selectedOrderItems[dish.id];

                return (
                  <div
                    key={dish.id}
                    className={`flex items-start gap-3 p-3.5 rounded-2xl border transition-all ${
                      isSelected
                        ? 'border-[#b0d12a] bg-[#fbfdf2]'
                        : 'border-stone-200/80 bg-white hover:border-stone-300'
                    }`}
                  >
                    {/* Dish Image */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-stone-100">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      {dish.isPopular && (
                        <div className="absolute top-1 left-1 bg-[#f26522] text-white p-1 rounded-full shadow-xs">
                          <Flame className="w-2.5 h-2.5" />
                        </div>
                      )}
                    </div>

                    {/* Dish Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-display text-sm sm:text-base font-black text-stone-900 uppercase leading-tight">
                            {dish.name}
                          </h4>
                          {dish.localName && (
                            <span className="text-[11px] text-stone-500 font-medium block">
                              {dish.localName}
                            </span>
                          )}
                        </div>
                        <span className="font-display font-black text-xs sm:text-sm text-[#f26522] whitespace-nowrap">
                          {dish.price}
                        </span>
                      </div>

                      <p className="mt-1.5 text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {dish.description}
                      </p>

                      <div className="mt-2.5 flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {dish.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] font-bold uppercase tracking-wider bg-stone-100 text-stone-600 px-2 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => toggleOrderItem(dish.id)}
                          className={`text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 cursor-pointer transition-colors ${
                            isSelected
                              ? 'bg-[#b0d12a] text-[#1c1410]'
                              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                          }`}
                        >
                          {isSelected ? (
                            <>
                              <Check className="w-3 h-3" /> Selected
                            </>
                          ) : (
                            '+ Select'
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer Call Action */}
        <div className="p-4 bg-[#faf8f4] border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-stone-600 text-center sm:text-left">
            <span className="font-bold text-stone-900">
              {totalSelected > 0
                ? `${totalSelected} item(s) selected for order inquiry`
                : 'Prices may vary based on fresh catch weight.'}
            </span>
            <p className="text-[11px] text-stone-500">
              Call us directly for dine-in reservations or immediate takeaway pickup.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="bg-[#b0d12a] hover:bg-[#9ebb20] text-[#1c1410] font-display text-xs sm:text-sm font-black uppercase tracking-wider px-6 py-2.5 rounded-full flex items-center gap-2 shadow-sm transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              Call to Order: {RESTAURANT_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
