import React from 'react';
import Image from 'next/image';
import { AGENCY_CONFIG } from '@/data/properties';

export default function AboutStory() {
  return (
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <span
            className="text-uppercase fw-bold"
            style={{ color: '#aa8453', fontSize: '13px', letterSpacing: '1px' }}
          >
            Our Story &amp; Commitment
          </span>
          <h2
            className="display-6 fw-bold text-dark mt-1 mb-4"
            style={{ fontFamily: 'Urbanist, sans-serif' }}
          >
            Redefining Real Estate Brokerage in the Heart of Bhiwandi
          </h2>
          <p className="text-secondary" style={{ lineHeight: '1.8' }}>
            Established over a decade ago, <strong>{AGENCY_CONFIG.name}</strong> was founded on a
            simple principle: to make buying, selling, and renting properties in Bhiwandi as secure,
            transparent, and hassle-free as possible.
          </p>
          <p className="text-secondary" style={{ lineHeight: '1.8' }}>
            While traditional brokerages rely on vague promises and hidden details, we implement
            our signature <strong>80% Confidentiality &amp; Direct Advisory Model</strong>. We
            verify municipal records, OC/CC statuses, and grampanchayat approvals before any
            property is ever presented to a prospective buyer.
          </p>
          <div className="p-3 bg-light rounded-3 border-start border-4 border-warning mt-4">
            <p className="small mb-0 text-dark">
              <strong>MahaRERA Registered Consultant:</strong> {AGENCY_CONFIG.reraNumber} •
              Operating with 100% legal compliance and documentation transparency.
            </p>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card border-0 shadow rounded-4 overflow-hidden position-relative" style={{ height: '380px' }}>
            <Image
              src="/assets/images/property/property-grid-5.png"
              alt="About Bhiwandi Real Estate"
              fill
              sizes="(max-width: 992px) 100vw, 50vw"
              className="object-fit-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
