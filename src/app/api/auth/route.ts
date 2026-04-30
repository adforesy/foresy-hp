import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { password } = await request.json()

  if (password === process.env.SITE_PASSWORD) {
    const response = NextResponse.json({ ok: true })
    response.cookies.set('site-auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    })
    return response
  }

  return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
}
