import prisma from '@/db/db'
import { currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const loggedUser = await currentUser()
    if (!loggedUser) {
      return NextResponse.json({ message: 'Could not read the user' })
    }
    const currentUserInDb = await prisma.user.findUnique({
      where: { email: loggedUser.emailAddresses[0].emailAddress },
    })
    if (!currentUserInDb) {
      return NextResponse.json({ message: '' })
    }
    const myProducts = await prisma.product.findMany({
      where: { userId: currentUserInDb?.id },
    })

    if (!myProducts) {
      return NextResponse.json({ userProducts: [] })
    } else {
      return NextResponse.json({ userProducts: myProducts })
    }
  } catch (err: any) {
    return NextResponse.json({ message: err.message })
  }
}
