import React from 'react';
import PropertyCard from '@/components/PropertyCard';
import { Property } from '@/types/property';
import { AGENCY_CONFIG } from '@/data/properties';

interface Props {
  properties: Property[];
  resetFilters: () => void;
}

export default function PropertiesListGrid({ properties, resetFilters }: Props) {
  if (properties.length === 0) {
    return (
      <div className="card shadow-sm border-0 p-5 text-center bg-white rounded-3">
        <i className="fa-solid fa-house-chimney-crack fs-1 text-muted mb-3"></i>
        <h4 className="fw-bold text-dark">No Matching Properties Found</h4>
        <p className="text-muted small mx-auto" style={{ maxWidth: '400px' }}>
          Try clearing your filters or contact Taimur Bhai directly for fresh off-market inventory in Millat Nagar, Chavindra, and VP Naka.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={resetFilters}
            className="btn btn-sm btn-outline-secondary"
          >
            Reset Filters
          </button>
          <a
            href={`https://wa.me/${AGENCY_CONFIG.whatsapp}?text=${encodeURIComponent('Hello Taimur Bhai, I am looking for property in Bhiwandi.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-success"
          >
            <i className="fa-brands fa-whatsapp me-1"></i> WhatsApp Taimur Bhai
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="row g-4">
      {properties.map((property) => (
        <div key={property.id} className="col-md-6 col-xl-4">
          <PropertyCard property={property} />
        </div>
      ))}

      {/* Off-Market WhatsApp Banner */}
      <div className="col-12 mt-4">
        <div
          className="p-4 rounded-4 shadow-sm text-center text-md-start d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
          style={{ backgroundColor: '#1a1a28', borderLeft: '5px solid #aa8453' }}
        >
          <div>
            <span
              className="badge px-3 py-1 mb-2 text-white"
              style={{ backgroundColor: '#aa8453', fontSize: '11px' }}
            >
              OFF-MARKET &amp; DAILY INVENTORY
            </span>
            <h5 className="fw-bold text-white mb-1" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Looking for Unlisted Flats or Heavy Deposit Deals in Millat Nagar, Chavindra &amp; Bhiwandi?
            </h5>
            <p className="text-secondary small mb-0" style={{ maxWidth: '620px' }}>
              Daily fresh properties in Bhiwandi often get booked within 48 hours. Message Taimur Bhai directly on WhatsApp to get instant video walkthroughs and offline owner details.
            </p>
          </div>
          <a
            href={`https://wa.me/${AGENCY_CONFIG.whatsapp}?text=${encodeURIComponent('Hello Taimur Bhai, I am looking for an off-market property in Bhiwandi. Please share latest listings.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success px-4 py-3 rounded-pill fw-bold text-nowrap d-flex align-items-center gap-2 shadow"
          >
            <i className="fa-brands fa-whatsapp fs-5"></i> Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
