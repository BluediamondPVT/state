'use client';

import React, { useState, Suspense } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminTopBar from './AdminTopBar';
import AdminMobileTopBar from './AdminMobileTopBar';
import AdminMobileBottomBar from './AdminMobileBottomBar';
import '@/styles/admin-neomorphism.css';

export default function AdminLayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="admin-neomorphic-root">
      <div className="admin-layout-wrapper">
        {/* 1. Desktop Collapsible Sidebar */}
        <Suspense fallback={null}>
          <AdminSidebar
            collapsed={sidebarCollapsed}
            onToggleCollapse={() => setSidebarCollapsed((prev) => !prev)}
          />
        </Suspense>

        {/* 2. Main Container Area */}
        <div
          className={`admin-main-container ${
            sidebarCollapsed ? 'sidebar-collapsed' : ''
          }`}
        >
          {/* Desktop Topbar */}
          <AdminTopBar />

          {/* Mobile Topbar */}
          <AdminMobileTopBar />

          {/* Page Body */}
          <div className="admin-page-body">{children}</div>

          {/* 3. Mobile Sticky Bottom Tab Bar */}
          <Suspense fallback={null}>
            <AdminMobileBottomBar />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
