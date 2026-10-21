import React from 'react';
import Link from 'next/link';

export default function AdminHeader() {
  return (
    <div className="py-4 bg-white border-bottom shadow-sm">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <div>
            <span className="badge px-3 py-1 mb-1" style={{ backgroundColor: '#aa8453' }}>
              Agent Portal
            </span>
            <h2 className="fw-bold text-dark mb-0" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Bhiwandi Property Management Dashboard
            </h2>
          </div>

          <div className="d-flex gap-2">
            <Link
              href="/admin/add-property"
              className="btn fw-bold text-white shadow-sm d-flex align-items-center gap-2"
              style={{ backgroundColor: '#aa8453', borderRadius: '6px' }}
            >
              <i className="fa-solid fa-plus"></i>
              <span>Add New Property</span>
            </Link>

            <Link href="/properties" className="btn btn-outline-dark">
              View Live Site
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
