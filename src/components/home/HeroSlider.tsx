import React from 'react';

export default function HeroSlider() {
  return (
    <div className="full-row p-0 overflow-hidden">
      <div
        id="slider"
        className="overflow-hidden position-relative d-flex align-items-center justify-content-center"
        style={{
          width: '100%',
          minHeight: '840px',
          margin: '0 auto',
          backgroundImage: "url('/assets/images/slider/1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div
          className="container text-center text-white"
          style={{ paddingTop: '80px', paddingBottom: '160px' }}
        >
          <p
            style={{
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              fontWeight: 600,
              fontFamily: "'Urbanist', sans-serif",
              color: '#d4af37',
            }}
            className="mb-2"
          >
            10+ YEARS OF GROUND TRUST • MILLAT NAGAR &amp; ALL BHIWANDI
          </p>
          <h1
            style={{
              fontSize: '44px',
              letterSpacing: '1px',
              fontWeight: 700,
              fontFamily: "'Urbanist', sans-serif",
              lineHeight: '1.25',
            }}
            className="text-white mb-3"
          >
            Taimur Real Estate
          </h1>
          <p
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontWeight: 400,
              letterSpacing: '1px',
              maxWidth: '750px',
              fontSize: '18px',
              color: '#f1f5f9',
              lineHeight: '28px',
              margin: '0 auto',
            }}
          >
            Verified 1 &amp; 2 BHK Flats, Zero-Rent Heavy Deposit Agreements, and Industrial Galas in Millat Nagar, Chavindra, VP Naka &amp; Greater Bhiwandi.
          </p>
        </div>
      </div>
    </div>
  );
}
