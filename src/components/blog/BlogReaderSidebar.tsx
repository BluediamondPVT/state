import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/data/blogs';
import { AGENCY_CONFIG } from '@/data/properties';

interface Props {
  currentPost: BlogPost;
  recentPosts: BlogPost[];
}

export default function BlogReaderSidebar({ currentPost, recentPosts }: Props) {
  return (
    <aside className="d-flex flex-column gap-4">
      {/* WhatsApp CTA */}
      <div className="card border-0 shadow-sm rounded-3 p-4 bg-white border-top border-4 border-warning text-center">
        <div
          className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
          style={{ width: '48px', height: '48px', backgroundColor: '#aa8453' }}
        >
          <i className="fa-brands fa-whatsapp fs-5 text-white"></i>
        </div>
        <h5 className="fw-bold text-dark mb-1">Discuss This Article</h5>
        <p className="small text-muted mb-3">
          Have questions regarding rates, loans, or properties mentioned in this guide? Chat directly
          with our on-ground expert.
        </p>
        <a
          href={`https://wa.me/${AGENCY_CONFIG.whatsapp}?text=${encodeURIComponent(
            `Hi, I just read "${currentPost.title}" and have questions regarding Bhiwandi real estate.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-primary w-100 fw-bold"
        >
          Chat with Broker
        </a>
      </div>

      {/* Recent Guides List */}
      <div className="card border-0 shadow-sm rounded-3 p-4 bg-light">
        <h5 className="fw-bold text-dark mb-3">Related Guides</h5>
        <div className="d-flex flex-column gap-3">
          {recentPosts.map((r) => (
            <div key={r.id} className="d-flex align-items-center gap-3">
              <Image
                src={r.image}
                alt={r.title}
                width={65}
                height={55}
                className="rounded-2 object-fit-cover"
                style={{ minWidth: '65px', height: '55px' }}
              />
              <div>
                <h6 className="mb-1" style={{ fontSize: '14px', lineHeight: '1.3' }}>
                  <Link
                    href={`/blog/${r.slug}`}
                    className="text-dark text-decoration-none hover-color-primary"
                  >
                    {r.title}
                  </Link>
                </h6>
                <small className="text-muted">{r.readTime}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RERA Trust Box */}
      <div
        className="card border-0 shadow-sm rounded-3 p-4 text-center text-white"
        style={{ backgroundColor: '#282838' }}
      >
        <i className="fa-solid fa-certificate fs-1 mb-2" style={{ color: '#aa8453' }}></i>
        <h6 className="fw-bold text-white mb-1">MahaRERA Verified Firm</h6>
        <small className="text-white-50 d-block mb-3">{AGENCY_CONFIG.reraNumber}</small>
        <Link href="/contact" className="btn btn-sm btn-primary w-100 fw-bold">
          Visit Consultation Desk
        </Link>
      </div>
    </aside>
  );
}
