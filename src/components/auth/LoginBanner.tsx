import React from 'react';
import Link from 'next/link';

export default function LoginBanner() {
  return (
    <div
      className="full-row inner-page-banner"
      style={{ backgroundColor: '#282838', padding: '50px 0 45px' }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="page-title-wrapper d-lg-flex flex-column gap-2 text-white">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-2 bg-transparent p-0 text-white-50">
                  <li className="breadcrumb-item">
                    <Link href="/" className="text-white-50 text-decoration-none">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active text-white" aria-current="page">
                    Agent Login
                  </li>
                </ol>
              </nav>
              <h1
                className="page-title text-white fw-bold mb-1"
                style={{ fontFamily: 'Urbanist, sans-serif' }}
              >
                Taimur Real Estate Admin &amp; Staff Portal
              </h1>
              <p className="lead text-white-50 mb-0" style={{ maxWidth: '600px' }}>
                Secure access for authorized Taimur Real Estate staff, inventory managers, and
                property consultants in Bhiwandi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
