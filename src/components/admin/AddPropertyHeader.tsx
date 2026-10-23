import React from 'react';
import Link from 'next/link';

export default function AddPropertyHeader() {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
      <div>
        <Link href="/admin" className="neo-btn text-decoration-none mb-2" style={{ padding: '6px 12px', fontSize: '13px' }}>
          <i className="fa-solid fa-arrow-left"></i>
          <span>Back to Inventory</span>
        </Link>
        <h3 className="fw-bold text-dark mb-0 mt-2">
          Publish New Property Listing
        </h3>
        <p className="text-muted small mb-0">80% Confidentiality Protection Active</p>
      </div>
      <span className="neo-inset px-3 py-2 small fw-bold" style={{ color: 'var(--neo-primary)' }}>
        <i className="fa-solid fa-shield-halved me-1"></i> Broker Protected
      </span>
    </div>
  );
}
