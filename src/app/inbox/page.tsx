'use client'
import { useSelector } from 'react-redux'
import Message from './_components/Message'
import { Messages } from '@prisma/client'
import Header from '@/components/Header'

const InboxPage = () => {
  const { messages, users } = useSelector((state: any) => state.messages)

  return (
    <div className='bg-gray-100 max-h-screen overflow-hidden'>
      <Header />
      <main className='w-full h-screen flex flex-col items-start gap-8 bg-gray-100 py-5 justify-start px-[200px] max-2xl:px-[150px] max-lg:px-[80px] max-md:px-[35px] max-sm:px-[20px]'>
        <h2 className='mx-auto text-2xl font-semibold w-full'>შეტყობინებები</h2>
        <div className='flex flex-col w-full max-h-[700px] overflow-y-scroll mx-auto bg-white shadow-xl rounded-2xl justify-between py-16 px-10 gap-5'>
          <div className='self-end flex flex-col items-start gap-5'>
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
          <div className='flex flex-col items-start gap-5'>
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
      </main>
    </div>
  )
}

export default InboxPage
