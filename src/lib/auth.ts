import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';

export const ADMIN_COOKIE_NAME = process.env.ADMIN_SESSION_COOKIE || 'taimur_admin_session';

const JWT_SECRET_STRING =
  process.env.JWT_SECRET || 'taimur_real_estate_jwt_secret_key_change_in_production_min_32_chars';

const secretKey = new TextEncoder().encode(JWT_SECRET_STRING);

export interface SessionPayload {
  id: string;
  email: string;
  name: string;
  role: string;
}

// Create Signed JWT using jose (compatible with Edge Middleware & Node runtime)
export async function createSessionToken(payload: SessionPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secretKey);
}

// Verify JWT token
export async function verifySessionToken(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secretKey);
    return {
      id: (payload.id as string) || '',
      email: (payload.email as string) || '',
      name: (payload.name as string) || '',
      role: (payload.role as string) || 'admin',
    };
  } catch {
    return null;
  }
}

// Hash password with bcrypt
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

// Compare password with hash
export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
