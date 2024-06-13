'use client'
import { useSelector } from 'react-redux'
import Message from './_components/Message'
import { Messages } from '@prisma/client'

const InboxPage = () => {
  const { messages, users } = useSelector((state: any) => state.messages)

  return (
    <div>
      {messages?.sent_messages &&
        messages.sent_messages.map((message: Messages) => {
          return <Message sent_message={message} users={users.users} />
        })}
    </div>
  )
}

export default InboxPage
