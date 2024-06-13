'use client'

import { Messages, User } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

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
  received_message,
  users,
}: {
  sent_message?: Messages
  users: User[]
  received_message?: Messages
}) => {
  const { sender, recipient } = getUsers(
    users,
    sent_message!.recipient,
    sent_message!.userId
  )

  const [showMessage, setShowMessage] = useState<boolean>(false)

  const ReturnSentMessageComponent = () => {
    if (sent_message && sent_message.type === 'Purchase') {
      return (
        <div className='bg-white shadow-md rounded-2xl px-5 py-3 flex flex-col gap-3 items-start max-w-[350px]'>
          <div className='flex items-center gap-3'>
            <div className='relative rounded-full overflow-hidden w-[30px] h-[30px]'>
              <Image
                src={sender?.photo as any}
                fill
                className='object-cover'
                alt='user profile'
              />
            </div>
            <div className='flex items-center gap-3'>
              <Link href='' className='text-[15px]'>
                თქვენ
              </Link>
              <span className='text-[13px] font-medium'>TO:</span>
              <Link href='' className='text-[15px]'>
                {recipient?.username}
              </Link>
            </div>
          </div>
          <div>
            <p className='text-sm text-slate-500'>{sent_message.message}</p>
          </div>
        </div>
      )
    }
  }

  return <ReturnSentMessageComponent />
}

export default Message
