'use client';

import React, { useState } from 'react';
import { LOCALITIES, AGENCY_CONFIG } from '@/data/properties';

export default function SellPropertyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    ownerName: '',
    phone: '',
    propertyType: '1 BHK',
    dealType: 'For Sale',
    locality: 'Anjur Phata',
    expectedPrice: '',
    carpetArea: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="card shadow-sm border-0 rounded-4 p-4 p-md-5 bg-white">
      {submitted ? (
        <div className="text-center py-5">
          <div className="mb-3 text-success fs-1">
            <i className="fa-solid fa-circle-check"></i>
          </div>
          <h3 className="fw-bold text-dark">Property Details Received!</h3>
          <p className="text-muted mb-4">
            Thank you {formData.ownerName}. Our senior Bhiwandi consultant will call you at{' '}
            <strong>{formData.phone}</strong> within 2 hours to verify details and coordinate
            photography/visits.
          </p>
          <a
            href={`https://wa.me/${AGENCY_CONFIG.whatsapp}?text=${encodeURIComponent(
              `Hi, I just submitted my ${formData.propertyType} in ${formData.locality} for ${formData.dealType}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success px-4 py-2 fw-semibold"
          >
            <i className="fa-brands fa-whatsapp me-2"></i> Confirm on WhatsApp
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h4 className="fw-bold text-dark mb-4 pb-2 border-bottom">
            Property Owner Submission Form
          </h4>

          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label small fw-bold text-muted">Owner / Contact Name *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Full Name"
                required
                value={formData.ownerName}
                onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label small fw-bold text-muted">
                Mobile / WhatsApp Number *
              </label>
              <input
                type="tel"
                className="form-control"
                placeholder="10-digit Phone Number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label small fw-bold text-muted">Property Category *</label>
              <select
                className="form-select"
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
              >
                <option value="1 BHK">1 BHK Apartment</option>
                <option value="2 BHK">2 BHK Apartment</option>
                <option value="3 BHK">3 BHK Luxury Apartment</option>
                <option value="1 RK">1 RK Budget Room</option>
                <option value="Commercial Gala">Industrial Gala / Warehouse</option>
                <option value="Shop">Retail Shop</option>
                <option value="Plot">Open Plot / Land</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label small fw-bold text-muted">Transaction Intent *</label>
              <select
                className="form-select"
                value={formData.dealType}
                onChange={(e) => setFormData({ ...formData, dealType: e.target.value })}
              >
                <option value="For Sale">I want to Sell (Outright)</option>
                <option value="Heavy Deposit">Heavy Deposit (Zero Monthly Rent)</option>
                <option value="For Rent">Regular Monthly Rental</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label small fw-bold text-muted">Locality in Bhiwandi *</label>
              <select
                className="form-select"
                value={formData.locality}
                onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
              >
                {LOCALITIES.map((loc) => (
                  <option key={loc.id} value={loc.name}>
                    {loc.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label small fw-bold text-muted">
                Expected Price / Deposit (₹) *
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. ₹28 Lakhs / ₹4 Lakhs Deposit"
                required
                value={formData.expectedPrice}
                onChange={(e) => setFormData({ ...formData, expectedPrice: e.target.value })}
              />
            </div>

            <div className="col-12">
              <label className="form-label small fw-bold text-muted">
                Carpet Area (approx sq. ft.)
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. 450 Sq. Ft."
                value={formData.carpetArea}
                onChange={(e) => setFormData({ ...formData, carpetArea: e.target.value })}
              />
            </div>

            <div className="col-12">
              <label className="form-label small fw-bold text-muted">
                Specific Features / Remarks
              </label>
              <textarea
                className="form-control"
                rows={3}
                placeholder="Mention tower name (optional), floor level, lift availability, water supply, or preferred visit timings..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </div>

            <div className="col-12 mt-4">
              <button
                type="submit"
                className="btn btn-lg w-100 fw-bold text-white shadow"
                style={{ backgroundColor: '#aa8453', borderRadius: '8px' }}
              >
                Submit Property for Verification
              </button>
              <p className="text-muted small text-center mt-2 mb-0" style={{ fontSize: '11px' }}>
                <i className="fa-solid fa-lock me-1"></i> Your phone number and exact wing are kept
                strictly confidential under our 80% privacy policy.
              </p>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
