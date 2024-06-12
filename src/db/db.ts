import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  const orders = await prisma.orders.deleteMany()
  return orders
}

main().then((orders) => {
  console.log(orders)
})

export default prisma
