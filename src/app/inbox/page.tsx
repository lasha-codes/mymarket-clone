'use client'
import { useSelector } from 'react-redux'

const InboxPage = () => {
  const { messages } = useSelector((state: any) => state.messages)
  console.log(messages)
  return <div>InboxPage</div>
}

export default InboxPage
