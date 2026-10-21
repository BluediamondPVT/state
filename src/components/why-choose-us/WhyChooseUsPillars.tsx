import React from 'react';
import { AGENCY_CONFIG } from '@/data/properties';

export default function WhyChooseUsPillars() {
  const pillars = [
    {
      icon: 'fa-shield-halved',
      badge: 'Confidentiality Shield',
      title: '80% Privacy & Direct Brokerage Model',
      desc: 'We protect property owners and buyers by masking exact flat/wing numbers online. This prevents unauthorized middle-men from circulating your listing, ensuring direct, professional, and transparent site visits.',
    },
    {
      icon: 'fa-city',
      badge: 'Local Authority',
      title: '12+ Years Hyper-Local Ground Expertise',
      desc: 'From high-rise residential towers in Dhamankar Naka and Anjur Phata to massive industrial logistics hubs in Purna and Mankoli, our on-ground intelligence ensures you always get the best market value.',
    },
    {
      icon: 'fa-hand-holding-dollar',
      badge: 'Finance Desk',
      title: 'Up to 90% Bank Loan Sanctions Guaranteed',
      desc: 'Our dedicated banking liaisons work directly with SBI, HDFC, ICICI, Bank of Baroda, and major nationalized banks to ensure fast approvals, lowest interest rates, and complete PMAY subsidy assistance.',
    },
    {
      icon: 'fa-file-signature',
      badge: 'Legal Scrutiny',
      title: `MahaRERA Registered (${AGENCY_CONFIG.reraNumber})`,
      desc: 'Zero legal ambiguity. Every project, flat, and gala in our directory undergoes strict title deed searches, municipal CC/OC checks, and Grampanchayat approval audits before listing.',
    },
  ];

  return (
    <div className="full-row bg-white py-5">
      <div className="container py-3">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span
              className="text-uppercase fw-bold"
              style={{ color: '#aa8453', letterSpacing: '1px', fontSize: '13px' }}
            >
              Our 4 Pillars of Excellence
            </span>
            <h2
              className="display-6 fw-bold text-dark mt-1"
              style={{ fontFamily: 'Urbanist, sans-serif' }}
            >
              Setting The Gold Standard in Bhiwandi Brokerage
            </h2>
            <p className="text-secondary">
              Why 1,500+ families and business owners entrust their property search to our ground
              team.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {pillars.map((item, idx) => (
            <div className="col-12 col-md-6" key={idx}>
              <div
                className="p-4 p-lg-5 h-100 rounded-3 shadow-sm border"
                style={{ backgroundColor: '#ffffff', borderTop: '4px solid #aa8453' }}
              >
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3"
                    style={{
                      width: '54px',
                      height: '54px',
                      backgroundColor: 'rgba(170, 132, 83, 0.12)',
                      color: '#aa8453',
                      fontSize: '24px',
                    }}
                  >
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <span
                    className="badge rounded-pill px-3 py-2"
                    style={{
                      backgroundColor: '#f3f4f6',
                      color: '#aa8453',
                      fontWeight: 600,
                      fontSize: '12px',
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h4 className="fw-bold text-dark mb-3" style={{ fontSize: '20px' }}>
                  {item.title}
                </h4>
                <p
                  className="text-secondary mb-0"
                  style={{ lineHeight: '1.7', fontSize: '15px' }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
