import prisma from '@/db/db'
import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'

export async function GET() {
  try {
    const offers = await prisma.offers.findMany()
    return NextResponse.json({ offers })
  } catch (err: any) {
    return NextResponse.json({ message: err.message })
  }
}

export async function POST(request: Request) {
  try {
    const { sellerId, price, productId, message_id } = await request.json()
    const loggedUser = await currentUser()
    if (!loggedUser) {
      return NextResponse.json({ message: 'Could not find the user' })
    }
    const userInDb = await prisma.user.findUnique({
      where: { email: loggedUser.emailAddresses[0].emailAddress },
    })
    if (!userInDb) {
      return NextResponse.json({
        message: 'User with this email does not exist in the database.',
      })
    }

    await prisma.messages.update({
      where: { id: message_id },
      data: { acepted: true },
    })

    const product = await prisma.product.findUnique({
      where: { id: productId },
    })

    if (!product) {
      return NextResponse.json({ message: 'something went wrong' })
    }

    const createdOffer = await prisma.offers.create({
      data: {
        sellerId: sellerId,
        senderId: product?.userId,
        product: {
          connect: {
            id: productId,
          },
        },
        price,
      },
    })
    if (createdOffer) {
      return NextResponse.json({ acceptedOffer: createdOffer })
    } else {
      return NextResponse.json({ message: 'something went wrong' })
    }
  } catch (err: any) {
    return NextResponse.json({ message: err.message })
  }
}
