import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/data/blogs';
import { AGENCY_CONFIG } from '@/data/properties';

interface Props {
  post: BlogPost;
}

export default function BlogArticleContent({ post }: Props) {
  return (
    <article className="single-post-content">
      {/* Featured Image */}
      <div
        className="rounded-4 overflow-hidden mb-4 shadow-sm position-relative"
        style={{ maxHeight: '420px', minHeight: '320px', backgroundColor: '#f1f5f9' }}
      >
        <Image
          src={post.image}
          alt={post.title}
          width={1000}
          height={500}
          priority
          className="w-100 h-auto object-fit-cover"
          style={{ maxHeight: '420px' }}
        />
      </div>

      {/* Article Introduction */}
      <div
        className="lead text-dark mb-4 p-4 rounded-3"
        style={{
          backgroundColor: '#f8fafc',
          borderLeft: '4px solid #aa8453',
          lineHeight: '1.8',
          fontSize: '18px',
        }}
      >
        {post.content.intro}
      </div>

      {/* Body Sections */}
      {post.content.sections.map((section, idx) => (
        <div key={idx} className="mb-5">
          <h3
            className="fw-bold text-dark mb-3"
            style={{ fontFamily: 'Urbanist, sans-serif' }}
          >
            {section.heading}
          </h3>

          {section.paragraphs.map((p, pIdx) => (
            <p
              key={pIdx}
              className="text-secondary mb-3"
              style={{ lineHeight: '1.8', fontSize: '16px' }}
            >
              {p}
            </p>
          ))}

          {section.highlightBox && (
            <div className="alert alert-warning border-0 rounded-3 p-3 my-4 d-flex align-items-center gap-3">
              <i className="fa-solid fa-lightbulb fs-3 text-warning"></i>
              <span className="fw-semibold text-dark">{section.highlightBox}</span>
            </div>
          )}
        </div>
      ))}

      {/* Conclusion */}
      <div className="p-4 rounded-3 border bg-light mb-5">
        <h4 className="fw-bold text-dark mb-2" style={{ fontFamily: 'Urbanist, sans-serif' }}>
          Final Recommendation
        </h4>
        <p className="text-secondary mb-3" style={{ lineHeight: '1.7' }}>
          {post.content.conclusion}
        </p>
        <Link href="/properties" className="btn btn-primary fw-semibold btn-sm">
          Browse Verified Bhiwandi Properties →
        </Link>
      </div>

      {/* Author Bio Box */}
      <div className="p-4 rounded-3 border bg-white shadow-sm mb-4 d-flex flex-column flex-md-row align-items-center gap-4">
        <div
          className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold fs-3 flex-shrink-0"
          style={{ width: '70px', height: '70px', backgroundColor: '#aa8453' }}
        >
          {post.author.charAt(0)}
        </div>
        <div>
          <h5 className="fw-bold text-dark mb-1">{post.author}</h5>
          <span className="badge bg-light text-muted border mb-2">{post.authorRole}</span>
          <p className="small text-secondary mb-0" style={{ lineHeight: '1.6' }}>
            Part of the senior research &amp; ground advisory desk at {AGENCY_CONFIG.name}.
            Specializing in local Bhiwandi infrastructure, loan approvals, and zero-brokerage
            advisory.
          </p>
        </div>
      </div>
    </article>
  );
}
