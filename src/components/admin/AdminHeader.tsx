'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function AdminHeader() {
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

  return (
    <div className="py-4 bg-white border-bottom shadow-sm">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <div>
            <span className="badge px-3 py-1 mb-1" style={{ backgroundColor: '#aa8453' }}>
              Taimur Real Estate
            </span>
            <h2 className="fw-bold text-dark mb-0" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Property Management &amp; Inquiries Dashboard
            </h2>
          </div>

          <div className="d-flex align-items-center gap-2 flex-wrap">
            <Link
              href="/admin/add-property"
              className="btn fw-bold text-white shadow-sm d-flex align-items-center gap-2"
              style={{ backgroundColor: '#aa8453', borderRadius: '6px' }}
            >
              <i className="fa-solid fa-plus"></i>
              <span>Add New Property</span>
            </Link>

            <Link href="/properties" className="btn btn-outline-dark" target="_blank">
              <i className="fa-solid fa-arrow-up-right-from-square me-1"></i> Live Site
            </Link>

            <button
              onClick={handleLogout}
              className="btn btn-outline-danger d-flex align-items-center gap-2"
              title="Logout from admin session"
            >
              <i className="fa-solid fa-right-from-bracket"></i>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
