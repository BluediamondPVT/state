import React from 'react';
import Link from 'next/link';

export default function BlogBanner() {
  return (
    <div
      className="full-row inner-page-banner"
      style={{ backgroundColor: '#282838', padding: '60px 0 50px' }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="page-title-wrapper d-lg-flex flex-column gap-2 text-white">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-2 bg-transparent p-0 text-white-50">
                  <li className="breadcrumb-item">
                    <Link href="/" className="text-white-50 text-decoration-none">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active text-white" aria-current="page">
                    Blog
                  </li>
                </ol>
              </nav>
              <h1
                className="page-title text-white fw-bold mb-1"
                style={{ fontFamily: 'Urbanist, sans-serif' }}
              >
                Bhiwandi Real Estate Guide &amp; Market Insights
              </h1>
              <p className="lead text-white-50 mb-0" style={{ maxWidth: '720px' }}>
                Expert market reports, infrastructure updates, heavy deposit guides, and
                industrial investment advisory in Bhiwandi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
