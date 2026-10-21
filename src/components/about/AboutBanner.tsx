import React from 'react';

export default function AboutBanner() {
  return (
    <div
      className="py-5 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 26, 40, 0.85), rgba(26, 26, 40, 0.90)), url('/assets/images/background/3.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container text-center py-4">
        <span
          className="badge px-3 py-2 text-uppercase mb-3"
          style={{ backgroundColor: '#aa8453', letterSpacing: '1px' }}
        >
          About Our Firm
        </span>
        <h1 className="display-5 fw-bold mb-3" style={{ fontFamily: 'Urbanist, sans-serif' }}>
          Bhiwandi’s Most Trusted Property Advisory
        </h1>
        <p className="lead text-white-50 mx-auto" style={{ maxWidth: '650px' }}>
          Serving homebuyers, investors, and industrial businesses with complete transparency,
          legal verification, and local ground intelligence.
        </p>
      </div>
    </div>
  );
}
