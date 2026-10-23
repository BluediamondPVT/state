import { NextRequest, NextResponse } from 'next/server';
import { loginSchema } from '@/lib/validations/auth';
import { comparePassword, createSessionToken, ADMIN_COOKIE_NAME } from '@/lib/auth';
import prisma from '@/lib/prisma';

// Fallback emergency admin credentials for instant local testing before live DB connection
const FALLBACK_ADMIN = {
  id: 'local-admin-taimur',
  email: 'admin@taimurrealestate.com',
  name: 'Taimur Real Estate Admin',
  role: 'superadmin',
  // Taimur@2026
  plainPassword: 'Taimur@2026',
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Zod Validation
    const validationResult = loginSchema.safeParse(body);
    if (!validationResult.success) {
      const issue = validationResult.error.issues[0];
      return NextResponse.json(
        { success: false, error: issue?.message || 'Invalid input data' },
        { status: 400 }
      );
    }

    const { email, password } = validationResult.data;
    const normalizedEmail = email.toLowerCase().trim();

    let authenticatedUser: { id: string; email: string; name: string; role: string } | null = null;

    // 2. Try database authentication
    try {
      const dbUser = await prisma.user.findUnique({
        where: { email: normalizedEmail },
      });

      if (dbUser) {
        const isMatch = await comparePassword(password, dbUser.passwordHash);
        if (isMatch) {
          authenticatedUser = {
            id: dbUser.id,
            email: dbUser.email,
            name: dbUser.name,
            role: dbUser.role,
          };
        }
      }
    } catch (dbError) {
      console.warn('Prisma DB lookup warning, attempting fallback verification:', dbError);
    }

    // 3. Dev Fallback verification if database has not yet been seeded or connected
    if (!authenticatedUser) {
      if (
        normalizedEmail === FALLBACK_ADMIN.email.toLowerCase() &&
        password === FALLBACK_ADMIN.plainPassword
      ) {
        authenticatedUser = {
          id: FALLBACK_ADMIN.id,
          email: FALLBACK_ADMIN.email,
          name: FALLBACK_ADMIN.name,
          role: FALLBACK_ADMIN.role,
        };
      }
    }

    // 4. Invalid credentials check
    if (!authenticatedUser) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address or password. Please try again.' },
        { status: 401 }
      );
    }

    // 5. Create Signed JWT Token
    const token = await createSessionToken(authenticatedUser);

    // 6. Set HttpOnly Cookie
    const response = NextResponse.json({
      success: true,
      message: 'Logged in successfully',
      user: authenticatedUser,
    });

    response.cookies.set({
      name: ADMIN_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
