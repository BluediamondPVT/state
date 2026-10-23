'use client';

import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import AdminMetrics from '@/components/admin/AdminMetrics';
import AdminListingsTable from '@/components/admin/AdminListingsTable';
import AdminLeadsTable, { LeadItem } from '@/components/admin/AdminLeadsTable';
import { Property } from '@/types/property';
import toast from 'react-hot-toast';

function AdminDashboardContent() {
  const searchParams = useSearchParams();
  const queryTab = searchParams.get('tab');

  const [properties, setProperties] = useState<Property[]>([]);
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [activeTab, setActiveTab] = useState<'LISTINGS' | 'LEADS'>('LISTINGS');
  const [dealFilter, setDealFilter] = useState<string>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (queryTab === 'leads' || queryTab === 'LEADS') {
      setActiveTab('LEADS');
    } else if (queryTab === 'properties' || queryTab === 'LISTINGS') {
      setActiveTab('LISTINGS');
    }
  }, [queryTab]);

  // Fetch properties from live API
  const fetchProperties = useCallback(async () => {
    try {
      const res = await fetch('/api/properties');
      const data = await res.json();
      if (data.success && Array.isArray(data.properties)) {
        setProperties(data.properties);
      }
    } catch (err) {
      console.error('Failed to fetch properties:', err);
      toast.error('Failed to load properties from server');
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch leads
  const fetchLeads = useCallback(async () => {
    try {
      const res = await fetch('/api/leads');
      const data = await res.json();
      if (data.success && Array.isArray(data.leads)) {
        const mapped = data.leads.map(
          (l: {
            id?: string;
            name: string;
            phone: string;
            type?: string;
            locality?: string;
            message?: string;
            status?: string;
            createdAt: string;
          }) => ({
            id: l.id,
            name: l.name,
            phone: l.phone,
            property: `${l.type || 'Property Inquiry'} - ${l.locality || 'Bhiwandi'}`,
            message: l.message,
            status: l.status || 'new',
            date: new Date(l.createdAt).toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'short',
              hour: '2-digit',
              minute: '2-digit',
            }),
            source: 'Website Inquiry',
          })
        );
        setLeads(mapped);
      }
    } catch (err) {
      console.error('Failed to fetch leads:', err);
    }
  }, []);

  useEffect(() => {
    fetchProperties();
    fetchLeads();
  }, [fetchProperties, fetchLeads]);

  // Handle Delete with Toast & Confirmation
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this property? This action cannot be undone.')) {
      return;
    }

    const toastId = toast.loading('Deleting property...');
    try {
      const res = await fetch(`/api/properties/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        toast.error(data.error || 'Failed to delete property', { id: toastId });
        return;
      }

      setProperties((prev) => prev.filter((p) => p.id !== id && p.slug !== id));
      toast.success('Property deleted successfully!', { id: toastId });
    } catch {
      toast.error('Network error while deleting', { id: toastId });
    }
  };

  // Filter properties by deal type
  const displayedProperties = dealFilter === 'All'
    ? properties
    : properties.filter((p) => p.dealType === dealFilter);

  const heavyDepositCount = properties.filter((p) => p.dealType === 'Heavy Deposit').length;

  return (
    <div>
      {/* 1. Neomorphic KPI Metric Cards */}
      <AdminMetrics
        totalProperties={properties.length}
        totalLeads={leads.length}
        heavyDepositCount={heavyDepositCount}
        onSelectTab={setActiveTab}
        onSelectDealFilter={setDealFilter}
      />

      {/* 2. Neomorphic Tab Switcher & Filter Toolbar */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        {/* Neomorphic Pill Tabs */}
        <div className="neo-pill-tabs">
          <button
            onClick={() => setActiveTab('LISTINGS')}
            className={`neo-pill-tab ${activeTab === 'LISTINGS' ? 'active' : ''}`}
          >
            <i className="fa-solid fa-building"></i>
            <span>All Properties ({properties.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('LEADS')}
            className={`neo-pill-tab ${activeTab === 'LEADS' ? 'active' : ''}`}
          >
            <i className="fa-solid fa-comments"></i>
            <span>Buyer Inquiries ({leads.length})</span>
          </button>
        </div>

        {/* Deal Filter Selector */}
        {activeTab === 'LISTINGS' && (
          <div className="d-flex align-items-center gap-2">
            <span className="small text-muted fw-bold">Deal Filter:</span>
            <select
              className="neo-input py-1 px-3 shadow-none fw-semibold"
              style={{ width: '190px', height: '40px' }}
              value={dealFilter}
              onChange={(e) => setDealFilter(e.target.value)}
            >
              <option value="All">All Deals ({properties.length})</option>
              <option value="For Sale">For Sale</option>
              <option value="Heavy Deposit">Heavy Deposit</option>
              <option value="For Rent">For Rent</option>
              <option value="Low Downpayment">Low Downpayment</option>
            </select>
          </div>
        )}
      </div>

      {/* 3. Active Table Content */}
      {loading ? (
        <div className="neo-card p-5 text-center">
          <i className="fa-solid fa-spinner fa-spin fs-2 mb-2" style={{ color: 'var(--neo-primary)' }}></i>
          <p className="text-muted small mb-0 fw-semibold">Loading live property inventory...</p>
        </div>
      ) : activeTab === 'LISTINGS' ? (
        <AdminListingsTable properties={displayedProperties} onDelete={handleDelete} />
      ) : (
        <AdminLeadsTable leads={leads} />
      )}
    </div>
  );
}

export default function AdminDashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="neo-card p-5 text-center">
          <i className="fa-solid fa-spinner fa-spin fs-2 mb-2" style={{ color: 'var(--neo-primary)' }}></i>
          <p className="text-muted small mb-0">Loading dashboard...</p>
        </div>
      }
    >
      <AdminDashboardContent />
    </Suspense>
  );
}

