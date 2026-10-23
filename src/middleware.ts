import { NextRequest, NextResponse } from 'next/server';
import { verifySessionToken, ADMIN_COOKIE_NAME } from '@/lib/auth';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value;

  const isAdminRoute = pathname === '/admin' || pathname.startsWith('/admin/');
  const isLoginRoute = pathname === '/login';

  // 1. Guard Admin Routes
  if (isAdminRoute) {
    if (!token) {
      const loginUrl = new URL('/login', req.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }

    const session = await verifySessionToken(token);
    if (!session) {
      const loginUrl = new URL('/login', req.url);
      loginUrl.searchParams.set('redirect', pathname);
      const response = NextResponse.redirect(loginUrl);
      // Clean invalid cookie
      response.cookies.delete(ADMIN_COOKIE_NAME);
      return response;
    }

    return NextResponse.next();
  }

  // 2. Redirect logged-in users away from /login to /admin
  if (isLoginRoute && token) {
    const session = await verifySessionToken(token);
    if (session) {
      const redirectParam = req.nextUrl.searchParams.get('redirect');
      const targetUrl = redirectParam && redirectParam.startsWith('/admin') ? redirectParam : '/admin';
      return NextResponse.redirect(new URL(targetUrl, req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*', '/login'],
};
