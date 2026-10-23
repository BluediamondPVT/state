import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PropertyInquirySidebar from '@/components/PropertyInquirySidebar';
import PropertyHeaderBanner from '@/components/property-detail/PropertyHeaderBanner';
import PropertyOverviewSpecs from '@/components/property-detail/PropertyOverviewSpecs';
import PropertyDescription from '@/components/property-detail/PropertyDescription';
import PropertyHighlights from '@/components/property-detail/PropertyHighlights';
import PropertyNearbyLandmarks from '@/components/property-detail/PropertyNearbyLandmarks';
import PropertyFeaturedImage from '@/components/property-detail/PropertyFeaturedImage';
import SimilarProperties from '@/components/property-detail/SimilarProperties';
import { PROPERTIES } from '@/data/properties';

export function generateStaticParams() {
  return PROPERTIES.map((p) => ({
    slug: p.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = PROPERTIES.find((p) => p.slug === slug);
  if (!property) return { title: 'Property Not Found | Taimur Real Estate' };

  return {
    title: `${property.title} in ${property.locality}, Bhiwandi | ₹${property.price}`,
    description: `${property.type} ${property.dealType} in ${property.locality}, Bhiwandi. Carpet Area: ${property.carpetArea}. 80% privacy protected with direct broker assistance.`,
  };
}

export default async function PropertySinglePage({ params }: PageProps) {
  const { slug } = await params;
  const property = PROPERTIES.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  const related = PROPERTIES.filter(
    (p) => p.id !== property.id && (p.locality === property.locality || p.type === property.type)
  ).slice(0, 2);

  return (
    <main>
      {/* 1. Header Banner & Breadcrumb */}
      <PropertyHeaderBanner property={property} />

      <div className="container py-5">
        <div className="row g-5">
          {/* Main Left Column */}
          <div className="col-lg-8">
            {/* Featured Image */}
            <PropertyFeaturedImage property={property} />

            {/* Overview & Specs */}
            <PropertyOverviewSpecs property={property} />

            {/* Description & 80% Verification Shield */}
            <PropertyDescription property={property} />

            {/* Highlights & Amenities */}
            <PropertyHighlights property={property} />

            {/* Nearby Connectivity & Landmarks */}
            <PropertyNearbyLandmarks property={property} />
          </div>

          {/* Right Lead Capture Sidebar */}
          <div className="col-lg-4">
            <PropertyInquirySidebar property={property} />
          </div>
        </div>

        {/* Similar Properties */}
        <SimilarProperties properties={related} />
      </div>
    </main>
  );
}
