import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  const [orders, messages] = await Promise.all([
    prisma.orders.findMany(),
    prisma.messages.findMany(),
  ])
  return { orders, messages }
}

main().then((messages_orders) => {
  console.log(messages_orders)
})

export default prisma
