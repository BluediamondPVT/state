import React from 'react';

export default function TrustStats() {
  const stats = [
    { number: '₹50+ Cr', title: 'Property Worth Closed', desc: 'Across Residential & Commercial deals in Bhiwandi' },
    { number: '1,200+', title: 'Happy Families Housed', desc: 'Living in verified clear-title properties' },
    { number: '350+', title: 'Industrial Galas Leased', desc: 'Active logistics & warehouse connections in Purna-Mankoli' },
    { number: '95%', title: 'Bank Loan Approval Rate', desc: 'Hassle-free tie-ups with SBI, HDFC & nationalized banks' },
  ];

  return (
    <div className="py-5" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #ebebeb' }}>
      <div className="container">
        <div className="row g-4 text-center">
          {stats.map((item, idx) => (
            <div key={idx} className="col-6 col-md-3">
              <div className="p-3">
                <h2 className="display-6 fw-bold mb-1" style={{ color: '#aa8453', fontFamily: 'Urbanist, sans-serif' }}>
                  {item.number}
                </h2>
                <h5 className="fw-bold text-dark mb-1" style={{ fontSize: '16px' }}>{item.title}</h5>
                <p className="text-muted small mb-0 d-none d-md-block">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
