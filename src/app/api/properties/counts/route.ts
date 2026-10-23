import { NextResponse } from 'next/server';
import prisma, { isDatabaseConfigured } from '@/lib/prisma';
import { PROPERTIES } from '@/data/properties';

export async function GET() {
  try {
    // 1. Try DB counts if live DB is configured
    if (isDatabaseConfigured()) {
      try {
        const properties = await prisma.property.findMany({
          where: { published: true },
          select: { type: true, dealType: true },
        });

        if (properties && properties.length > 0) {
          const byType: Record<string, number> = {};
          const byDeal: Record<string, number> = {};

          for (const p of properties) {
            byType[p.type] = (byType[p.type] || 0) + 1;
            byDeal[p.dealType] = (byDeal[p.dealType] || 0) + 1;
          }

          return NextResponse.json({
            success: true,
            total: properties.length,
            byType,
            byDeal,
          });
        }
      } catch (dbErr) {
        console.warn('Prisma counts lookup fallback to curated properties:', dbErr);
      }
    }

    // 2. Fallback to curated data
    const byType: Record<string, number> = {};
    const byDeal: Record<string, number> = {};

    for (const p of PROPERTIES) {
      byType[p.type] = (byType[p.type] || 0) + 1;
      byDeal[p.dealType] = (byDeal[p.dealType] || 0) + 1;
    }

    return NextResponse.json({
      success: true,
      total: PROPERTIES.length,
      byType,
      byDeal,
    });
  } catch (error) {
    console.error('Counts GET error:', error);
    return NextResponse.json({ success: false, error: 'Failed to get counts' }, { status: 500 });
  }
}
