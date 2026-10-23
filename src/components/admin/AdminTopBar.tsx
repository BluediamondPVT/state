'use client';

import React from 'react';
import Link from 'next/link';

export default function AdminTopBar() {
  return (
    <header className="admin-topbar">
      {/* Left Title & Status */}
      <div className="d-flex align-items-center gap-3">
        <div className="d-flex align-items-center gap-2">
          <span
            className="neo-inset-sm px-2 py-1 small fw-bold"
            style={{ color: 'var(--neo-primary)', fontSize: '11px' }}
          >
            LIVE PANEL
          </span>
          <h5 className="fw-bold text-dark mb-0" style={{ fontSize: '18px' }}>
            Taimur Real Estate Advisory
          </h5>
        </div>
      </div>

      {/* Right Quick Actions */}
      <div className="d-flex align-items-center gap-3">
        <Link
          href="/properties"
          target="_blank"
          className="neo-btn text-decoration-none"
          style={{ fontSize: '13px', padding: '8px 14px' }}
        >
          <i className="fa-solid fa-globe text-primary"></i>
          <span>Live Portal</span>
        </Link>

        <Link
          href="/admin/add-property"
          className="neo-btn neo-btn-primary text-decoration-none"
          style={{ fontSize: '13px', padding: '8px 16px' }}
        >
          <i className="fa-solid fa-plus"></i>
          <span>Add Property</span>
        </Link>
      </div>
    </header>
  );
}
