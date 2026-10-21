import React from 'react';

export default function ComparisonTable() {
  const comparisonPoints = [
    {
      feature: 'Property Verification',
      traditional: 'Verbal claims without paperwork check',
      bhiwandiEstate: '100% legal title, CC/OC, and RERA audit',
    },
    {
      feature: 'Listing Privacy',
      traditional: 'Circulated openly among dozens of unverified brokers',
      bhiwandiEstate: 'Protected under 80% Confidentiality Model',
    },
    {
      feature: 'Bank Loan Assistance',
      traditional: 'Client left to handle bankers independently',
      bhiwandiEstate: 'Dedicated in-house loan desk with 95% approval rate',
    },
    {
      feature: 'Price Transparency',
      traditional: 'Inflated quotes with hidden commissions',
      bhiwandiEstate: 'Direct negotiation with clear, written terms',
    },
    {
      feature: 'Specialized Deals',
      traditional: 'Limited options, mostly basic sales',
      bhiwandiEstate: '1BHK/2BHK, Heavy Deposit (Zero Rent), & Industrial Galas',
    },
  ];

  return (
    <div className="full-row bg-light py-5">
      <div className="container py-3">
        <div className="text-center mb-5">
          <span
            className="text-uppercase fw-bold"
            style={{ color: '#aa8453', letterSpacing: '1px', fontSize: '13px' }}
          >
            The Distinction
          </span>
          <h2
            className="display-6 fw-bold text-dark mt-1"
            style={{ fontFamily: 'Urbanist, sans-serif' }}
          >
            Traditional Brokers vs Bhiwandi Estate
          </h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: '650px' }}>
            See why buyers and sellers experience faster, safer, and legally sound transactions with
            us.
          </p>
        </div>

        <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
          <div className="table-responsive">
            <table className="table table-hover mb-0" style={{ verticalAlign: 'middle' }}>
              <thead style={{ backgroundColor: '#282838', color: '#ffffff' }}>
                <tr>
                  <th scope="col" className="p-4" style={{ width: '30%' }}>
                    Service Benchmark
                  </th>
                  <th scope="col" className="p-4 text-muted" style={{ width: '35%' }}>
                    Conventional Local Middlemen
                  </th>
                  <th
                    scope="col"
                    className="p-4 fw-bold"
                    style={{ width: '35%', color: '#aa8453' }}
                  >
                    Bhiwandi Estate Standard ★
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonPoints.map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 fw-bold text-dark">{row.feature}</td>
                    <td className="p-4 text-secondary">
                      <i className="fa-solid fa-circle-xmark text-danger me-2"></i>
                      {row.traditional}
                    </td>
                    <td
                      className="p-4 fw-semibold text-dark"
                      style={{ backgroundColor: 'rgba(170, 132, 83, 0.05)' }}
                    >
                      <i className="fa-solid fa-circle-check text-success me-2"></i>
                      {row.bhiwandiEstate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
