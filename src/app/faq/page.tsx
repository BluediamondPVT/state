'use client';

import React, { useState } from 'react';
import FaqBanner from '@/components/faq/FaqBanner';
import FaqCategoryFilter from '@/components/faq/FaqCategoryFilter';
import FaqAccordionList, { FaqData } from '@/components/faq/FaqAccordionList';
import JsonLd from '@/components/seo/JsonLd';

const faqs: FaqData[] = [
  {
    category: 'loans',
    q: 'Can I get up to 90% home loan for buying a flat in Bhiwandi?',
    a: 'Yes, absolutely! We partner directly with SBI, HDFC Bank, ICICI Bank, Bank of Baroda, and major housing finance companies. If you are a salaried employee or business proprietor with valid ITR/Form-16, our in-house finance desk secures up to 85%-90% property value sanction along with complete PMAY subsidy assistance.',
  },
  {
    category: 'heavy-deposit',
    q: 'What is a Heavy Deposit flat agreement and how does it work?',
    a: 'In a Heavy Deposit agreement, you pay a one-time lump-sum refundable deposit (typically ₹2.5 Lakhs to ₹6 Lakhs depending on 1 BHK / 2 BHK) without paying any monthly rent! You stay for the registered 11-month or 22-month term, and at the end of the term, 100% of your deposit is refunded back to you in full.',
  },
  {
    category: 'privacy',
    q: 'Why do your online listings conceal exact building wings and flat numbers?',
    a: 'Under our verified 80% Confidentiality Model, we safeguard sellers and buyers from unverified middlemen and intrusive unsolicited visits. Once you inquire with us, our registered agent verifies your genuine requirement and arranges a direct, escorted site inspection.',
  },
  {
    category: 'industrial',
    q: 'Are industrial galas & warehouses in Purna/Mankoli legally approved?',
    a: 'Yes! Every industrial property in our portfolio is audited for legal clearances including Grampanchayat permissions, MMRDA road masterplan alignment, 3-phase heavy industrial power capacity, and container trailer turning radius.',
  },
  {
    category: 'documentation',
    q: 'How fast can a sale deed registration and key handover take place?',
    a: 'With verified paperwork and loan sanctions in hand, our legal documentation desk drafts the Agreement for Sale, calculates stamp duty, and coordinates biometric registration at the Bhiwandi Sub-Registrar office within 3 to 7 working days.',
  },
  {
    category: 'loans',
    q: 'Are there low downpayment flats available in Bhiwandi (e.g. ₹1 Lakh Downpayment)?',
    a: 'Yes! We have pre-approved builder inventory in Temghar, Narpoli, and Anjur Phata where you can book with as little as ₹1 Lakh to ₹1.5 Lakhs downpayment, with remaining funding bridged through approved bank home loans.',
  },
  {
    category: 'documentation',
    q: 'What documents are required to sell or list my property through your agency?',
    a: 'Property owners need to provide a copy of the Registered Sale Deed, Society Share Certificate, latest Maintenance Bill, Property Tax receipt, and personal KYC (Aadhar & PAN). We verify title clearances before marketing to buyers.',
  },
  {
    category: 'privacy',
    q: 'Do I need to pay any advance to see properties? What is the booking token process?',
    a: 'Site visits and consultations are 100% FREE — zero advance fees! However, once you like a property (whether it is a Flat for Sale, Heavy Deposit zero-rent flat, Low Deposit flat, or Commercial Gala), a nominal Booking Token amount is paid with an official written receipt to lock/hold the property with the owner so it is reserved exclusively for you. Following the token, Taimur Real Estate carries out complete document checks, prepares the registered agreement, and coordinates bank loan sanctions.',
  },
  {
    category: 'documentation',
    q: 'Which specific localities in Bhiwandi does Taimur Real Estate cover?',
    a: 'Our main office is located at Millat Nagar 1. While we are the most trusted local authority in Millat Nagar, Chavindra, and VP Naka (Varala Devi), our on-ground team covers all major residential & commercial zones of Bhiwandi, including Dhamankar Naka, Anjur Phata, Temghar, Narpoli, Mankoli, and the Purna-Kasheli logistics warehouse belt.',
  },
  {
    category: 'privacy',
    q: 'Do you provide site visits on weekends or late evenings?',
    a: 'Yes! Our office is open 7 days a week from 10:00 AM to 11:00 PM. We accommodate site visits according to your family convenience, including late evenings and Sundays. Simply drop a message on WhatsApp (+91 98222 70773) to book your slot.',
  },
];

export default function FaqPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFaqs =
    activeCategory === 'all'
      ? faqs
      : faqs.filter((item) => item.category === activeCategory);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <main className="bg-light">
      {/* Schema.org FAQPage Structured Data */}
      <JsonLd data={faqSchema} />

      {/* 1. Header Banner */}
      <FaqBanner />

      {/* 2. Main Content Grid */}
      <div className="full-row py-5 bg-white">
        <div className="container py-3">
          <div className="row g-4">
            {/* Category Filter Sidebar */}
            <div className="col-lg-4 col-md-5">
              <FaqCategoryFilter
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </div>

            {/* Accordion Questions Column */}
            <div className="col-lg-8 col-md-7">
              <FaqAccordionList
                faqs={filteredFaqs}
                activeFaq={activeFaq}
                setActiveFaq={setActiveFaq}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
