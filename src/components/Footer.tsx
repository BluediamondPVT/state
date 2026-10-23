import React from 'react';
import Link from 'next/link';
import { AGENCY_CONFIG } from '@/data/properties';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1d1d2b', color: '#a0a0b2', fontSize: '14px' }}>
      {/* Main Footer */}
      <div className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Column 1: Agency Brand */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    backgroundColor: '#aa8453',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '18px'
                  }}
                >
                  <i className="fa-solid fa-building"></i>
                </div>
                <span className="fw-bold text-white fs-5" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                  TAIMUR <span style={{ color: '#aa8453' }}>REAL ESTATE</span>
                </span>
              </div>

              <p className="small mb-3 text-white-50" style={{ lineHeight: '1.7' }}>
                Bhiwandi’s trusted property advisory specializing in Millat Nagar, Chavindra, VP Naka, and greater Bhiwandi. Residential flats, zero-rent heavy deposit agreements, and industrial logistics galas.
              </p>

              <div className="p-3 rounded-2 mb-3" style={{ backgroundColor: '#28283a', border: '1px solid #333348' }}>
                <p className="small mb-0 text-white">
                  <i className="fa-solid fa-certificate me-2" style={{ color: '#aa8453' }}></i>
                  <strong>MahaRERA Reg:</strong> {AGENCY_CONFIG.reraNumber}
                </p>
              </div>
            </div>

            {/* Column 2: Quick Property Types */}
            <div className="col-6 col-lg-2">
              <h6 className="fw-bold text-white mb-3 text-uppercase" style={{ fontSize: '13px', letterSpacing: '1px' }}>
                Property Types
              </h6>
              <ul className="list-unstyled d-flex flex-column gap-2 small">
                <li><Link href="/properties?type=1+BHK" className="text-secondary text-decoration-none hover-white">1 BHK Flats</Link></li>
                <li><Link href="/properties?type=2+BHK" className="text-secondary text-decoration-none hover-white">2 BHK Flats</Link></li>
                <li><Link href="/properties?type=3+BHK" className="text-secondary text-decoration-none hover-white">3 BHK Luxury Flats</Link></li>
                <li><Link href="/properties?type=1+RK" className="text-secondary text-decoration-none hover-white">1 RK Budget Rooms</Link></li>
                <li><Link href="/properties?deal=Heavy+Deposit" className="text-warning text-decoration-none fw-semibold">Heavy Deposit Flats</Link></li>
                <li><Link href="/properties?type=Commercial+Gala" className="text-secondary text-decoration-none hover-white">Industrial Galas</Link></li>
                <li><Link href="/properties?deal=Low+Downpayment" className="text-secondary text-decoration-none hover-white">₹1L Downpayment Flats</Link></li>
              </ul>
            </div>

            {/* Column 3: Top Localities */}
            <div className="col-6 col-lg-3">
              <h6 className="fw-bold text-white mb-3 text-uppercase" style={{ fontSize: '13px', letterSpacing: '1px' }}>
                Top Localities
              </h6>
              <ul className="list-unstyled d-flex flex-column gap-2 small">
                <li><Link href="/properties?locality=Millat+Nagar" className="text-secondary text-decoration-none hover-white">Millat Nagar 1 &amp; 2</Link></li>
                <li><Link href="/properties?locality=Chavindra" className="text-secondary text-decoration-none hover-white">Chavindra Sector</Link></li>
                <li><Link href="/properties?locality=VP+Naka" className="text-secondary text-decoration-none hover-white">VP Naka (Varala Devi)</Link></li>
                <li><Link href="/properties?locality=Dhamankar+Naka" className="text-secondary text-decoration-none hover-white">Dhamankar Naka</Link></li>
                <li><Link href="/properties?locality=Anjur+Phata" className="text-secondary text-decoration-none hover-white">Anjur Phata Highway</Link></li>
                <li><Link href="/properties?locality=Purna+%26+Kasheli" className="text-secondary text-decoration-none hover-white">Purna &amp; Kasheli Warehouses</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact & Office */}
            <div className="col-12 col-md-6 col-lg-3">
              <h6 className="fw-bold text-white mb-3 text-uppercase" style={{ fontSize: '13px', letterSpacing: '1px' }}>
                Consultant Office
              </h6>
              <ul className="list-unstyled d-flex flex-column gap-2 small">
                <li className="d-flex align-items-start gap-2">
                  <i className="fa-solid fa-location-dot mt-1" style={{ color: '#aa8453' }}></i>
                  <span>{AGENCY_CONFIG.officeAddress}</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-phone" style={{ color: '#aa8453' }}></i>
                  <a href={`tel:${AGENCY_CONFIG.phone}`} className="text-white text-decoration-none">
                    {AGENCY_CONFIG.phoneDisplay}
                  </a>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="fa-brands fa-whatsapp text-success fs-6"></i>
                  <a
                    href={`https://wa.me/${AGENCY_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                  >
                    Direct WhatsApp Desk
                  </a>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-clock" style={{ color: '#aa8453' }}></i>
                  <span>{AGENCY_CONFIG.operatingHours}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sub Footer */}
      <div className="py-3" style={{ backgroundColor: '#151520', borderTop: '1px solid #232334', fontSize: '13px' }}>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
            <p className="mb-0 text-white-50">
              © 2026 {AGENCY_CONFIG.name}. All Rights Reserved. Specializing in Bhiwandi Real Estate.
            </p>
            <div className="d-flex gap-3 small">
              <span className="text-muted">80% Privacy Protection Policy</span>
              <span className="text-muted">•</span>
              <Link href="/admin" className="text-muted text-decoration-none">
                Agent Portal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
