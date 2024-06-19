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

    if (!loggedUser) {
      return NextResponse.json({ message: 'We could not read the user' })
    }

    const buyer = await prisma.user.findUnique({
      where: { email: loggedUser?.emailAddresses[0].emailAddress },
    })

    if (!purchasedProduct) {
      return NextResponse.json({
        message: 'We could not find the purchased product',
      })
    }

    const productSeller = await prisma.user.findUnique({
      where: {
        id: purchasedProduct.userId,
      },
    })

    if (!productSeller) {
      return NextResponse.json({
        message: 'We could not identify the seller of the product',
      })
    }

    if (purchasedProduct.inStock === 1) {
      await prisma.product.update({
        where: { id: purchasedProduct.id },
        data: {
          inStock: 0,
          availableForPurchase: false,
        },
      })
    } else {
      await prisma.product.update({
        where: { id: purchasedProduct.id },
        data: { inStock: purchasedProduct.inStock - 1 },
      })
    }

    const specificOrderExists = await prisma.orders.findFirst({
      where: {
        userId: buyer?.id,
        productId: purchasedProduct.id,
      },
    })

    if (specificOrderExists) {
      return NextResponse.json({
        order: specificOrderExists,
        message: 'This specific order already exists',
      })
    }

    const createdOrder = await prisma.orders.create({
      data: {
        user: {
          connect: {
            id: buyer?.id,
          },
        },
        product: {
          connect: {
            id: purchasedProduct.id,
          },
        },
      },
    })

    const createdMessage = await prisma.messages.create({
      data: {
        user: {
          connect: {
            id: buyer?.id,
          },
        },
        recipient: productSeller.id,
        message: `${buyer?.email} with the id of ${buyer?.id} has purchased the product ${purchasedProduct.name} with the id of ${purchasedProduct.id}`,
        type: 'Purchase',
      },
    })

    return NextResponse.json({
      createdOrder,
      createdMessage,
    })
  } catch (err: any) {
    return NextResponse.json({ message: err.message })
  }
}
