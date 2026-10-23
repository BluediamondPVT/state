import React, { Suspense } from 'react';
import LoginBanner from '@/components/auth/LoginBanner';
import LoginFeaturesCard from '@/components/auth/LoginFeaturesCard';
import LoginFormCard from '@/components/auth/LoginFormCard';

export const metadata = {
  title: 'Admin Login | Taimur Real Estate — Bhiwandi Inventory Desk',
  description:
    'Secure portal for authorized Taimur Real Estate agents, inventory managers, and staff in Bhiwandi.',
};

export default function LoginPage() {
  return (
    <main className="bg-light min-vh-100">
      {/* 1. Header Hero Banner */}
      <LoginBanner />

      {/* 2. Main Portal Form & Trust Features Grid */}
      <div className="full-row py-5">
        <div className="container py-3">
          <div className="row align-items-center justify-content-center g-5">
            {/* Left Agent Access Overview */}
            <div className="col-lg-6 col-md-6 d-none d-md-block text-center">
              <LoginFeaturesCard />
            </div>

            {/* Right Authentication Form */}
            <div className="col-lg-5 col-md-6">
              <Suspense
                fallback={
                  <div className="card shadow-sm border-0 rounded-4 p-5 text-center bg-white">
                    <i className="fa-solid fa-spinner fa-spin fs-2 text-muted mb-3"></i>
                    <p className="text-muted small">Loading login form...</p>
                  </div>
                }
              >
                <LoginFormCard />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
