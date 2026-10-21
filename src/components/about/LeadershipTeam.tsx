import React from 'react';
import Image from 'next/image';
import { AGENCY_CONFIG } from '@/data/properties';

interface Member {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const leaders: Member[] = [
  {
    name: 'Mohammad Tariq Ansari',
    role: 'Founder & Principal Broker',
    bio: '12+ years of hyper-local real estate authority across Dhamankar Naka, Anjur Phata, and the MMR highway belt.',
    image: '/assets/images/team/1.jpg',
  },
  {
    name: 'Imran Shaikh',
    role: 'Head of Residential & Heavy Deposit',
    bio: 'Specialist in 1 BHK / 2 BHK verified family apartments and registered zero-monthly-rent heavy deposit agreements.',
    image: '/assets/images/team/2.jpg',
  },
  {
    name: 'Rajesh Sharma',
    role: 'Senior Home Loan Advisor (90% Desk)',
    bio: 'Direct liaison with SBI, HDFC, ICICI, and nationalized banks for fast loan sanction and PMAY subsidy clearance.',
    image: '/assets/images/team/3.jpg',
  },
  {
    name: 'Vikas Patil',
    role: 'Commercial & Logistics Specialist',
    bio: 'Industrial gala specialist guiding warehouse leasing across Purna, Mankoli, and Rahnal transport hubs.',
    image: '/assets/images/team/4.jpg',
  },
];

export default function LeadershipTeam() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <span
          className="badge px-3 py-2 text-uppercase mb-2 text-white"
          style={{ backgroundColor: '#aa8453', letterSpacing: '1px' }}
        >
          Executive Leadership
        </span>
        <h2
          className="display-6 fw-bold text-dark"
          style={{ fontFamily: 'Urbanist, sans-serif' }}
        >
          Meet the Ground Experts Behind Bhiwandi Estate
        </h2>
        <p className="text-secondary mx-auto" style={{ maxWidth: '650px' }}>
          Our team brings over a decade of deep on-ground relationships, banking liaisons, and legal
          scrutiny to ensure your property investments are safe and profitable.
        </p>
      </div>

      <div className="row g-4">
        {leaders.map((m, idx) => (
          <div className="col-12 col-md-6 col-lg-3" key={idx}>
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100 bg-white text-center">
              <div className="position-relative overflow-hidden" style={{ height: '260px' }}>
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-fit-cover"
                />
              </div>
              <div className="p-4 d-flex flex-column flex-grow-1">
                <h5
                  className="fw-bold text-dark mb-1"
                  style={{ fontFamily: 'Urbanist, sans-serif' }}
                >
                  {m.name}
                </h5>
                <span className="badge bg-light text-muted border mb-3 small">{m.role}</span>
                <p
                  className="small text-secondary mb-3 flex-grow-1"
                  style={{ lineHeight: '1.6' }}
                >
                  {m.bio}
                </p>
                <div className="pt-2 border-top d-flex justify-content-center gap-3">
                  <a
                    href={`tel:${AGENCY_CONFIG.phone}`}
                    className="text-muted hover-color-primary"
                    title="Call"
                  >
                    <i className="fa-solid fa-phone"></i>
                  </a>
                  <a
                    href={`https://wa.me/${AGENCY_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-success"
                    title="WhatsApp"
                  >
                    <i className="fa-brands fa-whatsapp fs-5"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
