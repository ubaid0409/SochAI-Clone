import { NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(req) {
  const { pathname } = req.nextUrl

  // Allow public files, api routes, and auth routes
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/auth') ||
    pathname === '/' ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  // Protect chat/deep-jugar/dashboard
  const token = req.cookies.get('token')?.value
  if (!token && (pathname.startsWith('/chat') || pathname.startsWith('/deep-jugar') || pathname.startsWith('/dashboard'))) {
    const url = req.nextUrl.clone()
    url.pathname = '/auth/login'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
