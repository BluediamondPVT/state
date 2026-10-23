import React from 'react';
import Link from 'next/link';
import { AGENCY_CONFIG } from '@/data/properties';

export default function SellPropertyBanner() {
  return (
    <section className="py-5" style={{ backgroundColor: '#f3f4f6' }}>
      <div className="container">
        <div
          className="p-4 p-md-5 rounded-4 shadow-sm position-relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 26, 40, 0.90), rgba(26, 26, 40, 0.92)), url('/assets/images/background/1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#ffffff'
          }}
        >
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span className="badge px-3 py-2 text-uppercase mb-3" style={{ backgroundColor: '#aa8453', letterSpacing: '1px' }}>
                For Property Owners & Landlords
              </span>
              <h2 className="display-6 fw-bold text-white mb-2" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                Have a Flat, Shop or Industrial Gala in Bhiwandi to Sell or Rent?
              </h2>
              <p className="text-white-50 lead mb-0" style={{ fontSize: '17px' }}>
                List with us today. We connect you with 100% pre-screened buyers and verified corporate tenants within 15 to 30 days.
              </p>
            </div>

            <div className="col-lg-4 text-lg-end">
              <div className="d-flex flex-column flex-sm-row flex-lg-column gap-2 justify-content-lg-end">
                <Link
                  href="/sell-property"
                  className="btn btn-lg py-3 px-4 fw-bold text-white shadow"
                  style={{ backgroundColor: '#aa8453', borderRadius: '8px' }}
                >
                  <i className="fa-solid fa-plus me-2"></i> List Property Free
                </Link>

                <a
                  href={`https://wa.me/${AGENCY_CONFIG.whatsapp}?text=${encodeURIComponent('Hello Taimur Bhai, I want to sell/rent my property in Bhiwandi. Please contact me.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg py-3 px-4 fw-bold btn-success text-white"
                  style={{ borderRadius: '8px' }}
                >
                  <i className="fa-brands fa-whatsapp me-2"></i> WhatsApp Owner Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
