import { Messages } from '@prisma/client'

const Message = ({ messages }: { messages: Messages }) => {
  console.log(messages)
  return <div>Messages</div>
}

export default Message
