'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Property } from '@/types/property';

interface Props {
  properties: Property[];
  onDelete: (id: string) => void;
}

export default function AdminListingsTable({ properties, onDelete }: Props) {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter properties by local search
  const filtered = useMemo(() => {
    if (!searchTerm.trim()) return properties;
    const q = searchTerm.toLowerCase();
    return properties.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.locality.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        p.dealType.toLowerCase().includes(q)
    );
  }, [properties, searchTerm]);

  const getDealBadgeStyle = (dealType: string) => {
    switch (dealType) {
      case 'Heavy Deposit':
        return { bg: '#fef3c7', color: '#b45309', border: '1px solid rgba(245, 158, 11, 0.4)' };
      case 'For Sale':
        return { bg: '#dcfce7', color: '#15803d', border: '1px solid rgba(16, 185, 129, 0.4)' };
      case 'For Rent':
        return { bg: '#e0f2fe', color: '#0369a1', border: '1px solid rgba(14, 165, 233, 0.4)' };
      default:
        return { bg: '#f1f5f9', color: '#475569', border: '1px solid rgba(100, 116, 139, 0.3)' };
    }
  };

  return (
    <div className="mb-4">
      {/* 1. Header Toolbar with Search & Count */}
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-3">
        <div>
          <h5 className="fw-bold text-dark mb-0" style={{ fontSize: '18px' }}>
            Property Inventory
          </h5>
          <span className="text-muted" style={{ fontSize: '12px' }}>
            Showing {filtered.length} of {properties.length} verified listings
          </span>
        </div>

        <div className="d-flex align-items-center gap-2" style={{ maxWidth: '320px', width: '100%' }}>
          <div className="position-relative w-100">
            <i
              className="fa-solid fa-magnifying-glass position-absolute text-muted"
              style={{ left: '14px', top: '50%', transform: 'translateY(-50%)', fontSize: '13px' }}
            ></i>
            <input
              type="text"
              placeholder="Search title, locality..."
              className="neo-input ps-5"
              style={{ padding: '8px 14px 8px 36px', fontSize: '13px', height: '38px' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="neo-circle border-0 flex-shrink-0"
              style={{ width: '32px', height: '32px', fontSize: '11px', color: '#64748b' }}
              title="Clear search"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="neo-card p-5 text-center">
          <div
            className="neo-circle mx-auto mb-3"
            style={{ width: '64px', height: '64px', fontSize: '26px', color: '#94a3b8' }}
          >
            <i className="fa-solid fa-building-circle-exclamation"></i>
          </div>
          <h6 className="fw-bold text-dark mb-1">No Properties Found</h6>
          <p className="text-muted small mb-3">
            {searchTerm
              ? `No listings match "${searchTerm}". Try another search term.`
              : 'There are no listings in this filter category yet.'}
          </p>
          <Link href="/admin/add-property" className="neo-btn neo-btn-primary text-decoration-none">
            <i className="fa-solid fa-plus"></i>
            <span>Add New Property</span>
          </Link>
        </div>
      ) : (
        <>
          {/* ================================================================
              A) MOBILE VIEW: Responsive Touch Cards (Visible on screens < 768px)
              ================================================================ */}
          <div className="d-md-none">
            <div className="d-flex flex-column gap-3">
              {filtered.map((p) => {
                const badge = getDealBadgeStyle(p.dealType);
                return (
                  <div key={p.id} className="neo-card p-3">
                    {/* Top Row: Thumbnail + Title + Locality */}
                    <div className="d-flex gap-3 mb-2">
                      <div
                        className="position-relative rounded-3 overflow-hidden flex-shrink-0 neo-inset-sm"
                        style={{ width: '74px', height: '74px' }}
                      >
                        <Image
                          src={p.image || '/assets/images/property/property-grid-1.png'}
                          alt={p.title}
                          fill
                          sizes="74px"
                          className="object-fit-cover"
                        />
                      </div>

                      <div className="flex-grow-1 overflow-hidden">
                        <div className="d-flex align-items-center justify-content-between gap-1 mb-1">
                          <span
                            className="px-2 py-0 rounded-pill fw-bold"
                            style={{
                              fontSize: '10px',
                              backgroundColor: badge.bg,
                              color: badge.color,
                              border: badge.border,
                            }}
                          >
                            {p.dealType}
                          </span>
                          <span className="neo-inset-sm px-2 py-0 text-muted" style={{ fontSize: '10px' }}>
                            {p.type}
                          </span>
                        </div>

                        <h6
                          className="fw-bold text-dark mb-1 text-truncate"
                          style={{ fontSize: '14px', lineHeight: '1.3' }}
                          title={p.title}
                        >
                          {p.title}
                        </h6>

                        <div className="d-flex align-items-center gap-1 text-muted" style={{ fontSize: '11px' }}>
                          <i className="fa-solid fa-location-dot" style={{ color: 'var(--neo-primary)' }}></i>
                          <span className="text-truncate">{p.locality}</span>
                          {p.floor && <span className="text-muted">· {p.floor}</span>}
                        </div>
                      </div>
                    </div>

                    {/* Middle Row: Price & Carpet Area Specs */}
                    <div
                      className="neo-inset p-2 rounded-3 d-flex justify-content-between align-items-center mb-3"
                      style={{ fontSize: '13px' }}
                    >
                      <div>
                        <span className="text-muted d-block" style={{ fontSize: '10px' }}>
                          Price
                        </span>
                        <span className="fw-bold" style={{ color: 'var(--neo-primary)', fontSize: '15px' }}>
                          {p.price}
                        </span>
                      </div>

                      <div className="text-end">
                        <span className="text-muted d-block" style={{ fontSize: '10px' }}>
                          Carpet Area
                        </span>
                        <span className="fw-semibold text-dark">{p.carpetArea}</span>
                      </div>
                    </div>

                    {/* Bottom Row: 1-Tap Mobile Actions */}
                    <div className="d-flex align-items-center gap-2">
                      <Link
                        href={`/properties/${p.slug}`}
                        target="_blank"
                        className="neo-btn flex-grow-1 text-center py-2"
                        style={{ fontSize: '12px' }}
                      >
                        <i className="fa-regular fa-eye"></i>
                        <span>View</span>
                      </Link>

                      <Link
                        href={`/admin/edit/${p.id}`}
                        className="neo-btn flex-grow-1 text-center py-2 text-primary"
                        style={{ fontSize: '12px' }}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                        <span>Edit</span>
                      </Link>

                      <button
                        onClick={() => onDelete(p.id)}
                        className="neo-btn neo-btn-danger px-3 py-2"
                        style={{ fontSize: '12px' }}
                        title="Delete listing"
                      >
                        <i className="fa-regular fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================================================================
              B) DESKTOP VIEW: Sleek Neomorphic Table (Visible on screens >= 768px)
              ================================================================ */}
          <div className="d-none d-md-block">
            <div className="neo-card p-0 overflow-hidden">
              <div className="table-responsive">
                <table className="table align-middle mb-0" style={{ backgroundColor: 'transparent' }}>
                  <thead style={{ background: 'rgba(255, 255, 255, 0.45)', borderBottom: '1px solid rgba(255,255,255,0.7)' }}>
                    <tr className="text-muted fw-bold" style={{ fontSize: '11px', letterSpacing: '0.6px' }}>
                      <th className="ps-4 py-3">PROPERTY</th>
                      <th className="py-3">LOCALITY</th>
                      <th className="py-3">TYPE / DEAL</th>
                      <th className="py-3">PRICE</th>
                      <th className="py-3">AREA</th>
                      <th className="text-end pe-4 py-3">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((p) => {
                      const badge = getDealBadgeStyle(p.dealType);
                      return (
                        <tr
                          key={p.id}
                          style={{
                            borderBottom: '1px solid rgba(163, 177, 198, 0.18)',
                            transition: 'background-color 0.2s ease',
                          }}
                        >
                          <td className="ps-4 py-3">
                            <div className="d-flex align-items-center gap-3">
                              <div
                                className="position-relative rounded-3 overflow-hidden flex-shrink-0 neo-inset-sm"
                                style={{ width: '56px', height: '48px' }}
                              >
                                <Image
                                  src={p.image || '/assets/images/property/property-grid-1.png'}
                                  alt={p.title}
                                  fill
                                  sizes="56px"
                                  className="object-fit-cover"
                                />
                              </div>
                              <div className="overflow-hidden" style={{ maxWidth: '260px' }}>
                                <h6 className="mb-0 fw-bold text-dark text-truncate" style={{ fontSize: '14px' }}>
                                  {p.title}
                                </h6>
                                <small className="text-muted">{p.floor || 'Bhiwandi'}</small>
                              </div>
                            </div>
                          </td>
                          <td style={{ fontSize: '13px' }}>
                            <div className="d-flex align-items-center gap-1">
                              <i className="fa-solid fa-location-dot" style={{ color: 'var(--neo-primary)', fontSize: '11px' }}></i>
                              <span>{p.locality}</span>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center gap-1 flex-wrap">
                              <span className="neo-inset-sm px-2 py-1 text-muted" style={{ fontSize: '11px' }}>
                                {p.type}
                              </span>
                              <span
                                className="px-2 py-0 rounded-pill fw-bold"
                                style={{
                                  fontSize: '11px',
                                  backgroundColor: badge.bg,
                                  color: badge.color,
                                  border: badge.border,
                                }}
                              >
                                {p.dealType}
                              </span>
                            </div>
                          </td>
                          <td>
                            <span className="fw-bold" style={{ color: 'var(--neo-primary)', fontSize: '15px' }}>
                              {p.price}
                            </span>
                          </td>
                          <td className="text-muted fw-semibold" style={{ fontSize: '13px' }}>
                            {p.carpetArea}
                          </td>
                          <td className="text-end pe-4">
                            <div className="d-flex justify-content-end gap-2">
                              <Link
                                href={`/properties/${p.slug}`}
                                target="_blank"
                                className="neo-circle text-decoration-none"
                                style={{ width: '34px', height: '34px', fontSize: '12px', color: '#64748b' }}
                                title="View Live"
                              >
                                <i className="fa-regular fa-eye"></i>
                              </Link>
                              <Link
                                href={`/admin/edit/${p.id}`}
                                className="neo-circle text-decoration-none"
                                style={{ width: '34px', height: '34px', fontSize: '12px', color: '#2563eb' }}
                                title="Edit Property"
                              >
                                <i className="fa-solid fa-pen-to-square"></i>
                              </Link>
                              <button
                                onClick={() => onDelete(p.id)}
                                className="neo-circle border-0"
                                style={{ width: '34px', height: '34px', fontSize: '12px', color: '#ef4444' }}
                                title="Delete Property"
                              >
                                <i className="fa-regular fa-trash-can"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
