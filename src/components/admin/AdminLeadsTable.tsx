import React from 'react';

export interface LeadItem {
  name: string;
  phone: string;
  property: string;
  date: string;
  source: string;
}

interface Props {
  leads: LeadItem[];
}

export default function AdminLeadsTable({ leads }: Props) {
  return (
    <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-light small text-muted text-uppercase">
            <tr>
              <th className="ps-4">Buyer / Tenant Name</th>
              <th>Phone Number</th>
              <th>Inquired Property</th>
              <th>Channel Source</th>
              <th>Inquiry Date</th>
              <th className="text-end pe-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, idx) => (
              <tr key={idx}>
                <td className="ps-4 fw-bold text-dark">{lead.name}</td>
                <td>
                  <a
                    href={`tel:${lead.phone}`}
                    className="text-decoration-none text-dark fw-semibold"
                  >
                    {lead.phone}
                  </a>
                </td>
                <td className="small text-muted">{lead.property}</td>
                <td>
                  <span className="badge bg-light text-secondary border small">
                    {lead.source}
                  </span>
                </td>
                <td className="small text-muted">{lead.date}</td>
                <td className="text-end pe-4">
                  <a
                    href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-success fw-bold"
                  >
                    <i className="fa-brands fa-whatsapp me-1"></i> Chat
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
