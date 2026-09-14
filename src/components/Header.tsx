import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, ChevronRight, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeaderProps {
  onOpenMenuModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMenuModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Focused, clean navigation links (not crowded with 8 redundant tabs)
  const navLinks = [
    { label: 'Menu Spesial', href: '#menu' },
    { label: 'Tentang Kami', href: '#about' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'Ulasan', href: '#reviews' },
    { label: 'Lokasi & Kontak', href: '#location' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-stone-200/80'
          : 'bg-white/90 backdrop-blur-xs py-4 border-b border-stone-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Aesthetic Logo Branding */}
        <a href="#home" className="flex items-center gap-3 group">
          {/* Refined emblem with balanced dimensions */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f26522] to-[#d44d0e] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
            <span className="font-display font-black text-lg tracking-tight text-white">D</span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display text-xl sm:text-2xl font-black text-[#1c1410] tracking-tight leading-none group-hover:text-[#f26522] transition-colors">
                DEHO
              </span>
              <span className="font-display text-xl sm:text-2xl font-light text-[#f26522] tracking-tight leading-none">
                CAFE
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-stone-500 uppercase mt-0.5">
              Seafood • Luwuk, Banggai
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links - Clean, spacious & aesthetic */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs lg:text-sm font-semibold tracking-wide text-stone-700 hover:text-[#f26522] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#f26522] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Side: Quick Phone & Primary Action */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            id="header-phone-quick"
            className="flex items-center gap-2 text-xs font-semibold text-stone-700 hover:text-[#f26522] transition-colors px-3 py-1.5 rounded-full hover:bg-stone-100"
          >
            <Phone className="w-3.5 h-3.5 text-[#f26522]" />
            <span>(0461) 23024</span>
          </a>

          <button
            onClick={onOpenMenuModal}
            id="header-view-menu-btn"
            className="bg-[#b0d12a] hover:bg-[#9ebb20] text-[#1c1410] font-display text-xs md:text-sm font-black px-5 py-2.5 rounded-full shadow-xs hover:shadow transition-all uppercase tracking-wider cursor-pointer"
          >
            Lihat Menu
          </button>
        </div>

        {/* Mobile Hamburger Toggle & Quick Menu CTA */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenMenuModal}
            className="bg-[#b0d12a] text-[#1c1410] font-black text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider"
          >
            Menu
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle Navigation Menu"
            className="p-2 text-stone-800 hover:text-[#f26522] rounded-lg focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Clean Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 px-5 pt-3 pb-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-stone-800 hover:text-[#f26522] font-semibold text-sm py-2.5 border-b border-stone-100"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-3 flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-xs text-stone-500 py-1">
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                Buka sampai 23:00
              </span>
              <span className="font-semibold text-[#f26522]">Rp25k – 75k</span>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-1">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-1.5 py-2.5 bg-stone-100 text-stone-800 rounded-xl text-xs font-bold"
              >
                <Phone className="w-3.5 h-3.5 text-[#f26522]" />
                Hubungi Kami
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMenuModal();
                }}
                className="bg-[#b0d12a] text-[#1c1410] font-black text-xs py-2.5 rounded-xl uppercase tracking-wider"
              >
                Buka Menu
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-xs text-stone-400 pt-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Karaton, Luwuk, Banggai</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
