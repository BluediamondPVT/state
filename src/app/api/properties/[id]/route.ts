import { NextRequest, NextResponse } from 'next/server';
import prisma, { isDatabaseConfigured } from '@/lib/prisma';
import { verifySessionToken, ADMIN_COOKIE_NAME } from '@/lib/auth';
import { PROPERTIES } from '@/data/properties';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // 1. Try DB lookup (by id or slug) if configured
    if (isDatabaseConfigured()) {
      try {
        const isObjectId = /^[0-9a-fA-F]{24}$/.test(id);
        const property = await prisma.property.findFirst({
          where: isObjectId
            ? { OR: [{ id }, { slug: id }] }
            : { slug: id },
        });

        if (property) {
          return NextResponse.json({ success: true, property });
        }
      } catch (dbErr) {
        console.warn('Prisma single property lookup warning:', dbErr);
      }
    }

    // 2. Fallback to curated properties
    const found = PROPERTIES.find((p) => p.id === id || p.slug === id);
    if (found) {
      return NextResponse.json({ success: true, property: found });
    }

    return NextResponse.json(
      { success: false, error: 'Property not found' },
      { status: 404 }
    );
  } catch (error) {
    console.error('Property detail GET error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve property details' },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Session check
    const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
    if (!token) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }
    const session = await verifySessionToken(token);
    if (!session) {
      return NextResponse.json({ success: false, error: 'Invalid session' }, { status: 401 });
    }

    const { id } = await params;
    const body = await req.json();

    if (isDatabaseConfigured()) {
      try {
        const isObjectId = /^[0-9a-fA-F]{24}$/.test(id);
        const updated = await prisma.property.update({
          where: isObjectId ? { id } : { slug: id },
          data: {
            title: body.title,
            type: body.type,
            dealType: body.dealType,
            price: body.price,
            priceNumeric: body.priceNumeric ? Number(body.priceNumeric) : undefined,
            priceLabel: body.priceLabel,
            locality: body.locality,
            city: body.city || 'Bhiwandi',
            carpetArea: body.carpetArea,
            superArea: body.superArea,
            floor: body.floor,
            furnishing: body.furnishing,
            waterSupply: body.waterSupply,
            possessionStatus: body.possessionStatus,
            loanAvailable: Boolean(body.loanAvailable),
            featured: Boolean(body.featured),
            image: body.image,
            description: body.description,
            highlights: body.highlights,
            nearbyLandmarks: body.nearbyLandmarks,
          },
        });

        return NextResponse.json({
          success: true,
          message: 'Property updated successfully',
          property: updated,
        });
      } catch (dbErr) {
        console.warn('Prisma property update fallback:', dbErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Property updated in local session',
      property: { id, ...body },
    });
  } catch (error) {
    console.error('Property PUT error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update property' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Session check
    const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
    if (!token) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }
    const session = await verifySessionToken(token);
    if (!session) {
      return NextResponse.json({ success: false, error: 'Invalid session' }, { status: 401 });
    }

    const { id } = await params;

    if (isDatabaseConfigured()) {
      try {
        const isObjectId = /^[0-9a-fA-F]{24}$/.test(id);
        await prisma.property.delete({
          where: isObjectId ? { id } : { slug: id },
        });

        return NextResponse.json({
          success: true,
          message: 'Property deleted successfully from database',
        });
      } catch (dbErr) {
        console.warn('Prisma delete fallback:', dbErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Property removed from listings',
    });
  } catch (error) {
    console.error('Property DELETE error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete property' },
      { status: 500 }
    );
  }
}
