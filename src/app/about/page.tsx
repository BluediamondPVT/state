import React from 'react';
import type { Metadata } from 'next';
import AboutBanner from '@/components/about/AboutBanner';
import AboutStory from '@/components/about/AboutStory';
import LeadershipTeam from '@/components/about/LeadershipTeam';
import TrustStats from '@/components/TrustStats';
import WhyChooseUs from '@/components/WhyChooseUs';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL, getRealEstateAgentSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About Taimur Real Estate | 10+ Years of Ground Trust in Bhiwandi',
  description:
    'Meet the ground leadership team at Taimur Real Estate. 10+ years of local property advisory in Millat Nagar, Dhamankar Naka, Anjur Phata, and Bhiwandi.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: 'About Taimur Real Estate | Bhiwandi Property Consultancy',
    description:
      'Learn about Taimur Real Estate: 10+ years of ground expertise, verified listings, and direct broker support in Bhiwandi.',
    url: `${SITE_URL}/about`,
    type: 'website',
    images: ['/assets/images/banner/hero1.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Taimur Real Estate Bhiwandi',
    description: '10+ Years of Ground Trust in Bhiwandi real estate.',
    images: ['/assets/images/banner/hero1.png'],
  },
};

export default function AboutPage() {
  const schema = getRealEstateAgentSchema(`${SITE_URL}/about`);

  return (
    <main>
      {/* Schema.org RealEstateAgent Structured Data */}
      <JsonLd data={schema} />

      {/* 1. Header Banner */}
      <AboutBanner />

      {/* 2. Story & RERA Verification */}
      <AboutStory />

      {/* 3. Executive Ground Leadership Team */}
      <LeadershipTeam />

      {/* 4. Proven Transaction Counters */}
      <TrustStats />

      {/* 5. 4 Core Value Pillars */}
      <WhyChooseUs />
    </main>
  );
}
