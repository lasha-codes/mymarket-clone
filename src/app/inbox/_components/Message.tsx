import { Messages, User } from '@prisma/client'

const getUsers = (users: User[], recipientId: string, senderId: string) => {
  const sender = users.find((user) => {
    return user.id === senderId
  })
  const recipient = users.find((user) => {
    return user.id === recipientId
  })

  return { sender, recipient }
}

const Message = ({
  sent_message,
  users,
}: {
  sent_message: Messages
  users: User[]
}) => {
  console.log(users)
  const { sender, recipient } = getUsers(
    users,
    sent_message.recipient,
    sent_message.userId
  )

  console.log(sender, recipient)

  return <div>Messages</div>
}

export default Message
