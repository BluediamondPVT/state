import React from 'react';
import { Property } from '@/types/property';

interface Props {
  property: Property;
}

export default function PropertyDescription({ property }: Props) {
  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white">
      <h5 className="fw-bold text-dark mb-3 pb-2 border-bottom">Property Description</h5>
      <p className="text-secondary" style={{ lineHeight: '1.8' }}>
        {property.description}
      </p>

      {/* 80% Confidentiality Box */}
      <div
        className="p-3 rounded-3 mt-3"
        style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}
      >
        <div className="d-flex align-items-center gap-2 mb-1">
          <i className="fa-solid fa-shield-halved text-success"></i>
          <span className="fw-bold text-dark small">Verified Broker Direct Representation</span>
        </div>
        <p className="small text-muted mb-0">
          Exact flat number and building wing are kept confidential to prevent unsolicited
          visits. A private site visit along with full documentation review is coordinated
          directly by our registered consultant.
        </p>
      </div>
    </div>
  );
}
