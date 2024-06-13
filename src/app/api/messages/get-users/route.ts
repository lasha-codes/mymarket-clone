import prisma from '@/db/db'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { recipientId, senderId }: { recipientId: string; senderId: string } =
      await request.json()

    const sender = await prisma.user.findUnique({
      where: { id: senderId },
    })
    const recipient = await prisma.user.findUnique({
      where: { id: recipientId },
    })

    if (!sender || !recipient) {
      return NextResponse.json({ message: 'We could not find the users' })
    }

    return NextResponse.json({ users: { sender, recipient } })
  } catch (err: any) {
    return NextResponse.json({ message: err.message })
  }
}
