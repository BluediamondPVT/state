import fs from 'fs/promises';
import path from 'path';

/**
 * Saves an uploaded image file directly to the local disk in public/uploads/<subDir>
 * Acts as the default storage engine when Cloudflare R2 credentials are not configured.
 */
export async function uploadToLocalDisk(
  fileBuffer: Buffer,
  filename: string,
  subDir = 'properties'
): Promise<string> {
  const uploadDir = path.join(process.cwd(), 'public', 'uploads', subDir);
  await fs.mkdir(uploadDir, { recursive: true });

  const filePath = path.join(uploadDir, filename);
  await fs.writeFile(filePath, fileBuffer);

  return `/uploads/${subDir}/${filename}`;
}
