import prisma from '@/db/db'
import { currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const loggedUser = await currentUser()
    if (!loggedUser) {
      return NextResponse.json({ message: 'Could not read the user' })
    }
    const userFromTheDB = await prisma.user.findUnique({
      where: { email: loggedUser.emailAddresses[0].emailAddress },
    })

    return NextResponse.json({ user: userFromTheDB })
  } catch (err: any) {
    return NextResponse.json({ message: err.message })
  }
}
