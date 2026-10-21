import React from 'react';

export default function SellPropertyBanner() {
  return (
    <div
      className="py-5 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 26, 40, 0.85), rgba(26, 26, 40, 0.90)), url('/assets/images/background/2.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container text-center py-4">
        <span
          className="badge px-3 py-2 text-uppercase mb-3"
          style={{ backgroundColor: '#aa8453', letterSpacing: '1px' }}
        >
          Zero Brokerage for Verified Landlords
        </span>
        <h1 className="display-5 fw-bold mb-3" style={{ fontFamily: 'Urbanist, sans-serif' }}>
          List Your Flat, Shop or Gala with Bhiwandi’s #1 Agent
        </h1>
        <p className="lead text-white-50 mx-auto" style={{ maxWidth: '650px' }}>
          We have ready, pre-approved buyers from Mumbai, Thane, Kalyan, and Pune looking for
          verified properties in Bhiwandi.
        </p>
      </div>
    </div>
  );
}
