import React from 'react';
import { Property } from '@/types/property';

interface Props {
  property: Property;
}

export default function PropertyOverviewSpecs({ property }: Props) {
  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white">
      <h5 className="fw-bold text-dark mb-3 pb-2 border-bottom">Overview &amp; Specs</h5>
      <div className="row g-3">
        <div className="col-6 col-md-3">
          <div className="p-3 bg-light rounded-3 text-center">
            <i className="fa-solid fa-bed fs-4 mb-1" style={{ color: '#aa8453' }}></i>
            <span className="d-block small text-muted">Bedrooms</span>
            <span className="fw-bold text-dark">
              {property.bedrooms > 0 ? `${property.bedrooms} BHK` : 'Industrial'}
            </span>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="p-3 bg-light rounded-3 text-center">
            <i className="fa-solid fa-bath fs-4 mb-1" style={{ color: '#aa8453' }}></i>
            <span className="d-block small text-muted">Bathrooms</span>
            <span className="fw-bold text-dark">{property.bathrooms} Baths</span>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="p-3 bg-light rounded-3 text-center">
            <i className="fa-solid fa-ruler-combined fs-4 mb-1" style={{ color: '#aa8453' }}></i>
            <span className="d-block small text-muted">Carpet Area</span>
            <span className="fw-bold text-dark">{property.carpetArea}</span>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="p-3 bg-light rounded-3 text-center">
            <i className="fa-solid fa-calendar-check fs-4 mb-1" style={{ color: '#aa8453' }}></i>
            <span className="d-block small text-muted">Possession</span>
            <span className="fw-bold text-dark">{property.possessionStatus}</span>
          </div>
        </div>
      </div>

      <div className="row g-3 mt-1">
        <div className="col-md-6">
          <div className="d-flex justify-content-between py-2 border-bottom small">
            <span className="text-muted">Furnishing State:</span>
            <span className="fw-semibold text-dark">{property.furnishing}</span>
          </div>
          <div className="d-flex justify-content-between py-2 border-bottom small">
            <span className="text-muted">Water Supply:</span>
            <span className="fw-semibold text-dark">{property.waterSupply}</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-between py-2 border-bottom small">
            <span className="text-muted">Bank Loan Support:</span>
            <span className="fw-semibold text-success">
              {property.loanAvailable ? 'Approved (Up to 90%)' : 'Direct Deal'}
            </span>
          </div>
          <div className="d-flex justify-content-between py-2 border-bottom small">
            <span className="text-muted">Floor Level:</span>
            <span className="fw-semibold text-dark">{property.floor}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
