'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LOCALITIES } from '@/data/properties';

export default function HeroBanner() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState('');
  const [selectedLocality, setSelectedLocality] = useState('');
  const [selectedDeal, setSelectedDeal] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (selectedType) params.append('type', selectedType);
    if (selectedLocality) params.append('locality', selectedLocality);
    if (selectedDeal) params.append('deal', selectedDeal);
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div
      className="position-relative d-flex align-items-center"
      style={{
        minHeight: '620px',
        backgroundImage: `linear-gradient(rgba(26, 26, 40, 0.78), rgba(26, 26, 40, 0.82)), url('/assets/images/slider/1.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 0'
      }}
    >
      <div className="container position-relative z-1 text-center text-white">
        {/* Badge */}
        <div className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-pill" style={{ backgroundColor: 'rgba(170, 132, 83, 0.25)', border: '1px solid #aa8453', color: '#f3c78e' }}>
          <i className="fa-solid fa-award"></i>
          <span className="fw-semibold text-uppercase" style={{ fontSize: '13px', letterSpacing: '1px' }}>
            Bhiwandi’s Premier Real Estate Consultant
          </span>
        </div>

        {/* Main Title */}
        <h1 className="display-4 fw-bold mb-3 text-white" style={{ fontFamily: 'Urbanist, sans-serif' }}>
          Find Verified Flats, Heavy Deposits & Galas <br className="d-none d-md-inline" />
          in <span style={{ color: '#aa8453' }}>Bhiwandi</span>
        </h1>

        <p className="lead text-white-50 mx-auto mb-5" style={{ maxWidth: '750px', fontSize: '18px' }}>
          Direct broker assistance with 80% privacy protection, 100% legal title verification, and ready bank loan assistance from nationalized banks.
        </p>

        {/* Search Filter Box */}
        <div className="card shadow-lg border-0 p-3 p-md-4 mx-auto text-start" style={{ maxWidth: '960px', borderRadius: '12px', backgroundColor: 'rgba(255, 255, 255, 0.98)' }}>
          <form onSubmit={handleSearch}>
            <div className="row g-3 align-items-end">
              {/* Locality Field */}
              <div className="col-12 col-md-3">
                <label className="form-label text-muted small fw-bold mb-1">
                  <i className="fa-solid fa-map-pin me-1" style={{ color: '#aa8453' }}></i> Locality / Node
                </label>
                <select
                  className="form-select border-1 py-2"
                  value={selectedLocality}
                  onChange={(e) => setSelectedLocality(e.target.value)}
                  style={{ borderRadius: '6px' }}
                >
                  <option value="">All Bhiwandi Localities</option>
                  {LOCALITIES.map((loc) => (
                    <option key={loc.id} value={loc.name}>
                      {loc.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Property Type Field */}
              <div className="col-12 col-md-3">
                <label className="form-label text-muted small fw-bold mb-1">
                  <i className="fa-solid fa-house me-1" style={{ color: '#aa8453' }}></i> Property Type
                </label>
                <select
                  className="form-select border-1 py-2"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  style={{ borderRadius: '6px' }}
                >
                  <option value="">All Types (BHK/Gala)</option>
                  <option value="1 BHK">1 BHK Flat</option>
                  <option value="2 BHK">2 BHK Flat</option>
                  <option value="3 BHK">3 BHK Luxury Flat</option>
                  <option value="1 RK">1 RK Budget Flat</option>
                  <option value="Commercial Gala">Industrial Gala / Godown</option>
                  <option value="Shop">Commercial Shop</option>
                </select>
              </div>

              {/* Deal Type */}
              <div className="col-12 col-md-3">
                <label className="form-label text-muted small fw-bold mb-1">
                  <i className="fa-solid fa-tag me-1" style={{ color: '#aa8453' }}></i> Deal / Plan
                </label>
                <select
                  className="form-select border-1 py-2"
                  value={selectedDeal}
                  onChange={(e) => setSelectedDeal(e.target.value)}
                  style={{ borderRadius: '6px' }}
                >
                  <option value="">All Deal Types</option>
                  <option value="For Sale">For Sale (Direct Purchase)</option>
                  <option value="Heavy Deposit">Heavy Deposit (Zero Rent)</option>
                  <option value="Low Downpayment">Low Downpayment (₹1L DP)</option>
                  <option value="For Rent">Rental Property</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="col-12 col-md-3">
                <button
                  type="submit"
                  className="btn w-100 py-2 fw-semibold text-white d-flex align-items-center justify-content-center gap-2 shadow"
                  style={{ backgroundColor: '#aa8453', borderRadius: '6px', border: 'none' }}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <span>Find Flats Now</span>
                </button>
              </div>
            </div>
          </form>

          {/* Quick Tags */}
          <div className="d-flex flex-wrap align-items-center gap-2 mt-3 pt-3 border-top" style={{ fontSize: '13px' }}>
            <span className="text-muted fw-bold">Popular Searches:</span>
            <button
              onClick={() => router.push('/properties?deal=Heavy+Deposit')}
              className="badge text-dark bg-light border text-decoration-none py-1 px-2 cursor-pointer"
            >
              Heavy Deposit Flats
            </button>
            <button
              onClick={() => router.push('/properties?locality=Anjur+Phata')}
              className="badge text-dark bg-light border text-decoration-none py-1 px-2 cursor-pointer"
            >
              Anjur Phata Flats
            </button>
            <button
              onClick={() => router.push('/properties?type=Commercial+Gala')}
              className="badge text-dark bg-light border text-decoration-none py-1 px-2 cursor-pointer"
            >
              Purna Industrial Galas
            </button>
            <button
              onClick={() => router.push('/properties?deal=Low+Downpayment')}
              className="badge text-dark bg-light border text-decoration-none py-1 px-2 cursor-pointer"
            >
              ₹1 Lakh Downpayment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
