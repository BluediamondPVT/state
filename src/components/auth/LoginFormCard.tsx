'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginFormCard() {
  const router = useRouter();
  const [email, setEmail] = useState('agent@bhiwandi-estate.com');
  const [password, setPassword] = useState('password123');
  const [remember, setRemember] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      router.push('/admin');
    }, 800);
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
          Portal Login
        </h3>
        <p className="small text-muted mb-0">Enter your credentials to access inventory</p>
      </div>

      {/* Demo Credentials Helper Pill */}
      <div className="alert alert-info py-2 px-3 small rounded-3 mb-4 d-flex align-items-center gap-2">
        <i className="fa-solid fa-circle-info text-info"></i>
        <span>
          <strong>Demo Creds:</strong> Pre-filled for instant testing. Click below!
        </span>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label small fw-bold text-muted">Agent Email / ID *</label>
          <div className="input-group">
            <span className="input-group-text bg-light border-end-0">
              <i className="fa-regular fa-envelope text-muted"></i>
            </span>
            <input
              type="email"
              className="form-control border-start-0"
              placeholder="agent@bhiwandi-estate.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3">
          <div className="d-flex justify-content-between">
            <label className="form-label small fw-bold text-muted">Password *</label>
            <a href="#" className="small text-decoration-none" style={{ color: '#aa8453' }}>
              Forgot password?
            </a>
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
            Keep me logged in on this browser
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
              <i className="fa-solid fa-spinner fa-spin me-2"></i> Authenticating...
            </span>
          ) : (
            <span>
              <i className="fa-solid fa-right-to-bracket me-2"></i> Sign In to Dashboard
            </span>
          )}
        </button>
      </form>

      <div className="text-center mt-4 pt-3 border-top">
        <span className="small text-muted">Need to list a property without login? </span>
        <Link
          href="/sell-property"
          className="small fw-bold text-decoration-none"
          style={{ color: '#aa8453' }}
        >
          List Property Directly →
        </Link>
      </div>
    </div>
  );
}
