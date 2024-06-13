'use client'
import { useSelector } from 'react-redux'
import Message from './_components/Message'
import { Messages } from '@prisma/client'

const InboxPage = () => {
  const { messages } = useSelector((state: any) => state.messages)

  return (
    <div>
      {messages?.sent_messages &&
        messages.sent_messages.map((message: Messages) => {
          return <Message messages={message} />
        })}
    </div>
  )
}

export default InboxPage
