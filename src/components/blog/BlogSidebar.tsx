import React from 'react';
import Link from 'next/link';
import { AGENCY_CONFIG } from '@/data/properties';

export default function BlogSidebar() {
  return (
    <div className="d-flex flex-column gap-4">
      {/* Search Widget */}
      <div className="card border-0 shadow-sm rounded-3 p-4 bg-light">
        <h5 className="fw-bold text-dark mb-3">Topic Search</h5>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search blogs..."
            aria-label="Search"
          />
          <button className="btn btn-primary" type="button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>

      {/* Focus Topics */}
      <div className="card border-0 shadow-sm rounded-3 p-4 bg-light">
        <h5 className="fw-bold text-dark mb-3">Top Market Topics</h5>
        <ul className="list-unstyled mb-0 d-flex flex-column gap-2 small">
          <li className="d-flex justify-content-between align-items-center py-1 border-bottom">
            <Link
              href="/blog"
              className="text-secondary text-decoration-none hover-color-primary"
            >
              Infrastructure &amp; Growth
            </Link>
            <span className="badge bg-secondary">3</span>
          </li>
          <li className="d-flex justify-content-between align-items-center py-1 border-bottom">
            <Link
              href="/blog"
              className="text-secondary text-decoration-none hover-color-primary"
            >
              Heavy Deposit &amp; Rentals
            </Link>
            <span className="badge bg-secondary">2</span>
          </li>
          <li className="d-flex justify-content-between align-items-center py-1 border-bottom">
            <Link
              href="/blog"
              className="text-secondary text-decoration-none hover-color-primary"
            >
              Industrial Logistics Hubs
            </Link>
            <span className="badge bg-secondary">2</span>
          </li>
          <li className="d-flex justify-content-between align-items-center py-1">
            <Link
              href="/blog"
              className="text-secondary text-decoration-none hover-color-primary"
            >
              Banking &amp; Home Loans
            </Link>
            <span className="badge bg-secondary">2</span>
          </li>
        </ul>
      </div>

      {/* WhatsApp Help CTA */}
      <div className="card border-0 shadow-sm rounded-3 p-4 text-center bg-white border-top border-4 border-warning">
        <div
          className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
          style={{ width: '48px', height: '48px', backgroundColor: '#aa8453' }}
        >
          <i className="fa-brands fa-whatsapp fs-5 text-white"></i>
        </div>
        <h6 className="fw-bold text-dark mb-1">Direct Consultation Desk</h6>
        <p className="small text-muted mb-3">
          Have an inquiry about a flat or commercial gala? Talk directly with our ground advisors.
        </p>
        <a
          href={`https://wa.me/${AGENCY_CONFIG.whatsapp}?text=Hello%20Bhiwandi%20Estate,%20I%20have%20an%20inquiry%20regarding%20Bhiwandi%20properties`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-primary w-100 fw-bold"
        >
          Chat with Broker
        </a>
      </div>
    </div>
  );
}
