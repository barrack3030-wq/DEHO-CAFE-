import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Instagram, Facebook, Phone, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#140d09] text-stone-400 py-16 border-t border-stone-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Centered Brand Emblem Logo matching Gustavo */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#f26522] border-4 border-[#b0d12a] flex flex-col items-center justify-center text-white shadow-xl mb-3">
            <span className="text-[10px] font-bold tracking-widest text-[#b0d12a] uppercase">Luwuk</span>
            <span className="font-display text-base font-black leading-none tracking-tight">DEHO</span>
            <span className="text-[9px] font-semibold text-amber-100">CAFE</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
            DEHO <span className="text-[#f26522]">CAFE</span>
          </h3>
          <p className="text-xs font-semibold text-[#b0d12a] uppercase tracking-widest mt-1">
            Seafood Restaurant • Karaton, Luwuk
          </p>
        </div>

        {/* Social Icons Row */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 hover:border-[#b0d12a] hover:bg-[#b0d12a] hover:text-[#1c1410] text-stone-300 flex items-center justify-center transition-all"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 hover:border-[#b0d12a] hover:bg-[#b0d12a] hover:text-[#1c1410] text-stone-300 flex items-center justify-center transition-all"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            aria-label="Call Phone"
            className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 hover:border-[#b0d12a] hover:bg-[#b0d12a] hover:text-[#1c1410] text-stone-300 flex items-center justify-center transition-all"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Google Maps"
            className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 hover:border-[#b0d12a] hover:bg-[#b0d12a] hover:text-[#1c1410] text-stone-300 flex items-center justify-center transition-all"
          >
            <MapPin className="w-5 h-5" />
          </a>
        </div>

        {/* Navigation row */}
        <nav className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider text-stone-300">
          <a href="#home" className="hover:text-[#b0d12a] transition-colors">Home</a>
          <span>•</span>
          <a href="#about" className="hover:text-[#b0d12a] transition-colors">About Us</a>
          <span>•</span>
          <a href="#menu" className="hover:text-[#b0d12a] transition-colors">Menu</a>
          <span>•</span>
          <a href="#specials" className="hover:text-[#b0d12a] transition-colors">Specials</a>
          <span>•</span>
          <a href="#gallery" className="hover:text-[#b0d12a] transition-colors">Gallery</a>
          <span>•</span>
          <a href="#reviews" className="hover:text-[#b0d12a] transition-colors">Reviews</a>
          <span>•</span>
          <a href="#location" className="hover:text-[#b0d12a] transition-colors">Location</a>
          <span>•</span>
          <a href="#contact" className="hover:text-[#b0d12a] transition-colors">Contact</a>
        </nav>

        {/* Business address & contact details */}
        <div className="mt-8 pt-8 border-t border-stone-800/80 max-w-2xl text-xs leading-relaxed text-stone-400">
          <p className="font-medium">
            <strong className="text-white">Address:</strong> {RESTAURANT_INFO.fullAddress}
          </p>
          <p className="mt-1">
            <strong className="text-white">Phone:</strong> {RESTAURANT_INFO.phone} •{' '}
            <strong className="text-white">Hours:</strong> {RESTAURANT_INFO.hours} •{' '}
            <strong className="text-[#b0d12a]">{RESTAURANT_INFO.services.join(' & ')}</strong>
          </p>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between w-full text-[11px] text-stone-500 pt-6 border-t border-stone-900">
          <p>© {new Date().getFullYear()} Deho Cafe. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-3 sm:mt-0">
            <span>Seafood Restaurant in Luwuk, Banggai Regency</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            >
              Back to top <ArrowUp className="w-3 h-3 text-[#b0d12a]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
