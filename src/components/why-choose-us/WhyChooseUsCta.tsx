import React from 'react';
import Link from 'next/link';
import { AGENCY_CONFIG } from '@/data/properties';

export default function WhyChooseUsCta() {
  return (
    <div
      className="full-row py-5 text-white text-center"
      style={{ backgroundColor: '#282838' }}
    >
      <div className="container py-4">
        <h2
          className="display-6 fw-bold text-white mb-3"
          style={{ fontFamily: 'Urbanist, sans-serif' }}
        >
          Ready to Experience Friction-Free Property Deals?
        </h2>
        <p className="lead text-white-50 mx-auto mb-4" style={{ maxWidth: '650px' }}>
          Connect with our registered advisory desk today. Whether buying, renting, or leasing
          commercial warehouses, our team is at your service.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a
            href={`https://wa.me/${AGENCY_CONFIG.whatsapp}?text=Hi,%20I%20would%20like%20to%20consult%20regarding%20Bhiwandi%20properties.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary px-4 py-3 fw-bold"
          >
            <i className="fa-brands fa-whatsapp me-2 fs-5"></i> Chat on WhatsApp
          </a>
          <Link href="/contact" className="btn btn-outline-light px-4 py-3 fw-bold">
            Visit Consultation Office
          </Link>
        </div>
      </div>
    </div>
  );
}
