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

export const metadata = {
  title: 'Bhiwandi Estate | Verified Flats, Heavy Deposit & Industrial Galas in Bhiwandi',
  description:
    'Search 1 BHK, 2 BHK, Heavy Deposit zero-rent apartments, low downpayment flats, and industrial galas/godowns across Dhamankar Naka, Anjur Phata, Temghar, and Purna Mankoli.',
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
