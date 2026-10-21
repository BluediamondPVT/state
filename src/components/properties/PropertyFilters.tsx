import React from 'react';
import { LOCALITIES } from '@/data/properties';

interface Props {
  selectedType: string;
  setSelectedType: (val: string) => void;
  selectedLocality: string;
  setSelectedLocality: (val: string) => void;
  selectedDeal: string;
  setSelectedDeal: (val: string) => void;
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  resetFilters: () => void;
}

export default function PropertyFilters({
  selectedType,
  setSelectedType,
  selectedLocality,
  setSelectedLocality,
  selectedDeal,
  setSelectedDeal,
  searchTerm,
  setSearchTerm,
  resetFilters,
}: Props) {
  const hasFilters = Boolean(selectedType || selectedLocality || selectedDeal || searchTerm);

  return (
    <div className="card shadow-sm border-0 p-3 sticky-top" style={{ top: '90px', borderRadius: '10px' }}>
      <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
        <h5 className="fw-bold mb-0 text-dark fs-6">
          <i className="fa-solid fa-sliders me-2" style={{ color: '#aa8453' }}></i> Filter Properties
        </h5>
        {hasFilters && (
          <button onClick={resetFilters} className="btn btn-sm btn-link text-danger p-0 text-decoration-none">
            Reset All
          </button>
        )}
      </div>

      {/* Keyword Search */}
      <div className="mb-3">
        <label className="form-label small fw-bold text-muted">Keywords</label>
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="e.g. Balcony, Gated, Tower"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Locality Filter */}
      <div className="mb-3">
        <label className="form-label small fw-bold text-muted">Locality / Area</label>
        <select
          className="form-select form-select-sm"
          value={selectedLocality}
          onChange={(e) => setSelectedLocality(e.target.value)}
        >
          <option value="">All Bhiwandi Localities</option>
          {LOCALITIES.map((loc) => (
            <option key={loc.id} value={loc.name}>
              {loc.name}
            </option>
          ))}
        </select>
      </div>

      {/* Property Type Filter */}
      <div className="mb-3">
        <label className="form-label small fw-bold text-muted">Property Type</label>
        <select
          className="form-select form-select-sm"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="1 BHK">1 BHK Flat</option>
          <option value="2 BHK">2 BHK Flat</option>
          <option value="3 BHK">3 BHK Luxury Flat</option>
          <option value="1 RK">1 RK Budget Room</option>
          <option value="Commercial Gala">Commercial Gala / Warehouse</option>
          <option value="Shop">Shop</option>
        </select>
      </div>

      {/* Deal Type Filter */}
      <div className="mb-3">
        <label className="form-label small fw-bold text-muted">Deal Type</label>
        <select
          className="form-select form-select-sm"
          value={selectedDeal}
          onChange={(e) => setSelectedDeal(e.target.value)}
        >
          <option value="">All Deal Types</option>
          <option value="For Sale">For Sale</option>
          <option value="Heavy Deposit">Heavy Deposit (Zero Rent)</option>
          <option value="Low Downpayment">Low Downpayment (₹1L)</option>
          <option value="For Rent">For Rent</option>
        </select>
      </div>

      {/* Assistance Call Box */}
      <div
        className="p-3 rounded-2 text-center mt-3"
        style={{ backgroundColor: '#fcf8f2', border: '1px dashed #aa8453' }}
      >
        <p className="small fw-bold mb-1 text-dark">Can’t find what you need?</p>
        <p className="small text-muted mb-2" style={{ fontSize: '11px' }}>
          We have 50+ private offline listings in Bhiwandi.
        </p>
        <a
          href="https://wa.me/919876543210?text=Hi%2C%20I%20have%20a%20specific%20property%20requirement%20in%20Bhiwandi."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm w-100 fw-bold text-white"
          style={{ backgroundColor: '#25d366', fontSize: '12px' }}
        >
          <i className="fa-brands fa-whatsapp me-1"></i> WhatsApp Request
        </a>
      </div>
    </div>
  );
}
