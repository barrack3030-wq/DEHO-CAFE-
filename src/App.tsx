import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedCards } from './components/FeaturedCards';
import { PromoSplit } from './components/PromoSplit';
import { FullWidthBanner } from './components/FullWidthBanner';
import { CelebrateDishes } from './components/CelebrateDishes';
import { MenuSection } from './components/MenuSection';
import { CatchOfTheDay } from './components/CatchOfTheDay';
import { WhyVisit } from './components/WhyVisit';
import { SocialGallery } from './components/SocialGallery';
import { ReviewsSummary } from './components/ReviewsSummary';
import { LocationSection } from './components/LocationSection';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';
import { FullMenuModal } from './components/FullMenuModal';
import { MenuItem } from './types';

export default function App() {
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);

  const handleOpenMenuModal = (item?: MenuItem) => {
    if (item) {
      setSelectedMenuItem(item);
    }
    setMenuModalOpen(true);
  };

  const handleCloseMenuModal = () => {
    setMenuModalOpen(false);
    setSelectedMenuItem(null);
  };

  const scrollToReservation = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#1c1410] flex flex-col selection:bg-[#b0d12a] selection:text-black">
      {/* Navigation Header */}
      <Header onOpenMenuModal={() => handleOpenMenuModal()} />

      {/* Main Content Sections with alternating rhythm matching the visual reference */}
      <main className="flex-1">
        {/* 1. Hero Section (Dark photographic flat-lay + bold headline + lime CTA) */}
        <Hero onOpenMenuModal={() => handleOpenMenuModal()} />

        {/* 2. White Intro Feature Cards ("CRAVING FRESH SEAFOOD?" with 3 lime border cards) */}
        <FeaturedCards onSelectCard={() => handleOpenMenuModal()} />

        {/* 3. Split Promo Section (Drinks, orange round badge Rp25k-75k, relaxed dining copy) */}
        <PromoSplit onExploreSpecials={() => handleOpenMenuModal()} />

        {/* 4. Full-Width Dark Sizzling Section ("THE REAL TASTE OF SULAWESI SEAFOOD!" + scalloped badge) */}
        <FullWidthBanner onOpenMenuModal={() => handleOpenMenuModal()} />

        {/* 5. Circular Dish Carousel ("CELEBRATE FRESH FLAVORS!" with 3 circular dishes) */}
        <CelebrateDishes onOpenMenuModal={() => handleOpenMenuModal()} />

        {/* 6. Dark Wood / Photographic "THE MENU" Section (Circular plates with wavy lime underlines) */}
        <MenuSection
          onOpenFullMenu={() => handleOpenMenuModal()}
          onSelectMenuItem={(item) => handleOpenMenuModal(item)}
        />

        {/* 7. Special Spotlight Split Section ("CATCH OF THE DAY!" with orange badge & daily catch story) */}
        <CatchOfTheDay onReserveOrOrder={scrollToReservation} />

        {/* 8. Why Visit Deho Cafe Section (Adapted from team section with 3 lime-framed cards) */}
        <WhyVisit />

        {/* 9. Vibrant Orange Banner & 12-Tile Instagram Collage (#DEHOCAFE) */}
        <SocialGallery />

        {/* 10. Reviews & Trust Credibility Section (4.4/5 rating, 944 Google reviews) */}
        <ReviewsSummary />

        {/* 11. Location & Story Section in Luwuk, Central Sulawesi (Interactive map & directions CTA) */}
        <LocationSection />

        {/* 12. Reservation & Order Inquiries Section (Dark wood photo background + table booking bar) */}
        <ReservationSection />
      </main>

      {/* 13. Dark Restaurant Footer (Emblem logo, contacts, navigation links, copyright) */}
      <Footer />

      {/* Full Menu Interactive Modal */}
      <FullMenuModal
        isOpen={menuModalOpen}
        onClose={handleCloseMenuModal}
        initialItem={selectedMenuItem}
      />
    </div>
  );
}
