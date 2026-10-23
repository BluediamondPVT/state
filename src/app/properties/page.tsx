'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PropertiesHeaderBanner from '@/components/properties/PropertiesHeaderBanner';
import PropertyFilters from '@/components/properties/PropertyFilters';
import PropertiesListGrid from '@/components/properties/PropertiesListGrid';
import { PROPERTIES } from '@/data/properties';
import { Property } from '@/types/property';

function PropertiesContent() {
  const searchParams = useSearchParams();

  const [properties, setProperties] = useState<Property[]>(PROPERTIES);
  const [loading, setLoading] = useState(true);

  const [selectedType, setSelectedType] = useState<string>(searchParams.get('type') || '');
  const [selectedLocality, setSelectedLocality] = useState<string>(searchParams.get('locality') || '');
  const [selectedDeal, setSelectedDeal] = useState<string>(searchParams.get('deal') || '');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    async function loadProperties() {
      try {
        const res = await fetch('/api/properties');
        const data = await res.json();
        if (data.success && Array.isArray(data.properties) && data.properties.length > 0) {
          setProperties(data.properties);
        }
      } catch (err) {
        console.warn('Failed to fetch dynamic properties, using curated list:', err);
      } finally {
        setLoading(false);
      }
    }
    loadProperties();
  }, []);

  useEffect(() => {
    if (searchParams.get('type')) setSelectedType(searchParams.get('type') || '');
    if (searchParams.get('locality')) setSelectedLocality(searchParams.get('locality') || '');
    if (searchParams.get('deal')) setSelectedDeal(searchParams.get('deal') || '');
  }, [searchParams]);

  const filtered = properties.filter((p) => {
    if (selectedType && p.type !== selectedType) return false;
    if (selectedLocality && p.locality !== selectedLocality) return false;
    if (selectedDeal && p.dealType !== selectedDeal) return false;
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      const matchTitle = p.title.toLowerCase().includes(term);
      const matchLoc = p.locality.toLowerCase().includes(term);
      const matchDesc = p.description.toLowerCase().includes(term);
      if (!matchTitle && !matchLoc && !matchDesc) return false;
    }
    return true;
  });

  const resetFilters = () => {
    setSelectedType('');
    setSelectedLocality('');
    setSelectedDeal('');
    setSearchTerm('');
  };

  return (
    <div className="bg-light py-5">
      <div className="container">
        {/* Breadcrumb & Header Banner */}
        <PropertiesHeaderBanner count={filtered.length} />

        <div className="row g-4">
          {/* Left Filter Sidebar */}
          <div className="col-lg-3">
            <PropertyFilters
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              selectedLocality={selectedLocality}
              setSelectedLocality={setSelectedLocality}
              selectedDeal={selectedDeal}
              setSelectedDeal={setSelectedDeal}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              resetFilters={resetFilters}
            />
          </div>

          {/* Right Properties List */}
          <div className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="small text-muted fw-semibold">
                Available Verified Units:{' '}
                <strong>{loading ? 'Updating...' : filtered.length}</strong>
              </span>
            </div>

            {loading ? (
              <div className="card border-0 shadow-sm rounded-4 p-5 text-center bg-white">
                <i className="fa-solid fa-spinner fa-spin fs-2 text-muted mb-3"></i>
                <p className="text-muted small">Loading live inventory from Taimur Real Estate...</p>
              </div>
            ) : (
              <PropertiesListGrid properties={filtered} resetFilters={resetFilters} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <main>
      <Suspense fallback={<div className="container py-5 text-center">Loading properties...</div>}>
        <PropertiesContent />
      </Suspense>
    </main>
  );
}
