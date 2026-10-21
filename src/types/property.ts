export type PropertyType = '1 BHK' | '2 BHK' | '3 BHK' | '1 RK' | 'Commercial Gala' | 'Shop' | 'Warehouse / Godown';
export type DealType = 'For Sale' | 'For Rent' | 'Heavy Deposit' | 'Low Downpayment';

export interface Property {
  id: string;
  slug: string;
  title: string;
  type: PropertyType;
  dealType: DealType;
  price: string;
  priceNumeric: number;
  priceLabel?: string; // e.g. "Negotiable", "All Inclusive"
  locality: string;
  city: string;
  carpetArea: string; // e.g. "650 Sq.Ft"
  superArea?: string;
  bedrooms: number;
  bathrooms: number;
  balconies?: number;
  floor: string; // e.g. "4th of 7 Floors" (80% detail, exact flat hidden)
  furnishing: 'Unfurnished' | 'Semi-Furnished' | 'Fully Furnished';
  waterSupply: string; // e.g. "24 Hours Grampanchayat / Municipal"
  possessionStatus: 'Ready to Move' | 'Under Construction';
  loanAvailable: boolean;
  featured: boolean;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  nearbyLandmarks: string[];
}

export interface LocalityInfo {
  id: string;
  name: string;
  slug: string;
  image: string;
  propertyCount: number;
  tagline: string;
}
