'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';

interface ImageUploadDropzoneProps {
  label?: string;
  currentValue?: string;
  onUploadSuccess: (url: string) => void;
  required?: boolean;
}

export default function ImageUploadDropzone({
  label = 'Cover Photo',
  currentValue = '',
  onUploadSuccess,
  required = false,
}: ImageUploadDropzoneProps) {
  const [preview, setPreview] = useState<string>(currentValue);
  const [isUploading, setIsUploading] = useState(false);
  const [storageUsed, setStorageUsed] = useState<'r2' | 'local' | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error('Selected image is too large (max 10MB).');
      return;
    }

    // Temporary local preview
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    setIsUploading(true);

    const toastId = toast.loading('Uploading photo...');

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        toast.error(data.error || 'Failed to upload photo.', { id: toastId });
        setIsUploading(false);
        return;
      }

      setPreview(data.url);
      setStorageUsed(data.storage);
      onUploadSuccess(data.url);

      const storageTag = data.storage === 'r2' ? 'Cloudflare R2' : 'Local Storage';
      toast.success(`Photo uploaded successfully to ${storageTag}!`, { id: toastId });
    } catch (err) {
      console.error('Upload exception:', err);
      toast.error('Network error while uploading photo.', { id: toastId });
    } finally {
      setIsUploading(false);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreview('');
    setStorageUsed(null);
    onUploadSuccess('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="mb-3">
      <label className="form-label small fw-bold text-muted d-flex justify-content-between">
        <span>
          {label} {required && <span className="text-danger">*</span>}
        </span>
        {storageUsed && (
          <span
            className="badge rounded-pill"
            style={{
              backgroundColor: storageUsed === 'r2' ? '#f59e0b' : '#10b981',
              fontSize: '11px',
            }}
          >
            {storageUsed === 'r2' ? 'Cloudflare R2' : 'Local Storage'}
          </span>
        )}
      </label>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/avif,image/jpg"
        className="d-none"
        onChange={handleFileChange}
      />

      {preview ? (
        <div
          className="position-relative neo-card p-0 overflow-hidden"
          style={{ height: '220px' }}
        >
          <Image
            src={preview}
            alt="Uploaded preview"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-fit-cover"
          />

          <div
            className="position-absolute bottom-0 start-0 end-0 p-3 d-flex justify-content-between align-items-center"
            style={{ background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85), transparent)' }}
          >
            <button
              type="button"
              disabled={isUploading}
              onClick={() => fileInputRef.current?.click()}
              className="neo-btn py-1 px-3 text-white border-0 fw-bold"
              style={{ fontSize: '12px', background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(8px)' }}
            >
              <i className="fa-solid fa-camera me-1"></i> Change Photo
            </button>
            <button
              type="button"
              disabled={isUploading}
              onClick={handleClear}
              className="neo-circle text-danger border-0"
              style={{ width: '36px', height: '36px', fontSize: '13px' }}
              title="Remove photo"
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>

          {isUploading && (
            <div
              className="position-absolute d-flex flex-column align-items-center justify-content-center"
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(15, 23, 42, 0.75)',
                color: '#fff',
                backdropFilter: 'blur(4px)',
              }}
            >
              <i className="fa-solid fa-spinner fa-spin fs-2 mb-2" style={{ color: 'var(--neo-primary)' }}></i>
              <span className="small fw-bold">Uploading &amp; Optimizing...</span>
            </div>
          )}
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="neo-card p-4 text-center"
          style={{
            cursor: 'pointer',
            border: '2px dashed rgba(170, 132, 83, 0.45)',
          }}
        >
          <div
            className="neo-circle mx-auto mb-2"
            style={{ width: '52px', height: '52px', color: 'var(--neo-primary)', fontSize: '20px' }}
          >
            <i className="fa-solid fa-cloud-arrow-up"></i>
          </div>
          <h6 className="fw-bold mb-1 text-dark" style={{ fontSize: '15px' }}>
            Click or Tap to Upload Photo
          </h6>
          <p className="small text-muted mb-0" style={{ fontSize: '12px' }}>
            JPG, PNG, WebP or AVIF (Max 10MB) · Stored automatically in{' '}
            <strong className="text-dark">R2 / Local Storage</strong>.
          </p>
        </div>
      )}
    </div>
  );
}
