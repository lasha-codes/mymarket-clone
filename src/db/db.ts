import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const users = prisma.user.findMany()
  return users
}

main().then((users: User[]) => {
  console.log(users)
})

export default prisma
