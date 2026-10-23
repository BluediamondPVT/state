import { NextRequest, NextResponse } from 'next/server';
import prisma, { isDatabaseConfigured } from '@/lib/prisma';
import { propertyInputSchema } from '@/lib/validations/property';
import { verifySessionToken, ADMIN_COOKIE_NAME } from '@/lib/auth';
import { PROPERTIES } from '@/data/properties';

// In-memory fallback cache for smooth local testing if MongoDB Atlas is not yet seeded
let memoryProperties = [...PROPERTIES];

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type');
    const dealType = searchParams.get('dealType');
    const locality = searchParams.get('locality');
    const featured = searchParams.get('featured');
    const search = searchParams.get('search');

    // 1. Try fetching from MongoDB if configured
    if (isDatabaseConfigured()) {
      try {
        const where: Record<string, unknown> = {
          published: true,
        };

        if (type && type !== 'All') where.type = type;
        if (dealType && dealType !== 'All') where.dealType = dealType;
        if (locality && locality !== 'All') where.locality = { contains: locality, mode: 'insensitive' };
        if (featured === 'true') where.featured = true;
        if (search) {
          where.OR = [
            { title: { contains: search, mode: 'insensitive' } },
            { locality: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
          ];
        }

        const dbProperties = await prisma.property.findMany({
          where,
          orderBy: { createdAt: 'desc' },
        });

        if (dbProperties && dbProperties.length > 0) {
          return NextResponse.json({
            success: true,
            source: 'database',
            total: dbProperties.length,
            properties: dbProperties,
          });
        }
      } catch (dbErr) {
        console.warn('Prisma properties query fallback to curated data:', dbErr);
      }
    }

    // 2. Fallback to curated in-memory properties
    let filtered = [...memoryProperties];
    if (type && type !== 'All') filtered = filtered.filter((p) => p.type === type);
    if (dealType && dealType !== 'All') filtered = filtered.filter((p) => p.dealType === dealType);
    if (locality && locality !== 'All') filtered = filtered.filter((p) => p.locality.toLowerCase().includes(locality.toLowerCase()));
    if (featured === 'true') filtered = filtered.filter((p) => p.featured);
    if (search) {
      const s = search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(s) ||
          p.locality.toLowerCase().includes(s) ||
          p.description.toLowerCase().includes(s)
      );
    }

    return NextResponse.json({
      success: true,
      source: 'fallback',
      total: filtered.length,
      properties: filtered,
    });
  } catch (error) {
    console.error('Properties GET error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve properties' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    // 1. Session verification
    const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized: Admin login required' },
        { status: 401 }
      );
    }

    const session = await verifySessionToken(token);
    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized: Invalid or expired session' },
        { status: 401 }
      );
    }

    // 2. Parse and Validate Body
    const body = await req.json();
    const validationResult = propertyInputSchema.safeParse(body);

    if (!validationResult.success) {
      const issue = validationResult.error.issues[0];
      return NextResponse.json(
        { success: false, error: issue?.message || 'Invalid property input data' },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 3. Try creating in MongoDB
    if (isDatabaseConfigured()) {
      try {
        const created = await prisma.property.create({
          data: {
            slug: data.slug,
            title: data.title,
            type: data.type,
            dealType: data.dealType,
            price: data.price,
            priceNumeric: data.priceNumeric,
            priceLabel: data.priceLabel || '',
            locality: data.locality,
            city: data.city || 'Bhiwandi',
            carpetArea: data.carpetArea,
            superArea: data.superArea || '',
            bedrooms: data.bedrooms,
            bathrooms: data.bathrooms,
            balconies: data.balconies,
            floor: data.floor,
            furnishing: data.furnishing,
            waterSupply: data.waterSupply,
            possessionStatus: data.possessionStatus,
            loanAvailable: data.loanAvailable,
            featured: data.featured,
            published: data.published,
            image: data.image,
            gallery: data.gallery,
            description: data.description,
            highlights: data.highlights,
            nearbyLandmarks: data.nearbyLandmarks,
            viewsCount: 1,
            inquiriesCount: 0,
          },
        });

        // Update memory cache
        memoryProperties.unshift(created as unknown as (typeof PROPERTIES)[0]);

        return NextResponse.json({
          success: true,
          message: 'Property created successfully in database',
          property: created,
        });
      } catch (dbErr) {
        console.warn('Prisma property creation warning, saving to memory fallback:', dbErr);
      }
    }

      // Fallback property object
      const fallbackCreated = {
        id: `prop-${Date.now()}`,
        slug: data.slug,
        title: data.title,
        type: data.type,
        dealType: data.dealType,
        price: data.price,
        priceNumeric: data.priceNumeric,
        priceLabel: data.priceLabel || '',
        locality: data.locality,
        city: data.city || 'Bhiwandi',
        carpetArea: data.carpetArea,
        superArea: data.superArea || '',
        bedrooms: data.bedrooms,
        bathrooms: data.bathrooms,
        balconies: data.balconies,
        floor: data.floor,
        furnishing: data.furnishing,
        waterSupply: data.waterSupply,
        possessionStatus: data.possessionStatus,
        loanAvailable: data.loanAvailable,
        featured: data.featured,
        image: data.image,
        gallery: data.gallery,
        description: data.description,
        highlights: data.highlights,
        nearbyLandmarks: data.nearbyLandmarks,
      };

      memoryProperties.unshift(fallbackCreated);

      return NextResponse.json({
        success: true,
        message: 'Property published successfully',
        property: fallbackCreated,
      });
  } catch (error) {
    console.error('Property creation error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error while creating property' },
      { status: 500 }
    );
  }
}
