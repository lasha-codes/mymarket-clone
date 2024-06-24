import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// const main = async () => {
// const orders = await prisma.orders.deleteMany()
// const messages = await prisma.messages.deleteMany()
// await prisma.offers.deleteMany()
// return messages
// }
//
// main().then((messages_orders) => {
// console.log(messages_orders)
// })

export default prisma
