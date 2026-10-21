import React from 'react';
import LoginBanner from '@/components/auth/LoginBanner';
import LoginFeaturesCard from '@/components/auth/LoginFeaturesCard';
import LoginFormCard from '@/components/auth/LoginFormCard';

export const metadata = {
  title: 'Agent Login | Bhiwandi Estate - Partner & Inventory Desk',
  description:
    'Secure portal for authorized Bhiwandi Estate agents, inventory managers, and channel partners.',
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
              <LoginFormCard />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
