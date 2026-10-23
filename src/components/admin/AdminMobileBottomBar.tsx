'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function AdminMobileBottomBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get('tab') || 'overview';

  const isOverview = pathname === '/admin' && (currentTab === 'overview' || currentTab === 'LISTINGS');
  const isProperties = pathname === '/admin' && currentTab === 'properties';
  const isAddProperty = pathname === '/admin/add-property';
  const isLeads = pathname === '/admin' && (currentTab === 'leads' || currentTab === 'LEADS');

  return (
    <nav className="admin-mobile-bottom-bar" aria-label="Mobile Admin Navigation">
      {/* 1. Overview Tab */}
      <Link
        href="/admin"
        className={`admin-bottom-tab-item ${isOverview ? 'active' : ''}`}
      >
        <i className="fa-solid fa-chart-pie"></i>
        <span>Overview</span>
      </Link>

      {/* 2. Properties Tab */}
      <Link
        href="/admin?tab=properties"
        className={`admin-bottom-tab-item ${isProperties ? 'active' : ''}`}
      >
        <i className="fa-solid fa-building"></i>
        <span>Inventory</span>
      </Link>

      {/* 3. Center Elevated Floating Action Button (FAB) -> Add Property */}
      <Link
        href="/admin/add-property"
        className="admin-bottom-fab"
        title="Add New Property"
        aria-label="Add New Property"
      >
        <i className="fa-solid fa-plus"></i>
      </Link>

      {/* 4. Leads / Inquiries Tab */}
      <Link
        href="/admin?tab=leads"
        className={`admin-bottom-tab-item ${isLeads ? 'active' : ''}`}
      >
        <i className="fa-solid fa-comments"></i>
        <span>Inquiries</span>
      </Link>

      {/* 5. Live Website Tab */}
      <Link
        href="/properties"
        target="_blank"
        className="admin-bottom-tab-item"
        title="Open Live Website"
      >
        <i className="fa-solid fa-globe"></i>
        <span>Live Site</span>
      </Link>
    </nav>
  );
}
