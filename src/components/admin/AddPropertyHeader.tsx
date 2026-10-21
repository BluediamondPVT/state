import React from 'react';
import Link from 'next/link';

export default function AddPropertyHeader() {
  return (
    <div className="py-4 bg-white border-bottom shadow-sm">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Link href="/admin" className="text-decoration-none text-muted small">
              <i className="fa-solid fa-arrow-left me-1"></i> Back to Dashboard
            </Link>
            <h2 className="fw-bold text-dark mb-0 mt-1" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Add New Property (80% Privacy Mode)
            </h2>
          </div>
          <span className="badge px-3 py-2 text-white" style={{ backgroundColor: '#aa8453' }}>
            Broker Lead Protection Active
          </span>
        </div>
      </div>
    </div>
  );
}
