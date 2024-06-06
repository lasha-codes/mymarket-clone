'use server'
import { currentUser } from '@clerk/nextjs/server'
import prisma from '@/db/db'

export const registerAccount = async () => {
  try {
    const user = await currentUser()
    if (!user) {
      return
    }
    const userEmailAddress = user?.primaryEmailAddress?.emailAddress
    const userExists = await prisma.user.findUnique({
      where: { email: userEmailAddress },
      select: { email: true },
    })
    if (userExists) return
    const username: any = user.username || userEmailAddress?.split('@')[0]
    const createdUser = await prisma.user.create({
      data: {
        email: userEmailAddress as string,
        username,
        photo: user.imageUrl,
      },
    })
    console.log(createdUser)
  } catch (err) {
    console.log(err)
  }
}
