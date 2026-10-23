import { PrismaClient } from '@prisma/client';

/**
 * Returns true if a live, non-placeholder MongoDB connection string is provided in the environment.
 */
export function isDatabaseConfigured(): boolean {
  const url = process.env.DATABASE_URL;
  if (
    !url ||
    url.includes('cluster0.mongodb.net') ||
    url.includes('<username>') ||
    url.includes('taimur2026')
  ) {
    return false;
  }
  return true;
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
