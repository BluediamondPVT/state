import React from 'react';
import Link from 'next/link';
import { AGENCY_CONFIG } from '@/data/properties';

export default function HomeAbout() {
  return (
    <>
      <div className="full-row" id="about">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <span className="badge px-3 py-2 text-uppercase mb-3 text-white" style={{ backgroundColor: '#aa8453', letterSpacing: '1px' }}>
                10+ Years of Ground Mastery in Bhiwandi
              </span>
              <h2 className="color-dark mb-4 fw-bold" style={{ fontFamily: 'Urbanist, sans-serif', fontSize: '32px', lineHeight: '1.3' }}>
                Aapka Vishwas, Hamari Zimmedari — Bhiwandi’s Trusted Property &amp; Heavy Deposit Partner
              </h2>
              <p className="text-secondary" style={{ lineHeight: '1.8', fontSize: '15px' }}>
                Started a decade ago from the vibrant community of <strong>Millat Nagar, Bhiwandi</strong>, <strong>Taimur Real Estate</strong> was built on a simple promise: honest consultation, zero false promises, and protecting our buyers&apos; hard-earned money. 
              </p>
              <p className="text-secondary" style={{ lineHeight: '1.8', fontSize: '15px' }}>
                Whether you are a family searching for a peaceful <strong>1 BHK / 2 BHK flat</strong> in Millat Nagar, Chavindra, or Dhamankar Naka, or a business owner looking for a high-ceiling <strong>Industrial Gala</strong> in Purna &amp; Mankoli, we guide you through every step — from physical site inspections and municipal title checks to seamless bank loan sanction.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link href="/about" className="btn btn-primary px-4 py-3 rounded-pill text-white fw-bold shadow-sm" style={{ backgroundColor: '#aa8453', borderColor: '#aa8453' }}>
                  Read Our 10-Year Journey
                </Link>
                <a 
                  href={`https://wa.me/${AGENCY_CONFIG.whatsapp}?text=${encodeURIComponent('Hello Taimur Bhai, I want to consult regarding property in Bhiwandi.')}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline-dark px-4 py-3 rounded-pill fw-bold"
                >
                  <i className="fa-brands fa-whatsapp text-success me-2 fs-5"></i> Direct WhatsApp Inquiry
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="p-4 p-md-5 rounded-4 shadow-sm text-white" style={{ backgroundColor: '#1a1a28', borderTop: '4px solid #aa8453' }}>
                <h5 className="fw-bold mb-4 text-white" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                  Core Specializations
                </h5>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                  {AGENCY_CONFIG.specializations.map((spec, i) => (
                    <li key={i} className="d-flex align-items-center gap-3">
                      <i className="fa-solid fa-circle-check fs-6" style={{ color: '#aa8453' }}></i>
                      <span className="small text-light">{spec}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-top border-secondary">
                  <div className="small text-muted mb-1">Central Head Office:</div>
                  <div className="fw-bold small text-light">{AGENCY_CONFIG.officeAddress}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="full-row p-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
