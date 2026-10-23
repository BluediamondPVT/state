import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const accountId = process.env.R2_ACCOUNT_ID;
const accessKeyId = process.env.R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
const bucketName = process.env.R2_BUCKET_NAME;
const publicUrl = process.env.R2_PUBLIC_URL;

/**
 * Returns true if real Cloudflare R2 environment credentials are provided.
 */
export function isR2Configured(): boolean {
  if (!accountId || !accessKeyId || !secretAccessKey || !bucketName) {
    return false;
  }
  // Ignore placeholder values from .env.example
  if (
    accountId.includes('your_') ||
    accessKeyId.includes('your_') ||
    secretAccessKey.includes('your_')
  ) {
    return false;
  }
  return true;
}

let s3ClientInstance: S3Client | null = null;

function getS3Client(): S3Client {
  if (!s3ClientInstance) {
    if (!isR2Configured()) {
      throw new Error('Cloudflare R2 is not configured in environment variables.');
    }
    s3ClientInstance = new S3Client({
      region: 'auto',
      endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: accessKeyId!,
        secretAccessKey: secretAccessKey!,
      },
    });
  }
  return s3ClientInstance;
}

/**
 * Uploads an image buffer directly to Cloudflare R2 and returns its public CDN URL.
 */
export async function uploadToR2(
  fileBuffer: Buffer,
  key: string,
  contentType: string
): Promise<string> {
  const s3 = getS3Client();

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: key,
    Body: fileBuffer,
    ContentType: contentType,
  });

  await s3.send(command);

  if (publicUrl && !publicUrl.includes('your_hash')) {
    return `${publicUrl.replace(/\/$/, '')}/${key}`;
  }

  // Fallback direct endpoint URL
  return `https://${bucketName}.${accountId}.r2.cloudflarestorage.com/${key}`;
}
