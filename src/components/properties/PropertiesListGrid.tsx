import React from 'react';
import PropertyCard from '@/components/PropertyCard';
import { Property } from '@/types/property';

interface Props {
  properties: Property[];
  resetFilters: () => void;
}

export default function PropertiesListGrid({ properties, resetFilters }: Props) {
  if (properties.length === 0) {
    return (
      <div className="card shadow-sm border-0 p-5 text-center bg-white rounded-3">
        <i className="fa-solid fa-house-chimney-crack fs-1 text-muted mb-3"></i>
        <h4 className="fw-bold text-dark">No Matching Properties Found</h4>
        <p className="text-muted small mx-auto" style={{ maxWidth: '400px' }}>
          Try clearing your filters or contact our local agents directly for offline inventory.
        </p>
        <button
          onClick={resetFilters}
          className="btn btn-sm btn-primary mx-auto"
          style={{ width: 'fit-content' }}
        >
          Reset Filters
        </button>
      </div>
    );
  }

  return (
    <div className="row g-4">
      {properties.map((property) => (
        <div key={property.id} className="col-md-6 col-xl-4">
          <PropertyCard property={property} />
        </div>
      ))}
    </div>
  );
}
