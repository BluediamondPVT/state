'use client';

import React, { useState, useMemo } from 'react';

export interface LeadItem {
  id?: string;
  name: string;
  phone: string;
  property: string;
  message?: string;
  status?: string;
  date: string;
  source: string;
}

interface Props {
  leads: LeadItem[];
}

export default function AdminLeadsTable({ leads }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'NEW' | 'CONTACTED'>('ALL');

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        !searchTerm.trim() ||
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.phone.includes(searchTerm) ||
        lead.property.toLowerCase().includes(searchTerm.toLowerCase());

      const leadStatus = (lead.status || 'new').toLowerCase();
      const matchesStatus =
        statusFilter === 'ALL' ||
        (statusFilter === 'NEW' && leadStatus === 'new') ||
        (statusFilter === 'CONTACTED' && leadStatus === 'contacted');

      return matchesSearch && matchesStatus;
    });
  }, [leads, searchTerm, statusFilter]);

  const cleanPhone = (phone: string) => {
    return phone.replace(/[^0-9]/g, '');
  };

  const getWhatsAppUrl = (lead: LeadItem) => {
    const rawNumber = cleanPhone(lead.phone);
    const formatted = rawNumber.startsWith('91') ? rawNumber : `91${rawNumber}`;
    const text = encodeURIComponent(
      `Hello ${lead.name}, Taimur Real Estate here regarding your inquiry for ${lead.property}. How can we assist you with site inspection in Bhiwandi?`
    );
    return `https://wa.me/${formatted}?text=${text}`;
  };

  return (
    <div className="mb-4">
      {/* 1. Header Toolbar with Search & Status Filter */}
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-3">
        <div>
          <h5 className="fw-bold text-dark mb-0" style={{ fontSize: '18px' }}>
            Client Inquiries &amp; Buyer Leads
          </h5>
          <span className="text-muted" style={{ fontSize: '12px' }}>
            {filteredLeads.length} total direct buyer inquiries
          </span>
        </div>

        <div className="d-flex align-items-center gap-2 flex-wrap" style={{ maxWidth: '420px', width: '100%' }}>
          {/* Status Pills */}
          <div className="neo-pill-tabs flex-shrink-0" style={{ padding: '3px' }}>
            <button
              onClick={() => setStatusFilter('ALL')}
              className={`neo-pill-tab ${statusFilter === 'ALL' ? 'active' : ''}`}
              style={{ padding: '4px 10px', fontSize: '11px' }}
            >
              All
            </button>
            <button
              onClick={() => setStatusFilter('NEW')}
              className={`neo-pill-tab ${statusFilter === 'NEW' ? 'active' : ''}`}
              style={{ padding: '4px 10px', fontSize: '11px' }}
            >
              ● New
            </button>
          </div>

          {/* Search Box */}
          <div className="position-relative flex-grow-1">
            <i
              className="fa-solid fa-magnifying-glass position-absolute text-muted"
              style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', fontSize: '12px' }}
            ></i>
            <input
              type="text"
              placeholder="Search name, phone..."
              className="neo-input ps-4"
              style={{ padding: '6px 12px 6px 32px', fontSize: '12px', height: '34px' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {filteredLeads.length === 0 ? (
        <div className="neo-card p-5 text-center">
          <div
            className="neo-circle mx-auto mb-3"
            style={{ width: '64px', height: '64px', fontSize: '24px', color: '#10b981' }}
          >
            <i className="fa-brands fa-whatsapp"></i>
          </div>
          <h6 className="fw-bold text-dark mb-1">No Inquiries Found</h6>
          <p className="text-muted small mb-0">
            {searchTerm
              ? `No buyer leads match "${searchTerm}".`
              : 'New inquiries submitted via property pages or WhatsApp will appear here automatically.'}
          </p>
        </div>
      ) : (
        <>
          {/* ================================================================
              A) MOBILE VIEW: Interactive Touch Cards (< 768px)
              ================================================================ */}
          <div className="d-md-none">
            <div className="d-flex flex-column gap-3">
              {filteredLeads.map((lead, idx) => {
                const isNew = (lead.status || 'new').toLowerCase() === 'new';
                return (
                  <div key={idx} className="neo-card p-3">
                    {/* Header Row: Avatar Initials + Name + Status */}
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="neo-circle flex-shrink-0"
                          style={{
                            width: '38px',
                            height: '38px',
                            backgroundColor: isNew ? '#ecfdf5' : '#f1f5f9',
                            color: isNew ? '#10b981' : '#64748b',
                            fontSize: '14px',
                            fontWeight: 'bold',
                          }}
                        >
                          {lead.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h6 className="fw-bold text-dark mb-0" style={{ fontSize: '15px' }}>
                            {lead.name}
                          </h6>
                          <span className="text-muted" style={{ fontSize: '11px' }}>
                            {lead.date}
                          </span>
                        </div>
                      </div>

                      <span
                        className="px-2 py-0 rounded-pill fw-bold"
                        style={{
                          fontSize: '10px',
                          backgroundColor: isNew ? '#dcfce7' : '#f1f5f9',
                          color: isNew ? '#15803d' : '#64748b',
                          border: isNew ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid #cbd5e1',
                        }}
                      >
                        {isNew ? '● New Inquiry' : 'Contacted'}
                      </span>
                    </div>

                    {/* Middle Row: Requirement & Message Box */}
                    <div className="neo-inset p-2 rounded-3 mb-3" style={{ fontSize: '12px' }}>
                      <div className="d-flex align-items-center gap-1 mb-1">
                        <i className="fa-solid fa-house-chimney text-muted" style={{ fontSize: '11px' }}></i>
                        <span className="fw-semibold text-dark">{lead.property}</span>
                      </div>

                      {lead.message ? (
                        <p className="text-muted mb-0 fst-italic" style={{ fontSize: '11px' }}>
                          "{lead.message}"
                        </p>
                      ) : (
                        <p className="text-muted mb-0" style={{ fontSize: '11px' }}>
                          Phone: <strong className="text-dark">{lead.phone}</strong>
                        </p>
                      )}
                    </div>

                    {/* Bottom Row: 1-Tap Mobile Actions */}
                    <div className="d-flex align-items-center gap-2">
                      <a
                        href={getWhatsAppUrl(lead)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neo-btn flex-grow-1 text-center py-2 text-decoration-none"
                        style={{
                          backgroundColor: '#ecfdf5',
                          color: '#059669',
                          borderColor: 'rgba(16, 185, 129, 0.35)',
                          fontSize: '13px',
                          fontWeight: '700',
                        }}
                      >
                        <i className="fa-brands fa-whatsapp fs-6"></i>
                        <span>WhatsApp</span>
                      </a>

                      <a
                        href={`tel:${lead.phone}`}
                        className="neo-btn flex-grow-1 text-center py-2 text-decoration-none"
                        style={{ fontSize: '13px', fontWeight: '600' }}
                      >
                        <i className="fa-solid fa-phone text-primary"></i>
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================================================================
              B) DESKTOP VIEW: Sleek Neomorphic Table (>= 768px)
              ================================================================ */}
          <div className="d-none d-md-block">
            <div className="neo-card p-0 overflow-hidden">
              <div className="table-responsive">
                <table className="table align-middle mb-0" style={{ backgroundColor: 'transparent' }}>
                  <thead style={{ background: 'rgba(255, 255, 255, 0.45)', borderBottom: '1px solid rgba(255,255,255,0.7)' }}>
                    <tr className="text-muted fw-bold" style={{ fontSize: '11px', letterSpacing: '0.6px' }}>
                      <th className="ps-4 py-3">BUYER / CLIENT</th>
                      <th className="py-3">REQUIREMENT &amp; MESSAGE</th>
                      <th className="py-3">PHONE</th>
                      <th className="py-3">STATUS</th>
                      <th className="py-3">DATE</th>
                      <th className="text-end pe-4 py-3">INSTANT ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeads.map((lead, idx) => {
                      const isNew = (lead.status || 'new').toLowerCase() === 'new';
                      return (
                        <tr
                          key={idx}
                          style={{
                            borderBottom: '1px solid rgba(163, 177, 198, 0.18)',
                            transition: 'background-color 0.2s ease',
                          }}
                        >
                          <td className="ps-4 py-3">
                            <div className="d-flex align-items-center gap-2">
                              <div
                                className="neo-circle flex-shrink-0"
                                style={{
                                  width: '36px',
                                  height: '36px',
                                  backgroundColor: isNew ? '#ecfdf5' : '#f1f5f9',
                                  color: isNew ? '#10b981' : '#64748b',
                                  fontSize: '13px',
                                  fontWeight: 'bold',
                                }}
                              >
                                {lead.name.charAt(0).toUpperCase()}
                              </div>
                              <div>
                                <span className="fw-bold text-dark d-block" style={{ fontSize: '14px' }}>
                                  {lead.name}
                                </span>
                                <span className="text-muted" style={{ fontSize: '11px' }}>
                                  {lead.source}
                                </span>
                              </div>
                            </div>
                          </td>

                          <td className="py-3" style={{ maxWidth: '280px' }}>
                            <span className="fw-semibold text-dark d-block" style={{ fontSize: '13px' }}>
                              {lead.property}
                            </span>
                            {lead.message && (
                              <small className="text-muted text-truncate d-block" style={{ fontSize: '11px' }}>
                                "{lead.message}"
                              </small>
                            )}
                          </td>

                          <td className="py-3">
                            <a
                              href={`tel:${lead.phone}`}
                              className="text-decoration-none text-dark fw-bold"
                              style={{ fontSize: '13px' }}
                            >
                              {lead.phone}
                            </a>
                          </td>

                          <td className="py-3">
                            <span
                              className="px-2 py-1 rounded-pill fw-bold"
                              style={{
                                fontSize: '11px',
                                backgroundColor: isNew ? '#dcfce7' : '#f1f5f9',
                                color: isNew ? '#15803d' : '#64748b',
                                border: isNew ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid #cbd5e1',
                              }}
                            >
                              {isNew ? '● New' : 'Contacted'}
                            </span>
                          </td>

                          <td className="py-3 text-muted small">{lead.date}</td>

                          <td className="text-end pe-4 py-3">
                            <div className="d-flex justify-content-end gap-2">
                              <a
                                href={getWhatsAppUrl(lead)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="neo-btn text-decoration-none py-1 px-3"
                                style={{
                                  backgroundColor: '#ecfdf5',
                                  color: '#059669',
                                  borderColor: 'rgba(16, 185, 129, 0.4)',
                                  fontSize: '12px',
                                  fontWeight: '700',
                                }}
                                title="Open WhatsApp Chat"
                              >
                                <i className="fa-brands fa-whatsapp fs-6"></i>
                                <span>WhatsApp</span>
                              </a>

                              <a
                                href={`tel:${lead.phone}`}
                                className="neo-circle text-decoration-none"
                                style={{ width: '34px', height: '34px', fontSize: '12px', color: '#2563eb' }}
                                title="Call Buyer"
                              >
                                <i className="fa-solid fa-phone"></i>
                              </a>
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
