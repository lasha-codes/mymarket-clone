import { NextResponse } from 'next/server'
import prisma from '@/db/db'

export async function POST(request: Request) {
  try {
    const { productId } = await request.json()
    const productById = await prisma.product.findUnique({
      where: { id: productId },
    })
    if (!productById) {
      return NextResponse.json({
        message: "couldn't find the product with the specified id",
      })
    }
    return NextResponse.json({ product: productById })
  } catch (err: any) {
    return NextResponse.json({ message: err.message })
  }
}
