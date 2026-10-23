import { NextRequest, NextResponse } from 'next/server';
import prisma, { isDatabaseConfigured } from '@/lib/prisma';
import { leadInputSchema } from '@/lib/validations/property';
import { verifySessionToken, ADMIN_COOKIE_NAME } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
    if (!token) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }
    const session = await verifySessionToken(token);
    if (!session) {
      return NextResponse.json({ success: false, error: 'Invalid session' }, { status: 401 });
    }

    if (isDatabaseConfigured()) {
      try {
        const leads = await prisma.lead.findMany({
          orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json({ success: true, leads });
      } catch (dbErr) {
        console.warn('Prisma leads query fallback:', dbErr);
      }
    }
      return NextResponse.json({
        success: true,
        leads: [
          {
            id: 'lead-1',
            name: 'Sameer Ansari',
            phone: '+91 98201 12345',
            locality: 'Dhamankar Naka',
            type: '2 BHK',
            message: 'Looking for 2 BHK near flyover, have bank loan approved.',
            status: 'new',
            createdAt: new Date().toISOString(),
          },
          {
            id: 'lead-2',
            name: 'Kiran Patil',
            phone: '+91 97654 67890',
            locality: 'Anjur Phata',
            type: 'Heavy Deposit',
            message: 'Need 1 BHK heavy deposit (₹3.5L to ₹4L range).',
            status: 'contacted',
            createdAt: new Date(Date.now() - 3600000).toISOString(),
          },
        ],
      });
  } catch (error) {
    console.error('Leads GET error:', error);
    return NextResponse.json({ success: false, error: 'Failed to retrieve leads' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validationResult = leadInputSchema.safeParse(body);

    if (!validationResult.success) {
      const issue = validationResult.error.issues[0];
      return NextResponse.json(
        { success: false, error: issue?.message || 'Invalid lead submission' },
        { status: 400 }
      );
    }

    const { name, phone, propertyId, locality, type, message } = validationResult.data;

    if (isDatabaseConfigured()) {
      try {
        const newLead = await prisma.lead.create({
          data: {
            name,
            phone,
            propertyId,
            locality,
            type,
            message,
            status: 'new',
          },
        });

        return NextResponse.json({
          success: true,
          message: 'Inquiry received. Taimur Real Estate will contact you shortly.',
          lead: newLead,
        });
      } catch (dbErr) {
        console.warn('Prisma lead create fallback:', dbErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry received. Taimur Real Estate will contact you shortly.',
      lead: { id: `lead-${Date.now()}`, name, phone, status: 'new' },
    });
  } catch (error) {
    console.error('Lead POST error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit inquiry' },
      { status: 500 }
    );
  }
}
