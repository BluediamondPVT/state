import React from 'react';
import HeroSlider from '@/components/home/HeroSlider';
import QuickSearch from '@/components/home/QuickSearch';
import HomeAbout from '@/components/home/HomeAbout';
import HomeCounters from '@/components/home/HomeCounters';
import RecentProperties from '@/components/home/RecentProperties';
import PropertyCategories from '@/components/home/PropertyCategories';
import WhyChooseUs from '@/components/WhyChooseUs';
import GroundTeam from '@/components/home/GroundTeam';
import HomeTestimonials from '@/components/home/HomeTestimonials';
import PopularProperties from '@/components/home/PopularProperties';
import HomeFaq from '@/components/home/HomeFaq';
import HomeBlogSection from '@/components/home/HomeBlogSection';
import SubscribeBanner from '@/components/home/SubscribeBanner';

import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Taimur Real Estate | Verified Flats, Heavy Deposit & Industrial Galas in Bhiwandi',
  description:
    'Search verified 1 BHK, 2 BHK, Heavy Deposit zero-rent apartments, low downpayment flats, and industrial galas/godowns across Dhamankar Naka, Anjur Phata, Millat Nagar, and Temghar.',
  keywords: [
    'Bhiwandi real estate',
    'Flats in Bhiwandi',
    'Heavy deposit flat in Bhiwandi',
    '1 BHK in Bhiwandi',
    '2 BHK in Bhiwandi',
    'Dhamankar Naka flats',
    'Anjur Phata flats',
    'Industrial galas in Bhiwandi',
    'Taimur Real Estate',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Taimur Real Estate | #1 Property Agency in Bhiwandi',
    description:
      'Verified 1 BHK, 2 BHK, Heavy Deposit apartments & commercial galas in Bhiwandi. 10+ Years of Ground Trust.',
    url: SITE_URL,
    type: 'website',
    images: [
      {
        url: '/assets/images/banner/hero1.png',
        width: 1200,
        height: 630,
        alt: 'Taimur Real Estate Bhiwandi Portal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taimur Real Estate | #1 Property Agency in Bhiwandi',
    description: 'Verified 1 BHK, 2 BHK, Heavy Deposit & Industrial Galas in Bhiwandi.',
    images: ['/assets/images/banner/hero1.png'],
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Background Slider Area */}
      <HeroSlider />

      {/* 2. On-Slider Quick Property Search Bar */}
      <QuickSearch />

      {/* 3. About & Mission Section */}
      <HomeAbout />

      {/* 4. Proven Transaction Numbers / Stats */}
      <HomeCounters />

      {/* 5. Recent Featured Property Grid */}
      <RecentProperties />

      {/* 6. Property Categories Grid */}
      <PropertyCategories />

      {/* 7. Why Choose Us (Hyper-Local Advantages) */}
      <div id="why-choose-us">
        <WhyChooseUs />
      </div>

      {/* 8. Ground Advisory Leadership Team */}
      <GroundTeam />

      {/* 9. Client Testimonials & Trust Reviews */}
      <HomeTestimonials />

      {/* 10. Popular Properties Showcase */}
      <PopularProperties />

      {/* 11. Interactive Bhiwandi Property FAQs */}
      <HomeFaq />

      {/* 12. Recent Market Guides & SEO Blog Posts */}
      <HomeBlogSection />

      {/* 13. Dream House Subscription / Inquiry Banner */}
      <SubscribeBanner />
    </>
  );
}
