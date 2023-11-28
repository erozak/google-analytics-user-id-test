import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};


export function middleware(request: NextRequest): NextResponse | void {
  return trackingMiddleware(request);
}

function trackingMiddleware(request: NextRequest): NextResponse | void {
  const trackingIdCookie = request.cookies.get('tid');

  if (trackingIdCookie) return;

  const response = NextResponse.next();

  const trackingId = generateTrackingId();

  response.cookies.set('tid', trackingId);

  return response;
}

function generateTrackingId(): string {
  return Math.round(Math.random() * /* max 32bit pos int */ 2_147_483_647).toString(16);
}
