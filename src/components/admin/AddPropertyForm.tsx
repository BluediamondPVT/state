'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LOCALITIES } from '@/data/properties';
import ImageUploadDropzone from '@/components/admin/ImageUploadDropzone';
import toast from 'react-hot-toast';

export default function AddPropertyForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    title: '',
    slug: '',
    type: '1 BHK',
    dealType: 'For Sale',
    price: '',
    priceNumeric: 0,
    priceLabel: 'Negotiable (Loan Available)',
    locality: 'Millat Nagar 1 & 2',
    carpetArea: '',
    superArea: '',
    floor: 'Middle Floor of 7-Storey Tower',
    bedrooms: 1,
    bathrooms: 1,
    balconies: 1,
    waterSupply: '24 Hours Municipal Water + Storage',
    furnishing: 'Semi-Furnished' as 'Unfurnished' | 'Semi-Furnished' | 'Fully Furnished',
    possessionStatus: 'Ready to Move' as 'Ready to Move' | 'Under Construction',
    loanAvailable: true,
    featured: true,
    description: '',
    image: '',
    highlights: 'Gated Community with 24x7 Security, Bank Loan Approved (Up to 90%), Near Main Road & Transport',
    nearbyLandmarks: 'Bus Stop - 200m, Market - 100m, School & Clinics - 400m',
  });

  // Auto-generate slug when title changes
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const titleVal = e.target.value;
    const autoSlug = titleVal
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 50);

    setForm((prev) => ({
      ...prev,
      title: titleVal,
      slug: prev.slug === '' || prev.slug === autoSlug.slice(0, -1) ? autoSlug : prev.slug,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.image) {
      toast.error('Please upload a cover photo for this property.');
      return;
    }

    if (!form.title || !form.price || !form.carpetArea) {
      toast.error('Please fill in all required fields (Title, Price, Carpet Area).');
      return;
    }

    // Auto-calculate numeric price if 0
    let numeric = form.priceNumeric;
    if (numeric <= 0) {
      const match = form.price.match(/(\d+(?:\.\d+)?)/);
      if (match) {
        const val = parseFloat(match[1]);
        if (form.price.toLowerCase().includes('lakh')) numeric = val * 100000;
        else if (form.price.toLowerCase().includes('crore') || form.price.toLowerCase().includes('cr')) numeric = val * 10000000;
        else numeric = val;
      } else {
        numeric = 100000;
      }
    }

    const payload = {
      title: form.title.trim(),
      slug: (form.slug.trim() || `prop-${Date.now()}`).toLowerCase(),
      type: form.type,
      dealType: form.dealType,
      price: form.price.trim(),
      priceNumeric: numeric,
      priceLabel: form.priceLabel.trim(),
      locality: form.locality.trim(),
      city: 'Bhiwandi',
      carpetArea: form.carpetArea.trim(),
      superArea: form.superArea.trim(),
      bedrooms: Number(form.bedrooms),
      bathrooms: Number(form.bathrooms),
      balconies: Number(form.balconies),
      floor: form.floor.trim(),
      furnishing: form.furnishing,
      waterSupply: form.waterSupply.trim(),
      possessionStatus: form.possessionStatus,
      loanAvailable: Boolean(form.loanAvailable),
      featured: Boolean(form.featured),
      published: true,
      image: form.image,
      gallery: [form.image],
      description:
        form.description.trim() ||
        `Prime ${form.type} located in ${form.locality}, Bhiwandi. Highly accessible location with complete civic amenities and transport connectivity.`,
      highlights: form.highlights
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
      nearbyLandmarks: form.nearbyLandmarks
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
    };

    setIsSubmitting(true);
    const toastId = toast.loading('Publishing property to inventory...');

    try {
      const res = await fetch('/api/properties', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        toast.error(data.error || 'Failed to publish property.', { id: toastId });
        setIsSubmitting(false);
        return;
      }

      toast.success('Property published successfully!', { id: toastId });

      setTimeout(() => {
        router.push('/admin');
        router.refresh();
      }, 700);
    } catch (err) {
      console.error('Submission error:', err);
      toast.error('Network error while publishing.', { id: toastId });
      setIsSubmitting(false);
    }
  };

  return (
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
            Never enter exact flat numbers (e.g. Flat 402). Use general indicators like{' '}
            <em>&quot;4th Floor of 12-Storey Tower&quot;</em> so buyers connect directly through our registered desk.
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
            placeholder="e.g. Modern 2 BHK Flat with Balcony near Dhamankar Naka Flyover"
            required
            value={form.title}
            onChange={handleTitleChange}
          />
        </div>

        <div className="col-md-4">
          <label className="form-label small fw-bold text-muted">SEO URL Slug *</label>
          <input
            type="text"
            className="neo-input"
            placeholder="e.g. modern-2bhk-dhamankar-naka"
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
          <label className="form-label small fw-bold text-muted">Display Price *</label>
          <input
            type="text"
            className="neo-input"
            placeholder="e.g. ₹34.50 Lakhs or ₹3.50 Lakhs Deposit"
            required
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
        </div>

        <div className="col-md-4">
          <label className="form-label small fw-bold text-muted">Numeric Amount (₹) *</label>
          <input
            type="number"
            className="neo-input"
            placeholder="e.g. 3450000"
            value={form.priceNumeric || ''}
            onChange={(e) => setForm({ ...form, priceNumeric: Number(e.target.value) })}
          />
          <small className="text-muted" style={{ fontSize: '11px' }}>Used for sorting and filters</small>
        </div>

        <div className="col-md-4">
          <label className="form-label small fw-bold text-muted">Price Tag Label</label>
          <input
            type="text"
            className="neo-input"
            placeholder="e.g. Negotiable | Bank Loan Available"
            value={form.priceLabel}
            onChange={(e) => setForm({ ...form, priceLabel: e.target.value })}
          />
        </div>

        <div className="col-md-6">
          <div className="neo-card p-3 d-flex align-items-center justify-content-between">
            <div>
              <span className="fw-bold text-dark d-block" style={{ fontSize: '13px' }}>Bank Loan Support</span>
              <span className="text-muted" style={{ fontSize: '11px' }}>Nationalized &amp; Private banks</span>
            </div>
            <div className="form-check form-switch mb-0">
              <input
                className="form-check-input"
                type="checkbox"
                id="loanAvailable"
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
              <span className="text-muted" style={{ fontSize: '11px' }}>Show on Homepage Spotlight</span>
            </div>
            <div className="form-check form-switch mb-0">
              <input
                className="form-check-input"
                type="checkbox"
                id="featuredProperty"
                checked={form.featured}
                onChange={(e) => setForm({ ...form, featured: e.target.checked })}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Area, Floor & Amenities */}
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
            placeholder="e.g. 685 Sq.Ft"
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
            placeholder="e.g. 920 Sq.Ft"
            value={form.superArea}
            onChange={(e) => setForm({ ...form, superArea: e.target.value })}
          />
        </div>

        <div className="col-md-3">
          <label className="form-label small fw-bold text-muted">Floor Details *</label>
          <input
            type="text"
            className="neo-input"
            placeholder="e.g. 3rd of 7 Floors with Lift"
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
          <label className="form-label small fw-bold text-muted">Water Supply *</label>
          <input
            type="text"
            className="neo-input"
            placeholder="e.g. 24 Hours Municipal Water + Storage"
            required
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

      {/* 4. Media & Cloudflare R2 Upload */}
      <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom" style={{ borderColor: 'rgba(255,255,255,0.7)' }}>
        <span className="neo-circle" style={{ width: '28px', height: '28px', fontSize: '12px', color: 'var(--neo-primary)' }}>4</span>
        <h5 className="fw-bold text-dark mb-0" style={{ fontSize: '16px' }}>Property Photo Upload</h5>
      </div>
      <div className="mb-4">
        <ImageUploadDropzone
          label="Primary Cover Photo"
          required
          currentValue={form.image}
          onUploadSuccess={(url) => setForm((prev) => ({ ...prev, image: url }))}
        />
      </div>

      {/* 5. Description & SEO Highlights */}
      <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom" style={{ borderColor: 'rgba(255,255,255,0.7)' }}>
        <span className="neo-circle" style={{ width: '28px', height: '28px', fontSize: '12px', color: 'var(--neo-primary)' }}>5</span>
        <h5 className="fw-bold text-dark mb-0" style={{ fontSize: '16px' }}>Highlights &amp; Description</h5>
      </div>
      <div className="row g-3 mb-4">
        <div className="col-12">
          <label className="form-label small fw-bold text-muted">Public Description</label>
          <textarea
            className="neo-input"
            rows={4}
            placeholder="Describe key features, cross-ventilation, proximity to markets, building amenities..."
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

      {/* Submit Action */}
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
              <i className="fa-solid fa-spinner fa-spin me-2"></i> Publishing Property...
            </span>
          ) : (
            <span>
              <i className="fa-solid fa-cloud-arrow-up me-2"></i> Publish Property
            </span>
          )}
        </button>
      </div>
    </form>
  );
}
