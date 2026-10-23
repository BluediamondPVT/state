import React from 'react';
import AddPropertyHeader from '@/components/admin/AddPropertyHeader';
import AddPropertyForm from '@/components/admin/AddPropertyForm';

export const metadata = {
  title: 'Add Property | Bhiwandi Estate Agent Portal',
  description: 'Publish a new residential flat, heavy deposit deal, or commercial gala in Bhiwandi.',
};

export default function AddPropertyPage() {
  return (
    <div>
      <AddPropertyHeader />
      <div className="row justify-content-center">
        <div className="col-lg-11 col-xl-10">
          <AddPropertyForm />
        </div>
      </div>
    </div>
  );
}
