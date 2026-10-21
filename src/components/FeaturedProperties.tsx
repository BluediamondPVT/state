'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PROPERTIES } from '@/data/properties';
import PropertyCard from '@/components/PropertyCard';

export default function FeaturedProperties() {
  const [activeTab, setActiveTab] = useState<'ALL' | '1BHK' | '2BHK' | 'HEAVY' | 'GALA'>('ALL');

  const filteredProperties = PROPERTIES.filter((p) => {
    if (activeTab === 'ALL') return true;
    if (activeTab === '1BHK') return p.type === '1 BHK';
    if (activeTab === '2BHK') return p.type === '2 BHK';
    if (activeTab === 'HEAVY') return p.dealType === 'Heavy Deposit';
    if (activeTab === 'GALA') return p.type === 'Commercial Gala';
    return true;
  });

  return (
    <section className="py-5 bg-light" id="featured-properties">
      <div className="container py-3">
        {/* Section Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 gap-3">
          <div>
            <span className="text-uppercase fw-bold" style={{ color: '#aa8453', fontSize: '13px', letterSpacing: '1px' }}>
              Handpicked Verified Listings
            </span>
            <h2 className="display-6 fw-bold text-dark mb-0 mt-1" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Featured Properties in Bhiwandi
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="d-flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('ALL')}
              className={`btn btn-sm px-3 py-2 fw-semibold rounded-pill ${
                activeTab === 'ALL' ? 'text-white' : 'btn-outline-secondary'
              }`}
              style={{ backgroundColor: activeTab === 'ALL' ? '#aa8453' : 'transparent', borderColor: '#aa8453' }}
            >
              All Listings
            </button>
            <button
              onClick={() => setActiveTab('1BHK')}
              className={`btn btn-sm px-3 py-2 fw-semibold rounded-pill ${
                activeTab === '1BHK' ? 'text-white' : 'btn-outline-secondary'
              }`}
              style={{ backgroundColor: activeTab === '1BHK' ? '#aa8453' : 'transparent', borderColor: '#aa8453' }}
            >
              1 BHK Flats
            </button>
            <button
              onClick={() => setActiveTab('2BHK')}
              className={`btn btn-sm px-3 py-2 fw-semibold rounded-pill ${
                activeTab === '2BHK' ? 'text-white' : 'btn-outline-secondary'
              }`}
              style={{ backgroundColor: activeTab === '2BHK' ? '#aa8453' : 'transparent', borderColor: '#aa8453' }}
            >
              2 BHK Flats
            </button>
            <button
              onClick={() => setActiveTab('HEAVY')}
              className={`btn btn-sm px-3 py-2 fw-semibold rounded-pill ${
                activeTab === 'HEAVY' ? 'text-white' : 'btn-outline-secondary'
              }`}
              style={{ backgroundColor: activeTab === 'HEAVY' ? '#d97706' : 'transparent', borderColor: '#d97706' }}
            >
              Heavy Deposit
            </button>
            <button
              onClick={() => setActiveTab('GALA')}
              className={`btn btn-sm px-3 py-2 fw-semibold rounded-pill ${
                activeTab === 'GALA' ? 'text-white' : 'btn-outline-secondary'
              }`}
              style={{ backgroundColor: activeTab === 'GALA' ? '#2563eb' : 'transparent', borderColor: '#2563eb' }}
            >
              Industrial Gala
            </button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="row g-4">
          {filteredProperties.map((property) => (
            <div key={property.id} className="col-12 col-md-6 col-lg-4">
              <PropertyCard property={property} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-5">
          <Link
            href="/properties"
            className="btn btn-lg px-4 py-3 fw-bold text-white shadow-sm"
            style={{ backgroundColor: '#aa8453', borderRadius: '8px' }}
          >
            <i className="fa-solid fa-layer-group me-2"></i>
            Explore All 150+ Verified Bhiwandi Properties
          </Link>
        </div>
      </div>
    </section>
  );
}
