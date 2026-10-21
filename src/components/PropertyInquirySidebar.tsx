'use client';

import React, { useState } from 'react';
import { Property } from '@/types/property';
import { AGENCY_CONFIG } from '@/data/properties';

interface Props {
  property: Property;
}

export default function PropertyInquirySidebar({ property }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const whatsappInquiry = encodeURIComponent(
    `Hello Bhiwandi Property Hub! I want to visit/know more about "${property.title}" listed for ${property.price} in ${property.locality}. Please schedule a site visit.`
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 sticky-top bg-white" style={{ top: '90px' }}>
      <div className="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom">
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#aa8453',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '22px'
          }}
        >
          <i className="fa-solid fa-user-tie"></i>
        </div>
        <div>
          <h6 className="fw-bold text-dark mb-0">{AGENCY_CONFIG.name}</h6>
          <small className="text-muted">Bhiwandi Real Estate Consultant</small>
        </div>
      </div>

      <h6 className="fw-bold text-dark mb-3">Schedule a Site Visit / Inquiry</h6>

      {/* Direct Buttons */}
      <a
        href={`https://wa.me/${AGENCY_CONFIG.whatsapp}?text=${whatsappInquiry}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success w-100 py-3 fw-bold mb-2 d-flex align-items-center justify-content-center gap-2"
        style={{ borderRadius: '8px' }}
      >
        <i className="fa-brands fa-whatsapp fs-5"></i>
        <span>Get Video Tour on WhatsApp</span>
      </a>

      <a
        href={`tel:${AGENCY_CONFIG.phone}`}
        className="btn btn-dark w-100 py-3 fw-bold mb-3 d-flex align-items-center justify-content-center gap-2"
        style={{ borderRadius: '8px' }}
      >
        <i className="fa-solid fa-phone"></i>
        <span>Call Agent ({AGENCY_CONFIG.phoneDisplay})</span>
      </a>

      <hr className="my-3" />

      {/* Direct Quick Form */}
      {submitted ? (
        <div className="p-3 bg-light rounded-3 text-center">
          <i className="fa-solid fa-circle-check text-success fs-3 mb-2"></i>
          <h6 className="fw-bold text-dark mb-1">Callback Requested!</h6>
          <p className="small text-muted mb-0">
            Thank you {name}. Our consultant will call you at {phone} within 15 minutes.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Your Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <input
              type="tel"
              className="form-control form-control-sm"
              placeholder="Your WhatsApp / Phone Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control form-control-sm"
              rows={3}
              defaultValue={`Hi, I would like to schedule a site visit for "${property.title}" in ${property.locality}.`}
            />
          </div>
          <button
            type="submit"
            className="btn w-100 py-2 fw-semibold text-white"
            style={{ backgroundColor: '#aa8453', borderRadius: '6px' }}
          >
            Request Callback
          </button>
        </form>
      )}

      <div className="mt-3 text-center">
        <small className="text-muted" style={{ fontSize: '11px' }}>
          <i className="fa-solid fa-lock me-1"></i> Your phone number is 100% confidential.
        </small>
      </div>
    </div>
  );
}
