import React from 'react';
import PropertyCard from '@/components/PropertyCard';
import { Property } from '@/types/property';

interface Props {
  properties: Property[];
}

export default function SimilarProperties({ properties }: Props) {
  if (properties.length === 0) return null;

  return (
    <div className="mt-5 pt-4 border-top">
      <h4 className="fw-bold text-dark mb-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
        Similar Properties in Bhiwandi
      </h4>
      <div className="row g-4">
        {properties.map((rel) => (
          <div key={rel.id} className="col-md-6 col-lg-4">
            <PropertyCard property={rel} />
          </div>
        ))}
      </div>
    </div>
  );
}
