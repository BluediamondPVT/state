import React from 'react';

interface Props {
  totalProperties: number;
}

export default function AdminMetrics({ totalProperties }: Props) {
  return (
    <div className="row g-3 mb-4">
      <div className="col-12 col-md-4">
        <div className="card border-0 shadow-sm rounded-3 p-3 bg-white">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span className="text-muted small">Total Active Properties</span>
              <h3 className="fw-bold mb-0 text-dark">{totalProperties}</h3>
            </div>
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#fef3c7',
                color: '#d97706',
                fontSize: '20px',
              }}
            >
              <i className="fa-solid fa-house"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-4">
        <div className="card border-0 shadow-sm rounded-3 p-3 bg-white">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span className="text-muted small">Buyer &amp; Tenant Inquiries</span>
              <h3 className="fw-bold mb-0 text-success">18 Leads</h3>
            </div>
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#dcfce7',
                color: '#16a34a',
                fontSize: '20px',
              }}
            >
              <i className="fa-brands fa-whatsapp"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-4">
        <div className="card border-0 shadow-sm rounded-3 p-3 bg-white">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span className="text-muted small">Privacy Protection</span>
              <h3 className="fw-bold mb-0 text-primary">80% Active</h3>
            </div>
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#e0e7ff',
                color: '#4338ca',
                fontSize: '20px',
              }}
            >
              <i className="fa-solid fa-user-shield"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
