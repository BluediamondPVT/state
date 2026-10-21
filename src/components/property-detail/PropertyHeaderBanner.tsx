import React from 'react';
import Link from 'next/link';
import { Property } from '@/types/property';

interface Props {
  property: Property;
}

export default function PropertyHeaderBanner({ property }: Props) {
  return (
    <div className="bg-light py-4 border-bottom">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb small text-muted mb-2">
            <li className="breadcrumb-item">
              <Link href="/" className="text-decoration-none text-muted">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/properties" className="text-decoration-none text-muted">
                Properties
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {property.locality}
            </li>
          </ol>
        </nav>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <div>
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="badge px-3 py-1" style={{ backgroundColor: '#aa8453' }}>
                {property.dealType}
              </span>
              <span className="badge bg-secondary">{property.type}</span>
              <span className="tag-verified-80">
                <i className="fa-solid fa-shield-cat me-1"></i> 80% Verified Listing
              </span>
            </div>
            <h1 className="h3 fw-bold text-dark mb-1" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              {property.title}
            </h1>
            <p className="text-muted small mb-0">
              <i className="fa-solid fa-location-dot me-1 text-danger"></i>
              {property.locality}, Bhiwandi • {property.floor}
            </p>
          </div>

          <div className="text-md-end">
            <span className="small text-muted d-block">Listed Price</span>
            <h2 className="fw-bold mb-0" style={{ color: '#aa8453', fontFamily: 'Urbanist, sans-serif' }}>
              {property.price}
            </h2>
            <span className="badge bg-light text-dark border small">{property.priceLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
