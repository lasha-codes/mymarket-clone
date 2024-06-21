import prisma from '@/db/db'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const users = await prisma.user.findMany()
    return NextResponse.json({ users })
  } catch (err: any) {
    return NextResponse.json({ message: err.message })
  }
}
