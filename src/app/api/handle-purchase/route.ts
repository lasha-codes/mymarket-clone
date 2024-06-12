import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'
import prisma from '@/db/db'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const [loggedUser, purchasedProduct] = await Promise.all([
      currentUser(),
      prisma.product.findUnique({
        where: { id: data.id },
      }),
    ])

    if (!purchasedProduct) {
      return NextResponse.json({
        message: 'We could not find the purchased product',
      })
    }

    if (!loggedUser) {
      return NextResponse.json({ message: 'We could not read the user' })
    }

    const buyer = await prisma.user.findUnique({
      where: { email: loggedUser?.emailAddresses[0].emailAddress },
    })

    return NextResponse.json({ buyer })
  } catch (err: any) {
    return NextResponse.json({ message: err.message })
  }
}
