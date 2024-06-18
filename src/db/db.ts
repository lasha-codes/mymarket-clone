import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  const first_product = await prisma.product.findFirst({
    select: { inStock: true, availableForPurchase: true },
    where: { id: 'fa878913-c353-42c0-a972-63ebd6edd8d7' },
  })
  return first_product
}

main().then((messages_orders) => {
  console.log(messages_orders)
})

export default prisma
