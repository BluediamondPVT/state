import React from 'react';
import { Property } from '@/types/property';

interface Props {
  property: Property;
}

export default function PropertyNearbyLandmarks({ property }: Props) {
  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
      <h5 className="fw-bold text-dark mb-3 pb-2 border-bottom">Nearby Connectivity &amp; Landmarks</h5>
      <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
        {property.nearbyLandmarks.map((lm, idx) => (
          <li key={idx} className="small text-muted d-flex align-items-center gap-2">
            <i className="fa-solid fa-location-crosshairs text-danger"></i>
            <span>{lm}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
