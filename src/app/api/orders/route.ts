import prisma from '@/db/db'
import { currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const user = await currentUser()
    if (!user) {
      return NextResponse.json({ message: 'Unauthorized request' })
    }
    const userInDB = await prisma.user.findUnique({
      where: { email: user.emailAddresses[0].emailAddress },
    })

    if (!userInDB) {
      return NextResponse.json({ message: 'Could not find the user' })
    }

    const userOrders = await prisma.orders.findMany({
      where: { userId: userInDB.id },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ orders: userOrders })
  } catch (err) {
    console.log(err)
  }
}
