import React from 'react';
import WhyChooseUsBanner from '@/components/why-choose-us/WhyChooseUsBanner';
import WhyChooseUsPillars from '@/components/why-choose-us/WhyChooseUsPillars';
import ComparisonTable from '@/components/why-choose-us/ComparisonTable';
import WhyChooseUsCta from '@/components/why-choose-us/WhyChooseUsCta';

export const metadata = {
  title: 'Why Choose Us | Bhiwandi Estate - #1 Real Estate Agency in Bhiwandi',
  description:
    'Learn why homebuyers, sellers, and industrial investors trust Bhiwandi Estate for verified flats, heavy deposit zero-rent apartments, and commercial galas.',
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
