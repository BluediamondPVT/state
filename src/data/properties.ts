import { Property, LocalityInfo } from '@/types/property';

export const LOCALITIES: LocalityInfo[] = [
  {
    id: 'anjur-phata',
    name: 'Anjur Phata',
    slug: 'anjur-phata',
    image: '/assets/images/location/1.png',
    propertyCount: 28,
    tagline: 'Best connected to Thane & Kalyan bypass with modern residential complexes.'
  },
  {
    id: 'dhamankar-naka',
    name: 'Dhamankar Naka',
    slug: 'dhamankar-naka',
    image: '/assets/images/location/2.png',
    propertyCount: 34,
    tagline: 'Central heart of Bhiwandi with top markets, schools & bus stations.'
  },
  {
    id: 'temghar',
    name: 'Temghar',
    slug: 'temghar',
    image: '/assets/images/location/3.png',
    propertyCount: 22,
    tagline: 'Rapidly developing residential hub with clean lifestyle & gated towers.'
  },
  {
    id: 'mankoli',
    name: 'Mankoli',
    slug: 'mankoli',
    image: '/assets/images/location/4.png',
    propertyCount: 19,
    tagline: 'Prime highway entry point, luxury township projects & commercial parks.'
  },
  {
    id: 'narpoli',
    name: 'Narpoli',
    slug: 'narpoli',
    image: '/assets/images/location/5.png',
    propertyCount: 16,
    tagline: 'Budget-friendly 1BHK, 1RK flats & prime business shops.'
  },
  {
    id: 'purna-kasheli',
    name: 'Purna & Kasheli',
    slug: 'purna-kasheli',
    image: '/assets/images/location/6.png',
    propertyCount: 42,
    tagline: 'Asia’s premier logistics & industrial godown hub right next to Thane.'
  }
];

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    slug: 'spacious-2bhk-dhamankar-naka-bhiwandi',
    title: 'Modern 2 BHK Flat with Balcony in High-Rise Tower',
    type: '2 BHK',
    dealType: 'For Sale',
    price: '₹34.50 Lakhs',
    priceNumeric: 3450000,
    priceLabel: 'Negotiable (Loan Available)',
    locality: 'Dhamankar Naka',
    city: 'Bhiwandi',
    carpetArea: '685 Sq.Ft',
    superArea: '920 Sq.Ft',
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    floor: 'Middle Floor of 12-Storey Tower',
    furnishing: 'Semi-Furnished',
    waterSupply: '24 Hours Municipal Water + Storage',
    possessionStatus: 'Ready to Move',
    loanAvailable: true,
    featured: true,
    image: '/assets/images/property/property-grid-1.png',
    gallery: [
      '/assets/images/property/property-grid-1.png',
      '/assets/images/property/1.png',
      '/assets/images/property/2.png'
    ],
    description: 'Beautiful ready-to-move 2 BHK flat situated in a prime G+12 residential tower near Dhamankar Naka, Bhiwandi. Features vitrified flooring, modular kitchen setup, spacious living room balcony, cross-ventilation, and dedicated parking. Easy access to main highway, market, and reputed English medium schools.',
    highlights: [
      'Gated Community with 24x7 Security & CCTV',
      'High-speed Elevators with Power Backup',
      'Nationalized Bank Loan Approved (Up to 90%)',
      'Just 3 mins from Dhamankar Naka Flyover',
      'Clear Title Property with OC / CC documentation'
    ],
    nearbyLandmarks: [
      'Dhamankar Naka Bus Stop - 300m',
      'Reputed Hospital & Clinics - 500m',
      'Daily Supermarket & Veggie Market - 200m'
    ]
  },
  {
    id: 'prop-2',
    slug: 'heavy-deposit-1bhk-anjur-phata-bhiwandi',
    title: 'Heavy Deposit 1 BHK Flat in Well-Maintained Society',
    type: '1 BHK',
    dealType: 'Heavy Deposit',
    price: '₹3.50 Lakhs Deposit',
    priceNumeric: 350000,
    priceLabel: 'Zero Monthly Rent (Refundable Deposit)',
    locality: 'Anjur Phata',
    city: 'Bhiwandi',
    carpetArea: '475 Sq.Ft',
    superArea: '620 Sq.Ft',
    bedrooms: 1,
    bathrooms: 1,
    balconies: 1,
    floor: '3rd of 7 Floors with Lift',
    furnishing: 'Semi-Furnished',
    waterSupply: '24 Hours Continuous Supply',
    possessionStatus: 'Ready to Move',
    loanAvailable: false,
    featured: true,
    image: '/assets/images/property/property-grid-2.png',
    gallery: [
      '/assets/images/property/property-grid-2.png',
      '/assets/images/property/5.png',
      '/assets/images/property/6.png'
    ],
    description: 'Extremely popular heavy deposit 1 BHK flat available near Anjur Phata. Live rent-free by paying a refundable security deposit. Society is peaceful, clean, and family-oriented with 24/7 security guard and elevator.',
    highlights: [
      '100% Refundable Agreement Deposit',
      'Zero Brokerage Hassle through Verified Agent',
      'Spacious Bedroom with Master Bathroom',
      'Thane & Kalyan Highway reachable in 5 mins',
      'Bike & Car Parking Available'
    ],
    nearbyLandmarks: [
      'Anjur Phata Junction - 4 mins',
      'Kalyan Railway Station - 20 mins auto',
      'Local Shopping Market - Walking distance'
    ]
  },
  {
    id: 'prop-3',
    slug: 'low-downpayment-1bhk-temghar-bhiwandi',
    title: 'Affordable 1 BHK Flat with ₹1 Lakh Downpayment Offer',
    type: '1 BHK',
    dealType: 'Low Downpayment',
    price: '₹22.90 Lakhs',
    priceNumeric: 2290000,
    priceLabel: 'Only ₹1 Lakh DP | Rest Bank Loan',
    locality: 'Temghar',
    city: 'Bhiwandi',
    carpetArea: '450 Sq.Ft',
    superArea: '590 Sq.Ft',
    bedrooms: 1,
    bathrooms: 1,
    balconies: 1,
    floor: '4th of 8 Floors',
    furnishing: 'Unfurnished',
    waterSupply: 'Regular Municipal & Boring Connection',
    possessionStatus: 'Ready to Move',
    loanAvailable: true,
    featured: true,
    image: '/assets/images/property/property-grid-3.png',
    gallery: [
      '/assets/images/property/property-grid-3.png',
      '/assets/images/property/7.png',
      '/assets/images/property/8.png'
    ],
    description: 'Perfect budget home for nuclear families and first-time buyers in Bhiwandi. Pay only ₹1 Lakh downpayment, and our dedicated finance desk will get 90% loan cleared from SBI / HDFC / ICICI. Brand new building with kids play area and gym.',
    highlights: [
      'PMAY Subsidy Eligibility Assistance',
      'Minimal Documentation - Instant Loan Approval',
      'Reputed Builder Construction Quality',
      'Near Temghar Bus Stop & Auto Stand',
      'Free Parking Space for 2-Wheelers'
    ],
    nearbyLandmarks: [
      'Temghar Main Road - 200m',
      'School & Coaching Classes - 400m',
      'Local Clinics - 350m'
    ]
  },
  {
    id: 'prop-4',
    slug: 'industrial-commercial-gala-purna-mankoli',
    title: 'Ground Floor Industrial Gala / Warehouse with 20ft Height',
    type: 'Commercial Gala',
    dealType: 'For Rent',
    price: '₹38,000 / Month',
    priceNumeric: 38000,
    priceLabel: 'Heavy Industrial Power (30 HP)',
    locality: 'Purna & Kasheli',
    city: 'Bhiwandi',
    carpetArea: '1,800 Sq.Ft',
    superArea: '2,200 Sq.Ft',
    bedrooms: 0,
    bathrooms: 1,
    balconies: 0,
    floor: 'Ground Floor Direct Trailer Entry',
    furnishing: 'Unfurnished',
    waterSupply: 'Industrial Water Connection',
    possessionStatus: 'Ready to Move',
    loanAvailable: false,
    featured: true,
    image: '/assets/images/property/property-grid-4.png',
    gallery: [
      '/assets/images/property/property-grid-4.png',
      '/assets/images/property/9.png',
      '/assets/images/property/10.png'
    ],
    description: 'Prime industrial gala and storage warehouse located in the Purna-Mankoli corridor of Bhiwandi. 40-foot container trailer easily turns inside compound. Equipped with high-gauge rolling shutter, concrete industrial floor, and 3-phase commercial electric meter.',
    highlights: [
      '20 Ft Clear Ceiling Height with Mezzanine Scope',
      'Direct Highway Access (Mumbai-Nashik Express)',
      '24-Hour Compound Security & Wide RCC Roads',
      'Ideal for Logistics, E-commerce, Textile & Storage',
      'Transparent Legal Agreement through Verified Agent'
    ],
    nearbyLandmarks: [
      'Mumbai-Thane Toll Plaza - 12 mins',
      'Kalyan-Bhiwandi Road - 5 mins',
      'Major Transport Hubs - Next door'
    ]
  },
  {
    id: 'prop-5',
    slug: 'luxury-3bhk-township-mankoli-highway',
    title: 'Luxury 3 BHK Penthouse Style Flat in Gated Township',
    type: '3 BHK',
    dealType: 'For Sale',
    price: '₹62.00 Lakhs',
    priceNumeric: 6200000,
    priceLabel: 'All Inclusive (Covered Parking)',
    locality: 'Mankoli',
    city: 'Bhiwandi',
    carpetArea: '1,050 Sq.Ft',
    superArea: '1,420 Sq.Ft',
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    floor: '14th Floor of 18-Storey High Rise',
    furnishing: 'Semi-Furnished',
    waterSupply: '24 Hours Treated RO Water',
    possessionStatus: 'Ready to Move',
    loanAvailable: true,
    featured: true,
    image: '/assets/images/property/property-grid-5.png',
    gallery: [
      '/assets/images/property/property-grid-5.png',
      '/assets/images/property/11.png',
      '/assets/images/property/12.png'
    ],
    description: 'Experience elite living in Bhiwandi’s most sought-after lifestyle township. Features panoramic mountain views, clubhouse, swimming pool, jogging track, and 24-hour round-the-clock security. Located just 15 minutes away from Thane Viviana Mall.',
    highlights: [
      'Grand Club House, Gymnasium & Pool',
      '15 mins drive from Majiwada / Thane',
      'Covered Reserved Stilt Car Parking',
      'Double Balcony with Unobstructed Scenic View',
      'Vastu Compliant North-East Facing Flat'
    ],
    nearbyLandmarks: [
      'Mankoli Highway Bridge - 2 mins',
      'Viviana Mall / Jupiter Hospital - 15 mins',
      'Upcoming Metro Station - 1 km'
    ]
  },
  {
    id: 'prop-6',
    slug: 'budget-1rk-flat-narpoli-bhiwandi',
    title: 'Clean & Compact 1 RK Flat - Best for Small Family or Rental',
    type: '1 RK',
    dealType: 'For Sale',
    price: '₹14.80 Lakhs',
    priceNumeric: 1480000,
    priceLabel: 'Negotiable (Ready Possession)',
    locality: 'Narpoli',
    city: 'Bhiwandi',
    carpetArea: '320 Sq.Ft',
    superArea: '410 Sq.Ft',
    bedrooms: 1,
    bathrooms: 1,
    balconies: 0,
    floor: '2nd of 4 Floors',
    furnishing: 'Unfurnished',
    waterSupply: '2 Times Daily Municipal Water',
    possessionStatus: 'Ready to Move',
    loanAvailable: true,
    featured: false,
    image: '/assets/images/property/property-grid-6.png',
    gallery: [
      '/assets/images/property/property-grid-6.png',
      '/assets/images/property/13.png',
      '/assets/images/property/14.png'
    ],
    description: 'Well-ventilated 1 RK room kitchen apartment in Narpoli, Bhiwandi. Zero maintenance issues, clean building, and great rental yield of ₹5,500/month if bought as an investment.',
    highlights: [
      'High Rental Demand Area (Instant Tenant)',
      'Bank Loan Support Available',
      'Low Society Maintenance (₹400/mo)',
      'Close to Narpoli Police Station & Market',
      'Ready to shift immediately'
    ],
    nearbyLandmarks: [
      'Narpoli Chowk - 2 mins',
      'Dhamankar Naka - 5 mins',
      'Medical and Grocery stores right downstairs'
    ]
  }
];

export const AGENCY_CONFIG = {
  name: 'Bhiwandi Property Hub',
  tagline: 'Bhiwandi’s #1 Most Trusted Real Estate Consultant',
  phone: '+91 98765 43210',
  phoneDisplay: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'contact@bhiwandipropertyhub.com',
  officeAddress: 'Shop 14, Commercial Complex, Near Dhamankar Naka Flyover, Bhiwandi, Maharashtra 421302',
  operatingHours: 'Mon - Sun: 9:30 AM to 8:30 PM',
  experienceYears: '12+ Years in Bhiwandi',
  reraNumber: 'A51700028914'
};
