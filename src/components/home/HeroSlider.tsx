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
              fontSize: '15px',
              textTransform: 'uppercase',
              letterSpacing: '5px',
              fontWeight: 500,
              fontFamily: "'Urbanist', sans-serif",
            }}
            className="text-white mb-2"
          >
            All In One
          </p>
          <h1
            style={{
              fontSize: '40px',
              letterSpacing: '3px',
              fontWeight: 600,
              fontFamily: "'Urbanist', sans-serif",
            }}
            className="text-white mb-3"
          >
            Property Listing Template
          </h1>
          <p
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontWeight: 400,
              letterSpacing: '2px',
              maxWidth: '650px',
              fontSize: '18px',
              color: '#ffffff',
              lineHeight: '30px',
              margin: '0 auto',
            }}
          >
            Looking for your dream house or property. Search here and select
            your best one from more than 1 million listing.
          </p>
        </div>
      </div>
    </div>
  );
}
