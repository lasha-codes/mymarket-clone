import { PrismaClient, Product } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const products = prisma.product.findMany()
  return products
}

main().then((products: Product[]) => {
  console.log(products)
})

export default prisma
