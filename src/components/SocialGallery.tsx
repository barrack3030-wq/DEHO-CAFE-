import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/restaurantData';
import { Instagram, ZoomIn, X, ExternalLink } from 'lucide-react';
import { GalleryPhoto } from '../types';

export const SocialGallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  return (
    <section id="gallery" className="relative bg-[#faf8f4] overflow-hidden">
      {/* Top Bright Orange Banner matching Gustavo's #GUSTAVO banner */}
      <div className="bg-[#f26522] py-8 md:py-10 px-4 text-white relative overflow-hidden">
        {/* Subtle patterned elements */}
        <div className="absolute inset-0 opacity-10 flex justify-between pointer-events-none select-none">
          <span className="font-display text-8xl">DEHO</span>
          <span className="font-display text-8xl">SEAFOOD</span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <Instagram className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-200">
                Instagram & Guest Moments
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
                #DEHOCAFE
              </h2>
            </div>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            id="gallery-follow-btn"
            className="bg-[#b0d12a] hover:bg-[#9ebb20] text-[#1c1410] font-display text-xs sm:text-sm font-black uppercase tracking-wider px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
          >
            <Instagram className="w-4 h-4 text-[#1c1410]" />
            FOLLOW US @DEHOCAFE
          </a>
        </div>
      </div>

      {/* 12-Tile Photo Collage Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-1 bg-stone-900">
        {GALLERY_PHOTOS.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setActivePhoto(photo)}
            className="group relative aspect-square overflow-hidden bg-stone-800 cursor-pointer"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            {/* Hover Dark Overlay with Zoom & Category Badge */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-center text-white">
              <ZoomIn className="w-6 h-6 text-[#b0d12a] mb-1.5" />
              <span className="font-display text-xs font-black uppercase tracking-wider line-clamp-1">
                {photo.title}
              </span>
              <span className="text-[10px] text-amber-200 font-bold uppercase mt-0.5">
                {photo.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Photo Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full bg-[#1c1410] rounded-2xl overflow-hidden shadow-2xl border-2 border-stone-700 animate-fadeIn">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/70 text-white hover:text-[#b0d12a] flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Close photo"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-h-[75vh] w-full overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="max-h-[75vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 bg-[#1c1410] text-white flex items-center justify-between border-t border-stone-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#b0d12a]">
                  {activePhoto.category} • Deho Cafe
                </span>
                <h4 className="font-display text-base sm:text-lg font-black uppercase text-white">
                  {activePhoto.title}
                </h4>
              </div>
              <a
                href={activePhoto.src}
                target="_blank"
                rel="noreferrer noopener"
                className="text-xs font-bold text-stone-300 hover:text-[#b0d12a] flex items-center gap-1"
              >
                View Full Image <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
