import { NextResponse } from 'next/server'
import { clearSessionCookie } from '@/lib/auth'

export async function POST() {
  const response = NextResponse.json({ ok: true })
  const cookieOptions = clearSessionCookie()
  response.cookies.set(cookieOptions)
  return response
}
