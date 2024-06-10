import prisma from '@/db/db'
import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'

export async function GET() {
  try {
    const products = await prisma.product.findMany()
    if (!products) {
      return NextResponse.json({ message: "Couldn't find any products" })
    }
    return NextResponse.json({ products })
  } catch (err: any) {
    return NextResponse.json({ message: err.message })
  }
}

export async function POST(request: Request) {
  try {
    const [loggedUser, body]: any = await Promise.all([
      currentUser(),
      request.json(),
    ])

    console.log(body)

    const seller = await prisma.user.findUnique({
      where: { email: loggedUser.emailAddresses[0].emailAddress },
    })

    if (!seller) {
      return NextResponse.json({
        message: 'Error occurred identifying the seller',
      })
    }

    const createdProduct = await prisma.product.create({
      data: {
        name: body.productTitle as string,
        user: {
          connect: {
            id: seller.id,
          },
        } as any,

        description: body.productDesc as string,
        images: body.productImages as string[],
        price: Number(body.productPrice),
        bill: body.selectedBill as string,
        category: body.selectedCategory as string,
        priceDealType: body.selectedPriceOffers as string[],
        location: body.sellerLocation as string,
        contactName: body.sellerName as string,
        contactNumber: Number(body.sellerPhone),
        youtubeURL: body.youtubeURL as string,
        type: body.selectedType as string,
        condition: body.productCondition as string,
      },
      select: { name: true, images: true, price: true, description: true },
    })

    return NextResponse.json({
      createdProduct,
    })
  } catch (err: any) {
    return NextResponse.json({
      error: err.message,
    })
  }
}
