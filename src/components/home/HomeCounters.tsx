import React from 'react';

export default function HomeCounters() {
  return (
    <div className="full-row bg-light py-5">
      <div className="container">
        <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 g-4 text-center text-sm-start">
          <div className="col">
            <div className="d-flex flex-column flex-sm-row align-items-center gap-3 counter-style-1 p-3 bg-white rounded-3 shadow-sm h-100">
              <h2 className="color-primary fw-bold mb-0" style={{ fontFamily: 'Urbanist, sans-serif' }}>₹200+ Cr</h2>
              <span className="font-primary small fw-bold text-dark text-uppercase">
                Properties
                <br />
                Transacted
              </span>
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column flex-sm-row align-items-center gap-3 counter-style-1 p-3 bg-white rounded-3 shadow-sm h-100">
              <h2 className="color-primary fw-bold mb-0" style={{ fontFamily: 'Urbanist, sans-serif' }}>1,500+</h2>
              <span className="font-primary small fw-bold text-dark text-uppercase">
                Satisfied
                <br />
                Families Shifted
              </span>
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column flex-sm-row align-items-center gap-3 counter-style-1 p-3 bg-white rounded-3 shadow-sm h-100">
              <h2 className="color-primary fw-bold mb-0" style={{ fontFamily: 'Urbanist, sans-serif' }}>700+</h2>
              <span className="font-primary small fw-bold text-dark text-uppercase">
                Industrial Galas
                <br />
                &amp; Warehouses
              </span>
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column flex-sm-row align-items-center gap-3 counter-style-1 p-3 bg-white rounded-3 shadow-sm h-100">
              <h2 className="color-primary fw-bold mb-0" style={{ fontFamily: 'Urbanist, sans-serif' }}>95%</h2>
              <span className="font-primary small fw-bold text-dark text-uppercase">
                Bank Loan
                <br />
                Approval Rate
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
