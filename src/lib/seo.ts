import { Property } from '@/types/property';
import { BlogPost } from '@/data/blogs';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.NEXT_PUBLIC_APP_URL ||
  'https://taimurrealestate.com';

export const DEFAULT_SEO = {
  name: 'Taimur Real Estate',
  legalName: 'Taimur Real Estate Agency',
  phone: '+91 98222 70773',
  email: 'taimurrealestate70@gmail.com',
  address: {
    streetAddress: 'Shop No. 2, Ground Floor, Millat Nagar 1',
    addressLocality: 'Bhiwandi',
    addressRegion: 'Maharashtra',
    postalCode: '421302',
    addressCountry: 'IN',
  },
  geo: {
    latitude: 19.2967,
    longitude: 73.0631,
  },
  openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 09:00-21:00',
  priceRange: '₹₹',
  areaServed: [
    'Bhiwandi',
    'Millat Nagar',
    'Dhamankar Naka',
    'Anjur Phata',
    'Chavindra',
    'Temghar',
    'VP Naka',
    'Kalyan Road',
    'Purna Mankoli',
  ],
};

/**
 * Generates Schema.org JSON-LD for RealEstateAgent
 */
export function getRealEstateAgentSchema(canonicalUrl: string = SITE_URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${canonicalUrl}/#realestateagent`,
    name: DEFAULT_SEO.name,
    legalName: DEFAULT_SEO.legalName,
    url: canonicalUrl,
    telephone: DEFAULT_SEO.phone,
    email: DEFAULT_SEO.email,
    image: `${canonicalUrl}/assets/images/logo/logo-blue.png`,
    description:
      'Taimur Real Estate is Bhiwandi’s trusted real estate consultancy with 10+ years of ground expertise in 1 BHK, 2 BHK, Heavy Deposit apartments, and industrial galas.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: DEFAULT_SEO.address.streetAddress,
      addressLocality: DEFAULT_SEO.address.addressLocality,
      addressRegion: DEFAULT_SEO.address.addressRegion,
      postalCode: DEFAULT_SEO.address.postalCode,
      addressCountry: DEFAULT_SEO.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: DEFAULT_SEO.geo.latitude,
      longitude: DEFAULT_SEO.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '21:00',
      },
    ],
    areaServed: DEFAULT_SEO.areaServed.map((area) => ({
      '@type': 'AdministrativeArea',
      name: `${area}, Bhiwandi, Maharashtra`,
    })),
    priceRange: DEFAULT_SEO.priceRange,
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Cheque, Bank Transfer, UPI',
  };
}

/**
 * Generates Schema.org JSON-LD for a single RealEstateListing / Apartment
 */
export function getPropertyJsonLd(property: Property, canonicalUrl: string) {
  const isRentOrDeposit = property.dealType === 'For Rent' || property.dealType === 'Heavy Deposit';
  const schemaType = property.type === 'Commercial Gala' ? 'CommercialProperty' : 'Apartment';

  return {
    '@context': 'https://schema.org',
    '@type': schemaType,
    '@id': `${canonicalUrl}#property`,
    name: `${property.title} in ${property.locality}, Bhiwandi`,
    description: property.description,
    url: canonicalUrl,
    image: [
      property.image.startsWith('http') ? property.image : `${SITE_URL}${property.image}`,
      ...(property.gallery || []).map((img) =>
        img.startsWith('http') ? img : `${SITE_URL}${img}`
      ),
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${property.locality}, Bhiwandi`,
      addressLocality: 'Bhiwandi',
      addressRegion: 'Maharashtra',
      postalCode: '421302',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: DEFAULT_SEO.geo.latitude,
      longitude: DEFAULT_SEO.geo.longitude,
    },
    numberOfRooms: property.bedrooms || 1,
    numberOfBathroomsTotal: property.bathrooms || 1,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: property.carpetArea.replace(/[^0-9]/g, '') || 500,
      unitText: 'SQFT',
    },
    offers: {
      '@type': 'Offer',
      price: property.priceNumeric || 0,
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: property.priceNumeric || 0,
        priceCurrency: 'INR',
        unitText: isRentOrDeposit ? 'MONTH' : 'ONE_TIME',
      },
      availability: 'https://schema.org/InStock',
      validFrom: '2026-01-01',
      seller: {
        '@type': 'RealEstateAgent',
        name: DEFAULT_SEO.name,
        telephone: DEFAULT_SEO.phone,
        url: SITE_URL,
      },
    },
    amenityFeature: (property.highlights || []).map((h) => ({
      '@type': 'LocationFeatureSpecification',
      name: h,
      value: true,
    })),
  };
}

/**
 * Generates Schema.org JSON-LD for BlogPosting / Real Estate Market Guide
 */
export function getBlogPostingJsonLd(blog: BlogPost, canonicalUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${canonicalUrl}#article`,
    headline: blog.title,
    description: blog.excerpt,
    url: canonicalUrl,
    datePublished: '2024-10-15T00:00:00+05:30',
    dateModified: '2026-10-23T00:00:00+05:30',
    image: blog.image.startsWith('http') ? blog.image : `${SITE_URL}${blog.image}`,
    author: {
      '@type': 'Person',
      name: blog.author || 'Taimur Real Estate Research Team',
      jobTitle: blog.authorRole || 'Real Estate Advisor',
    },
    publisher: {
      '@type': 'Organization',
      name: DEFAULT_SEO.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/assets/images/logo/logo-blue.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    keywords: blog.keywords.join(', '),
  };
}
