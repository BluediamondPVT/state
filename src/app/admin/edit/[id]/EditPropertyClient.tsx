'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LOCALITIES } from '@/data/properties';
import ImageUploadDropzone from '@/components/admin/ImageUploadDropzone';
import toast from 'react-hot-toast';

interface Props {
  id: string;
}

export default function EditPropertyClient({ id }: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    title: '',
    slug: '',
    type: '1 BHK',
    dealType: 'For Sale',
    price: '',
    priceNumeric: 0,
    priceLabel: '',
    locality: 'Millat Nagar 1 & 2',
    carpetArea: '',
    superArea: '',
    floor: '',
    bedrooms: 1,
    bathrooms: 1,
    balconies: 0,
    waterSupply: '',
    furnishing: 'Semi-Furnished' as 'Unfurnished' | 'Semi-Furnished' | 'Fully Furnished',
    possessionStatus: 'Ready to Move' as 'Ready to Move' | 'Under Construction',
    loanAvailable: true,
    featured: false,
    description: '',
    image: '',
    highlights: '',
    nearbyLandmarks: '',
  });

  // Fetch existing property details
  useEffect(() => {
    async function loadProperty() {
      try {
        const res = await fetch(`/api/properties/${id}`);
        const data = await res.json();
        if (data.success && data.property) {
          const p = data.property;
          setForm({
            title: p.title || '',
            slug: p.slug || '',
            type: p.type || '1 BHK',
            dealType: p.dealType || 'For Sale',
            price: p.price || '',
            priceNumeric: p.priceNumeric || 0,
            priceLabel: p.priceLabel || '',
            locality: p.locality || 'Millat Nagar 1 & 2',
            carpetArea: p.carpetArea || '',
            superArea: p.superArea || '',
            floor: p.floor || '',
            bedrooms: p.bedrooms ?? 1,
            bathrooms: p.bathrooms ?? 1,
            balconies: p.balconies ?? 0,
            waterSupply: p.waterSupply || '',
            furnishing: p.furnishing || 'Semi-Furnished',
            possessionStatus: p.possessionStatus || 'Ready to Move',
            loanAvailable: Boolean(p.loanAvailable),
            featured: Boolean(p.featured),
            description: p.description || '',
            image: p.image || '',
            highlights: Array.isArray(p.highlights) ? p.highlights.join(', ') : '',
            nearbyLandmarks: Array.isArray(p.nearbyLandmarks) ? p.nearbyLandmarks.join(', ') : '',
          });
        } else {
          toast.error('Property not found');
        }
      } catch (err) {
        console.error('Failed to load property for editing:', err);
        toast.error('Failed to load property');
      } finally {
        setLoading(false);
      }
    }
    loadProperty();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.title || !form.price || !form.carpetArea) {
      toast.error('Please fill in Title, Price, and Carpet Area.');
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading('Updating property...');

    try {
      const payload = {
        title: form.title.trim(),
        slug: (form.slug.trim() || `prop-${Date.now()}`).toLowerCase(),
        type: form.type,
        dealType: form.dealType,
        price: form.price.trim(),
        priceNumeric: Number(form.priceNumeric) || 0,
        priceLabel: form.priceLabel.trim(),
        locality: form.locality.trim(),
        carpetArea: form.carpetArea.trim(),
        superArea: form.superArea.trim(),
        floor: form.floor.trim(),
        bedrooms: Number(form.bedrooms),
        bathrooms: Number(form.bathrooms),
        balconies: Number(form.balconies),
        furnishing: form.furnishing,
        waterSupply: form.waterSupply.trim(),
        possessionStatus: form.possessionStatus,
        loanAvailable: Boolean(form.loanAvailable),
        featured: Boolean(form.featured),
        image: form.image,
        description: form.description.trim(),
        highlights: form.highlights.split(',').map((s) => s.trim()).filter(Boolean),
        nearbyLandmarks: form.nearbyLandmarks.split(',').map((s) => s.trim()).filter(Boolean),
      };

      const res = await fetch(`/api/properties/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        toast.error(data.error || 'Failed to update property.', { id: toastId });
        setIsSubmitting(false);
        return;
      }

      toast.success('Property updated successfully!', { id: toastId });

      setTimeout(() => {
        router.push('/admin');
        router.refresh();
      }, 700);
    } catch {
      toast.error('Network error while updating.', { id: toastId });
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="neo-card p-5 text-center my-4">
        <i className="fa-solid fa-spinner fa-spin fs-1 mb-3" style={{ color: 'var(--neo-primary)' }}></i>
        <p className="text-muted fw-semibold">Loading property details...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Header Toolbar */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <div>
          <Link href="/admin" className="neo-btn text-decoration-none mb-2" style={{ padding: '6px 12px', fontSize: '13px' }}>
            <i className="fa-solid fa-arrow-left"></i>
            <span>Back to Inventory</span>
          </Link>
          <h3 className="fw-bold text-dark mb-0 mt-2">
            Edit Property Listing
          </h3>
          <p className="text-muted small mb-0">
            Editing: <span className="fw-bold text-dark">{form.title || id}</span> • ID: #{id.slice(0, 8)}
          </p>
        </div>
        <span className="neo-inset px-3 py-2 small fw-bold" style={{ color: 'var(--neo-primary)' }}>
          <i className="fa-solid fa-shield-halved me-1"></i> Broker Protected
        </span>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-11 col-xl-10">
          <form onSubmit={handleSubmit} className="neo-card p-4 p-md-5">
            {/* Privacy Notice Banner */}
            <div className="neo-inset p-3 d-flex align-items-center gap-3 mb-4" role="alert">
              <div
                className="neo-circle flex-shrink-0"
                style={{ width: '42px', height: '42px', color: 'var(--neo-primary)', fontSize: '18px' }}
              >
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <div>
                <strong className="text-dark d-block mb-1" style={{ fontSize: '13px' }}>
                  Taimur 80% Confidentiality Shield Active:
                </strong>
                <span className="text-muted" style={{ fontSize: '12px' }}>
                  Never expose exact flat numbers publicly. All physical site visits and negotiations are routed exclusively through our registered desk.
                </span>
              </div>
            </div>

            {/* 1. Basic Information */}
            <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom" style={{ borderColor: 'rgba(255,255,255,0.7)' }}>
              <span className="neo-circle" style={{ width: '28px', height: '28px', fontSize: '12px', color: 'var(--neo-primary)' }}>1</span>
              <h5 className="fw-bold text-dark mb-0" style={{ fontSize: '16px' }}>Basic Property Details</h5>
            </div>
            <div className="row g-3 mb-4">
              <div className="col-md-8">
                <label className="form-label small fw-bold text-muted">Property Display Title *</label>
                <input
                  type="text"
                  className="neo-input"
                  required
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label small fw-bold text-muted">SEO URL Slug *</label>
                <input
                  type="text"
                  className="neo-input"
                  required
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value })}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label small fw-bold text-muted">Property Type *</label>
                <select
                  className="neo-input"
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                >
                  <option value="1 BHK">1 BHK Flat</option>
                  <option value="2 BHK">2 BHK Flat</option>
                  <option value="3 BHK">3 BHK Luxury Flat</option>
                  <option value="1 RK">1 RK Budget Room</option>
                  <option value="Commercial Gala">Commercial Gala / Warehouse</option>
                  <option value="Shop">Retail Shop</option>
                  <option value="Warehouse / Godown">Warehouse / Logistics Godown</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label small fw-bold text-muted">Deal Category *</label>
                <select
                  className="neo-input"
                  value={form.dealType}
                  onChange={(e) => setForm({ ...form, dealType: e.target.value })}
                >
                  <option value="For Sale">For Sale (Direct Purchase)</option>
                  <option value="Heavy Deposit">Heavy Deposit (Zero Monthly Rent)</option>
                  <option value="For Rent">For Rent (Monthly Agreement)</option>
                  <option value="Low Downpayment">Low Downpayment Offer</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label small fw-bold text-muted">Bhiwandi Locality *</label>
                <select
                  className="neo-input"
                  value={form.locality}
                  onChange={(e) => setForm({ ...form, locality: e.target.value })}
                >
                  {LOCALITIES.map((loc) => (
                    <option key={loc.id} value={loc.name}>
                      {loc.name}
                    </option>
                  ))}
                  <option value="Millat Nagar 1">Millat Nagar 1</option>
                  <option value="Chavindra">Chavindra</option>
                  <option value="VP Naka">VP Naka</option>
                  <option value="Narpoli">Narpoli</option>
                </select>
              </div>
            </div>

            {/* 2. Pricing & Financials */}
            <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom" style={{ borderColor: 'rgba(255,255,255,0.7)' }}>
              <span className="neo-circle" style={{ width: '28px', height: '28px', fontSize: '12px', color: 'var(--neo-primary)' }}>2</span>
              <h5 className="fw-bold text-dark mb-0" style={{ fontSize: '16px' }}>Pricing &amp; Financials</h5>
            </div>
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <label className="form-label small fw-bold text-muted">Display Price String *</label>
                <input
                  type="text"
                  className="neo-input"
                  required
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label small fw-bold text-muted">Numeric Amount (₹)</label>
                <input
                  type="number"
                  className="neo-input"
                  value={form.priceNumeric || ''}
                  onChange={(e) => setForm({ ...form, priceNumeric: Number(e.target.value) })}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label small fw-bold text-muted">Price Tag Label</label>
                <input
                  type="text"
                  className="neo-input"
                  value={form.priceLabel}
                  onChange={(e) => setForm({ ...form, priceLabel: e.target.value })}
                />
              </div>

              <div className="col-md-6">
                <div className="neo-card p-3 d-flex align-items-center justify-content-between">
                  <div>
                    <span className="fw-bold text-dark d-block" style={{ fontSize: '13px' }}>Bank Loan Available</span>
                    <span className="text-muted" style={{ fontSize: '11px' }}>Show Nationalized / Private Bank Loan badge</span>
                  </div>
                  <div className="form-check form-switch mb-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="editLoanAvailable"
                      checked={form.loanAvailable}
                      onChange={(e) => setForm({ ...form, loanAvailable: e.target.checked })}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="neo-card p-3 d-flex align-items-center justify-content-between">
                  <div>
                    <span className="fw-bold text-dark d-block" style={{ fontSize: '13px' }}>Featured Listing</span>
                    <span className="text-muted" style={{ fontSize: '11px' }}>Show in Homepage Spotlight Deals</span>
                  </div>
                  <div className="form-check form-switch mb-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="editFeaturedProperty"
                      checked={form.featured}
                      onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Dimensions & Specifications */}
            <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom" style={{ borderColor: 'rgba(255,255,255,0.7)' }}>
              <span className="neo-circle" style={{ width: '28px', height: '28px', fontSize: '12px', color: 'var(--neo-primary)' }}>3</span>
              <h5 className="fw-bold text-dark mb-0" style={{ fontSize: '16px' }}>Dimensions &amp; Specifications</h5>
            </div>
            <div className="row g-3 mb-4">
              <div className="col-md-3">
                <label className="form-label small fw-bold text-muted">Carpet Area *</label>
                <input
                  type="text"
                  className="neo-input"
                  required
                  value={form.carpetArea}
                  onChange={(e) => setForm({ ...form, carpetArea: e.target.value })}
                />
              </div>

              <div className="col-md-3">
                <label className="form-label small fw-bold text-muted">Super Built-up Area</label>
                <input
                  type="text"
                  className="neo-input"
                  value={form.superArea}
                  onChange={(e) => setForm({ ...form, superArea: e.target.value })}
                />
              </div>

              <div className="col-md-3">
                <label className="form-label small fw-bold text-muted">Floor Details *</label>
                <input
                  type="text"
                  className="neo-input"
                  required
                  value={form.floor}
                  onChange={(e) => setForm({ ...form, floor: e.target.value })}
                />
              </div>

              <div className="col-md-3">
                <label className="form-label small fw-bold text-muted">Furnishing Status</label>
                <select
                  className="neo-input"
                  value={form.furnishing}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      furnishing: e.target.value as 'Unfurnished' | 'Semi-Furnished' | 'Fully Furnished',
                    })
                  }
                >
                  <option value="Unfurnished">Unfurnished</option>
                  <option value="Semi-Furnished">Semi-Furnished</option>
                  <option value="Fully Furnished">Fully Furnished</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label small fw-bold text-muted">Bedrooms</label>
                <input
                  type="number"
                  min={0}
                  className="neo-input"
                  value={form.bedrooms}
                  onChange={(e) => setForm({ ...form, bedrooms: Number(e.target.value) })}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label small fw-bold text-muted">Bathrooms</label>
                <input
                  type="number"
                  min={0}
                  className="neo-input"
                  value={form.bathrooms}
                  onChange={(e) => setForm({ ...form, bathrooms: Number(e.target.value) })}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label small fw-bold text-muted">Balconies</label>
                <input
                  type="number"
                  min={0}
                  className="neo-input"
                  value={form.balconies}
                  onChange={(e) => setForm({ ...form, balconies: Number(e.target.value) })}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label small fw-bold text-muted">Water Supply</label>
                <input
                  type="text"
                  className="neo-input"
                  value={form.waterSupply}
                  onChange={(e) => setForm({ ...form, waterSupply: e.target.value })}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label small fw-bold text-muted">Possession Status</label>
                <select
                  className="neo-input"
                  value={form.possessionStatus}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      possessionStatus: e.target.value as 'Ready to Move' | 'Under Construction',
                    })
                  }
                >
                  <option value="Ready to Move">Ready to Move</option>
                  <option value="Under Construction">Under Construction</option>
                </select>
              </div>
            </div>

            {/* 4. Update Cover Photo */}
            <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom" style={{ borderColor: 'rgba(255,255,255,0.7)' }}>
              <span className="neo-circle" style={{ width: '28px', height: '28px', fontSize: '12px', color: 'var(--neo-primary)' }}>4</span>
              <h5 className="fw-bold text-dark mb-0" style={{ fontSize: '16px' }}>Update Cover Photo</h5>
            </div>
            <div className="mb-4">
              <ImageUploadDropzone
                label="Cover Photo"
                currentValue={form.image}
                onUploadSuccess={(url) => setForm((prev) => ({ ...prev, image: url }))}
              />
            </div>

            {/* 5. Description & Highlights */}
            <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom" style={{ borderColor: 'rgba(255,255,255,0.7)' }}>
              <span className="neo-circle" style={{ width: '28px', height: '28px', fontSize: '12px', color: 'var(--neo-primary)' }}>5</span>
              <h5 className="fw-bold text-dark mb-0" style={{ fontSize: '16px' }}>Description &amp; Highlights</h5>
            </div>
            <div className="row g-3 mb-4">
              <div className="col-12">
                <label className="form-label small fw-bold text-muted">Public Description</label>
                <textarea
                  className="neo-input"
                  rows={4}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                ></textarea>
              </div>

              <div className="col-md-6">
                <label className="form-label small fw-bold text-muted">Key Highlights (Comma-separated)</label>
                <input
                  type="text"
                  className="neo-input"
                  value={form.highlights}
                  onChange={(e) => setForm({ ...form, highlights: e.target.value })}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label small fw-bold text-muted">Nearby Landmarks (Comma-separated)</label>
                <input
                  type="text"
                  className="neo-input"
                  value={form.nearbyLandmarks}
                  onChange={(e) => setForm({ ...form, nearbyLandmarks: e.target.value })}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex justify-content-end gap-3 pt-3 border-top" style={{ borderColor: 'rgba(255,255,255,0.7)' }}>
              <button
                type="button"
                onClick={() => router.push('/admin')}
                className="neo-btn px-4"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="neo-btn neo-btn-primary px-5 py-3 fs-6"
              >
                {isSubmitting ? (
                  <span>
                    <i className="fa-solid fa-spinner fa-spin me-2"></i> Saving Changes...
                  </span>
                ) : (
                  <span>
                    <i className="fa-solid fa-floppy-disk me-2"></i> Save Changes
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
