'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

export default function LoginFormCard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTarget = searchParams.get('redirect') || '/admin';

  const [email, setEmail] = useState('admin@taimurrealestate.com');
  const [password, setPassword] = useState('Taimur@2026');
  const [remember, setRemember] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please enter both email and password');
      return;
    }

    setIsLoading(true);
    const toastId = toast.loading('Authenticating credentials...');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        toast.error(data.error || 'Authentication failed. Please check your credentials.', {
          id: toastId,
        });
        setIsLoading(false);
        return;
      }

      toast.success(`Welcome back, ${data.user?.name || 'Admin'}! Redirecting...`, {
        id: toastId,
      });

      // Refresh and route to dashboard
      setTimeout(() => {
        router.push(redirectTarget);
        router.refresh();
      }, 700);
    } catch (err) {
      console.error('Login submit error:', err);
      toast.error('Network error. Please try again.', { id: toastId });
      setIsLoading(false);
    }
  };

  return (
    <div className="card shadow-sm border-0 rounded-4 p-4 p-md-5 bg-white">
      <div className="text-center mb-4">
        <div
          className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
          style={{ width: '56px', height: '56px', backgroundColor: 'rgba(170, 132, 83, 0.15)' }}
        >
          <i className="fa-solid fa-lock fs-4" style={{ color: '#aa8453' }}></i>
        </div>
        <h3 className="fw-bold text-dark mb-1" style={{ fontFamily: 'Urbanist, sans-serif' }}>
          Taimur Admin Login
        </h3>
        <p className="small text-muted mb-0">Enter your credentials to access inventory &amp; leads</p>
      </div>

      {/* Demo Credentials Helper Pill */}
      <div
        className="alert py-2 px-3 small rounded-3 mb-4 d-flex align-items-center gap-2"
        style={{ backgroundColor: '#fcf8f2', border: '1px dashed #aa8453', color: '#6c4a1e' }}
      >
        <i className="fa-solid fa-key" style={{ color: '#aa8453' }}></i>
        <span>
          <strong>Admin Access:</strong> Pre-filled with authorized demo credentials for instant testing!
        </span>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label small fw-bold text-muted">Official Email Address *</label>
          <div className="input-group">
            <span className="input-group-text bg-light border-end-0">
              <i className="fa-regular fa-envelope text-muted"></i>
            </span>
            <input
              type="email"
              className="form-control border-start-0"
              placeholder="admin@taimurrealestate.com"
              required
              value={email}
              disabled={isLoading}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3">
          <div className="d-flex justify-content-between">
            <label className="form-label small fw-bold text-muted">Password *</label>
            <span className="small text-muted" style={{ cursor: 'pointer' }} onClick={() => toast('Please contact Taimur Real Estate Head Desk if you forgot password.')}>
              Forgot password?
            </span>
          </div>
          <div className="input-group">
            <span className="input-group-text bg-light border-end-0">
              <i className="fa-solid fa-key text-muted"></i>
            </span>
            <input
              type="password"
              className="form-control border-start-0"
              placeholder="••••••••"
              required
              value={password}
              disabled={isLoading}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="rememberMe"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <label className="form-check-label small text-muted" htmlFor="rememberMe">
            Keep me logged in for 7 days
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="btn btn-lg w-100 fw-bold text-white shadow-sm"
          style={{ backgroundColor: '#aa8453', borderRadius: '8px' }}
        >
          {isLoading ? (
            <span>
              <i className="fa-solid fa-spinner fa-spin me-2"></i> Verifying Session...
            </span>
          ) : (
            <span>
              <i className="fa-solid fa-right-to-bracket me-2"></i> Sign In to Admin Panel
            </span>
          )}
        </button>
      </form>

      <div className="text-center mt-4 pt-3 border-top">
        <span className="small text-muted">Public client with property for sale/rent? </span>
        <Link
          href="/sell-property"
          className="small fw-bold text-decoration-none"
          style={{ color: '#aa8453' }}
        >
          Submit Property Directly →
        </Link>
      </div>
    </div>
  );
}
