import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Mock Authentication Logic
    const MOCK_EMAIL = 'admin@nextmind.com';
    const MOCK_PASSWORD = 'password123';

    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      // Set Auth Cookie
      // In a real app, use a secure, httpOnly jwt token
      const cookieStore = await cookies();
      cookieStore.set('auth_token', 'mock_jwt_token_12345', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });

      return NextResponse.json({ success: true, message: 'Login successful' });
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid email or password' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
