import React from 'react';
import AddPropertyHeader from '@/components/admin/AddPropertyHeader';
import AddPropertyForm from '@/components/admin/AddPropertyForm';

export const metadata = {
  title: 'Add Property | Bhiwandi Estate Agent Portal',
  description: 'Publish a new residential flat, heavy deposit deal, or commercial gala in Bhiwandi.',
};

export default function AddPropertyPage() {
  return (
    <main className="bg-light min-vh-100">
      {/* 1. Header Toolbar */}
      <AddPropertyHeader />

      {/* 2. Property Publishing Form */}
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <AddPropertyForm />
          </div>
        </div>
      </div>
    </main>
  );
}
