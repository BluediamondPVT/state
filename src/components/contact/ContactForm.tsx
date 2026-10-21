'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
      {sent ? (
        <div className="text-center py-5">
          <i className="fa-solid fa-circle-check text-success fs-1 mb-3"></i>
          <h4 className="fw-bold text-dark">Message Sent Successfully!</h4>
          <p className="text-muted">We will get back to you shortly.</p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <h4 className="fw-bold text-dark mb-4 pb-2 border-bottom">Send Us a Message</h4>

          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label small fw-bold text-muted">Your Name *</label>
              <input type="text" className="form-control" required placeholder="Full Name" />
            </div>

            <div className="col-md-6">
              <label className="form-label small fw-bold text-muted">Phone Number *</label>
              <input type="tel" className="form-control" required placeholder="10-digit number" />
            </div>

            <div className="col-12">
              <label className="form-label small fw-bold text-muted">
                What are you looking for?
              </label>
              <select className="form-select" defaultValue="Looking to Buy a Flat in Bhiwandi">
                <option>Looking to Buy a Flat in Bhiwandi</option>
                <option>Looking for Heavy Deposit Property</option>
                <option>Looking for Industrial Gala / Godown</option>
                <option>I want to Sell / Rent my Property</option>
                <option>Other Legal / Loan Inquiry</option>
              </select>
            </div>

            <div className="col-12">
              <label className="form-label small fw-bold text-muted">
                Message / Preferred Time to Call
              </label>
              <textarea
                className="form-control"
                rows={4}
                placeholder="Tell us your budget, preferred area, or specific requirements..."
              />
            </div>

            <div className="col-12 mt-3">
              <button
                type="submit"
                className="btn btn-lg w-100 fw-bold text-white shadow"
                style={{ backgroundColor: '#aa8453', borderRadius: '8px' }}
              >
                Send Inquiry
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
