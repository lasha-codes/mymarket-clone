import { NextResponse } from 'next/server'
import prisma from '@/db/db'
import { currentUser } from '@clerk/nextjs/server'

export async function GET(request: Request) {
  try {
    const signedUser = await currentUser()

    if (!signedUser) {
      return NextResponse.json({
        message: 'We could not retrieve the user data',
      })
    }

    const uniqueEmail = signedUser?.emailAddresses[0].emailAddress

    const userFromTheDB = await prisma.user.findUnique({
      where: { email: uniqueEmail },
    })

    if (!userFromTheDB) {
      return NextResponse.json({ message: 'User is not saved in our database' })
    }

    const receivedMessages = await prisma.messages.findMany({
      where: {
        recipient: userFromTheDB.id,
      },
    })

    const sentMessages = await prisma.messages.findMany({
      where: { userId: userFromTheDB.id },
    })

    if (!receivedMessages || !sentMessages) {
      return NextResponse.json({ messages: [] })
    }

    return NextResponse.json({
      received_messages: receivedMessages,
      sent_messages: sentMessages,
    })
  } catch (err: any) {
    return NextResponse.json({ message: err.message })
  }
}
