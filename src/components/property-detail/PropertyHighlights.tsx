import React from 'react';
import { Property } from '@/types/property';

interface Props {
  property: Property;
}

export default function PropertyHighlights({ property }: Props) {
  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white">
      <h5 className="fw-bold text-dark mb-3 pb-2 border-bottom">Key Highlights &amp; Amenities</h5>
      <div className="row g-2">
        {property.highlights.map((h, i) => (
          <div key={i} className="col-md-6">
            <div className="d-flex align-items-center gap-2 py-2">
              <i className="fa-solid fa-circle-check text-success"></i>
              <span className="small text-dark">{h}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
