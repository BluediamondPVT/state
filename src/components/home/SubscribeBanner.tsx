import React from 'react';
import Link from 'next/link';

export default function SubscribeBanner() {
  return (
    <div className="full-row bg-white py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-9 col-md-8">
            <h4 className="color-dark mb-0 fs-5 text-uppercase ls-2 fw-medium">
              Are you looking for a House or Commercial Space?
            </h4>
            <span className="d-inline-block text-muted">
              We can help you find verified flats and galas with zero brokerage hassle
            </span>
          </div>
          <div className="col-lg-3 col-md-4">
            <Link
              href="/contact"
              className="btn btn-primary btn-hover-secondary hover-flash-move d-table ms-auto"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
