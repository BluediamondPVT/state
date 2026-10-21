import React from 'react';
import ContactBanner from '@/components/contact/ContactBanner';
import ContactInfoList from '@/components/contact/ContactInfoList';
import ContactForm from '@/components/contact/ContactForm';

export const metadata = {
  title: 'Contact Us | Bhiwandi Estate - Consultation & Site Visits',
  description:
    'Visit our head consultation office or connect directly on WhatsApp for site visits, home loan eligibility check, and warehouse leasing across Bhiwandi.',
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
