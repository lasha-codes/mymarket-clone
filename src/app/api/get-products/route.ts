import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'

export async function POST(request: Request) {
  const [loggedUser, body]: any = await Promise.all([
    currentUser(),
    request.json(),
  ])
  return NextResponse.json({
    data: body,
  })
}
