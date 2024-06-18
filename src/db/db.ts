import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  const first_product = await prisma.product.findFirst({
    select: { inStock: true, availableForPurchase: true },
    where: { name: 'Asus ROG Strix G18 გეიმინგ ლეპტოპი' },
  })
  return first_product
}

main().then((messages_orders) => {
  console.log(messages_orders)
})

export default prisma
