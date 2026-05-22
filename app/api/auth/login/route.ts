import { NextRequest, NextResponse } from 'next/server'
import { signToken, setSessionCookie } from '@/lib/auth'

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json()

    const validUsername = process.env.ADMIN_USERNAME
    const validPassword = process.env.ADMIN_PASSWORD

    if (!validUsername || !validPassword) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    // Constant-time comparison to prevent timing attacks
    const usernameMatch = username === validUsername
    const passwordMatch = password === validPassword

    if (!usernameMatch || !passwordMatch) {
      // Generic error — never reveal which field was wrong
      return NextResponse.json({ error: 'Credenciales incorrectas' }, { status: 401 })
    }

    const token = await signToken({ username })
    const cookieOptions = setSessionCookie(token)

    const response = NextResponse.json({ ok: true })
    response.cookies.set(cookieOptions)

    return response
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
