import React from 'react';
import { AGENCY_CONFIG } from '@/data/properties';

export default function LoginFeaturesCard() {
  return (
    <div className="p-4 bg-white rounded-4 shadow-sm border text-start">
      <span
        className="badge px-3 py-2 mb-3 text-white"
        style={{ backgroundColor: '#aa8453', letterSpacing: '1px' }}
      >
        OFFICIAL AGENT ACCESS
      </span>
      <h3 className="fw-bold text-dark mb-3" style={{ fontFamily: 'Urbanist, sans-serif' }}>
        Manage Bhiwandi&apos;s #1 Real Estate Inventory
      </h3>
      <p className="text-muted mb-4">
        Log in to publish new flats, update heavy deposit agreements, manage commercial godowns in
        Purna &amp; Mankoli, and track direct buyer inquiries.
      </p>

      <div className="d-flex flex-column gap-3 mb-4">
        <div className="d-flex align-items-center gap-3">
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              backgroundColor: 'rgba(170, 132, 83, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#aa8453',
            }}
          >
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <div>
            <h6 className="fw-bold text-dark mb-0">80% Privacy Shield Control</h6>
            <small className="text-muted">
              Conceal flat &amp; wing numbers to prevent middle-men leakage
            </small>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              backgroundColor: 'rgba(170, 132, 83, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#aa8453',
            }}
          >
            <i className="fa-solid fa-bolt"></i>
          </div>
          <div>
            <h6 className="fw-bold text-dark mb-0">Live WhatsApp Lead Push</h6>
            <small className="text-muted">Direct visitor notifications routed directly to your mobile</small>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              backgroundColor: 'rgba(170, 132, 83, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#aa8453',
            }}
          >
            <i className="fa-solid fa-file-contract"></i>
          </div>
          <div>
            <h6 className="fw-bold text-dark mb-0">MahaRERA Audit Compliance</h6>
            <small className="text-muted">{AGENCY_CONFIG.reraNumber}</small>
          </div>
        </div>
      </div>

      <div
        className="p-3 rounded-3"
        style={{ backgroundColor: '#fcf8f2', border: '1px dashed #aa8453' }}
      >
        <p className="small text-muted mb-0">
          <strong>Notice:</strong> This dashboard is strictly for licensed staff and partner
          brokers. Unauthorized attempts are logged.
        </p>
      </div>
    </div>
  );
}
