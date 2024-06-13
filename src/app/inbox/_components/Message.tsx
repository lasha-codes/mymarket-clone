import { Messages } from '@prisma/client'
import prisma from '@/db/db'

const getUsers = async (senderId: string, recipientId: string) => {
  try {
    const senderUser = await prisma.user.findUnique({
      where: {
        id: senderId,
      },
    })
    const recipientUser = await prisma.user.findUnique({
      where: { id: recipientId },
    })
    return { senderUser, recipientUser }
  } catch (err) {
    console.log(err)
  }
}

const Message = ({ messages }: { messages?: Messages }) => {
  return <div>Messages</div>
}

export default Message
