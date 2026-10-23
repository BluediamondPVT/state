'use client';

import React from 'react';
import Link from 'next/link';

interface Props {
  totalProperties: number;
  totalLeads?: number;
  heavyDepositCount?: number;
  onSelectTab?: (tab: 'LISTINGS' | 'LEADS') => void;
  onSelectDealFilter?: (deal: string) => void;
}

export default function AdminMetrics({
  totalProperties,
  totalLeads = 0,
  heavyDepositCount = 0,
  onSelectTab,
  onSelectDealFilter,
}: Props) {
  return (
    <div className="mb-4">
      {/* 1. Neomorphic KPI Cards Grid */}
      <div className="row g-3 mb-3">
        {/* Metric 1: Total Properties */}
        <div className="col-6 col-lg-3">
          <div
            className="neo-card p-3 p-md-4 h-100 d-flex flex-column justify-content-between"
            style={{ cursor: onSelectTab ? 'pointer' : 'default' }}
            onClick={() => onSelectTab && onSelectTab('LISTINGS')}
          >
            <div className="d-flex justify-content-between align-items-start mb-2">
              <span className="text-muted fw-semibold" style={{ fontSize: '12px' }}>
                Total Listings
              </span>
              <div
                className="neo-circle"
                style={{
                  width: '42px',
                  height: '42px',
                  color: 'var(--neo-primary)',
                  fontSize: '18px',
                }}
              >
                <i className="fa-solid fa-building-circle-check"></i>
              </div>
            </div>

            <div>
              <h2 className="fw-bold mb-1 text-dark" style={{ fontSize: '28px' }}>
                {totalProperties}
              </h2>
              <div className="d-flex align-items-center gap-1">
                <span
                  className="neo-inset-sm px-2 py-0 fw-bold"
                  style={{ color: '#10b981', fontSize: '11px' }}
                >
                  ● Active
                </span>
                <span className="text-muted" style={{ fontSize: '11px' }}>
                  in Bhiwandi
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Metric 2: Buyer Inquiries / Leads */}
        <div className="col-6 col-lg-3">
          <div
            className="neo-card p-3 p-md-4 h-100 d-flex flex-column justify-content-between"
            style={{ cursor: onSelectTab ? 'pointer' : 'default' }}
            onClick={() => onSelectTab && onSelectTab('LEADS')}
          >
            <div className="d-flex justify-content-between align-items-start mb-2">
              <span className="text-muted fw-semibold" style={{ fontSize: '12px' }}>
                Client Inquiries
              </span>
              <div
                className="neo-circle"
                style={{
                  width: '42px',
                  height: '42px',
                  color: '#10b981',
                  fontSize: '18px',
                }}
              >
                <i className="fa-brands fa-whatsapp"></i>
              </div>
            </div>

            <div>
              <h2 className="fw-bold mb-1" style={{ fontSize: '28px', color: '#10b981' }}>
                {totalLeads}
              </h2>
              <div className="d-flex align-items-center gap-1">
                <span
                  className="neo-inset-sm px-2 py-0 fw-bold"
                  style={{ color: 'var(--neo-primary)', fontSize: '11px' }}
                >
                  Direct Leads
                </span>
                <span className="text-muted" style={{ fontSize: '11px' }}>
                  WhatsApp / Call
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Metric 3: Heavy Deposit Pockets */}
        <div className="col-6 col-lg-3">
          <div
            className="neo-card p-3 p-md-4 h-100 d-flex flex-column justify-content-between"
            style={{ cursor: onSelectDealFilter ? 'pointer' : 'default' }}
            onClick={() => {
              if (onSelectTab) onSelectTab('LISTINGS');
              if (onSelectDealFilter) onSelectDealFilter('Heavy Deposit');
            }}
          >
            <div className="d-flex justify-content-between align-items-start mb-2">
              <span className="text-muted fw-semibold" style={{ fontSize: '12px' }}>
                Heavy Deposit
              </span>
              <div
                className="neo-circle"
                style={{
                  width: '42px',
                  height: '42px',
                  color: '#f59e0b',
                  fontSize: '18px',
                }}
              >
                <i className="fa-solid fa-hand-holding-dollar"></i>
              </div>
            </div>

            <div>
              <h2 className="fw-bold mb-1" style={{ fontSize: '28px', color: '#d97706' }}>
                {heavyDepositCount > 0 ? heavyDepositCount : 'Available'}
              </h2>
              <div className="d-flex align-items-center gap-1">
                <span
                  className="neo-inset-sm px-2 py-0 fw-bold text-truncate"
                  style={{ color: '#d97706', fontSize: '11px', maxWidth: '100%' }}
                >
                  Zero Rent Deals
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Metric 4: Privacy Shield Status */}
        <div className="col-6 col-lg-3">
          <div className="neo-card p-3 p-md-4 h-100 d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <span className="text-muted fw-semibold" style={{ fontSize: '12px' }}>
                Privacy Shield
              </span>
              <div
                className="neo-circle"
                style={{
                  width: '42px',
                  height: '42px',
                  color: '#3b82f6',
                  fontSize: '18px',
                }}
              >
                <i className="fa-solid fa-shield-halved"></i>
              </div>
            </div>

            <div>
              <h2 className="fw-bold mb-1 text-dark" style={{ fontSize: '28px' }}>
                80%
              </h2>
              <div className="d-flex align-items-center gap-1">
                <span
                  className="neo-inset-sm px-2 py-0 fw-bold"
                  style={{ color: '#3b82f6', fontSize: '11px' }}
                >
                  Confidential
                </span>
                <span className="text-muted" style={{ fontSize: '11px' }}>
                  Escorted Visits
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Quick Action Neomorphic Shortcuts Bar */}
      <div className="d-flex align-items-center gap-2 overflow-auto pb-2" style={{ scrollbarWidth: 'none' }}>
        <span className="text-muted small fw-bold flex-shrink-0 d-none d-sm-inline" style={{ fontSize: '12px' }}>
          Quick Shortcuts:
        </span>

        <Link
          href="/admin/add-property"
          className="neo-btn neo-btn-primary flex-shrink-0"
          style={{ padding: '6px 14px', fontSize: '12px', borderRadius: '10px' }}
        >
          <i className="fa-solid fa-plus"></i>
          <span>Add New Flat</span>
        </Link>

        {onSelectDealFilter && (
          <>
            <button
              onClick={() => {
                if (onSelectTab) onSelectTab('LISTINGS');
                onSelectDealFilter('All');
              }}
              className="neo-btn flex-shrink-0"
              style={{ padding: '6px 12px', fontSize: '12px', borderRadius: '10px' }}
            >
              <i className="fa-solid fa-list text-muted"></i>
              <span>All Deals</span>
            </button>

            <button
              onClick={() => {
                if (onSelectTab) onSelectTab('LISTINGS');
                onSelectDealFilter('For Sale');
              }}
              className="neo-btn flex-shrink-0"
              style={{ padding: '6px 12px', fontSize: '12px', borderRadius: '10px' }}
            >
              <i className="fa-solid fa-tag text-primary"></i>
              <span>For Sale</span>
            </button>

            <button
              onClick={() => {
                if (onSelectTab) onSelectTab('LISTINGS');
                onSelectDealFilter('Heavy Deposit');
              }}
              className="neo-btn flex-shrink-0"
              style={{ padding: '6px 12px', fontSize: '12px', borderRadius: '10px' }}
            >
              <i className="fa-solid fa-key" style={{ color: '#d97706' }}></i>
              <span>Heavy Deposit</span>
            </button>

            <button
              onClick={() => {
                if (onSelectTab) onSelectTab('LISTINGS');
                onSelectDealFilter('For Rent');
              }}
              className="neo-btn flex-shrink-0"
              style={{ padding: '6px 12px', fontSize: '12px', borderRadius: '10px' }}
            >
              <i className="fa-solid fa-house-user text-info"></i>
              <span>For Rent</span>
            </button>
          </>
        )}

        {onSelectTab && (
          <button
            onClick={() => onSelectTab('LEADS')}
            className="neo-btn flex-shrink-0"
            style={{ padding: '6px 12px', fontSize: '12px', borderRadius: '10px' }}
          >
            <i className="fa-brands fa-whatsapp text-success"></i>
            <span>View Inquiries ({totalLeads})</span>
          </button>
        )}
      </div>
    </div>
  );
}
