import React from 'react';
import SellPropertyBanner from '@/components/sell-property/SellPropertyBanner';
import SellPropertyForm from '@/components/sell-property/SellPropertyForm';

export const metadata = {
  title: 'List Property | Bhiwandi Estate - Zero Brokerage for Landlords',
  description:
    'List your flat, industrial gala, or shop in Bhiwandi with direct buyer access, 80% privacy protection, and zero broker hassle.',
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
