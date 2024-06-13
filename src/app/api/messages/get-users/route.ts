import prisma from '@/db/db'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const users = await prisma.user.findMany()
    if (!users) {
      return NextResponse.json({ message: 'We have no users' })
    }
    return NextResponse.json({ users })
  } catch (err: any) {
    return NextResponse.json({ message: err.message })
  }
}
