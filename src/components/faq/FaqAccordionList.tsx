import React from 'react';

export interface FaqData {
  category: string;
  q: string;
  a: string;
}

interface Props {
  faqs: FaqData[];
  activeFaq: number | null;
  setActiveFaq: (idx: number | null) => void;
}

export default function FaqAccordionList({ faqs, activeFaq, setActiveFaq }: Props) {
  return (
    <div className="bb-accordion ac-single-show accordion-plus-left">
      {faqs.map((item, idx) => (
        <div
          className="ac-card mb-3 border rounded-3 overflow-hidden shadow-sm"
          key={idx}
          style={{ borderColor: activeFaq === idx ? '#aa8453' : '#e5e7eb' }}
        >
          <div
            className={`ac-toggle d-flex justify-content-between align-items-center p-3 p-lg-4 ${
              activeFaq === idx ? 'bg-light' : 'bg-white'
            }`}
            style={{ cursor: 'pointer', fontWeight: 600, color: '#282838' }}
            onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
          >
            <span className="pe-3 fs-6">{item.q}</span>
            <i
              className={`fa-solid ${activeFaq === idx ? 'fa-minus' : 'fa-plus'}`}
              style={{ color: '#aa8453', minWidth: '18px' }}
            ></i>
          </div>
          {activeFaq === idx && (
            <div className="ac-collapse p-3 p-lg-4 bg-white border-top">
              <p className="mb-0 text-secondary" style={{ lineHeight: '1.8', fontSize: '15px' }}>
                {item.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
