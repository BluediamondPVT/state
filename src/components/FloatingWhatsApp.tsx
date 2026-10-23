'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { AGENCY_CONFIG } from '@/data/properties';

export default function FloatingWhatsApp() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin') || pathname === '/login') {
    return null;
  }

  const message = encodeURIComponent(
    'Hello Taimur Bhai (Taimur Real Estate)! I am looking for property in Bhiwandi. Please share available flat / gala options.'
  );
  const whatsappUrl = `https://wa.me/${AGENCY_CONFIG.whatsapp}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      title="Chat directly with Bhiwandi Real Estate Consultant"
      aria-label="Chat on WhatsApp"
    >
      <div className="whatsapp-pulse-ring"></div>
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
}
