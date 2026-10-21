import React from 'react';
import Link from 'next/link';
import { LOCALITIES } from '@/data/properties';

export default function LocalitiesSection() {
  return (
    <section className="py-5 bg-white" id="localities">
      <div className="container py-3">
        {/* Title */}
        <div className="text-center mb-5">
          <span className="text-uppercase fw-bold" style={{ color: '#aa8453', fontSize: '13px', letterSpacing: '1px' }}>
            Bhiwandi Locality Guides
          </span>
          <h2 className="display-6 fw-bold text-dark mt-1" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            Find Properties By Neighborhood
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Discover top residential nodes, highway corridors, and industrial hubs across Bhiwandi.
          </p>
        </div>

        {/* Localities Grid */}
        <div className="row g-4">
          {LOCALITIES.map((loc) => (
            <div key={loc.id} className="col-12 col-md-6 col-lg-4">
              <Link
                href={`/properties?locality=${encodeURIComponent(loc.name)}`}
                className="text-decoration-none group"
              >
                <div
                  className="position-relative overflow-hidden shadow-sm"
                  style={{
                    height: '240px',
                    borderRadius: '12px',
                    backgroundImage: `linear-gradient(rgba(20, 20, 30, 0.45), rgba(20, 20, 30, 0.85)), url('${loc.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-light text-dark fw-bold px-2 py-1 shadow-sm">
                      {loc.propertyCount} Properties
                    </span>
                  </div>

                  <div className="position-absolute bottom-0 start-0 p-3 text-white">
                    <h4 className="fw-bold mb-1 text-white" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                      {loc.name}
                    </h4>
                    <p className="small text-white-50 mb-2 line-clamp-2" style={{ fontSize: '12px', lineHeight: '1.4' }}>
                      {loc.tagline}
                    </p>
                    <span className="small fw-semibold d-inline-flex align-items-center gap-1" style={{ color: '#f3c78e' }}>
                      <span>View Listings</span>
                      <i className="fa-solid fa-arrow-right font-mini"></i>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
