'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

interface AdminSidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export default function AdminSidebar({
  collapsed,
  onToggleCollapse,
}: AdminSidebarProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get('tab') || 'overview';
  const router = useRouter();

  const handleLogout = async () => {
    const toastId = toast.loading('Logging out...');
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      toast.success('Logged out successfully', { id: toastId });
      setTimeout(() => {
        router.push('/login');
        router.refresh();
      }, 500);
    } catch {
      toast.error('Logout failed', { id: toastId });
    }
  };

  const navItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: 'fa-chart-pie',
      href: '/admin',
      isActive: pathname === '/admin' && (currentTab === 'overview' || currentTab === 'LISTINGS'),
    },
    {
      id: 'properties',
      label: 'Properties',
      icon: 'fa-building',
      href: '/admin?tab=properties',
      isActive: pathname === '/admin' && currentTab === 'properties',
    },
    {
      id: 'add',
      label: 'Add Property',
      icon: 'fa-circle-plus',
      href: '/admin/add-property',
      isActive: pathname === '/admin/add-property',
    },
    {
      id: 'leads',
      label: 'Buyer Inquiries',
      icon: 'fa-comments',
      href: '/admin?tab=leads',
      isActive: pathname === '/admin' && (currentTab === 'leads' || currentTab === 'LEADS'),
    },
  ];

  return (
    <aside className={`admin-sidebar ${collapsed ? 'collapsed' : ''}`}>
      {/* 1. Header / Logo Brand */}
      <div
        className="d-flex align-items-center justify-content-between p-3 border-bottom"
        style={{ borderColor: 'rgba(255,255,255,0.7)', height: 'var(--admin-top-bar-height)' }}
      >
        <Link
          href="/admin"
          className="d-flex align-items-center gap-2 text-decoration-none overflow-hidden"
        >
          <div
            className="neo-circle flex-shrink-0"
            style={{
              width: '42px',
              height: '42px',
              backgroundColor: '#aa8453',
              color: '#ffffff',
              fontSize: '18px',
            }}
          >
            <i className="fa-solid fa-gem"></i>
          </div>

          {!collapsed && (
            <div className="text-truncate">
              <h6 className="fw-bold text-dark mb-0 lh-1" style={{ fontSize: '15px' }}>
                TAIMUR ESTATE
              </h6>
              <span className="text-muted" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>
                Admin Portal
              </span>
            </div>
          )}
        </Link>

        {/* Toggle Collapse Button */}
        <button
          onClick={onToggleCollapse}
          className="neo-circle border-0 flex-shrink-0"
          style={{ width: '32px', height: '32px', fontSize: '12px', color: '#64748b' }}
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <i className={`fa-solid ${collapsed ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
        </button>
      </div>

      {/* 2. Navigation List */}
      <div className="p-3 flex-grow-1 overflow-auto">
        {!collapsed && (
          <p
            className="text-uppercase fw-bold text-muted mb-2 ps-2"
            style={{ fontSize: '10px', letterSpacing: '1px' }}
          >
            Main Menu
          </p>
        )}

        <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
          {navItems.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`neo-btn w-100 justify-content-${collapsed ? 'center' : 'start'} ${
                    item.isActive ? 'active' : ''
                  }`}
                  style={{
                    padding: collapsed ? '12px 0' : '10px 14px',
                    fontSize: '14px',
                    color: item.isActive ? 'var(--neo-primary)' : 'var(--neo-text-secondary)',
                  }}
                  title={collapsed ? item.label : undefined}
                >
                  <i
                    className={`fa-solid ${item.icon}`}
                    style={{
                      fontSize: '16px',
                      color: item.isActive ? 'var(--neo-primary)' : '#64748b',
                    }}
                  ></i>
                  {!collapsed && <span className="text-truncate">{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Live Site Shortcut */}
        <div className="mt-4 pt-3 border-top" style={{ borderColor: 'rgba(255,255,255,0.7)' }}>
          {!collapsed && (
            <p
              className="text-uppercase fw-bold text-muted mb-2 ps-2"
              style={{ fontSize: '10px', letterSpacing: '1px' }}
            >
              External
            </p>
          )}

          <Link
            href="/properties"
            target="_blank"
            className={`neo-btn w-100 justify-content-${collapsed ? 'center' : 'start'}`}
            style={{ padding: collapsed ? '12px 0' : '10px 14px', fontSize: '14px' }}
            title={collapsed ? 'View Live Site' : undefined}
          >
            <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '14px', color: '#64748b' }}></i>
            {!collapsed && <span>View Live Site</span>}
          </Link>
        </div>
      </div>

      {/* 3. Footer / Admin Profile & Logout */}
      <div
        className="p-3 border-top mt-auto"
        style={{ borderColor: 'rgba(255,255,255,0.7)', background: 'var(--neo-surface)' }}
      >
        <button
          onClick={handleLogout}
          className={`neo-btn neo-btn-danger w-100 justify-content-${collapsed ? 'center' : 'start'}`}
          style={{ padding: collapsed ? '12px 0' : '10px 14px', fontSize: '14px' }}
          title={collapsed ? 'Logout' : undefined}
        >
          <i className="fa-solid fa-right-from-bracket"></i>
          {!collapsed && <span>Logout Session</span>}
        </button>
      </div>
    </aside>
  );
}
