import { NextRequest, NextResponse } from 'next/server';
import { isR2Configured, uploadToR2 } from '@/lib/r2';
import { uploadToLocalDisk } from '@/lib/localUpload';
import { verifySessionToken, ADMIN_COOKIE_NAME } from '@/lib/auth';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/avif',
  'image/jpg',
];

export async function POST(req: NextRequest) {
  try {
    // 1. Session verification: only authorized staff can upload images
    const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Authentication required to upload media.' },
        { status: 401 }
      );
    }

    const session = await verifySessionToken(token);
    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Session expired. Please log in again.' },
        { status: 401 }
      );
    }

    // 2. Parse Multipart Form Data
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No image file provided in request.' },
        { status: 400 }
      );
    }

    // 3. Validation: MIME Type
    if (!ALLOWED_MIME_TYPES.includes(file.type.toLowerCase())) {
      return NextResponse.json(
        {
          success: false,
          error: `Invalid file type (${file.type}). Allowed types: JPG, PNG, WebP, AVIF.`,
        },
        { status: 400 }
      );
    }

    // 4. Validation: File Size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { success: false, error: 'File size exceeds maximum limit of 10MB.' },
        { status: 400 }
      );
    }

    // 5. Convert to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 6. Generate Clean & Unique Key
    const originalExt = file.name.split('.').pop()?.toLowerCase() || 'webp';
    const sanitizedBase = file.name
      .replace(/\.[^/.]+$/, '')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .slice(0, 30);
    const uniqueFilename = `${sanitizedBase || 'prop'}-${Date.now()}.${originalExt}`;

    // 7. Store File: Cloudflare R2 if configured, otherwise local disk fallback
    let publicUrl: string;
    let storageProvider: 'r2' | 'local';

    if (isR2Configured()) {
      const r2Key = `properties/${uniqueFilename}`;
      publicUrl = await uploadToR2(buffer, r2Key, file.type);
      storageProvider = 'r2';
    } else {
      publicUrl = await uploadToLocalDisk(buffer, uniqueFilename, 'properties');
      storageProvider = 'local';
    }

    return NextResponse.json({
      success: true,
      message: `Image uploaded successfully via ${storageProvider === 'r2' ? 'Cloudflare R2' : 'Local Storage Fallback'}`,
      url: publicUrl,
      filename: uniqueFilename,
      size: file.size,
      storage: storageProvider,
    });
  } catch (error) {
    console.error('Image upload error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to upload image. Please try again.' },
      { status: 500 }
    );
  }
}
