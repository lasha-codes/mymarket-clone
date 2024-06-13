'use client'
import { useSelector } from 'react-redux'
import Message from './_components/Message'
import { Messages } from '@prisma/client'

const InboxPage = () => {
  const { messages, users } = useSelector((state: any) => state.messages)

  return (
    <div className='flex flex-col w-full justify-between p-10 gap-5'>
      <div className='self-end'>
        {messages?.sent_messages &&
          messages.sent_messages.map((message: Messages) => {
            return (
              <Message
                key={message.id}
                sent_message={message}
                users={users.users}
                type='sent'
              />
            )
          })}
      </div>
      <div>
        {messages?.received_messages &&
          messages.received_messages.map((message: Messages) => {
            return (
              <Message
                key={message.id}
                received_message={message}
                users={users.users}
                type='received'
              />
            )
          })}
      </div>
    </div>
  )
}

export default InboxPage
