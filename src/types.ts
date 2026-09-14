export interface MenuItem {
  id: string;
  name: string;
  localName?: string;
  category: 'fish' | 'prawns-squid' | 'crab' | 'vegetables' | 'drinks' | 'specials';
  description: string;
  price: string;
  priceNumber: number;
  image: string;
  tags?: string[];
  isPopular?: boolean;
}

export interface FeatureCard {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  image: string;
  linkText: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  category: string;
  fullAddress: string;
  shortAddress: string;
  city: string;
  regency: string;
  province: string;
  postalCode: string;
  plusCode: string;
  phone: string;
  phoneRaw: string;
  hours: string;
  priceRange: string;
  rating: number;
  reviewsCount: number;
  services: string[];
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
}
