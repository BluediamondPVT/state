import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AGENCY_CONFIG } from '@/data/properties';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  img: string;
  whatsappMsg: string;
  btnText: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Taimur Bhai',
    role: 'Founder & Head Consultant • Taimur Real Estate',
    bio: '10+ years of hyper-local trust across Millat Nagar, Dhamankar Naka, and Bhiwandi residential & commercial properties.',
    img: '/assets/images/team/1.jpg',
    whatsappMsg: 'Hello Taimur bhai, I want to discuss property in Bhiwandi',
    btnText: 'Chat on WhatsApp',
  },
  {
    name: 'Imran Shaikh',
    role: 'Head of Residential & Heavy Deposit Deals',
    bio: 'Expert in 1 BHK / 2 BHK verified family towers and zero monthly rent registered heavy deposit tenancy agreements.',
    img: '/assets/images/team/2.jpg',
    whatsappMsg: 'Hello Imran bhai, I am looking for 1BHK/2BHK in Bhiwandi',
    btnText: 'Chat on WhatsApp',
  },
  {
    name: 'Rajesh Sharma',
    role: 'Senior Banking & 90% Home Loan Advisor',
    bio: 'Direct banking channel liaison with SBI, HDFC, ICICI, and nationalized banks with 95% sanction record.',
    img: '/assets/images/team/3.jpg',
    whatsappMsg: 'Hello Rajesh ji, I need home loan eligibility check',
    btnText: 'Loan Inquiry',
  },
  {
    name: 'Vikas Patil',
    role: 'Industrial Gala & Godown Specialist',
    bio: 'Commercial warehousing advisor for Purna, Mankoli, and Rahnal logistics parks with 3-phase power clearance.',
    img: '/assets/images/team/4.jpg',
    whatsappMsg: 'Hello Vikas ji, I am looking for Gala/Warehouse in Purna Mankoli',
    btnText: 'Commercial Inquiry',
  },
];

export default function GroundTeam() {
  return (
    <div className="full-row bg-light">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="align-items-center d-flex">
              <div className="me-auto">
                <span
                  className="text-uppercase fw-bold"
                  style={{
                    color: '#aa8453',
                    fontSize: '13px',
                    letterSpacing: '1px',
                  }}
                >
                  Hyper-Local Authority
                </span>
                <h3
                  className="d-table text-dark mb-0"
                  style={{ fontFamily: 'Urbanist, sans-serif' }}
                >
                  Meet Our Ground Advisory Team
                </h3>
              </div>
              <Link href="/about" className="ms-auto btn-link">
                About Agency
              </Link>
            </div>
          </div>
        </div>
        <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1 g-0 mt-5">
          {teamMembers.map((member, idx) => (
            <div className="col" key={idx}>
              <div className="member-block-1">
                <div className="entry-wrapper">
                  <div className="entry-thumbnail position-relative overflow-hidden" style={{ minHeight: '280px' }}>
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={350}
                      height={400}
                      className="w-100 h-auto object-fit-cover"
                    />
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <h5 className="member-name">
                        <a
                          href={`https://wa.me/${AGENCY_CONFIG.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {member.name}
                        </a>
                      </h5>
                      <span className="designation">{member.role}</span>
                    </div>
                    <div className="entry-content">
                      <p>{member.bio}</p>
                    </div>
                    <div className="entry-footer">
                      <a
                        href={`https://wa.me/${AGENCY_CONFIG.whatsapp}?text=${encodeURIComponent(
                          member.whatsappMsg
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-link"
                        title="WhatsApp Agent"
                      >
                        <i className="fa-brands fa-whatsapp text-success me-1"></i>{' '}
                        {member.btnText}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
