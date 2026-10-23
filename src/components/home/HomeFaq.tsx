'use client';

import React, { useState } from 'react';

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: 'Property pasand aane par booking ka kya process hai? Kya pehle advance dena hota hai?',
    a: 'Pehle property dekhne ya consultation ka koi advance nahi dena hota — site visits 100% FREE hain! Lekin jaise hi aapko koi flat, room ya gala pasand aa jata hai (chahe wo Sale flat ho, Heavy Deposit zero-rent ho, ya Monthly Rent ho), property ko owner ke sath lock/hold karne ke liye nominal Booking Token amount dena hota hai with official receipt. Iske baad Taimur Real Estate legal papers check karwa ke registered agreement aur loan process complete karwata hai.',
  },
  {
    q: 'What is a Heavy Deposit flat agreement and how does it work?',
    a: 'In a Heavy Deposit agreement, you pay a one-time refundable deposit (e.g. ₹2.5 Lakhs to ₹6 Lakhs depending on 1BHK/2BHK) with ₹0 monthly rent. At the end of the registered tenure, 100% of your deposit amount is refunded back to you by the owner.',
  },
  {
    q: 'Can I get up to 90% home loan for flats in Bhiwandi?',
    a: 'Yes! We have tie-ups with SBI, HDFC, ICICI, Bank of Baroda, and major nationalized banks. Our dedicated finance desk assists both salaried and business owners with up to 85%-90% loan sanctions along with complete documentation support.',
  },
  {
    q: 'Why are exact flat numbers and wings kept confidential online?',
    a: 'Under our verified 80% Confidentiality Model, we protect property sellers from unsolicited broker calls and safeguard buyers from unverified middlemen. Once you inquire, our registered agent coordinates direct escorted site visits.',
  },
  {
    q: 'Are industrial galas & warehouses in Purna/Mankoli legally approved?',
    a: 'All commercial galas and warehouses listed on our platform undergo verification for Grampanchayat / MMRDA permissions, electricity connection clearances, road access width for heavy containers, and industrial safety compliance.',
  },
  {
    q: 'How fast can a sale deed registration and key handover take place?',
    a: 'With clear documentation and bank sanctions in place, our legal team drafts agreements, completes stamp duty payments, and schedules sub-registrar biometric registration within 3 to 7 working days.',
  },
];

export default function HomeFaq() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <div className="full-row bg-white" id="faq">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 mb-5 text-center">
            <span className="color-primary tagline pb-2 d-table m-auto">
              Frequently Asked Questions
            </span>
            <h3 className="color-dark mx-auto mb-3 text-center ls-1">
              Got Questions About Bhiwandi Properties?
            </h3>
            <p className="text-muted">
              Clear answers on home loans, heavy deposit agreements, legal
              documentation, and commercial godowns.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="bb-accordion ac-single-show accordion-plus-left">
              {faqs.map((item, idx) => (
                <div
                  className="ac-card"
                  key={idx}
                  style={{
                    marginBottom: '15px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    className={`ac-toggle d-flex justify-content-between align-items-center p-3 ${
                      activeFaq === idx ? 'active bg-light' : 'bg-white'
                    }`}
                    style={{
                      cursor: 'pointer',
                      fontWeight: 600,
                      color: '#282838',
                    }}
                    onClick={() =>
                      setActiveFaq(activeFaq === idx ? null : idx)
                    }
                  >
                    <span className="pe-3">{item.q}</span>
                    <i
                      className={`fa-solid ${
                        activeFaq === idx ? 'fa-minus' : 'fa-plus'
                      } text-primary`}
                      style={{ minWidth: '16px' }}
                    ></i>
                  </div>
                  {activeFaq === idx && (
                    <div
                      className="ac-collapse p-3 bg-white"
                      style={{ borderTop: '1px solid #f0f0f0' }}
                    >
                      <p
                        className="mb-0 text-secondary"
                        style={{ lineHeight: '1.7', fontSize: '15px' }}
                      >
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
