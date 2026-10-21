import React from 'react';
import { AGENCY_CONFIG } from '@/data/properties';

export default function WhyChooseUs() {
  const points = [
    {
      icon: 'fa-shield-halved',
      title: '80% Privacy & Direct Assistance',
      desc: 'We safeguard property owners & buyers by verifying details upfront and coordinating verified site visits directly with our agent.'
    },
    {
      icon: 'fa-city',
      title: '12+ Years Bhiwandi Specialization',
      desc: 'Deep local knowledge of Anjur Phata, Dhamankar Naka, Temghar & Industrial godown corridors with 100% legal title checks.'
    },
    {
      icon: 'fa-hand-holding-dollar',
      title: 'Zero-Hassle Bank Loan Support',
      desc: 'Dedicated finance team handling up to 90% loan approvals from SBI, HDFC, ICICI, and PMAY subsidy guidance.'
    },
    {
      icon: 'fa-file-signature',
      title: 'RERA Registered & Legal Clarity',
      desc: `Registered under MahaRERA (${AGENCY_CONFIG.reraNumber}) ensuring transparent agreement drafting and safe financial transactions.`
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#282838', color: '#ffffff' }}>
      <div className="container py-3">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <span className="text-uppercase fw-bold" style={{ color: '#aa8453', fontSize: '13px', letterSpacing: '1px' }}>
              Why We Are #1 in Bhiwandi
            </span>
            <h2 className="display-6 fw-bold text-white mt-1 mb-3" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Your Trusted Real Estate Guide From Inquiry to Key Handover
            </h2>
            <p className="text-white-50 mb-4" style={{ lineHeight: '1.7' }}>
              Whether you are an investor from Mumbai/Pune seeking high-yield industrial galas or a family looking for an affordable dream home in Bhiwandi, our agency provides end-to-end verified solutions.
            </p>
            <div className="p-3 rounded-3" style={{ backgroundColor: 'rgba(170, 132, 83, 0.15)', borderLeft: '4px solid #aa8453' }}>
              <p className="small mb-0 text-white">
                <strong>Need an urgent consultation?</strong> Speak directly with our head consultant at{' '}
                <a href={`tel:${AGENCY_CONFIG.phone}`} className="text-warning fw-bold text-decoration-none">
                  {AGENCY_CONFIG.phoneDisplay}
                </a>
              </p>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row g-4">
              {points.map((pt, idx) => (
                <div key={idx} className="col-12 col-md-6">
                  <div className="p-4 rounded-3 h-100" style={{ backgroundColor: '#313145', border: '1px solid #3d3d54' }}>
                    <div
                      className="mb-3 d-flex align-items-center justify-content-center rounded-3"
                      style={{ width: '48px', height: '48px', backgroundColor: '#aa8453', color: '#ffffff', fontSize: '20px' }}
                    >
                      <i className={`fa-solid ${pt.icon}`}></i>
                    </div>
                    <h5 className="fw-bold text-white mb-2" style={{ fontSize: '17px' }}>{pt.title}</h5>
                    <p className="small text-white-50 mb-0" style={{ lineHeight: '1.5' }}>
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
