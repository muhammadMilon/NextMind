import { NextResponse } from 'next/server';

export function middleware(request) {
  // Check for auth token in cookies
  const token = request.cookies.get('auth_token');

  // Protect /courses/add route
  if (request.nextUrl.pathname.startsWith('/courses/add')) {
    if (!token) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/courses/add'],
};
