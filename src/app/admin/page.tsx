'use client';

import React, { useState } from 'react';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminMetrics from '@/components/admin/AdminMetrics';
import AdminListingsTable from '@/components/admin/AdminListingsTable';
import AdminLeadsTable, { LeadItem } from '@/components/admin/AdminLeadsTable';
import { PROPERTIES } from '@/data/properties';
import { Property } from '@/types/property';

const sampleLeads: LeadItem[] = [
  {
    name: 'Sameer Ansari',
    phone: '+91 98201 12345',
    property: 'Spacious 2 BHK Dhamankar Naka',
    date: 'Today, 2:30 PM',
    source: 'WhatsApp Click',
  },
  {
    name: 'Kiran Patil',
    phone: '+91 97654 67890',
    property: 'Heavy Deposit 1 BHK Anjur Phata',
    date: 'Today, 11:15 AM',
    source: 'Schedule Visit Form',
  },
  {
    name: 'Rahul Varma (Thane)',
    phone: '+91 98920 54321',
    property: 'Industrial Gala Purna Mankoli',
    date: 'Yesterday',
    source: 'Direct Call',
  },
];

export default function AdminDashboardPage() {
  const [properties, setProperties] = useState<Property[]>(PROPERTIES);
  const [activeTab, setActiveTab] = useState<'LISTINGS' | 'LEADS'>('LISTINGS');

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this property listing?')) {
      setProperties(properties.filter((p) => p.id !== id));
    }
  };

  return (
    <main className="bg-light min-vh-100">
      {/* 1. Header Toolbar */}
      <AdminHeader />

      <div className="container py-4">
        {/* 2. KPI Metric Cards */}
        <AdminMetrics totalProperties={properties.length} />

        {/* 3. Tab Filter Buttons */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="btn-group shadow-sm">
            <button
              onClick={() => setActiveTab('LISTINGS')}
              className={`btn ${
                activeTab === 'LISTINGS' ? 'btn-primary' : 'btn-light border'
              } fw-semibold`}
            >
              <i className="fa-solid fa-list me-2"></i> All Active Properties ({properties.length})
            </button>
            <button
              onClick={() => setActiveTab('LEADS')}
              className={`btn ${
                activeTab === 'LEADS' ? 'btn-primary' : 'btn-light border'
              } fw-semibold`}
            >
              <i className="fa-solid fa-users me-2"></i> Buyer &amp; Tenant Inquiries (
              {sampleLeads.length})
            </button>
          </div>
        </div>

        {/* 4. Active Table Content */}
        {activeTab === 'LISTINGS' ? (
          <AdminListingsTable properties={properties} onDelete={handleDelete} />
        ) : (
          <AdminLeadsTable leads={sampleLeads} />
        )}
      </div>
    </main>
  );
}
