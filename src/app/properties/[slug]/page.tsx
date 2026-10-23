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
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL, getPropertyJsonLd } from '@/lib/seo';
import { PROPERTIES } from '@/data/properties';
import prisma, { isDatabaseConfigured } from '@/lib/prisma';
import { Property } from '@/types/property';

export function generateStaticParams() {
  return PROPERTIES.map((p) => ({
    slug: p.slug,
  }));
}

async function getProperty(slug: string): Promise<Property | null> {
  if (isDatabaseConfigured()) {
    try {
      const dbProperty = await prisma.property.findUnique({
        where: { slug },
      });

      if (dbProperty) {
        return {
          id: dbProperty.id,
          slug: dbProperty.slug,
          title: dbProperty.title,
          type: dbProperty.type as Property['type'],
          dealType: dbProperty.dealType as Property['dealType'],
          price: dbProperty.price,
          priceNumeric: dbProperty.priceNumeric,
          priceLabel: dbProperty.priceLabel || undefined,
          locality: dbProperty.locality,
          city: dbProperty.city,
          carpetArea: dbProperty.carpetArea,
          superArea: dbProperty.superArea || undefined,
          bedrooms: dbProperty.bedrooms,
          bathrooms: dbProperty.bathrooms,
          balconies: dbProperty.balconies || 0,
          floor: dbProperty.floor,
          furnishing: dbProperty.furnishing as Property['furnishing'],
          waterSupply: dbProperty.waterSupply,
          possessionStatus: dbProperty.possessionStatus as Property['possessionStatus'],
          loanAvailable: dbProperty.loanAvailable,
          featured: dbProperty.featured,
          image: dbProperty.image,
          gallery: dbProperty.gallery,
          description: dbProperty.description,
          highlights: dbProperty.highlights,
          nearbyLandmarks: dbProperty.nearbyLandmarks,
        };
      }
    } catch (err) {
      console.warn('Prisma getProperty fallback to curated data:', err);
    }
  }

  const found = PROPERTIES.find((p) => p.slug === slug);
  return found || null;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = await getProperty(slug);
  if (!property) return { title: 'Property Not Found | Taimur Real Estate' };

  const canonicalUrl = `${SITE_URL}/properties/${property.slug}`;
  const imageUrl = property.image.startsWith('http')
    ? property.image
    : `${SITE_URL}${property.image}`;

  const title = `${property.title} in ${property.locality}, Bhiwandi | ₹${property.price}`;
  const description = `${property.type} for ${property.dealType} in ${property.locality}, Bhiwandi. Carpet Area: ${property.carpetArea}. Verified by Taimur Real Estate (+91 98222 70773).`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${property.title} - Taimur Real Estate`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function PropertySinglePage({ params }: PageProps) {
  const { slug } = await params;
  const property = await getProperty(slug);

  if (!property) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/properties/${property.slug}`;
  const schemaData = getPropertyJsonLd(property, canonicalUrl);

  const related = PROPERTIES.filter(
    (p) => p.id !== property.id && (p.locality === property.locality || p.type === property.type)
  ).slice(0, 2);

  return (
    <main>
      {/* Schema.org Structured Data */}
      <JsonLd data={schemaData} />

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
