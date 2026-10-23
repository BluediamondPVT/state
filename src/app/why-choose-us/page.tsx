import type { Metadata } from 'next';
import WhyChooseUsBanner from '@/components/why-choose-us/WhyChooseUsBanner';
import WhyChooseUsPillars from '@/components/why-choose-us/WhyChooseUsPillars';
import ComparisonTable from '@/components/why-choose-us/ComparisonTable';
import WhyChooseUsCta from '@/components/why-choose-us/WhyChooseUsCta';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Why Choose Taimur Real Estate | #1 Property Agency in Bhiwandi',
  description:
    'Discover why buyers, sellers, and business owners choose Taimur Real Estate: 10+ years of ground trust, 80% privacy protection, 0% listing fee, and 24-hr site inspections in Bhiwandi.',
  alternates: {
    canonical: `${SITE_URL}/why-choose-us`,
  },
  openGraph: {
    title: 'Why Choose Taimur Real Estate | Bhiwandi Ground Experts',
    description: '10+ Years of Ground Trust, verified listings, and direct broker support.',
    url: `${SITE_URL}/why-choose-us`,
    type: 'website',
    images: ['/assets/images/banner/hero1.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Choose Taimur Real Estate Bhiwandi',
    description: '10+ Years of Ground Trust for flats and commercial deals.',
    images: ['/assets/images/banner/hero1.png'],
  },
};

export default function WhyChooseUsPage() {
  return (
    <main className="bg-light">
      {/* 1. Header Hero Banner */}
      <WhyChooseUsBanner />

      {/* 2. 4 Core Pillars of Excellence */}
      <WhyChooseUsPillars />

      {/* 3. Traditional Brokers vs Bhiwandi Estate Comparison Table */}
      <ComparisonTable />

      {/* 4. WhatsApp & Office Consultation CTA */}
      <WhyChooseUsCta />
    </main>
  );
}
