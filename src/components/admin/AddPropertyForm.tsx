'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { LOCALITIES } from '@/data/properties';

const availableImages = [
  { label: 'High Rise Residential', url: '/assets/images/property/property-grid-1.png' },
  { label: 'Modern Apartment Complex', url: '/assets/images/property/property-grid-2.png' },
  { label: 'Gated Society Tower', url: '/assets/images/property/property-grid-3.png' },
  { label: 'Industrial Gala & Warehouse', url: '/assets/images/property/property-grid-4.png' },
  { label: 'Luxury Township Penthouse', url: '/assets/images/property/property-grid-5.png' },
  { label: 'Compact Budget Flat', url: '/assets/images/property/property-grid-6.png' },
];

export default function AddPropertyForm() {
  const router = useRouter();
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    title: '',
    type: '1 BHK',
    dealType: 'For Sale',
    price: '',
    priceLabel: 'Negotiable (Loan Available)',
    locality: 'Anjur Phata',
    carpetArea: '',
    superArea: '',
    floor: 'Middle Floor of G+7 Tower',
    bedrooms: 1,
    bathrooms: 1,
    balconies: 1,
    waterSupply: '24 Hours Municipal Water',
    furnishing: 'Semi-Furnished',
    loanAvailable: true,
    description: '',
    image: '/assets/images/property/property-grid-1.png',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      router.push('/admin');
    }, 2000);
  };

  if (success) {
    return (
      <div className="card shadow-sm border-0 rounded-4 p-5 text-center bg-white">
        <div className="mb-3 text-success fs-1">
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <h3 className="fw-bold text-dark">Property Successfully Published!</h3>
        <p className="text-muted">
          New property &amp; dynamic SEO landing page are now live. Redirecting to dashboard...
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card shadow-sm border-0 rounded-4 p-4 p-md-5 bg-white">
      {/* Notice */}
      <div className="alert alert-warning d-flex align-items-center gap-2 small mb-4" role="alert">
        <i className="fa-solid fa-triangle-exclamation fs-5"></i>
        <div>
          <strong>Broker Confidentiality Tip:</strong> Do not enter exact wing or flat numbers (e.g.
          B-402). Use general indicators like <em>&quot;4th Floor of 12-Storey Tower&quot;</em> to
          ensure buyers contact you directly!
        </div>
      </div>

      <h5 className="fw-bold text-dark mb-3 pb-2 border-bottom">1. Basic Property Information</h5>
      <div className="row g-3 mb-4">
        <div className="col-12">
          <label className="form-label small fw-bold text-muted">Property Display Title *</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Spacious 2 BHK Flat with Balcony near Dhamankar Naka Flyover"
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>

        <div className="col-md-4">
          <label className="form-label small fw-bold text-muted">Property Category *</label>
          <select
            className="form-select"
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          >
            <option value="1 BHK">1 BHK Flat</option>
            <option value="2 BHK">2 BHK Flat</option>
            <option value="3 BHK">3 BHK Luxury Flat</option>
            <option value="1 RK">1 RK Budget Room</option>
            <option value="Commercial Gala">Commercial Gala / Warehouse</option>
            <option value="Shop">Shop</option>
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label small fw-bold text-muted">Deal Type *</label>
          <select
            className="form-select"
            value={form.dealType}
            onChange={(e) => setForm({ ...form, dealType: e.target.value })}
          >
            <option value="For Sale">For Sale (Outright Purchase)</option>
            <option value="Heavy Deposit">Heavy Deposit (Zero Rent)</option>
            <option value="Low Downpayment">Low Downpayment (₹1L)</option>
            <option value="For Rent">Monthly Rental</option>
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label small fw-bold text-muted">Locality / Hub *</label>
          <select
            className="form-select"
            value={form.locality}
            onChange={(e) => setForm({ ...form, locality: e.target.value })}
          >
            {LOCALITIES.map((loc) => (
              <option key={loc.id} value={loc.name}>
                {loc.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <h5 className="fw-bold text-dark mb-3 pb-2 border-bottom">2. Pricing &amp; Financials</h5>
      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <label className="form-label small fw-bold text-muted">
            Display Price (e.g. ₹28.5 Lakhs / ₹4.5L Deposit) *
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. ₹32 Lakhs"
            required
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label small fw-bold text-muted">Price Tag Subtitle</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. All-inclusive / Negotiable"
            value={form.priceLabel}
            onChange={(e) => setForm({ ...form, priceLabel: e.target.value })}
          />
        </div>

        <div className="col-md-6">
          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="loanSupport"
              checked={form.loanAvailable}
              onChange={(e) => setForm({ ...form, loanAvailable: e.target.checked })}
            />
            <label className="form-check-label small text-dark fw-bold" htmlFor="loanSupport">
              Up to 90% Bank Home Loan Pre-Approved (SBI/HDFC/ICICI)
            </label>
          </div>
        </div>
      </div>

      <h5 className="fw-bold text-dark mb-3 pb-2 border-bottom">3. Specs &amp; Area</h5>
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <label className="form-label small fw-bold text-muted">Carpet Area *</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. 485 Sq.Ft."
            required
            value={form.carpetArea}
            onChange={(e) => setForm({ ...form, carpetArea: e.target.value })}
          />
        </div>

        <div className="col-md-3">
          <label className="form-label small fw-bold text-muted">Floor Level (Privacy masked)</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Middle Floor (G+12)"
            value={form.floor}
            onChange={(e) => setForm({ ...form, floor: e.target.value })}
          />
        </div>

        <div className="col-md-3">
          <label className="form-label small fw-bold text-muted">Water Supply</label>
          <input
            type="text"
            className="form-control"
            placeholder="24hr Water / 2 Times daily"
            value={form.waterSupply}
            onChange={(e) => setForm({ ...form, waterSupply: e.target.value })}
          />
        </div>

        <div className="col-md-3">
          <label className="form-label small fw-bold text-muted">Furnishing</label>
          <select
            className="form-select"
            value={form.furnishing}
            onChange={(e) => setForm({ ...form, furnishing: e.target.value })}
          >
            <option value="Unfurnished">Unfurnished</option>
            <option value="Semi-Furnished">Semi-Furnished</option>
            <option value="Fully Furnished">Fully Furnished</option>
          </select>
        </div>
      </div>

      <h5 className="fw-bold text-dark mb-3 pb-2 border-bottom">4. Photo &amp; Description</h5>
      <div className="row g-3 mb-4">
        <div className="col-12">
          <label className="form-label small fw-bold text-muted">Select Representation Image</label>
          <div className="row g-3">
            {availableImages.map((img, i) => (
              <div key={i} className="col-6 col-md-4">
                <div
                  onClick={() => setForm({ ...form, image: img.url })}
                  className="rounded-3 border overflow-hidden p-1 text-center"
                  style={{
                    cursor: 'pointer',
                    borderColor: form.image === img.url ? '#aa8453' : '#e5e7eb',
                    borderWidth: form.image === img.url ? '2px' : '1px',
                    backgroundColor: form.image === img.url ? 'rgba(170, 132, 83, 0.05)' : '#ffffff',
                  }}
                >
                  <div className="position-relative w-100 rounded-2 mb-1 overflow-hidden" style={{ height: '90px' }}>
                    <Image
                      src={img.url}
                      alt={img.label}
                      fill
                      sizes="150px"
                      className="object-fit-cover"
                    />
                  </div>
                  <small
                    className="d-block text-truncate fw-semibold"
                    style={{ fontSize: '11px' }}
                  >
                    {img.label}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-12">
          <label className="form-label small fw-bold text-muted">Marketing Description *</label>
          <textarea
            className="form-control"
            rows={4}
            placeholder="Highlight nearby hospitals, schools, metro stations, 3-phase power or highway access..."
            required
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>
      </div>

      <div className="text-end border-top pt-4">
        <button
          type="submit"
          className="btn btn-lg px-5 fw-bold text-white shadow-sm"
          style={{ backgroundColor: '#aa8453', borderRadius: '8px' }}
        >
          <i className="fa-solid fa-cloud-arrow-up me-2"></i> Publish Property Live
        </button>
      </div>
    </form>
  );
}
