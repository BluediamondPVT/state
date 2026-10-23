'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function AdminMobileTopBar() {
  const router = useRouter();

  const handleLogout = async () => {
    const toastId = toast.loading('Logging out...');
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      toast.success('Logged out', { id: toastId });
      setTimeout(() => {
        router.push('/login');
        router.refresh();
      }, 500);
    } catch {
      toast.error('Logout failed', { id: toastId });
    }
  };

  return (
    <div className="admin-mobile-topbar">
      <Link href="/admin" className="d-flex align-items-center gap-2 text-decoration-none">
        <div
          className="neo-circle"
          style={{
            width: '34px',
            height: '34px',
            backgroundColor: '#aa8453',
            color: '#ffffff',
            fontSize: '14px',
          }}
        >
          <i className="fa-solid fa-gem"></i>
        </div>
        <div>
          <h6 className="fw-bold text-dark mb-0 lh-1" style={{ fontSize: '14px' }}>
            TAIMUR ESTATE
          </h6>
          <span className="text-muted" style={{ fontSize: '10px' }}>
            Admin Dashboard
          </span>
        </div>
      </Link>

      <div className="d-flex align-items-center gap-2">
        <Link
          href="/properties"
          target="_blank"
          className="neo-circle border-0 text-decoration-none"
          style={{ width: '36px', height: '36px', color: '#64748b', fontSize: '13px' }}
          title="View Live Site"
        >
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </Link>

        <button
          onClick={handleLogout}
          className="neo-circle border-0 text-danger"
          style={{ width: '36px', height: '36px', fontSize: '13px' }}
          title="Logout"
        >
          <i className="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </div>
  );
}
