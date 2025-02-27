import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  const { password } = await request.json()

  if (password === process.env.APP_PASSWORD) {
    const cookieStore = cookies()
    cookieStore.set("auth", "true", { httpOnly: true, secure: true })
    return NextResponse.json({ success: true })
  }

  return NextResponse.json({ success: false }, { status: 401 })
}

