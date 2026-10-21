import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Property } from '@/types/property';

interface Props {
  properties: Property[];
  onDelete: (id: string) => void;
}

export default function AdminListingsTable({ properties, onDelete }: Props) {
  return (
    <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-light small text-muted text-uppercase">
            <tr>
              <th className="ps-4">Property</th>
              <th>Locality</th>
              <th>Type / Deal</th>
              <th>Price</th>
              <th>Privacy Mode</th>
              <th className="text-end pe-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((p) => (
              <tr key={p.id}>
                <td className="ps-4">
                  <div className="d-flex align-items-center gap-3">
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={56}
                      height={46}
                      className="rounded-2 object-fit-cover"
                      style={{ minWidth: '56px', height: '46px' }}
                    />
                    <div>
                      <h6 className="mb-0 fw-bold text-dark" style={{ fontSize: '14px' }}>
                        {p.title}
                      </h6>
                      <small className="text-muted">{p.floor}</small>
                    </div>
                  </div>
                </td>
                <td className="small">{p.locality}</td>
                <td>
                  <span className="badge bg-light text-dark border me-1 small">{p.type}</span>
                  <span
                    className="badge text-white small"
                    style={{
                      backgroundColor:
                        p.dealType === 'Heavy Deposit'
                          ? '#d97706'
                          : p.dealType === 'For Sale'
                          ? '#059669'
                          : '#aa8453',
                    }}
                  >
                    {p.dealType}
                  </span>
                </td>
                <td className="fw-bold" style={{ color: '#aa8453' }}>
                  {p.price}
                </td>
                <td>
                  <span className="badge bg-success-subtle text-success border border-success-subtle small">
                    <i className="fa-solid fa-lock me-1"></i> 80% Protected
                  </span>
                </td>
                <td className="text-end pe-4">
                  <div className="d-flex justify-content-end gap-2">
                    <Link
                      href={`/properties/${p.slug}`}
                      className="btn btn-sm btn-outline-secondary"
                      title="View Live Listing"
                    >
                      <i className="fa-regular fa-eye"></i>
                    </Link>
                    <button
                      onClick={() => onDelete(p.id)}
                      className="btn btn-sm btn-outline-danger"
                      title="Delete Property"
                    >
                      <i className="fa-regular fa-trash-can"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
