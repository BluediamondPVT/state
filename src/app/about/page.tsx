import React from 'react';
import AboutBanner from '@/components/about/AboutBanner';
import AboutStory from '@/components/about/AboutStory';
import LeadershipTeam from '@/components/about/LeadershipTeam';
import TrustStats from '@/components/TrustStats';
import WhyChooseUs from '@/components/WhyChooseUs';

export const metadata = {
  title: 'About Us | Bhiwandi Estate - Real Estate Advisory & Ground Leadership',
  description:
    'Meet the ground leadership team and learn about our MahaRERA-certified advisory, 80% confidentiality model, and 12+ years of property expertise in Bhiwandi.',
};

export default function AboutPage() {
  return (
    <main>
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
