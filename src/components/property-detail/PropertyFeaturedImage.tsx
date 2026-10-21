import React from 'react';
import Image from 'next/image';
import { Property } from '@/types/property';

interface PropertyFeaturedImageProps {
  property: Property;
}

export default function PropertyFeaturedImage({ property }: PropertyFeaturedImageProps) {
  return (
    <div className="card border-0 shadow-sm overflow-hidden rounded-4 mb-4 position-relative" style={{ minHeight: '320px', maxHeight: '520px', backgroundColor: '#f1f5f9' }}>
      <Image
        src={property.image}
        alt={property.title}
        width={1200}
        height={650}
        priority
        className="w-100 object-fit-cover"
        style={{ maxHeight: '520px', width: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}
