import React from 'react';
import Link from 'next/link';

interface Props {
  count: number;
}

export default function PropertiesHeaderBanner({ count }: Props) {
  return (
    <div className="mb-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb small text-muted mb-2">
          <li className="breadcrumb-item">
            <Link href="/" className="text-decoration-none text-muted">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Properties
          </li>
        </ol>
      </nav>
      <h1 className="display-6 fw-bold text-dark" style={{ fontFamily: 'Urbanist, sans-serif' }}>
        Verified Properties in Bhiwandi
      </h1>
      <p className="text-muted small">
        Showing {count} verified listings across Anjur Phata, Dhamankar Naka, Temghar, and Purna.
      </p>
    </div>
  );
}
