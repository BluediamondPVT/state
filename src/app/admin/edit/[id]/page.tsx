import React, { Suspense } from 'react';
import EditPropertyClient from './EditPropertyClient';
import { PROPERTIES } from '@/data/properties';

export function generateStaticParams() {
  return PROPERTIES.map((p) => ({
    id: p.id,
  }));
}

export default async function EditPropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Suspense
      fallback={
        <div className="neo-card p-5 text-center my-4">
          <i className="fa-solid fa-spinner fa-spin fs-1 mb-3" style={{ color: 'var(--neo-primary)' }}></i>
          <p className="text-muted fw-semibold">Loading property editor...</p>
        </div>
      }
    >
      <EditPropertyClient id={id} />
    </Suspense>
  );
}
