import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Property } from '@/types/property';
import { AGENCY_CONFIG } from '@/data/properties';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const getBadgeClass = (deal: string) => {
    switch (deal) {
      case 'Heavy Deposit':
        return 'badge-heavy-deposit';
      case 'Commercial Gala':
      case 'For Rent':
        return 'badge-gala';
      default:
        return 'badge-deal-type';
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Taimur Bhai (Taimur Real Estate)! I am interested in: "${property.title}" (${property.price}, ${property.locality}). Please share video walkthrough & address details.`
  );
  const whatsappUrl = `https://wa.me/${AGENCY_CONFIG.whatsapp}?text=${whatsappMessage}`;

  return (
    <div className="property-card-modern d-flex flex-column h-100">
      {/* Image & Badges */}
      <div className="position-relative overflow-hidden" style={{ height: '230px' }}>
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-fit-cover"
          style={{ transition: 'transform 0.4s ease' }}
        />

        {/* Top Badges */}
        <div className="position-absolute top-0 start-0 m-3 d-flex flex-column gap-1">
          <span className={getBadgeClass(property.dealType)}>
            {property.dealType}
          </span>
          {property.loanAvailable && (
            <span className="badge bg-dark text-white fw-normal" style={{ fontSize: '11px' }}>
              <i className="fa-solid fa-check me-1 text-success"></i> 90% Loan Available
            </span>
          )}
        </div>

        {/* Price Tag Overlay */}
        <div
          className="position-absolute bottom-0 end-0 m-3 px-3 py-1 text-white fw-bold shadow-sm"
          style={{ backgroundColor: 'rgba(26, 26, 40, 0.9)', borderRadius: '6px', fontSize: '16px', fontFamily: 'Urbanist, sans-serif' }}
        >
          {property.price}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-3 d-flex flex-column flex-grow-1">
        {/* Locality & 80% Confidentiality Badge */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="text-muted small">
            <i className="fa-solid fa-location-dot me-1 text-danger"></i>
            {property.locality}, Bhiwandi
          </span>
          <span className="tag-verified-80">
            <i className="fa-solid fa-shield-cat"></i> 80% Verified
          </span>
        </div>

        {/* Title */}
        <h5 className="fw-bold mb-2 text-dark" style={{ fontSize: '17px', lineHeight: '1.3' }}>
          <Link href={`/properties/${property.slug}`} className="text-dark text-decoration-none">
            {property.title}
          </Link>
        </h5>

        {/* Subtitle / Floor approx */}
        <p className="text-muted small mb-3" style={{ fontSize: '13px' }}>
          <i className="fa-regular fa-building me-1 text-secondary"></i>
          {property.floor} • {property.possessionStatus}
        </p>

        {/* Amenities Bar */}
        <div className="d-flex justify-content-between align-items-center py-2 px-3 bg-light rounded-3 mb-3 text-secondary small">
          {property.bedrooms > 0 ? (
            <div className="d-flex align-items-center gap-1">
              <i className="fa-solid fa-bed" style={{ color: '#aa8453' }}></i>
              <span>{property.bedrooms} Bed</span>
            </div>
          ) : (
            <div className="d-flex align-items-center gap-1">
              <i className="fa-solid fa-warehouse" style={{ color: '#aa8453' }}></i>
              <span>Gala</span>
            </div>
          )}

          <div className="d-flex align-items-center gap-1">
            <i className="fa-solid fa-bath" style={{ color: '#aa8453' }}></i>
            <span>{property.bathrooms} Bath</span>
          </div>

          <div className="d-flex align-items-center gap-1">
            <i className="fa-solid fa-ruler-combined" style={{ color: '#aa8453' }}></i>
            <span>{property.carpetArea}</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="d-flex gap-2 mt-auto pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-success flex-grow-1 d-flex align-items-center justify-content-center gap-1 py-2 fw-semibold"
            style={{ borderRadius: '6px' }}
          >
            <i className="fa-brands fa-whatsapp fs-6"></i>
            <span>WhatsApp Agent</span>
          </a>

          <Link
            href={`/properties/${property.slug}`}
            className="btn btn-sm btn-outline-dark d-flex align-items-center justify-content-center px-3 py-2 fw-semibold"
            style={{ borderRadius: '6px' }}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
