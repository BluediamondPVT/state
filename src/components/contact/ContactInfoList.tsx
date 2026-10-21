import React from 'react';
import { AGENCY_CONFIG } from '@/data/properties';

export default function ContactInfoList() {
  return (
    <div>
      <h3 className="fw-bold text-dark mb-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
        Head Consultation Office
      </h3>

      <div className="d-flex flex-column gap-4">
        {/* Office Address */}
        <div className="d-flex align-items-start gap-3">
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '8px',
              backgroundColor: 'rgba(170, 132, 83, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#aa8453',
              fontSize: '20px',
              flexShrink: 0,
            }}
          >
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div>
            <h6 className="fw-bold text-dark mb-1">Office Address</h6>
            <p className="text-muted small mb-0">{AGENCY_CONFIG.officeAddress}</p>
          </div>
        </div>

        {/* Direct Call */}
        <div className="d-flex align-items-start gap-3">
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '8px',
              backgroundColor: 'rgba(170, 132, 83, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#aa8453',
              fontSize: '20px',
              flexShrink: 0,
            }}
          >
            <i className="fa-solid fa-phone"></i>
          </div>
          <div>
            <h6 className="fw-bold text-dark mb-1">Direct Call</h6>
            <a
              href={`tel:${AGENCY_CONFIG.phone}`}
              className="text-dark fw-semibold text-decoration-none small d-block"
            >
              {AGENCY_CONFIG.phoneDisplay}
            </a>
            <small className="text-muted">Direct line to Senior Property Consultant</small>
          </div>
        </div>

        {/* WhatsApp Support */}
        <div className="d-flex align-items-start gap-3">
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '8px',
              backgroundColor: 'rgba(37, 211, 102, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#25d366',
              fontSize: '22px',
              flexShrink: 0,
            }}
          >
            <i className="fa-brands fa-whatsapp"></i>
          </div>
          <div>
            <h6 className="fw-bold text-dark mb-1">Instant WhatsApp Support</h6>
            <a
              href={`https://wa.me/${AGENCY_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-success fw-bold text-decoration-none small d-block"
            >
              Click to Open WhatsApp Chat
            </a>
            <small className="text-muted">Average response time: 5 minutes</small>
          </div>
        </div>

        {/* Office Hours */}
        <div className="d-flex align-items-start gap-3">
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '8px',
              backgroundColor: 'rgba(170, 132, 83, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#aa8453',
              fontSize: '20px',
              flexShrink: 0,
            }}
          >
            <i className="fa-solid fa-clock"></i>
          </div>
          <div>
            <h6 className="fw-bold text-dark mb-1">Office Hours</h6>
            <p className="text-muted small mb-0">{AGENCY_CONFIG.operatingHours}</p>
            <small className="text-muted">Site visits available 7 days a week</small>
          </div>
        </div>
      </div>
    </div>
  );
}
