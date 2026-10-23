'use client';

import React, { useState } from 'react';
import { Property } from '@/types/property';
import { AGENCY_CONFIG } from '@/data/properties';
import toast from 'react-hot-toast';

interface Props {
  property: Property;
}

export default function PropertyInquirySidebar({ property }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(
    `Hi, I would like to schedule a site visit for "${property.title}" in ${property.locality}.`
  );

  const whatsappInquiry = encodeURIComponent(
    `Hello Taimur Bhai (Taimur Real Estate)! I want to visit/know more about "${property.title}" listed for ${property.price} in ${property.locality}. Please schedule a site visit.`
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      toast.error('Please enter both your name and phone number');
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading('Sending inquiry to Taimur Real Estate...');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          propertyId: property.id,
          locality: property.locality,
          type: property.type,
          message: message.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        toast.error(data.error || 'Failed to submit inquiry', { id: toastId });
        setIsSubmitting(false);
        return;
      }

      toast.success('Inquiry received! We will call you within 15 minutes.', { id: toastId });
      setSubmitted(true);
    } catch {
      toast.error('Network error. Please try again or WhatsApp directly.', { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
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
            fontSize: '22px',
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

      <div className="p-2 rounded-2 mb-3 text-center" style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}>
        <small className="text-success fw-semibold" style={{ fontSize: '11.5px' }}>
          <i className="fa-solid fa-check-circle me-1"></i> 100% Free Site Visits • Nominal Token Only When You Like The Property
        </small>
      </div>

      <hr className="my-3" />

      {/* Direct Quick Form */}
      {submitted ? (
        <div className="p-3 bg-light rounded-3 text-center">
          <i className="fa-solid fa-circle-check text-success fs-3 mb-2"></i>
          <h6 className="fw-bold text-dark mb-1">Callback Requested!</h6>
          <p className="small text-muted mb-0">
            Thank you {name}. Taimur Real Estate will call you at {phone} within 15 minutes.
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control form-control-sm"
              rows={3}
              disabled={isSubmitting}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn w-100 py-2 fw-semibold text-white"
            style={{ backgroundColor: '#aa8453', borderRadius: '6px' }}
          >
            {isSubmitting ? (
              <span>
                <i className="fa-solid fa-spinner fa-spin me-1"></i> Sending...
              </span>
            ) : (
              'Request Free Callback'
            )}
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
