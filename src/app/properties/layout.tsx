import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'All Properties in Bhiwandi | 1 BHK, 2 BHK, Heavy Deposit & Galas',
  description:
    'Browse 100% verified flats for sale & rent, zero-rent Heavy Deposit apartments, and industrial galas across Dhamankar Naka, Anjur Phata, Millat Nagar, and Chavindra in Bhiwandi.',
  keywords: [
    'Properties in Bhiwandi',
    'Flats for sale in Bhiwandi',
    'Heavy Deposit flats Bhiwandi',
    'Rent flat Bhiwandi',
    '1 BHK in Bhiwandi',
    '2 BHK in Bhiwandi',
    'Industrial gala Bhiwandi',
  ],
  alternates: {
    canonical: `${SITE_URL}/properties`,
  },
  openGraph: {
    title: 'Verified Properties in Bhiwandi | Taimur Real Estate',
    description:
      'Search verified 1 BHK, 2 BHK, Heavy Deposit apartments, and industrial galas in Bhiwandi with direct broker assistance.',
    url: `${SITE_URL}/properties`,
    type: 'website',
    images: [
      {
        url: '/assets/images/banner/hero1.png',
        width: 1200,
        height: 630,
        alt: 'Properties in Bhiwandi - Taimur Real Estate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verified Properties in Bhiwandi | Taimur Real Estate',
    description: '1 BHK, 2 BHK, Heavy Deposit & Industrial Galas in Bhiwandi.',
    images: ['/assets/images/banner/hero1.png'],
  },
};

export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
