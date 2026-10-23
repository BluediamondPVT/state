import type { Metadata } from 'next';
import ContactBanner from '@/components/contact/ContactBanner';
import ContactInfoList from '@/components/contact/ContactInfoList';
import ContactForm from '@/components/contact/ContactForm';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact Taimur Real Estate | Site Visits & Broker Consultation in Bhiwandi',
  description:
    'Contact Taimur Real Estate at Millat Nagar 1, Bhiwandi. Call +91 98222 70773 or connect via WhatsApp for verified flats, heavy deposit deals, and site visits.',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact Taimur Real Estate | Bhiwandi Property Consultation',
    description:
      'Visit our office in Millat Nagar 1 or schedule an accompanied property inspection in Bhiwandi.',
    url: `${SITE_URL}/contact`,
    type: 'website',
    images: ['/assets/images/banner/hero1.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Taimur Real Estate Bhiwandi',
    description: 'Call +91 98222 70773 for verified property inspections in Bhiwandi.',
    images: ['/assets/images/banner/hero1.png'],
  },
};

export default function ContactPage() {
  return (
    <main>
      {/* 1. Header Hero Banner */}
      <ContactBanner />

      <div className="container py-5">
        <div className="row g-5">
          {/* 2. Contact Information Cards */}
          <div className="col-lg-5">
            <ContactInfoList />
          </div>

          {/* 3. Inquiry / Site Visit Form */}
          <div className="col-lg-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
