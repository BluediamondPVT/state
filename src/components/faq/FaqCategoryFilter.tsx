import React from 'react';
import { AGENCY_CONFIG } from '@/data/properties';

interface Props {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

const categories = [
  { id: 'all', label: 'All Questions', icon: 'fa-border-all' },
  { id: 'loans', label: 'Home Loans & PMAY', icon: 'fa-hand-holding-dollar' },
  { id: 'heavy-deposit', label: 'Heavy Deposit (Zero Rent)', icon: 'fa-money-bill-wave' },
  { id: 'privacy', label: '80% Privacy & Site Visits', icon: 'fa-shield-halved' },
  { id: 'industrial', label: 'Commercial Galas & Godowns', icon: 'fa-warehouse' },
  { id: 'documentation', label: 'Legal & Registration', icon: 'fa-file-signature' },
];

export default function FaqCategoryFilter({ activeCategory, setActiveCategory }: Props) {
  return (
    <div
      className="p-4 rounded-3 border bg-light shadow-sm sticky-top"
      style={{ top: '100px', zIndex: 10 }}
    >
      <h5 className="fw-bold text-dark mb-3" style={{ fontFamily: 'Urbanist, sans-serif' }}>
        Filter by Category
      </h5>
      <div className="list-group list-group-flush rounded-3 border mb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`list-group-item list-group-item-action d-flex align-items-center justify-content-between p-3 border-0 border-bottom ${
              activeCategory === cat.id ? 'active text-white' : 'text-dark'
            }`}
            style={{
              backgroundColor: activeCategory === cat.id ? '#aa8453' : 'transparent',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            <span>
              <i className={`fa-solid ${cat.icon} me-2`}></i>
              {cat.label}
            </span>
            <i className="fa-solid fa-angle-right small"></i>
          </button>
        ))}
      </div>

      {/* Direct Contact Support Box */}
      <div
        className="p-4 rounded-3 text-center text-white"
        style={{ backgroundColor: '#282838' }}
      >
        <div
          className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
          style={{ width: '48px', height: '48px', backgroundColor: '#aa8453' }}
        >
          <i className="fa-brands fa-whatsapp fs-5 text-white"></i>
        </div>
        <h6 className="fw-bold text-white mb-1">Have Another Question?</h6>
        <p className="small text-white-50 mb-3">
          Our senior advisors respond directly on WhatsApp within 5 minutes.
        </p>
        <a
          href={`https://wa.me/${AGENCY_CONFIG.whatsapp}?text=Hello%20Bhiwandi%20Estate%20team,%20I%20have%20a%20question`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-light w-100 fw-bold"
        >
          Ask on WhatsApp
        </a>
      </div>
    </div>
  );
}
