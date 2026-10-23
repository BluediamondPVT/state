import type { Metadata } from 'next';
import SellPropertyBanner from '@/components/sell-property/SellPropertyBanner';
import SellPropertyForm from '@/components/sell-property/SellPropertyForm';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'List Your Property | Taimur Real Estate - Direct Buyers & Zero Hassle',
  description:
    'List your 1 BHK, 2 BHK flat, shop, or industrial gala in Bhiwandi with Taimur Real Estate. 80% privacy protection, pre-qualified buyers, and zero upfront fee.',
  alternates: {
    canonical: `${SITE_URL}/sell-property`,
  },
  openGraph: {
    title: 'List Your Property in Bhiwandi | Taimur Real Estate',
    description: 'Direct access to genuine buyers & tenants in Millat Nagar, Dhamankar Naka, and Bhiwandi.',
    url: `${SITE_URL}/sell-property`,
    type: 'website',
    images: ['/assets/images/banner/hero1.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'List Your Property in Bhiwandi with Taimur Real Estate',
    description: 'Get verified buyers for your flat or commercial property.',
    images: ['/assets/images/banner/hero1.png'],
  },
};

export default function SellPropertyPage() {
  return (
    <main>
      {/* 1. Header Banner */}
      <SellPropertyBanner />

      {/* 2. Property Submission Form Card */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <SellPropertyForm />
          </div>
        </div>
      </div>
    </main>
  );
}
