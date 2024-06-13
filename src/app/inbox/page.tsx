'use client'
import { useSelector } from 'react-redux'
import Message from './_components/Message'

const InboxPage = () => {
  const { messages } = useSelector((state: any) => state.messages)
  console.log(messages.sent_messages)
  return (
    <div>
      <Message messages={messages && messages} />
    </div>
  )
}

export default InboxPage
